import { fileURLToPath } from 'node:url';

/** @type { import('@storybook/html-vite').StorybookConfig } */
const config = {
  stories: [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  staticDirs: ['../docs'],
  addons: [
    "@storybook/addon-links",
    "@chromatic-com/storybook",
    "@storybook/addon-docs"
  ],
  framework: {
    name: "@storybook/html-vite",
    options: {},
  },
  async viteFinal(config) {
    config.resolve = config.resolve || {};
    config.resolve.alias = config.resolve.alias || {};
    
    if (Array.isArray(config.resolve.alias)) {
      config.resolve.alias.push({
        find: 'storybook/internal/theming',
        replacement: 'storybook/theming'
      });
    } else {
      config.resolve.alias['storybook/internal/theming'] = 'storybook/theming';
    }

    config.plugins = config.plugins || [];
    config.plugins.push({
      name: 'resolve-file-url-imports',
      enforce: 'pre',
      resolveId(source) {
        if (source.startsWith('file://')) {
          return fileURLToPath(source);
        }
      }
    });
    return config;
  }
};
export default config;
