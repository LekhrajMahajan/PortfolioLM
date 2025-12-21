import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/PortfolioLM/',
  build: {
    rollupOptions: {
      onwarn(warning, warn) {
        if (warning.code === 'EVAL' && warning.id.includes('lottie-web')) {
          return;
        }
        warn(warning);
      },
    },
  },
})
