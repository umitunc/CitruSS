import { getSidebarHTML } from './sidebar.js';
import { getNavbarHTML } from './navbar.js';
import { initDashboardInteractions } from './interactions.js';

export const renderTabbedSettings = (useEffect) => {
  useEffect(() => {
    initDashboardInteractions();

    // Initialize standard CitruSS Tabs
    const tabsWrapper = document.getElementById('settings-tabs-nav');
    if (tabsWrapper && window.CitruSS?.Tabs) {
      new window.CitruSS.Tabs(tabsWrapper);
    }
  }, []);

  return `
    <div class="citruss-dashboard-shell">
      ${getSidebarHTML('tabbed-settings')}
      
      <div class="citruss-dashboard-main">
        ${getNavbarHTML('Tabbed Config Center')}

        <div class="citruss-dashboard-content">
          <div class="citruss-tabs-container">
            
            <!-- Standard CitruSS Tab Navigation Buttons -->
            <div class="citruss-tabs-wrapper" id="settings-tabs-nav" style="margin-bottom: 24px;">
              <button class="citruss-tab-link active" data-target="#tab-account" style="display: flex; align-items: center; gap: 8px;">
                <span class="citruss-icon" style="font-size: 18px;">person</span>
                <span>Account Details</span>
              </button>
              <button class="citruss-tab-link" data-target="#tab-security" style="display: flex; align-items: center; gap: 8px;">
                <span class="citruss-icon" style="font-size: 18px;">lock</span>
                <span>Security Guard</span>
              </button>
              <button class="citruss-tab-link" data-target="#tab-integrations" style="display: flex; align-items: center; gap: 8px;">
                <span class="citruss-icon" style="font-size: 18px;">api</span>
                <span>Integrations & Tokens</span>
              </button>
            </div>

            <!-- Standard CitruSS Tab Content Panes -->
            <div style="padding-top: 8px;">
              <!-- Tab 1: Account -->
              <div class="citruss-tab-pane active" id="tab-account">
                <div class="citruss-card" style="padding: 24px;">
                  <div class="card-content">
                    <h3 style="font-weight:800; font-size:1.2rem; margin-bottom:20px; display:flex; align-items:center; gap:8px;">
                      <span class="citruss-icon icon-orange">manage_accounts</span> Public Profile
                    </h3>
                    <div class="citruss-row">
                      <div class="citruss-col-12 citruss-col-md-6 citruss-mb-md">
                        <div class="citruss-input-wrapper">
                          <label class="citruss-label">Display Name</label>
                          <input type="text" class="citruss-input" value="Ecem Tuncgil">
                        </div>
                      </div>
                      <div class="citruss-col-12 citruss-col-md-6 citruss-mb-md">
                        <div class="citruss-input-wrapper">
                          <label class="citruss-label">Developer Role</label>
                          <input type="text" class="citruss-input" value="Principal Glassmorphic Architect">
                        </div>
                      </div>
                    </div>
                    <div class="citruss-input-wrapper citruss-mb-lg">
                      <label class="citruss-label">Bio Details</label>
                      <textarea class="citruss-input" style="min-height: 80px; resize: vertical;">Building zero-dependency fluid glass UI systems for web and electron desktop applications.</textarea>
                    </div>
                    <button class="citruss-btn btn-primary btn-sm">Save Profile</button>
                  </div>
                </div>
              </div>

              <!-- Tab 2: Security -->
              <div class="citruss-tab-pane" id="tab-security">
                <div class="citruss-card" style="padding: 24px;">
                  <div class="card-content">
                    <h3 style="font-weight:800; font-size:1.2rem; margin-bottom:20px; display:flex; align-items:center; gap:8px;">
                      <span class="citruss-icon icon-orange">lock</span> Credential Upgrades
                    </h3>
                    <div class="citruss-input-wrapper citruss-mb-md">
                      <label class="citruss-label">Current Authentication Key</label>
                      <input type="password" class="citruss-input" value="********">
                    </div>
                    <div class="citruss-input-wrapper citruss-mb-lg">
                      <label class="citruss-label">New Password Generation</label>
                      <input type="password" class="citruss-input" placeholder="Type secure passphrase...">
                    </div>
                    <button class="citruss-btn btn-primary btn-sm">Update Password</button>
                  </div>
                </div>
              </div>

              <!-- Tab 3: Integrations -->
              <div class="citruss-tab-pane" id="tab-integrations">
                <div class="citruss-card" style="padding: 24px;">
                  <div class="card-content">
                    <h3 style="font-weight:800; font-size:1.2rem; margin-bottom:20px; display:flex; align-items:center; gap:8px;">
                      <span class="citruss-icon icon-orange">api</span> API Gateway Configurations
                    </h3>
                    <div style="display:flex; flex-direction:column; gap:16px; margin-bottom:24px;">
                      <div style="display:flex; justify-content:space-between; align-items:center; padding:12px; background:rgba(255,255,255,0.02); border-radius:8px; border:1px solid var(--citruss-glass-border);">
                        <div>
                          <div style="font-weight:700;">GitHub Gateway Connection</div>
                          <div style="font-size:0.8rem; color:var(--citruss-text-muted);">Deploy directly to staging pages repository</div>
                        </div>
                        <span class="citruss-badge badge-success">Active</span>
                      </div>

                      <div style="display:flex; justify-content:space-between; align-items:center; padding:12px; background:rgba(255,255,255,0.02); border-radius:8px; border:1px solid var(--citruss-glass-border);">
                        <div>
                          <div style="font-weight:700;">NPM Package Auto-Sync</div>
                          <div style="font-size:0.8rem; color:var(--citruss-text-muted);">Sync tags upon new releases bundles</div>
                        </div>
                        <span class="citruss-badge badge-danger">Not Hooked</span>
                      </div>
                    </div>
                    <button class="citruss-btn btn-primary btn-sm">Add Connection</button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  `;
};
