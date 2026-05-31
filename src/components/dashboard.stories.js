import { useEffect } from 'storybook/preview-api';

export default {
  title: 'Showcase/Pro Dashboard',
};

// Common Sidebar template generator to organize links by category
const getSidebarHTML = (activePage) => {
  const categories = [
    {
      title: 'Dashboards',
      links: [
        { id: 'admin', label: 'System Overview', icon: 'dashboard' },
        { id: 'ecommerce', label: 'E-Commerce Ops', icon: 'payments' }
      ]
    },
    {
      title: 'App Templates',
      links: [
        { id: 'kanban', label: 'Kanban Board', icon: 'view_kanban' },
        { id: 'explorer', label: 'Cloud Explorer', icon: 'folder_open' }
      ]
    },
    {
      title: 'Authentication',
      links: [
        { id: 'login', label: 'Sign In Page', icon: 'login' },
        { id: 'register', label: 'Sign Up Page', icon: 'person_add' }
      ]
    },
    {
      title: 'Configuration',
      links: [
        { id: 'settings', label: 'Standard Settings', icon: 'settings' },
        { id: 'tabbed-settings', label: 'Tabbed Settings', icon: 'tab' }
      ]
    }
  ];

  const sidebarContent = categories.map(cat => `
    <div class="sidebar-category" style="margin-top: 16px; margin-bottom: 6px; padding: 0 16px;">
      <span style="font-size: 0.7rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.08em; color: var(--citruss-tangerine); opacity: 0.9;">${cat.title}</span>
    </div>
    ${cat.links.map(link => `
      <a href="#" class="sidebar-link ${activePage === link.id ? 'active' : ''}" data-nav-target="${link.id}">
        <span class="citruss-icon icon-rounded">${link.icon}</span>
        <span>${link.label}</span>
      </a>
    `).join('')}
  `).join('');

  return `
    <aside class="citruss-sidebar" id="dashboard-sidebar">
      <div class="sidebar-header">
        <div class="citruss-logo-area" style="display: flex; align-items: center; gap: 8px;">
          <img src="./logos/citruss_logo_transparent.png" alt="CitruSS Logo" style="height: 32px; width: auto; object-fit: contain;">
          <span style="font-size: 1.25rem; font-weight: 800; color: var(--citruss-tangerine); margin-left: 2px;">Pro</span>
        </div>
      </div>
      <div class="sidebar-nav">
        ${sidebarContent}
      </div>
      <div class="sidebar-footer">
        <div class="citruss-avatar status-online avatar-sm">
          <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80" alt="User Profile">
        </div>
        <div class="user-details" style="font-size: 0.8rem; overflow: hidden; white-space: nowrap; flex: 1;">
          <div style="font-weight: 700; color: var(--citruss-text-main);">Ecem Tuncgil</div>
          <div style="color: var(--citruss-text-muted); font-size: 0.7rem;">ecem@truncgil.com</div>
        </div>
      </div>
    </aside>
  `;
};

// Common Navbar template generator
const getNavbarHTML = (pageTitle) => {
  return `
    <nav class="citruss-navbar">
      <div class="citruss-d-flex citruss-align-items-center citruss-gap-sm">
        <button class="citruss-btn btn-sm" id="toggle-sidebar-mobile" style="display: none; @media(max-width: 768px) { display: flex; }">
          <span class="citruss-icon icon-rounded">menu</span>
        </button>
        <div class="citruss-breadcrumbs">
          <a href="#" class="breadcrumb-item">Console</a>
          <span class="breadcrumb-separator">/</span>
          <a href="#" class="breadcrumb-item active">${pageTitle}</a>
        </div>
      </div>
      
      <div class="citruss-d-flex citruss-align-items-center citruss-gap-md">
        <button class="citruss-btn btn-sm" id="theme-toggle-btn">☀️ Light Mode</button>
        <button class="citruss-btn btn-sm btn-primary" id="btn-deploy-production">
          <span class="citruss-icon icon-rounded icon-sm" style="margin-right: 4px;">rocket_launch</span>
          <span>Deploy Build</span>
        </button>
      </div>
    </nav>
  `;
};

