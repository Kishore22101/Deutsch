// dmat.js – Complete Controller for dMAT Testing & Submissions
// Supports Figure Sequences (Formenreihen) with 5 Practice Tests (20Q, 25m) & Mathematic Equations

(function () {
  'use strict';

  // State Management
  const state = {
    view: 'categories', // 'categories' | 'difficulties' | 'category-info' | 'exam' | 'results' | 'submissions'
    selectedCategory: 'figures', // 'figures' | 'math' | 'latin' | 'modules'
    selectedDifficulty: 'hard_t1', // 'easy' | 'medium' | 'hard_t1' .. 'hard_t5'
    candidateName: localStorage.getItem('dmat_last_candidate') || '',
    questions: [],
    currentIndex: 0,
    userAnswers: {}, // figures: { [qId]: { m5: 1, m6: 2 } }, math: { [qId]: { A: '', B: '', C: '', D: '' } }
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

      // Difficulty selection headers
      diffCatBadge: document.getElementById('diff-cat-badge'),
      diffCatTitle: document.getElementById('diff-cat-title'),
      diffCatDesc: document.getElementById('diff-cat-desc'),
      diffCardEasyTitle: document.getElementById('diff-card-easy-title'),
      diffCardEasyDesc: document.getElementById('diff-card-easy-desc'),
      diffEasyQcount: document.getElementById('diff-easy-qcount'),
      diffEasyTimer: document.getElementById('diff-easy-timer'),
      diffEasyInputs: document.getElementById('diff-easy-inputs'),
      diffCardMedTitle: document.getElementById('diff-card-med-title'),
      diffCardMedDesc: document.getElementById('diff-card-med-desc'),
      diffMedQcount: document.getElementById('diff-med-qcount'),
      diffMedTimer: document.getElementById('diff-med-timer'),
      diffMedInputs: document.getElementById('diff-med-inputs'),
      diffCardHardTitle: document.getElementById('diff-card-hard-title'),
      diffCardHardDesc: document.getElementById('diff-card-hard-desc'),
      diffHardQcount: document.getElementById('diff-hard-qcount'),
      diffHardTimer: document.getElementById('diff-hard-timer'),
      diffHardInputs: document.getElementById('diff-hard-inputs'),

      // Test Set Selector below candidate name
      testSetWrap: document.getElementById('test-set-selector-wrap'),
      testSetContainer: document.getElementById('test-set-selector-container'),
      testSetLabelHeading: document.getElementById('test-set-label-heading'),

      // Exam components
      examTitle: document.getElementById('exam-title'),
      examCandidateName: document.getElementById('exam-candidate-name'),
      examTimer: document.getElementById('exam-timer'),
      examTimerProgress: document.getElementById('exam-timer-progress'),
      btnSubmitExam: document.getElementById('btn-submit-exam'),
      qPalette: document.getElementById('q-palette'),
      qCurrentNumber: document.getElementById('q-current-number'),
      qStageSub: document.getElementById('q-stage-sub'),
      qStageInstruction: document.getElementById('q-stage-instruction'),

      // Figure sequences elements
      qFiguresStageWrap: document.getElementById('q-figures-stage-wrap'),
      qFiguresSequenceStrip: document.getElementById('q-figures-sequence-strip'),
      figuresOptsM5: document.getElementById('figures-opts-m5'),
      figuresOptsM6: document.getElementById('figures-opts-m6'),

      // Math equation elements
      qEquationsBox: document.getElementById('q-equations-box'),
      qMathAnswerCard: document.getElementById('q-math-answer-card'),
      inputA: document.getElementById('ans-A'),
      inputB: document.getElementById('ans-B'),
      inputC: document.getElementById('ans-C'),
      inputD: document.getElementById('ans-D'),

      // Navigation & controls
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

  function isSampleRecord(s) {
    if (!s || !s.id) return true;
    if (s.id.startsWith('sub-live-')) return true;
    const name = (s.candidateName || '').trim().toLowerCase();
    if (name === 'nithyasree' || name.includes('nithyasree')) return true;
    return false;
  }

  function initSubmissionsStorage() {
    // Purge any old demo/sample records or removed records from localStorage
    try {
      const stored = localStorage.getItem('dmat_submissions');
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          const real = parsed.filter(s => !isSampleRecord(s));
          if (real.length !== parsed.length) {
            localStorage.setItem('dmat_submissions', JSON.stringify(real));
          }
        }
      }
    } catch (e) {}

    updateSubmissionsCount();

    // Live cross-device synchronization
    if (typeof CloudSync !== 'undefined') {
      CloudSync.fetchRemoteSubmissions().then(() => {
        updateSubmissionsCount();
        if (dom.subTableBody && dom.submissionsModal && !dom.submissionsModal.classList.contains('hidden')) {
          renderSubmissionsTable();
        }
      }).catch(() => {});

      CloudSync.subscribeRealTime(() => {
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
          return parsed.filter(s => !isSampleRecord(s));
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

    // Exam question answers input (Math only)
    [dom.inputA, dom.inputB, dom.inputC, dom.inputD].forEach((inp, idx, arr) => {
      if (!inp) return;
      inp.addEventListener('input', () => {
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

    if (viewName !== 'exam') {
      document.body.classList.remove('exam-active');
    }
  }

  function updateDifficultyView() {
    const isFigures = state.selectedCategory === 'figures';
    if (isFigures) {
      if (dom.diffCatBadge) dom.diffCatBadge.textContent = 'Category 1 · Figure Sequences (Formenreihen)';
      if (dom.diffCatTitle) dom.diffCatTitle.textContent = 'Choose Difficulty Level';
      if (dom.diffCatDesc)  dom.diffCatDesc.textContent  = 'Analyze official 3×3 matrix sequence rules. Find the 5th and 6th figures in each series.';

      // Easy
      if (dom.diffCardEasyTitle) dom.diffCardEasyTitle.textContent = 'Easy';
      if (dom.diffCardEasyDesc)  dom.diffCardEasyDesc.textContent  = 'Single moving element. Direct clockwise and counter-clockwise shifts.';
      if (dom.diffEasyQcount)    dom.diffEasyQcount.textContent    = '20 Q';
      if (dom.diffEasyTimer)     dom.diffEasyTimer.textContent     = '25 mins';
      if (dom.diffEasyInputs)    dom.diffEasyInputs.textContent    = 'Matrix 5 & 6 Options';

      // Medium
      if (dom.diffCardMedTitle) dom.diffCardMedTitle.textContent = 'Medium';
      if (dom.diffCardMedDesc)  dom.diffCardMedDesc.textContent  = 'Two alternating elements. Parity steps, directional rotations, and shape changes.';
      if (dom.diffMedQcount)    dom.diffMedQcount.textContent    = '20 Q';
      if (dom.diffMedTimer)     dom.diffMedTimer.textContent     = '25 mins';
      if (dom.diffMedInputs)    dom.diffMedInputs.textContent    = 'Matrix 5 & 6 Options';

      // Hard
      if (dom.diffCardHardTitle) dom.diffCardHardTitle.textContent = 'Hard (5 Tests)';
      if (dom.diffCardHardDesc)  dom.diffCardHardDesc.textContent  = '5 Complete Official Practice Tests (Test 1 to 5). Complex multi-element cyclic permutations.';
      if (dom.diffHardQcount)    dom.diffHardQcount.textContent    = '20 Q (5 Tests)';
      if (dom.diffHardTimer)     dom.diffHardTimer.textContent     = '25 mins';
      if (dom.diffHardInputs)    dom.diffHardInputs.textContent    = 'Matrix 5 & 6 Options';
    } else {
      if (dom.diffCatBadge) dom.diffCatBadge.textContent = 'Category 2 · Mathematic Equations';
      if (dom.diffCatTitle) dom.diffCatTitle.textContent = 'Choose Difficulty Level';
      if (dom.diffCatDesc)  dom.diffCatDesc.textContent  = 'Test your algebraic deduction and system substitution skills. Select your level to begin.';

      // Easy
      if (dom.diffCardEasyTitle) dom.diffCardEasyTitle.textContent = 'Easy';
      if (dom.diffCardEasyDesc)  dom.diffCardEasyDesc.textContent  = '5 Systems of equations. Single-variable substitutions and basic relations.';
      if (dom.diffEasyQcount)    dom.diffEasyQcount.textContent    = '5 Q';
      if (dom.diffEasyTimer)     dom.diffEasyTimer.textContent     = '10 mins';
      if (dom.diffEasyInputs)    dom.diffEasyInputs.textContent    = 'A, B, C, D in numbers';

      // Medium
      if (dom.diffCardMedTitle) dom.diffCardMedTitle.textContent = 'Medium';
      if (dom.diffCardMedDesc)  dom.diffCardMedDesc.textContent  = '4 Systems of equations. Chained substitutions and multi-step balance equations.';
      if (dom.diffMedQcount)    dom.diffMedQcount.textContent    = '4 Q';
      if (dom.diffMedTimer)     dom.diffMedTimer.textContent     = '15 mins';
      if (dom.diffMedInputs)    dom.diffMedInputs.textContent    = 'A, B, C, D in numbers';

      // Hard
      if (dom.diffCardHardTitle) dom.diffCardHardTitle.textContent = 'Hard';
      if (dom.diffCardHardDesc)  dom.diffCardHardDesc.textContent  = '20 Unique Systems of equations (Test 1 & Test 2). Official dMAT speed standard.';
      if (dom.diffHardQcount)    dom.diffHardQcount.textContent    = '20 Q (Test 1 & 2)';
      if (dom.diffHardTimer)     dom.diffHardTimer.textContent     = '25 mins';
      if (dom.diffHardInputs)    dom.diffHardInputs.textContent    = 'A, B, C, D in numbers';
    }
  }

  function handleCategoryClick(catKey) {
    state.selectedCategory = catKey;
    if (catKey === 'figures' || catKey === 'math') {
      updateDifficultyView();
      setView('difficulties');
    } else {
      renderCategoryInfo(catKey);
      setView('category-info');
    }
  }

  function renderCategoryInfo(catKey) {
    const info = (typeof DMAT_DATA !== 'undefined' && DMAT_DATA.categoryInfo) ? DMAT_DATA.categoryInfo[catKey] : null;
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

  function renderTestSetSelector(category, difficulty) {
    if (!dom.testSetContainer) return;
    dom.testSetContainer.innerHTML = '';

    if (category === 'figures') {
      if (difficulty.startsWith('hard')) {
        dom.testSetWrap.style.display = 'block';
        if (dom.testSetLabelHeading) dom.testSetLabelHeading.textContent = 'Select Figure Sequences Test (20Q · 25 mins):';

        const tests = [
          { id: 'hard_t1', label: 'Test 1', sub: 'dMAT Standard' },
          { id: 'hard_t2', label: 'Test 2', sub: 'Pattern Set 2' },
          { id: 'hard_t3', label: 'Test 3', sub: 'Pattern Set 3' },
          { id: 'hard_t4', label: 'Test 4', sub: 'Pattern Set 4' },
          { id: 'hard_t5', label: 'Test 5', sub: 'Mastery Challenge' }
        ];

        let grid = document.createElement('div');
        grid.className = 'test-set-grid-5';

        tests.forEach((t) => {
          const isSelected = (state.selectedDifficulty === t.id) || (state.selectedDifficulty === 'hard' && t.id === 'hard_t1');
          const card = document.createElement('label');
          card.className = `test-set-card-radio ${isSelected ? 'active' : ''}`;
          card.style.cssText = `
            display: flex; flex-direction: column; align-items: center; justify-content: center;
            padding: 10px 8px; border-radius: 8px; border: 2px solid ${isSelected ? '#10b981' : 'var(--border-lo)'};
            background: ${isSelected ? 'rgba(16, 185, 129, 0.12)' : 'var(--bg-02)'};
            cursor: pointer; text-align: center; transition: all 0.2s; user-select: none;
          `;

          card.innerHTML = `
            <input type="radio" name="figure_test_radio" value="${t.id}" ${isSelected ? 'checked' : ''} style="display:none;"/>
            <strong style="font-size:13px; color:${isSelected ? '#10b981' : 'var(--t-100)'};">${t.label}</strong>
            <span style="font-size:10px; color:var(--t-60); margin-top:2px;">${t.sub}</span>
          `;

          card.addEventListener('click', () => {
            state.selectedDifficulty = t.id;
            renderTestSetSelector(category, 'hard');
            updateModalLabels();
          });

          grid.appendChild(card);
        });

        dom.testSetContainer.appendChild(grid);
      } else {
        dom.testSetWrap.style.display = 'none';
      }
    } else if (category === 'math') {
      if (difficulty.startsWith('hard')) {
        dom.testSetWrap.style.display = 'block';
        if (dom.testSetLabelHeading) dom.testSetLabelHeading.textContent = 'Select Mathematic Equations Test (20Q · 25 mins):';

        const tests = [
          { id: 'hard_t1', label: 'Test 1', sub: 'dMAT Standard (20Q)' },
          { id: 'hard_t2', label: 'Test 2', sub: 'New Systems (20Q)' }
        ];

        let grid = document.createElement('div');
        grid.style.cssText = 'display: grid; grid-template-columns: 1fr 1fr; gap: 10px;';

        tests.forEach((t) => {
          const isSelected = (state.selectedDifficulty === t.id) || (state.selectedDifficulty === 'hard' && t.id === 'hard_t1');
          const card = document.createElement('label');
          card.className = `test-set-card-radio ${isSelected ? 'active' : ''}`;
          card.style.cssText = `
            display: flex; flex-direction: column; align-items: center; justify-content: center;
            padding: 12px 10px; border-radius: 8px; border: 2px solid ${isSelected ? '#10b981' : 'var(--border-lo)'};
            background: ${isSelected ? 'rgba(16, 185, 129, 0.12)' : 'var(--bg-02)'};
            cursor: pointer; text-align: center; transition: all 0.2s; user-select: none;
          `;

          card.innerHTML = `
            <input type="radio" name="math_test_radio" value="${t.id}" ${isSelected ? 'checked' : ''} style="display:none;"/>
            <strong style="font-size:13px; color:${isSelected ? '#10b981' : 'var(--t-100)'};">${t.label}</strong>
            <span style="font-size:11px; color:var(--t-60); margin-top:2px;">${t.sub}</span>
          `;

          card.addEventListener('click', () => {
            state.selectedDifficulty = t.id;
            renderTestSetSelector(category, 'hard');
            updateModalLabels();
          });

          grid.appendChild(card);
        });

        dom.testSetContainer.appendChild(grid);
      } else {
        dom.testSetWrap.style.display = 'none';
      }
    }
  }

  function updateModalLabels() {
    const label = document.getElementById('name-modal-diff-label');
    const timerLabel = document.getElementById('name-modal-timer-label');
    const qCountLabel = document.getElementById('name-modal-qcount-label');

    const isFigures = (state.selectedCategory === 'figures');
    const diff = state.selectedDifficulty;

    if (isFigures) {
      timerLabel.textContent = '25 Minutes';
      qCountLabel.textContent = '20 Matrix Sequences';

      if (diff.startsWith('hard')) {
        let testNum = diff.replace('hard_t', '');
        if (testNum === 'hard') testNum = '1';
        label.textContent = `Figure Sequences · Hard Test ${testNum} of 5`;
        if (dom.btnConfirmStart) dom.btnConfirmStart.textContent = `Begin Test ${testNum} (25m) ➔`;
      } else if (diff === 'medium') {
        label.textContent = 'Figure Sequences · Medium Mode';
        if (dom.btnConfirmStart) dom.btnConfirmStart.textContent = 'Begin Medium Test (25m) ➔';
      } else {
        label.textContent = 'Figure Sequences · Easy Mode';
        if (dom.btnConfirmStart) dom.btnConfirmStart.textContent = 'Begin Easy Test (25m) ➔';
      }
    } else {
      if (diff.startsWith('hard')) {
        timerLabel.textContent = '25 Minutes';
        qCountLabel.textContent = '20 System Questions';
        const isT2 = (diff === 'hard_t2');
        label.textContent = isT2 ? 'Mathematic Equations · Hard Test 2' : 'Mathematic Equations · Hard Test 1';
        if (dom.btnConfirmStart) dom.btnConfirmStart.textContent = isT2 ? 'Begin Test 2 (25m) ➔' : 'Begin Test 1 (25m) ➔';
      } else if (diff === 'medium') {
        timerLabel.textContent = '15 Minutes';
        qCountLabel.textContent = '4 System Questions';
        label.textContent = 'Mathematic Equations · Medium Mode';
        if (dom.btnConfirmStart) dom.btnConfirmStart.textContent = 'Begin Medium Test (15m) ➔';
      } else {
        timerLabel.textContent = '10 Minutes';
        qCountLabel.textContent = '5 System Questions';
        label.textContent = 'Mathematic Equations · Easy Mode';
        if (dom.btnConfirmStart) dom.btnConfirmStart.textContent = 'Begin Easy Test (10m) ➔';
      }
    }
  }

  function promptCandidateName(difficulty) {
    if (difficulty === 'hard') {
      state.selectedDifficulty = 'hard_t1';
    } else {
      state.selectedDifficulty = difficulty;
    }

    dom.nameModalError.textContent = '';
    dom.candidateNameInput.value = state.candidateName || '';

    renderTestSetSelector(state.selectedCategory, difficulty);
    updateModalLabels();

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
    state.userAnswers = {};
    state.flagged.clear();
    state.currentIndex = 0;
    state.examStartTime = new Date();

    const isFigures = (state.selectedCategory === 'figures');

    if (isFigures) {
      const figData = (typeof window !== 'undefined' && window.FIGURES_DATA) ? window.FIGURES_DATA : {};
      let dataset = figData[difficulty] || figData.hard_t1 || figData.easy || [];
      state.questions = dataset.slice(0, 20);

      state.timerTotalSeconds = 25 * 60;
      state.timerRemainingSeconds = 25 * 60;

      let testLabel = 'Hard Mode';
      if (difficulty.startsWith('hard_t')) {
        testLabel = `Hard · Test ${difficulty.replace('hard_t', '')}`;
      } else if (difficulty === 'medium') {
        testLabel = 'Medium Mode';
      } else if (difficulty === 'easy') {
        testLabel = 'Easy Mode';
      }

      dom.examTitle.textContent = `Figure Sequences (Formenreihen) – ${testLabel}`;
    } else {
      const mathData = (typeof window !== 'undefined' && window.DMAT_DATA) ? window.DMAT_DATA : {};
      if (difficulty === 'hard_t2') {
        state.questions = (mathData.hard_t2 || []).slice(0, 20);
        state.timerTotalSeconds = 25 * 60;
        dom.examTitle.textContent = 'Mathematic Equations – Hard Test 2';
      } else if (difficulty === 'hard' || difficulty === 'hard_t1') {
        state.questions = (mathData.hard || []).slice(0, 20);
        state.timerTotalSeconds = 25 * 60;
        dom.examTitle.textContent = 'Mathematic Equations – Hard Test 1';
      } else if (difficulty === 'medium') {
        state.questions = (mathData.medium || []).slice(0, 4);
        state.timerTotalSeconds = 15 * 60;
        dom.examTitle.textContent = 'Mathematic Equations – Medium Mode';
      } else {
        state.questions = (mathData.easy || []).slice(0, 5);
        state.timerTotalSeconds = 10 * 60;
        dom.examTitle.textContent = 'Mathematic Equations – Easy Mode';
      }
      state.timerRemainingSeconds = state.timerTotalSeconds;
    }

    dom.examCandidateName.textContent = state.candidateName;

    // Start Timer
    if (state.timerInterval) clearInterval(state.timerInterval);
    updateTimerDisplay();
    state.timerInterval = setInterval(handleTimerTick, 1000);

    // Initialize palette and load first question
    renderPalette();
    loadQuestion(0);
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

    // Urgency indicators
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
    if (!q) return;

    const ans = state.userAnswers[q.id];

    if (state.flagged.has(q.id)) {
      btn.classList.add('flagged');
    }

    if (q.subtest === 'figures') {
      if (ans && ans.m5 && ans.m6) {
        btn.classList.add('answered');
      } else if (ans && (ans.m5 || ans.m6)) {
        btn.classList.add('partial');
      }
    } else {
      if (ans) {
        const filledCount = ['A', 'B', 'C', 'D'].filter(k => ans[k] !== undefined && ans[k] !== '').length;
        if (filledCount === 4) {
          btn.classList.add('answered');
        } else if (filledCount > 0) {
          btn.classList.add('partial');
        }
      }
    }
  }

  function renderFigureQuestion(q) {
    // Hide math boxes
    if (dom.qEquationsBox) dom.qEquationsBox.classList.add('hidden');
    if (dom.qMathAnswerCard) dom.qMathAnswerCard.classList.add('hidden');

    // Show figures wrap
    if (dom.qFiguresStageWrap) dom.qFiguresStageWrap.classList.remove('hidden');

    if (dom.qStageSub) dom.qStageSub.textContent = 'CORE MODULE · FIGURE SEQUENCES (FORMENREIHEN)';
    if (dom.qStageInstruction) dom.qStageInstruction.textContent = 'Analyze the sequence of matrices from left to right. Select the correct figure for Matrix 5 and Matrix 6 from the options below. Both must be correct.';

    const userAns = state.userAnswers[q.id] || {};

    // 1. Render sequence strip
    function refreshStrip() {
      if (typeof FiguresRender !== 'undefined' && dom.qFiguresSequenceStrip) {
        dom.qFiguresSequenceStrip.innerHTML = FiguresRender.renderFigureSequenceStrip(q, state.userAnswers[q.id] || {});
      }
    }
    refreshStrip();

    // 2. Render Options for Matrix 5
    if (dom.figuresOptsM5) {
      dom.figuresOptsM5.innerHTML = '';
      (q.optionsM5 || []).forEach((optShapes, oIdx) => {
        const optNum = oIdx + 1;
        const isSelected = (userAns.m5 === optNum);
        const cardWrap = document.createElement('div');
        if (typeof FiguresRender !== 'undefined') {
          cardWrap.innerHTML = FiguresRender.renderOptionCard(optShapes, optNum, isSelected, 78);
        }
        const card = cardWrap.firstElementChild;
        card.addEventListener('click', () => {
          if (!state.userAnswers[q.id]) state.userAnswers[q.id] = {};
          state.userAnswers[q.id].m5 = optNum;
          renderFigureQuestion(q);
          updatePaletteItem(state.currentIndex);
        });
        dom.figuresOptsM5.appendChild(card);
      });
    }

    // 3. Render Options for Matrix 6
    if (dom.figuresOptsM6) {
      dom.figuresOptsM6.innerHTML = '';
      (q.optionsM6 || []).forEach((optShapes, oIdx) => {
        const optNum = oIdx + 1;
        const isSelected = (userAns.m6 === optNum);
        const cardWrap = document.createElement('div');
        if (typeof FiguresRender !== 'undefined') {
          cardWrap.innerHTML = FiguresRender.renderOptionCard(optShapes, optNum, isSelected, 78);
        }
        const card = cardWrap.firstElementChild;
        card.addEventListener('click', () => {
          if (!state.userAnswers[q.id]) state.userAnswers[q.id] = {};
          state.userAnswers[q.id].m6 = optNum;
          renderFigureQuestion(q);
          updatePaletteItem(state.currentIndex);
        });
        dom.figuresOptsM6.appendChild(card);
      });
    }
  }

  function loadQuestion(idx) {
    state.currentIndex = idx;
    const q = state.questions[idx];
    if (!q) return;

    dom.qCurrentNumber.textContent = `Question ${idx + 1} of ${state.questions.length}`;

    if (q.subtest === 'figures') {
      renderFigureQuestion(q);
    } else {
      // Hide figure stage wrap
      if (dom.qFiguresStageWrap) dom.qFiguresStageWrap.classList.add('hidden');
      if (dom.qEquationsBox) dom.qEquationsBox.classList.remove('hidden');
      if (dom.qMathAnswerCard) dom.qMathAnswerCard.classList.remove('hidden');

      if (dom.qStageSub) dom.qStageSub.textContent = 'CORE MODULE · MATHEMATICAL EQUATIONS';
      if (dom.qStageInstruction) dom.qStageInstruction.textContent = 'Solve the system. Every letter is a whole number from 1 to 20; there is exactly one solution.';

      // Equations
      dom.qEquationsBox.innerHTML = '';
      (q.equations || []).forEach(eq => {
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

      // Auto-focus input A for math
      setTimeout(() => {
        if (dom.inputA) {
          dom.inputA.focus();
          dom.inputA.select();
        }
      }, 50);
    }

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
  }

  function saveCurrentInputValues() {
    const q = state.questions[state.currentIndex];
    if (!q) return;

    if (q.subtest !== 'figures') {
      state.userAnswers[q.id] = {
        A: dom.inputA.value.trim(),
        B: dom.inputB.value.trim(),
        C: dom.inputC.value.trim(),
        D: dom.inputD.value.trim()
      };
    }
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

    let unansweredCount = 0;
    state.questions.forEach(q => {
      const ans = state.userAnswers[q.id];
      if (q.subtest === 'figures') {
        if (!ans || !ans.m5 || !ans.m6) unansweredCount++;
      } else {
        if (!ans || !ans.A || !ans.B || !ans.C || !ans.D) unansweredCount++;
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

    let correctCount = 0;
    const isFiguresExam = (state.selectedCategory === 'figures');

    const details = state.questions.map((q) => {
      const user = state.userAnswers[q.id] || {};
      const sol = q.solution || {};

      if (q.subtest === 'figures') {
        const isM5Correct = parseInt(user.m5, 10) === sol.m5;
        const isM6Correct = parseInt(user.m6, 10) === sol.m6;
        const allCorrect = (isM5Correct && isM6Correct);
        if (allCorrect) correctCount++;

        return {
          questionId: q.id,
          subtest: 'figures',
          title: q.title || 'Figure Sequence',
          sequence: q.matrices || q.sequence,
          optionsM5: q.optionsM5,
          optionsM6: q.optionsM6,
          solution: sol,
          userAnswer: user,
          isCorrect: allCorrect,
          explanation: q.ruleExplanation || q.explanation || '',
          fieldCorrectness: { m5: isM5Correct, m6: isM6Correct }
        };
      } else {
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
      }
    });

    const total = state.questions.length;
    const percentage = Math.round((correctCount / total) * 100);

    let diffDisplay = 'Hard';
    if (isFiguresExam) {
      if (state.selectedDifficulty.startsWith('hard_t')) {
        diffDisplay = `Figure Sequences – Test ${state.selectedDifficulty.replace('hard_t', '')}`;
      } else if (state.selectedDifficulty === 'medium') {
        diffDisplay = 'Figure Sequences – Medium';
      } else if (state.selectedDifficulty === 'easy') {
        diffDisplay = 'Figure Sequences – Easy';
      } else {
        diffDisplay = 'Figure Sequences – Hard';
      }
    } else {
      if (state.selectedDifficulty === 'hard_t2') {
        diffDisplay = 'Equations – Hard Test 2';
      } else if (state.selectedDifficulty === 'hard' || state.selectedDifficulty === 'hard_t1') {
        diffDisplay = 'Equations – Hard Test 1';
      } else if (state.selectedDifficulty === 'medium') {
        diffDisplay = 'Equations – Medium';
      } else {
        diffDisplay = 'Equations – Easy';
      }
    }

    const submission = {
      id: 'sub-' + Date.now(),
      candidateName: state.candidateName,
      difficulty: diffDisplay,
      difficultyKey: state.selectedDifficulty,
      subtest: isFiguresExam ? 'figures' : 'math',
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

    // Save locally
    const list = getSubmissions();
    list.unshift(submission);
    saveSubmissions(list);

    // Live sync broadcast
    if (typeof CloudSync !== 'undefined' && CloudSync.broadcastSubmission) {
      CloudSync.broadcastSubmission(submission).catch(() => {});
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

    dom.resBreakdown.innerHTML = '';
    result.details.forEach((item, idx) => {
      const card = document.createElement('div');
      card.className = `breakdown-card ${item.isCorrect ? 'correct-card' : 'wrong-card'}`;

      if (item.subtest === 'figures') {
        const stripHtml = (typeof FiguresRender !== 'undefined' && Array.isArray(item.matrices || item.sequence))
          ? `<div class="figures-sequence-strip" style="padding:10px; margin:10px 0; overflow-x:auto;">
               ${FiguresRender.renderFigureSequenceStrip(item, item.userAnswer || {}, 68)}
             </div>`
          : '';

        card.innerHTML = `
          <div class="breakdown-header">
            <div class="breakdown-q-title">
              <span class="breakdown-status-badge ${item.isCorrect ? 'badge-correct' : 'badge-wrong'}">
                ${item.isCorrect ? '✓ Correct' : '✕ Incorrect'}
              </span>
              <strong>Question ${idx + 1} · Figure Sequence</strong>
            </div>
          </div>
          <div class="breakdown-body">
            ${stripHtml}
            <div class="breakdown-comparison" style="margin-top:12px;">
              <div class="user-col">
                <span class="col-title">Your Choice:</span>
                <div class="ans-grid" style="grid-template-columns: 1fr 1fr;">
                  <span class="${item.fieldCorrectness && item.fieldCorrectness.m5 ? 'var-correct' : 'var-wrong'}">M5 = Option ${item.userAnswer.m5 || '—'}</span>
                  <span class="${item.fieldCorrectness && item.fieldCorrectness.m6 ? 'var-correct' : 'var-wrong'}">M6 = Option ${item.userAnswer.m6 || '—'}</span>
                </div>
              </div>
              <div class="correct-col">
                <span class="col-title">Official Solution:</span>
                <div class="ans-grid" style="grid-template-columns: 1fr 1fr;">
                  <span class="var-sol">M5 = Option ${item.solution.m5}</span>
                  <span class="var-sol">M6 = Option ${item.solution.m6}</span>
                </div>
              </div>
            </div>
            ${item.explanation ? `
              <div style="margin-top:14px; padding:12px 14px; background:rgba(255,255,255,0.03); border-radius:8px; border-left:3px solid #10b981; font-size:13px; line-height:1.6; color:var(--t-80);">
                <strong style="color:#10b981; display:block; margin-bottom:4px;">Rule Derivation:</strong>
                ${escapeHtml(item.explanation)}
              </div>
            ` : ''}
          </div>
        `;
      } else {
        const eqHtml = (item.equations || []).map(e => `<div>${e}</div>`).join('');
        const stepsHtml = (item.stepByStep || []).map(s => `<li>${s}</li>`).join('');

        card.innerHTML = `
          <div class="breakdown-header">
            <div class="breakdown-q-title">
              <span class="breakdown-status-badge ${item.isCorrect ? 'badge-correct' : 'badge-wrong'}">
                ${item.isCorrect ? '✓ Correct' : '✕ Incorrect'}
              </span>
              <strong>Question ${idx + 1} · Equations</strong>
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
                  <span class="${item.fieldCorrectness && item.fieldCorrectness.A ? 'var-correct' : 'var-wrong'}">A = ${item.userAnswer.A || '—'}</span>
                  <span class="${item.fieldCorrectness && item.fieldCorrectness.B ? 'var-correct' : 'var-wrong'}">B = ${item.userAnswer.B || '—'}</span>
                  <span class="${item.fieldCorrectness && item.fieldCorrectness.C ? 'var-correct' : 'var-wrong'}">C = ${item.userAnswer.C || '—'}</span>
                  <span class="${item.fieldCorrectness && item.fieldCorrectness.D ? 'var-correct' : 'var-wrong'}">D = ${item.userAnswer.D || '—'}</span>
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
      }

      dom.resBreakdown.appendChild(card);
    });
  }

  // Submissions Dashboard Modal
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
             (sub.difficulty || '').toLowerCase().includes(query) ||
             (sub.submittedAt || '').includes(query);
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

    // Bind inspect buttons
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
        const userAns = d.userAnswer || {};
        const sol = d.solution || {};

        if (d.subtest === 'figures') {
          const stripHtml = (typeof FiguresRender !== 'undefined' && Array.isArray(d.matrices || d.sequence))
            ? `<div class="figures-sequence-strip" style="padding:10px; margin:10px 0; overflow-x:auto;">
                 ${FiguresRender.renderFigureSequenceStrip(d, userAns, 60)}
               </div>`
            : '';

          card.innerHTML = `
            <div class="q-detail-head">
              <span>Question ${i + 1} · Figure Sequence</span>
              <span class="q-badge ${d.isCorrect ? 'badge-correct' : 'badge-wrong'}">${d.isCorrect ? 'Correct' : 'Incorrect'}</span>
            </div>
            ${stripHtml}
            <div class="q-detail-ans">
              <div>Candidate Choice: <strong>M5 = Option ${userAns.m5 || '—'}, M6 = Option ${userAns.m6 || '—'}</strong></div>
              <div>Official Solution: <strong style="color:#10b981;">M5 = Option ${sol.m5 || '—'}, M6 = Option ${sol.m6 || '—'}</strong></div>
            </div>
            ${d.explanation ? `<div class="step-by-step" style="margin-top:8px;font-size:12px;color:var(--t-80);background:rgba(255,255,255,0.03);padding:8px 12px;border-radius:6px;border-left:2px solid #10b981;">• <strong>Pattern Rule:</strong> ${escapeHtml(d.explanation)}</div>` : ''}
          `;
        } else {
          const eqs = Array.isArray(d.equations) ? d.equations : [];
          card.innerHTML = `
            <div class="q-detail-head">
              <span>Question ${i + 1} · Equations</span>
              <span class="q-badge ${d.isCorrect ? 'badge-correct' : 'badge-wrong'}">${d.isCorrect ? 'Correct' : 'Incorrect'}</span>
            </div>
            <div class="q-detail-eqs">
              ${eqs.map(e => `<div>${escapeHtml(e)}</div>`).join('')}
            </div>
            <div class="q-detail-ans">
              <div>Your Answer: A=${userAns.A || '—'}, B=${userAns.B || '—'}, C=${userAns.C || '—'}, D=${userAns.D || '—'}</div>
              <div>Solution: <strong>A=${sol.A !== undefined ? sol.A : '—'}, B=${sol.B !== undefined ? sol.B : '—'}, C=${sol.C !== undefined ? sol.C : '—'}, D=${sol.D !== undefined ? sol.D : '—'}</strong></div>
            </div>
          `;
        }
        dom.subDetailsBody.appendChild(card);
      });
    }

    dom.detailsModal.classList.remove('hidden');
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
