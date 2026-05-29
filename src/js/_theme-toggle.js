/**
 * CitruSS UI — Theme Toggle Component
 * Manages light/dark mode transitions, state persistence, and UI synchronization.
 * Truncgil Technology © 2026
 */

export class CitruSSThemeToggle {
  constructor(element) {
    if (!element) return;
    this.element = element;
    this.init();
  }

  init() {
    this.buttons = {
      light: this.element.querySelector('[data-theme-value="light"]'),
      dark: this.element.querySelector('[data-theme-value="dark"]')
    };

    // Bind event listeners
    if (this.buttons.light) {
      this.buttons.light.addEventListener('click', () => this.setTheme('light'));
    }
    if (this.buttons.dark) {
      this.buttons.dark.addEventListener('click', () => this.setTheme('dark'));
    }

    // Sync UI with current theme
    const currentTheme = CitruSSThemeToggle.getCurrentTheme();
    this.updateUI(currentTheme);

    // Listen for storage changes in other tabs
    window.addEventListener('storage', (e) => {
      if (e.key === 'citruss-theme') {
        this.updateUI(e.newValue);
      }
    });
  }

  setTheme(theme) {
    CitruSSThemeToggle.applyTheme(theme);
    this.updateUI(theme);
    
    // Dispatch a custom event for developers to listen to theme changes
    const event = new CustomEvent('citruss-theme-change', { detail: { theme } });
    document.dispatchEvent(event);
  }

  updateUI(theme) {
    if (this.buttons.light && this.buttons.dark) {
      if (theme === 'light') {
        this.buttons.light.classList.add('active');
        this.buttons.dark.classList.remove('active');
      } else {
        this.buttons.dark.classList.add('active');
        this.buttons.light.classList.remove('active');
      }
    }
  }

  /**
   * Helper to get current active theme (from localStorage, DOM attribute, or system preference)
   */
  static getCurrentTheme() {
    if (typeof window === 'undefined') return 'dark';
    
    const saved = localStorage.getItem('citruss-theme');
    if (saved) return saved;

    const attr = document.documentElement.getAttribute('data-theme');
    if (attr) return attr;

    const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
    return prefersLight ? 'light' : 'dark';
  }

  /**
   * Applies the theme to the document and persists it
   */
  static applyTheme(theme) {
    if (typeof window === 'undefined') return;
    
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('citruss-theme', theme);

    // Also support smooth theme transitions by temporarily adding a class to body
    document.body.classList.add('citruss-theme-transitioning');
    setTimeout(() => {
      document.body.classList.remove('citruss-theme-transitioning');
    }, 400);
  }

  /**
   * Auto-initialize theme on load
   */
  static autoInit() {
    if (typeof window === 'undefined') return;

    // Apply the saved theme immediately to prevent flashing/FOUC
    const initialTheme = this.getCurrentTheme();
    this.applyTheme(initialTheme);

    // Initialize all theme toggle UI elements on DOMContentLoaded
    const initToggles = () => {
      document.querySelectorAll('.citruss-theme-toggle').forEach(el => {
        new CitruSSThemeToggle(el);
      });
    };

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initToggles);
    } else {
      initToggles();
    }
  }
}

// Auto init immediately when script runs to avoid flashing
CitruSSThemeToggle.autoInit();
