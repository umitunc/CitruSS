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
      <footer class="layout-footer" style="background: rgba(0, 0, 0, 0.2); border-top: 1px solid var(--citruss-glass-border); padding: 12px var(--citruss-spacing-lg);">
        <div class="citruss-d-flex citruss-justify-content-between citruss-align-items-center" style="font-size: 0.85rem; color: var(--citruss-text-muted);">
          <div>© 2026 Truncgil Technology. All rights reserved.</div>
          <div>Status: <span class="citruss-badge badge-success" style="font-size: 0.75rem; margin: 0 4px;">Optimized</span></div>
        </div>
      </footer>
    </div>
  `;
};
