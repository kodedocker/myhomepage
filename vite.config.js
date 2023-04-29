import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/myhomepage/", // Replace "my-app" with the name of your repository
  plugins: [react()],
});
