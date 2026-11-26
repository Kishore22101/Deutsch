// admin.js – Admin Dashboard Controller with Login Gate & Live Sync

// Reset check completed

(function () {
  'use strict';

  /* ───── AUTH CONFIG ───── */
  const ADMIN_ID  = 'admin';
  const ADMIN_PWD = 'Admin@123';
  const AUTH_KEY  = 'dmat_admin_auth';
  const STORAGE_KEY = 'dmat_submissions';

  /* ───── LOGIN GATE ───── */
  function isAuthenticated() {
    return sessionStorage.getItem(AUTH_KEY) === '1' || localStorage.getItem(AUTH_KEY) === '1';
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
    const user = (document.getElementById('login-username').value || '').trim().toLowerCase();
    const pass = (document.getElementById('login-password').value || '').trim();
    const errEl = document.getElementById('login-error');

    const validUsers = ['admin', 'deutschadmin', 'administrator', 'root'];
    const validPasses = ['Admin@123', 'admin@123', 'admin123', 'Admin123', 'admin', 'Admin'];

    if (validUsers.includes(user) && validPasses.includes(pass)) {
      sessionStorage.setItem(AUTH_KEY, '1');
      try { localStorage.setItem(AUTH_KEY, '1'); } catch(err) {}
      if (errEl) { errEl.textContent = ''; errEl.classList.add('hidden'); }
      showDashboard();
    } else {
      if (errEl) {
        errEl.textContent = 'Invalid credentials. Please try again.';
        errEl.classList.remove('hidden');
      }
      const pwInput = document.getElementById('login-password');
      if (pwInput) { pwInput.value = ''; pwInput.focus(); }
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
    // Check admin-deleted tombstone IDs
    try {
      const deleted = JSON.parse(localStorage.getItem('dmat_deleted_ids') || '[]');
      if (sub.id && deleted.includes(sub.id)) return true;
    } catch(e) {}

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
        } else if (diffFilter === 'fig_easy') {
          matchesDiff = (item.subtest === 'figures' || itemDiff.includes('figure')) && itemDiff.includes('easy');
        } else if (diffFilter === 'fig_med') {
          matchesDiff = (item.subtest === 'figures' || itemDiff.includes('figure')) && (itemDiff.includes('medium') || itemDiff.includes('med'));
        } else if (diffFilter === 'fig_hard') {
          matchesDiff = (item.subtest === 'figures' || itemDiff.includes('figure')) && itemDiff.includes('hard');
        } else if (diffFilter === 'hard_all') {
          matchesDiff = itemDiff.includes('hard') || (item.difficultyKey || '').startsWith('hard');
        } else if (diffFilter === 'hard' || diffFilter === 'hard_t1') {
          matchesDiff = (itemDiff.includes('hard') && (itemDiff.includes('set 1') || itemDiff.includes('test 1'))) || itemDiff === 'hard' || item.difficultyKey === 'hard' || item.difficultyKey === 'hard_t1';
        } else if (diffFilter === 'hard_t2') {
          matchesDiff = (itemDiff.includes('hard') && (itemDiff.includes('set 2') || itemDiff.includes('test 2'))) || itemDiff === 'hard_t2' || item.difficultyKey === 'hard_t2';
        } else if (diffFilter === 'hard_t3') {
          matchesDiff = (itemDiff.includes('hard') && (itemDiff.includes('set 3') || itemDiff.includes('test 3'))) || itemDiff === 'hard_t3' || item.difficultyKey === 'hard_t3';
        } else if (diffFilter === 'hard_t4') {
          matchesDiff = (itemDiff.includes('hard') && (itemDiff.includes('set 4') || itemDiff.includes('test 4'))) || itemDiff === 'hard_t4' || item.difficultyKey === 'hard_t4';
        } else if (diffFilter === 'hard_t5') {
          matchesDiff = (itemDiff.includes('hard') && (itemDiff.includes('set 5') || itemDiff.includes('test 5'))) || itemDiff === 'hard_t5' || item.difficultyKey === 'hard_t5';
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
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td style="color:var(--t-45);">${idx + 1}</td>
        <td>
          <strong>${escapeHtml(sub.candidateName)}</strong>
          ${sub.candidateEmail ? `<div style="font-size:11px;color:var(--t-45);margin-top:2px;">${escapeHtml(sub.candidateEmail)}</div>` : ''}
        </td>
        <td><span class="badge-tag-diff">${escapeHtml(sub.difficulty)}</span></td>
        <td><strong style="color:#10b981;">${sub.score} / ${sub.total}</strong> (${sub.percentage}%)</td>
        <td>${sub.timeTakenFormatted || formatDuration(sub.timeTakenSeconds || 0)}</td>
        <td style="color:var(--t-60); font-size:12px;">
          ${sub.submittedAt || 'Today'}
          ${sub.status && sub.status !== 'Completed' ? `<div style="font-size:10px; color:#f87171; font-weight:700; margin-top:3px; display:inline-flex; align-items:center; gap:3px;"><span style="display:inline-block; width:6px; height:6px; border-radius:50%; background:#f87171;"></span>${escapeHtml(sub.status)}</div>` : ''}
        </td>
        <td style="text-align:right;">
          <div class="admin-action-btns" style="display:inline-flex; align-items:center; gap:6px;">
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
      <span>• Status: <strong style="${item.status && item.status !== 'Completed' ? 'color:#f87171;' : 'color:#10b981;' }">${escapeHtml(item.status || 'Completed')}</strong></span>
      ${item.candidateEmail ? `<span>• Email: <strong style="color:var(--t-60);">${escapeHtml(item.candidateEmail)}</strong></span>` : ''}
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
            <div class="q-detail-figures-compare">
              <div class="bd-compare-block ${(()=>{ const m5c = parseInt(userAns.m5,10)===parseInt(sol.m5,10); return m5c?`ans-pass`:`ans-fail`; })()}">
                <div class="bd-compare-row bd-candidate-row">
                  <span class="bd-compare-label">Candidate Choice:</span>
                  <span class="bd-compare-matrix">M5 = Option ${userAns.m5 || "—"}</span>
                  <div class="bd-fig-box">${(typeof FiguresRender!=="undefined"&&Array.isArray(d.optionsM5)&&parseInt(userAns.m5,10)>0)?FiguresRender.renderMatrixSvg(d.optionsM5[parseInt(userAns.m5,10)-1],64):"<span class=\"bd-no-fig\">—</span>"}</div>
                  <span class="bd-verdict ${parseInt(userAns.m5,10)===parseInt(sol.m5,10)?`verdict-pass`:`verdict-fail`}">${parseInt(userAns.m5,10)===parseInt(sol.m5,10)?"✓":"✕"}</span>
                </div>
                <div class="bd-compare-row bd-solution-row">
                  <span class="bd-compare-label">Official Solution:</span>
                  <span class="bd-compare-matrix">M5 = Option ${sol.m5 || "—"}</span>
                  <div class="bd-fig-box bd-sol-fig-box">${(typeof FiguresRender!=="undefined"&&Array.isArray(d.optionsM5)&&parseInt(sol.m5,10)>0)?FiguresRender.renderMatrixSvg(d.optionsM5[parseInt(sol.m5,10)-1],64):""}</div>
                </div>
              </div>
              <div class="bd-compare-block ${(()=>{ const m6c = parseInt(userAns.m6,10)===parseInt(sol.m6,10); return m6c?`ans-pass`:`ans-fail`; })()}">
                <div class="bd-compare-row bd-candidate-row">
                  <span class="bd-compare-label">Candidate Choice:</span>
                  <span class="bd-compare-matrix">M6 = Option ${userAns.m6 || "—"}</span>
                  <div class="bd-fig-box">${(typeof FiguresRender!=="undefined"&&Array.isArray(d.optionsM6)&&parseInt(userAns.m6,10)>0)?FiguresRender.renderMatrixSvg(d.optionsM6[parseInt(userAns.m6,10)-1],64):"<span class=\"bd-no-fig\">—</span>"}</div>
                  <span class="bd-verdict ${parseInt(userAns.m6,10)===parseInt(sol.m6,10)?`verdict-pass`:`verdict-fail`}">${parseInt(userAns.m6,10)===parseInt(sol.m6,10)?"✓":"✕"}</span>
                </div>
                <div class="bd-compare-row bd-solution-row">
                  <span class="bd-compare-label">Official Solution:</span>
                  <span class="bd-compare-matrix">M6 = Option ${sol.m6 || "—"}</span>
                  <div class="bd-fig-box bd-sol-fig-box">${(typeof FiguresRender!=="undefined"&&Array.isArray(d.optionsM6)&&parseInt(sol.m6,10)>0)?FiguresRender.renderMatrixSvg(d.optionsM6[parseInt(sol.m6,10)-1],64):""}</div>
                </div>
              </div>
            </div>
            ${(d.explanation || d.ruleExplanation) ? `<div class="step-by-step" style="margin-top:8px;font-size:12px;color:var(--t-80);background:rgba(255,255,255,0.03);padding:8px 12px;border-radius:6px;border-left:2px solid #10b981;">• <strong>Pattern Rule:</strong> ${escapeHtml(d.explanation || d.ruleExplanation)}</div>` : ''}
          `;
        } else if (d.subtest === 'latin') {
          const colLabels = ['α', 'β', 'γ', 'δ', 'ε'];

          // Extract choices cleanly
          let userChoice = (typeof d.userAnswer === 'string' && d.userAnswer.trim()) ? d.userAnswer.trim() :
                           (d.userAnswer && typeof d.userAnswer.val === 'string' && d.userAnswer.val.trim()) ? d.userAnswer.val.trim() :
                           (typeof d.u === 'string' && d.u.trim()) ? d.u.trim() : '';

          let solChoice = (typeof d.solution === 'string' && d.solution.trim()) ? d.solution.trim() :
                          (d.solution && typeof d.solution.val === 'string' && d.solution.val.trim()) ? d.solution.val.trim() :
                          (typeof d.s === 'string' && d.s.trim()) ? d.s.trim() : '';

          // Self-heal from LATIN_DATA if solution or grid is missing/incomplete
          if ((!solChoice || !Array.isArray(d.grid) || !d.grid.length || !d.target) && (typeof LATIN_DATA !== 'undefined' || (typeof window !== 'undefined' && window.LATIN_DATA))) {
            const ldata = (typeof LATIN_DATA !== 'undefined') ? LATIN_DATA : window.LATIN_DATA;
            const diffK = (item.difficultyKey || item.difficulty || '').toLowerCase();
            let matchedSet = null;
            for (const key of Object.keys(ldata)) {
              if (diffK.includes(key)) { matchedSet = ldata[key]; break; }
            }
            if (!matchedSet) {
              if (diffK.includes('easy')) matchedSet = ldata.easy_t1;
              else if (diffK.includes('med')) matchedSet = ldata.medium_t1;
              else if (diffK.includes('sim')) matchedSet = ldata.sim_t1;
              else matchedSet = ldata.hard_t1;
            }
            if (matchedSet) {
              const qObj = matchedSet.find(q => q.qNum === d.questionId || q.id === d.questionId) || matchedSet[i];
              if (qObj) {
                if (!solChoice && qObj.solution) solChoice = qObj.solution;
                if ((!d.grid || !d.grid.length) && qObj.grid) d.grid = qObj.grid;
                if (!d.target && qObj.target) d.target = qObj.target;
                if (!d.explanation && qObj.explanation) d.explanation = qObj.explanation;
              }
            }
          }

          if (!userChoice) userChoice = '—';
          if (!solChoice) solChoice = '—';

          let miniGrid = '<table class="latin-breakdown-grid" style="margin:8px 0; border-collapse:collapse; background:rgba(15,23,42,0.6); border:1px solid rgba(255,255,255,0.1); border-radius:6px; overflow:hidden;"><thead><tr><th style="width:30px;height:30px;background:rgba(30,41,59,0.8);color:#c084fc;font-size:12px;border:1px solid rgba(255,255,255,0.08);"></th>' + colLabels.map(c => '<th style="width:30px;height:30px;background:rgba(30,41,59,0.8);color:#c084fc;font-size:12px;border:1px solid rgba(255,255,255,0.08);">' + c + '</th>').join('') + '</tr></thead><tbody>';
          if (Array.isArray(d.grid)) {
            for (let r = 0; r < 5; r++) {
              miniGrid += '<tr><th style="width:30px;height:30px;background:rgba(30,41,59,0.8);color:#94a3b8;font-size:11px;border:1px solid rgba(255,255,255,0.08);">' + (r + 1) + '</th>';
              for (let c = 0; c < 5; c++) {
                const val = d.grid[r] ? d.grid[r][c] : '';
                const isT = (d.target && d.target.row === r && d.target.col === c);
                if (isT) {
                  miniGrid += '<td class="cell-target" style="width:30px;height:30px;text-align:center;background:#fef08a;color:#0f172a;font-weight:900;font-size:14px;border:1px solid rgba(255,255,255,0.08);">' + (solChoice !== '—' ? solChoice : '?') + '</td>';
                } else {
                  miniGrid += '<td style="width:30px;height:30px;text-align:center;color:#f8fafc;font-weight:700;font-size:13px;border:1px solid rgba(255,255,255,0.08);">' + (val || '') + '</td>';
                }
              }
              miniGrid += '</tr>';
            }
          }
          miniGrid += '</tbody></table>';

          const targetPos = d.target ? ('Row ' + (d.target.row + 1) + ', Col ' + colLabels[d.target.col]) : '';

          card.innerHTML = `
            <div class="q-detail-head">
              <span>Question ${i + 1} · Latin Squares ${targetPos ? '· Target: ' + targetPos : ''}</span>
              <span class="q-badge ${d.isCorrect ? 'badge-correct' : 'badge-wrong'}">${d.isCorrect ? 'Correct' : 'Incorrect'}</span>
            </div>
            <div style="display:flex; gap:16px; align-items:flex-start; flex-wrap:wrap; margin:10px 0;">
              <div>${miniGrid}</div>
              <div class="q-detail-ans" style="flex:1; min-width:200px;">
                <div>Candidate Choice: <strong>? = ${userChoice}</strong> ${d.isCorrect ? '<span style="color:#10b981;font-weight:800;">✓ Correct</span>' : '<span style="color:#ef4444;font-weight:800;">✕ Incorrect</span>'}</div>
                <div>Official Solution: <strong style="color:#10b981;">? = ${solChoice}</strong></div>
              </div>
            </div>
            ${d.explanation ? `<div class="step-by-step" style="margin-top:8px;font-size:12px;color:var(--t-80);background:rgba(255,255,255,0.03);padding:8px 12px;border-radius:6px;border-left:2px solid #a855f7;">• <strong>Logic Deduction:</strong> ${escapeHtml(d.explanation)}</div>` : ''}
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
    // Save tombstone locally
    try {
      const delKey = 'dmat_deleted_ids';
      const existing = JSON.parse(localStorage.getItem(delKey) || '[]');
      if (!existing.includes(id)) { existing.push(id); localStorage.setItem(delKey, JSON.stringify(existing)); }
    } catch(e) {}
    // Broadcast deletion to ALL other devices via cloud
    if (typeof CloudSync !== 'undefined' && CloudSync.broadcastDelete) {
      CloudSync.broadcastDelete(id);
    }
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
    let questions = [];
    let diffKey = 'hard';
    if (typeof DMAT_DATA !== 'undefined') {
      if (diff.includes('Set 5') || diff.includes('hard_t5')) {
        questions = DMAT_DATA.hard_t5 || [];
        diffKey = 'hard_t5';
      } else if (diff.includes('Set 4') || diff.includes('hard_t4')) {
        questions = DMAT_DATA.hard_t4 || [];
        diffKey = 'hard_t4';
      } else if (diff.includes('Set 3') || diff.includes('hard_t3')) {
        questions = DMAT_DATA.hard_t3 || [];
        diffKey = 'hard_t3';
      } else if (diff.includes('Set 2') || diff.includes('Test 2') || diff.includes('hard_t2')) {
        questions = DMAT_DATA.hard_t2 || [];
        diffKey = 'hard_t2';
      } else if (isHard) {
        questions = DMAT_DATA.hard_t1 || DMAT_DATA.hard || [];
        diffKey = 'hard_t1';
      } else if (diff.includes('Medium – Set 1')) {
        questions = DMAT_DATA.medium_t1 || [];
        diffKey = 'medium_t1';
      } else if (diff.includes('Medium – Set 2')) {
        questions = DMAT_DATA.medium_t2 || [];
        diffKey = 'medium_t2';
      } else if (diff.includes('Medium – Set 3')) {
        questions = DMAT_DATA.medium_t3 || [];
        diffKey = 'medium_t3';
      } else if (diff.includes('Medium – Set 4')) {
        questions = DMAT_DATA.medium_t4 || [];
        diffKey = 'medium_t4';
      } else if (diff.includes('Medium – Set 5')) {
        questions = DMAT_DATA.medium_t5 || [];
        diffKey = 'medium_t5';
      } else if (diff === 'Medium') {
        questions = DMAT_DATA.medium || [];
        diffKey = 'medium';
      } else {
        questions = DMAT_DATA.easy || [];
        diffKey = 'easy';
      }
    }
    const total      = (questions && questions.length) || (isHard ? 20 : (diff.includes('Medium') ? 20 : 5));
    const score      = Math.min(scoreVal, total);
    const percentage = Math.round((score / total) * 100);
    const details    = typeof buildDetailsForCandidate === 'function' ? buildDetailsForCandidate(questions, score) : [];

    const newSub = {
      id: 'sub-' + Date.now(),
      candidateName: name,
      difficulty: diff,
      difficultyKey: diffKey,
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
      const eyeOpen = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>`;
      const eyeClosed = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>`;

      togglePwd.addEventListener('click', () => {
        const p = document.getElementById('login-password');
        if (!p) return;
        const isPwd = p.type === 'password';
        p.type = isPwd ? 'text' : 'password';
        togglePwd.innerHTML = isPwd ? eyeClosed : eyeOpen;
        togglePwd.setAttribute('aria-label', isPwd ? 'Hide password' : 'Show password');
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
