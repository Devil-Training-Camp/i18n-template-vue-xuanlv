import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { lingui } from "@lingui/vite-plugin";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), lingui()],
});
