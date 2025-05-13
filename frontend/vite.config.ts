import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  base: '/',
  
  build: {
    outDir: './dist/',
    emptyOutDir: true,
    rollupOptions: {
      input: path.resolve(__dirname, 'index.html')
    }
  },

  server: {
    proxy: {
      '/api': 'http://localhost:3000',
    }
  }
});
