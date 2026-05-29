import { useEffect } from '@storybook/preview-api';

export default {
  title: 'Showcase/Pro Dashboard',
};

export const AdminPanelDashboard = () => {
  useEffect(() => {
    // 1. Dark/Light Theme Switching
    const themeToggle = document.getElementById('theme-toggle-btn');
    if (themeToggle) {
      themeToggle.onclick = () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', newTheme);
        themeToggle.textContent = newTheme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode';
        
        window.CitruSS.toast({
          title: 'Theme Switched',
          message: `Interface successfully updated to ${newTheme} mode.`,
          type: 'info'
        });
      };
    }

    // 2. Bind Dropdown
    const selectEl = document.getElementById('dashboard-multiselect');
    if (selectEl) {
      new window.CitruSS.Dropdown(selectEl, {
        multiple: true,
        searchable: true,
        placeholder: 'Filter by server tags...'
      });
    }

    // 3. Bind Accordion
    const accContainer = document.getElementById('faq-accordion-group');
    if (accContainer) {
      new window.CitruSS.Accordion(accContainer);
    }

    // 4. Bind Multi-step Form Wizard
    new window.CitruSS.Wizard('dashboard-setup-wizard');

    // 5. Sidebar Toggle for Mobile screens
    const sidebar = document.getElementById('dashboard-sidebar');
    const toggleSidebarBtn = document.getElementById('toggle-sidebar-mobile');
    if (toggleSidebarBtn && sidebar) {
      toggleSidebarBtn.onclick = () => {
        sidebar.classList.toggle('open');
      };
      
      // Close sidebar when clicking outside on mobile
      const contentArea = document.querySelector('.citruss-dashboard-main');
      if (contentArea) {
        contentArea.onclick = () => {
          if (window.innerWidth < 768) {
            sidebar.classList.remove('open');
          }
        };
      }
    }

    // 6. Programmatic Dialog
    const deployBtn = document.getElementById('btn-deploy-production');
    if (deployBtn) {
      deployBtn.onclick = () => {
        window.CitruSS.confirm(
          'Deploy Current Build?',
          'This will bundle assets and push to the live staging gateway.'
        ).then(res => {
          if (res.isConfirmed) {
            window.CitruSS.toast({
              title: 'Success',
              message: 'Production deployment initiated successfully!',
              type: 'success'
            });
          }
        });
      };
    }
  }, []);

  return `
    <div class="citruss-dashboard-shell">
      
      <!-- 1. LATERAL SIDEBAR -->
      <aside class="citruss-sidebar" id="dashboard-sidebar">
        <div class="sidebar-header">
          <div class="citruss-logo-area">
            🍋 CitruSS<span>Pro</span>
          </div>
        </div>
        <div class="sidebar-nav">
          <a href="#" class="sidebar-link active">
            <span class="sidebar-icon">📊</span>
            <span>Dashboard</span>
          </a>
          <a href="#" class="sidebar-link">
            <span class="sidebar-icon">🛡️</span>
            <span>Security Logs</span>
          </a>
          <a href="#" class="sidebar-link">
            <span class="sidebar-icon">⚙️</span>
            <span>Settings</span>
          </a>
          <a href="#" class="sidebar-link">
            <span class="sidebar-icon">💡</span>
            <span>Integrations</span>
          </a>
          <a href="#" class="sidebar-link">
            <span class="sidebar-icon">📁</span>
            <span>Cloud Explorer</span>
          </a>
        </div>
        <div class="sidebar-footer">
          <div class="citruss-avatar status-online avatar-sm">
            <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80" alt="User Profile">
          </div>
          <div class="user-details" style="font-size: 0.8rem; overflow: hidden; white-space: nowrap;">
            <div style="font-weight: 700; color: var(--citruss-text-main);">Ecem Trunçgil</div>
            <div style="color: var(--citruss-text-muted); font-size: 0.7rem;">ecem@truncgil.com</div>
          </div>
        </div>
      </aside>

      <!-- 2. MAIN WORKSPACE CONTENT -->
      <div class="citruss-dashboard-main">
        
        <!-- TOP NAVBAR -->
        <nav class="citruss-navbar">
          <div class="citruss-d-flex citruss-align-items-center citruss-gap-sm">
            <button class="citruss-btn btn-sm" id="toggle-sidebar-mobile" style="display: none; @media(max-width: 768px) { display: flex; }">☰</button>
            <div class="citruss-breadcrumbs">
              <a href="#" class="breadcrumb-item">Console</a>
              <span class="breadcrumb-separator">/</span>
              <a href="#" class="breadcrumb-item active">Dashboard</a>
            </div>
          </div>
          
          <div class="citruss-d-flex citruss-align-items-center citruss-gap-md">
            <button class="citruss-btn btn-sm" id="theme-toggle-btn">☀️ Light Mode</button>
            <button class="citruss-btn btn-sm btn-primary" id="btn-deploy-production">🚀 Deploy Build</button>
          </div>
        </nav>

        <!-- DASHBOARD CONTAINER SKELETON -->
        <div class="citruss-dashboard-content">
          
          <!-- DUAL CORE METRICS CARDS -->
          <div class="citruss-row">
            <div class="citruss-col-12 citruss-col-md-4 citruss-mb-md">
              <div class="citruss-card">
                <div class="card-content">
                  <div class="metric-title">GPU Performance</div>
                  <div class="metric-value">62.8 FPS</div>
                  <div class="metric-trend trend-up">
                    <span>▲</span> hardware layer lock active
                  </div>
                </div>
              </div>
            </div>
            
            <div class="citruss-col-12 citruss-col-md-4 citruss-mb-md">
              <div class="citruss-card card-lime">
                <div class="card-content">
                  <div class="metric-title">Memory Allocation</div>
                  <div class="metric-value">14.8 MB</div>
                  <div class="metric-trend trend-up">
                    <span>▲</span> 99.8% compression ratio
                  </div>
                </div>
              </div>
            </div>
            
            <div class="citruss-col-12 citruss-col-md-4 citruss-mb-md">
              <div class="citruss-card">
                <div class="card-content">
                  <div class="metric-title">Server Response Time</div>
                  <div class="metric-value">12 ms</div>
                  <div class="metric-trend trend-down">
                    <span>▼</span> zero latency mode
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- DOUBLE PANEL GRID: MAIN CONTROLS + SUMMARY DATA -->
          <div class="citruss-row">
            
            <!-- LEFT PANEL: TABLE + DROP FILTERS -->
            <div class="citruss-col-12 citruss-col-lg-8 citruss-mb-lg">
              <div class="citruss-card citruss-h-100" style="padding: 24px;">
                <div class="card-content">
                  <div class="citruss-d-flex citruss-justify-content-between citruss-align-items-center citruss-mb-lg">
                    <h3 style="font-weight: 800; font-size: 1.1rem; color: var(--citruss-text-main);">Cluster Active Instances</h3>
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
                              <span style="font-weight: 600;">Defne Trunçgil</span>
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
                              <span style="font-weight: 600;">Yiğit Trunçgil</span>
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
                              <span style="font-weight: 600;">Okan Trunçgil</span>
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

            <!-- RIGHT PANEL: TIMELINES & ACTIVITY LOGS -->
            <div class="citruss-col-12 citruss-col-lg-4 citruss-mb-lg">
              <div class="citruss-card citruss-h-100">
                <div class="card-content">
                  <h3 style="font-weight: 800; font-size: 1.1rem; color: var(--citruss-text-main); margin-bottom: 24px;">Active Event Logs</h3>
                  
                  <div class="citruss-timeline">
                    <div class="timeline-item timeline-success">
                      <div class="timeline-time">10:48 AM</div>
                      <div class="timeline-title">Sync Cluster Frankfurt</div>
                      <div class="timeline-content">Database nodes successfully completed replication checks.</div>
                    </div>
                    <div class="timeline-item">
                      <div class="timeline-time">09:15 AM</div>
                      <div class="timeline-title">Visual CSS regression tests</div>
                      <div class="timeline-content">BackstopJS regression validated with 100% match.</div>
                    </div>
                    <div class="timeline-item">
                      <div class="timeline-time">08:00 AM</div>
                      <div class="timeline-title">Engine Initialization</div>
                      <div class="timeline-content">Vite bundler generated production ready glassmorphic css files.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <!-- THIRD PANEL ROW: STEPS WIZARD & FAQS ACCORDION -->
          <div class="citruss-row">
            
            <!-- LEFT COLLAPSIBLE FAQS -->
            <div class="citruss-col-12 citruss-col-md-6 citruss-mb-lg">
              <div class="citruss-card">
                <div class="card-content">
                  <h3 style="font-weight: 800; font-size: 1.1rem; color: var(--citruss-text-main); margin-bottom: 24px;">CitruSS Core Engine FAQs</h3>
                  
                  <div id="faq-accordion-group">
                    <div class="citruss-accordion active">
                      <div class="accordion-header">
                        <span>How are 60+ FPS glass shadows protected?</span>
                        <span class="arrow">▼</span>
                      </div>
                      <div class="accordion-body" style="max-height: 200px;">
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
            
            <!-- RIGHT SETUP WIZARD -->
            <div class="citruss-col-12 citruss-col-md-6 citruss-mb-lg">
              <div class="citruss-card" id="dashboard-setup-wizard">
                <div class="card-content">
                  <h3 style="font-weight: 800; font-size: 1.1rem; color: var(--citruss-text-main); margin-bottom: 12px;">Quick Integration Wizard</h3>
                  
                  <!-- Progressive linear progress bar -->
                  <div class="citruss-progress-bar progress-lime citruss-mb-lg">
                    <div class="progress-fill" style="width: 0%;"></div>
                  </div>
                  
                  <div class="citruss-wizard-steps-header citruss-mb-lg">
                    <div class="wizard-step-node active">1</div>
                    <div class="wizard-step-node">2</div>
                    <div class="wizard-step-node">3</div>
                  </div>
                  
                  <!-- Step contents -->
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
                  
                  <!-- Navigation buttons -->
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