// Initialize interactive elements common across the dashboards
const initDashboardInteractions = (setupSelector = null) => {
  // Theme Switching
  const themeToggle = document.getElementById('theme-toggle-btn');
  if (themeToggle) {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    themeToggle.textContent = currentTheme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode';
    
    themeToggle.onclick = () => {
      const current = document.documentElement.getAttribute('data-theme');
      const newTheme = current === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', newTheme);
      themeToggle.textContent = newTheme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode';

      window.CitruSS.toast({
        title: 'Theme Switched',
        message: `Interface successfully updated to ${newTheme} mode.`,
        type: 'info'
      });
    };
  }

  // Sidebar Toggle for Mobile screens
  const sidebar = document.getElementById('dashboard-sidebar');
  const toggleSidebarBtn = document.getElementById('toggle-sidebar-mobile');
  if (toggleSidebarBtn && sidebar) {
    toggleSidebarBtn.onclick = (e) => {
      e.stopPropagation();
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

  // Programmatic Dialog
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
};

// STORY 1: Admin Panel & Performance Dashboard (Core & Cluster Ops)
export const AdminPanelDashboard = () => {
  useEffect(() => {
    initDashboardInteractions();

    // Bind Dropdown
    const selectEl = document.getElementById('dashboard-multiselect');
    if (selectEl) {
      new window.CitruSS.Dropdown(selectEl, {
        multiple: true,
        searchable: true,
        placeholder: 'Filter by server tags...'
      });
    }

    // Bind Accordion
    const accContainer = document.getElementById('faq-accordion-group');
    if (accContainer) {
      new window.CitruSS.Accordion(accContainer);
    }

    // Bind Multi-step Form Wizard
    new window.CitruSS.Wizard('dashboard-setup-wizard');
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
              <div class="citruss-card">
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
              <div class="citruss-card card-lime">
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
              <div class="citruss-card">
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

// STORY 2: E-Commerce & Financial Operations Dashboard
export const ECommerceStorefront = () => {
  useEffect(() => {
    initDashboardInteractions();
  }, []);

  return `
    <div class="citruss-dashboard-shell">
      ${getSidebarHTML('ecommerce')}
      
      <div class="citruss-dashboard-main">
        ${getNavbarHTML('E-Commerce Operations')}

        <div class="citruss-dashboard-content">
          <div class="citruss-row">
            <div class="citruss-col-12 citruss-col-md-3 citruss-mb-md">
              <div class="citruss-card">
                <div class="card-content">
                  <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px;">
                    <div class="metric-title">Gross Revenue</div>
                    <span class="citruss-icon-badge badge-sm badge-orange" style="margin: 0;"><span class="citruss-icon">attach_money</span></span>
                  </div>
                  <div class="metric-value">$84,240</div>
                  <div style="color: var(--citruss-lime); font-size: 0.8rem; font-weight:600; display:flex; align-items:center; gap:4px; margin-top: 8px;">
                    <span class="citruss-icon icon-sm">trending_up</span> +14.2% from last week
                  </div>
                </div>
              </div>
            </div>
            
            <div class="citruss-col-12 citruss-col-md-3 citruss-mb-md">
              <div class="citruss-card">
                <div class="card-content">
                  <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px;">
                    <div class="metric-title">Active Orders</div>
                    <span class="citruss-icon-badge badge-sm badge-lime" style="margin: 0;"><span class="citruss-icon">shopping_bag</span></span>
                  </div>
                  <div class="metric-value">1,482</div>
                  <div style="color: var(--citruss-lime); font-size: 0.8rem; font-weight:600; display:flex; align-items:center; gap:4px; margin-top: 8px;">
                    <span class="citruss-icon icon-sm">shopping_cart</span> 94 pending dispatch
                  </div>
                </div>
              </div>
            </div>
            
            <div class="citruss-col-12 citruss-col-md-3 citruss-mb-md">
              <div class="citruss-card">
                <div class="card-content">
                  <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px;">
                    <div class="metric-title">Conversion Rate</div>
                    <span class="citruss-icon-badge badge-sm badge-lemon" style="margin: 0;"><span class="citruss-icon">insights</span></span>
                  </div>
                  <div class="metric-value">3.64%</div>
                  <div style="color: var(--citruss-tangerine); font-size: 0.8rem; font-weight:600; display:flex; align-items:center; gap:4px; margin-top: 8px;">
                    <span class="citruss-icon icon-sm">bolt</span> Industry avg: 2.10%
                  </div>
                </div>
              </div>
            </div>

            <div class="citruss-col-12 citruss-col-md-3 citruss-mb-md">
              <div class="citruss-card card-lime">
                <div class="card-content">
                  <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px;">
                    <div class="metric-title">Server Sales Sync</div>
                    <span class="citruss-icon-badge badge-sm badge-lime" style="margin: 0;"><span class="citruss-icon">sync</span></span>
                  </div>
                  <div class="metric-value">100%</div>
                  <div style="color: var(--citruss-text-main); font-size: 0.8rem; display:flex; align-items:center; gap:4px; margin-top: 8px;">
                    <span class="citruss-icon icon-sm">check_circle</span> Real-time active pipelines
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="citruss-row">
            <div class="citruss-col-12 citruss-col-lg-8 citruss-mb-lg">
              <div class="citruss-card" style="padding: 24px;">
                <div class="card-content">
                  <h3 style="font-weight: 800; font-size: 1.2rem; color: var(--citruss-text-main); margin-bottom: 20px; display: flex; align-items: center; gap: 8px;">
                    <span class="citruss-icon icon-orange">list_alt</span> Recent Operations
                  </h3>
                  
                  <div class="citruss-table-container">
                    <table class="citruss-table table-hover">
                      <thead>
                        <tr>
                          <th>Order ID</th>
                          <th>Purchaser</th>
                          <th>Product Segment</th>
                          <th>Total Paid</th>
                          <th>Fulfillment</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td><strong>#CTR-9841</strong></td>
                          <td>
                            <div class="citruss-d-flex citruss-align-items-center citruss-gap-sm">
                              <div class="citruss-avatar avatar-sm"><img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&q=80"></div>
                              <span>Melis Eren</span>
                            </div>
                          </td>
                          <td>Enterprise Dev Suite</td>
                          <td><strong>$499.00</strong></td>
                          <td><span class="citruss-badge badge-success">Completed</span></td>
                        </tr>
                        <tr>
                          <td><strong>#CTR-9840</strong></td>
                          <td>
                            <div class="citruss-d-flex citruss-align-items-center citruss-gap-sm">
                              <div class="citruss-avatar avatar-sm"><img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80"></div>
                              <span>Kerem Tuncgil</span>
                            </div>
                          </td>
                          <td>Consultancy Pack</td>
                          <td><strong>$1,200.00</strong></td>
                          <td><span class="citruss-badge badge-warning">Processing</span></td>
                        </tr>
                        <tr>
                          <td><strong>#CTR-9839</strong></td>
                          <td>
                            <div class="citruss-d-flex citruss-align-items-center citruss-gap-sm">
                              <div class="citruss-avatar avatar-sm"><img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&q=80"></div>
                              <span>Selim Aksoy</span>
                            </div>
                          </td>
                          <td>Custom Glass Theme</td>
                          <td><strong>$89.00</strong></td>
                          <td><span class="citruss-badge badge-danger">Refunded</span></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            <div class="citruss-col-12 citruss-col-lg-4 citruss-mb-lg">
              <div class="citruss-card">
                <div class="card-content">
                  <h3 style="font-weight: 800; font-size: 1.2rem; color: var(--citruss-text-main); margin-bottom: 24px; display: flex; align-items: center; gap: 8px;">
                    <span class="citruss-icon icon-orange">donut_large</span> Target Milestones
                  </h3>
                  
                  <div style="margin-bottom: 20px;">
                    <div style="display: flex; justify-content: space-between; font-size: 0.85rem; margin-bottom: 6px;">
                      <span style="color: var(--citruss-text-main); font-weight:600;">Monthly Sales Target</span>
                      <span style="color: var(--citruss-tangerine); font-weight:700;">84%</span>
                    </div>
                    <div class="citruss-progress-bar progress-orange">
                      <div class="progress-fill" style="width: 84%;"></div>
                    </div>
                  </div>

                  <div style="margin-bottom: 20px;">
                    <div style="display: flex; justify-content: space-between; font-size: 0.85rem; margin-bottom: 6px;">
                      <span style="color: var(--citruss-text-main); font-weight:600;">Server Resource Allocation</span>
                      <span style="color: var(--citruss-lime); font-weight:700;">62%</span>
                    </div>
                    <div class="citruss-progress-bar progress-lime">
                      <div class="progress-fill" style="width: 62%;"></div>
                    </div>
                  </div>

                  <div style="margin-bottom: 12px;">
                    <div style="display: flex; justify-content: space-between; font-size: 0.85rem; margin-bottom: 6px;">
                      <span style="color: var(--citruss-text-main); font-weight:600;">Security Integrity Audit</span>
                      <span style="color: var(--citruss-lemon); font-weight:700;">95%</span>
                    </div>
                    <div class="citruss-progress-bar progress-lemon">
                      <div class="progress-fill" style="width: 95%;"></div>
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

// STORY 3: Kanban & Project Management Page Template
export const KanbanProjectManagement = () => {
  useEffect(() => {
    initDashboardInteractions();

    const tasks = document.querySelectorAll('.kanban-task-card');
    const lists = document.querySelectorAll('.kanban-tasks-list');
    let draggedTask = null;

    tasks.forEach(task => {
      task.addEventListener('dragstart', (e) => {
        draggedTask = task;
        task.classList.add('dragging');
        e.dataTransfer.setData('text/plain', ''); // Necessary for Firefox support
      });

      task.addEventListener('dragend', () => {
        draggedTask = null;
        task.classList.remove('dragging');
        
        // Recalculate dynamic badges count
        lists.forEach(list => {
          const badge = list.closest('.card-content').querySelector('.card-count');
          if (badge) {
            badge.textContent = list.querySelectorAll('.kanban-task-card').length;
          }
        });
      });
    });

    lists.forEach(list => {
      list.addEventListener('dragover', (e) => {
        e.preventDefault();
        list.style.background = 'rgba(255, 107, 0, 0.04)';
        list.style.borderRadius = '8px';
      });

      list.addEventListener('dragleave', () => {
        list.style.background = 'transparent';
      });

      list.addEventListener('drop', (e) => {
        e.preventDefault();
        list.style.background = 'transparent';
        if (draggedTask) {
          list.appendChild(draggedTask);
          
          window.CitruSS.toast({
            title: 'Task Relocated',
            message: `"${draggedTask.querySelector('h5').textContent}" has been successfully moved.`,
            type: 'success'
          });
        }
      });
    });
  }, []);

  return `
    <div class="citruss-dashboard-shell">
      ${getSidebarHTML('kanban')}
      
      <div class="citruss-dashboard-main">
        ${getNavbarHTML('Sprint Kanban Board')}

        <div class="citruss-dashboard-content">
          <div class="citruss-row">
            
            <!-- Column 1: Backlog -->
            <div class="citruss-col-12 citruss-col-lg-4 citruss-mb-lg">
              <div class="citruss-card" style="background: rgba(255,255,255,0.02); border: 1px dashed var(--citruss-glass-border); min-height: 480px;">
                <div class="card-content" style="padding: 16px;">
                  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 16px;">
                    <h4 style="font-weight:800; font-size:1.05rem; display:flex; align-items:center; gap:8px;">
                      <span style="width:8px; height:8px; border-radius:50%; background:var(--citruss-tangerine);"></span> Backlog
                    </h4>
                    <span class="citruss-badge badge-neutral card-count">2</span>
                  </div>

                  <div class="kanban-tasks-list" style="min-height: 380px; display: flex; flex-direction: column; gap: 12px; transition: background 0.2s;">
                    <div class="citruss-card kanban-task-card" draggable="true" style="cursor: grab; transition: transform 0.2s, opacity 0.2s;">
                      <div class="card-content" style="padding: 16px;">
                        <span class="citruss-badge badge-warning" style="margin-bottom:8px;">Bugfix</span>
                        <h5 style="font-weight:700; margin-bottom:8px; font-size:0.9rem;">Solve 60+ FPS Glass Blur Lag</h5>
                        <p style="color:var(--citruss-text-muted); font-size:0.8rem; margin-bottom:12px;">Enforce absolute viewport bounds constraints.</p>
                        <div style="display:flex; justify-content:space-between; align-items:center;">
                          <div class="citruss-avatar avatar-xs"><img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80"></div>
                          <span style="font-size:0.75rem; color:var(--citruss-danger); font-weight:600; display:flex; align-items:center; gap:2px;">
                            <span class="citruss-icon icon-sm">alarm</span> May 31
                          </span>
                        </div>
                      </div>
                    </div>

                    <div class="citruss-card kanban-task-card" draggable="true" style="cursor: grab; transition: transform 0.2s, opacity 0.2s;">
                      <div class="card-content" style="padding: 16px;">
                        <span class="citruss-badge badge-success" style="margin-bottom:8px;">Feature</span>
                        <h5 style="font-weight:700; margin-bottom:8px; font-size:0.9rem;">Integrate Material Symbols</h5>
                        <p style="color:var(--citruss-text-muted); font-size:0.8rem; margin-bottom:12px;">Map modern Google Font symbols universally.</p>
                        <div style="display:flex; justify-content:space-between; align-items:center;">
                          <div class="citruss-avatar avatar-xs"><img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&q=80"></div>
                          <span style="font-size:0.75rem; color:var(--citruss-text-muted);">No deadline</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Column 2: In Progress -->
            <div class="citruss-col-12 citruss-col-lg-4 citruss-mb-lg">
              <div class="citruss-card" style="background: rgba(255,255,255,0.02); border: 1px dashed var(--citruss-glass-border); min-height: 480px;">
                <div class="card-content" style="padding: 16px;">
                  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 16px;">
                    <h4 style="font-weight:800; font-size:1.05rem; display:flex; align-items:center; gap:8px;">
                      <span style="width:8px; height:8px; border-radius:50%; background:var(--citruss-lime);"></span> In Progress
                    </h4>
                    <span class="citruss-badge badge-neutral card-count">1</span>
                  </div>

                  <div class="kanban-tasks-list" style="min-height: 380px; display: flex; flex-direction: column; gap: 12px; transition: background 0.2s;">
                    <div class="citruss-card kanban-task-card" draggable="true" style="cursor: grab; border-left: 3px solid var(--citruss-lime); transition: transform 0.2s, opacity 0.2s;">
                      <div class="card-content" style="padding: 16px;">
                        <span class="citruss-badge badge-success" style="margin-bottom:8px;">Core Refactor</span>
                        <h5 style="font-weight:700; margin-bottom:8px; font-size:0.9rem;">Complete Pro Dashboard Views</h5>
                        <p style="color:var(--citruss-text-muted); font-size:0.8rem; margin-bottom:12px;">Deliver highly customizable web/desktop layouts.</p>
                        <div style="display:flex; justify-content:space-between; align-items:center;">
                          <div class="citruss-avatar-group">
                            <div class="citruss-avatar avatar-xs"><img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80"></div>
                            <div class="citruss-avatar avatar-xs"><img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&q=80"></div>
                          </div>
                          <span style="font-size:0.75rem; color:var(--citruss-lime); font-weight:600; display:flex; align-items:center; gap:2px;">
                            <span class="citruss-icon icon-sm icon-spin">sync</span> Active
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Column 3: Done -->
            <div class="citruss-col-12 citruss-col-lg-4 citruss-mb-lg">
              <div class="citruss-card" style="background: rgba(255,255,255,0.02); border: 1px dashed var(--citruss-glass-border); min-height: 480px;">
                <div class="card-content" style="padding: 16px;">
                  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 16px;">
                    <h4 style="font-weight:800; font-size:1.05rem; display:flex; align-items:center; gap:8px;">
                      <span style="width:8px; height:8px; border-radius:50%; background:var(--citruss-lemon);"></span> Verification Completed
                    </h4>
                    <span class="citruss-badge badge-neutral card-count">1</span>
                  </div>

                  <div class="kanban-tasks-list" style="min-height: 380px; display: flex; flex-direction: column; gap: 12px; transition: background 0.2s;">
                    <div class="citruss-card kanban-task-card" draggable="true" style="opacity: 0.75; cursor: grab; transition: transform 0.2s, opacity 0.2s;">
                      <div class="card-content" style="padding: 16px;">
                        <span class="citruss-badge badge-neutral" style="margin-bottom:8px;">Docs</span>
                        <h5 style="font-weight:700; margin-bottom:8px; font-size:0.9rem; text-decoration: line-through;">Write API Documentation</h5>
                        <p style="color:var(--citruss-text-muted); font-size:0.8rem; margin-bottom:12px;">Draft and export detailed component interaction protocols.</p>
                        <div style="display:flex; justify-content:space-between; align-items:center;">
                          <div class="citruss-avatar avatar-xs"><img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&q=80"></div>
                          <span class="citruss-badge badge-success">Verified</span>
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
    </div>
  `;
};

// STORY 4: Cloud File Explorer Page Template
export const CloudExplorer = () => {
  useEffect(() => {
    initDashboardInteractions();
  }, []);

  return `
    <div class="citruss-dashboard-shell">
      ${getSidebarHTML('explorer')}
      
      <div class="citruss-dashboard-main">
        ${getNavbarHTML('Cloud Explorer')}

        <div class="citruss-dashboard-content">
          <div class="citruss-row">
            <div class="citruss-col-12 citruss-col-lg-8 citruss-mb-lg">
              <div class="citruss-card" style="padding: 24px;">
                <div class="card-content">
                  <div class="citruss-d-flex citruss-justify-content-between citruss-align-items-center citruss-mb-lg" style="flex-wrap:wrap; gap:12px;">
                    <h3 style="font-weight: 800; font-size: 1.2rem; color: var(--citruss-text-main); display:flex; align-items:center; gap:8px;">
                      <span class="citruss-icon icon-orange">folder</span> Repositories & Folders
                    </h3>
                    <button class="citruss-btn btn-sm btn-primary">
                      <span class="citruss-icon icon-sm icon-rounded" style="margin-right: 4px;">upload_file</span> Upload New File
                    </button>
                  </div>

                  <div class="citruss-row citruss-mb-lg">
                    <div class="citruss-col-12 citruss-col-md-4 citruss-mb-md">
                      <div class="citruss-card card-lime" style="cursor: pointer;">
                        <div class="card-content" style="padding: 16px; display:flex; align-items:center; gap:12px;">
                          <span class="citruss-icon-badge badge-sm badge-lime" style="margin:0;"><span class="citruss-icon">source</span></span>
                          <div>
                            <div style="font-weight:700; font-size:0.9rem;">Source Assets</div>
                            <div style="font-size:0.75rem; opacity:0.8;">182 items • 1.4 GB</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="citruss-col-12 citruss-col-md-4 citruss-mb-md">
                      <div class="citruss-card" style="cursor: pointer;">
                        <div class="card-content" style="padding: 16px; display:flex; align-items:center; gap:12px;">
                          <span class="citruss-icon-badge badge-sm badge-orange" style="margin:0;"><span class="citruss-icon">video_library</span></span>
                          <div>
                            <div style="font-weight:700; font-size:0.9rem;">Media Assets</div>
                            <div style="font-size:0.75rem; color:var(--citruss-text-muted);">24 items • 8.4 GB</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="citruss-col-12 citruss-col-md-4 citruss-mb-md">
                      <div class="citruss-card" style="cursor: pointer;">
                        <div class="card-content" style="padding: 16px; display:flex; align-items:center; gap:12px;">
                          <span class="citruss-icon-badge badge-sm badge-lemon" style="margin:0;"><span class="citruss-icon">folder_zip</span></span>
                          <div>
                            <div style="font-weight:700; font-size:0.9rem;">Backup Archives</div>
                            <div style="font-size:0.75rem; color:var(--citruss-text-muted);">8 items • 14.8 GB</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <h4 style="font-weight: 800; font-size: 1.05rem; margin-bottom:16px;">Files in Source Assets</h4>
                  <div class="citruss-table-container">
                    <table class="citruss-table table-hover">
                      <thead>
                        <tr>
                          <th>File Name</th>
                          <th>Modified</th>
                          <th>File Size</th>
                          <th>Permissions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr style="cursor: pointer;">
                          <td>
                            <div style="display:flex; align-items:center; gap:8px;">
                              <span class="citruss-icon icon-orange" style="font-size:18px;">javascript</span>
                              <span style="font-weight:600;">citruss.min.js</span>
                            </div>
                          </td>
                          <td style="font-size:0.85rem; color:var(--citruss-text-muted);">2 hours ago</td>
                          <td>45.8 KB</td>
                          <td><span class="citruss-badge badge-success">Read-Write</span></td>
                        </tr>
                        <tr style="cursor: pointer;">
                          <td>
                            <div style="display:flex; align-items:center; gap:8px;">
                              <span class="citruss-icon icon-lime" style="font-size:18px;">image</span>
                              <span style="font-weight:600;">hero_mockup.webp</span>
                            </div>
                          </td>
                          <td style="font-size:0.85rem; color:var(--citruss-text-muted);">Yesterday</td>
                          <td>284 KB</td>
                          <td><span class="citruss-badge badge-success">Read-Write</span></td>
                        </tr>
                        <tr style="cursor: pointer;">
                          <td>
                            <div style="display:flex; align-items:center; gap:8px;">
                              <span class="citruss-icon icon-orange" style="font-size:18px;">css</span>
                              <span style="font-weight:600;">citruss.css</span>
                            </div>
                          </td>
                          <td style="font-size:0.85rem; color:var(--citruss-text-muted);">May 28, 2026</td>
                          <td>114 KB</td>
                          <td><span class="citruss-badge badge-neutral">Read Only</span></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                </div>
              </div>
            </div>

            <div class="citruss-col-12 citruss-col-lg-4 citruss-mb-lg">
              <div class="citruss-card">
                <div class="card-content" style="padding:24px;">
                  <h3 style="font-weight:800; font-size:1.2rem; margin-bottom:20px;">Storage Allocation</h3>
                  
                  <div style="text-align:center; margin-bottom:24px;">
                    <div style="font-size:2rem; font-weight:900; color:var(--citruss-orange);">24.6 GB</div>
                    <div style="font-size:0.8rem; color:var(--citruss-text-muted);">Used of 100 GB Cloud Limit</div>
                  </div>

                  <div class="citruss-progress-bar progress-orange citruss-mb-lg">
                    <div class="progress-fill" style="width: 24.6%;"></div>
                  </div>

                  <div style="display:flex; flex-direction:column; gap:16px;">
                    <div style="display:flex; justify-content:space-between; align-items:center; font-size:0.85rem;">
                      <div style="display:flex; align-items:center; gap:8px;">
                        <span class="citruss-icon icon-orange" style="font-size:16px;">description</span>
                        <span style="color:var(--citruss-text-main);">Documents & Source</span>
                      </div>
                      <span style="font-weight:700;">1.4 GB</span>
                    </div>

                    <div style="display:flex; justify-content:space-between; align-items:center; font-size:0.85rem;">
                      <div style="display:flex; align-items:center; gap:8px;">
                        <span class="citruss-icon icon-lime" style="font-size:16px;">image</span>
                        <span style="color:var(--citruss-text-main);">Graphics & Media</span>
                      </div>
                      <span style="font-weight:700;">8.4 GB</span>
                    </div>

                    <div style="display:flex; justify-content:space-between; align-items:center; font-size:0.85rem;">
                      <div style="display:flex; align-items:center; gap:8px;">
                        <span class="citruss-icon icon-orange" style="font-size:16px;">settings_system_daydream</span>
                        <span style="color:var(--citruss-text-main);">Sync Archives</span>
                      </div>
                      <span style="font-weight:700;">14.8 GB</span>
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

// STORY 5: Standard User Settings and Configuration Profile Page Template
export const UserSettings = () => {
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

// STORY 6: Tabbed User Settings Page Template
export const TabbedSettings = () => {
  useEffect(() => {
    initDashboardInteractions();

    // Tab Navigation switching script
    const tabs = document.querySelectorAll('.settings-tab-btn');
    const sections = document.querySelectorAll('.settings-tab-section');

    tabs.forEach(tab => {
      tab.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = tab.getAttribute('data-tab-target');

        tabs.forEach(t => t.classList.remove('active'));
        sections.forEach(s => s.style.display = 'none');

        tab.classList.add('active');
        const activeSection = document.getElementById(targetId);
        if (activeSection) {
          activeSection.style.display = 'block';
        }

        window.CitruSS.toast({
          title: 'Section Switched',
          message: `Switched settings category to ${tab.textContent.trim()}`,
          type: 'info'
        });
      });
    });
  }, []);

  return `
    <div class="citruss-dashboard-shell">
      ${getSidebarHTML('tabbed-settings')}
      
      <div class="citruss-dashboard-main">
        ${getNavbarHTML('Tabbed Config Center')}

        <div class="citruss-dashboard-content">
          <div class="citruss-row">
            
            <div class="citruss-col-12">
              <div class="citruss-card" style="padding: 0; overflow: hidden; margin-bottom: 24px;">
                <div class="citruss-tabs-nav" style="display: flex; gap: 4px; border-bottom: 1px solid var(--citruss-glass-border); padding: 8px 16px; background: rgba(0,0,0,0.15);">
                  <button class="citruss-btn btn-sm settings-tab-btn active" data-tab-target="tab-account" style="background: transparent; border: none; font-weight:700;">
                    <span class="citruss-icon icon-sm icon-rounded" style="margin-right: 6px;">person</span> Account Details
                  </button>
                  <button class="citruss-btn btn-sm settings-tab-btn" data-tab-target="tab-security" style="background: transparent; border: none; font-weight:700;">
                    <span class="citruss-icon icon-sm icon-rounded" style="margin-right: 6px;">lock</span> Security Guard
                  </button>
                  <button class="citruss-btn btn-sm settings-tab-btn" data-tab-target="tab-integrations" style="background: transparent; border: none; font-weight:700;">
                    <span class="citruss-icon icon-sm icon-rounded" style="margin-right: 6px;">api</span> Integrations & Tokens
                  </button>
                </div>
              </div>
            </div>

            <!-- Tab 1: Account -->
            <div class="citruss-col-12 settings-tab-section" id="tab-account" style="display: block;">
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
            <div class="citruss-col-12 settings-tab-section" id="tab-security" style="display: none;">
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
            <div class="citruss-col-12 settings-tab-section" id="tab-integrations" style="display: none;">
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
  `;
};

// STORY 7: Standalone Sign In Page Template
export const LoginPage = () => {
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
    <div style="min-height: 100vh; display: flex; align-items: center; justify-content: center; background: linear-gradient(135deg, #0b0f19 0%, #060913 100%); padding: 20px; font-family: 'Outfit', sans-serif;">
      
      <!-- Center Login Card -->
      <div class="citruss-card" style="width: 100%; max-width: 420px; padding: 32px; box-shadow: 0 24px 64px rgba(0,0,0,0.5); border:1px solid var(--citruss-glass-border); background:rgba(15,22,42,0.65); backdrop-filter:blur(16px);">
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

// STORY 8: Standalone Sign Up Page Template
export const RegisterPage = () => {
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
    <div style="min-height: 100vh; display: flex; align-items: center; justify-content: center; background: linear-gradient(135deg, #0b0f19 0%, #060913 100%); padding: 20px; font-family: 'Outfit', sans-serif;">
      
      <!-- Center Register Card -->
      <div class="citruss-card" style="width: 100%; max-width: 460px; padding: 32px; box-shadow: 0 24px 64px rgba(0,0,0,0.5); border:1px solid var(--citruss-glass-border); background:rgba(15,22,42,0.65); backdrop-filter:blur(16px);">
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

// Map navigation click events dynamically inside Storybook preview to allow SPA feel
if (typeof window !== 'undefined') {
  document.addEventListener('click', (e) => {
    const navLink = e.target.closest('[data-nav-target]');
    if (!navLink) return;
    
    e.preventDefault();
    const targetStory = navLink.getAttribute('data-nav-target');
    
    // Simulate real-time SPA routing: Show standard Toast
    window.CitruSS.toast({
      title: 'Routing Action',
      message: `Loading workspace segment: ${targetStory.toUpperCase()}`,
      type: 'info'
    });

    // Handle Storybook left sidebar selection synchronization
    const allLinks = document.querySelectorAll(`[data-nav-target]`);
    allLinks.forEach(lnk => lnk.classList.remove('active'));
    
    const matchingLinks = document.querySelectorAll(`[data-nav-target="${targetStory}"]`);
    matchingLinks.forEach(lnk => lnk.classList.add('active'));
  });
}
