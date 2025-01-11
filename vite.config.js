import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/my_portfolio/',  // Ensure assets are loaded from the root for GitHub Pages
  build: {
    outDir: 'docs',  // Change the output directory to 'docs' for GitHub Pages
  },
  server: {
    open: "/",
    watch: {
      usePolling: true,
    },
  },
});