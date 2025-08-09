import { sentryVitePlugin } from '@sentry/vite-plugin';
import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import envCompatible from 'vite-plugin-env-compatible';

console.log('loading vite.config.js');

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    vue(),
    vueJsx(),
    envCompatible(),
    sentryVitePlugin({
      org: 'wlx-7b',
      project: 'wlx-ui'
    })
  ],
  define: Object.keys(process.env) // think we can eliminate `define` call entirely once process env is fully adopted?
    .filter((key) => key.startsWith('VITE_'))
    .reduce((env, key) => {
      env[`process.env.${key}`] = JSON.stringify(process.env[key]);
      console.log(`Added key ${key}`);
      return env;
    }, {}),
  server: {
    host: true,
    port: 8000,
    proxy: {
      // Proxy /api requests to API server in development
      '/api': {
        target: process.env.VITE_API_BASE_URL || 'http://localhost:8001',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  preview: {
    host: true,
    port: 8000
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    chunkSizeWarningLimit: 1600,
    sourcemap: true
  }
});
