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
    
    .citruss-code-wrapper pre,
    .citruss-getstarted-container pre {
      background: rgba(10, 15, 30, 0.7) !important;
      backdrop-filter: blur(12px);
      border: 1px solid var(--citruss-glass-border) !important;
      border-radius: 12px !important;
      box-shadow: inset 0 0 20px rgba(255, 107, 0, 0.05), 0 8px 32px rgba(0, 0, 0, 0.3) !important;
      padding: 18px !important;
      position: relative;
      overflow: hidden;
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

