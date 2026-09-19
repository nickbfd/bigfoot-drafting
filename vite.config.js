import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // During local dev, requests to /api/* are forwarded to your
      // Express server running on port 4000 (see server.js).
      "/api": "http://localhost:4000",
    },
  },
});
