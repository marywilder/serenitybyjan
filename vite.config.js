import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/serenitybyjan/",
  plugins: [react()],
  server: { // add this code
    proxy: {
      '/products': {
        target: 'http://localhost:5000',
        changeOrigin: true
      }
    }
  }
})
