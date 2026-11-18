// admin.js – Real-Time Candidate Submissions & Analytics Controller

(function () {
  'use strict';

  const STORAGE_KEY = 'dmat_submissions';

  // DOM Elements
  const dom = {
    liveTimeNow: document.getElementById('live-time-now'),
    kpiTotal: document.getElementById('kpi-total-candidates'),
    kpiAvgScore: document.getElementById('kpi-avg-score'),
    kpiAvgTime: document.getElementById('kpi-avg-time'),
    kpiPassRate: document.getElementById('kpi-pass-rate'),
    kpiTopCandidate: document.getElementById('kpi-top-candidate'),
    kpiTopScore: document.getElementById('kpi-top-score'),

    // Table elements
    tableBody: document.getElementById('admin-table-body'),
    displayCount: document.getElementById('display-count'),
    totalCount: document.getElementById('total-count'),
    emptyState: document.getElementById('admin-empty-state'),

    // Filter controls
    searchInput: document.getElementById('admin-search-input'),
    filterDifficulty: document.getElementById('admin-filter-difficulty'),
    sortBy: document.getElementById('admin-sort-by'),

    // Action buttons
    btnExportCsv: document.getElementById('btn-export-csv'),
    btnSimulate: document.getElementById('btn-simulate-candidate'),
    btnRefresh: document.getElementById('btn-refresh-data'),
    btnEmptyReset: document.getElementById('btn-empty-reset'),

    // Inspect Modal
    modalDetails: document.getElementById('modal-admin-details'),
    detailsTitle: document.getElementById('admin-details-title'),
    detailsMeta: document.getElementById('admin-details-meta'),
    detailsBody: document.getElementById('admin-details-body'),
    btnCloseDetails: document.getElementById('btn-close-admin-details'),
    btnCloseDetailsFt: document.getElementById('btn-close-admin-details-ft'),

    // Add Candidate Modal
    modalAdd: document.getElementById('modal-add-candidate'),
    formAdd: document.getElementById('form-add-candidate'),
    inputAddName: document.getElementById('new-candidate-name'),
    selectAddDiff: document.getElementById('new-candidate-diff'),
    inputAddScore: document.getElementById('new-candidate-score'),
    inputAddTime: document.getElementById('new-candidate-time'),
    inputAddTimestamp: document.getElementById('new-candidate-timestamp'),
    btnCloseAdd: document.getElementById('btn-close-add-modal'),
    btnCancelAdd: document.getElementById('btn-cancel-add'),
    btnSubmitAdd: document.getElementById('btn-submit-add')
  };

  function init() {
    startLiveClock();
    ensureSubmissionsData();
    renderDashboard();
    bindEvents();
    initCrossDeviceSync();
  }

  function initCrossDeviceSync() {
    if (typeof CloudSync === 'undefined') return;

    // 1. Live status indicator update
    CloudSync.onStatusChange((status, text) => {
      const label = document.querySelector('.live-text');
      const dot = document.querySelector('.live-dot');
      if (label) label.textContent = text;
      if (dot) {
        if (status === 'connected') {
          dot.style.background = '#10b981';
          dot.style.boxShadow = '0 0 8px #10b981';
        } else if (status === 'syncing') {
          dot.style.background = '#fbbf24';
          dot.style.boxShadow = '0 0 8px #fbbf24';
        } else {
          dot.style.background = '#6b7280';
          dot.style.boxShadow = 'none';
        }
      }
    });

    // 2. Fetch remote submissions from other devices on load
    CloudSync.fetchRemoteSubmissions().then(() => {
      renderDashboard();
    }).catch(() => {});

    // 3. Real-time stream subscription (instant toast + update when candidate submits on mobile)
    CloudSync.subscribeRealTime((newSub) => {
      renderDashboard();
      flashLiveNotification(newSub);
    });

    // 4. Polling fallback every 10 seconds
    setInterval(() => {
      CloudSync.fetchRemoteSubmissions().then(() => {
        renderDashboard();
      }).catch(() => {});
    }, 10000);
  }

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

  // Live real-time clock
  function startLiveClock() {
    updateLiveClock();
    setInterval(updateLiveClock, 30000); // update every 30s
  }

  function updateLiveClock() {
    if (dom.liveTimeNow) {
      dom.liveTimeNow.textContent = formatDateTime(new Date());
    }
  }

  // Storage Handlers
  function getSubmissions() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch (e) {}

    // Fallback to real-time generated list from dmat_data.js
    if (typeof getRealTimeSubmissions === 'function') {
      const live = getRealTimeSubmissions();
      saveSubmissions(live);
      return live;
    }
    return [];
  }

  function saveSubmissions(list) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
    } catch (e) {
      console.error('Failed to save to localStorage', e);
    }
  }

  function ensureSubmissionsData() {
    const list = getSubmissions();
    if (!list || list.length === 0) {
      if (typeof getRealTimeSubmissions === 'function') {
        saveSubmissions(getRealTimeSubmissions());
      }
    }
  }

  // Dashboard Rendering
  function renderDashboard() {
    const all = getSubmissions();
    updateKPIs(all);
    renderTable();
  }

  function updateKPIs(list) {
    const total = list.length;
    dom.kpiTotal.textContent = total;

    if (total === 0) {
      dom.kpiAvgScore.textContent = '0%';
      dom.kpiAvgTime.textContent = '0m 00s';
      dom.kpiPassRate.textContent = '0%';
      dom.kpiTopCandidate.textContent = '—';
      dom.kpiTopScore.textContent = '—';
      return;
    }

    // Average Score
    const totalPct = list.reduce((sum, item) => sum + (item.percentage || 0), 0);
    const avgPct = Math.round(totalPct / total);
    dom.kpiAvgScore.textContent = `${avgPct}%`;

    // Average Completion Time
    const totalSeconds = list.reduce((sum, item) => sum + (item.timeTakenSeconds || 0), 0);
    const avgSeconds = Math.round(totalSeconds / total);
    dom.kpiAvgTime.textContent = formatDuration(avgSeconds);

    // Pass rate (>= 60%)
    const passedCount = list.filter(item => (item.percentage || 0) >= 60).length;
    const passRate = Math.round((passedCount / total) * 100);
    dom.kpiPassRate.textContent = `${passRate}%`;

    // Top Performer
    const sortedByScore = [...list].sort((a, b) => (b.percentage || 0) - (a.percentage || 0));
    const top = sortedByScore[0];
    if (top) {
      dom.kpiTopCandidate.textContent = top.candidateName;
      dom.kpiTopScore.textContent = `${top.score}/${top.total} (${top.percentage}%)`;
    }
  }

  function renderTable() {
    const all = getSubmissions();
    const query = (dom.searchInput ? dom.searchInput.value : '').trim().toLowerCase();
    const diffFilter = dom.filterDifficulty ? dom.filterDifficulty.value : 'all';
    const sortVal = dom.sortBy ? dom.sortBy.value : 'recent';

    // 1. Filter
    let filtered = all.filter(item => {
      // Search match
      const nameMatch = (item.candidateName || '').toLowerCase().includes(query);
      const diffMatch = (item.difficulty || '').toLowerCase().includes(query);
      const dateMatch = (item.submittedAt || '').toLowerCase().includes(query);
      const matchesSearch = query === '' || nameMatch || diffMatch || dateMatch;

      // Difficulty filter
      let matchesDiff = true;
      if (diffFilter !== 'all') {
        matchesDiff = (item.difficulty || '').toLowerCase() === diffFilter.toLowerCase();
      }

      return matchesSearch && matchesDiff;
    });

    // 2. Sort
    filtered.sort((a, b) => {
      if (sortVal === 'score-desc') {
        return (b.percentage || 0) - (a.percentage || 0);
      } else if (sortVal === 'time-asc') {
        return (a.timeTakenSeconds || 0) - (b.timeTakenSeconds || 0);
      } else if (sortVal === 'name-asc') {
        return (a.candidateName || '').localeCompare(b.candidateName || '');
      } else {
        // default: most recent first (by ID or timestamp)
        return (b.submittedAt || '').localeCompare(a.submittedAt || '');
      }
    });

    // Update count labels
    dom.displayCount.textContent = filtered.length;
    dom.totalCount.textContent = all.length;

    // Show/hide empty state
    if (filtered.length === 0) {
      dom.emptyState.classList.remove('hidden');
      dom.tableBody.innerHTML = '';
      return;
    }
    dom.emptyState.classList.add('hidden');

    // Build Rows
    dom.tableBody.innerHTML = '';
    filtered.forEach((sub, idx) => {
      const tr = document.createElement('tr');
      const pctBadgeClass = sub.percentage >= 80 ? 'pill-green' : (sub.percentage >= 50 ? 'pill-yellow' : 'pill-red');
      const diffClass = (sub.difficulty || 'hard').toLowerCase();

      tr.innerHTML = `
        <td><span class="rank-num">#${idx + 1}</span></td>
        <td>
          <div class="candidate-cell">
            <span class="c-avatar">${getInitials(sub.candidateName)}</span>
            <div class="c-info">
              <span class="c-name">${escapeHtml(sub.candidateName)}</span>
            </div>
          </div>
        </td>
        <td>
          <span class="diff-tag ${diffClass}">${escapeHtml(sub.difficulty)} (${sub.questionCount || sub.total || 20}Q)</span>
        </td>
        <td>
          <div class="score-cell">
            <span class="score-badge ${pctBadgeClass}">
              ${sub.score} / ${sub.total} (${sub.percentage}%)
            </span>
          </div>
        </td>
        <td>
          <div class="time-cell">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><use href="#ic-timer"/></svg>
            <strong>${sub.timeTakenFormatted || formatDuration(sub.timeTakenSeconds || 0)}</strong>
            <span class="time-sub">/ ${sub.difficulty === 'Hard' ? '25m' : (sub.difficulty === 'Medium' ? '15m' : '10m')}</span>
          </div>
        </td>
        <td>
          <span class="date-txt">${sub.submittedAt || 'Today'}</span>
        </td>
        <td>
          <span class="status-badge">Completed</span>
        </td>
        <td>
          <div class="admin-action-btns">
            <button class="btn-inspect" data-inspect-id="${sub.id}" title="Inspect full response sheet">
              Inspect Sheet
            </button>
            <button class="btn-del" data-del-id="${sub.id}" title="Delete record">
              ✕
            </button>
          </div>
        </td>
      `;

      dom.tableBody.appendChild(tr);
    });

    // Bind action buttons in table
    dom.tableBody.querySelectorAll('.btn-inspect').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-inspect-id');
        openInspectModal(id);
      });
    });

    dom.tableBody.querySelectorAll('.btn-del').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-del-id');
        deleteCandidate(id);
      });
    });
  }

  // Inspect Modal
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
      dom.detailsBody.innerHTML = `
        <div style="text-align: center; padding: 24px; color: var(--t-45);">
          No question-by-question breakdown recorded for this candidate.
        </div>
      `;
    } else {
      item.details.forEach((d, i) => {
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
            ${eqs.map(e => `<div>${escapeHtml(e)}</div>`).join('')}
          </div>
          <div class="q-detail-ans">
            <div>Submitted Answer: <strong>A=${userAns.A || '—'}, B=${userAns.B || '—'}, C=${userAns.C || '—'}, D=${userAns.D || '—'}</strong></div>
            <div>Official Solution: <strong>A=${sol.A !== undefined ? sol.A : '—'}, B=${sol.B !== undefined ? sol.B : '—'}, C=${sol.C !== undefined ? sol.C : '—'}, D=${sol.D !== undefined ? sol.D : '—'}</strong></div>
          </div>
          ${d.stepByStep && d.stepByStep.length ? `
            <div style="margin-top: 8px; font-size: 11px; color: var(--t-45); line-height: 1.4;">
              ${d.stepByStep.map(s => `• ${escapeHtml(s)}`).join('<br/>')}
            </div>
          ` : ''}
        `;
        dom.detailsBody.appendChild(card);
      });
    }

    dom.modalDetails.classList.remove('hidden');
  }

  function closeInspectModal() {
    dom.modalDetails.classList.add('hidden');
  }

  // Delete Candidate
  function deleteCandidate(id) {
    if (!confirm('Are you sure you want to delete this candidate submission record?')) return;
    let list = getSubmissions();
    list = list.filter(s => s.id !== id);
    saveSubmissions(list);
    renderDashboard();
  }

  // Add / Simulate Candidate Modal
  function openAddModal() {
    const now = new Date();
    dom.inputAddTimestamp.value = formatDateTime(now);
    dom.inputAddName.value = '';
    dom.selectAddDiff.value = 'Hard';
    dom.inputAddScore.value = '19';
    dom.inputAddTime.value = '18.5';
    dom.modalAdd.classList.remove('hidden');
    dom.inputAddName.focus();
  }

  function closeAddModal() {
    dom.modalAdd.classList.add('hidden');
  }

  function submitAddCandidate(e) {
    if (e) e.preventDefault();
    const name = dom.inputAddName.value.trim();
    if (!name) {
      alert('Please enter a candidate name.');
      dom.inputAddName.focus();
      return;
    }

    const diff = dom.selectAddDiff.value;
    const scoreVal = parseInt(dom.inputAddScore.value, 10) || 0;
    const timeMinutes = parseFloat(dom.inputAddTime.value) || 15;
    const timeSeconds = Math.round(timeMinutes * 60);

    const questions = (typeof DMAT_DATA !== 'undefined' && DMAT_DATA[diff.toLowerCase()])
      ? DMAT_DATA[diff.toLowerCase()]
      : (DMAT_DATA ? DMAT_DATA.hard : []);
    const total = questions.length || (diff === 'Hard' ? 20 : (diff === 'Medium' ? 4 : 5));
    const score = Math.min(scoreVal, total);
    const percentage = Math.round((score / total) * 100);

    const details = typeof buildDetailsForCandidate === 'function'
      ? buildDetailsForCandidate(questions, score)
      : [];

    const newSub = {
      id: 'sub-' + Date.now(),
      candidateName: name,
      difficulty: diff,
      questionCount: total,
      score: score,
      total: total,
      percentage: percentage,
      timeTakenSeconds: timeSeconds,
      timeTakenFormatted: formatDuration(timeSeconds),
      timeLeftFormatted: formatDuration(Math.max(0, (diff === 'Hard' ? 1500 : 900) - timeSeconds)),
      submittedAt: formatDateTime(new Date()),
      status: 'Completed',
      details: details
    };

    const list = getSubmissions();
    list.unshift(newSub);
    saveSubmissions(list);

    // Broadcast live across all devices
    if (typeof CloudSync !== 'undefined' && CloudSync.broadcastSubmission) {
      CloudSync.broadcastSubmission(newSub).catch(() => {});
    }

    closeAddModal();
    renderDashboard();
  }

  // Export CSV
  function exportCsv() {
    const list = getSubmissions();
    if (!list || list.length === 0) {
      alert('No submission records to export.');
      return;
    }

    const headers = ['#', 'Candidate Name', 'Difficulty', 'Questions', 'Score', 'Total', 'Percentage', 'Time Taken', 'Submitted At', 'Status'];
    const rows = list.map((s, idx) => [
      idx + 1,
      `"${(s.candidateName || '').replace(/"/g, '""')}"`,
      `"${s.difficulty}"`,
      s.questionCount || s.total || 20,
      s.score,
      s.total,
      `"${s.percentage}%"`,
      `"${s.timeTakenFormatted || formatDuration(s.timeTakenSeconds || 0)}"`,
      `"${s.submittedAt}"`,
      `"${s.status || 'Completed'}"`
    ]);

    const csvContent = [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `dmat_admin_submissions_${new Date().toISOString().slice(0, 10)}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  // Reset to live initial data
  function resetLiveSubmissions() {
    if (confirm('Reload and stamp realistic candidate submission records with live real-time timestamps across all devices?')) {
      if (typeof getRealTimeSubmissions === 'function') {
        const live = getRealTimeSubmissions();
        saveSubmissions(live);
        renderDashboard();
        if (typeof CloudSync !== 'undefined') {
          live.forEach(s => CloudSync.broadcastSubmission(s).catch(() => {}));
        }
      }
    }
  }

  // Event bindings
  function bindEvents() {
    if (dom.searchInput) {
      dom.searchInput.addEventListener('input', renderTable);
    }
    if (dom.filterDifficulty) {
      dom.filterDifficulty.addEventListener('change', renderTable);
    }
    if (dom.sortBy) {
      dom.sortBy.addEventListener('change', renderTable);
    }
    if (dom.btnExportCsv) {
      dom.btnExportCsv.addEventListener('click', exportCsv);
    }
    if (dom.btnRefresh) {
      dom.btnRefresh.addEventListener('click', () => {
        renderDashboard();
        updateLiveClock();
      });
    }
    if (dom.btnEmptyReset) {
      dom.btnEmptyReset.addEventListener('click', resetLiveSubmissions);
    }

    // Inspect Modal close events
    if (dom.btnCloseDetails) dom.btnCloseDetails.addEventListener('click', closeInspectModal);
    if (dom.btnCloseDetailsFt) dom.btnCloseDetailsFt.addEventListener('click', closeInspectModal);

    // Add Candidate events
    if (dom.btnSimulate) dom.btnSimulate.addEventListener('click', openAddModal);
    if (dom.btnCloseAdd) dom.btnCloseAdd.addEventListener('click', closeAddModal);
    if (dom.btnCancelAdd) dom.btnCancelAdd.addEventListener('click', closeAddModal);
    if (dom.btnSubmitAdd) dom.btnSubmitAdd.addEventListener('click', submitAddCandidate);
    if (dom.formAdd) dom.formAdd.addEventListener('submit', submitAddCandidate);
  }

  // Utilities
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

  function formatDuration(sec) {
    if (!sec || sec < 0) sec = 0;
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m}m ${s.toString().padStart(2, '0')}s`;
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

  // Start on load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
