import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Render için base yolunu ayarla
export default defineConfig({
  plugins: [react()],
  base: '/',
});