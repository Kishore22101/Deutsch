// figures.js - Dedicated Controller for Figure Sequences (Formenreihen)
// Official dMAT Subtest 1 (Tests 1–5 · 20 Questions · 25 Minutes each)

(function () {
  'use strict';

  const state = {
    view: 'tests', // 'tests' | 'exam' | 'results'
    selectedDifficulty: 'hard_t1', // 'hard_t1' .. 'hard_t5', 'medium', 'easy'
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
    showView('tests');
  }

  function cacheDom() {
    dom = {
      viewTests: document.getElementById('view-tests'),
      viewExam: document.getElementById('view-exam'),
      viewResults: document.getElementById('view-results'),
      modalName: document.getElementById('modal-candidate-name'),
      modalSubmissions: document.getElementById('modal-submissions'),
      modalSubDetails: document.getElementById('modal-sub-details'),

      btnNavSubmissions: document.getElementById('btn-nav-submissions'),
      subCountBadge: document.getElementById('sub-count-badge'),
      heroSubCount: document.getElementById('hero-sub-count'),
      btnHeroSubmissions: document.getElementById('btn-hero-submissions'),

      candidateNameInput: document.getElementById('input-candidate-name'),
      nameModalError: document.getElementById('name-modal-error'),
      nameModalTestLabel: document.getElementById('name-modal-test-label'),
      btnConfirmStart: document.getElementById('btn-confirm-start'),
      btnCancelStart: document.getElementById('btn-cancel-start'),
      testSelectorContainer: document.getElementById('test-selector-container'),

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

      resCandidate: document.getElementById('res-candidate'),
      resScore: document.getElementById('res-score'),
      resPercent: document.getElementById('res-percent'),
      resTimeTaken: document.getElementById('res-time-taken'),
      resTimeLeft: document.getElementById('res-time-left'),
      resBreakdown: document.getElementById('res-breakdown'),
      btnRetakeExam: document.getElementById('btn-retake-exam'),
      btnResultsSubmissions: document.getElementById('btn-results-submissions'),

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
    document.querySelectorAll('[data-start-fig-test]').forEach(btn => {
      btn.addEventListener('click', () => {
        const diff = btn.getAttribute('data-start-fig-test');
        openStartModal(diff);
      });
    });

    if (dom.btnNavSubmissions) dom.btnNavSubmissions.addEventListener('click', openSubmissionsModal);
    if (dom.btnHeroSubmissions) dom.btnHeroSubmissions.addEventListener('click', openSubmissionsModal);
    if (dom.btnCloseSubmissions) dom.btnCloseSubmissions.addEventListener('click', closeSubmissionsModal);
    if (dom.modalSubmissions) {
      dom.modalSubmissions.addEventListener('click', (e) => {
        if (e.target === dom.modalSubmissions) closeSubmissionsModal();
      });
    }

    if (dom.btnCancelStart) dom.btnCancelStart.addEventListener('click', () => dom.modalName.classList.add('hidden'));
    if (dom.btnConfirmStart) dom.btnConfirmStart.addEventListener('click', confirmStartExam);
    if (dom.candidateNameInput) {
      dom.candidateNameInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') confirmStartExam();
      });
    }

    if (dom.btnPrevQ) dom.btnPrevQ.addEventListener('click', () => goToQuestion(state.currentIndex - 1));
    if (dom.btnNextQ) dom.btnNextQ.addEventListener('click', () => goToQuestion(state.currentIndex + 1));
    if (dom.btnFlagQ) dom.btnFlagQ.addEventListener('click', toggleFlagCurrentQuestion);
    if (dom.btnSubmitExam) dom.btnSubmitExam.addEventListener('click', handleManualSubmit);

    if (dom.btnRetakeExam) dom.btnRetakeExam.addEventListener('click', () => openStartModal(state.selectedDifficulty));
    if (dom.btnResultsSubmissions) dom.btnResultsSubmissions.addEventListener('click', openSubmissionsModal);

    if (dom.btnCloseSubDetails) {
      dom.btnCloseSubDetails.addEventListener('click', () => dom.modalSubDetails.classList.add('hidden'));
    }
    if (dom.subSearchInput) dom.subSearchInput.addEventListener('input', renderSubmissionsTable);
    if (dom.btnExportCsv) dom.btnExportCsv.addEventListener('click', exportSubmissionsCsv);
  }

  function showView(viewName) {
    state.view = viewName;
    if (dom.viewTests) dom.viewTests.classList.toggle('hidden', viewName !== 'tests');
    if (dom.viewExam) dom.viewExam.classList.toggle('hidden', viewName !== 'exam');
    if (dom.viewResults) dom.viewResults.classList.toggle('hidden', viewName !== 'results');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function openStartModal(diff) {
    state.selectedDifficulty = diff || 'hard_t1';
    renderTestGridSelector();
    updateModalLabels();

    dom.nameModalError.textContent = '';
    dom.candidateNameInput.value = state.candidateName || '';
    dom.modalName.classList.remove('hidden');
    setTimeout(() => {
      dom.candidateNameInput.focus();
      dom.candidateNameInput.select();
    }, 100);
  }

  function renderTestGridSelector() {
    if (!dom.testSelectorContainer) return;
    dom.testSelectorContainer.innerHTML = '';
    const tests = [
      { id: 'hard_t1', label: 'Test 1', sub: 'dMAT Standard' },
      { id: 'hard_t2', label: 'Test 2', sub: 'Pattern Set 2' },
      { id: 'hard_t3', label: 'Test 3', sub: 'Pattern Set 3' },
      { id: 'hard_t4', label: 'Test 4', sub: 'Pattern Set 4' },
      { id: 'hard_t5', label: 'Test 5', sub: 'Mastery Challenge' }
    ];

    const grid = document.createElement('div');
    grid.style.cssText = 'display: grid; grid-template-columns: repeat(5, 1fr); gap: 6px;';

    tests.forEach(t => {
      const isSelected = (state.selectedDifficulty === t.id);
      const card = document.createElement('div');
      card.className = `test-set-card-radio ${isSelected ? 'active' : ''}`;
      card.style.cssText = `
        display: flex; flex-direction: column; align-items: center; justify-content: center;
        padding: 8px 4px; border-radius: 6px; border: 2px solid ${isSelected ? '#38bdf8' : 'var(--border-lo)'};
        background: ${isSelected ? 'rgba(56, 189, 248, 0.15)' : 'var(--bg-02)'};
        cursor: pointer; text-align: center;
      `;
      card.innerHTML = `
        <strong style="font-size:12px; color:${isSelected ? '#38bdf8' : 'var(--t-100)'};">${t.label}</strong>
        <span style="font-size:10px; color:var(--t-60);">${t.sub}</span>
      `;
      card.addEventListener('click', () => {
        state.selectedDifficulty = t.id;
        renderTestGridSelector();
        updateModalLabels();
      });
      grid.appendChild(card);
    });
    dom.testSelectorContainer.appendChild(grid);
  }

  function updateModalLabels() {
    const diff = state.selectedDifficulty;
    let num = diff.replace('hard_t', '');
    if (diff === 'hard') num = '1';
    if (dom.nameModalTestLabel) {
      dom.nameModalTestLabel.textContent = `Hard Mode · Practice Test ${num} of 5 (20 Questions)`;
    }
    if (dom.btnConfirmStart) {
      dom.btnConfirmStart.textContent = `Begin Test ${num} (25m) ➔`;
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
    startExam(state.selectedDifficulty);
  }

  function startExam(diffKey) {
    state.selectedDifficulty = diffKey;
    state.userAnswers = {};
    state.flagged.clear();
    state.currentIndex = 0;
    state.examStartTime = new Date();

    const figData = (typeof FIGURES_DATA !== 'undefined') ? FIGURES_DATA : {};
    const dataset = figData[diffKey] || figData.hard_t1 || figData.easy || [];
    state.questions = dataset.slice(0, 20);

    state.timerTotalSeconds = 25 * 60;
    state.timerRemainingSeconds = 25 * 60;

    let testNum = diffKey.replace('hard_t', '');
    if (testNum === 'hard') testNum = '1';
    dom.examTitle.textContent = `Figure Sequences (Formenreihen) – Test ${testNum}`;
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

    sequence.forEach((mat, mIdx) => {
      const isM5 = (mIdx === 4);
      const isM6 = (mIdx === 5);
      const hasChosen = isM5 ? userAns.m5 : (isM6 ? userAns.m6 : null);

      const col = document.createElement('div');
      col.className = `matrix-seq-item ${isM5 || isM6 ? 'highlight-unknown' : ''}`;

      const title = document.createElement('div');
      title.className = 'matrix-seq-title';
      title.textContent = `Matrix ${mIdx + 1}`;
      col.appendChild(title);

      const wrap = document.createElement('div');
      wrap.className = 'matrix-svg-wrap';

      if ((isM5 || isM6) && !hasChosen) {
        wrap.classList.add('unknown-box');
        wrap.innerHTML = `<span class="unknown-qmark">?</span>`;
      } else {
        let shapesToRender = mat;
        if (isM5 && hasChosen && q.optionsM5 && q.optionsM5[hasChosen - 1]) {
          shapesToRender = q.optionsM5[hasChosen - 1];
        } else if (isM6 && hasChosen && q.optionsM6 && q.optionsM6[hasChosen - 1]) {
          shapesToRender = q.optionsM6[hasChosen - 1];
        }
        if (typeof FiguresRender !== 'undefined') {
          wrap.innerHTML = FiguresRender.renderMatrixSVG(shapesToRender, 96);
        }
      }

      col.appendChild(wrap);

      if (isM5 || isM6) {
        const choiceBadge = document.createElement('span');
        choiceBadge.className = 'seq-choice-pill';
        choiceBadge.textContent = hasChosen ? `Choice: Option ${hasChosen}` : 'Not selected';
        if (hasChosen) choiceBadge.classList.add('pill-selected');
        col.appendChild(choiceBadge);
      }

      dom.qSequenceStrip.appendChild(col);
    });

    // 2. Render Options for Matrix 5
    dom.optsListM5.innerHTML = '';
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
        cardWrap.innerHTML = FiguresRender.renderOptionCard(optShapes, optNum, isSelected, 78);
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

    let msg = 'Are you ready to submit your exam?';
    if (unans > 0) {
      msg = `You have ${unans} incomplete question(s). Both Matrix 5 and Matrix 6 must be answered. Are you sure you want to finish and submit?`;
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
    });

    const total = state.questions.length;
    const percentage = Math.round((correctCount / total) * 100);
    let testNum = state.selectedDifficulty.replace('hard_t', '');
    if (testNum === 'hard') testNum = '1';
    const diffDisplay = `Figures – Test ${testNum}`;

    const submission = {
      id: 'sub-' + Date.now(),
      candidateName: state.candidateName,
      difficulty: diffDisplay,
      difficultyKey: state.selectedDifficulty,
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
        <td><strong style="color:#38bdf8;">${sub.score} / ${sub.total}</strong> (${sub.percentage}%)</td>
        <td>${sub.timeTakenFormatted}</td>
        <td style="color:var(--t-60); font-size:12px;">${sub.submittedAt}</td>
      `;
      dom.subTableBody.appendChild(tr);
    });
  }

  function openSubDetails(sub) {
    // Admin only
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
    a.download = `dmat_figures_submissions_${Date.now()}.csv`;
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
