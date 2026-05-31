// Initialize interactive elements common across the dashboards
export const initDashboardInteractions = () => {
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

// Bind navigation click events dynamically inside Storybook preview to allow SPA feel
export const bindGlobalNavigation = () => {
  if (typeof window !== 'undefined' && !window.__citruss_nav_bound) {
    window.__citruss_nav_bound = true;
    
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

      // Map targets to story IDs to programmatically switch stories in Storybook
      const storyMap = {
        'admin': 'showcase-pro-dashboard--admin-panel-dashboard',
        'analytics': 'showcase-pro-dashboard--analytics-dashboard',
        'ecommerce': 'showcase-pro-dashboard--e-commerce-storefront',
        'kanban': 'showcase-pro-dashboard--kanban-project-management',
        'explorer': 'showcase-pro-dashboard--cloud-explorer',
        'login': 'showcase-pro-dashboard--login-page',
        'register': 'showcase-pro-dashboard--register-page',
        'settings': 'showcase-pro-dashboard--user-settings',
        'tabbed-settings': 'showcase-pro-dashboard--tabbed-settings'
      };

      const storyId = storyMap[targetStory];
      if (storyId) {
        // 1. Direct preview API channel event (runs in iframe)
        if (window.__STORYBOOK_ADDONS_CHANNEL__) {
          window.__STORYBOOK_ADDONS_CHANNEL__.emit('setCurrentStory', { storyId });
        }
        
        // 2. Fallback postMessage to parent Storybook manager window
        if (window.parent) {
          window.parent.postMessage({
            type: 'storybook-channel',
            event: {
              type: 'setCurrentStory',
              args: [{ storyId }]
            }
          }, '*');
        }
      }
    });
  }
};
