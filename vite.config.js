import { defineConfig } from 'vite';
import { resolve } from 'path';
import wasm from 'vite-plugin-wasm';
import topLevelAwait from 'vite-plugin-top-level-await';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  root: 'src',
  publicDir: '../static',
  base: './',
  plugins: [wasm(), topLevelAwait(), tailwindcss()],
  build: {
    // Put dist next to the project root (not under src)
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'src/index.html'),
        view3d: resolve(__dirname, 'src/3DView.html'), // or 'src/3dview.html'
      },
    },
  },
});
