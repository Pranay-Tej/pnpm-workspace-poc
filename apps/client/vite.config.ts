import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { reactClickToComponent } from "vite-plugin-react-click-to-component";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), reactClickToComponent()],
})
