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

  // Glass Opacity Sliders Binding
  const opacitySliders = [
    { slider: document.getElementById('glass-opacity-slider'), label: document.getElementById('glass-opacity-value') },
    { slider: document.getElementById('glass-opacity-slider-tab'), label: document.getElementById('glass-opacity-value-tab') }
  ];

  // Function to update the opacity value globally
  const updateGlassOpacity = (val) => {
    // Set custom property on document element so it acts as the base variables
    document.documentElement.style.setProperty('--citruss-glass-opacity', `${val}%`);
    
    // Sync all sliders and labels
    opacitySliders.forEach(item => {
      if (item.slider) item.slider.value = val;
      if (item.label) item.label.textContent = `${val}%`;
    });
  };

  // Get current opacity from root styles or default to 35
  const rootStyles = getComputedStyle(document.documentElement);
  const initialOpacityStr = rootStyles.getPropertyValue('--citruss-glass-opacity') || '35%';
  const initialOpacityVal = parseFloat(initialOpacityStr) || 35;

  opacitySliders.forEach(item => {
    if (item.slider) {
      item.slider.value = initialOpacityVal;
      if (item.label) item.label.textContent = `${initialOpacityVal}%`;
      
      item.slider.oninput = (e) => {
        updateGlassOpacity(e.target.value);
      };
    }
  });
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
