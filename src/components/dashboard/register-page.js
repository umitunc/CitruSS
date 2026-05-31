import { initDashboardInteractions } from './interactions.js';

export const renderRegisterPage = (useEffect) => {
  useEffect(() => {
    initDashboardInteractions();

    const regForm = document.getElementById('citruss-register-form');
    if (regForm) {
      regForm.onsubmit = (e) => {
        e.preventDefault();
        window.CitruSS.toast({
          title: 'Account Provisioned',
          message: 'Your Pro workspace has been initiated successfully.',
          type: 'success'
        });
      };
    }
  }, []);

  return `
    <div class="citruss-dashboard-shell" style="min-height: 100vh; display: flex; align-items: center; justify-content: center; padding: 20px; font-family: 'Outfit', sans-serif;">
      
      <!-- Center Register Card -->
      <div class="citruss-card animate-fade-in" style="width: 100%; max-width: 460px; padding: 32px; box-shadow: 0 24px 64px rgba(0,0,0,0.5); border:1px solid var(--citruss-glass-border); background:rgba(15,22,42,0.65); backdrop-filter:blur(16px);">
        <div class="card-content">
          <div style="text-align: center; margin-bottom: 28px;">
            <img src="./logos/citruss_logo_transparent.png" alt="CitruSS Logo" style="height: 54px; margin-bottom: 12px;">
            <h2 style="font-weight:900; font-size:1.75rem; color: var(--citruss-text-main); margin-bottom: 6px;">Initiate Pro Account</h2>
            <p style="color:var(--citruss-text-muted); font-size:0.85rem;">Provision your zero-dependency workspace in seconds</p>
          </div>

          <form id="citruss-register-form">
            <div class="citruss-row">
              <div class="citruss-col-12 citruss-col-md-6 citruss-mb-md">
                <div class="citruss-input-wrapper">
                  <label class="citruss-label">First Name</label>
                  <input type="text" class="citruss-input" placeholder="Ecem" required style="background:rgba(0,0,0,0.25);">
                </div>
              </div>
              <div class="citruss-col-12 citruss-col-md-6 citruss-mb-md">
                <div class="citruss-input-wrapper">
                  <label class="citruss-label">Last Name</label>
                  <input type="text" class="citruss-input" placeholder="Tuncgil" required style="background:rgba(0,0,0,0.25);">
                </div>
              </div>
            </div>

            <div class="citruss-input-wrapper citruss-mb-md">
              <label class="citruss-label">Developer Email</label>
              <input type="email" class="citruss-input" placeholder="you@domain.com" required style="background:rgba(0,0,0,0.25);">
            </div>

            <div class="citruss-input-wrapper citruss-mb-lg">
              <label class="citruss-label">Create Secure Key</label>
              <input type="password" class="citruss-input" placeholder="Choose strong passphrase..." required style="background:rgba(0,0,0,0.25);">
            </div>

            <button type="submit" class="citruss-btn btn-primary" style="width: 100%; padding: 12px; font-weight: 800; margin-bottom: 24px;">
              Deploy My Space
            </button>
          </form>

          <div style="text-align: center; font-size: 0.85rem; color:var(--citruss-text-muted);">
            Existing workspace? 
            <a href="#" class="sidebar-link" data-nav-target="login" style="display:inline; color:var(--citruss-lime); font-weight:700; text-decoration:none; padding:0;">Sign In</a>
          </div>
        </div>
      </div>

    </div>
  `;
};
