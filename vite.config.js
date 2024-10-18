import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Allows access from external IPs
    port: 5173, // Port number
    strictPort: true // Ensures the port won't change if 5173 is already in use
  },
})
