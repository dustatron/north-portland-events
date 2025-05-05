// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import catppuccin from "@catppuccin/starlight";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      plugins: [catppuccin()],
      customCss: [
        // Path to your Tailwind base styles:
        "./src/styles/global.css",
      ],
      title: "North Portland Events",
      social: [],
      sidebar: [
        {
          label: "Resources",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Calendar", slug: "resources/calendar" },
            { label: "Submit", slug: "resources/submit" },
            { label: "About", slug: "resources/about" },
            { label: "Example Guide", slug: "guides/example" },
          ],
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
