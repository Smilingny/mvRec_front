import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '/@': path.resolve(__dirname, 'src') 
    }
  },
  server: {//配置代理
    host: '0.0.0.0',
    port: 8087,
    // 是否开启 https
    https: false,
    proxy: {
      "/api": {
        target: "http://localhost:8088",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
})
