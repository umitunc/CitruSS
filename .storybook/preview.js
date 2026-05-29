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
};

export default preview;
