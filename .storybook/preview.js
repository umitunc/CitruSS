import '../src/citruss.scss';
import '../src/js/index.js';

// Load Outfit font from Google Fonts dynamically in storybook
const fontLink = document.createElement('link');
fontLink.rel = 'stylesheet';
fontLink.href = 'https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&display=swap';
document.head.appendChild(fontLink);

/** @type { import('@storybook/html').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#060913' },
        { name: 'light', value: '#f4f6fa' }
      ]
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
  ]
};

export default preview;
