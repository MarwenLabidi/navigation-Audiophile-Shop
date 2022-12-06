import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),federation({
    name: "navigationSubApp",
    filename: "remoteEntry.js",
    exposes: {
      './NavigationApp': './src/main',
    },
    shared: ["react", "react-dom"],
  })],

})
