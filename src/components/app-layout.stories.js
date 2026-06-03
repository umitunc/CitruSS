import { useEffect } from 'storybook/preview-api';

export default {
  title: 'Showcase/App Screen Layout',
  parameters: {
    layout: 'fullscreen',
  },
};

export const DefaultAppLayout = () => {
  useEffect(() => {
    // Basic theme toggle interaction support
    const themeBtn = document.getElementById('layout-theme-toggle');
    if (themeBtn) {
      themeBtn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
        const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', nextTheme);
        themeBtn.innerText = nextTheme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode';
      });
    }

    // Glass opacity slider interaction
    const slider = document.getElementById('layout-opacity-slider');
    const label = document.getElementById('layout-opacity-value');
    const classVal = document.getElementById('opacity-class-value');
    const appLayout = document.querySelector('.citruss-app-layout');

    if (slider && appLayout) {
      const updateOpacity = (val) => {
        appLayout.style.setProperty('--citruss-glass-opacity', `${val}%`);
        if (label) label.innerText = `${val}%`;
        if (classVal) classVal.innerText = `${val}%`;
      };

      // Set initial value from ComputedStyle or default to 35
      const rootStyles = getComputedStyle(document.documentElement);
      const initialOpacityStr = rootStyles.getPropertyValue('--citruss-glass-opacity') || '35%';
      const initialVal = parseFloat(initialOpacityStr) || 35;
      slider.value = initialVal;
      updateOpacity(initialVal);

      slider.addEventListener('input', (e) => {
        updateOpacity(e.target.value);
      });
    }
  }, []);

  return `
    <div class="citruss-app-layout">
      <!-- Fixed Header -->
      <header class="layout-header">
        <nav class="citruss-navbar">
          <a href="#" class="citruss-logo-area">
            <svg class="citruss-logo-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="display: block;">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor"/>
              <path d="M2 17L12 22L22 17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M2 12L12 17L22 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            CitruSS <span>App Frame</span>
          </a>
          <div class="citruss-d-flex citruss-align-items-center citruss-gap-md">
            <!-- Glass Opacity Slider -->
            <div class="citruss-d-flex citruss-align-items-center citruss-gap-sm" style="background: var(--citruss-glass-bg-hover); padding: 4px 12px; border-radius: 999px; border: 1px solid var(--citruss-glass-border);">
              <span class="citruss-icon" style="font-size: 16px; color: var(--citruss-tangerine);">opacity</span>
              <span style="font-size: 0.75rem; font-weight: 600; min-width: 32px; text-align: center;" id="layout-opacity-value">35%</span>
              <input type="range" id="layout-opacity-slider" min="0" max="100" value="35" style="width: 100px; accent-color: var(--citruss-orange); cursor: pointer; height: 4px; padding: 0; margin: 0;">
            </div>
            <button class="citruss-btn btn-sm" id="layout-theme-toggle">☀️ Light Mode</button>
            <button class="citruss-btn btn-sm btn-primary">
              <span class="citruss-icon" style="margin-right: 4px;">widgets</span>
              <span>Dashboard</span>
            </button>
          </div>
        </nav>
      </header>

      <!-- Content wrapper -->
      <div class="layout-content-wrapper">
        <!-- Scrollable Content Area -->
        <main class="layout-content">
          <div style="max-width: 1000px; margin: 0 auto; display: flex; flex-direction: column; gap: 24px;">
            <div class="citruss-card">
              <div class="card-header">
                <h3 class="card-title">Viewport-Bound App Shell</h3>
              </div>
              <div class="card-content">
                <p>This layout uses the <code>.citruss-app-layout</code> class to prevent browser-level scrolling. The header and footer are fixed in place, while the main content area has its own independent scrolling context.</p>
                <p>Resize your browser window or Storybook panel to see how the layout optimizes space. The content area scrollbar is styled to match the dark/light modes.</p>
                
                <div style="margin-top: 20px; padding: 16px; background: rgba(0, 0, 0, 0.2); border-radius: 8px; border: 1px solid var(--citruss-glass-border);">
                  <div style="font-weight: 700; font-size: 0.9rem; color: var(--citruss-tangerine); margin-bottom: 8px; display: flex; align-items: center; gap: 6px;">
                    <span class="citruss-icon">code</span> Active Glassmorphism Configuration
                  </div>
                  <pre style="margin: 0; font-family: monospace; font-size: 0.85rem; color: var(--citruss-text-main);"><span style="color: var(--citruss-lime);">.citruss-app-layout</span> {
  <span style="color: var(--citruss-info);">--citruss-glass-opacity</span>: <span id="opacity-class-value" style="color: var(--citruss-orange); font-weight: bold;">35%</span>;
}</pre>
                </div>
              </div>
            </div>

            <!-- Generate extra cards to demonstrate scroll behavior -->
            ${Array.from({ length: 8 }).map((_, i) => `
              <div class="citruss-card">
                <div class="card-header">
                  <h4 class="card-title">Scrollable Content Block #${i + 1}</h4>
                </div>
                <div class="card-content">
                  <p>This is a demonstration block to fill the vertical height and trigger the scrollbar. Under the CitruSS App Screen Layout design guidelines, scrolling belongs within scroll-optimized containers rather than the browser window root.</p>
                </div>
              </div>
            `).join('')}
          </div>
        </main>
      </div>

      <!-- Fixed Footer -->
      <footer class="layout-footer">
        <div class="citruss-footer">
          <div class="footer-left" style="font-size: 0.85rem; color: var(--citruss-text-muted);">
            <span>© 2026 Truncgil Technology</span>
            <span class="citruss-badge badge-success" style="font-size: 0.75rem;">Optimized</span>
          </div>
          
          <div class="footer-center">
            <!-- Inline controls: search input and select dropdown -->
            <input type="text" class="citruss-input" placeholder="Quick search..." style="width: 150px; padding: 4px 8px; font-size: 0.8rem; height: auto;" />
            <select class="citruss-select" style="padding: 4px 8px; font-size: 0.8rem; height: auto; border-radius: 6px;">
              <option>v1.0.0 (Latest)</option>
              <option>v0.9.0 (Beta)</option>
            </select>
          </div>

          <div class="footer-right">
            <button class="citruss-btn btn-sm btn-icon btn-circle" style="width: 28px; height: 28px; min-height: auto;"><span class="citruss-icon" style="font-size: 14px;">refresh</span></button>
            <button class="citruss-btn btn-sm" style="padding: 4px 8px; font-size: 0.8rem; min-height: auto;">Support</button>
          </div>
        </div>
      </footer>
    </div>
  `;
};
