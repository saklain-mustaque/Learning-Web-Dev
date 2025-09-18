import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/Learning-Web-Dev/React/background-changer/",
  plugins: [react()],
})
