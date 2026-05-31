export const getSidebarHTML = (activePage) => {
  const categories = [
    {
      title: 'Dashboards',
      links: [
        { id: 'admin', label: 'System Overview', icon: 'dashboard' },
        { id: 'analytics', label: 'Telemetry & Analytics', icon: 'bar_chart' },
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
