import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  define: {
    "process.env.GOOGLE_CLIENT_ID": JSON.stringify(
      "730132914202-6ttbrgl1k6f3i3i51ksvc6on9t8cpb1i.apps.googleusercontent.com",
    ),
    "process.env.GOOGLE_API_KEY": JSON.stringify(
      "AIzaSyAGyW1uq5HroRxx9k0jgreVsEW_tNrYisw",
    ),
  },
  server: {
    host: true,
  },
  build: {
    sourcemap: mode === "development",
  },
  base: "./",
}));
