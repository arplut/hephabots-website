import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
// componentTagger removed — project migrated from Lovable

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // When deploying as a GitHub Pages project site (https://<owner>.github.io/hephabots-website/)
  // we need the build `base` to point to the repo path so assets resolve correctly.
  base: "/hephabots-website/",
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
