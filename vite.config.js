import { defineConfig } from 'vite';
import { resolve } from 'path';
import { readFileSync, writeFileSync } from 'fs';

const pkg = JSON.parse(readFileSync(new URL('./package.json', import.meta.url), 'utf-8'));

function bannerPlugin() {
  return {
    name: 'banner-plugin',
    writeBundle(options, bundle) {
      const buildDate = new Date().toISOString();
      const banner = `/*!
 * CitruSS UI Kit v${pkg.version}
 * Built on: ${buildDate}
 * (c) ${new Date().getFullYear()} Truncgil Technology
 * Released under the MIT License.
 */\n`;

      for (const fileName of Object.keys(bundle)) {
        if (fileName.endsWith('.js') || fileName.endsWith('.css')) {
          const filePath = resolve(options.dir || 'dist', fileName);
          try {
            const content = readFileSync(filePath, 'utf-8');
            if (!content.startsWith('/*!')) {
              writeFileSync(filePath, banner + content);
            }
          } catch (err) {
            console.error(`Failed to write banner to ${fileName}:`, err);
          }
        }
      }
    }
  };
}

export default defineConfig({
  plugins: [bannerPlugin()],
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

