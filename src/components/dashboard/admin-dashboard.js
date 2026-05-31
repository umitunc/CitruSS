import { getSidebarHTML } from './sidebar.js';
import { getNavbarHTML } from './navbar.js';
import { initDashboardInteractions } from './interactions.js';

export const renderAdminPanelDashboard = (useEffect) => {
  useEffect(() => {
    initDashboardInteractions();

    // Bind Dropdown
    const selectEl = document.getElementById('dashboard-multiselect');
    if (selectEl && window.CitruSS?.Dropdown) {
      new window.CitruSS.Dropdown(selectEl, {
        multiple: true,
        searchable: true,
        placeholder: 'Filter by server tags...'
      });
    }

    // Bind Accordion
    const accContainer = document.getElementById('faq-accordion-group');
    if (accContainer && window.CitruSS?.Accordion) {
      new window.CitruSS.Accordion(accContainer);
    }

    // Bind Multi-step Form Wizard
    if (window.CitruSS?.Wizard && document.getElementById('dashboard-setup-wizard')) {
      new window.CitruSS.Wizard('dashboard-setup-wizard');
    }
  }, []);

  return `
    <div class="citruss-dashboard-shell">
      ${getSidebarHTML('admin')}
      
      <div class="citruss-dashboard-main">
        ${getNavbarHTML('System Dashboard')}

        <div class="citruss-dashboard-content">
          <!-- 3 Columns Metrics Grid -->
          <div class="citruss-row">
            <div class="citruss-col-12 citruss-col-md-4 citruss-mb-md">
              <div class="citruss-card animate-fade-in" style="animation-delay: 0.1s;">
                <div class="card-content">
                  <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 12px;">
                    <div class="metric-title">GPU Performance</div>
                    <span class="citruss-icon-badge badge-sm badge-orange" style="margin: 0;"><span class="citruss-icon">developer_board</span></span>
                  </div>
                  <div class="metric-value">62.8 FPS</div>
                  <div class="metric-trend trend-up" style="display: flex; align-items: center; gap: 4px; color: var(--citruss-lime); font-size: 0.8rem; margin-top: 8px;">
                    <span class="citruss-icon icon-sm">trending_up</span> Hardware acceleration active
                  </div>
                </div>
              </div>
            </div>
            
            <div class="citruss-col-12 citruss-col-md-4 citruss-mb-md">
              <div class="citruss-card card-lime animate-fade-in" style="animation-delay: 0.2s;">
                <div class="card-content">
                  <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 12px;">
                    <div class="metric-title">Memory Allocation</div>
                    <span class="citruss-icon-badge badge-sm badge-lime" style="margin: 0;"><span class="citruss-icon">memory</span></span>
                  </div>
                  <div class="metric-value">14.8 MB</div>
                  <div class="metric-trend trend-up" style="display: flex; align-items: center; gap: 4px; color: var(--citruss-lime); font-size: 0.8rem; margin-top: 8px;">
                    <span class="citruss-icon icon-sm">compress</span> 99.8% compression ratio
                  </div>
                </div>
              </div>
            </div>
            
            <div class="citruss-col-12 citruss-col-md-4 citruss-mb-md">
              <div class="citruss-card animate-fade-in" style="animation-delay: 0.3s;">
                <div class="card-content">
                  <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 12px;">
                    <div class="metric-title">Response Latency</div>
                    <span class="citruss-icon-badge badge-sm badge-lemon" style="margin: 0;"><span class="citruss-icon">speed</span></span>
                  </div>
                  <div class="metric-value">12 ms</div>
                  <div class="metric-trend trend-down" style="display: flex; align-items: center; gap: 4px; color: var(--citruss-danger); font-size: 0.8rem; margin-top: 8px;">
                    <span class="citruss-icon icon-sm">bolt</span> Zero-delay bypass mode
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Main Grid Row -->
          <div class="citruss-row">
            <!-- Left Side: Table & Active Nodes -->
            <div class="citruss-col-12 citruss-col-lg-8 citruss-mb-lg">
              <div class="citruss-card citruss-h-100" style="padding: 24px;">
                <div class="card-content">
                  <div class="citruss-d-flex citruss-justify-content-between citruss-align-items-center citruss-mb-lg" style="flex-wrap: wrap; gap: 12px;">
                    <h3 style="font-weight: 800; font-size: 1.2rem; color: var(--citruss-text-main); display: flex; align-items: center; gap: 8px;">
                      <span class="citruss-icon icon-orange">lan</span> Cluster Active Instances
                    </h3>
                    <div style="width: 240px;">
                      <div class="citruss-select-wrapper" id="dashboard-multiselect" data-multiselect data-searchable>
                        <div class="citruss-select-trigger" style="min-height: 38px; padding: 6px 12px;">
                          <div class="chips-container"><span class="trigger-text" style="font-size: 0.8rem;">Filter nodes...</span></div>
                        </div>
                        <div class="citruss-dropdown-menu">
                          <div class="dropdown-search-box"><input type="text" placeholder="Search clusters..."></div>
                          <div class="dropdown-options">
                            <div class="dropdown-item" data-value="istanbul">🇹🇷 TR-Istanbul</div>
                            <div class="dropdown-item" data-value="frankfurt">🇩🇪 DE-Frankfurt</div>
                            <div class="dropdown-item" data-value="london">🇬🇧 UK-London</div>
                            <div class="dropdown-item" data-value="newyork">🇺🇸 US-NewYork</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div class="citruss-table-container">
                    <table class="citruss-table table-striped">
                      <thead>
                        <tr>
                          <th>Operator</th>
                          <th>Node Status</th>
                          <th>Bandwidth</th>
                          <th>Activity Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div class="citruss-d-flex citruss-align-items-center citruss-gap-sm">
                              <div class="citruss-avatar status-online avatar-sm">
                                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80" alt="Av">
                              </div>
                              <span style="font-weight: 600;">Defne Tuncgil</span>
                            </div>
                          </td>
                          <td><span class="citruss-badge badge-success">Online</span></td>
                          <td>4.2 GB/s</td>
                          <td><div style="font-size: 0.8rem; color:var(--citruss-text-muted);">Active queries routing</div></td>
                        </tr>
                        <tr>
                          <td>
                            <div class="citruss-d-flex citruss-align-items-center citruss-gap-sm">
                              <div class="citruss-avatar status-online avatar-sm">
                                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80" alt="Av">
                              </div>
                              <span style="font-weight: 600;">Reva Tuncgil</span>
                            </div>
                          </td>
                          <td><span class="citruss-badge badge-success">Online</span></td>
                          <td>3.8 GB/s</td>
                          <td><div style="font-size: 0.8rem; color:var(--citruss-text-muted);">Idle monitoring connection</div></td>
                        </tr>
                        <tr>
                          <td>
                            <div class="citruss-d-flex citruss-align-items-center citruss-gap-sm">
                              <div class="citruss-avatar status-offline avatar-sm">
                                <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80" alt="Av">
                              </div>
                              <span style="font-weight: 600;">Ümit Tuncgil</span>
                            </div>
                          </td>
                          <td><span class="citruss-badge badge-danger">Offline</span></td>
                          <td>0.0 GB/s</td>
                          <td><div style="font-size: 0.8rem; color:var(--citruss-text-muted);">Sync backup pending</div></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            <!-- Right Side: Activity Log Timeline -->
            <div class="citruss-col-12 citruss-col-lg-4 citruss-mb-lg">
              <div class="citruss-card citruss-h-100">
                <div class="card-content">
                  <h3 style="font-weight: 800; font-size: 1.2rem; color: var(--citruss-text-main); margin-bottom: 24px; display: flex; align-items: center; gap: 8px;">
                    <span class="citruss-icon icon-orange">history</span> Active Event Logs
                  </h3>
                  
                  <div class="citruss-timeline">
                    <div class="timeline-item timeline-success">
                      <div class="timeline-time">10:48 AM</div>
                      <div class="timeline-title">Sync Cluster Frankfurt</div>
                      <div class="timeline-content">Database nodes successfully completed replication checks.</div>
                    </div>
                    <div class="timeline-item timeline-warning">
                      <div class="timeline-time">09:15 AM</div>
                      <div class="timeline-title">Visual CSS regression tests</div>
                      <div class="timeline-content">BackstopJS regression validated with 100% match.</div>
                    </div>
                    <div class="timeline-item timeline-info">
                      <div class="timeline-time">08:00 AM</div>
                      <div class="timeline-title">Engine Initialization</div>
                      <div class="timeline-content">Vite bundler generated production ready glassmorphic css files.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Bottom Grid Row: Wizard & Accordion -->
          <div class="citruss-row">
            <div class="citruss-col-12 citruss-col-md-6 citruss-mb-lg">
              <div class="citruss-card">
                <div class="card-content">
                  <h3 style="font-weight: 800; font-size: 1.2rem; color: var(--citruss-text-main); margin-bottom: 24px; display: flex; align-items: center; gap: 8px;">
                    <span class="citruss-icon icon-orange">help_outline</span> Core Engine FAQs
                  </h3>
                  
                  <div id="faq-accordion-group">
                    <div class="citruss-accordion active">
                      <div class="accordion-header">
                        <span>How are 60+ FPS glass shadows protected?</span>
                        <span class="arrow">▼</span>
                      </div>
                      <div class="accordion-body">
                        CitruSS enforces a viewport restriction of max 5 simultaneous blur layers. Inner children do not double-render filters, saving massive graphics card cycle overhead.
                      </div>
                    </div>
                    
                    <div class="citruss-accordion">
                      <div class="accordion-header">
                        <span>Is WCAG Contrast standard compliant?</span>
                        <span class="arrow">▼</span>
                      </div>
                      <div class="accordion-body">
                        Yes, a dark shadow mask sits statically under primary cards ensuring a minimum ratio of 4.5:1 on any visual backing.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="citruss-col-12 citruss-col-md-6 citruss-mb-lg">
              <div class="citruss-card" id="dashboard-setup-wizard">
                <div class="card-content">
                  <h3 style="font-weight: 800; font-size: 1.2rem; color: var(--citruss-text-main); margin-bottom: 12px; display: flex; align-items: center; gap: 8px;">
                    <span class="citruss-icon icon-orange">auto_awesome</span> Integration Wizard
                  </h3>
                  
                  <div class="citruss-progress-bar progress-lime citruss-mb-lg">
                    <div class="progress-fill" style="width: 0%;"></div>
                  </div>
                  
                  <div class="citruss-wizard-steps-header citruss-mb-lg">
                    <div class="wizard-step-node active">1</div>
                    <div class="wizard-step-node">2</div>
                    <div class="wizard-step-node">3</div>
                  </div>
                  
                  <div class="citruss-wizard-step">
                    <h4 style="color:var(--citruss-text-main); font-weight:700; margin-bottom: 8px;">Step 1: Install Package</h4>
                    <p style="color:var(--citruss-text-muted); font-size: 0.85rem; margin-bottom:16px;">
                      Run npm command inside terminal to install our zero-dependency glassmorphism engine:
                    </p>
                    <code style="display:block; padding:12px; background:rgba(0,0,0,0.2); border-radius:6px; border:1px solid var(--citruss-glass-border); color:var(--citruss-tangerine); font-size: 0.8rem; margin-bottom:16px;">
                      npm install citruss-ui
                    </code>
                  </div>
                  
                  <div class="citruss-wizard-step" style="display: none;">
                    <h4 style="color:var(--citruss-text-main); font-weight:700; margin-bottom: 8px;">Step 2: Import stylesheet</h4>
                    <p style="color:var(--citruss-text-muted); font-size: 0.85rem; margin-bottom:16px;">
                      Directly import compiled library CSS at top of your primary module entrypoint:
                    </p>
                    <code style="display:block; padding:12px; background:rgba(0,0,0,0.2); border-radius:6px; border:1px solid var(--citruss-glass-border); color:var(--citruss-tangerine); font-size: 0.8rem; margin-bottom:16px;">
                      import 'citruss-ui/dist/citruss.css';
                    </code>
                  </div>

                  <div class="citruss-wizard-step" style="display: none;">
                    <h4 style="color:var(--citruss-text-main); font-weight:700; margin-bottom: 8px;">Step 3: Setup verified!</h4>
                    <p style="color:var(--citruss-text-muted); font-size: 0.85rem; margin-bottom:16px;">
                      Perfect! Standard templates and vibrant custom widgets are fully accessible in your project codebase.
                    </p>
                  </div>
                  
                  <div class="citruss-d-flex citruss-gap-md" style="justify-content: flex-end;">
                    <button class="citruss-btn btn-sm wizard-prev">Previous</button>
                    <button class="citruss-btn btn-sm btn-primary wizard-next">Next step</button>
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
