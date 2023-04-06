import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import dts from "vite-plugin-dts";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts()],
  build: {
    lib: {
      // https://dev.to/nicolaserny/create-a-react-component-library-with-vite-and-typescript-1ih9
      entry: ["src/index.ts", "src/elements/index.ts"],
      name: "mui-lib",
      fileName: "index",
      formats: ["es"],
    },
    rollupOptions: {
      external: ["react", "react-dom"],
    },
  },
});
