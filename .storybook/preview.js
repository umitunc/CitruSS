import '../src/citruss.scss';
import '../src/js/index.js';

// Load Outfit and Material Symbols from Google Fonts dynamically in storybook
const fontLink = document.createElement('link');
fontLink.rel = 'stylesheet';
fontLink.href = 'https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap';
document.head.appendChild(fontLink);

// Load PrismJS theme (Tomorrow Night) and add dynamic highlight loop
if (typeof window !== 'undefined') {
  // Prism Theme Link
  const prismTheme = document.createElement('link');
  prismTheme.rel = 'stylesheet';
  prismTheme.href = 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-tomorrow.min.css';
  document.head.appendChild(prismTheme);

  // Prism JS Core
  const prismScript = document.createElement('script');
  prismScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js';
  prismScript.onload = () => {
    // Autoloader to dynamically load languages (html, javascript, bash, css etc.)
    const autoloader = document.createElement('script');
    autoloader.src = 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/plugins/autoloader/prism-autoloader.min.js';
    document.head.appendChild(autoloader);
  };
  document.head.appendChild(prismScript);

  // Add Custom CSS styling for Prism code blocks to integrate with CitruSS glassmorphism
  const customPrismStyle = document.createElement('style');
  customPrismStyle.innerHTML = `
    /* Premium Glassmorphic Code Block styling */
    pre[class*="language-"],
    code[class*="language-"] {
      font-family: 'Fira Code', 'Courier New', monospace !important;
      font-size: 0.85rem !important;
      text-shadow: none !important;
      background: transparent !important;
    }
    
    .citruss-code-wrapper {
      border: 1px solid var(--citruss-glass-border) !important;
      border-radius: 12px !important;
      background: rgba(9, 13, 26, 0.45) !important;
      backdrop-filter: blur(10px) !important;
      -webkit-backdrop-filter: blur(10px) !important;
      overflow: hidden !important;
      margin-top: 32px !important;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15) !important;
    }
    
    [data-theme="light"] .citruss-code-wrapper {
      background: rgba(255, 255, 255, 0.35) !important;
      border: 1px solid rgba(15, 23, 42, 0.12) !important;
    }

    .citruss-code-wrapper summary {
      padding: 12px 18px !important;
      cursor: pointer !important;
      color: var(--citruss-orange) !important;
      font-weight: 700 !important;
      font-size: 0.85rem !important;
      user-select: none !important;
      outline: none !important;
      background: rgba(255, 255, 255, 0.02) !important;
      transition: background 0.2s !important;
    }

    [data-theme="light"] .citruss-code-wrapper summary {
      color: #e25c00 !important; /* Higher contrast orange for light backgrounds */
      background: rgba(15, 23, 42, 0.02) !important;
    }

    .citruss-code-wrapper summary:hover {
      background: rgba(255, 255, 255, 0.05) !important;
    }

    [data-theme="light"] .citruss-code-wrapper summary:hover {
      background: rgba(15, 23, 42, 0.04) !important;
    }

    /* Inside wrapper holder container containing pre */
    .citruss-code-wrapper > div {
      padding: 0 !important;
      border-top: 1px solid var(--citruss-glass-border) !important;
      background: #090d16 !important; /* ALWAYS SOLID DARK FOR CONTRAST LEGIBILITY */
    }

    [data-theme="light"] .citruss-code-wrapper > div {
      border-top: 1px solid rgba(15, 23, 42, 0.12) !important;
    }

    .citruss-code-wrapper pre,
    .citruss-getstarted-container pre {
      background: #090d16 !important;
      backdrop-filter: blur(12px);
      border: none !important;
      border-radius: 0 !important;
      box-shadow: inset 0 0 20px rgba(255, 107, 0, 0.02) !important;
      padding: 18px !important;
      position: relative;
      overflow: hidden;
      margin: 0 !important;
    }
    
    .citruss-getstarted-container pre {
      border: 1px solid var(--citruss-glass-border) !important;
      border-radius: 12px !important;
      box-shadow: inset 0 0 20px rgba(255, 107, 0, 0.05), 0 8px 32px rgba(0, 0, 0, 0.3) !important;
    }
    
    /* Neon glow top accent border */
    .citruss-code-wrapper pre::before,
    .citruss-getstarted-container pre::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 2px;
      background: linear-gradient(90deg, var(--citruss-orange), var(--citruss-lime));
      opacity: 0.8;
    }

    /* Prism Token Overrides with Vibrant CitruSS Palette */
    .token.comment,
    .token.prolog,
    .token.doctype,
    .token.cdata {
      color: #6a7796 !important;
      font-style: italic;
    }
    .token.punctuation {
      color: #a3a9b6 !important;
    }
    .token.property,
    .token.tag,
    .token.boolean,
    .token.number,
    .token.constant,
    .token.symbol,
    .token.deleted {
      color: var(--citruss-orange) !important;
      font-weight: 600;
    }
    .token.selector,
    .token.attr-name,
    .token.string,
    .token.char,
    .token.builtin,
    .token.inserted {
      color: var(--citruss-lime) !important;
    }
    .token.operator,
    .token.entity,
    .token.url,
    .language-css .token.string,
    .style .token.string {
      color: #38bdf8 !important;
    }
    .token.atrule,
    .token.attr-value,
    .token.keyword {
      color: #38bdf8 !important;
      font-weight: 600;
    }
    .token.function,
    .token.class-name {
      color: #fbbf24 !important;
    }
    .token.regex,
    .token.important,
    .token.variable {
      color: #ec4899 !important;
    }
  `;
  document.head.appendChild(customPrismStyle);

  // Periodically highlight code blocks (handles dynamically changing story tabs, details toggle)
  setInterval(() => {
    if (!window.Prism) return;
    
    // Select all code tags in the document
    const codeBlocks = document.querySelectorAll('pre code, .citruss-code-wrapper code, .citruss-getstarted-container pre code');
    
    codeBlocks.forEach((codeEl) => {
      // If already highlighted, skip
      if (codeEl.classList.contains('prism-highlighted')) return;

      const codeText = codeEl.textContent || '';
      
      // Auto-detect language if not explicitly set
      let langClass = '';
      codeEl.classList.forEach(cls => {
        if (cls.startsWith('language-')) {
          langClass = cls;
        }
      });

      if (!langClass) {
        // Try to find context based on title or content
        const parentText = codeEl.closest('div')?.querySelector('h5')?.textContent || '';
        if (parentText.toLowerCase().includes('javascript') || parentText.toLowerCase().includes('js')) {
          langClass = 'language-javascript';
        } else if (parentText.toLowerCase().includes('html')) {
          langClass = 'language-html';
        } else if (codeText.includes('npm install') || codeText.includes('npx')) {
          langClass = 'language-bash';
        } else if (codeText.trim().startsWith('<') || codeText.includes('</div>') || codeText.includes('class=')) {
          langClass = 'language-html';
        } else if (codeText.includes('import ') || codeText.includes('const ') || codeText.includes('function ')) {
          langClass = 'language-javascript';
        } else {
          langClass = 'language-html'; // Default to HTML for ui examples
        }
        
        codeEl.classList.add(langClass);
      }

      // Add parent pre class as well for Prism styles
      const preEl = codeEl.closest('pre');
      if (preEl && !preEl.classList.contains(langClass)) {
        preEl.classList.add(langClass);
      }

      // Apply highlighting
      window.Prism.highlightElement(codeEl);
      codeEl.classList.add('prism-highlighted');
    });
  }, 400);

  // Inject Premium Floating Background Selector Widget
  const injectBgSelector = () => {
    if (document.getElementById('citruss-bg-controller-root')) {
      // Re-apply background periodically in case story container refreshes
      const selectEl = document.getElementById('citruss-global-bg-select');
      if (selectEl) {
        applyBackground(selectEl.value);
      }
      return;
    }

    const root = document.createElement('div');
    root.id = 'citruss-bg-controller-root';
    root.style.cssText = 'position: fixed; bottom: 20px; right: 20px; z-index: 999999; font-family: "Outfit", sans-serif;';
    
    root.innerHTML = `
      <div class="citruss-floating-bg-selector glass-dark" style="padding: 10px 16px; border-radius: 24px; display: flex; align-items: center; gap: 12px; pointer-events: auto; box-shadow: 0 12px 32px rgba(0,0,0,0.5), inset 0 1.5px 0 rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.08); transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);">
        <span class="citruss-icon" style="color: var(--citruss-tangerine); font-size: 18px; display: flex; align-items: center; user-select: none;">wallpaper</span>
        <span style="font-size: 0.75rem; font-weight: 800; color: #fff; text-transform: uppercase; letter-spacing: 0.05em; display: inline-block; user-select: none;">BG:</span>
        <select id="citruss-global-bg-select" style="background: rgba(0,0,0,0.5); border: 1px solid rgba(255,255,255,0.15); border-radius: 8px; color: #fff; font-size: 0.75rem; padding: 4px 10px; outline: none; font-family: inherit; cursor: pointer; min-width: 140px; font-weight: 600; -webkit-backdrop-filter: blur(8px); backdrop-filter: blur(8px);">
          <optgroup label="Solid Colors" style="background: #090d16;">
            <option value="solid-dark">Midnight Black</option>
            <option value="solid-purple">Deep Purple</option>
            <option value="solid-light">Soft Slate (Light)</option>
          </optgroup>
          <optgroup label="Mesh Gradients" style="background: #090d16;">
            <option value="mesh-citrus">Citrus Neon Mesh</option>
            <option value="mesh-aurora">Cosmic Aurora Mesh</option>
            <option value="mesh-amber">Sunset Amber Mesh</option>
          </optgroup>
          <optgroup label="Premium Images" style="background: #090d16;">
            <option value="img-citrus-neon">Citrus Neon</option>
            <option value="img-citrus-light">Citrus Light</option>
            <option value="img-cyberpunk-dark">Cyberpunk Dark</option>
            <option value="img-cyberpunk-light">Cyberpunk Light</option>
            <option value="img-glassy">Glassy Specular</option>
            <option value="img-nebula">Cosmic Nebula</option>
            <option value="img-nordic">Nordic Frost</option>
            <option value="img-oceanic-dark">Deep Oceanic</option>
            <option value="img-oceanic-light">Oceanic Light</option>
            <option value="img-fluid">Abstract Fluid</option>
          </optgroup>
        </select>
      </div>
    `;

    document.body.appendChild(root);

    const selectEl = document.getElementById('citruss-global-bg-select');
    if (!selectEl) return;

    selectEl.onchange = (e) => {
      const val = e.target.value;
      localStorage.setItem('citruss-storybook-bg', val);
      applyBackground(val);
    };

    // Load saved background
    const savedBg = localStorage.getItem('citruss-storybook-bg') || 'mesh-citrus';
    selectEl.value = savedBg;
    applyBackground(savedBg);
  };

  const applyBackground = (value) => {
    let bgStyle = '';
    if (value === 'solid-dark') {
      bgStyle = '#060813';
    } else if (value === 'solid-purple') {
      bgStyle = '#0d0b21';
    } else if (value === 'solid-light') {
      bgStyle = '#f3f4f6';
    } else if (value === 'mesh-citrus') {
      bgStyle = 'radial-gradient(circle at 10% 20%, rgba(255, 107, 0, 0.15) 0%, transparent 45%), radial-gradient(circle at 90% 80%, rgba(29, 209, 161, 0.15) 0%, transparent 45%), #060813';
    } else if (value === 'mesh-aurora') {
      bgStyle = 'radial-gradient(circle at 80% 20%, rgba(129, 140, 248, 0.18) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(192, 132, 252, 0.18) 0%, transparent 50%), #030712';
    } else if (value === 'mesh-amber') {
      bgStyle = 'radial-gradient(circle at 10% 20%, rgba(254, 202, 87, 0.4) 0%, transparent 50%), radial-gradient(circle at 90% 80%, rgba(255, 159, 67, 0.3) 0%, transparent 50%), #f8fafc';
    } else if (value === 'img-citrus-neon') {
      bgStyle = 'url("/images/backgrounds/citruss_citrus_bg_1780097443623.png") no-repeat center center fixed';
    } else if (value === 'img-citrus-light') {
      bgStyle = 'url("/images/backgrounds/citruss_citrus_light_1780097742029.png") no-repeat center center fixed';
    } else if (value === 'img-cyberpunk-dark') {
      bgStyle = 'url("/images/backgrounds/citruss_cyberpunk_bg_1780097474569.png") no-repeat center center fixed';
    } else if (value === 'img-cyberpunk-light') {
      bgStyle = 'url("/images/backgrounds/citruss_cyberpunk_light_1780097774317.png") no-repeat center center fixed';
    } else if (value === 'img-glassy') {
      bgStyle = 'url("/images/backgrounds/citruss_glassy_bg_1780097594392.png") no-repeat center center fixed';
    } else if (value === 'img-nebula') {
      bgStyle = 'url("/images/backgrounds/citruss_nebula_bg_1780097579999.png") no-repeat center center fixed';
    } else if (value === 'img-nordic') {
      bgStyle = 'url("/images/backgrounds/citruss_nordic_bg_1780097612851.png") no-repeat center center fixed';
    } else if (value === 'img-oceanic-dark') {
      bgStyle = 'url("/images/backgrounds/citruss_oceanic_bg_1780097461326.png") no-repeat center center fixed';
    } else if (value === 'img-oceanic-light') {
      bgStyle = 'url("/images/backgrounds/citruss_oceanic_light_1780097758490.png") no-repeat center center fixed';
    } else if (value === 'img-fluid') {
      bgStyle = 'url("/images/backgrounds/media__1780097562130.png") no-repeat center center fixed';
    }

    // Apply to body and storybook root
    const body = document.body;
    const root = document.getElementById('storybook-root');
    const docsRoot = document.querySelector('.docs-story');
    
    const elements = [body, root, docsRoot];
    elements.forEach(el => {
      if (el) {
        el.style.setProperty('background', bgStyle, 'important');
        el.style.setProperty('background-size', 'cover', 'important');
        el.style.setProperty('background-attachment', 'fixed', 'important');
      }
    });

    // Automatically sync theme mode (light/dark) based on selection
    const isLightBg = value === 'solid-light' || value === 'mesh-amber' || value.includes('light');
    const newTheme = isLightBg ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    window.localStorage.setItem('citruss-theme', newTheme);
    
    const themeBtn = document.getElementById('theme-toggle-btn');
    if (themeBtn) {
      themeBtn.textContent = newTheme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode';
    }
  };

  // Run on load and periodically in case Storybook reinstantiates the body/shell
  if (document.readyState === 'complete') {
    injectBgSelector();
  } else {
    window.addEventListener('load', injectBgSelector);
  }
  setInterval(injectBgSelector, 1000);
}

/** @type { import('@storybook/html-vite').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      options: {
        dark: { name: 'dark', value: '#060913' },
        light: { name: 'light', value: '#f4f6fa' }
      }
    }
  },

  decorators: [
    (story, context) => {
      const bg = context.globals.backgrounds;
      const theme = bg?.value === '#f4f6fa' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', theme);
      
      // Sync theme with parent window so that Docs view and Storybook manager shells change themes together
      if (typeof window !== 'undefined') {
        window.localStorage.setItem('citruss-theme', theme);
        if (window.parent && window.parent.document) {
          window.parent.document.documentElement.setAttribute('data-theme', theme);
        }
      }
      return story();
    }
  ],

  initialGlobals: {
    backgrounds: {
      value: 'dark'
    }
  }
};

export default preview;

