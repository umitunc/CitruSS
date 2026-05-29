import { CitruSSThemeToggle } from '../js/_theme-toggle';

export default {
  title: 'Interactive/Theme Toggle',
  parameters: {
    layout: 'centered',
  },
};

export const Default = {
  render: () => {
    // Generate unique ID for binding
    const toggleId = 'citruss-toggle-demo';

    setTimeout(() => {
      const el = document.getElementById(toggleId);
      if (el) {
        new CitruSSThemeToggle(el);
      }
    }, 100);

    return `
      <div style="text-align: center; font-family: var(--citruss-font-display); padding: 40px;">
        <h3 style="color: var(--citruss-text-main); margin-bottom: 24px; font-weight: 800;">
          Interactive Glassmorphic Theme Switcher
        </h3>
        <p style="color: var(--citruss-text-muted); max-width: 400px; margin: 0 auto 30px auto; font-size: 0.95rem;">
          An ultra-premium, zero-dependency theme toggle control that handles saving user choices, document attribute switching, and smooth CSS transitions.
        </p>

        <!-- Premium CitruSS Theme Toggle Component -->
        <div class="citruss-theme-toggle" id="${toggleId}">
          <button class="toggle-btn" data-theme-value="light" aria-label="Switch to Light Theme">
            <svg viewBox="0 0 24 24">
              <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0s-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0s-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41s-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41s-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"/>
            </svg>
            Light
          </button>
          <button class="toggle-btn" data-theme-value="dark" aria-label="Switch to Dark Theme">
            <svg viewBox="0 0 24 24">
              <path d="M12.3 22h-.1c-5.5 0-10-4.5-10-10 0-4.8 3.5-8.9 8.2-9.8.6-.1 1.2.3 1.3.9.1.6-.2 1.2-.8 1.4-3.1 1.1-5.3 4-5.3 7.5 0 4.4 3.6 8 8 8 3.5 0 6.4-2.2 7.5-5.3.2-.6.8-.9 1.4-.8.6.1 1 .7.9 1.3C21.9 17.5 17.5 22 12.3 22z"/>
            </svg>
            Dark
          </button>
        </div>
        
        <div style="margin-top: 40px; padding: 20px; background: var(--citruss-glass-bg); border: 1px solid var(--citruss-glass-border); border-radius: 12px; max-width: 480px; margin-left: auto; margin-right: auto;">
          <h4 style="color: var(--citruss-text-main); margin-bottom: 8px; font-weight: 700; font-size: 0.95rem;">
            Integration Code
          </h4>
          <pre style="text-align: left; padding: 12px; background: rgb(0 0 0 / 20%); border-radius: 6px; overflow-x: auto; margin: 0; font-size: 0.8rem; border: 1px solid var(--citruss-glass-border);">
            <code style="color: var(--citruss-tangerine); font-family: monospace;">
&lt;div class="citruss-theme-toggle" id="theme-switcher"&gt;
  &lt;button class="toggle-btn" data-theme-value="light"&gt;Light&lt;/button&gt;
  &lt;button class="toggle-btn" data-theme-value="dark"&gt;Dark&lt;/button&gt;
&lt;/div&gt;

&lt;script&gt;
  // Easily bind JavaScript transition logic
  new CitruSS.ThemeToggle(document.getElementById('theme-switcher'));
&lt;/script&gt;
            </code>
          </pre>
        </div>
      </div>
    `;
  },
};
