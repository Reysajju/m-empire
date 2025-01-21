import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  // Add server configuration for SPA routing
  server: {
    historyApiFallback: true,
  },
  // Add build configuration for SPA routing
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
});