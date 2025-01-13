import { sentryVitePlugin } from "@sentry/vite-plugin";
import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [vue(), vueJsx(), sentryVitePlugin({
    org: "wlx-7b",
    project: "wlx-ui"
  })],
  preview: {
    host: true,
    port: 8000
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    chunkSizeWarningLimit: 1600,
    sourcemap: true
  },
});