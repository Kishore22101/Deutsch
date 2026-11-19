// admin.js – Admin Dashboard Controller with Login Gate & Live Sync

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

  /* ───── AUTH CONFIG ───── */
  const ADMIN_ID  = 'admin';
  const ADMIN_PWD = 'Admin@123';
  const AUTH_KEY  = 'dmat_admin_auth';
  const STORAGE_KEY = 'dmat_submissions';

  /* ───── LOGIN GATE ───── */
  function isAuthenticated() {
    return sessionStorage.getItem(AUTH_KEY) === '1';
  }

  function showLoginScreen() {
    document.getElementById('admin-login-screen').classList.remove('hidden');
    document.getElementById('admin-dashboard-content').classList.add('hidden');
    document.getElementById('admin-logout-btn').classList.add('hidden');
    setTimeout(() => {
      const inp = document.getElementById('login-username');
      if (inp) inp.focus();
    }, 100);
  }

  function showDashboard() {
    document.getElementById('admin-login-screen').classList.add('hidden');
    document.getElementById('admin-dashboard-content').classList.remove('hidden');
    document.getElementById('admin-logout-btn').classList.remove('hidden');
    init();
  }

  function handleLogin(e) {
    if (e) e.preventDefault();
    const user = (document.getElementById('login-username').value || '').trim();
    const pass  = (document.getElementById('login-password').value || '');
    const errEl = document.getElementById('login-error');

    if (user === ADMIN_ID && pass === ADMIN_PWD) {
      sessionStorage.setItem(AUTH_KEY, '1');
      errEl.textContent = '';
      errEl.classList.add('hidden');
      showDashboard();
    } else {
      errEl.textContent = 'Invalid credentials. Please try again.';
      errEl.classList.remove('hidden');
      document.getElementById('login-password').value = '';
      document.getElementById('login-password').focus();
    }
  }

  function handleLogout() {
    sessionStorage.removeItem(AUTH_KEY);
    // Reset form fields
    const u = document.getElementById('login-username');
    const p = document.getElementById('login-password');
    if (u) u.value = '';
    if (p) p.value = '';
    showLoginScreen();
  }

  /* ───── DOM REFS (dashboard only, populated after login) ───── */
  let dom = {};

  function buildDomRefs() {
    dom = {
      liveTimeNow:    document.getElementById('live-time-now'),
      kpiTotal:       document.getElementById('kpi-total-candidates'),
      kpiAvgScore:    document.getElementById('kpi-avg-score'),
      kpiAvgTime:     document.getElementById('kpi-avg-time'),
      kpiPassRate:    document.getElementById('kpi-pass-rate'),
      kpiTopCandidate:document.getElementById('kpi-top-candidate'),
      kpiTopScore:    document.getElementById('kpi-top-score'),

      tableBody:    document.getElementById('admin-table-body'),
      displayCount: document.getElementById('display-count'),
      totalCount:   document.getElementById('total-count'),
      emptyState:   document.getElementById('admin-empty-state'),

      searchInput:      document.getElementById('admin-search-input'),
      filterDifficulty: document.getElementById('admin-filter-difficulty'),
      sortBy:           document.getElementById('admin-sort-by'),

      btnExportCsv: document.getElementById('btn-export-csv'),
      btnSimulate:  document.getElementById('btn-simulate-candidate'),
      btnRefresh:   document.getElementById('btn-refresh-data'),
      btnClearAll:  document.getElementById('btn-clear-all-data'),
      btnEmptyReset:document.getElementById('btn-empty-reset'),

      modalDetails:    document.getElementById('modal-admin-details'),
      detailsTitle:    document.getElementById('admin-details-title'),
      detailsMeta:     document.getElementById('admin-details-meta'),
      detailsBody:     document.getElementById('admin-details-body'),
      btnCloseDetails: document.getElementById('btn-close-admin-details'),
      btnCloseDetailsFt: document.getElementById('btn-close-admin-details-ft'),

      modalAdd:      document.getElementById('modal-add-candidate'),
      formAdd:       document.getElementById('form-add-candidate'),
      inputAddName:  document.getElementById('new-candidate-name'),
      selectAddDiff: document.getElementById('new-candidate-diff'),
      inputAddScore: document.getElementById('new-candidate-score'),
      inputAddTime:  document.getElementById('new-candidate-time'),
      inputAddTimestamp: document.getElementById('new-candidate-timestamp'),
      btnCloseAdd:   document.getElementById('btn-close-add-modal'),
      btnCancelAdd:  document.getElementById('btn-cancel-add'),
      btnSubmitAdd:  document.getElementById('btn-submit-add')
    };
  }

  /* ───── INIT ───── */
  function init() {
    buildDomRefs();
    startLiveClock();
    clearSampleData();   // purge old demo records on every admin load
    renderDashboard();
    bindEvents();
    initCrossDeviceSync();
  }

  /* ───── CROSS-DEVICE SYNC ───── */
  function initCrossDeviceSync() {
    if (typeof CloudSync === 'undefined') return;

    CloudSync.onStatusChange((status, text) => {
      const label = document.querySelector('.live-text');
      const dot   = document.querySelector('.live-dot');
      if (label) label.textContent = text;
      if (dot) {
        if (status === 'connected') {
          dot.style.background  = '#10b981';
          dot.style.boxShadow   = '0 0 8px #10b981';
        } else if (status === 'syncing') {
          dot.style.background  = '#fbbf24';
          dot.style.boxShadow   = '0 0 8px #fbbf24';
        } else {
          dot.style.background  = '#6b7280';
          dot.style.boxShadow   = 'none';
        }
      }
    });

    CloudSync.fetchRemoteSubmissions().then(() => renderDashboard()).catch(() => {});

    CloudSync.subscribeRealTime((newSub) => {
      renderDashboard();
      flashLiveNotification(newSub);
    });

    setInterval(() => {
      CloudSync.fetchRemoteSubmissions().then(() => renderDashboard()).catch(() => {});
    }, 10000);
  }

  /* ───── TOAST ───── */
  function flashLiveNotification(sub) {
    if (!sub || !sub.candidateName) return;
    const toast = document.createElement('div');
    toast.className = 'admin-live-toast';
    toast.innerHTML = `
      <div class="toast-dot"></div>
      <div class="toast-body">
        <strong>New Candidate Submission!</strong>
        <span>${escapeHtml(sub.candidateName)} completed ${escapeHtml(sub.difficulty)} (${sub.score}/${sub.total} · ${sub.percentage}%)</span>
      </div>
    `;
    document.body.appendChild(toast);
    setTimeout(() => {
      toast.classList.add('toast-hide');
      setTimeout(() => toast.remove(), 400);
    }, 4500);
  }

  /* ───── CLOCK ───── */
  function startLiveClock() {
    updateLiveClock();
    setInterval(updateLiveClock, 30000);
  }

  function updateLiveClock() {
    if (dom.liveTimeNow) dom.liveTimeNow.textContent = formatDateTime(new Date());
  }

  /* ───── STORAGE ───── */

  // IDs that belong to demo/sample records (prefixed sub-live-) or requested to be removed
  function isSampleRecord(sub) {
    if (!sub) return true;
    if (sub.id && sub.id.startsWith('sub-live-')) return true;
    const name = (sub.candidateName || '').trim().toLowerCase();
        if (name === 'nithyasree' || name.includes('nithyasree')) return true;
    return false;
  }

  // On every admin page load: silently remove all pre-seeded demo records
  function clearSampleData() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (!stored) return;
      const parsed = JSON.parse(stored);
      if (!Array.isArray(parsed)) return;
      const realOnly = parsed.filter(s => !isSampleRecord(s));
      // If some were demo records, persist the cleaned list
      if (realOnly.length !== parsed.length) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(realOnly));
      }
    } catch (e) {}
  }

  function getSubmissions() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          // Filter out any residual sample records
          return parsed.filter(s => !isSampleRecord(s));
        }
      }
    } catch (e) {}
    return [];
  }

  function saveSubmissions(list) {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(list)); } catch (e) {}
  }

  /* ───── RENDER ───── */
  function renderDashboard() {
    const all = getSubmissions();
    updateKPIs(all);
    renderTable();
  }

  function updateKPIs(list) {
    const total = list.length;
    if (dom.kpiTotal) dom.kpiTotal.textContent = total;

    if (total === 0) {
      if (dom.kpiAvgScore)      dom.kpiAvgScore.textContent     = '0%';
      if (dom.kpiAvgTime)       dom.kpiAvgTime.textContent      = '0m 00s';
      if (dom.kpiPassRate)      dom.kpiPassRate.textContent     = '0%';
      if (dom.kpiTopCandidate)  dom.kpiTopCandidate.textContent = '—';
      if (dom.kpiTopScore)      dom.kpiTopScore.textContent     = '—';
      return;
    }

    const totalPct   = list.reduce((s, i) => s + (i.percentage || 0), 0);
    if (dom.kpiAvgScore) dom.kpiAvgScore.textContent = `${Math.round(totalPct / total)}%`;

    const totalSec   = list.reduce((s, i) => s + (i.timeTakenSeconds || 0), 0);
    if (dom.kpiAvgTime) dom.kpiAvgTime.textContent = formatDuration(Math.round(totalSec / total));

    const passed     = list.filter(i => (i.percentage || 0) >= 60).length;
    if (dom.kpiPassRate) dom.kpiPassRate.textContent = `${Math.round((passed / total) * 100)}%`;

    const top = [...list].sort((a, b) => (b.percentage || 0) - (a.percentage || 0))[0];
    if (top) {
      if (dom.kpiTopCandidate) dom.kpiTopCandidate.textContent = top.candidateName;
      if (dom.kpiTopScore)     dom.kpiTopScore.textContent     = `${top.score}/${top.total} (${top.percentage}%)`;
    }
  }

  function renderTable() {
    const all        = getSubmissions();
    const query      = (dom.searchInput ? dom.searchInput.value : '').trim().toLowerCase();
    const diffFilter = dom.filterDifficulty ? dom.filterDifficulty.value : 'all';
    const sortVal    = dom.sortBy ? dom.sortBy.value : 'recent';

    let filtered = all.filter(item => {
      const nameMatch = (item.candidateName || '').toLowerCase().includes(query);
      const diffMatch = (item.difficulty    || '').toLowerCase().includes(query);
      const dateMatch = (item.submittedAt   || '').toLowerCase().includes(query);
      const matchesSearch = query === '' || nameMatch || diffMatch || dateMatch;
      let matchesDiff = true;
      if (diffFilter !== 'all') {
        const itemDiff = (item.difficulty || '').toLowerCase();
        if (diffFilter === 'figures') {
          matchesDiff = item.subtest === 'figures' || itemDiff.includes('figure');
        } else if (diffFilter === 'hard') {
          matchesDiff = itemDiff.includes('test 1') || itemDiff === 'hard';
        } else if (diffFilter === 'hard_t2') {
          matchesDiff = itemDiff.includes('test 2') || itemDiff === 'hard_t2';
        } else if (diffFilter === 'medium') {
          matchesDiff = itemDiff.includes('medium') || itemDiff.includes('med');
        } else if (diffFilter === 'medium_t1') {
          matchesDiff = itemDiff.includes('medium') && (itemDiff.includes('set 1') || itemDiff.includes('1'));
        } else if (diffFilter === 'medium_t2') {
          matchesDiff = itemDiff.includes('medium') && (itemDiff.includes('set 2') || itemDiff.includes('2'));
        } else if (diffFilter === 'medium_t3') {
          matchesDiff = itemDiff.includes('medium') && (itemDiff.includes('set 3') || itemDiff.includes('3'));
        } else if (diffFilter === 'medium_t4') {
          matchesDiff = itemDiff.includes('medium') && (itemDiff.includes('set 4') || itemDiff.includes('4'));
        } else if (diffFilter === 'medium_t5') {
          matchesDiff = itemDiff.includes('medium') && (itemDiff.includes('set 5') || itemDiff.includes('5'));
        } else {
          matchesDiff = itemDiff.includes(diffFilter.toLowerCase());
        }
      }
      return matchesSearch && matchesDiff;
    });

    filtered.sort((a, b) => {
      if      (sortVal === 'score-desc') return (b.percentage       || 0) - (a.percentage       || 0);
      else if (sortVal === 'time-asc')  return (a.timeTakenSeconds  || 0) - (b.timeTakenSeconds  || 0);
      else if (sortVal === 'name-asc')  return (a.candidateName || '').localeCompare(b.candidateName || '');
      else return (b.submittedAt || '').localeCompare(a.submittedAt || '');
    });

    if (dom.displayCount) dom.displayCount.textContent = filtered.length;
    if (dom.totalCount)   dom.totalCount.textContent   = all.length;

    if (filtered.length === 0) {
      if (dom.emptyState) dom.emptyState.classList.remove('hidden');
      if (dom.tableBody)  dom.tableBody.innerHTML = '';
      return;
    }
    if (dom.emptyState) dom.emptyState.classList.add('hidden');

    dom.tableBody.innerHTML = '';
    filtered.forEach((sub, idx) => {
      const pctBadgeClass = sub.percentage >= 80 ? 'pill-green' : (sub.percentage >= 50 ? 'pill-yellow' : 'pill-red');
      const isHard = (sub.difficulty || '').toLowerCase().includes('hard');
      const diffClass = isHard ? 'hard' : ((sub.difficulty || '').toLowerCase().includes('medium') ? 'medium' : 'easy');
      const timerCap = (isHard || (sub.difficulty || '').toLowerCase().includes('medium')) ? '25m' : '10m';

      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td><span class="rank-num">#${idx + 1}</span></td>
        <td>
          <div class="candidate-cell">
            <span class="c-avatar">${getInitials(sub.candidateName)}</span>
            <div class="c-info">
              <span class="c-name">${escapeHtml(sub.candidateName)}</span>
              <span class="c-date-mobile">${sub.submittedAt || ''}</span>
            </div>
          </div>
        </td>
        <td><span class="diff-tag ${diffClass}">${escapeHtml(sub.difficulty)} (${sub.questionCount || sub.total || 20}Q)</span></td>
        <td>
          <div class="score-cell">
            <span class="score-badge ${pctBadgeClass}">${sub.score} / ${sub.total} (${sub.percentage}%)</span>
          </div>
        </td>
        <td>
          <div class="time-cell">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><use href="#ic-timer"/></svg>
            <strong>${sub.timeTakenFormatted || formatDuration(sub.timeTakenSeconds || 0)}</strong>
            <span class="time-sub">/ ${timerCap}</span>
          </div>
        </td>
        <td><span class="date-txt">${sub.submittedAt || 'Today'}</span></td>
        <td><span class="status-badge">Completed</span></td>
        <td>
          <div class="admin-action-btns">
            <button class="btn-inspect" data-inspect-id="${sub.id}" title="Inspect full response sheet">Inspect</button>
            <button class="btn-del" data-del-id="${sub.id}" title="Delete record">✕</button>
          </div>
        </td>
      `;
      dom.tableBody.appendChild(tr);
    });

    dom.tableBody.querySelectorAll('.btn-inspect').forEach(btn => {
      btn.addEventListener('click', () => openInspectModal(btn.getAttribute('data-inspect-id')));
    });
    dom.tableBody.querySelectorAll('.btn-del').forEach(btn => {
      btn.addEventListener('click', () => deleteCandidate(btn.getAttribute('data-del-id')));
    });
  }

  /* ───── INSPECT MODAL ───── */
  function openInspectModal(id) {
    const list = getSubmissions();
    let item = list.find(s => s.id === id);
    if (!item) return;

    if (typeof CloudSync !== 'undefined' && CloudSync.enrichSubmissionDetails) {
      item = CloudSync.enrichSubmissionDetails(item);
    }

    dom.detailsTitle.textContent = `${item.candidateName} – Answer Sheet (${item.difficulty})`;
    dom.detailsMeta.innerHTML = `
      <span>Score: <strong>${item.score}/${item.total} (${item.percentage}%)</strong></span>
      <span>• Time Taken: <strong>${item.timeTakenFormatted}</strong></span>
      <span>• Submitted: <strong>${item.submittedAt}</strong></span>
    `;

    dom.detailsBody.innerHTML = '';

    if (!item.details || item.details.length === 0) {
      dom.detailsBody.innerHTML = `<div style="text-align:center;padding:24px;color:var(--t-45);">No question-by-question breakdown recorded.</div>`;
    } else {
      item.details.forEach((d, i) => {
        const card = document.createElement('div');
        card.className = `sub-q-detail ${d.isCorrect ? 'q-correct' : 'q-wrong'}`;
        const userAns = d.userAnswer || {};
        const sol     = d.solution   || {};

        if (d.subtest === 'figures') {
          const seq = d.matrices || d.sequence;
          const stripHtml = (typeof FiguresRender !== 'undefined' && Array.isArray(seq) && seq.length)
            ? `<div class="figures-sequence-strip" style="padding:10px; margin:10px 0; background:rgba(0,0,0,0.6); overflow-x:auto;">
                 ${FiguresRender.renderFigureSequenceStrip(d, userAns, 60)}
               </div>`
            : '';
          card.innerHTML = `
            <div class="q-detail-head">
              <span>Question ${i + 1} · Figure Sequences</span>
              <span class="q-badge ${d.isCorrect ? 'badge-correct' : 'badge-wrong'}">${d.isCorrect ? 'Correct' : 'Incorrect'}</span>
            </div>
            ${stripHtml}
            <div class="q-detail-ans">
              <div>Candidate Choice: <strong>M5 = Option ${userAns.m5 || '—'}, M6 = Option ${userAns.m6 || '—'}</strong></div>
              <div>Official Solution: <strong style="color:#10b981;">M5 = Option ${sol.m5 || '—'}, M6 = Option ${sol.m6 || '—'}</strong></div>
            </div>
            ${(d.explanation || d.ruleExplanation) ? `<div class="step-by-step" style="margin-top:8px;font-size:12px;color:var(--t-80);background:rgba(255,255,255,0.03);padding:8px 12px;border-radius:6px;border-left:2px solid #10b981;">• <strong>Pattern Rule:</strong> ${escapeHtml(d.explanation || d.ruleExplanation)}</div>` : ''}
          `;
        } else {
          const eqs = Array.isArray(d.equations) ? d.equations : [];
          card.innerHTML = `
            <div class="q-detail-head">
              <span>Question ${i + 1} · Equations</span>
              <span class="q-badge ${d.isCorrect ? 'badge-correct' : 'badge-wrong'}">${d.isCorrect ? 'Correct' : 'Incorrect'}</span>
            </div>
            <div class="q-detail-eqs">${eqs.map(e => `<div>${escapeHtml(e)}</div>`).join('')}</div>
            <div class="q-detail-ans">
              <div>Candidate Answer: <strong>A=${userAns.A || '—'}, B=${userAns.B || '—'}, C=${userAns.C || '—'}, D=${userAns.D || '—'}</strong></div>
              <div>Solution: <strong>A=${sol.A !== undefined ? sol.A : '—'}, B=${sol.B !== undefined ? sol.B : '—'}, C=${sol.C !== undefined ? sol.C : '—'}, D=${sol.D !== undefined ? sol.D : '—'}</strong></div>
            </div>
            ${d.stepByStep && d.stepByStep.length ? `<div class="step-by-step">${d.stepByStep.map(s => `• ${escapeHtml(s)}`).join('<br/>')}</div>` : ''}
          `;
        }
        dom.detailsBody.appendChild(card);
      });
    }

    dom.modalDetails.classList.remove('hidden');
  }

  function closeInspectModal() {
    if (dom.modalDetails) dom.modalDetails.classList.add('hidden');
  }

  /* ───── DELETE ───── */
  function deleteCandidate(id) {
    if (!confirm('Delete this candidate submission record?')) return;
    let list = getSubmissions();
    list = list.filter(s => s.id !== id);
    saveSubmissions(list);
    renderDashboard();
  }

  /* ───── ADD CANDIDATE MODAL ───── */
  function openAddModal() {
    if (dom.inputAddTimestamp) dom.inputAddTimestamp.value = formatDateTime(new Date());
    if (dom.inputAddName)  dom.inputAddName.value  = '';
    if (dom.selectAddDiff) dom.selectAddDiff.value = 'Hard';
    if (dom.inputAddScore) dom.inputAddScore.value = '19';
    if (dom.inputAddTime)  dom.inputAddTime.value  = '18.5';
    if (dom.modalAdd) dom.modalAdd.classList.remove('hidden');
    if (dom.inputAddName) dom.inputAddName.focus();
  }

  function closeAddModal() {
    if (dom.modalAdd) dom.modalAdd.classList.add('hidden');
  }

  function submitAddCandidate(e) {
    if (e) e.preventDefault();
    const name = (dom.inputAddName ? dom.inputAddName.value : '').trim();
    if (!name) {
      alert('Please enter a candidate name.');
      if (dom.inputAddName) dom.inputAddName.focus();
      return;
    }

    const diff        = dom.selectAddDiff ? dom.selectAddDiff.value : 'Hard – Test 1';
    const scoreVal    = parseInt(dom.inputAddScore ? dom.inputAddScore.value : '0', 10) || 0;
    const timeMinutes = parseFloat(dom.inputAddTime ? dom.inputAddTime.value : '15') || 15;
    const timeSeconds = Math.round(timeMinutes * 60);

    const isHard = diff.toLowerCase().includes('hard');
    const isT2   = diff.toLowerCase().includes('test 2') || diff.toLowerCase().includes('hard_t2');
    const questions = (typeof DMAT_DATA !== 'undefined')
      ? (isT2 ? (DMAT_DATA.hard_t2 || []) : (isHard ? (DMAT_DATA.hard || []) : (diff === 'Medium' ? DMAT_DATA.medium : DMAT_DATA.easy)))
      : [];
    const total      = (questions && questions.length) || (isHard ? 20 : (diff === 'Medium' ? 4 : 5));
    const score      = Math.min(scoreVal, total);
    const percentage = Math.round((score / total) * 100);
    const details    = typeof buildDetailsForCandidate === 'function' ? buildDetailsForCandidate(questions, score) : [];

    const newSub = {
      id: 'sub-' + Date.now(),
      candidateName: name,
      difficulty: diff,
      difficultyKey: isT2 ? 'hard_t2' : (isHard ? 'hard' : (diff === 'Medium' ? 'medium' : 'easy')),
      questionCount: total,
      score, total, percentage,
      timeTakenSeconds: timeSeconds,
      timeTakenFormatted: formatDuration(timeSeconds),
      timeLeftFormatted: formatDuration(Math.max(0, (isHard ? 1500 : 900) - timeSeconds)),
      submittedAt: formatDateTime(new Date()),
      status: 'Completed',
      details
    };

    const list = getSubmissions();
    list.unshift(newSub);
    saveSubmissions(list);

    if (typeof CloudSync !== 'undefined' && CloudSync.broadcastSubmission) {
      CloudSync.broadcastSubmission(newSub).catch(() => {});
    }

    closeAddModal();
    renderDashboard();
  }

  /* ───── CSV EXPORT ───── */
  function exportCsv() {
    const list = getSubmissions();
    if (!list || list.length === 0) { alert('No records to export.'); return; }
    const headers = ['#', 'Candidate Name', 'Difficulty', 'Questions', 'Score', 'Total', 'Percentage', 'Time Taken', 'Submitted At', 'Status'];
    const rows = list.map((s, i) => [
      i + 1,
      `"${(s.candidateName || '').replace(/"/g, '""')}"`,
      `"${s.difficulty}"`,
      s.questionCount || s.total || 20,
      s.score, s.total,
      `"${s.percentage}%"`,
      `"${s.timeTakenFormatted || formatDuration(s.timeTakenSeconds || 0)}"`,
      `"${s.submittedAt}"`,
      `"${s.status || 'Completed'}"`
    ]);
    const csv  = [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url  = URL.createObjectURL(blob);
    const a    = document.createElement('a');
    a.href = url;
    a.download = `dmat_admin_${new Date().toISOString().slice(0, 10)}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  /* ───── RESET ───── */
  function resetLiveSubmissions() {
    if (!confirm('Reset all data with fresh demo entries?')) return;
    if (typeof getRealTimeSubmissions === 'function') {
      const live = getRealTimeSubmissions();
      saveSubmissions(live);
      renderDashboard();
      if (typeof CloudSync !== 'undefined') live.forEach(s => CloudSync.broadcastSubmission(s).catch(() => {}));
    }
  }

  /* ───── EVENT BINDINGS ───── */
  function bindEvents() {
    if (dom.searchInput)      dom.searchInput.addEventListener('input', renderTable);
    if (dom.filterDifficulty) dom.filterDifficulty.addEventListener('change', renderTable);
    if (dom.sortBy)           dom.sortBy.addEventListener('change', renderTable);
    if (dom.btnExportCsv)     dom.btnExportCsv.addEventListener('click', exportCsv);
    if (dom.btnRefresh)       dom.btnRefresh.addEventListener('click', () => { renderDashboard(); updateLiveClock(); });
    if (dom.btnClearAll) {
      dom.btnClearAll.addEventListener('click', () => {
        if (!confirm('Are you sure you want to permanently clear all candidate submission records?')) return;
        localStorage.removeItem(STORAGE_KEY);
        saveSubmissions([]);
        renderDashboard();
      });
    }
    if (dom.btnEmptyReset)    dom.btnEmptyReset.addEventListener('click', resetLiveSubmissions);
    if (dom.btnCloseDetails)    dom.btnCloseDetails.addEventListener('click', closeInspectModal);
    if (dom.btnCloseDetailsFt)  dom.btnCloseDetailsFt.addEventListener('click', closeInspectModal);
    if (dom.btnSimulate)      dom.btnSimulate.addEventListener('click', openAddModal);
    if (dom.btnCloseAdd)      dom.btnCloseAdd.addEventListener('click', closeAddModal);
    if (dom.btnCancelAdd)     dom.btnCancelAdd.addEventListener('click', closeAddModal);
    if (dom.btnSubmitAdd)     dom.btnSubmitAdd.addEventListener('click', submitAddCandidate);
    if (dom.formAdd)          dom.formAdd.addEventListener('submit', submitAddCandidate);
  }

  /* ───── UTILITIES ───── */
  function formatDateTime(d) {
    if (!d) d = new Date();
    const pad  = n => n.toString().padStart(2, '0');
    return `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}`;
  }
  function formatDuration(sec) {
    if (!sec || sec < 0) sec = 0;
    return `${Math.floor(sec / 60)}m ${(sec % 60).toString().padStart(2, '0')}s`;
  }
  function getInitials(name) {
    if (!name) return '??';
    const p = name.trim().split(/\s+/);
    return p.length === 1 ? p[0].slice(0, 2).toUpperCase() : (p[0][0] + p[p.length - 1][0]).toUpperCase();
  }
  function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  /* ───── BOOTSTRAP ───── */
  function bootstrap() {
    // Bind login form
    const loginForm = document.getElementById('admin-login-form');
    if (loginForm) loginForm.addEventListener('submit', handleLogin);

    const logoutBtn = document.getElementById('admin-logout-btn');
    if (logoutBtn) logoutBtn.addEventListener('click', handleLogout);

    // Allow Enter on login fields
    ['login-username', 'login-password'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.addEventListener('keydown', e => { if (e.key === 'Enter') handleLogin(e); });
    });

    // Toggle password visibility
    const togglePwd = document.getElementById('toggle-pwd-visibility');
    if (togglePwd) {
      togglePwd.addEventListener('click', () => {
        const p = document.getElementById('login-password');
        p.type = p.type === 'password' ? 'text' : 'password';
        togglePwd.textContent = p.type === 'password' ? '👁' : '🙈';
      });
    }

    if (isAuthenticated()) {
      showDashboard();
    } else {
      showLoginScreen();
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bootstrap);
  } else {
    bootstrap();
  }

})();
