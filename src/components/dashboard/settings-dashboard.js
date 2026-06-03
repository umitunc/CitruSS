import { getSidebarHTML } from './sidebar.js';
import { getNavbarHTML } from './navbar.js';
import { initDashboardInteractions } from './interactions.js';

export const renderUserSettings = (useEffect) => {
  useEffect(() => {
    initDashboardInteractions();
  }, []);

  return `
    <div class="citruss-dashboard-shell">
      ${getSidebarHTML('settings')}
      
      <div class="citruss-dashboard-main">
        ${getNavbarHTML('User Preferences')}

        <div class="citruss-dashboard-content">
          <div class="citruss-row">
            
            <div class="citruss-col-12 citruss-col-lg-8 citruss-mb-lg">
              <div class="citruss-card" style="padding: 24px;">
                <div class="card-content">
                  <h3 style="font-weight:800; font-size:1.2rem; margin-bottom:20px; display:flex; align-items:center; gap:8px;">
                    <span class="citruss-icon icon-orange">manage_accounts</span> Account Configuration
                  </h3>

                  <div class="citruss-row">
                    <div class="citruss-col-12 citruss-col-md-6 citruss-mb-md">
                      <div class="citruss-input-wrapper">
                        <label class="citruss-label">First Name</label>
                        <input type="text" class="citruss-input" value="Ecem">
                      </div>
                    </div>
                    <div class="citruss-col-12 citruss-col-md-6 citruss-mb-md">
                      <div class="citruss-input-wrapper">
                        <label class="citruss-label">Last Name</label>
                        <input type="text" class="citruss-input" value="Tuncgil">
                      </div>
                    </div>
                  </div>

                  <div class="citruss-row citruss-mb-lg">
                    <div class="citruss-col-12">
                      <div class="citruss-input-wrapper">
                        <label class="citruss-label">Registered E-mail Address</label>
                        <input type="email" class="citruss-input" value="ecem@truncgil.com" readonly style="opacity: 0.7; cursor: not-allowed;">
                      </div>
                    </div>
                  </div>

                  <hr style="border: 0; border-top: 1px solid var(--citruss-glass-border); margin: 24px 0;">

                  <h4 style="font-weight:800; font-size:1.05rem; margin-bottom:16px; display:flex; align-items:center; gap:8px;">
                    <span class="citruss-icon icon-lime">security</span> Privacy & Core Security
                  </h4>

                  <div style="display:flex; flex-direction:column; gap:16px;">
                    <div style="display:flex; justify-content:space-between; align-items:center;">
                      <div>
                        <div style="font-weight:700; font-size:0.9rem; color:var(--citruss-text-main);">Two-Factor Authentication</div>
                        <div style="font-size:0.8rem; color:var(--citruss-text-muted);">Enforce modern auth challenge on startup</div>
                      </div>
                      <label style="position:relative; display:inline-block; width:50px; height:26px;">
                        <input type="checkbox" checked style="opacity:0; width:0; height:0;">
                        <span style="position:absolute; cursor:pointer; top:0; left:0; right:0; bottom:0; background:var(--citruss-lime); border-radius:34px; transition:0.4s;">
                          <span style="position:absolute; content:''; height:18px; width:18px; left:28px; bottom:4px; background:white; border-radius:50%; transition:0.4s;"></span>
                        </span>
                      </label>
                    </div>

                    <div style="display:flex; justify-content:space-between; align-items:center;">
                      <div>
                        <div style="font-weight:700; font-size:0.9rem; color:var(--citruss-text-main);">Real-time Activity Logs</div>
                        <div style="font-size:0.8rem; color:var(--citruss-text-muted);">Publish synchronization status to public event streams</div>
                      </div>
                      <label style="position:relative; display:inline-block; width:50px; height:26px;">
                        <input type="checkbox" style="opacity:0; width:0; height:0;">
                        <span style="position:absolute; cursor:pointer; top:0; left:0; right:0; bottom:0; background:#ccc; border-radius:34px; transition:0.4s;">
                           <span style="position:absolute; content:''; height:18px; width:18px; left:4px; bottom:4px; background:white; border-radius:50%; transition:0.4s;"></span>
                        </span>
                      </label>
                    </div>
                  </div>

                  <hr style="border: 0; border-top: 1px solid var(--citruss-glass-border); margin: 24px 0;">

                  <h4 style="font-weight:800; font-size:1.05rem; margin-bottom:16px; display:flex; align-items:center; gap:8px;">
                    <span class="citruss-icon icon-orange">opacity</span> UI Glass Customization
                  </h4>

                  <div style="display:flex; flex-direction:column; gap:16px; margin-bottom: 24px;">
                    <div>
                      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 8px;">
                        <div>
                          <div style="font-weight:700; font-size:0.9rem; color:var(--citruss-text-main);">Glass Opacity / Transmission</div>
                          <div style="font-size:0.8rem; color:var(--citruss-text-muted);">Adjust transparency percentage dynamically for all glass surfaces</div>
                        </div>
                        <span id="glass-opacity-value" style="font-weight:700; font-size:1rem; color:var(--citruss-tangerine);">35%</span>
                      </div>
                      <div style="display: flex; align-items: center; gap: 12px;">
                        <span class="citruss-icon icon-sm" style="color:var(--citruss-text-muted);">blur_on</span>
                        <input type="range" id="glass-opacity-slider" min="0" max="100" value="35" style="flex: 1; accent-color: var(--citruss-orange); cursor: pointer; height: 6px; border-radius: 999px;">
                        <span class="citruss-icon icon-sm" style="color:var(--citruss-text-muted);">blur_off</span>
                      </div>
                    </div>
                  </div>

                  <div class="citruss-d-flex citruss-gap-md" style="justify-content: flex-end; margin-top:32px;">
                    <button class="citruss-btn">Discard Changes</button>
                    <button class="citruss-btn btn-primary">Save Preference</button>
                  </div>

                </div>
              </div>
            </div>

            <div class="citruss-col-12 citruss-col-lg-4 citruss-mb-lg">
              <div class="citruss-card">
                <div class="card-content" style="padding:24px;">
                  <h3 style="font-weight:800; font-size:1.2rem; margin-bottom:20px; display:flex; align-items:center; gap:8px;">
                    <span class="citruss-icon icon-orange">devices</span> Active Login Sessions
                  </h3>

                  <div style="display:flex; flex-direction:column; gap:16px;">
                    <div style="display:flex; align-items:center; gap:12px;">
                      <span class="citruss-icon icon-lime" style="font-size:28px;">desktop_windows</span>
                      <div>
                        <div style="font-weight:700; font-size:0.9rem;">Windows 11 PC</div>
                        <div style="font-size:0.75rem; color:var(--citruss-text-muted);">Chrome • Istanbul, TR • <span style="color:var(--citruss-lime); font-weight:600;">Current Session</span></div>
                      </div>
                    </div>

                    <div style="display:flex; align-items:center; gap:12px;">
                      <span class="citruss-icon icon-orange" style="font-size:28px;">phone_iphone</span>
                      <div>
                        <div style="font-weight:700; font-size:0.9rem;">iPhone 15 Pro Max</div>
                        <div style="font-size:0.75rem; color:var(--citruss-text-muted);">Safari App • Frankfurt, DE • 2 days ago</div>
                      </div>
                    </div>
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
