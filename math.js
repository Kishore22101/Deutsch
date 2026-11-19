// math.js - Dedicated Controller for dMAT Mathematical Equations
// Practice Set 1 & Practice Set 2 (20 Questions · 25 Minutes each)

// ── One-time clear of old submissions (Nov 2026 reset) ──
(function () {
  try {
    if (localStorage.getItem('dmat_v3_cleared') !== '1') {
      localStorage.removeItem('dmat_submissions');
      localStorage.removeItem('dmat_submissions_v1');
      localStorage.setItem('dmat_v3_cleared', '1');
    }
  } catch (e) {}
})();

(function () {
  'use strict';

  const state = {
    view: 'difficulties', // 'difficulties' | 'sets' | 'exam' | 'results'
    selectedSet: 'hard_t1', // 'hard_t1' (Set 1) | 'hard_t2' (Set 2)
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

  let dom = {};

  function init() {
    cacheDom();
    bindEvents();
    renderSubmissionsCount();
    showView('difficulties');
  }

  function cacheDom() {
    dom = {
      // Views
      viewDifficulties: document.getElementById('view-difficulties'),
      viewSets: document.getElementById('view-sets'),
      viewSetsMedium: document.getElementById('view-sets-medium'),
      viewExam: document.getElementById('view-exam'),
      viewResults: document.getElementById('view-results'),
      modalName: document.getElementById('modal-candidate-name'),
      modalSubmissions: document.getElementById('modal-submissions'),

      // Topbar & Nav
      btnNavSubmissions: document.getElementById('btn-nav-submissions'),
      subCountBadge: document.getElementById('sub-count-badge'),
      heroSubCount: document.getElementById('hero-sub-count'),
      btnHeroSubmissions: document.getElementById('btn-hero-submissions'),

      // Difficulty cards & buttons
      diffCardEasy: document.getElementById('diff-card-easy'),
      diffCardMed: document.getElementById('diff-card-medium'),
      diffCardHard: document.getElementById('diff-card-hard'),
      btnStartEasy: document.getElementById('btn-start-easy'),
      btnStartMed: document.getElementById('btn-start-med'),
      btnStartHard: document.getElementById('btn-start-hard'),
      btnBackToDiff: document.getElementById('btn-back-to-diff'),
      btnBackToDiffMed: document.getElementById('btn-back-to-diff-med'),

      // Name Modal
      candidateNameInput: document.getElementById('input-candidate-name'),
      nameModalError: document.getElementById('name-modal-error'),
      nameModalSetLabel: document.getElementById('name-modal-set-label'),
      btnConfirmStart: document.getElementById('btn-confirm-start'),
      btnCancelStart: document.getElementById('btn-cancel-start'),

      // Exam Engine
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
      resCandidate: document.getElementById('res-candidate'),
      resScore: document.getElementById('res-score'),
      resPercent: document.getElementById('res-percent'),
      resTimeTaken: document.getElementById('res-time-taken'),
      resTimeLeft: document.getElementById('res-time-left'),
      resBreakdown: document.getElementById('res-breakdown'),
      btnRetakeExam: document.getElementById('btn-retake-exam'),
      btnResultsSubmissions: document.getElementById('btn-results-submissions'),

      // Submissions Modal
      subTableBody: document.getElementById('submissions-table-body'),
      subEmptyState: document.getElementById('submissions-empty-state'),
      btnCloseSubmissions: document.getElementById('btn-close-submissions'),
      subSearchInput: document.getElementById('sub-search-input'),
      btnExportCsv: document.getElementById('btn-export-csv')
    };
  }

  function bindEvents() {
    // Difficulty card clicks
    if (dom.diffCardEasy) {
      dom.diffCardEasy.addEventListener('click', () => {
        alert('Easy level questions will be updated soon. Please practice with Hard level Set 1 & Set 2.');
      });
    }
    if (dom.btnStartEasy) {
      dom.btnStartEasy.addEventListener('click', (e) => {
        e.stopPropagation();
        alert('Easy level questions will be updated soon. Please practice with Hard level Set 1 & Set 2.');
      });
    }

    // Medium level click -> show Medium Set 1 to Set 5
    if (dom.diffCardMed) {
      dom.diffCardMed.addEventListener('click', () => {
        showView('sets-medium');
      });
    }
    if (dom.btnStartMed) {
      dom.btnStartMed.addEventListener('click', (e) => {
        e.stopPropagation();
        showView('sets-medium');
      });
    }

    // Hard level click -> show Set 1 and Set 2
    if (dom.diffCardHard) {
      dom.diffCardHard.addEventListener('click', () => {
        showView('sets');
      });
    }
    if (dom.btnStartHard) {
      dom.btnStartHard.addEventListener('click', (e) => {
        e.stopPropagation();
        showView('sets');
      });
    }

    // Back button from Sets to Difficulty level
    if (dom.btnBackToDiff) {
      dom.btnBackToDiff.addEventListener('click', () => {
        showView('difficulties');
      });
    }
    if (dom.btnBackToDiffMed) {
      dom.btnBackToDiffMed.addEventListener('click', () => {
        showView('difficulties');
      });
    }

    // Start Set buttons on Set cards
    document.querySelectorAll('[data-start-set]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const setKey = btn.getAttribute('data-start-set');
        openStartModal(setKey);
      });
    });

    const cardSet1 = document.getElementById('card-set-1');
    if (cardSet1) {
      cardSet1.addEventListener('click', () => openStartModal('hard_t1'));
    }
    const cardSet2 = document.getElementById('card-set-2');
    if (cardSet2) {
      cardSet2.addEventListener('click', () => openStartModal('hard_t2'));
    }

    // Medium set card click handlers
    for (let s = 1; s <= 5; s++) {
      const c = document.getElementById(`card-med-set-${s}`);
      if (c) {
        c.addEventListener('click', () => openStartModal(`medium_t${s}`));
      }
    }

    // Submissions nav buttons
    if (dom.btnNavSubmissions) dom.btnNavSubmissions.addEventListener('click', openSubmissionsModal);
    if (dom.btnHeroSubmissions) dom.btnHeroSubmissions.addEventListener('click', openSubmissionsModal);
    if (dom.btnCloseSubmissions) dom.btnCloseSubmissions.addEventListener('click', closeSubmissionsModal);
    if (dom.modalSubmissions) {
      dom.modalSubmissions.addEventListener('click', (e) => {
        if (e.target === dom.modalSubmissions) closeSubmissionsModal();
      });
    }

    // Modal start controls
    if (dom.btnCancelStart) dom.btnCancelStart.addEventListener('click', () => dom.modalName.classList.add('hidden'));
    if (dom.btnConfirmStart) dom.btnConfirmStart.addEventListener('click', confirmStartExam);
    if (dom.candidateNameInput) {
      dom.candidateNameInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') confirmStartExam();
      });
    }

    // Exam Controls
    if (dom.btnPrevQ) dom.btnPrevQ.addEventListener('click', () => goToQuestion(state.currentIndex - 1));
    if (dom.btnNextQ) dom.btnNextQ.addEventListener('click', () => goToQuestion(state.currentIndex + 1));
    if (dom.btnFlagQ) dom.btnFlagQ.addEventListener('click', toggleFlagCurrentQuestion);
    if (dom.btnSubmitExam) dom.btnSubmitExam.addEventListener('click', handleManualSubmit);

    // Number Inputs Auto-save & Navigation
    [dom.inputA, dom.inputB, dom.inputC, dom.inputD].forEach((inp, i, arr) => {
      if (!inp) return;
      inp.addEventListener('input', () => {
        let v = inp.value;
        if (v !== '') {
          let n = parseInt(v, 10);
          if (n > 20) inp.value = 20;
          if (n < 1 && v.length > 1) inp.value = 1;
        }
        saveCurrentAnswers();
        updatePaletteItem(state.currentIndex);
      });
      inp.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          if (i < arr.length - 1) {
            arr[i + 1].focus();
            arr[i + 1].select();
          } else if (state.currentIndex < state.questions.length - 1) {
            goToQuestion(state.currentIndex + 1);
          }
        }
      });
    });

    // Results Actions
    if (dom.btnRetakeExam) {
      dom.btnRetakeExam.addEventListener('click', () => {
        openStartModal(state.selectedSet);
      });
    }
    if (dom.btnResultsSubmissions) {
      dom.btnResultsSubmissions.addEventListener('click', openSubmissionsModal);
    }

    // Sub Details Close - no longer used in this page (inspect is admin-only)

    // Search & Export
    if (dom.subSearchInput) {
      dom.subSearchInput.addEventListener('input', renderSubmissionsTable);
    }
    if (dom.btnExportCsv) {
      dom.btnExportCsv.addEventListener('click', exportSubmissionsCsv);
    }
  }

  function showView(viewName) {
    state.view = viewName;
    if (dom.viewDifficulties) dom.viewDifficulties.classList.toggle('hidden', viewName !== 'difficulties');
    if (dom.viewSets) dom.viewSets.classList.toggle('hidden', viewName !== 'sets');
    if (dom.viewSetsMedium) dom.viewSetsMedium.classList.toggle('hidden', viewName !== 'sets-medium');
    if (dom.viewExam) dom.viewExam.classList.toggle('hidden', viewName !== 'exam');
    if (dom.viewResults) dom.viewResults.classList.toggle('hidden', viewName !== 'results');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function openStartModal(setKey) {
    state.selectedSet = setKey || 'hard_t1';
    updateModalLabels();

    dom.nameModalError.textContent = '';
    dom.candidateNameInput.value = state.candidateName || '';
    dom.modalName.classList.remove('hidden');
    setTimeout(() => {
      dom.candidateNameInput.focus();
      dom.candidateNameInput.select();
    }, 100);
  }

  function updateModalLabels() {
    let title = 'Practice Set 1 · 20 Questions';
    let btnText = 'Begin Set 1 (25m) ➔';

    if (state.selectedSet === 'hard_t2') {
      title = 'Hard Level · Practice Set 2 · 20 Questions';
      btnText = 'Begin Hard Set 2 (25m) ➔';
    } else if (state.selectedSet === 'hard_t1' || state.selectedSet === 'hard') {
      title = 'Hard Level · Practice Set 1 · 20 Questions';
      btnText = 'Begin Hard Set 1 (25m) ➔';
    } else if (state.selectedSet.startsWith('medium_t')) {
      const num = state.selectedSet.replace('medium_t', '');
      title = `Medium Level · Practice Set ${num} · 20 Questions`;
      btnText = `Begin Medium Set ${num} (25m) ➔`;
    }
    if (dom.nameModalSetLabel) dom.nameModalSetLabel.textContent = title;
    if (dom.btnConfirmStart) dom.btnConfirmStart.textContent = btnText;
  }

  function confirmStartExam() {
    const name = dom.candidateNameInput.value.trim();
    if (!name) {
      dom.nameModalError.textContent = 'Please enter your name to start the test.';
      dom.candidateNameInput.focus();
      return;
    }
    state.candidateName = name;
    localStorage.setItem('dmat_last_candidate', name);
    dom.modalName.classList.add('hidden');
    startExam(state.selectedSet);
  }

  function startExam(setKey) {
    state.selectedSet = setKey;
    state.userAnswers = {};
    state.flagged.clear();
    state.currentIndex = 0;
    state.examStartTime = new Date();

    const data = (typeof DMAT_DATA !== 'undefined') ? DMAT_DATA : {};
    let dataset = [];
    let setDisplayName = '';

    if (setKey === 'hard_t2') {
      dataset = data.hard_t2 || [];
      setDisplayName = 'Hard – Set 2';
    } else if (setKey === 'hard_t1' || setKey === 'hard') {
      dataset = data.hard_t1 || data.hard || [];
      setDisplayName = 'Hard – Set 1';
    } else if (setKey === 'medium_t1') {
      dataset = data.medium_t1 || [];
      setDisplayName = 'Medium – Set 1';
    } else if (setKey === 'medium_t2') {
      dataset = data.medium_t2 || [];
      setDisplayName = 'Medium – Set 2';
    } else if (setKey === 'medium_t3') {
      dataset = data.medium_t3 || [];
      setDisplayName = 'Medium – Set 3';
    } else if (setKey === 'medium_t4') {
      dataset = data.medium_t4 || [];
      setDisplayName = 'Medium – Set 4';
    } else if (setKey === 'medium_t5') {
      dataset = data.medium_t5 || [];
      setDisplayName = 'Medium – Set 5';
    } else {
      dataset = data[setKey] || data.medium_t1 || data.hard || [];
      setDisplayName = setKey;
    }
    state.questions = dataset.slice(0, 20);

    state.timerTotalSeconds = 25 * 60;
    state.timerRemainingSeconds = 25 * 60;

    dom.examTitle.textContent = `Mathematic Equations – ${setDisplayName}`;
    dom.examCandidateName.textContent = state.candidateName;

    if (state.timerInterval) clearInterval(state.timerInterval);
    updateTimerDisplay();
    state.timerInterval = setInterval(handleTimerTick, 1000);

    renderPalette();
    loadQuestion(0);
    showView('exam');
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
    dom.examTimer.textContent = `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    const pct = ((state.timerTotalSeconds - state.timerRemainingSeconds) / state.timerTotalSeconds) * 100;
    dom.examTimerProgress.style.width = `${pct}%`;
  }

  function renderPalette() {
    dom.qPalette.innerHTML = '';
    state.questions.forEach((q, idx) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'palette-btn';
      btn.textContent = idx + 1;
      btn.addEventListener('click', () => goToQuestion(idx));
      dom.qPalette.appendChild(btn);
    });
    updateAllPaletteItems();
  }

  function updateAllPaletteItems() {
    state.questions.forEach((q, idx) => updatePaletteItem(idx));
  }

  function updatePaletteItem(idx) {
    const btn = dom.qPalette.children[idx];
    if (!btn) return;
    btn.className = 'palette-btn';
    if (idx === state.currentIndex) btn.classList.add('current');

    const q = state.questions[idx];
    if (!q) return;

    if (state.flagged.has(q.id)) btn.classList.add('flagged');

    const ans = state.userAnswers[q.id];
    const hasD = (q.solution && q.solution.D !== undefined);
    if (ans) {
      const varsToCheck = hasD ? [ans.A, ans.B, ans.C, ans.D] : [ans.A, ans.B, ans.C];
      const filled = varsToCheck.filter(v => v !== '' && v !== undefined && v !== null).length;
      if (filled === varsToCheck.length) btn.classList.add('answered');
      else if (filled > 0) btn.classList.add('partial');
    }
  }

  function loadQuestion(idx) {
    state.currentIndex = idx;
    const q = state.questions[idx];
    if (!q) return;

    dom.qCurrentNumber.textContent = `Question ${idx + 1} of ${state.questions.length}`;

    // Render Equations Box cleanly
    dom.qEquationsBox.innerHTML = '';
    (q.equations || []).forEach(eq => {
      const line = document.createElement('div');
      line.className = 'equation-line';
      line.textContent = eq;
      dom.qEquationsBox.appendChild(line);
    });

    // Populate user values if already typed
    const saved = state.userAnswers[q.id] || { A: '', B: '', C: '', D: '' };
    dom.inputA.value = saved.A || '';
    dom.inputB.value = saved.B || '';
    dom.inputC.value = saved.C || '';
    dom.inputD.value = saved.D || '';

    // Show/hide input D based on whether this question has D
    const hasD = (q.solution && q.solution.D !== undefined);
    const inputDGroup = dom.inputD ? dom.inputD.closest('.var-input-group') : null;
    if (inputDGroup) {
      inputDGroup.style.display = hasD ? '' : 'none';
    }

    // Flag button
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

    dom.btnPrevQ.disabled = (idx === 0);
    dom.btnNextQ.disabled = (idx === state.questions.length - 1);

    updateAllPaletteItems();

    setTimeout(() => {
      if (dom.inputA) {
        dom.inputA.focus();
        dom.inputA.select();
      }
    }, 60);
  }

  function saveCurrentAnswers() {
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
    if (idx < 0 || idx >= state.questions.length) return;
    saveCurrentAnswers();
    loadQuestion(idx);
  }

  function toggleFlagCurrentQuestion() {
    const q = state.questions[state.currentIndex];
    if (!q) return;
    if (state.flagged.has(q.id)) state.flagged.delete(q.id);
    else state.flagged.add(q.id);
    loadQuestion(state.currentIndex);
  }

  function handleManualSubmit() {
    saveCurrentAnswers();
    let unans = 0;
    state.questions.forEach(q => {
      const a = state.userAnswers[q.id] || {};
      const filled = [a.A, a.B, a.C, a.D].filter(v => v !== '' && v !== undefined && v !== null).length;
      if (filled < 4) unans++;
    });

    let msg = 'Are you ready to submit your exam?';
    if (unans > 0) {
      msg = `You have ${unans} incomplete question(s). Are you sure you want to finish and submit?`;
    }
    if (confirm(msg)) {
      finishExam('Completed');
    }
  }

  function finishExam(status) {
    state.examEndTime = new Date();
    if (state.timerInterval) clearInterval(state.timerInterval);

    const secondsTaken = state.timerTotalSeconds - state.timerRemainingSeconds;
    const timeTakenFormatted = formatDuration(secondsTaken);
    const timeLeftFormatted = formatDuration(state.timerRemainingSeconds);

    let correctCount = 0;
    const details = state.questions.map(q => {
      const user = state.userAnswers[q.id] || {};
      const sol = q.solution || {};
      const hasD = (sol.D !== undefined);

      const isACorrect = parseInt(user.A, 10) === sol.A;
      const isBCorrect = parseInt(user.B, 10) === sol.B;
      const isCCorrect = parseInt(user.C, 10) === sol.C;
      const isDCorrect = hasD ? (parseInt(user.D, 10) === sol.D) : true;
      const allCorrect = (isACorrect && isBCorrect && isCCorrect && isDCorrect);
      if (allCorrect) correctCount++;

      return {
        questionId: q.id,
        subtest: 'math',
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

    let setDisplayName = 'Equations – Practice';
    if (state.selectedSet === 'hard_t2') setDisplayName = 'Equations – Hard Set 2';
    else if (state.selectedSet === 'hard_t1' || state.selectedSet === 'hard') setDisplayName = 'Equations – Hard Set 1';
    else if (state.selectedSet.startsWith('medium_t')) {
      const num = state.selectedSet.replace('medium_t', '');
      setDisplayName = `Equations – Medium Set ${num}`;
    }

    const submission = {
      id: 'sub-' + Date.now(),
      candidateName: state.candidateName,
      difficulty: setDisplayName,
      difficultyKey: state.selectedSet,
      subtest: 'math',
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

    saveSubmission(submission);

    if (typeof CloudSync !== 'undefined' && CloudSync.broadcastSubmission) {
      CloudSync.broadcastSubmission(submission).catch(() => {});
    }

    state.lastResult = submission;
    renderResults(submission);
    renderSubmissionsCount();
    showView('results');
  }

  function renderResults(res) {
    dom.resCandidate.textContent = res.candidateName;
    dom.resScore.textContent = `${res.score} / ${res.total}`;
    dom.resPercent.textContent = `${res.percentage}%`;
    dom.resTimeTaken.textContent = res.timeTakenFormatted;
    dom.resTimeLeft.textContent = res.timeLeftFormatted;

    dom.resBreakdown.innerHTML = '';
    (res.details || []).forEach((item, idx) => {
      const card = document.createElement('div');
      card.className = `breakdown-card ${item.isCorrect ? 'correct-card' : 'wrong-card'}`;

      const eqList = (item.equations || []).map(eq => `<div>${eq}</div>`).join('');
      const sol = item.solution || {};
      const u = item.userAnswer || {};
      const fc = item.fieldCorrectness || {};
      const hasD = (sol.D !== undefined);
      const steps = (item.stepByStep || []).map(s => `<li>${s}</li>`).join('');

      const userDPill = hasD ? `<span class="${fc.D ? 'var-correct' : 'var-wrong'}">D = ${u.D !== '' && u.D !== undefined ? u.D : '—'}</span>` : '';
      const solDPill = hasD ? `<span class="var-sol">D = ${sol.D}</span>` : '';

      card.innerHTML = `
        <div class="breakdown-header">
          <div class="breakdown-q-title">
            <span class="breakdown-status-badge ${item.isCorrect ? 'badge-correct' : 'badge-wrong'}">
              ${item.isCorrect ? '✓ Correct' : '✕ Incorrect'}
            </span>
            <strong>Question ${idx + 1} of ${res.details.length}</strong>
          </div>
          <div style="font-size:12px; font-weight:800; color:var(--t-45);">
            Score: ${item.isCorrect ? '1 / 1' : '0 / 1'}
          </div>
        </div>

        <div class="breakdown-body">
          <div class="breakdown-eqs">
            ${eqList}
          </div>

          <div class="breakdown-comparison">
            <div class="user-col">
              <span class="col-title">Your Answers:</span>
              <div class="ans-grid">
                <span class="${fc.A ? 'var-correct' : 'var-wrong'}">A = ${u.A !== '' && u.A !== undefined ? u.A : '—'}</span>
                <span class="${fc.B ? 'var-correct' : 'var-wrong'}">B = ${u.B !== '' && u.B !== undefined ? u.B : '—'}</span>
                <span class="${fc.C ? 'var-correct' : 'var-wrong'}">C = ${u.C !== '' && u.C !== undefined ? u.C : '—'}</span>
                ${userDPill}
              </div>
            </div>
            <div class="correct-col">
              <span class="col-title">Official Solution:</span>
              <div class="ans-grid">
                <span class="var-sol">A = ${sol.A}</span>
                <span class="var-sol">B = ${sol.B}</span>
                <span class="var-sol">C = ${sol.C}</span>
                ${solDPill}
              </div>
            </div>
          </div>

          ${steps ? `
            <details class="breakdown-steps" open>
              <summary>Step-by-Step Mathematical Derivation</summary>
              <ol>${steps}</ol>
            </details>
          ` : ''}
        </div>
      `;

      dom.resBreakdown.appendChild(card);
    });
  }

  // --- Submissions Persistence & Modal ---
  function isSampleRecord(sub) {
    if (!sub || !sub.id) return true;
    if (sub.id.startsWith('sub-live-')) return true;
    const name = (sub.candidateName || '').trim().toLowerCase();
    if (!name || name === 'k' || name === 'kishore k' || name === 'kishore k.' || name === 'kaviyan' || name === 'summa' || name === 'nithyasree' || name.includes('nithyasree')) return true;
    return false;
  }

  function getSubmissions() {
    try {
      const s = localStorage.getItem('dmat_submissions');
      if (s) {
        const arr = JSON.parse(s);
        return arr.filter(x => !isSampleRecord(x));
      }
    } catch (e) {}
    return [];
  }

  function saveSubmission(sub) {
    const list = getSubmissions();
    list.unshift(sub);
    localStorage.setItem('dmat_submissions', JSON.stringify(list));
  }

  function renderSubmissionsCount() {
    const count = getSubmissions().length;
    if (dom.subCountBadge) dom.subCountBadge.textContent = count;
    if (dom.heroSubCount) dom.heroSubCount.textContent = count;
  }

  function openSubmissionsModal() {
    renderSubmissionsTable();
    if (dom.modalSubmissions) dom.modalSubmissions.classList.remove('hidden');
  }

  function closeSubmissionsModal() {
    if (dom.modalSubmissions) dom.modalSubmissions.classList.add('hidden');
  }

  function renderSubmissionsTable() {
    const subs = getSubmissions();
    const query = (dom.subSearchInput ? dom.subSearchInput.value : '').toLowerCase().trim();
    const filtered = subs.filter(s => {
      if (!query) return true;
      return (s.candidateName || '').toLowerCase().includes(query) ||
             (s.difficulty || '').toLowerCase().includes(query) ||
             (s.submittedAt || '').toLowerCase().includes(query);
    });

    if (dom.subTableBody) dom.subTableBody.innerHTML = '';
    if (filtered.length === 0) {
      if (dom.subEmptyState) dom.subEmptyState.classList.remove('hidden');
      return;
    }
    if (dom.subEmptyState) dom.subEmptyState.classList.add('hidden');

    filtered.forEach((sub, idx) => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td style="color:var(--t-45);">${idx + 1}</td>
        <td><strong>${escapeHtml(sub.candidateName)}</strong></td>
        <td><span class="badge-tag-diff">${sub.difficulty}</span></td>
        <td><strong style="color:#10b981;">${sub.score} / ${sub.total}</strong> (${sub.percentage}%)</td>
        <td>${sub.timeTakenFormatted}</td>
        <td style="color:var(--t-60); font-size:12px;">${sub.submittedAt}</td>
      `;
      dom.subTableBody.appendChild(tr);
    });
  }

  function exportSubmissionsCsv() {
    const subs = getSubmissions();
    if (!subs.length) {
      alert('No submissions available to export.');
      return;
    }
    const headers = ['ID', 'Candidate Name', 'Difficulty', 'Score', 'Total', 'Percentage', 'Time Taken', 'Submitted At'];
    const rows = subs.map(s => [
      s.id,
      `"${(s.candidateName || '').replace(/"/g, '""')}"`,
      s.difficulty,
      s.score,
      s.total,
      `${s.percentage}%`,
      s.timeTakenFormatted,
      s.submittedAt
    ]);
    const csv = [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `dmat_math_submissions_${Date.now()}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }

  function formatDuration(sec) {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m}m ${s.toString().padStart(2, '0')}s`;
  }

  function formatDateTime(d) {
    if (!d) d = new Date();
    const pad = n => n.toString().padStart(2, '0');
    return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}`;
  }

  function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str || '';
    return div.innerHTML;
  }

  document.addEventListener('DOMContentLoaded', init);
})();
