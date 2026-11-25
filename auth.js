// Shared auth modal for Grace & Truth Witness
const SUPABASE_URL = 'https://nvxtvwdvvzhbsvbpnlgz.supabase.co';
const SUPABASE_KEY = 'sb_publishable_U511agudgV1tcFiEIIGbFg_EPDltBn3';
const sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

let currentUser = null;

async function initAuth() {
  const { data: { session } } = await sb.auth.getSession();
  currentUser = session?.user || null;
  updateAuthButton();
}

function updateAuthButton() {
  const btn = document.getElementById('auth-btn');
  if (!btn) return;
  if (currentUser) {
    btn.textContent = currentUser.email?.split('@')[0] || 'Account';
    btn.onclick = signOut;
  } else {
    btn.textContent = 'Sign in';
    btn.onclick = openAuthModal;
  }
}

function openAuthModal() {
  document.getElementById('auth-modal').classList.remove('hidden');
  showAuthForm('signin');
}
function closeAuthModal() {
  document.getElementById('auth-modal').classList.add('hidden');
}
function showAuthForm(which) {
  document.getElementById('auth-signin').classList.toggle('hidden', which !== 'signin');
  document.getElementById('auth-signup').classList.toggle('hidden', which !== 'signup');
  document.getElementById('auth-forgot').classList.toggle('hidden', which !== 'forgot');
}

async function signIn() {
  const email = document.getElementById('si-email').value.trim();
  const password = document.getElementById('si-password').value;
  const { error } = await sb.auth.signInWithPassword({ email, password });
  if (error) { alert(error.message); return; }
  closeAuthModal();
  initAuth();
}
async function signUp() {
  const email = document.getElementById('su-email').value.trim();
  const password = document.getElementById('su-password').value;
  const name = document.getElementById('su-name').value.trim();
  if (!email || !password) { alert('Email and password are required.'); return; }
  const { error } = await sb.auth.signUp({ email, password, options: { data: { name } } });
  if (error) { alert(error.message); return; }
  alert('Check your email to confirm, then sign in.');
  showAuthForm('signin');
}
async function forgotPassword() {
  const email = document.getElementById('fp-email').value.trim();
  if (!email) { alert('Enter your email.'); return; }
  const { error } = await sb.auth.resetPasswordForEmail(email, { redirectTo: location.origin });
  if (error) { alert(error.message); return; }
  alert('Password reset email sent.');
  showAuthForm('signin');
}
async function signOut() {
  await sb.auth.signOut();
  currentUser = null;
  updateAuthButton();
}

// Inject modal HTML
function injectAuthModal() {
  if (document.getElementById('auth-modal')) return;
  const modal = document.createElement('div');
  modal.id = 'auth-modal';
  modal.className = 'hidden';
  modal.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,.5);z-index:300;display:flex;align-items:center;justify-content:center;';
  modal.innerHTML = `
    <div class="card" style="max-width:420px;width:90%;position:relative;">
      <button onclick="closeAuthModal()" style="position:absolute;top:0.5rem;right:0.5rem;background:none;border:none;font-size:1.4rem;cursor:pointer;">&times;</button>
      <div id="auth-signin">
        <h3>Sign in</h3>
        <input type="email" id="si-email" class="search-box" placeholder="Email">
        <input type="password" id="si-password" class="search-box" placeholder="Password">
        <button class="btn" onclick="signIn()" style="margin-top:0.5rem;">Sign in</button>
        <p style="margin-top:0.8rem;"><a href="#" onclick="showAuthForm('signup');return false;">Create account</a> · <a href="#" onclick="showAuthForm('forgot');return false;">Forgot password</a></p>
      </div>
      <div id="auth-signup" class="hidden">
        <h3>Create account</h3>
        <input type="text" id="su-name" class="search-box" placeholder="Name">
        <input type="email" id="su-email" class="search-box" placeholder="Email">
        <input type="password" id="su-password" class="search-box" placeholder="Password">
        <button class="btn" onclick="signUp()" style="margin-top:0.5rem;">Create account</button>
        <p style="margin-top:0.8rem;"><a href="#" onclick="showAuthForm('signin');return false;">Back to sign in</a></p>
      </div>
      <div id="auth-forgot" class="hidden">
        <h3>Reset password</h3>
        <input type="email" id="fp-email" class="search-box" placeholder="Email">
        <button class="btn" onclick="forgotPassword()" style="margin-top:0.5rem;">Send reset email</button>
        <p style="margin-top:0.8rem;"><a href="#" onclick="showAuthForm('signin');return false;">Back to sign in</a></p>
      </div>
    </div>
  `;
  document.body.appendChild(modal);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => { injectAuthModal(); initAuth(); });
} else {
  injectAuthModal();
  initAuth();
}