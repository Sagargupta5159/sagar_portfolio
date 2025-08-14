import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // remove if not using React

export default defineConfig({
  plugins: [react()],
  base: '/', // important for Vercel SPA routing
  build: {
    outDir: 'dist',
    sourcemap: false, // optional, reduces build size
  },
  server: {
    port: 5173,
  },
})
