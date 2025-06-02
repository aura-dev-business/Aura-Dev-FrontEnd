import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // This makes the dev server accessible via your local IP
    port: 5173, // Optional: set a fixed port if needed
  },
})
  