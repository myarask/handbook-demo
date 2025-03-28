import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { configDefaults } from "vitest/config";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "build",
  },
  server: {
    open: true,
    port: 3000,
  },
  test: {
    globals: true, // Enables global test functions
    setupFiles: "./setupTests.js", // Path to the setup file
    environment: "jsdom", // Needed for React projects
    exclude: [...configDefaults.exclude, "node_modules/"],
    coverage: {
      exclude: ["**/*.constants.ts"], // Exclude all files ending with .constants.ts
    },
  },
});
