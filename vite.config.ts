import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import manifest from './manifest.json';
import WindiCSS from 'vite-plugin-windicss';

import path from 'path';
const theme = process.env.THEME;
const isProd = process.env.NODE_ENV === 'production';

if (isProd && !theme) throw new Error('No theme env');

// https://vitejs.dev/config/
export default defineConfig({
  // base: './',
  plugins: [vue(), WindiCSS()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, `src/lib/${theme}.ts`),
      name: `themes.${manifest.namespace}-${theme}`,
      formats: ['umd']
    },

    outDir: `./dist/${theme}/`,
    emptyOutDir: true,
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue', 'vue-router'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue',
          router: 'VueRouter'
        }
      }
    }
  }
});
