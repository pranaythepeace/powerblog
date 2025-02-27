// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
    site: 'https://eatingsolutionsforbreakfast.com/', // ✅ Set correct site URL
    base: '/', // ✅ Set correct base path for GitHub Pages

    vite: {
        plugins: [tailwindcss()],
    },
});
