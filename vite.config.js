import { defineConfig } from 'vite';
import { portfolioHtml } from './src/static-html.js';

export default defineConfig({
  plugins: [portfolioHtml()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: './index.html'
      }
    }
  },
  publicDir: 'public'
});
