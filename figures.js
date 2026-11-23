// figures.js – Dedicated Controller for dMAT Figure Sequences (Formenreihen)
// Supports Easy, Medium, Hard (5 Sets each · 20 Questions · 25 Minutes each)

(function () {
  'use strict';

  const state = {
    view: 'difficulties', // 'difficulties' | 'sets-easy' | 'sets-medium' | 'sets-hard' | 'exam' | 'results'
    selectedTrack: 'hard', // 'easy' | 'medium' | 'hard'
    selectedSet: 'hard_t1', // 'easy_t1'..'easy_t5', 'medium_t1'..'medium_t5', 'hard_t1'..'hard_t5'
    candidateName: localStorage.getItem('dmat_last_candidate') || '',
    questions: [],
    currentIndex: 0,
    userAnswers: {}, // { [qId]: { m5: 1, m6: 2 } }
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
    initCloudSync();
  }

  function initCloudSync() {
    if (typeof CloudSync === 'undefined') return;

    // Listen to real-time status changes
    CloudSync.onStatusChange((status, text) => {
      updateSyncStatusUI(status, text);
    });

    // Initial fetch from cloud
    CloudSync.fetchRemoteSubmissions().then(() => {
      renderSubmissionsCount();
      if (dom.modalSubmissions && !dom.modalSubmissions.classList.contains('hidden')) {
        renderSubmissionsTable();
      }
    }).catch(() => {});

    // Real-time live SSE stream subscription
    CloudSync.subscribeRealTime(() => {
      renderSubmissionsCount();
      if (dom.modalSubmissions && !dom.modalSubmissions.classList.contains('hidden')) {
        renderSubmissionsTable();
      }
    });
  }

  function updateSyncStatusUI(status, text) {
    const headerPill = document.getElementById('fig-header-sync-pill');
    const headerDot = document.getElementById('fig-live-sync-dot');
    const headerText = document.getElementById('fig-live-sync-text');

    const modalPill = document.getElementById('fig-modal-sync-pill');
    const modalDot = document.getElementById('fig-modal-live-sync-dot');
    const modalText = document.getElementById('fig-modal-live-sync-text');

    const statusClass = (status === 'connected' ? 'connected' : (status === 'syncing' ? 'syncing' : 'offline'));

    if (headerText) headerText.textContent = text;
    if (headerDot) headerDot.className = 'live-dot ' + (statusClass === 'connected' ? '' : statusClass);
    if (headerPill) headerPill.className = 'live-status-pill ' + (statusClass === 'connected' ? '' : statusClass);

    if (modalText) modalText.textContent = text;
    if (modalDot) modalDot.className = 'live-dot ' + (statusClass === 'connected' ? '' : statusClass);
    if (modalPill) modalPill.className = 'live-status-pill ' + (statusClass === 'connected' ? '' : statusClass);
  }

  function cacheDom() {
    dom = {
      // Views
      viewDifficulties: document.getElementById('view-difficulties'),
      viewSetsEasy: document.getElementById('view-sets-easy'),
      viewSetsMedium: document.getElementById('view-sets-medium'),
      viewSetsHard: document.getElementById('view-sets-hard'),
      viewSetsSim: document.getElementById('view-sets-sim'),
      viewExam: document.getElementById('view-exam'),
      viewResults: document.getElementById('view-results'),

      // Modals
      modalName: document.getElementById('modal-candidate-name'),
      modalSubmissions: document.getElementById('modal-submissions'),

      // Nav and Hero Buttons
      btnNavSubmissions: document.getElementById('btn-nav-submissions'),
      subCountBadge: document.getElementById('sub-count-badge'),
      heroSubCount: document.getElementById('hero-sub-count'),
      btnHeroSubmissions: document.getElementById('btn-hero-submissions'),

      // Difficulty cards & buttons
      diffCardEasy: document.getElementById('diff-card-easy'),
      diffCardMedium: document.getElementById('diff-card-medium'),
      diffCardHard: document.getElementById('diff-card-hard'),
      diffCardSim: document.getElementById('diff-card-sim'),
      btnStartEasy: document.getElementById('btn-start-easy'),
      btnStartMed: document.getElementById('btn-start-med'),
      btnStartHard: document.getElementById('btn-start-hard'),
      btnStartSim: document.getElementById('btn-start-sim'),

      // Back buttons
      btnBackToDiffEasy: document.getElementById('btn-back-to-diff-easy'),
      btnBackToDiffMed: document.getElementById('btn-back-to-diff-med'),
      btnBackToDiffHard: document.getElementById('btn-back-to-diff-hard'),
      btnBackToDiffSim: document.getElementById('btn-back-to-diff-sim'),

      // Candidate Name Modal
      candidateNameInput: document.getElementById('input-candidate-name'),
      nameModalError: document.getElementById('name-modal-error'),
      nameModalSetLabel: document.getElementById('name-modal-set-label'),
      btnConfirmStart: document.getElementById('btn-confirm-start'),
      btnCancelStart: document.getElementById('btn-cancel-start'),

      // Exam UI
      examTitle: document.getElementById('exam-title'),
      examCandidateName: document.getElementById('exam-candidate-name'),
      examTimer: document.getElementById('exam-timer'),
      examTimerProgress: document.getElementById('exam-timer-progress'),
      btnSubmitExam: document.getElementById('btn-submit-exam'),
      qPalette: document.getElementById('q-palette'),
      qCurrentNumber: document.getElementById('q-current-number'),
      qSequenceStrip: document.getElementById('q-figures-sequence-strip'),
      optsListM5: document.getElementById('figures-opts-m5'),
      optsListM6: document.getElementById('figures-opts-m6'),
      btnPrevQ: document.getElementById('btn-prev-q'),
      btnNextQ: document.getElementById('btn-next-q'),
      btnFlagQ: document.getElementById('btn-flag-q'),

      // Results UI
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
    // Top-level difficulty card clicks
    if (dom.diffCardEasy) dom.diffCardEasy.addEventListener('click', () => showView('sets-easy'));
    if (dom.btnStartEasy) {
      dom.btnStartEasy.addEventListener('click', (e) => {
        e.stopPropagation();
        showView('sets-easy');
      });
    }

    if (dom.diffCardMedium) dom.diffCardMedium.addEventListener('click', () => showView('sets-medium'));
    if (dom.btnStartMed) {
      dom.btnStartMed.addEventListener('click', (e) => {
        e.stopPropagation();
        showView('sets-medium');
      });
    }

    if (dom.diffCardHard) dom.diffCardHard.addEventListener('click', () => showView('sets-hard'));
    if (dom.btnStartHard) {
      dom.btnStartHard.addEventListener('click', (e) => {
        e.stopPropagation();
        showView('sets-hard');
      });
    }

    if (dom.diffCardSim) dom.diffCardSim.addEventListener('click', () => showView('sets-sim'));
    if (dom.btnStartSim) {
      dom.btnStartSim.addEventListener('click', (e) => {
        e.stopPropagation();
        showView('sets-sim');
      });
    }

    // Back buttons
    if (dom.btnBackToDiffEasy) dom.btnBackToDiffEasy.addEventListener('click', () => showView('difficulties'));
    if (dom.btnBackToDiffMed) dom.btnBackToDiffMed.addEventListener('click', () => showView('difficulties'));
    if (dom.btnBackToDiffHard) dom.btnBackToDiffHard.addEventListener('click', () => showView('difficulties'));
    if (dom.btnBackToDiffSim) dom.btnBackToDiffSim.addEventListener('click', () => showView('difficulties'));

    // Set card click handlers (data-start-fig-set)
    document.querySelectorAll('[data-start-fig-set]').forEach(el => {
      el.addEventListener('click', (e) => {
        e.stopPropagation();
        const setKey = el.getAttribute('data-start-fig-set');
        if (setKey) openStartModal(setKey);
      });
    });

    // Submissions modal
    if (dom.btnNavSubmissions) dom.btnNavSubmissions.addEventListener('click', openSubmissionsModal);
    if (dom.btnHeroSubmissions) dom.btnHeroSubmissions.addEventListener('click', openSubmissionsModal);
    if (dom.btnCloseSubmissions) dom.btnCloseSubmissions.addEventListener('click', closeSubmissionsModal);
    if (dom.modalSubmissions) {
      dom.modalSubmissions.addEventListener('click', (e) => {
        if (e.target === dom.modalSubmissions) closeSubmissionsModal();
      });
    }

    // Candidate Name modal
    if (dom.btnCancelStart) dom.btnCancelStart.addEventListener('click', () => dom.modalName.classList.add('hidden'));
    if (dom.btnConfirmStart) dom.btnConfirmStart.addEventListener('click', confirmStartExam);
    if (dom.candidateNameInput) {
      dom.candidateNameInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') confirmStartExam();
      });
    }

    // Exam stage controls
    if (dom.btnPrevQ) dom.btnPrevQ.addEventListener('click', () => goToQuestion(state.currentIndex - 1));
    if (dom.btnNextQ) dom.btnNextQ.addEventListener('click', () => goToQuestion(state.currentIndex + 1));
    if (dom.btnFlagQ) dom.btnFlagQ.addEventListener('click', toggleFlagCurrentQuestion);
    if (dom.btnSubmitExam) dom.btnSubmitExam.addEventListener('click', handleManualSubmit);

    // Results controls
    if (dom.btnRetakeExam) dom.btnRetakeExam.addEventListener('click', () => openStartModal(state.selectedSet));
    if (dom.btnResultsSubmissions) dom.btnResultsSubmissions.addEventListener('click', openSubmissionsModal);

    // Submissions search & export
    if (dom.subSearchInput) dom.subSearchInput.addEventListener('input', renderSubmissionsTable);
    if (dom.btnExportCsv) dom.btnExportCsv.addEventListener('click', exportSubmissionsCsv);
  }

  function showView(viewName) {
    state.view = viewName;
    if (dom.viewDifficulties) dom.viewDifficulties.classList.toggle('hidden', viewName !== 'difficulties');
    if (dom.viewSetsEasy) dom.viewSetsEasy.classList.toggle('hidden', viewName !== 'sets-easy');
    if (dom.viewSetsMedium) dom.viewSetsMedium.classList.toggle('hidden', viewName !== 'sets-medium');
    if (dom.viewSetsHard) dom.viewSetsHard.classList.toggle('hidden', viewName !== 'sets-hard');
    if (dom.viewSetsSim) dom.viewSetsSim.classList.toggle('hidden', viewName !== 'sets-sim');
    if (dom.viewExam) dom.viewExam.classList.toggle('hidden', viewName !== 'exam');
    if (dom.viewResults) dom.viewResults.classList.toggle('hidden', viewName !== 'results');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function openStartModal(setKey) {
    if (typeof AuthManager !== 'undefined') {
      if (!AuthManager.isLoggedIn()) {
        AuthManager.openModal({
          message: 'Please sign in to attend this dMAT Figure Sequences test.',
          onLoginSuccess: (u) => {
            if (u && u.name) {
              state.candidateName = u.name;
              localStorage.setItem('dmat_last_candidate', u.name);
            }
            openStartModal(setKey);
          }
        });
        return;
      } else {
        const u = AuthManager.getUser();
        if (u && u.name) {
          state.candidateName = u.name;
          localStorage.setItem('dmat_last_candidate', u.name);
        }
      }
    }
    state.selectedSet = setKey || 'hard_t1';
    updateModalLabels();

    dom.nameModalError.textContent = '';
    dom.candidateNameInput.value = (typeof AuthManager !== 'undefined' && AuthManager.getUser() && AuthManager.getUser().name) ? AuthManager.getUser().name : (state.candidateName || localStorage.getItem('dmat_last_candidate') || '');
    dom.modalName.classList.remove('hidden');
    setTimeout(() => {
      dom.candidateNameInput.focus();
      dom.candidateNameInput.select();
    }, 100);
  }

  function updateModalLabels() {
    const s = state.selectedSet;
    let track = 'Hard';
    let num = '1';

    if (s.startsWith('easy_t')) {
      track = 'Easy';
      num = s.replace('easy_t', '');
    } else if (s.startsWith('medium_t')) {
      track = 'Medium';
      num = s.replace('medium_t', '');
    } else if (s.startsWith('hard_t')) {
      track = 'Hard';
      num = s.replace('hard_t', '');
    } else if (s.startsWith('sim_t')) {
      track = 'Simulation';
      num = s.replace('sim_t', '');
    }

    if (dom.nameModalSetLabel) {
      dom.nameModalSetLabel.textContent = `Figure Sequences · ${track} Level · Set ${num} (20 Questions · 25 Minutes)`;
    }
    if (dom.btnConfirmStart) {
      dom.btnConfirmStart.textContent = `Begin ${track} Set ${num} (25m) ➔`;
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
    if (typeof AuthManager !== 'undefined') { AuthManager.updateUserName(name); }
    dom.modalName.classList.add('hidden');
    startExam(state.selectedSet);
  }

  function getSetDisplayName(setKey) {
    if (setKey.startsWith('easy_t')) {
      return `Figure Sequences – Easy Set ${setKey.replace('easy_t', '')}`;
    } else if (setKey.startsWith('medium_t')) {
      return `Figure Sequences – Medium Set ${setKey.replace('medium_t', '')}`;
    } else if (setKey.startsWith('hard_t')) {
      return `Figure Sequences – Hard Set ${setKey.replace('hard_t', '')}`;
    } else if (setKey.startsWith('sim_t')) {
      return `Figure Sequences – Simulation Set ${setKey.replace('sim_t', '')}`;
    }
    return `Figure Sequences – Set 1`;
  }

  function startExam(setKey) {
    state.selectedSet = setKey;
    state.userAnswers = {};
    state.flagged.clear();
    state.currentIndex = 0;
    state.examStartTime = new Date();

    const data = (typeof FIGURES_DATA !== 'undefined') ? FIGURES_DATA : {};
    const dataset = data[setKey] || data.hard_t1 || data.easy || [];
    state.questions = dataset.slice(0, 20);

    state.timerTotalSeconds = 25 * 60;
    state.timerRemainingSeconds = 25 * 60;

    dom.examTitle.textContent = getSetDisplayName(setKey);
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
      if (ans.m5 && ans.m6) btn.classList.add('answered');
      else if (ans.m5 || ans.m6) btn.classList.add('partial');
    }
  }

  function loadQuestion(idx) {
    state.currentIndex = idx;
    const q = state.questions[idx];
    if (!q) return;

    dom.qCurrentNumber.textContent = `Question ${idx + 1} of ${state.questions.length}`;

    const userAns = state.userAnswers[q.id] || {};

    // 1. Render sequence strip (Matrices 1 to 6)
    dom.qSequenceStrip.innerHTML = '';
    const sequence = q.matrices || q.sequence || [];

    // Render Matrix 1 to 4
    for (let mIdx = 0; mIdx < 4; mIdx++) {
      const col = document.createElement('div');
      col.className = 'matrix-seq-item';

      const title = document.createElement('div');
      title.className = 'matrix-seq-title';
      title.textContent = `Matrix ${mIdx + 1}`;
      col.appendChild(title);

      const wrap = document.createElement('div');
      wrap.className = 'matrix-svg-wrap';
      if (typeof FiguresRender !== 'undefined') {
        wrap.innerHTML = FiguresRender.renderMatrixSvg(sequence[mIdx] || [], 96);
      }
      col.appendChild(wrap);
      dom.qSequenceStrip.appendChild(col);

      // Add arrow divider
      const arrow = document.createElement('div');
      arrow.className = 'seq-arrow-divider';
      arrow.textContent = '➔';
      dom.qSequenceStrip.appendChild(arrow);
    }

    // Matrix 5 (Unknown / Chosen)
    const hasChosenM5 = userAns.m5 ? parseInt(userAns.m5, 10) : null;
    const col5 = document.createElement('div');
    col5.className = 'matrix-seq-item highlight-unknown';

    const title5 = document.createElement('div');
    title5.className = 'matrix-seq-title';
    title5.textContent = 'Matrix 5 (?)';
    col5.appendChild(title5);

    const wrap5 = document.createElement('div');
    wrap5.className = 'matrix-svg-wrap';
    if (hasChosenM5 && q.optionsM5 && q.optionsM5[hasChosenM5 - 1]) {
      wrap5.innerHTML = FiguresRender.renderMatrixSvg(q.optionsM5[hasChosenM5 - 1], 96);
    } else {
      wrap5.innerHTML = `
        <div class="matrix-seq-unknown-box" style="width:96px; height:96px;">
          <span class="unknown-qmark">?</span>
          <span class="unknown-sub">Select Below</span>
        </div>
      `;
    }
    col5.appendChild(wrap5);

    const pill5 = document.createElement('span');
    pill5.className = `seq-choice-pill ${hasChosenM5 ? 'pill-selected' : ''}`;
    pill5.textContent = hasChosenM5 ? `Choice: Option ${hasChosenM5}` : 'Not selected';
    col5.appendChild(pill5);
    dom.qSequenceStrip.appendChild(col5);

    // Arrow divider
    const arrow5 = document.createElement('div');
    arrow5.className = 'seq-arrow-divider';
    arrow5.textContent = '➔';
    dom.qSequenceStrip.appendChild(arrow5);

    // Matrix 6 (Unknown / Chosen)
    const hasChosenM6 = userAns.m6 ? parseInt(userAns.m6, 10) : null;
    const col6 = document.createElement('div');
    col6.className = 'matrix-seq-item highlight-unknown';

    const title6 = document.createElement('div');
    title6.className = 'matrix-seq-title';
    title6.textContent = 'Matrix 6 (?)';
    col6.appendChild(title6);

    const wrap6 = document.createElement('div');
    wrap6.className = 'matrix-svg-wrap';
    if (hasChosenM6 && q.optionsM6 && q.optionsM6[hasChosenM6 - 1]) {
      wrap6.innerHTML = FiguresRender.renderMatrixSvg(q.optionsM6[hasChosenM6 - 1], 96);
    } else {
      wrap6.innerHTML = `
        <div class="matrix-seq-unknown-box" style="width:96px; height:96px;">
          <span class="unknown-qmark">?</span>
          <span class="unknown-sub">Select Below</span>
        </div>
      `;
    }
    col6.appendChild(wrap6);

    const pill6 = document.createElement('span');
    pill6.className = `seq-choice-pill ${hasChosenM6 ? 'pill-selected' : ''}`;
    pill6.textContent = hasChosenM6 ? `Choice: Option ${hasChosenM6}` : 'Not selected';
    col6.appendChild(pill6);
    dom.qSequenceStrip.appendChild(col6);

    // 2. Render Options for Matrix 5
    dom.optsListM5.innerHTML = '';
    (q.optionsM5 || []).forEach((optShapes, oIdx) => {
      const optNum = oIdx + 1;
      const isSelected = (userAns.m5 === optNum);
      const cardWrap = document.createElement('div');
      if (typeof FiguresRender !== 'undefined') {
        cardWrap.innerHTML = FiguresRender.renderOptionCard(optShapes, optNum, isSelected, 82);
      }
      const card = cardWrap.firstElementChild;
      card.addEventListener('click', () => {
        if (!state.userAnswers[q.id]) state.userAnswers[q.id] = {};
        state.userAnswers[q.id].m5 = optNum;
        loadQuestion(state.currentIndex);
        updatePaletteItem(state.currentIndex);
      });
      dom.optsListM5.appendChild(card);
    });

    // 3. Render Options for Matrix 6
    dom.optsListM6.innerHTML = '';
    (q.optionsM6 || []).forEach((optShapes, oIdx) => {
      const optNum = oIdx + 1;
      const isSelected = (userAns.m6 === optNum);
      const cardWrap = document.createElement('div');
      if (typeof FiguresRender !== 'undefined') {
        cardWrap.innerHTML = FiguresRender.renderOptionCard(optShapes, optNum, isSelected, 82);
      }
      const card = cardWrap.firstElementChild;
      card.addEventListener('click', () => {
        if (!state.userAnswers[q.id]) state.userAnswers[q.id] = {};
        state.userAnswers[q.id].m6 = optNum;
        loadQuestion(state.currentIndex);
        updatePaletteItem(state.currentIndex);
      });
      dom.optsListM6.appendChild(card);
    });

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

    dom.btnPrevQ.disabled = (idx === 0);
    dom.btnNextQ.disabled = (idx === state.questions.length - 1);
    updateAllPaletteItems();
  }

  function goToQuestion(idx) {
    if (idx < 0 || idx >= state.questions.length) return;
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
    let unans = 0;
    state.questions.forEach(q => {
      const a = state.userAnswers[q.id];
      if (!a || !a.m5 || !a.m6) unans++;
    });

    let msg = 'Are you ready to submit your Figure Sequences exam?';
    if (unans > 0) {
      msg = `You have ${unans} incomplete question(s). Both Matrix 5 and Matrix 6 must be answered to score each question. Are you sure you want to finish and submit?`;
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

      const isM5Correct = parseInt(user.m5, 10) === sol.m5;
      const isM6Correct = parseInt(user.m6, 10) === sol.m6;
      const allCorrect = (isM5Correct && isM6Correct);
      if (allCorrect) correctCount++;

      return {
        questionId: q.id,
        subtest: 'figures',
        title: `Question ${q.id}`,
        sequence: q.matrices || q.sequence || [],
        optionsM5: q.optionsM5,
        optionsM6: q.optionsM6,
        solution: sol,
        userAnswer: user,
        isCorrect: allCorrect,
        explanation: q.ruleExplanation || q.explanation || '',
        fieldCorrectness: { m5: isM5Correct, m6: isM6Correct }
      };
    });

    const total = state.questions.length;
    const percentage = Math.round((correctCount / total) * 100);
    const diffDisplay = getSetDisplayName(state.selectedSet);

    const submission = {
      id: 'sub-' + Date.now(),
      candidateName: state.candidateName,
      candidateEmail: (typeof AuthManager !== 'undefined' && AuthManager.getUser()) ? (AuthManager.getUser().email || '') : '',
      difficulty: diffDisplay,
      difficultyKey: state.selectedSet,
      subtest: 'figures',
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

      if (typeof FiguresRender !== 'undefined') {
        card.innerHTML = FiguresRender.renderBreakdownItem(item, idx);
      }
      dom.resBreakdown.appendChild(card);
    });
  }

  // --- Submissions Persistence & Modal ---
  function isSampleRecord(sub) {
    if (!sub || !sub.id) return true;
    if (sub.id.startsWith('sub-live-')) return true;
    // Check admin-deleted tombstone IDs
    try {
      const deleted = JSON.parse(localStorage.getItem('dmat_deleted_ids') || '[]');
      if (sub && sub.id && deleted.includes(sub.id)) return true;
    } catch(e) {}

    return false;
  }

  function getSubmissions() {
    if (typeof CloudSync !== 'undefined' && CloudSync.getLocalList) {
      return CloudSync.getLocalList();
    }
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
    if (!dom.subTableBody) return;
    const query = dom.subSearchInput ? dom.subSearchInput.value.toLowerCase().trim() : '';
    const all = getSubmissions();

    const filtered = all.filter(s => {
      if (!query) return true;
      const name = (s.candidateName || '').toLowerCase();
      const diff = (s.difficulty || '').toLowerCase();
      const date = (s.submittedAt || '').toLowerCase();
      return name.includes(query) || diff.includes(query) || date.includes(query);
    });

    dom.subTableBody.innerHTML = '';
    if (dom.subEmptyState) {
      dom.subEmptyState.classList.toggle('hidden', filtered.length > 0);
    }

    filtered.forEach((sub, idx) => {
      const tr = document.createElement('tr');
      const pct = sub.percentage !== undefined ? sub.percentage : (sub.total ? Math.round((sub.score / sub.total) * 100) : 0);

      tr.innerHTML = `
        <td style="color:var(--t-45);">${idx + 1}</td>
        <td><strong>${escapeHtml(sub.candidateName || 'Unknown')}</strong></td>
        <td><span class="badge-tag-diff">${escapeHtml(sub.difficulty || 'Figure Sequences')}</span></td>
        <td><strong style="color:#10b981;">${sub.score} / ${sub.total}</strong> (${pct}%)</td>
        <td>${escapeHtml(sub.timeTakenFormatted || '—')}</td>
        <td style="color:var(--t-60); font-size:12px;">${escapeHtml(sub.submittedAt || '—')}</td>
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
      `"${(s.difficulty || '').replace(/"/g, '""')}"`,
      s.score,
      s.total,
      `${s.percentage}%`,
      `"${s.timeTakenFormatted || ''}"`,
      `"${s.submittedAt || ''}"`
    ]);
    const csvContent = [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `dmat_figure_submissions_${Date.now()}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }

  function formatDuration(totalSeconds) {
    if (isNaN(totalSeconds) || totalSeconds < 0) totalSeconds = 0;
    const m = Math.floor(totalSeconds / 60);
    const s = Math.floor(totalSeconds % 60);
    return `${m}m ${s.toString().padStart(2, '0')}s`;
  }

  function formatDateTime(d) {
    if (!d) d = new Date();
    if (typeof d === 'string') d = new Date(d);
    const y = d.getFullYear();
    const mo = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    const h = String(d.getHours()).padStart(2, '0');
    const mi = String(d.getMinutes()).padStart(2, '0');
    return `${y}-${mo}-${day} ${h}:${mi}`;
  }

  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  // Auto-init on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
