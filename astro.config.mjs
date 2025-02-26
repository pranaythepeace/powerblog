// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
    site: 'https://pranaythepeace.github.io/powerblog/', // ✅ Set correct site URL
    base: '/powerblog/', // ✅ Set correct base path for GitHub Pages

    vite: {
        plugins: [tailwindcss()],
    },
});
