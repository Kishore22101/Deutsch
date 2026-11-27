// latin.js - Dedicated Controller for dMAT Latin Squares (Lateinische Quadrate)
// 20 Practice Sets (Easy 1-5, Medium 1-5, Hard 1-5, Simulation 1-5) · 20 Questions · 25 Minutes each

(function () {
  'use strict';

  const state = {
    view: 'difficulties', // 'difficulties' | 'sets-easy' | 'sets-med' | 'sets-hard' | 'sets-sim' | 'exam' | 'results'
    selectedSet: 'hard_t1',
    candidateName: localStorage.getItem('dmat_last_candidate') || '',
    questions: [],
    currentIndex: 0,
    userAnswers: {}, // { [qNum]: 'A' | 'B' | 'C' | 'D' | 'E' }
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

  const colLabels = ['α', 'β', 'γ', 'δ', 'ε'];
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
    const headerPill = document.getElementById('latin-header-sync-pill');
    const headerDot = document.getElementById('latin-live-sync-dot');
    const headerText = document.getElementById('latin-live-sync-text');

    const statusClass = (status === 'connected' ? 'connected' : (status === 'syncing' ? 'syncing' : 'offline'));

    if (headerText) headerText.textContent = text;
    if (headerDot) headerDot.className = 'live-dot ' + (statusClass === 'connected' ? '' : statusClass);
    if (headerPill) headerPill.className = 'live-status-pill ' + (statusClass === 'connected' ? '' : statusClass);
  }

  function cacheDom() {
    dom = {
      // Views
      viewDifficulties: document.getElementById('view-difficulties'),
      viewSetsEasy: document.getElementById('view-sets-easy'),
      viewSetsMed: document.getElementById('view-sets-medium'),
      viewSetsHard: document.getElementById('view-sets-hard'),
      viewSetsSim: document.getElementById('view-sets-sim'),
      viewExam: document.getElementById('view-exam'),
      viewResults: document.getElementById('view-results'),
      modalName: document.getElementById('modal-candidate-name'),
      modalSubmissions: document.getElementById('modal-submissions'),

      // Topbar & Nav
      btnNavSubmissions: document.getElementById('btn-nav-submissions'),
      subCountBadges: document.querySelectorAll('.sub-count-display'),
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

      // Back buttons from sets
      btnBackToDiffEasy: document.getElementById('btn-back-to-diff-easy'),
      btnBackToDiffMed: document.getElementById('btn-back-to-diff-med'),
      btnBackToDiffHard: document.getElementById('btn-back-to-diff-hard'),
      btnBackToDiffSim: document.getElementById('btn-back-to-diff-sim'),

      // Name Modal
      candidateNameInput: document.getElementById('input-candidate-name'),
      nameModalError: document.getElementById('name-modal-error'),
      nameModalSetLabel: document.getElementById('name-modal-set-label'),
      btnCancelStart: document.getElementById('btn-cancel-start'),
      btnConfirmStart: document.getElementById('btn-confirm-start'),

      // Generating Questions Popup
      modalGenerating: document.getElementById('modal-generating-questions'),
      genProgressFill: document.getElementById('gen-progress-fill'),
      genCountdown: document.getElementById('gen-countdown'),

      // Exam UI
      examTitle: document.getElementById('exam-title'),
      examCandidateName: document.getElementById('exam-candidate-name'),
      examTimer: document.getElementById('exam-timer'),
      examTimerProgress: document.getElementById('exam-timer-progress'),
      btnSubmitExam: document.getElementById('btn-submit-exam'),
      qPalette: document.getElementById('q-palette'),

      // Stage
      qCurrentNumber: document.getElementById('q-current-number'),
      qLatinGridBox: document.getElementById('q-latin-grid-box'),
      latinOptionsContainer: document.getElementById('latin-options-container'),
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
      btnResultsSubmissions: document.getElementById('btn-results-submissions'),
      btnRetakeExam: document.getElementById('btn-retake-exam'),
      btnResultsDiff: document.getElementById('btn-results-diff'),

      // Submissions Modal
      btnCloseSubmissions: document.getElementById('btn-close-submissions'),
      subSearchInput: document.getElementById('sub-search-input'),
      submissionsTableBody: document.getElementById('submissions-table-body'),
      submissionsEmptyState: document.getElementById('submissions-empty-state'),
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

    // Navigation & Modals
    if (dom.btnNavSubmissions) dom.btnNavSubmissions.addEventListener('click', openSubmissionsModal);
    if (dom.btnHeroSubmissions) dom.btnHeroSubmissions.addEventListener('click', openSubmissionsModal);
    if (dom.btnCloseSubmissions) dom.btnCloseSubmissions.addEventListener('click', closeSubmissionsModal);

    // Difficulty navigation -> directly open start modal with autogenerated pool
    const showEasy = () => openStartModal('easy_t1');
    const showMed = () => openStartModal('medium_t1');
    const showHard = () => openStartModal('hard_t1');
    const showSim = () => openStartModal('sim_t1');

    if (dom.diffCardEasy) dom.diffCardEasy.addEventListener('click', showEasy);
    if (dom.btnStartEasy) dom.btnStartEasy.addEventListener('click', (e) => { e.stopPropagation(); showEasy(); });

    if (dom.diffCardMed) dom.diffCardMed.addEventListener('click', showMed);
    if (dom.btnStartMed) dom.btnStartMed.addEventListener('click', (e) => { e.stopPropagation(); showMed(); });

    if (dom.diffCardHard) dom.diffCardHard.addEventListener('click', showHard);
    if (dom.btnStartHard) dom.btnStartHard.addEventListener('click', (e) => { e.stopPropagation(); showHard(); });

    if (dom.diffCardSim) dom.diffCardSim.addEventListener('click', showSim);
    if (dom.btnStartSim) dom.btnStartSim.addEventListener('click', (e) => { e.stopPropagation(); showSim(); });

    // Back to difficulties
    const backToDiff = () => showView('difficulties');
    if (dom.btnBackToDiffEasy) dom.btnBackToDiffEasy.addEventListener('click', backToDiff);
    if (dom.btnBackToDiffMed) dom.btnBackToDiffMed.addEventListener('click', backToDiff);
    if (dom.btnBackToDiffHard) dom.btnBackToDiffHard.addEventListener('click', backToDiff);
    if (dom.btnBackToDiffSim) dom.btnBackToDiffSim.addEventListener('click', backToDiff);

    // Set buttons (data-start-set attributes)
    document.querySelectorAll('[data-start-set]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const setKey = btn.getAttribute('data-start-set');
        openStartModal(setKey);
      });
    });

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

    // Keyboard shortcuts in exam (A-E keys, Arrow keys)
    window.addEventListener('keydown', (e) => {
      if (state.view !== 'exam') return;
      if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA')) return;

      const key = e.key.toUpperCase();
      if (['A', 'B', 'C', 'D', 'E'].includes(key)) {
        selectOption(key);
      } else if (e.key === 'ArrowLeft') {
        if (state.currentIndex > 0) goToQuestion(state.currentIndex - 1);
      } else if (e.key === 'ArrowRight') {
        if (state.currentIndex < state.questions.length - 1) goToQuestion(state.currentIndex + 1);
      }
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
    const views = [
      dom.viewDifficulties,
      dom.viewSetsEasy,
      dom.viewSetsMed,
      dom.viewSetsHard,
      dom.viewSetsSim,
      dom.viewExam,
      dom.viewResults
    ];
    views.forEach(v => { if (v) v.classList.add('hidden'); });

    if (viewName === 'difficulties' && dom.viewDifficulties) dom.viewDifficulties.classList.remove('hidden');
    else if (viewName === 'sets-easy' && dom.viewSetsEasy) dom.viewSetsEasy.classList.remove('hidden');
    else if (viewName === 'sets-med' && dom.viewSetsMed) dom.viewSetsMed.classList.remove('hidden');
    else if (viewName === 'sets-hard' && dom.viewSetsHard) dom.viewSetsHard.classList.remove('hidden');
    else if (viewName === 'sets-sim' && dom.viewSetsSim) dom.viewSetsSim.classList.remove('hidden');
    else if (viewName === 'exam' && dom.viewExam) dom.viewExam.classList.remove('hidden');
    else if (viewName === 'results' && dom.viewResults) dom.viewResults.classList.remove('hidden');

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function openStartModal(setKey) {
    if (typeof AuthManager !== 'undefined') {
      if (!AuthManager.isLoggedIn()) {
        AuthManager.openModal({
          message: 'Please sign in to attend this dMAT Latin Squares test.',
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
    state.selectedSet = setKey;
    if (dom.candidateNameInput) {
      dom.candidateNameInput.value = (typeof AuthManager !== 'undefined' && AuthManager.getUser() && AuthManager.getUser().name) ? AuthManager.getUser().name : (state.candidateName || localStorage.getItem('dmat_last_candidate') || '');
    }
    if (dom.nameModalError) dom.nameModalError.textContent = '';

    let track = 'Hard';
    if (setKey.startsWith('easy')) track = 'Easy';
    else if (setKey.startsWith('medium')) track = 'Medium';
    else if (setKey.startsWith('sim')) track = 'Simulation';

    if (dom.nameModalSetLabel) {
      dom.nameModalSetLabel.textContent = `Latin Squares · ${track} Level · Autogenerated (20 Questions)`;
    }
    if (dom.btnConfirmStart) {
      dom.btnConfirmStart.textContent = `Begin ${track} Test (25m) ➔`;
    }

    if (dom.modalName) dom.modalName.classList.remove('hidden');
    setTimeout(() => {
      if (dom.candidateNameInput) dom.candidateNameInput.focus();
    }, 100);
  }

  function getSetDisplayName(setKey) {
    if (setKey.startsWith('easy')) return 'Latin Squares – Easy (Autogenerated)';
    if (setKey.startsWith('medium')) return 'Latin Squares – Medium (Autogenerated)';
    if (setKey.startsWith('hard')) return 'Latin Squares – Hard (Autogenerated)';
    if (setKey.startsWith('sim')) return 'Latin Squares – Simulation (Autogenerated)';
    return 'Latin Squares – Test (Autogenerated)';
  }

  function shuffleArray(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function getTrackPool(track) {
    const data = (typeof LATIN_DATA !== 'undefined') ? LATIN_DATA : {};
    let setKeys = [];
    if (track === 'easy') setKeys = ['easy_t1', 'easy_t2', 'easy_t3', 'easy_t4', 'easy_t5'];
    else if (track === 'medium') setKeys = ['medium_t1', 'medium_t2', 'medium_t3', 'medium_t4', 'medium_t5'];
    else if (track === 'hard') setKeys = ['hard_t1', 'hard_t2', 'hard_t3', 'hard_t4', 'hard_t5'];

    const pool = [];
    setKeys.forEach(k => {
      if (Array.isArray(data[k])) {
        data[k].forEach((origQ, qIdx) => {
          const item = JSON.parse(JSON.stringify(origQ));
          item.setKey = k;
          item.origIndex = qIdx;
          item.origQNum = item.qNum || (qIdx + 1);
          item.ref = `${k}_${item.origQNum}`;
          pool.push(item);
        });
      }
    });
    return pool;
  }

  function generateExamQuestions(trackKey) {
    let rawQuestions = [];
    if (trackKey.startsWith('sim')) {
      const easySamples = shuffleArray(getTrackPool('easy')).slice(0, 5);
      const medSamples = shuffleArray(getTrackPool('medium')).slice(0, 5);
      const hardSamples = shuffleArray(getTrackPool('hard')).slice(0, 10);
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
      q.qNum = idx + 1;
      q.id = idx + 1;
      q.setKey = origQ.setKey || '';
      q.origIndex = origQ.origIndex;
      q.origQNum = origQ.origQNum;
      q.ref = origQ.ref || (origQ.setKey ? `${origQ.setKey}_${origQ.origQNum || (idx + 1)}` : `latin_${idx + 1}`);
      return q;
    });
  }

  function confirmStartExam() {
    if (state.isGenerating) return;
    const val = (dom.candidateNameInput ? dom.candidateNameInput.value : '').trim();
    if (!val) {
      if (dom.nameModalError) dom.nameModalError.textContent = 'Please enter candidate / student name to begin.';
      return;
    }
    state.candidateName = val;
    localStorage.setItem('dmat_last_candidate', val);
    if (typeof AuthManager !== 'undefined') { AuthManager.updateUserName(val); }
    if (dom.modalName) dom.modalName.classList.add('hidden');

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
    state.examStartTime = new Date();
    state.userAnswers = {};
    state.flagged.clear();
    state.currentIndex = 0;

    state.questions = generateExamQuestions(setKey);

    state.timerTotalSeconds = 25 * 60;
    state.timerRemainingSeconds = 25 * 60;

    if (dom.examTitle) dom.examTitle.textContent = getSetDisplayName(setKey);
    if (dom.examCandidateName) dom.examCandidateName.textContent = state.candidateName;

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
    if (dom.examTimer) dom.examTimer.textContent = `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    const pct = ((state.timerTotalSeconds - state.timerRemainingSeconds) / state.timerTotalSeconds) * 100;
    if (dom.examTimerProgress) dom.examTimerProgress.style.width = `${pct}%`;
  }

  function renderPalette() {
    if (!dom.qPalette) return;
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
    if (!dom.qPalette) return;
    const btn = dom.qPalette.children[idx];
    if (!btn) return;
    const q = state.questions[idx];
    if (!q) return;

    btn.classList.remove('current', 'answered', 'flagged');
    if (idx === state.currentIndex) btn.classList.add('current');
    if (state.userAnswers[q.qNum]) btn.classList.add('answered');
    if (state.flagged.has(q.qNum)) btn.classList.add('flagged');
  }

  function goToQuestion(idx) {
    if (idx < 0 || idx >= state.questions.length) return;
    state.currentIndex = idx;
    loadQuestion(idx);
  }

  function loadQuestion(idx) {
    const q = state.questions[idx];
    if (!q) return;

    if (dom.qCurrentNumber) {
      dom.qCurrentNumber.textContent = `Question ${idx + 1} of ${state.questions.length}`;
    }

    // Render 5x5 Grid Table
    renderLatinGrid(q);

    // Render Options Bar
    renderOptionsBar(q);

    // Flag button state
    if (dom.btnFlagQ) {
      if (state.flagged.has(q.qNum)) {
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
    }

    if (dom.btnPrevQ) dom.btnPrevQ.disabled = (idx === 0);
    if (dom.btnNextQ) dom.btnNextQ.disabled = (idx === state.questions.length - 1);

    updateAllPaletteItems();
  }

  function renderLatinGrid(q) {
    if (!dom.qLatinGridBox) return;

    let html = `
      <div class="latin-grid-wrapper">
        <table class="latin-grid-table">
          <thead>
            <tr>
              <th class="row-idx"></th>
              ${colLabels.map(col => `<th>${col}</th>`).join('')}
            </tr>
          </thead>
          <tbody>
    `;

    for (let r = 0; r < 5; r++) {
      html += `<tr><th class="row-idx">${r + 1}</th>`;
      for (let c = 0; c < 5; c++) {
        const val = q.grid[r][c];
        const isTarget = (q.target && q.target.row === r && q.target.col === c);

        if (isTarget) {
          const userChoice = state.userAnswers[q.qNum];
          html += `<td class="cell-target">${userChoice || '?'}</td>`;
        } else if (val) {
          html += `<td class="cell-filled">${val}</td>`;
        } else {
          html += `<td class="cell-empty"></td>`;
        }
      }
      html += `</tr>`;
    }

    html += `
          </tbody>
        </table>
      </div>
    `;

    dom.qLatinGridBox.innerHTML = html;
  }

  function renderOptionsBar(q) {
    if (!dom.latinOptionsContainer) return;
    const selected = state.userAnswers[q.qNum] || '';
    const symbols = ['A', 'B', 'C', 'D', 'E'];

    let html = `<div class="latin-options-bar">`;
    symbols.forEach(sym => {
      const isSel = (selected === sym);
      html += `
        <button type="button" class="latin-opt-btn ${isSel ? 'selected' : ''}" data-sym="${sym}">
          ${sym}
        </button>
      `;
    });
    html += `</div>`;

    dom.latinOptionsContainer.innerHTML = html;

    dom.latinOptionsContainer.querySelectorAll('.latin-opt-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const sym = btn.getAttribute('data-sym');
        selectOption(sym);
      });
    });
  }

  function selectOption(sym) {
    const q = state.questions[state.currentIndex];
    if (!q) return;

    if (state.userAnswers[q.qNum] === sym) {
      delete state.userAnswers[q.qNum];
    } else {
      state.userAnswers[q.qNum] = sym;
    }

    renderLatinGrid(q);
    renderOptionsBar(q);
    updatePaletteItem(state.currentIndex);
  }

  function toggleFlagCurrentQuestion() {
    const q = state.questions[state.currentIndex];
    if (!q) return;

    if (state.flagged.has(q.qNum)) {
      state.flagged.delete(q.qNum);
    } else {
      state.flagged.add(q.qNum);
    }
    loadQuestion(state.currentIndex);
  }

  function handleManualSubmit() {
    const answeredCount = Object.keys(state.userAnswers).length;
    const total = state.questions.length;
    let msg = `You have completed ${answeredCount} of ${total} questions. Finish and submit your test now?`;
    if (answeredCount < total) {
      msg = `Warning: You have only answered ${answeredCount} of ${total} questions (${total - answeredCount} unanswered). Do you want to submit now?`;
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
          sessionStorage.setItem('dmat_auto_submit_latin', JSON.stringify({
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
      const raw = sessionStorage.getItem('dmat_auto_submit_latin');
      if (raw) {
        sessionStorage.removeItem('dmat_auto_submit_latin');
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
      const user = state.userAnswers[q.qNum] || '';
      const sol = q.solution || '';
      const isCorrect = (user === sol);
      if (isCorrect) correctCount++;

      return {
        questionId: q.qNum,
        ref: q.ref || '',
        setKey: q.setKey || '',
        origIndex: q.origIndex,
        origQNum: q.origQNum,
        subtest: 'latin',
        grid: q.grid,
        target: q.target,
        solution: sol,
        userAnswer: user,
        isCorrect: isCorrect,
        explanation: q.explanation || ''
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
      subtest: 'latin',
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
    if (dom.resCandidate) dom.resCandidate.textContent = res.candidateName;
    if (dom.resScore) dom.resScore.textContent = `${res.score} / ${res.total}`;
    if (dom.resPercent) dom.resPercent.textContent = `${res.percentage}%`;
    if (dom.resTimeTaken) dom.resTimeTaken.textContent = res.timeTakenFormatted;
    if (dom.resTimeLeft) dom.resTimeLeft.textContent = res.timeLeftFormatted;

    if (!dom.resBreakdown) return;
    dom.resBreakdown.innerHTML = '';

    (res.details || []).forEach((item, idx) => {
      const card = document.createElement('div');
      card.className = `breakdown-card ${item.isCorrect ? 'correct-card' : 'wrong-card'}`;

      const targetPos = item.target ? `Row ${item.target.row + 1}, Col ${colLabels[item.target.col]}` : '';

      // Render mini grid for breakdown
      let miniGridHtml = `<table class="latin-breakdown-grid"><thead><tr><th></th>${colLabels.map(c => `<th>${c}</th>`).join('')}</tr></thead><tbody>`;
      for (let r = 0; r < 5; r++) {
        miniGridHtml += `<tr><th>${r + 1}</th>`;
        for (let c = 0; c < 5; c++) {
          const val = item.grid ? item.grid[r][c] : '';
          const isT = (item.target && item.target.row === r && item.target.col === c);
          if (isT) {
            miniGridHtml += `<td class="cell-target">${item.solution}</td>`;
          } else {
            miniGridHtml += `<td>${val || ''}</td>`;
          }
        }
        miniGridHtml += `</tr>`;
      }
      miniGridHtml += `</tbody></table>`;

      card.innerHTML = `
        <div class="breakdown-header">
          <div class="breakdown-q-title">
            <span class="breakdown-status-badge ${item.isCorrect ? 'badge-correct' : 'badge-wrong'}">
              ${item.isCorrect ? '✓ Correct' : '✕ Incorrect'}
            </span>
            <strong>Question ${idx + 1}</strong>
            <span style="color:var(--t-45); font-size:12px; margin-left:8px;">Target: ${targetPos}</span>
          </div>
        </div>

        <div class="breakdown-body" style="display:flex; gap:20px; align-items:flex-start; flex-wrap:wrap;">
          <div>
            ${miniGridHtml}
          </div>

          <div style="flex:1; min-width:240px;">
            <div class="breakdown-comparison" style="margin-bottom:12px;">
              <div class="comparison-col">
                <span class="comp-label">Candidate Choice</span>
                <div class="comp-values">
                  <span class="${item.isCorrect ? 'var-correct' : 'var-wrong'}">? = ${item.userAnswer || '—'}</span>
                </div>
              </div>
              <div class="comparison-col">
                <span class="comp-label">Official Solution</span>
                <div class="comp-values">
                  <span class="var-sol">? = ${item.solution}</span>
                </div>
              </div>
            </div>

            ${item.explanation ? `
              <div class="breakdown-steps" style="margin-top:8px;">
                <summary>Step-by-step Deduction Logic</summary>
                <p style="margin:8px 0 0; font-size:13px; color:var(--t-70); line-height:1.5;">${item.explanation}</p>
              </div>
            ` : ''}
          </div>
        </div>
      `;
      dom.resBreakdown.appendChild(card);
    });
  }

  // --- SUBMISSIONS LOG & STORAGE ---
  function getSubmissions() {
    try {
      const raw = localStorage.getItem('dmat_submissions');
      if (raw) return JSON.parse(raw);
    } catch (e) { }
    return [];
  }

  function saveSubmission(sub) {
    let list = getSubmissions();
    list.unshift(sub);
    try {
      localStorage.setItem('dmat_submissions', JSON.stringify(list));
    } catch (e) { }
  }

  function renderSubmissionsCount() {
    const list = getSubmissions();
    const count = list.length;
    dom.subCountBadges.forEach(b => { if (b) b.textContent = count; });
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
    if (!dom.submissionsTableBody) return;
    const filter = (dom.subSearchInput ? dom.subSearchInput.value : '').toLowerCase().trim();
    let list = getSubmissions();

    if (filter) {
      list = list.filter(s =>
        (s.candidateName || '').toLowerCase().includes(filter) ||
        (s.difficulty || '').toLowerCase().includes(filter) ||
        (s.submittedAt || '').toLowerCase().includes(filter)
      );
    }

    if (list.length === 0) {
      dom.submissionsTableBody.innerHTML = '';
      if (dom.submissionsEmptyState) dom.submissionsEmptyState.classList.remove('hidden');
      return;
    }

    if (dom.submissionsEmptyState) dom.submissionsEmptyState.classList.add('hidden');
    dom.submissionsTableBody.innerHTML = list.map((s, idx) => `
      <tr>
        <td style="color:var(--t-45);">${idx + 1}</td>
        <td><strong>${escapeHtml(s.candidateName || '—')}</strong></td>
        <td><span class="sub-diff-pill">${escapeHtml(s.difficulty || '—')}</span></td>
        <td><strong style="color:${s.score >= 15 ? '#10b981' : '#f59e0b'};">${s.score} / ${s.total}</strong> <span style="font-size:11px;color:var(--t-45);">(${s.percentage}%)</span></td>
        <td>${s.timeTakenFormatted || '—'}</td>
        <td style="color:var(--t-70); font-size:12px;">${s.submittedAt || '—'}</td>
      </tr>
    `).join('');
  }

  function exportSubmissionsCsv() {
    const list = getSubmissions();
    if (!list.length) {
      alert('No submissions recorded to export.');
      return;
    }
    const headers = ['#', 'Candidate Name', 'Test Set', 'Score', 'Total', 'Percentage', 'Time Taken', 'Date & Time'];
    const rows = list.map((s, idx) => [
      idx + 1,
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
    a.download = `dMAT_Latin_Squares_Submissions_${Date.now()}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }

  function formatDuration(sec) {
    if (isNaN(sec) || sec < 0) sec = 0;
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
    return String(str || '').replace(/[&<>"']/g, m => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    })[m]);
  }

  document.addEventListener('DOMContentLoaded', init);
})();
