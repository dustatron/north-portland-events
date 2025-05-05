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
            {
              label: "Community Waste Collection",
              slug: "resources/waste-collection",
            },
            { label: "Neighborhood associations", slug: "resources/na-list" },
            { label: "About", slug: "resources/about" },
          ],
        },
        {
          label: "Guides",
          autogenerate: { directory: "guides" },
        },
        {
          label: "Other Resources",
          items: [
            {
              label: "PDX Bike Events",
              link: "https://www.shift2bikes.org/calendar/",
              attrs: { target: "_blank" },
            },
            {
              label: "PDX Pipeline",
              link: "https://www.pdxpipeline.com/category/north-portland/",
              attrs: { target: "_blank" },
            },
            {
              label: "PDX Reporter",
              link: "https://pdxreporter.org/",
              attrs: { target: "_blank" },
            },
            {
              label: "St. Johns food share",
              link: "https://stjohnsfoodshare.org/",
              attrs: { target: "_blank" },
            },
          ],
        },
        {
          label: "News",
          items: [
            {
              label: "North Peninsula Review",
              link: "https://northpeninsulareview.com",
              attrs: { target: "_blank" },
            },
            {
              label: "St. Johns review",
              link: "https://stjohnsreview.com/",
              attrs: { target: "_blank" },
            },
            {
              label: "Hollywood Star News",
              link: "https://star-news.info/index.html",
              attrs: { target: "_blank" },
            },
          ],
        },
      ],
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
