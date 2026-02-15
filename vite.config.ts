/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import type { UserConfig } from "vite"; // 👈 type-only import


import type { UserConfig as VitestConfig } from "vitest";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./src/setupTests.ts",
  },
} as UserConfig & { test?: VitestConfig });
