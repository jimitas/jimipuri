import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: './index.js',
      output: {
        entryFileNames: 'main.js',
        chunkFileNames: 'chunk-[name].js',
        assetFileNames: 'assets/[name].[ext]'
      }
    },
    outDir: 'dist',
    emptyOutDir: true
  },
  base: './'
})