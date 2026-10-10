import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Pure marketing website configuration for Vercel deployment
export default defineConfig({
  plugins: [react()],
});
