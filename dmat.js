// dmat.js – Complete Controller for dMAT Testing & Submissions

(function () {
  'use strict';

  // State Management
  const state = {
    view: 'categories', // 'categories' | 'difficulties' | 'category-info' | 'exam' | 'results' | 'submissions'
    selectedCategory: null,
    selectedDifficulty: 'hard',
    candidateName: localStorage.getItem('dmat_last_candidate') || '',
    questions: [],
    currentIndex: 0,
    userAnswers: {}, // { [qId]: { A: '', B: '', C: '', D: '' } }
    flagged: new Set(),
    timerTotalSeconds: 25 * 60,
    timerRemainingSeconds: 25 * 60,
    timerInterval: null,
    examStartTime: null,
    examEndTime: null,
    lastResult: null
  };

  // DOM Elements cache
  let dom = {};

  function init() {
    cacheDom();
    bindEvents();
    initSubmissionsStorage();
    render();
  }

  function cacheDom() {
    dom = {
      // Views
      viewCategories: document.getElementById('view-categories'),
      viewDifficulties: document.getElementById('view-difficulties'),
      viewCatInfo: document.getElementById('view-category-info'),
      viewExam: document.getElementById('view-exam'),
      viewResults: document.getElementById('view-results'),
      submissionsModal: document.getElementById('modal-submissions'),
      nameModal: document.getElementById('modal-candidate-name'),
      detailsModal: document.getElementById('modal-sub-details'),

      // Buttons / interactive
      btnNavSubmissions: document.getElementById('btn-nav-submissions'),
      btnHeroSubmissions: document.getElementById('btn-hero-submissions'),
      btnBackToCategories: document.getElementById('btn-back-to-categories'),
      btnBackFromInfo: document.getElementById('btn-back-from-info'),
      btnConfirmStart: document.getElementById('btn-confirm-start'),
      btnCancelStart: document.getElementById('btn-cancel-start'),
      candidateNameInput: document.getElementById('input-candidate-name'),
      nameModalError: document.getElementById('name-modal-error'),

      // Exam components
      examTitle: document.getElementById('exam-title'),
      examCandidateName: document.getElementById('exam-candidate-name'),
      examTimer: document.getElementById('exam-timer'),
      examTimerProgress: document.getElementById('exam-timer-progress'),
      btnSubmitExam: document.getElementById('btn-submit-exam'),
      qPalette: document.getElementById('q-palette'),
      qCurrentNumber: document.getElementById('q-current-number'),
      qEquationsBox: document.getElementById('q-equations-box'),
      inputA: document.getElementById('ans-A'),
      inputB: document.getElementById('ans-B'),
      inputC: document.getElementById('ans-C'),
      inputD: document.getElementById('ans-D'),
      btnPrevQ: document.getElementById('btn-prev-q'),
      btnNextQ: document.getElementById('btn-next-q'),
      btnFlagQ: document.getElementById('btn-flag-q'),

      // Results
      resScore: document.getElementById('res-score'),
      resPercent: document.getElementById('res-percent'),
      resTimeTaken: document.getElementById('res-time-taken'),
      resTimeLeft: document.getElementById('res-time-left'),
      resCandidate: document.getElementById('res-candidate'),
      resBreakdown: document.getElementById('res-breakdown'),
      btnResultsSubmissions: document.getElementById('btn-results-submissions'),
      btnRetakeExam: document.getElementById('btn-retake-exam'),
      btnResultsHome: document.getElementById('btn-results-home'),

      // Submissions table & modal
      subTableBody: document.getElementById('submissions-table-body'),
      subCountBadge: document.getElementById('sub-count-badge'),
      subEmptyState: document.getElementById('submissions-empty-state'),
      btnCloseSubmissions: document.getElementById('btn-close-submissions'),
      btnExportCsv: document.getElementById('btn-export-csv'),
      subSearchInput: document.getElementById('sub-search-input'),

      // Submissions detail modal
      subDetailsBody: document.getElementById('sub-details-body'),
      btnCloseSubDetails: document.getElementById('btn-close-sub-details')
    };
  }

  function initSubmissionsStorage() {
    // Purge any old demo/sample records from localStorage
    try {
      const stored = localStorage.getItem('dmat_submissions');
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          const real = parsed.filter(s => s && s.id && !s.id.startsWith('sub-live-'));
          if (real.length !== parsed.length) {
            localStorage.setItem('dmat_submissions', JSON.stringify(real));
          }
        }
      }
    } catch (e) {}

    updateSubmissionsCount();

    // Live cross-device synchronization
    if (typeof CloudSync !== 'undefined') {
      CloudSync.fetchRemoteSubmissions().then(merged => {
        updateSubmissionsCount();
        if (dom.subTableBody && dom.submissionsModal && !dom.submissionsModal.classList.contains('hidden')) {
          renderSubmissionsTable();
        }
      }).catch(() => {});

      CloudSync.subscribeRealTime((newSub) => {
        updateSubmissionsCount();
        if (dom.subTableBody && dom.submissionsModal && !dom.submissionsModal.classList.contains('hidden')) {
          renderSubmissionsTable();
        }
      });
    }
  }

  function getSubmissions() {
    try {
      const stored = localStorage.getItem('dmat_submissions');
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          // Filter out any seeded sample records (sub-live-*)
          return parsed.filter(s => s && s.id && !s.id.startsWith('sub-live-'));
        }
      }
    } catch (e) {}
    return [];
  }

  function saveSubmissions(list) {
    localStorage.setItem('dmat_submissions', JSON.stringify(list));
    updateSubmissionsCount();
  }

  function updateSubmissionsCount() {
    const list = getSubmissions();
    const count = list.length;
    const badges = document.querySelectorAll('.sub-count-display');
    badges.forEach(b => {
      b.textContent = count;
    });
  }

  function bindEvents() {
    // Top nav & shortcuts
    if (dom.btnNavSubmissions) {
      dom.btnNavSubmissions.addEventListener('click', () => openSubmissionsModal());
    }
    if (dom.btnHeroSubmissions) {
      dom.btnHeroSubmissions.addEventListener('click', () => openSubmissionsModal());
    }
    if (dom.btnCloseSubmissions) {
      dom.btnCloseSubmissions.addEventListener('click', () => closeSubmissionsModal());
    }
    if (dom.btnBackToCategories) {
      dom.btnBackToCategories.addEventListener('click', () => setView('categories'));
    }
    if (dom.btnBackFromInfo) {
      dom.btnBackFromInfo.addEventListener('click', () => setView('categories'));
    }

    // Category clicks
    document.querySelectorAll('[data-category]').forEach(card => {
      card.addEventListener('click', () => {
        const catKey = card.getAttribute('data-category');
        handleCategoryClick(catKey);
      });
    });

    // Difficulty clicks
    document.querySelectorAll('[data-difficulty]').forEach(btn => {
      btn.addEventListener('click', () => {
        const diff = btn.getAttribute('data-difficulty');
        promptCandidateName(diff);
      });
    });

    // Candidate Name modal
    if (dom.btnConfirmStart) {
      dom.btnConfirmStart.addEventListener('click', confirmStartExam);
    }
    if (dom.btnCancelStart) {
      dom.btnCancelStart.addEventListener('click', () => {
        dom.nameModal.classList.add('hidden');
      });
    }
    if (dom.candidateNameInput) {
      dom.candidateNameInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') confirmStartExam();
      });
    }

    // Exam question answers input
    [dom.inputA, dom.inputB, dom.inputC, dom.inputD].forEach((inp, idx, arr) => {
      if (!inp) return;
      inp.addEventListener('input', (e) => {
        // Sanitize to integer in range 1..20
        let val = inp.value.replace(/\D/g, '');
        if (val !== '') {
          let num = parseInt(val, 10);
          if (num > 20) num = 20;
          if (num < 1 && val !== '') num = 1;
          inp.value = num;
        }
        saveCurrentInputValues();
        updatePaletteItem(state.currentIndex);
      });

      inp.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === 'ArrowRight') {
          if (idx < arr.length - 1) {
            arr[idx + 1].focus();
            arr[idx + 1].select();
          } else if (state.currentIndex < state.questions.length - 1) {
            goToQuestion(state.currentIndex + 1);
          }
        } else if (e.key === 'ArrowLeft' && idx > 0) {
          arr[idx - 1].focus();
          arr[idx - 1].select();
        }
      });
    });

    // Navigation buttons
    if (dom.btnPrevQ) {
      dom.btnPrevQ.addEventListener('click', () => {
        if (state.currentIndex > 0) goToQuestion(state.currentIndex - 1);
      });
    }
    if (dom.btnNextQ) {
      dom.btnNextQ.addEventListener('click', () => {
        if (state.currentIndex < state.questions.length - 1) {
          goToQuestion(state.currentIndex + 1);
        }
      });
    }
    if (dom.btnFlagQ) {
      dom.btnFlagQ.addEventListener('click', toggleFlagCurrentQuestion);
    }
    if (dom.btnSubmitExam) {
      dom.btnSubmitExam.addEventListener('click', handleManualSubmit);
    }

    // Results screen buttons
    if (dom.btnResultsSubmissions) {
      dom.btnResultsSubmissions.addEventListener('click', () => openSubmissionsModal());
    }
    if (dom.btnRetakeExam) {
      dom.btnRetakeExam.addEventListener('click', () => {
        promptCandidateName(state.selectedDifficulty);
      });
    }
    if (dom.btnResultsHome) {
      dom.btnResultsHome.addEventListener('click', () => setView('categories'));
    }

    // Submissions table utilities
    if (dom.btnExportCsv) {
      dom.btnExportCsv.addEventListener('click', exportSubmissionsCsv);
    }
    if (dom.subSearchInput) {
      dom.subSearchInput.addEventListener('input', () => renderSubmissionsTable());
    }
    if (dom.btnCloseSubDetails) {
      dom.btnCloseSubDetails.addEventListener('click', () => {
        dom.detailsModal.classList.add('hidden');
      });
    }
  }

  function setView(viewName) {
    state.view = viewName;
    const views = [
      dom.viewCategories,
      dom.viewDifficulties,
      dom.viewCatInfo,
      dom.viewExam,
      dom.viewResults
    ];

    views.forEach(v => {
      if (v) v.classList.add('hidden');
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (viewName === 'categories' && dom.viewCategories) {
      dom.viewCategories.classList.remove('hidden');
    } else if (viewName === 'difficulties' && dom.viewDifficulties) {
      dom.viewDifficulties.classList.remove('hidden');
    } else if (viewName === 'category-info' && dom.viewCatInfo) {
      dom.viewCatInfo.classList.remove('hidden');
    } else if (viewName === 'exam' && dom.viewExam) {
      dom.viewExam.classList.remove('hidden');
      document.body.classList.add('exam-active');
    } else if (viewName === 'results' && dom.viewResults) {
      dom.viewResults.classList.remove('hidden');
    }

    // Hide footer during exam
    if (viewName !== 'exam') {
      document.body.classList.remove('exam-active');
    }
  }

  function handleCategoryClick(catKey) {
    state.selectedCategory = catKey;
    if (catKey === 'math') {
      // 2. Mathematic Equations -> shows "Easy", "Medium", "Hard"
      setView('difficulties');
    } else {
      // Show info/overview for Figure Sequences, Latin Squares, Subject Modules
      renderCategoryInfo(catKey);
      setView('category-info');
    }
  }

  function renderCategoryInfo(catKey) {
    const info = DMAT_DATA.categoryInfo[catKey];
    if (!info) return;

    document.getElementById('cat-info-title').textContent = `${info.name} (${info.subtitle})`;
    document.getElementById('cat-info-desc').textContent = info.desc;

    const featContainer = document.getElementById('cat-info-features');
    featContainer.innerHTML = '';
    info.features.forEach(f => {
      const li = document.createElement('li');
      li.textContent = f;
      featContainer.appendChild(li);
    });

    const sampleWrap = document.getElementById('cat-info-sample-wrap');
    if (info.sample) {
      sampleWrap.classList.remove('hidden');
      document.getElementById('cat-info-sample').textContent = info.sample;
    } else {
      sampleWrap.classList.add('hidden');
    }
  }

  function promptCandidateName(difficulty) {
    state.selectedDifficulty = difficulty;
    dom.nameModalError.textContent = '';
    dom.candidateNameInput.value = state.candidateName || '';

    const label = document.getElementById('name-modal-diff-label');
    const timerLabel = document.getElementById('name-modal-timer-label');
    const qCountLabel = document.getElementById('name-modal-qcount-label');

    if (difficulty === 'hard_t2') {
      label.textContent = 'Hard Mode · Test 2 (New Questions)';
      timerLabel.textContent = '25 Minutes';
      qCountLabel.textContent = '20 System Questions';
      if (dom.btnConfirmStart) dom.btnConfirmStart.textContent = 'Begin Test 2 (25m) ➔';
    } else if (difficulty === 'hard' || difficulty === 'hard_t1') {
      label.textContent = 'Hard Mode · Test 1 (dMAT Standard)';
      timerLabel.textContent = '25 Minutes';
      qCountLabel.textContent = '20 System Questions';
      if (dom.btnConfirmStart) dom.btnConfirmStart.textContent = 'Begin Test 1 (25m) ➔';
    } else if (difficulty === 'medium') {
      label.textContent = 'Medium Mode · Intermediate';
      timerLabel.textContent = '15 Minutes';
      qCountLabel.textContent = '4 System Questions';
      if (dom.btnConfirmStart) dom.btnConfirmStart.textContent = 'Begin Medium Test (15m) ➔';
    } else {
      label.textContent = 'Easy Mode · Warm-Up';
      timerLabel.textContent = '10 Minutes';
      qCountLabel.textContent = '5 System Questions';
      if (dom.btnConfirmStart) dom.btnConfirmStart.textContent = 'Begin Easy Test (10m) ➔';
    }

    dom.nameModal.classList.remove('hidden');
    setTimeout(() => {
      dom.candidateNameInput.focus();
      dom.candidateNameInput.select();
    }, 100);
  }

  function confirmStartExam() {
    const name = dom.candidateNameInput.value.trim();
    if (!name) {
      dom.nameModalError.textContent = 'Please enter your name to start the exam.';
      dom.candidateNameInput.focus();
      return;
    }

    state.candidateName = name;
    localStorage.setItem('dmat_last_candidate', name);
    dom.nameModal.classList.add('hidden');

    startExam(state.selectedDifficulty);
  }

  function startExam(difficulty) {
    state.selectedDifficulty = difficulty;
    if (difficulty === 'hard_t2') {
      state.questions = (DMAT_DATA.hard_t2 || []).slice(0, 20);
    } else if (difficulty === 'hard' || difficulty === 'hard_t1') {
      state.questions = (DMAT_DATA.hard || []).slice(0, 20);
    } else if (difficulty === 'medium') {
      state.questions = DMAT_DATA.medium;
    } else {
      state.questions = DMAT_DATA.easy;
    }

    state.currentIndex = 0;
    state.userAnswers = {};
    state.flagged.clear();

    // Setup Timer
    if (difficulty === 'hard' || difficulty === 'hard_t1' || difficulty === 'hard_t2') {
      state.timerTotalSeconds = 25 * 60; // 25 minutes exactly
    } else if (difficulty === 'medium') {
      state.timerTotalSeconds = 15 * 60;
    } else {
      state.timerTotalSeconds = 10 * 60;
    }

    state.timerRemainingSeconds = state.timerTotalSeconds;
    state.examStartTime = new Date();
    state.examEndTime = null;

    // UI labels
    const diffLabel = (difficulty === 'hard_t2') ? 'Hard – Test 2'
      : (difficulty === 'hard' || difficulty === 'hard_t1') ? 'Hard – Test 1'
      : (difficulty.charAt(0).toUpperCase() + difficulty.slice(1));
    dom.examTitle.textContent = `Mathematic Equations – ${diffLabel}`;
    dom.examCandidateName.textContent = state.candidateName;

    // Render palette & question
    renderPalette();
    loadQuestion(0);

    // Start timer interval
    if (state.timerInterval) clearInterval(state.timerInterval);
    updateTimerDisplay();
    state.timerInterval = setInterval(handleTimerTick, 1000);

    setView('exam');
  }

  function handleTimerTick() {
    state.timerRemainingSeconds--;

    if (state.timerRemainingSeconds <= 0) {
      state.timerRemainingSeconds = 0;
      updateTimerDisplay();
      clearInterval(state.timerInterval);
      alert('Time is up! Your 25-minute exam is being automatically submitted.');
      finishExam('Timed Out');
      return;
    }

    updateTimerDisplay();
  }

  function updateTimerDisplay() {
    const m = Math.floor(state.timerRemainingSeconds / 60);
    const s = state.timerRemainingSeconds % 60;
    const timeStr = `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    dom.examTimer.textContent = timeStr;

    // Visual urgency classes
    dom.examTimer.classList.remove('timer-warning', 'timer-urgent');
    if (state.timerRemainingSeconds <= 60) {
      dom.examTimer.classList.add('timer-urgent');
    } else if (state.timerRemainingSeconds <= 5 * 60) {
      dom.examTimer.classList.add('timer-warning');
    }

    // Progress bar
    const pct = ((state.timerTotalSeconds - state.timerRemainingSeconds) / state.timerTotalSeconds) * 100;
    if (dom.examTimerProgress) {
      dom.examTimerProgress.style.width = `${pct}%`;
    }
  }

  function renderPalette() {
    dom.qPalette.innerHTML = '';
    state.questions.forEach((q, idx) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'palette-btn';
      btn.textContent = idx + 1;
      btn.setAttribute('data-idx', idx);
      btn.addEventListener('click', () => goToQuestion(idx));
      dom.qPalette.appendChild(btn);
    });
    updateAllPaletteItems();
  }

  function updateAllPaletteItems() {
    state.questions.forEach((q, idx) => {
      updatePaletteItem(idx);
    });
  }

  function updatePaletteItem(idx) {
    const btn = dom.qPalette.children[idx];
    if (!btn) return;

    btn.className = 'palette-btn';
    if (idx === state.currentIndex) {
      btn.classList.add('current');
    }

    const q = state.questions[idx];
    const ans = state.userAnswers[q.id];

    if (state.flagged.has(q.id)) {
      btn.classList.add('flagged');
    }

    if (ans) {
      const filledCount = ['A', 'B', 'C', 'D'].filter(k => ans[k] !== undefined && ans[k] !== '').length;
      if (filledCount === 4) {
        btn.classList.add('answered');
      } else if (filledCount > 0) {
        btn.classList.add('partial');
      }
    }
  }

  function loadQuestion(idx) {
    state.currentIndex = idx;
    const q = state.questions[idx];

    dom.qCurrentNumber.textContent = `Question ${idx + 1} of ${state.questions.length}`;

    // Equations
    dom.qEquationsBox.innerHTML = '';
    q.equations.forEach(eq => {
      const line = document.createElement('div');
      line.className = 'equation-line';
      line.textContent = eq;
      dom.qEquationsBox.appendChild(line);
    });

    // Load saved answers if any
    const saved = state.userAnswers[q.id] || { A: '', B: '', C: '', D: '' };
    dom.inputA.value = saved.A || '';
    dom.inputB.value = saved.B || '';
    dom.inputC.value = saved.C || '';
    dom.inputD.value = saved.D || '';

    // Flag button state
    if (state.flagged.has(q.id)) {
      dom.btnFlagQ.classList.add('flagged-active');
      dom.btnFlagQ.innerHTML = `
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></svg>
        <span>Flagged</span>
      `;
    } else {
      dom.btnFlagQ.classList.remove('flagged-active');
      dom.btnFlagQ.innerHTML = `
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></svg>
        <span>Flag for Review</span>
      `;
    }

    // Prev / Next button states
    dom.btnPrevQ.disabled = (idx === 0);
    dom.btnNextQ.disabled = (idx === state.questions.length - 1);

    updateAllPaletteItems();

    // Auto-focus input A
    setTimeout(() => {
      dom.inputA.focus();
      dom.inputA.select();
    }, 50);
  }

  function saveCurrentInputValues() {
    const q = state.questions[state.currentIndex];
    if (!q) return;

    state.userAnswers[q.id] = {
      A: dom.inputA.value.trim(),
      B: dom.inputB.value.trim(),
      C: dom.inputC.value.trim(),
      D: dom.inputD.value.trim()
    };
  }

  function goToQuestion(idx) {
    saveCurrentInputValues();
    loadQuestion(idx);
  }

  function toggleFlagCurrentQuestion() {
    const q = state.questions[state.currentIndex];
    if (!q) return;

    if (state.flagged.has(q.id)) {
      state.flagged.delete(q.id);
    } else {
      state.flagged.add(q.id);
    }
    loadQuestion(state.currentIndex);
  }

  function handleManualSubmit() {
    saveCurrentInputValues();

    // Count unanswered questions
    let unansweredCount = 0;
    state.questions.forEach(q => {
      const ans = state.userAnswers[q.id];
      if (!ans || !ans.A || !ans.B || !ans.C || !ans.D) {
        unansweredCount++;
      }
    });

    let msg = 'Are you sure you want to finish and submit the exam?';
    if (unansweredCount > 0) {
      msg = `You still have ${unansweredCount} question(s) with incomplete answers. Are you sure you want to submit now?`;
    }

    if (confirm(msg)) {
      if (state.timerInterval) clearInterval(state.timerInterval);
      finishExam('Completed');
    }
  }

  function finishExam(status) {
    state.examEndTime = new Date();
    if (state.timerInterval) clearInterval(state.timerInterval);

    const secondsTaken = state.timerTotalSeconds - state.timerRemainingSeconds;
    const timeTakenFormatted = formatDuration(secondsTaken);
    const timeLeftFormatted = formatDuration(state.timerRemainingSeconds);

    // Calculate score
    let correctCount = 0;
    const details = state.questions.map(q => {
      const user = state.userAnswers[q.id] || { A: '', B: '', C: '', D: '' };
      const sol = q.solution;

      const isACorrect = parseInt(user.A, 10) === sol.A;
      const isBCorrect = parseInt(user.B, 10) === sol.B;
      const isCCorrect = parseInt(user.C, 10) === sol.C;
      const isDCorrect = parseInt(user.D, 10) === sol.D;

      const allCorrect = (isACorrect && isBCorrect && isCCorrect && isDCorrect);
      if (allCorrect) correctCount++;

      return {
        questionId: q.id,
        equations: q.equations,
        solution: sol,
        userAnswer: user,
        isCorrect: allCorrect,
        stepByStep: q.stepByStep,
        fieldCorrectness: { A: isACorrect, B: isBCorrect, C: isCCorrect, D: isDCorrect }
      };
    });

    const total = state.questions.length;
    const percentage = Math.round((correctCount / total) * 100);

    const diffDisplay = (state.selectedDifficulty === 'hard_t2') ? 'Hard – Test 2'
      : (state.selectedDifficulty === 'hard' || state.selectedDifficulty === 'hard_t1') ? 'Hard – Test 1'
      : state.selectedDifficulty.charAt(0).toUpperCase() + state.selectedDifficulty.slice(1);

    const submission = {
      id: 'sub-' + Date.now(),
      candidateName: state.candidateName,
      difficulty: diffDisplay,
      difficultyKey: state.selectedDifficulty,
      questionCount: total,
      score: correctCount,
      total: total,
      percentage: percentage,
      timeTakenSeconds: secondsTaken,
      timeTakenFormatted: timeTakenFormatted,
      timeLeftFormatted: timeLeftFormatted,
      submittedAt: formatDateTime(state.examEndTime),
      status: status,
      details: details
    };

    // Save to storage
    const list = getSubmissions();
    list.unshift(submission);
    saveSubmissions(list);

    // Broadcast live across all devices in real-time
    if (typeof CloudSync !== 'undefined' && CloudSync.broadcastSubmission) {
      CloudSync.broadcastSubmission(submission).catch(err => {
        console.warn('Real-time sync broadcast notice:', err);
      });
    }

    state.lastResult = submission;
    renderResults(submission);
    setView('results');
  }

  function renderResults(result) {
    dom.resCandidate.textContent = result.candidateName;
    dom.resScore.textContent = `${result.score} / ${result.total}`;
    dom.resPercent.textContent = `${result.percentage}%`;
    dom.resTimeTaken.textContent = result.timeTakenFormatted;
    dom.resTimeLeft.textContent = result.timeLeftFormatted;

    // Render detailed breakdown
    dom.resBreakdown.innerHTML = '';
    result.details.forEach((item, idx) => {
      const card = document.createElement('div');
      card.className = `breakdown-card ${item.isCorrect ? 'correct-card' : 'wrong-card'}`;

      const eqHtml = item.equations.map(e => `<div>${e}</div>`).join('');
      const stepsHtml = (item.stepByStep || []).map(s => `<li>${s}</li>`).join('');

      card.innerHTML = `
        <div class="breakdown-header">
          <div class="breakdown-q-title">
            <span class="breakdown-status-badge ${item.isCorrect ? 'badge-correct' : 'badge-wrong'}">
              ${item.isCorrect ? '✓ Correct' : '✕ Incorrect'}
            </span>
            <strong>Question ${idx + 1}</strong>
          </div>
        </div>
        <div class="breakdown-body">
          <div class="breakdown-eqs">
            ${eqHtml}
          </div>
          <div class="breakdown-comparison">
            <div class="user-col">
              <span class="col-title">Your Answers:</span>
              <div class="ans-grid">
                <span class="${item.fieldCorrectness.A ? 'var-correct' : 'var-wrong'}">A = ${item.userAnswer.A || '—'}</span>
                <span class="${item.fieldCorrectness.B ? 'var-correct' : 'var-wrong'}">B = ${item.userAnswer.B || '—'}</span>
                <span class="${item.fieldCorrectness.C ? 'var-correct' : 'var-wrong'}">C = ${item.userAnswer.C || '—'}</span>
                <span class="${item.fieldCorrectness.D ? 'var-correct' : 'var-wrong'}">D = ${item.userAnswer.D || '—'}</span>
              </div>
            </div>
            <div class="correct-col">
              <span class="col-title">Solution:</span>
              <div class="ans-grid">
                <span class="var-sol">A = ${item.solution.A}</span>
                <span class="var-sol">B = ${item.solution.B}</span>
                <span class="var-sol">C = ${item.solution.C}</span>
                <span class="var-sol">D = ${item.solution.D}</span>
              </div>
            </div>
          </div>
          ${stepsHtml ? `
            <details class="breakdown-steps">
              <summary>View Step-by-Step Derivation</summary>
              <ol>${stepsHtml}</ol>
            </details>
          ` : ''}
        </div>
      `;

      dom.resBreakdown.appendChild(card);
    });
  }

  // Submissions Dashboard Logic
  function openSubmissionsModal() {
    renderSubmissionsTable();
    dom.submissionsModal.classList.remove('hidden');
  }

  function closeSubmissionsModal() {
    dom.submissionsModal.classList.add('hidden');
  }

  function renderSubmissionsTable() {
    const list = getSubmissions();
    const query = (dom.subSearchInput ? dom.subSearchInput.value.trim().toLowerCase() : '');

    const filtered = list.filter(sub => {
      if (!query) return true;
      return sub.candidateName.toLowerCase().includes(query) ||
             sub.difficulty.toLowerCase().includes(query) ||
             sub.submittedAt.includes(query);
    });

    if (filtered.length === 0) {
      dom.subTableBody.innerHTML = '';
      dom.subEmptyState.classList.remove('hidden');
      return;
    }

    dom.subEmptyState.classList.add('hidden');
    dom.subTableBody.innerHTML = '';

    filtered.forEach((sub, idx) => {
      const tr = document.createElement('tr');
      const pctBadgeClass = sub.percentage >= 80 ? 'pill-green' : (sub.percentage >= 50 ? 'pill-yellow' : 'pill-red');

      const isHard = (sub.difficulty || '').toLowerCase().includes('hard');
      const diffCss = isHard ? 'hard' : ((sub.difficulty || '').toLowerCase().includes('medium') ? 'medium' : 'easy');
      const timerCap = isHard ? '25m' : ((sub.difficulty || '').toLowerCase().includes('medium') ? '15m' : '10m');

      tr.innerHTML = `
        <td><span class="rank-num">#${idx + 1}</span></td>
        <td>
          <div class="candidate-cell">
            <span class="c-avatar">${getInitials(sub.candidateName)}</span>
            <span class="c-name">${escapeHtml(sub.candidateName)}</span>
          </div>
        </td>
        <td><span class="diff-tag ${diffCss}">${escapeHtml(sub.difficulty)} (${sub.questionCount}Q)</span></td>
        <td>
          <div class="score-cell">
            <span class="score-badge ${pctBadgeClass}">${sub.score}/${sub.total} (${sub.percentage}%)</span>
          </div>
        </td>
        <td>
          <div class="time-cell">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            <strong>${sub.timeTakenFormatted}</strong>
            <span class="time-sub">/ ${timerCap}</span>
          </div>
        </td>
        <td><span class="date-txt">${sub.submittedAt}</span></td>
        <td>
          <div class="action-btns" style="justify-content: flex-end;">
            ${sub.details ? `<button class="btn-sm-view" data-view-id="${sub.id}" title="View Answer Sheet">Inspect</button>` : '<span class="text-dim">Archived</span>'}
          </div>
        </td>
      `;

      dom.subTableBody.appendChild(tr);
    });

    // Bind action buttons
    dom.subTableBody.querySelectorAll('.btn-sm-view').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-view-id');
        viewSubmissionDetails(id);
      });
    });
  }

  function viewSubmissionDetails(id) {
    const list = getSubmissions();
    let item = list.find(s => s.id === id);
    if (!item) {
      alert('Submission record not found.');
      return;
    }

    if (typeof CloudSync !== 'undefined' && CloudSync.enrichSubmissionDetails) {
      item = CloudSync.enrichSubmissionDetails(item);
    }

    document.getElementById('sub-details-title').textContent = `${item.candidateName} – Answer Sheet (${item.difficulty})`;
    document.getElementById('sub-details-meta').innerHTML = `
      <span>Score: <strong>${item.score}/${item.total} (${item.percentage}%)</strong></span>
      <span>• Time Taken: <strong>${item.timeTakenFormatted}</strong></span>
      <span>• Date: <strong>${item.submittedAt}</strong></span>
    `;

    dom.subDetailsBody.innerHTML = '';
    const details = item.details || [];
    if (details.length === 0) {
      dom.subDetailsBody.innerHTML = `
        <div style="text-align: center; padding: 24px; color: var(--t-45);">
          No question-by-question breakdown recorded for this candidate.
        </div>
      `;
    } else {
      details.forEach((d, i) => {
        const card = document.createElement('div');
        card.className = `sub-q-detail ${d.isCorrect ? 'q-correct' : 'q-wrong'}`;
        const eqs = Array.isArray(d.equations) ? d.equations : [];
        const userAns = d.userAnswer || {};
        const sol = d.solution || {};
        card.innerHTML = `
          <div class="q-detail-head">
            <span>Question ${i + 1}</span>
            <span class="q-badge ${d.isCorrect ? 'badge-correct' : 'badge-wrong'}">${d.isCorrect ? 'Correct' : 'Incorrect'}</span>
          </div>
          <div class="q-detail-eqs">
            ${eqs.map(e => `<div>${e}</div>`).join('')}
          </div>
          <div class="q-detail-ans">
            <div>Your Answer: A=${userAns.A || '—'}, B=${userAns.B || '—'}, C=${userAns.C || '—'}, D=${userAns.D || '—'}</div>
            <div>Solution: <strong>A=${sol.A !== undefined ? sol.A : '—'}, B=${sol.B !== undefined ? sol.B : '—'}, C=${sol.C !== undefined ? sol.C : '—'}, D=${sol.D !== undefined ? sol.D : '—'}</strong></div>
          </div>
        `;
        dom.subDetailsBody.appendChild(card);
      });
    }

    dom.detailsModal.classList.remove('hidden');
  }

  function deleteSubmission(id) {
    if (!confirm('Are you sure you want to delete this candidate submission?')) return;
    let list = getSubmissions();
    list = list.filter(s => s.id !== id);
    saveSubmissions(list);
    renderSubmissionsTable();
  }

  function exportSubmissionsCsv() {
    const list = getSubmissions();
    if (list.length === 0) {
      alert('No submission records to export.');
      return;
    }

    const headers = ['Candidate Name', 'Difficulty', 'Questions', 'Score', 'Total', 'Percentage', 'Time Taken', 'Time Remaining', 'Date and Time', 'Status'];
    const rows = list.map(s => [
      `"${s.candidateName.replace(/"/g, '""')}"`,
      `"${s.difficulty}"`,
      s.questionCount,
      s.score,
      s.total,
      `"${s.percentage}%"`,
      `"${s.timeTakenFormatted}"`,
      `"${s.timeLeftFormatted || 'N/A'}"`,
      `"${s.submittedAt}"`,
      `"${s.status || 'Completed'}"`
    ]);

    const csvContent = [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `dmat_submissions_${new Date().toISOString().slice(0, 10)}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  // Utilities
  function formatDuration(sec) {
    if (sec < 0) sec = 0;
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m}m ${s.toString().padStart(2, '0')}s`;
  }

  function formatDateTime(d) {
    if (!d) d = new Date();
    const pad = n => n.toString().padStart(2, '0');
    const yyyy = d.getFullYear();
    const mm = pad(d.getMonth() + 1);
    const dd = pad(d.getDate());
    const hh = pad(d.getHours());
    const min = pad(d.getMinutes());
    return `${yyyy}-${mm}-${dd} ${hh}:${min}`;
  }

  function getInitials(name) {
    if (!name) return '??';
    const parts = name.trim().split(/\s+/);
    if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }

  function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  function render() {
    setView('categories');
  }

  // Initialize on DOMContentLoaded or immediately
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
