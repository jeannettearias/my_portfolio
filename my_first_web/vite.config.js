import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'docs', // Change output directory to "docs"
    emptyOutDir: true, // Ensures the directory is cleared before building
  },
});

