import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind'; // agregamos la dependencia de tailwind

// https://astro.build/config
export default defineConfig({
    integrations: [tailwind()] // agregamos la integración de tailwind
});
