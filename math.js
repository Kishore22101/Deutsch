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
  } catch (e) { }
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
    lastResult: null,
    isExamSubmitted: false,
    isGenerating: false
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

    CloudSync.onStatusChange((status, text) => {
      updateSyncStatusUI(status, text);
    });

    CloudSync.fetchRemoteSubmissions().then(() => {
      renderSubmissionsCount();
      if (dom.modalSubmissions && !dom.modalSubmissions.classList.contains('hidden')) {
        renderSubmissionsTable();
      }
    }).catch(() => { });

    CloudSync.subscribeRealTime(() => {
      renderSubmissionsCount();
      if (dom.modalSubmissions && !dom.modalSubmissions.classList.contains('hidden')) {
        renderSubmissionsTable();
      }
    });
  }

  function updateSyncStatusUI(status, text) {
    const headerPill = document.getElementById('math-header-sync-pill');
    const headerDot = document.getElementById('math-live-sync-dot');
    const headerText = document.getElementById('math-live-sync-text');

    const modalPill = document.getElementById('math-modal-sync-pill');
    const modalDot = document.getElementById('math-modal-live-sync-dot');
    const modalText = document.getElementById('math-modal-live-sync-text');

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
      viewSets: document.getElementById('view-sets'),
      viewSetsEasy: document.getElementById('view-sets-easy'),
      viewSetsMedium: document.getElementById('view-sets-medium'),
      viewSetsSim: document.getElementById('view-sets-sim'),
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
      diffCardSim: document.getElementById('diff-card-sim'),
      btnStartEasy: document.getElementById('btn-start-easy'),
      btnStartMed: document.getElementById('btn-start-med'),
      btnStartHard: document.getElementById('btn-start-hard'),
      btnStartSim: document.getElementById('btn-start-sim'),
      btnBackToDiff: document.getElementById('btn-back-to-diff'),
      btnBackToDiffEasy: document.getElementById('btn-back-to-diff-easy'),
      btnBackToDiffMed: document.getElementById('btn-back-to-diff-med'),
      btnBackToDiffSim: document.getElementById('btn-back-to-diff-sim'),

      // Name Modal
      candidateNameInput: document.getElementById('input-candidate-name'),
      nameModalError: document.getElementById('name-modal-error'),
      nameModalSetLabel: document.getElementById('name-modal-set-label'),
      btnConfirmStart: document.getElementById('btn-confirm-start'),
      btnCancelStart: document.getElementById('btn-cancel-start'),

      // Generating Questions Popup
      modalGenerating: document.getElementById('modal-generating-questions'),
      genProgressFill: document.getElementById('gen-progress-fill'),
      genCountdown: document.getElementById('gen-countdown'),

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
      btnResultsDiff: document.getElementById('btn-results-diff'),
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

    // Auto-submit when candidate exits, closes tab, or refreshes
    window.addEventListener('beforeunload', (e) => {
      if (state.view === 'exam' && !state.isExamSubmitted) {
        autoSubmitOnExit();
        e.preventDefault();
        e.returnValue = 'Your test is in progress. Leaving or refreshing will automatically submit your test.';
        return e.returnValue;
      }
    });

    window.addEventListener('pagehide', () => {
      if (state.view === 'exam' && !state.isExamSubmitted) {
        autoSubmitOnExit();
      }
    });

    // Difficulty card clicks -> directly open start modal with autogenerated pool
    if (dom.diffCardEasy) {
      dom.diffCardEasy.addEventListener('click', () => {
        openStartModal('easy_t1');
      });
    }
    if (dom.btnStartEasy) {
      dom.btnStartEasy.addEventListener('click', (e) => {
        e.stopPropagation();
        openStartModal('easy_t1');
      });
    }

    // Medium level click -> directly open start modal with autogenerated pool
    if (dom.diffCardMed) {
      dom.diffCardMed.addEventListener('click', () => {
        openStartModal('medium_t1');
      });
    }
    if (dom.btnStartMed) {
      dom.btnStartMed.addEventListener('click', (e) => {
        e.stopPropagation();
        openStartModal('medium_t1');
      });
    }

    // Hard level click -> directly open start modal with autogenerated pool
    if (dom.diffCardHard) {
      dom.diffCardHard.addEventListener('click', () => {
        openStartModal('hard_t1');
      });
    }
    if (dom.btnStartHard) {
      dom.btnStartHard.addEventListener('click', (e) => {
        e.stopPropagation();
        openStartModal('hard_t1');
      });
    }

    // Simulation level click -> directly open start modal with mixed 5E+5M+10H pool
    if (dom.diffCardSim) {
      dom.diffCardSim.addEventListener('click', () => {
        openStartModal('sim_t1');
      });
    }
    if (dom.btnStartSim) {
      dom.btnStartSim.addEventListener('click', (e) => {
        e.stopPropagation();
        openStartModal('sim_t1');
      });
    }

    // Back button from Sets to Difficulty level
    if (dom.btnBackToDiff) {
      dom.btnBackToDiff.addEventListener('click', () => {
        showView('difficulties');
      });
    }
    if (dom.btnBackToDiffEasy) {
      dom.btnBackToDiffEasy.addEventListener('click', () => {
        showView('difficulties');
      });
    }
    if (dom.btnBackToDiffMed) {
      dom.btnBackToDiffMed.addEventListener('click', () => {
        showView('difficulties');
      });
    }
    if (dom.btnBackToDiffSim) {
      dom.btnBackToDiffSim.addEventListener('click', () => {
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

    // Easy set card click handlers
    for (let s = 1; s <= 5; s++) {
      const c = document.getElementById(`card-easy-set-${s}`);
      if (c) {
        c.addEventListener('click', () => openStartModal(`easy_t${s}`));
      }
    }

    // Simulation set card click handlers
    for (let s = 1; s <= 5; s++) {
      const c = document.getElementById(`card-sim-set-${s}`);
      if (c) {
        c.addEventListener('click', () => openStartModal(`sim_t${s}`));
      }
    }

    const cardSet1 = document.getElementById('card-set-1');
    if (cardSet1) {
      cardSet1.addEventListener('click', () => openStartModal('hard_t1'));
    }
    const cardSet2 = document.getElementById('card-set-2');
    if (cardSet2) {
      cardSet2.addEventListener('click', () => openStartModal('hard_t2'));
    }
    const cardSet3 = document.getElementById('card-set-3');
    if (cardSet3) {
      cardSet3.addEventListener('click', () => openStartModal('hard_t3'));
    }
    const cardSet4 = document.getElementById('card-set-4');
    if (cardSet4) {
      cardSet4.addEventListener('click', () => openStartModal('hard_t4'));
    }
    const cardSet5 = document.getElementById('card-set-5');
    if (cardSet5) {
      cardSet5.addEventListener('click', () => openStartModal('hard_t5'));
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
    if (dom.btnResultsDiff) {
      dom.btnResultsDiff.addEventListener('click', () => {
        showView('difficulties');
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
    if (dom.viewSetsEasy) dom.viewSetsEasy.classList.toggle('hidden', viewName !== 'sets-easy');
    if (dom.viewSetsMedium) dom.viewSetsMedium.classList.toggle('hidden', viewName !== 'sets-medium');
    if (dom.viewSetsSim) dom.viewSetsSim.classList.toggle('hidden', viewName !== 'sets-sim');
    if (dom.viewExam) dom.viewExam.classList.toggle('hidden', viewName !== 'exam');
    if (dom.viewResults) dom.viewResults.classList.toggle('hidden', viewName !== 'results');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function openStartModal(setKey) {
    if (typeof AuthManager !== 'undefined') {
      if (!AuthManager.isLoggedIn()) {
        AuthManager.openModal({
          message: 'Please sign in to attend this dMAT Mathematic Equations test.',
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

  function getSetDisplayName(setKey) {
    if (setKey.startsWith('easy')) {
      return 'Equations – Easy (Autogenerated)';
    } else if (setKey.startsWith('medium')) {
      return 'Equations – Medium (Autogenerated)';
    } else if (setKey.startsWith('hard')) {
      return 'Equations – Hard (Autogenerated)';
    } else if (setKey.startsWith('sim')) {
      return 'Equations – Simulation (Autogenerated)';
    }
    return 'Equations – Test (Autogenerated)';
  }

  function shuffleArray(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  // Retrieve full pool of 100 questions for a given track with provenance
  function getTrackPool(track) {
    const data = (typeof DMAT_DATA !== 'undefined') ? DMAT_DATA : {};
    let setKeys = [];
    if (track === 'easy') {
      setKeys = ['easy_t1', 'easy_t2', 'easy_t3', 'easy_t4', 'easy_t5'];
    } else if (track === 'medium') {
      setKeys = ['medium_t1', 'medium_t2', 'medium_t3', 'medium_t4', 'medium_t5'];
    } else if (track === 'hard') {
      setKeys = ['hard_t1', 'hard_t2', 'hard_t3', 'hard_t4', 'hard_t5'];
    }
    let pool = [];
    setKeys.forEach(k => {
      if (Array.isArray(data[k])) {
        data[k].forEach((origQ, qIdx) => {
          const item = JSON.parse(JSON.stringify(origQ));
          item.setKey = k;
          item.origIndex = qIdx;
          item.origQNum = item.id || (qIdx + 1);
          item.ref = `${k}_${item.origQNum}`;
          pool.push(item);
        });
      }
    });
    return pool;
  }

  // Autogenerate 20 randomized questions from pool (Simulation = 5 Easy + 5 Medium + 10 Hard)
  function generateExamQuestions(trackKey) {
    let rawQuestions = [];

    if (trackKey.startsWith('sim')) {
      const easyPool = shuffleArray(getTrackPool('easy'));
      const medPool = shuffleArray(getTrackPool('medium'));
      const hardPool = shuffleArray(getTrackPool('hard'));

      const easySamples = easyPool.slice(0, 5);
      const medSamples = medPool.slice(0, 5);
      const hardSamples = hardPool.slice(0, 10);

      rawQuestions = shuffleArray([...easySamples, ...medSamples, ...hardSamples]);
    } else if (trackKey.startsWith('easy')) {
      rawQuestions = shuffleArray(getTrackPool('easy')).slice(0, 20);
    } else if (trackKey.startsWith('medium')) {
      rawQuestions = shuffleArray(getTrackPool('medium')).slice(0, 20);
    } else {
      rawQuestions = shuffleArray(getTrackPool('hard')).slice(0, 20);
    }

    return rawQuestions.map((origQ, idx) => {
      const q = JSON.parse(JSON.stringify(origQ));
      q.id = idx + 1;
      q.setKey = origQ.setKey || '';
      q.origIndex = origQ.origIndex;
      q.origQNum = origQ.origQNum;
      q.ref = origQ.ref || (origQ.setKey ? `${origQ.setKey}_${origQ.origQNum || (idx + 1)}` : `math_${idx + 1}`);
      return q;
    });
  }

  function updateModalLabels() {
    let track = 'Hard';
    if (state.selectedSet.startsWith('easy')) track = 'Easy';
    else if (state.selectedSet.startsWith('medium')) track = 'Medium';
    else if (state.selectedSet.startsWith('sim')) track = 'Simulation';

    if (dom.nameModalSetLabel) {
      dom.nameModalSetLabel.textContent = `Mathematic Equations · ${track} Level · Autogenerated (20 Questions)`;
    }
    if (dom.btnConfirmStart) {
      dom.btnConfirmStart.textContent = `Begin ${track} Test (25m) ➔`;
    }
  }

  function confirmStartExam() {
    if (state.isGenerating) return;
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

    if (dom.modalGenerating) {
      state.isGenerating = true;
      let secondsLeft = 5;
      if (dom.genCountdown) dom.genCountdown.textContent = `Starting in ${secondsLeft}s...`;
      if (dom.genProgressFill) {
        dom.genProgressFill.style.transition = 'none';
        dom.genProgressFill.style.width = '0%';
        void dom.genProgressFill.offsetWidth;
        dom.genProgressFill.style.transition = 'width 5s linear';
        dom.genProgressFill.style.width = '100%';
      }
      dom.modalGenerating.classList.remove('hidden');

      const genTimer = setInterval(() => {
        secondsLeft--;
        if (secondsLeft > 0) {
          if (dom.genCountdown) dom.genCountdown.textContent = `Starting in ${secondsLeft}s...`;
        } else {
          clearInterval(genTimer);
          dom.modalGenerating.classList.add('hidden');
          state.isGenerating = false;
          startExam(state.selectedSet);
        }
      }, 1000);
    } else {
      startExam(state.selectedSet);
    }
  }

  function startExam(setKey) {
    state.isExamSubmitted = false;
    state.selectedSet = setKey;
    state.userAnswers = {};
    state.flagged.clear();
    state.currentIndex = 0;
    state.examStartTime = new Date();

    state.questions = generateExamQuestions(setKey);

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
    const hasC = (q.solution && q.solution.C !== undefined);
    const hasD = (q.solution && q.solution.D !== undefined);
    if (ans) {
      const varsToCheck = [ans.A, ans.B];
      if (hasC) varsToCheck.push(ans.C);
      if (hasD) varsToCheck.push(ans.D);
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

    // Show/hide inputs C and D based on difficulty / solution
    const isEasyTest = state.selectedSet && state.selectedSet.startsWith('easy_t');
    const isMediumTest = state.selectedSet && state.selectedSet.startsWith('medium_t');
    const hasC = !isEasyTest && (q.solution && q.solution.C !== undefined);
    const hasD = !isEasyTest && !isMediumTest && (q.solution && q.solution.D !== undefined);

    const inputCGroup = dom.inputC ? dom.inputC.closest('.var-input-group') : null;
    const inputDGroup = dom.inputD ? dom.inputD.closest('.var-input-group') : null;
    const inputsGrid = dom.inputA ? dom.inputA.closest('.inputs-row-grid') : null;

    if (inputCGroup) {
      if (hasC) {
        inputCGroup.classList.remove('hidden-var');
        inputCGroup.style.display = '';
      } else {
        inputCGroup.classList.add('hidden-var');
        inputCGroup.style.setProperty('display', 'none', 'important');
      }
    }

    if (inputDGroup) {
      if (hasD) {
        inputDGroup.classList.remove('hidden-var');
        inputDGroup.style.display = '';
      } else {
        inputDGroup.classList.add('hidden-var');
        inputDGroup.style.setProperty('display', 'none', 'important');
      }
    }

    if (inputsGrid) {
      inputsGrid.classList.toggle('has-2-vars', !hasC && !hasD);
      inputsGrid.classList.toggle('has-3-vars', hasC && !hasD);
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
    const isEasyTest = state.selectedSet && state.selectedSet.startsWith('easy_t');
    const isMediumTest = state.selectedSet && state.selectedSet.startsWith('medium_t');
    const hasC = !isEasyTest && (q.solution && q.solution.C !== undefined);
    const hasD = !isEasyTest && !isMediumTest && (q.solution && q.solution.D !== undefined);
    state.userAnswers[q.id] = {
      A: dom.inputA.value.trim(),
      B: dom.inputB.value.trim(),
      C: hasC ? dom.inputC.value.trim() : '',
      D: hasD ? dom.inputD.value.trim() : ''
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
      const hasC = (q.solution && q.solution.C !== undefined);
      const hasD = (q.solution && q.solution.D !== undefined);
      const vars = [a.A, a.B];
      if (hasC) vars.push(a.C);
      if (hasD) vars.push(a.D);
      const filled = vars.filter(v => v !== '' && v !== undefined && v !== null).length;
      if (filled < vars.length) unans++;
    });

    let msg = 'Are you ready to submit your exam?';
    if (unans > 0) {
      msg = `You have ${unans} incomplete question(s). Are you sure you want to finish and submit?`;
    }
    if (confirm(msg)) {
      finishExam('Completed');
    }
  }

  
  /* ───── AUTO-SUBMIT ON EXIT / REFRESH ───── */
  function autoSubmitOnExit() {
    if (state.view === 'exam' && !state.isExamSubmitted && state.questions && state.questions.length > 0) {
      try {
        finishExam('Auto-Submitted (Exited/Refreshed)');
        if (state.lastResult) {
          sessionStorage.setItem('dmat_auto_submit_math', JSON.stringify({
            result: state.lastResult,
            reason: 'Your exam was automatically submitted because you refreshed or navigated away from the website.'
          }));
        }
      } catch (err) {
        console.warn('Auto-submit error:', err);
      }
    }
  }

  function checkAutoSubmitNotice() {
    try {
      const raw = sessionStorage.getItem('dmat_auto_submit_math');
      if (raw) {
        sessionStorage.removeItem('dmat_auto_submit_math');
        const data = JSON.parse(raw);
        if (data && data.result) {
          state.lastResult = data.result;
          renderResults(data.result);
          renderSubmissionsCount();
          showView('results');
          showAutoSubmitAlert(data.reason || 'Your exam was automatically submitted because you refreshed or left the website.');
          return true;
        }
      }
    } catch (e) {}
    return false;
  }

  function showAutoSubmitAlert(msg) {
    const card = document.querySelector('#view-results .results-hero-card') || document.getElementById('view-results');
    if (!card) return;
    let existing = document.getElementById('auto-submit-alert-banner');
    if (!existing) {
      existing = document.createElement('div');
      existing.id = 'auto-submit-alert-banner';
      existing.style.cssText = 'background:rgba(239,68,68,0.15); border:1px solid rgba(239,68,68,0.4); color:#fca5a5; padding:12px 18px; border-radius:10px; font-size:13px; font-weight:700; margin-bottom:18px; text-align:center; display:flex; align-items:center; justify-content:center; gap:8px;';
      card.insertBefore(existing, card.firstChild);
    }
    existing.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg> <span>${escapeHtml(msg)}</span>`;
  }

  function finishExam(status) {
    if (state.isExamSubmitted) return;
    state.isExamSubmitted = true;
    state.examEndTime = new Date();
    if (state.timerInterval) clearInterval(state.timerInterval);

    const secondsTaken = state.timerTotalSeconds - state.timerRemainingSeconds;
    const timeTakenFormatted = formatDuration(secondsTaken);
    const timeLeftFormatted = formatDuration(state.timerRemainingSeconds);

    let correctCount = 0;
    const details = state.questions.map(q => {
      const user = state.userAnswers[q.id] || {};
      const sol = q.solution || {};
      const hasC = (sol.C !== undefined);
      const hasD = (sol.D !== undefined);

      const isACorrect = parseInt(user.A, 10) === sol.A;
      const isBCorrect = parseInt(user.B, 10) === sol.B;
      const isCCorrect = hasC ? (parseInt(user.C, 10) === sol.C) : true;
      const isDCorrect = hasD ? (parseInt(user.D, 10) === sol.D) : true;
      const allCorrect = (isACorrect && isBCorrect && isCCorrect && isDCorrect);
      if (allCorrect) correctCount++;

      return {
        questionId: q.id,
        ref: q.ref || '',
        setKey: q.setKey || '',
        origIndex: q.origIndex,
        origQNum: q.origQNum,
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

    const setDisplayName = getSetDisplayName(state.selectedSet);

    const submission = {
      id: 'sub-' + Date.now(),
      candidateName: state.candidateName,
      candidateEmail: (typeof AuthManager !== 'undefined' && AuthManager.getUser()) ? (AuthManager.getUser().email || '') : '',
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
      CloudSync.broadcastSubmission(submission).catch(() => { });
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
      const hasC = (sol.C !== undefined);
      const hasD = (sol.D !== undefined);
      const steps = (item.stepByStep || []).map(s => `<li>${s}</li>`).join('');

      const userCPill = hasC ? `<span class="${fc.C ? 'var-correct' : 'var-wrong'}">C = ${u.C !== '' && u.C !== undefined ? u.C : '—'}</span>` : '';
      const solCPill = hasC ? `<span class="var-sol">C = ${sol.C}</span>` : '';
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
                ${userCPill}
                ${userDPill}
              </div>
            </div>
            <div class="correct-col">
              <span class="col-title">Official Solution:</span>
              <div class="ans-grid">
                <span class="var-sol">A = ${sol.A}</span>
                <span class="var-sol">B = ${sol.B}</span>
                ${solCPill}
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
    // Check admin-deleted tombstone IDs
    try {
      const deleted = JSON.parse(localStorage.getItem('dmat_deleted_ids') || '[]');
      if (sub && sub.id && deleted.includes(sub.id)) return true;
    } catch (e) { }

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
    } catch (e) { }
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
