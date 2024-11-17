import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    open: true, // Откроет проект в браузере
  },
  build: {
    target: 'esnext',
  },
});
