import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './src/tests',
  use: {
    headless: false, // Cambia a false si quieres ver la UI
    baseURL: 'http://localhost:5173', // Ajusta según tu Vite app
  },
});
