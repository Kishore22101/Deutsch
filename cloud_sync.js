// cloud_sync.js – Real-Time Cross-Device Submissions Sync Engine
// Connects Candidate Mobile/Desktop Devices with Admin Dashboard in Real Time

(function (root, factory) {
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = factory();
  } else {
    root.CloudSync = factory();
  }
})(typeof window !== 'undefined' ? window : this, function () {
  'use strict';

  const SYNC_TOPIC = 'dmat_deutsch_master_prep_2026';
  const NTFY_BASE = 'https://ntfy.sh/' + SYNC_TOPIC;
  const LOCAL_STORAGE_KEY = 'dmat_submissions';

  let eventSource = null;
  let statusListeners = [];
  let currentStatus = 'connecting'; // 'connected', 'syncing', 'offline'
  let sseReconnectTimer = null;

  function notifyStatus(status, text) {
    currentStatus = status;
    statusListeners.forEach(fn => {
      try { fn(status, text); } catch (e) {}
    });
  }

  function onStatusChange(callback) {
    if (typeof callback === 'function') {
      statusListeners.push(callback);
      callback(currentStatus, currentStatus === 'connected' ? 'Live Connected' : 'Connecting...');
    }
  }

  // Hydrate lightweight details with full question texts & solutions from DMAT_DATA
  function enrichSubmissionDetails(sub) {
    if (!sub || typeof sub !== 'object') return sub;
    if (!Array.isArray(sub.details) || sub.details.length === 0) return sub;

    const diffKey = (sub.difficulty || 'hard').toLowerCase();
    const dataset = (typeof window !== 'undefined' && window.DMAT_DATA && window.DMAT_DATA[diffKey])
      ? window.DMAT_DATA[diffKey]
      : ((typeof DMAT_DATA !== 'undefined' && DMAT_DATA[diffKey]) ? DMAT_DATA[diffKey] : []);

    sub.details = sub.details.map((d, idx) => {
      if (!d) return {};
      // If already has full equations array
      if (Array.isArray(d.equations) && d.equations.length && d.stepByStep) {
        return d;
      }

      // If lightweight format: { q, u, c, s }
      const qId = d.q || d.questionId;
      const qData = (dataset && dataset.length)
        ? (dataset.find(item => item.id === qId) || dataset[idx] || {})
        : {};

      const sol = d.s || d.solution || qData.solution || { A: 1, B: 2, C: 3, D: 4 };
      const user = d.u || d.userAnswer || { A: '', B: '', C: '', D: '' };
      const isCorrect = typeof d.c === 'boolean' ? d.c : (typeof d.isCorrect === 'boolean' ? d.isCorrect : false);

      return {
        questionId: qId || qData.id || `q-${idx + 1}`,
        equations: d.equations || qData.equations || [],
        solution: sol,
        userAnswer: user,
        isCorrect: isCorrect,
        stepByStep: d.stepByStep || qData.stepByStep || [],
        fieldCorrectness: d.fieldCorrectness || {
          A: String(user.A || '').trim() === String(sol.A || '').trim(),
          B: String(user.B || '').trim() === String(sol.B || '').trim(),
          C: String(user.C || '').trim() === String(sol.C || '').trim(),
          D: String(user.D || '').trim() === String(sol.D || '').trim()
        }
      };
    });

    return sub;
  }

  // Optimize payload for ultra-fast wire transmission (<2KB)
  function packForBroadcast(sub) {
    if (!sub) return null;
    const packed = { ...sub };
    if (Array.isArray(packed.details)) {
      packed.details = packed.details.map((d, idx) => ({
        q: d.questionId || d.q || `q-${idx + 1}`,
        u: d.userAnswer || d.u || {},
        s: d.solution || d.s || {},
        c: typeof d.isCorrect === 'boolean' ? d.isCorrect : (d.c || false)
      }));
    }
    return packed;
  }

  // Get local storage submissions
  function getLocalList() {
    try {
      const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed.map(enrichSubmissionDetails);
        }
      }
    } catch (e) {}

    // Initial default fallback
    if (typeof getRealTimeSubmissions === 'function') {
      const live = getRealTimeSubmissions().map(enrichSubmissionDetails);
      saveLocalList(live);
      return live;
    }
    return [];
  }

  function saveLocalList(list) {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(list));
    } catch (e) {}
  }

  // Merge remote items with local items (deduplicating by ID)
  function mergeSubmissions(localList, remoteList) {
    const map = new Map();
    // 1. Put local items first
    (localList || []).forEach(item => {
      if (item && item.id) map.set(item.id, enrichSubmissionDetails(item));
    });
    // 2. Put remote items (override/prepend)
    (remoteList || []).forEach(item => {
      if (item && item.id) map.set(item.id, enrichSubmissionDetails(item));
    });

    const merged = Array.from(map.values());
    // Sort most recent first
    merged.sort((a, b) => {
      const dateA = a.submittedAt || '';
      const dateB = b.submittedAt || '';
      return dateB.localeCompare(dateA);
    });
    return merged;
  }

  // Broadcast a new submission from THIS device to ALL devices in real time
  async function broadcastSubmission(submission) {
    if (!submission) return false;

    // 1. Save full submission locally first (instant UI update)
    const enriched = enrichSubmissionDetails(submission);
    const local = getLocalList();
    const updated = [enriched, ...local.filter(s => s.id !== enriched.id)];
    saveLocalList(updated);

    // 2. Pack lightweight version (<2KB) for instantaneous cloud broadcast
    const wirePayload = packForBroadcast(enriched);

    try {
      notifyStatus('syncing', 'Broadcasting live to all devices...');
      const res = await fetch(NTFY_BASE, {
        method: 'POST',
        headers: {
          'Title': 'dMAT Test Submission',
          'Tags': 'mortar_board,chart_with_upwards_trend'
        },
        body: JSON.stringify(wirePayload)
      });

      if (res.ok) {
        notifyStatus('connected', 'Live Synced across all devices');
      }
    } catch (err) {
      console.warn('Real-time cloud broadcast fallback:', err);
    }

    // 3. Fallback: also push to /api/submissions if available
    try {
      fetch('/api/submissions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(wirePayload)
      }).catch(() => {});
    } catch (e) {}

    return true;
  }

  // Helper to parse line from ntfy json stream/poll
  async function parseNtfyEntry(parsed) {
    if (!parsed) return null;
    // 1. Direct message JSON
    if (parsed.event === 'message' && parsed.message) {
      try {
        const sub = JSON.parse(parsed.message);
        if (sub && sub.id && sub.candidateName) {
          return enrichSubmissionDetails(sub);
        }
      } catch (e) {}
    }
    // 2. Attachment URL fallback
    if (parsed.attachment && parsed.attachment.url) {
      try {
        const fileRes = await fetch(parsed.attachment.url);
        if (fileRes.ok) {
          const fileData = await fileRes.json();
          if (fileData && fileData.id && fileData.candidateName) {
            return enrichSubmissionDetails(fileData);
          }
        }
      } catch (e) {}
    }
    return null;
  }

  // Fetch all remote submissions submitted from other devices
  async function fetchRemoteSubmissions() {
    try {
      notifyStatus('syncing', 'Syncing from cloud...');
      const pollUrl = `${NTFY_BASE}/json?poll=1`;
      const res = await fetch(pollUrl);
      if (!res.ok) throw new Error('Poll failed: ' + res.status);

      const text = await res.text();
      const lines = text.trim().split('\n').filter(Boolean);
      const remoteSubmissions = [];

      for (const line of lines) {
        try {
          const parsed = JSON.parse(line);
          const sub = await parseNtfyEntry(parsed);
          if (sub) remoteSubmissions.push(sub);
        } catch (e) {}
      }

      // Also try fetching from /api/submissions fallback
      try {
        const apiRes = await fetch('/api/submissions');
        if (apiRes.ok) {
          const apiData = await apiRes.json();
          if (apiData && Array.isArray(apiData.submissions)) {
            apiData.submissions.forEach(s => {
              if (s && s.id) remoteSubmissions.push(enrichSubmissionDetails(s));
            });
          }
        }
      } catch (e) {}

      // Merge remote with local
      const local = getLocalList();
      const merged = mergeSubmissions(local, remoteSubmissions);
      saveLocalList(merged);
      notifyStatus('connected', `Live Synced (${merged.length} candidate records)`);
      return merged;
    } catch (err) {
      console.warn('Failed to poll cloud submissions:', err);
      notifyStatus('offline', 'Cached data mode');
      return getLocalList();
    }
  }

  // Subscribe to real-time incoming submissions via Server-Sent Events (SSE)
  function subscribeRealTime(onNewSubmission) {
    if (typeof window === 'undefined' || typeof EventSource === 'undefined') return;

    if (eventSource) {
      eventSource.close();
    }
    if (sseReconnectTimer) {
      clearTimeout(sseReconnectTimer);
    }

    try {
      eventSource = new EventSource(`${NTFY_BASE}/sse`);

      eventSource.onopen = function () {
        notifyStatus('connected', 'Live Cross-Device Sync Connected');
      };

      eventSource.onmessage = async function (event) {
        try {
          const data = JSON.parse(event.data);
          const newSub = await parseNtfyEntry(data);
          if (newSub) {
            // Add to local storage
            const current = getLocalList();
            const merged = mergeSubmissions(current, [newSub]);
            saveLocalList(merged);

            if (typeof onNewSubmission === 'function') {
              onNewSubmission(newSub, merged);
            }
          }
        } catch (e) {
          console.error('Error parsing live SSE event:', e);
        }
      };

      eventSource.onerror = function () {
        notifyStatus('syncing', 'Reconnecting live stream...');
        // Auto reconnect fallback
        sseReconnectTimer = setTimeout(() => {
          subscribeRealTime(onNewSubmission);
        }, 8000);
      };
    } catch (err) {
      console.warn('SSE not supported or blocked:', err);
      notifyStatus('offline', 'Polling mode');
    }
  }

  return {
    getLocalList,
    saveLocalList,
    mergeSubmissions,
    broadcastSubmission,
    fetchRemoteSubmissions,
    subscribeRealTime,
    onStatusChange,
    enrichSubmissionDetails
  };
});
