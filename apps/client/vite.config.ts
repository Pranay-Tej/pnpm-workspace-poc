import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { reactClickToComponent } from "vite-plugin-react-click-to-component";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), reactClickToComponent()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
