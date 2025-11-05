import { sentryVitePlugin } from '@sentry/vite-plugin';
import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import envCompatible from 'vite-plugin-env-compatible';


// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    vue(),
    vueJsx(),
    envCompatible(),
    sentryVitePlugin({
      org: 'wearemimiccom',
      project: 'wealthlogix',
      telemetry: process.env.APP_ENV === 'staging' || process.env.APP_ENV === 'production',
    })
  ],
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
    },
    // Ensure SPA fallback for admin routes
    historyApiFallback: {
      rewrites: [
        { from: /^\/admin.*/, to: '/index.html' }
      ]
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
