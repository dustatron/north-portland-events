// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import catppuccin from "@catppuccin/starlight";

import tailwindcss from "@tailwindcss/vite";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https:/northportlandevents.com",
  integrations: [
    starlight({
      plugins: [catppuccin()],
      favicon: "./src/assets/logo/north-sm.png",
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
            { label: "Calendar", slug: "index" },
            { label: "Submit", slug: "resources/submit" },
            {
              label: "Community Waste Collection",
              slug: "resources/waste-collection",
            },
            { label: "Neighborhood Associations", slug: "resources/na-list" },
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
            {
              label: "PDX OSR",
              link: "https://pdxosr.com/",
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
    sitemap(),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
