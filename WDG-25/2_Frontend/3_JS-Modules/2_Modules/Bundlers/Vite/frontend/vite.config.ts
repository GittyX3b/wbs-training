import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  root: "./",
  build: {
    outDir: "../backend/dist",
    emptyOutDir: true, // also necessary
  },
  plugins: [tailwindcss()],
});
