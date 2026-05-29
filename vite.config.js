import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
        silenceDeprecations: ['legacy-js-api', 'import', 'global-builtin']
      }
    }
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/js/index.js'),
      name: 'CitruSS',
      fileName: (format) => format === 'umd' ? 'citruss.min.js' : 'citruss.js',
      formats: ['es', 'umd']
    },
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith('.css')) {
            return 'citruss.css';
          }
          return assetInfo.name || '[name].[ext]';
        }
      }
    },
    cssMinify: true
  }
});
