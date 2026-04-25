import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import proxyConfig from './proxy.config'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: proxyConfig
  },
  build: {
    outDir: "../src/main/resources/static",
    emptyOutDir: true
  }
})
