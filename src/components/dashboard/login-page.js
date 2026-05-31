import { initDashboardInteractions } from './interactions.js';

export const renderLoginPage = (useEffect) => {
  useEffect(() => {
    initDashboardInteractions();

    const loginForm = document.getElementById('citruss-login-form');
    if (loginForm) {
      loginForm.onsubmit = (e) => {
        e.preventDefault();
        window.CitruSS.toast({
          title: 'Sign In Granted',
          message: 'Welcome back to CitruSS Pro Terminal!',
          type: 'success'
        });
      };
    }
  }, []);

  return `
    <div class="citruss-dashboard-shell" style="min-height: 100vh; display: flex; align-items: center; justify-content: center; padding: 20px; font-family: 'Outfit', sans-serif;">
      
      <!-- Center Login Card -->
      <div class="citruss-card animate-fade-in" style="width: 100%; max-width: 420px; padding: 32px; box-shadow: 0 24px 64px rgba(0,0,0,0.5); border:1px solid var(--citruss-glass-border); background:rgba(15,22,42,0.65); backdrop-filter:blur(16px);">
        <div class="card-content">
          <div style="text-align: center; margin-bottom: 32px;">
            <img src="./logos/citruss_logo_transparent.png" alt="CitruSS Logo" style="height: 54px; margin-bottom: 12px;">
            <h2 style="font-weight:900; font-size:1.75rem; color: var(--citruss-text-main); margin-bottom: 6px;">Sign In</h2>
            <p style="color:var(--citruss-text-muted); font-size:0.85rem;">Access your Pro dashboard configuration panels</p>
          </div>

          <form id="citruss-login-form">
            <div class="citruss-input-wrapper citruss-mb-md">
              <label class="citruss-label">Developer Email</label>
              <input type="email" class="citruss-input" placeholder="you@domain.com" required style="background:rgba(0,0,0,0.25);">
            </div>

            <div class="citruss-input-wrapper citruss-mb-lg">
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
                <label class="citruss-label" style="margin-bottom:0;">Passphrase</label>
                <a href="#" style="font-size:0.75rem; color:var(--citruss-tangerine); font-weight:600; text-decoration:none;">Reset Key?</a>
              </div>
              <input type="password" class="citruss-input" placeholder="••••••••" required style="background:rgba(0,0,0,0.25);">
            </div>

            <button type="submit" class="citruss-btn btn-primary" style="width: 100%; padding: 12px; font-weight: 800; margin-bottom: 24px;">
              Verify Credentials
            </button>
          </form>

          <div style="text-align: center; font-size: 0.85rem; color:var(--citruss-text-muted);">
            Need a secure workspace? 
            <a href="#" class="sidebar-link" data-nav-target="register" style="display:inline; color:var(--citruss-lime); font-weight:700; text-decoration:none; padding:0;">Create Account</a>
          </div>
        </div>
      </div>

    </div>
  `;
};
