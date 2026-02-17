import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://mar123zaj.github.io",
  vite: {
    plugins: [tailwindcss()],
  },
});
