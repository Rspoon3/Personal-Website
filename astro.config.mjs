import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  // Used for absolute URLs in the blog's RSS feed and canonical links.
  site: "https://rspoon3.netlify.app",
  integrations: [icon()],
  vite: {
    plugins: [tailwindcss()]
  }
});
