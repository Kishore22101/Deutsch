// math.js - Dedicated Controller for dMAT Mathematical Equations
// Practice Set 1 & Practice Set 2 (20 Questions · 25 Minutes each)

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
      viewExam: document.getElementById('view-exam'),
      viewResults: document.getElementById('view-results'),
      modalName: document.getElementById('modal-candidate-name'),
      modalSubmissions: document.getElementById('modal-submissions'),
      modalSubDetails: document.getElementById('modal-sub-details'),

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
      btnExportCsv: document.getElementById('btn-export-csv'),
      subDetailsBody: document.getElementById('sub-details-body'),
      subDetailsTitle: document.getElementById('sub-details-title'),
      subDetailsMeta: document.getElementById('sub-details-meta'),
      btnCloseSubDetails: document.getElementById('btn-close-sub-details')
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

    if (dom.diffCardMed) {
      dom.diffCardMed.addEventListener('click', () => {
        alert('Medium level questions will be updated soon. Please practice with Hard level Set 1 & Set 2.');
      });
    }
    if (dom.btnStartMed) {
      dom.btnStartMed.addEventListener('click', (e) => {
        e.stopPropagation();
        alert('Medium level questions will be updated soon. Please practice with Hard level Set 1 & Set 2.');
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

    // Start Set buttons on Set 1 / Set 2 cards
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

    // Sub Details Close
    if (dom.btnCloseSubDetails) {
      dom.btnCloseSubDetails.addEventListener('click', () => dom.modalSubDetails.classList.add('hidden'));
    }

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
    const isSet2 = (state.selectedSet === 'hard_t2');
    if (dom.nameModalSetLabel) {
      dom.nameModalSetLabel.textContent = isSet2 ? 'Practice Set 2 · 20 Questions' : 'Practice Set 1 · 20 Questions';
    }
    if (dom.btnConfirmStart) {
      dom.btnConfirmStart.textContent = isSet2 ? 'Begin Set 2 (25m) ➔' : 'Begin Set 1 (25m) ➔';
    }
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
    const dataset = (setKey === 'hard_t2') ? (data.hard_t2 || []) : (data.hard_t1 || data.hard || []);
    state.questions = dataset.slice(0, 20);

    state.timerTotalSeconds = 25 * 60;
    state.timerRemainingSeconds = 25 * 60;

    const setNum = (setKey === 'hard_t2') ? 'Set 2' : 'Set 1';
    dom.examTitle.textContent = `Mathematic Equations – ${setNum}`;
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
    if (ans) {
      const filled = [ans.A, ans.B, ans.C, ans.D].filter(v => v !== '' && v !== undefined && v !== null).length;
      if (filled === 4) btn.classList.add('answered');
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

      const isACorrect = parseInt(user.A, 10) === sol.A;
      const isBCorrect = parseInt(user.B, 10) === sol.B;
      const isCCorrect = parseInt(user.C, 10) === sol.C;
      const isDCorrect = parseInt(user.D, 10) === sol.D;
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
    const setDisplayName = (state.selectedSet === 'hard_t2') ? 'Equations – Set 2' : 'Equations – Set 1';

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
      card.className = `breakdown-item ${item.isCorrect ? 'correct' : 'incorrect'}`;

      const eqList = (item.equations || []).map(eq => `<div class="b-eq-line">${eq}</div>`).join('');
      const sol = item.solution || {};
      const u = item.userAnswer || {};
      const fc = item.fieldCorrectness || {};

      const steps = (item.stepByStep || []).map(s => `<li>${s}</li>`).join('');

      card.innerHTML = `
        <div class="b-item-head">
          <div class="b-head-left">
            <span class="b-q-num">Q${idx + 1}</span>
            <span class="b-status-badge ${item.isCorrect ? 'badge-correct' : 'badge-wrong'}">
              ${item.isCorrect ? '✓ Correct' : '✕ Incorrect'}
            </span>
          </div>
          <div class="b-head-right">
            <span>Score: ${item.isCorrect ? '1 / 1' : '0 / 1'}</span>
          </div>
        </div>

        <div class="b-equations-box">
          ${eqList}
        </div>

        <div class="b-answers-comparison">
          <div class="b-ans-col">
            <span class="b-col-lbl">Your Inputs:</span>
            <div class="b-values-row">
              <span class="b-val-pill ${fc.A ? 'p-ok' : 'p-err'}">A = ${u.A !== '' && u.A !== undefined ? u.A : '—'}</span>
              <span class="b-val-pill ${fc.B ? 'p-ok' : 'p-err'}">B = ${u.B !== '' && u.B !== undefined ? u.B : '—'}</span>
              <span class="b-val-pill ${fc.C ? 'p-ok' : 'p-err'}">C = ${u.C !== '' && u.C !== undefined ? u.C : '—'}</span>
              <span class="b-val-pill ${fc.D ? 'p-ok' : 'p-err'}">D = ${u.D !== '' && u.D !== undefined ? u.D : '—'}</span>
            </div>
          </div>
          <div class="b-ans-col">
            <span class="b-col-lbl">Official Solution:</span>
            <div class="b-values-row">
              <span class="b-val-pill p-correct">A = ${sol.A}</span>
              <span class="b-val-pill p-correct">B = ${sol.B}</span>
              <span class="b-val-pill p-correct">C = ${sol.C}</span>
              <span class="b-val-pill p-correct">D = ${sol.D}</span>
            </div>
          </div>
        </div>

        <div class="b-solution-steps">
          <div class="b-steps-title">Step-by-step Solution:</div>
          <ul class="b-steps-list">${steps}</ul>
        </div>
      `;

      dom.resBreakdown.appendChild(card);
    });
  }

  // --- Submissions Persistence & Modal ---
  function getSubmissions() {
    try {
      const s = localStorage.getItem('dmat_submissions');
      if (s) {
        const arr = JSON.parse(s);
        return arr.filter(x => x && x.id && !x.id.startsWith('sub-live-'));
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
        <td style="text-align:right;">
          <button class="btn-inspect-sub" data-sub-id="${sub.id}">Inspect Sheet</button>
        </td>
      `;
      tr.querySelector('.btn-inspect-sub').addEventListener('click', () => openSubDetails(sub));
      dom.subTableBody.appendChild(tr);
    });
  }

  function openSubDetails(sub) {
    dom.subDetailsTitle.textContent = `Candidate Sheet · ${sub.candidateName}`;
    dom.subDetailsMeta.textContent = `${sub.difficulty} · Score: ${sub.score}/${sub.total} (${sub.percentage}%) · Time: ${sub.timeTakenFormatted} · ${sub.submittedAt}`;

    dom.subDetailsBody.innerHTML = '';
    (sub.details || []).forEach((d, idx) => {
      const item = document.createElement('div');
      item.className = `breakdown-item ${d.isCorrect ? 'correct' : 'incorrect'}`;

      const eqList = (d.equations || []).map(eq => `<div class="b-eq-line">${eq}</div>`).join('');
      const sol = d.solution || {};
      const u = d.userAnswer || {};
      const fc = d.fieldCorrectness || {};
      const steps = (d.stepByStep || []).map(s => `<li>${s}</li>`).join('');

      item.innerHTML = `
        <div class="b-item-head">
          <span class="b-q-num">Q${idx + 1}</span>
          <span class="b-status-badge ${d.isCorrect ? 'badge-correct' : 'badge-wrong'}">${d.isCorrect ? '✓ Correct' : '✕ Incorrect'}</span>
        </div>
        <div class="b-equations-box">${eqList}</div>
        <div class="b-answers-comparison">
          <div class="b-ans-col">
            <span class="b-col-lbl">Candidate Entered:</span>
            <div class="b-values-row">
              <span class="b-val-pill ${fc.A ? 'p-ok' : 'p-err'}">A = ${u.A || '—'}</span>
              <span class="b-val-pill ${fc.B ? 'p-ok' : 'p-err'}">B = ${u.B || '—'}</span>
              <span class="b-val-pill ${fc.C ? 'p-ok' : 'p-err'}">C = ${u.C || '—'}</span>
              <span class="b-val-pill ${fc.D ? 'p-ok' : 'p-err'}">D = ${u.D || '—'}</span>
            </div>
          </div>
          <div class="b-ans-col">
            <span class="b-col-lbl">Official Solution:</span>
            <div class="b-values-row">
              <span class="b-val-pill p-correct">A = ${sol.A}</span>
              <span class="b-val-pill p-correct">B = ${sol.B}</span>
              <span class="b-val-pill p-correct">C = ${sol.C}</span>
              <span class="b-val-pill p-correct">D = ${sol.D}</span>
            </div>
          </div>
        </div>
        <div class="b-solution-steps">
          <div class="b-steps-title">Derivation:</div>
          <ul class="b-steps-list">${steps}</ul>
        </div>
      `;
      dom.subDetailsBody.appendChild(item);
    });

    dom.modalSubDetails.classList.remove('hidden');
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
