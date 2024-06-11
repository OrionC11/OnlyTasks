import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ command, mode }) => {
  const isProduction = mode === "production";
  return {
    plugins: [react()],
    build: {
      outDir: "build",
    },
    server: {
      port: 3000,
      open: true,
      proxy: !isProduction
        ? {
            "/graphql": {
              target: "http://localhost:3001",
              changeOrigin: true,
              secure: false,
            },
          }
        : undefined,
    },
  };
});
