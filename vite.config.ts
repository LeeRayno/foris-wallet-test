import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // 允许访问mock文件夹
    fs: {
      allow: ['..'],
    },
  },
  // 解决生产环境路径问题
  base: './',
});
