// auth.js – Real Google OAuth & Email Authentication System
// Powered by Google Identity Services (GIS) - Dark Portal Theme & Name Editing

(function () {
  'use strict';

  // Real Google OAuth Client ID
  const DEFAULT_GOOGLE_CLIENT_ID = '530419745324-oani5bpuo6n026ds4qloego44e2gkfjl.apps.googleusercontent.com';

  const STORAGE_KEY = 'learning_portal_user';
  const USERS_DB_KEY = 'learning_portal_registered_users';
  const CLIENT_ID_KEY = 'google_oauth_client_id';

  /* ───── LOAD GOOGLE IDENTITY SERVICES ───── */
  function loadGoogleScript() {
    if (window.google && window.google.accounts) return;
    if (document.querySelector('script[src*="accounts.google.com/gsi/client"]')) return;
    const s = document.createElement('script');
    s.src = 'https://accounts.google.com/gsi/client';
    s.async = true;
    s.defer = true;
    document.head.appendChild(s);
  }

  loadGoogleScript();

  function getGoogleClientId() {
    return DEFAULT_GOOGLE_CLIENT_ID || localStorage.getItem(CLIENT_ID_KEY) || window.GOOGLE_CLIENT_ID || '';
  }

  /* ───── STATE MANAGEMENT ───── */
  function getUser() {
    try {
      const u = localStorage.getItem(STORAGE_KEY);
      return u ? JSON.parse(u) : null;
    } catch (e) {
      return null;
    }
  }

  function isLoggedIn() {
    return !!getUser();
  }

  function getRegisteredUsers() {
    try {
      const db = localStorage.getItem(USERS_DB_KEY);
      return db ? JSON.parse(db) : [];
    } catch (e) {
      return [];
    }
  }

  function saveUserSession(user) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
    if (user && user.name) {
      localStorage.setItem('dmat_last_candidate', user.name);
    }
    updateHeaderUI();
    prefillCandidateInputs();
    document.dispatchEvent(new CustomEvent('portal:auth-change', { detail: { user } }));
  }

  function updateUserName(newName) {
    const trimmed = (newName || '').trim();
    if (!trimmed) return false;

    const user = getUser();
    if (user) {
      user.name = trimmed;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
    }
    localStorage.setItem('dmat_last_candidate', trimmed);

    // Also update in registered users db if email login
    if (user && user.email) {
      const users = getRegisteredUsers();
      const u = users.find(x => x.email.toLowerCase() === user.email.toLowerCase());
      if (u) {
        u.name = trimmed;
        localStorage.setItem(USERS_DB_KEY, JSON.stringify(users));
      }
    }

    updateHeaderUI();
    prefillCandidateInputs();
    document.dispatchEvent(new CustomEvent('portal:auth-change', { detail: { user: getUser() } }));
    return true;
  }

  function logout() {
    localStorage.removeItem(STORAGE_KEY);
    updateHeaderUI();
    prefillCandidateInputs();
    document.dispatchEvent(new CustomEvent('portal:auth-change', { detail: { user: null } }));
    const path = window.location.pathname.toLowerCase();
    // After sign-out, redirect auth-gated pages back to themselves (triggers gate screen)
    const isGated =
      path.includes('learn.html') || path.includes('practice.html') || path.includes('assessment.html') ||
      path.includes('math.html') || path.includes('figures.html') || path.includes('latin.html');
    if (isGated) {
      window.location.reload();
    }
  }

  /* ───── PREFILL CANDIDATE NAME IN EXAM SIMULATION MODALS ───── */
  function prefillCandidateInputs() {
    const user = getUser();
    const candidateName = (user && user.name) ? user.name : (localStorage.getItem('dmat_last_candidate') || '');

    // 1. Inputs inside modal-candidate-name in math, figures, latin
    document.querySelectorAll('#input-candidate-name').forEach(inp => {
      if (candidateName && (!inp.value || inp.value === 'Candidate')) {
        inp.value = candidateName;
      }
    });

    // 2. Exam topbar candidate badges
    document.querySelectorAll('#exam-candidate-name').forEach(el => {
      if (candidateName) el.textContent = candidateName;
    });
  }

  /* ───── MODAL CONTROLLER ───── */
  let activeCallback = null;
  let currentFormMode = 'login'; // 'login' or 'signup'

  function createModalHtml() {
    if (document.getElementById('portal-auth-modal')) return;

    const modalBackdrop = document.createElement('div');
    modalBackdrop.id = 'portal-auth-modal';
    modalBackdrop.className = 'auth-modal-backdrop';

    modalBackdrop.innerHTML = `
      <div class="auth-modal-card" id="auth-modal-card" role="dialog" aria-modal="true">
        <!-- Close Button -->
        <button type="button" class="auth-modal-close" id="auth-close-btn" aria-label="Close dialog">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>

        <!-- Header / Badge -->
        <div class="auth-modal-header">
          <div class="auth-portal-badge" id="auth-header-badge">
            <img src="logo.png" alt="Logo" style="width:14px;height:14px;object-fit:contain;border-radius:3px;vertical-align:middle;margin-right:4px;"/>
            <span>Learning Portal</span>
          </div>
          <h2 class="auth-modal-title" id="auth-modal-title">Sign In</h2>
          <p class="auth-modal-subtitle" id="auth-modal-subtitle">Log in to attend dMAT tests and access German learning, practice &amp; assessments.</p>
        </div>

        <!-- VIEW 1: Main Action Buttons (Continue with Google / OR / Continue with Email) -->
        <div class="auth-view" id="auth-view-main">
          <div class="auth-error-banner" id="auth-main-error"></div>

          <div class="auth-actions-group">
            <!-- 1. Continue with Real Google Account Button -->
            <button type="button" class="auth-btn-google" id="btn-auth-google">
              <svg class="auth-google-icon" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
              </svg>
              <span>Continue with Google</span>
            </button>

            <!-- 2. Divider OR -->
            <div class="auth-divider">
              <span>OR</span>
            </div>

            <!-- 3. Continue with Email Button -->
            <button type="button" class="auth-btn-email" id="btn-auth-email">
              <span>Continue with Email</span>
            </button>
          </div>

          <!-- Bottom Prompt -->
          <div class="auth-modal-footer">
            <span>Already have an account? </span>
            <span class="auth-link-login" id="link-auth-login">Log in</span>
          </div>
        </div>

        <!-- VIEW 2: Real Google OAuth Setup (Shown only if Client ID is not yet configured) -->
        <div class="auth-view" id="auth-view-google-setup" style="display:none;">
          <div class="auth-google-setup-box">
            <div class="google-setup-icon">
              <svg class="auth-google-icon" style="width:28px;height:28px;" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
              </svg>
            </div>
            <h3 style="font-size:16px; font-weight:800; color:#ffffff; margin:0 0 6px;">Connect Google OAuth</h3>
            <p style="font-size:12px; color:#94a3b8; line-height:1.5; margin:0 0 14px;">
              Enter your Google Cloud Web Client ID to connect real Google accounts (from <a href="https://console.cloud.google.com/apis/credentials" target="_blank" style="color:#60a5fa; font-weight:700;">Google Cloud Console</a>):
            </p>
            <div class="auth-form-field">
              <input type="text" id="input-google-client-id" class="auth-input" placeholder="e.g. 123456789-xxx.apps.googleusercontent.com" style="font-size:12px;"/>
            </div>
            <button type="button" class="auth-submit-btn" id="btn-save-client-id" style="margin-top:10px;">
              Save &amp; Continue with Google
            </button>
          </div>
          <div style="text-align:center; margin-top:14px;">
            <button type="button" class="auth-back-btn" id="btn-back-from-google-setup">← Back</button>
          </div>
        </div>

        <!-- VIEW 3: Email & Password Form (Our Theme CSS) -->
        <div class="auth-view" id="auth-view-form" style="display:none;">
          <div class="auth-error-banner" id="auth-form-error"></div>

          <form id="auth-email-form" class="auth-email-form" autocomplete="off">
            <div class="auth-form-field" id="field-name-group" style="display:none;">
              <label for="auth-input-name">Full Name</label>
              <input type="text" id="auth-input-name" class="auth-input" placeholder="e.g. Kishore Kumar" autocomplete="name"/>
            </div>

            <div class="auth-form-field">
              <label for="auth-input-email">Email Address</label>
              <input type="email" id="auth-input-email" class="auth-input" placeholder="name@example.com" required autocomplete="email"/>
            </div>

            <div class="auth-form-field">
              <label for="auth-input-password">Password</label>
              <div class="auth-pwd-wrapper">
                <input type="password" id="auth-input-password" class="auth-input" placeholder="Enter your password" required autocomplete="current-password"/>
                <button type="button" class="auth-pwd-toggle" id="auth-form-pwd-toggle" tabindex="-1" aria-label="Toggle password">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                </button>
              </div>
            </div>

            <div class="auth-form-field" id="field-confirm-password-group" style="display:none;">
              <label for="auth-input-confirm-password">Confirm Password</label>
              <div class="auth-pwd-wrapper">
                <input type="password" id="auth-input-confirm-password" class="auth-input" placeholder="Re-enter your password" autocomplete="new-password"/>
                <button type="button" class="auth-pwd-toggle" id="auth-form-confirm-pwd-toggle" tabindex="-1" aria-label="Toggle confirm password">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                </button>
              </div>
            </div>

            <button type="submit" class="auth-submit-btn" id="btn-auth-form-submit">Continue</button>
          </form>

          <div style="text-align:center; margin-top:12px;">
            <span id="auth-toggle-mode-text" style="font-size:13px; color:#94a3b8;">Don't have an account? </span>
            <span class="auth-link-login" id="link-toggle-signup-login" style="font-size:13px;">Sign up</span>
          </div>

          <div style="text-align:center; margin-top:10px;">
            <button type="button" class="auth-back-btn" id="btn-back-from-form">← Back to options</button>
          </div>
        </div>
</div>
    `;

    document.body.appendChild(modalBackdrop);
    createEditNameModalHtml();
    bindModalEvents();
  }

  /* ───── EDIT NAME MODAL ───── */
  function createEditNameModalHtml() {
    if (document.getElementById('portal-edit-name-modal')) return;

    const backdrop = document.createElement('div');
    backdrop.id = 'portal-edit-name-modal';
    backdrop.className = 'edit-name-backdrop';

    backdrop.innerHTML = `
      <div class="edit-name-card" role="dialog" aria-modal="true">
        <button type="button" class="auth-modal-close" id="btn-close-edit-name" aria-label="Close">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
        <div style="display:flex; align-items:center; gap:10px; margin-bottom:14px;">
          <div style="width:36px; height:36px; border-radius:50%; background:rgba(67,83,255,0.15); display:flex; align-items:center; justify-content:center; color:#818cf8;">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
          </div>
          <h3 style="margin:0; font-size:18px; font-weight:800; color:#fff;">Edit Display Name</h3>
        </div>
        <p style="font-size:13px; color:#94a3b8; margin:0 0 16px; line-height:1.5;">
          This name will appear on all your exam results, submissions log, and profile header.
        </p>
        <div class="auth-form-field">
          <label for="input-edit-profile-name">Candidate / Display Name</label>
          <input type="text" id="input-edit-profile-name" class="auth-input" placeholder="Your Full Name"/>
        </div>
        <div style="display:flex; gap:10px; margin-top:16px;">
          <button type="button" class="auth-submit-btn" id="btn-save-edit-name" style="margin:0; flex:1;">Save Name</button>
          <button type="button" class="auth-back-btn" id="btn-cancel-edit-name" style="margin:0; padding:0 14px;">Cancel</button>
        </div>
      </div>
    `;

    document.body.appendChild(backdrop);

    const closeBtn = document.getElementById('btn-close-edit-name');
    const cancelBtn = document.getElementById('btn-cancel-edit-name');
    const saveBtn = document.getElementById('btn-save-edit-name');
    const input = document.getElementById('input-edit-profile-name');

    const closeEdit = () => backdrop.classList.remove('active');

    if (closeBtn) closeBtn.addEventListener('click', closeEdit);
    if (cancelBtn) cancelBtn.addEventListener('click', closeEdit);
    backdrop.addEventListener('click', (e) => { if (e.target === backdrop) closeEdit(); });

    if (saveBtn) {
      saveBtn.addEventListener('click', () => {
        const val = (input ? input.value : '').trim();
        if (val) {
          updateUserName(val);
          closeEdit();
        }
      });
    }

    if (input) {
      input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          const val = input.value.trim();
          if (val) {
            updateUserName(val);
            closeEdit();
          }
        }
      });
    }
  }

  function openEditNameModal() {
    createEditNameModalHtml();
    const backdrop = document.getElementById('portal-edit-name-modal');
    const input = document.getElementById('input-edit-profile-name');
    const user = getUser();

    if (input) {
      input.value = (user && user.name) ? user.name : (localStorage.getItem('dmat_last_candidate') || '');
    }

    if (backdrop) {
      backdrop.classList.add('active');
      setTimeout(() => { if (input) { input.focus(); input.select(); } }, 100);
    }
  }

  /* ───── EVENT BINDINGS ───── */
  function bindModalEvents() {
    const backdrop = document.getElementById('portal-auth-modal');
    const closeBtn = document.getElementById('auth-close-btn');
    const btnGoogle = document.getElementById('btn-auth-google');
    const btnEmail = document.getElementById('btn-auth-email');
    const linkLogin = document.getElementById('link-auth-login');
    const btnBackSetup = document.getElementById('btn-back-from-google-setup');
    const btnBackForm = document.getElementById('btn-back-from-form');
    const emailForm = document.getElementById('auth-email-form');
    const linkToggle = document.getElementById('link-toggle-signup-login');
    const pwdToggle = document.getElementById('auth-form-pwd-toggle');
    const btnSaveClientId = document.getElementById('btn-save-client-id');

    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) closeModal();
    });

    closeBtn.addEventListener('click', closeModal);

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && backdrop.classList.contains('active')) {
        closeModal();
      }
    });

    // 1. Google Click
    btnGoogle.addEventListener('click', () => {
      triggerRealGoogleSignIn();
    });

    // Client ID Save
    if (btnSaveClientId) {
      btnSaveClientId.addEventListener('click', () => {
        const input = document.getElementById('input-google-client-id');
        const val = (input ? input.value : '').trim();
        if (!val) {
          alert('Please enter a valid Google Client ID.');
          return;
        }
        localStorage.setItem(CLIENT_ID_KEY, val);
        showView('main');
        triggerRealGoogleSignIn();
      });
    }

    // 2. Email Click -> Show form in 'signup' mode
    btnEmail.addEventListener('click', () => {
      setFormMode('signup');
      showView('form');
    });

    // 3. "Log in" Link -> Show form in 'login' mode
    linkLogin.addEventListener('click', () => {
      setFormMode('login');
      showView('form');
    });

    if (btnBackSetup) btnBackSetup.addEventListener('click', () => showView('main'));
    if (btnBackForm) btnBackForm.addEventListener('click', () => showView('main'));

    linkToggle.addEventListener('click', () => {
      setFormMode(currentFormMode === 'login' ? 'signup' : 'login');
    });

    pwdToggle.addEventListener('click', () => {
      const p = document.getElementById('auth-input-password');
      if (p.type === 'password') {
        p.type = 'text';
        pwdToggle.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>`;
      } else {
        p.type = 'password';
        pwdToggle.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`;
      }
    });

    const confirmPwdToggle = document.getElementById('auth-form-confirm-pwd-toggle');
    if (confirmPwdToggle) {
      confirmPwdToggle.addEventListener('click', () => {
        const cp = document.getElementById('auth-input-confirm-password');
        if (!cp) return;
        if (cp.type === 'password') {
          cp.type = 'text';
          confirmPwdToggle.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>`;
        } else {
          cp.type = 'password';
          confirmPwdToggle.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`;
        }
      });
    }

    emailForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = (document.getElementById('auth-input-email').value || '').trim();
      const pass = (document.getElementById('auth-input-password').value || '');
      const name = (document.getElementById('auth-input-name').value || '').trim();

      if (!email || !pass) {
        showFormError('Please enter both email and password.');
        return;
      }

      if (currentFormMode === 'signup') {
        if (!name) {
          showFormError('Please enter your full name.');
          return;
        }
        const confirmPass = (document.getElementById('auth-input-confirm-password') ? document.getElementById('auth-input-confirm-password').value : '');
        if (pass !== confirmPass) {
          showFormError('Passwords do not match. Please try again.');
          return;
        }
        if (pass.length < 6) {
          showFormError('Password must be at least 6 characters.');
          return;
        }
        const users = getRegisteredUsers();
        const existing = users.find(u => u.email.toLowerCase() === email.toLowerCase());
        if (existing) {
          showFormError('An account with this email already exists. Please log in.');
          return;
        }

        const newUser = { name, email, password: pass, provider: 'email' };
        users.push(newUser);
        localStorage.setItem(USERS_DB_KEY, JSON.stringify(users));

        handleSuccessfulLogin({ name, email, provider: 'email' });
      } else {
        const users = getRegisteredUsers();
        const found = users.find(u => u.email.toLowerCase() === email.toLowerCase());

        if (found && found.password === pass) {
          handleSuccessfulLogin({ name: found.name, email: found.email, provider: 'email' });
        } else if (!found) {
          const guessedName = email.split('@')[0].replace(/[._]/g, ' ');
          const formattedName = guessedName.charAt(0).toUpperCase() + guessedName.slice(1);
          const newUser = { name: formattedName, email, password: pass, provider: 'email' };
          users.push(newUser);
          localStorage.setItem(USERS_DB_KEY, JSON.stringify(users));
          handleSuccessfulLogin({ name: formattedName, email, provider: 'email' });
        } else {
          showFormError('Incorrect password. Please try again.');
        }
      }
    });
  }

  /* ───── REAL GOOGLE IDENTITY SERVICES TRIGGER ───── */
  function triggerRealGoogleSignIn() {
    const clientId = getGoogleClientId();
    if (!clientId) {
      showView('google-setup');
      return;
    }

    if (!window.google || !window.google.accounts || !window.google.accounts.oauth2) {
      setTimeout(triggerRealGoogleSignIn, 300);
      return;
    }

    try {
      const tokenClient = window.google.accounts.oauth2.initTokenClient({
        client_id: clientId,
        scope: 'email profile openid',
        callback: async (tokenResponse) => {
          if (tokenResponse && tokenResponse.access_token) {
            try {
              const res = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
                headers: { Authorization: `Bearer ${tokenResponse.access_token}` }
              });
              const profile = await res.json();
              if (profile && profile.email) {
                handleSuccessfulLogin({
                  name: profile.name || profile.given_name || profile.email.split('@')[0],
                  email: profile.email,
                  picture: profile.picture || '',
                  provider: 'google'
                });
              } else {
                showMainError('Could not retrieve Google profile. Please try again.');
              }
            } catch (err) {
              console.error('Google profile error:', err);
              showMainError('Failed to fetch Google profile. Check network connection.');
            }
          } else if (tokenResponse && tokenResponse.error) {
            showMainError('Google Sign-In failed: ' + tokenResponse.error);
          }
        }
      });

      tokenClient.requestAccessToken({ prompt: 'select_account' });
    } catch (e) {
      console.error('Failed to trigger Google Sign-In:', e);
      showMainError('Google Sign-In error: ' + e.message);
    }
  }

  function showMainError(msg) {
    const el = document.getElementById('auth-main-error');
    if (el) {
      el.textContent = msg;
      el.classList.add('show');
    }
  }

  function showFormError(msg) {
    const errEl = document.getElementById('auth-form-error');
    if (errEl) {
      errEl.textContent = msg;
      errEl.classList.add('show');
    }
  }

  function clearFormError() {
    const errEl = document.getElementById('auth-form-error');
    if (errEl) {
      errEl.textContent = '';
      errEl.classList.remove('show');
    }
    const mainErr = document.getElementById('auth-main-error');
    if (mainErr) {
      mainErr.textContent = '';
      mainErr.classList.remove('show');
    }
  }

  function setFormMode(mode) {
    currentFormMode = mode;
    clearFormError();
    const nameField = document.getElementById('field-name-group');
    const submitBtn = document.getElementById('btn-auth-form-submit');
    const toggleText = document.getElementById('auth-toggle-mode-text');
    const toggleLink = document.getElementById('link-toggle-signup-login');
    const title = document.getElementById('auth-modal-title');

    const confirmField = document.getElementById('field-confirm-password-group');
    if (mode === 'signup') {
      title.textContent = 'Create Account';
      if (nameField) nameField.style.display = 'flex';
      if (confirmField) confirmField.style.display = 'flex';
      if (submitBtn) submitBtn.textContent = 'Create Account & Continue';
      if (toggleText) toggleText.textContent = 'Already have an account? ';
      if (toggleLink) toggleLink.textContent = 'Log in';
    } else {
      title.textContent = 'Sign In';
      if (nameField) nameField.style.display = 'none';
      if (confirmField) confirmField.style.display = 'none';
      if (submitBtn) submitBtn.textContent = 'Sign In & Continue';
      if (toggleText) toggleText.textContent = "Don't have an account? ";
      if (toggleLink) toggleLink.textContent = 'Sign up';
    }
  }

  function showView(viewName) {
    const vMain = document.getElementById('auth-view-main');
    const vGoogleSetup = document.getElementById('auth-view-google-setup');
    const vForm = document.getElementById('auth-view-form');
    const title = document.getElementById('auth-modal-title');

    if (vMain) vMain.style.display = viewName === 'main' ? 'block' : 'none';
    if (vGoogleSetup) vGoogleSetup.style.display = viewName === 'google-setup' ? 'block' : 'none';
    if (vForm) vForm.style.display = viewName === 'form' ? 'block' : 'none';

    if (viewName === 'main') {
      if (title) title.textContent = 'Sign In';
    } else if (viewName === 'google-setup') {
      if (title) title.textContent = 'Google Sign-In';
    }
  }

  function handleSuccessfulLogin(user) {
    saveUserSession(user);
    closeModal();

    if (typeof activeCallback === 'function') {
      const cb = activeCallback;
      activeCallback = null;
      cb(user);
    }
  }

  function openModal(options) {
    createModalHtml();
    clearFormError();
    showView('main');

    const opts = options || {};
    if (opts.onLoginSuccess) {
      activeCallback = opts.onLoginSuccess;
    }

    const subtitle = document.getElementById('auth-modal-subtitle');
    if (subtitle && opts.message) {
      subtitle.textContent = opts.message;
    }

    const backdrop = document.getElementById('portal-auth-modal');
    if (backdrop) {
      backdrop.classList.add('active');
    }
  }

  function closeModal() {
    const backdrop = document.getElementById('portal-auth-modal');
    if (backdrop) {
      backdrop.classList.remove('active');
    }
  }

  function requireAuth(actionCallback, message) {
    if (isLoggedIn()) {
      if (typeof actionCallback === 'function') actionCallback(getUser());
      return true;
    }

    openModal({
      message: message || 'Please log in to continue.',
      onLoginSuccess: actionCallback
    });
    return false;
  }

  /* ───── HEADER UI CONTROLLER ───── */
  function updateHeaderUI() {
    const headers = document.querySelectorAll('.site-header .header-inner, .site-header .header-actions');
    if (!headers.length) return;

    const user = getUser();
    let container = document.getElementById('header-auth-pill');
    if (!container) {
      container = document.createElement('div');
      container.id = 'header-auth-pill';
      container.className = 'header-auth-container';

      const actions = document.querySelector('.site-header .header-actions') || document.querySelector('.site-header .header-inner');
      if (actions) {
        actions.appendChild(container);
      }
    }

    if (!user) {
      container.innerHTML = `
        <button type="button" class="btn-header-signin" id="btn-header-login">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" y1="12" x2="3" y2="12"/></svg>
          <span>Sign In</span>
        </button>
      `;

      const btn = document.getElementById('btn-header-login');
      if (btn) btn.addEventListener('click', () => openModal());
    } else {
      const initial = (user.name || 'U').charAt(0).toUpperCase();
      const hasPic = !!user.picture;

      const avatarHtml = hasPic
        ? `<img src="${escapeHtml(user.picture)}" alt="${escapeHtml(user.name)}" class="user-pill-avatar" style="object-fit:cover;"/>`
        : `<div class="user-pill-avatar ${user.provider === 'google' ? 'google-avatar' : ''}">${initial}</div>`;

      container.innerHTML = `
        <div class="user-profile-pill" id="user-profile-trigger">
          ${avatarHtml}
          <span style="max-width:110px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${escapeHtml(user.name)}</span>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>

          <!-- Dropdown -->
          <div class="user-dropdown-menu" id="user-dropdown-menu">
            <div style="padding:6px 12px; font-size:11px; color:#94a3b8; border-bottom:1px solid rgba(255,255,255,0.08); margin-bottom:4px;">
              Signed in with ${user.provider === 'google' ? 'Google' : 'Email'}:<br/><strong style="color:#fff;">${escapeHtml(user.email || user.name)}</strong>
            </div>
            <!-- Edit Display Name -->
            <button type="button" class="user-dropdown-item" id="btn-header-edit-name">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
              <span>Edit Name</span>
            </button>
            <button type="button" class="user-dropdown-item logout-item" id="btn-header-logout">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
              <span>Sign Out</span>
            </button>
          </div>
        </div>
      `;

      const trigger = document.getElementById('user-profile-trigger');
      const menu = document.getElementById('user-dropdown-menu');
      const editNameBtn = document.getElementById('btn-header-edit-name');
      const logoutBtn = document.getElementById('btn-header-logout');

      if (trigger && menu) {
        trigger.addEventListener('click', (e) => {
          e.stopPropagation();
          menu.classList.toggle('show');
        });

        document.addEventListener('click', () => {
          menu.classList.remove('show');
        });
      }

      if (editNameBtn) {
        editNameBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          menu.classList.remove('show');
          openEditNameModal();
        });
      }

      if (logoutBtn) {
        logoutBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          logout();
        });
      }
    }
  }

  /* ───── AUTO-PROTECT GATED PAGES & TEST BUTTONS ───── */
  function autoProtectFeatures() {
    const path = window.location.pathname.toLowerCase();

    // 1. Gated Pages: German Learn, Practice, Assessment + dMAT Test Pages
    const isGermanGated = path.includes('learn.html') || path.includes('practice.html') || path.includes('assessment.html');
    const isDmatGated = path.includes('math.html') || path.includes('figures.html') || path.includes('latin.html');
    if ((isGermanGated || isDmatGated) && !isLoggedIn()) {
      renderPageGateScreen();
      return;
    }

    // 2. Intercept A1 Action Cards (Learn, Practice, Assessment)
    ['btn-learn', 'btn-practice', 'btn-assessment'].forEach(id => {
      const el = document.getElementById(id);
      if (el) {
        el.addEventListener('click', (e) => {
          if (!isLoggedIn()) {
            e.preventDefault();
            const label = el.querySelector('.card-title') ? el.querySelector('.card-title').textContent : 'this section';
            requireAuth(() => {
              window.location.href = el.href;
            }, `Please sign in to access German ${label}.`);
          }
        });
      }
    });

    // 3. Intercept dMAT Test Starts
    document.querySelectorAll('[data-start-set], [data-start-fig-set]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        if (!isLoggedIn()) {
          e.preventDefault();
          e.stopImmediatePropagation();
          requireAuth(() => {
            btn.click();
          }, 'Please sign in to attend this dMAT test.');
        }
      }, true);
    });

    ['btn-start-easy', 'btn-start-med', 'btn-start-hard', 'btn-start-sim'].forEach(id => {
      const btn = document.getElementById(id);
      if (btn) {
        btn.addEventListener('click', (e) => {
          if (!isLoggedIn()) {
            e.preventDefault();
            e.stopImmediatePropagation();
            requireAuth(() => {
              btn.click();
            }, 'Please sign in to attend dMAT practice sets.');
          }
        }, true);
      }
    });

    prefillCandidateInputs();
  }

  function renderPageGateScreen() {
    const main = document.querySelector('main') || document.querySelector('.learn-layout') || document.body;

    const gateHtml = `
      <div class="auth-gate-wrapper">
        <div class="auth-gate-icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
        </div>
        <h2 class="auth-gate-title">Sign In Required</h2>
        <p class="auth-gate-desc">You need to be logged in to learn, practice, and take assessments in the German course.</p>
        <button type="button" class="auth-btn-email" id="btn-gate-signin" style="max-width:280px; margin:0 auto;">
          Sign In to Continue
        </button>
        <div style="margin-top:16px;">
          <a href="index.html" style="color:#94a3b8; font-size:13px; text-decoration:none;">← Back to Home</a>
        </div>
      </div>
    `;

    const orig = document.querySelector('.tw-layout') || document.querySelector('.learn-layout');
    if (orig) {
      orig.style.display = 'none';
      const container = document.createElement('div');
      container.className = 'container';
      container.innerHTML = gateHtml;
      document.body.appendChild(container);
    } else {
      main.innerHTML = gateHtml;
    }

    const gateBtn = document.getElementById('btn-gate-signin');
    if (gateBtn) {
      gateBtn.addEventListener('click', () => {
        openModal({
          message: 'Sign in to access German course materials.',
          onLoginSuccess: () => {
            window.location.reload();
          }
        });
      });
    }

    setTimeout(() => {
      openModal({
        message: 'Sign in to access German course materials.',
        onLoginSuccess: () => {
          window.location.reload();
        }
      });
    }, 300);
  }

  function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  /* ───── BOOTSTRAP ───── */
  function init() {
    createModalHtml();
    updateHeaderUI();
    autoProtectFeatures();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  window.AuthManager = {
    getUser,
    isLoggedIn,
    updateUserName,
    openEditNameModal,
    logout,
    openModal,
    closeModal,
    requireAuth,
    setGoogleClientId: (id) => localStorage.setItem(CLIENT_ID_KEY, id)
  };

})();
