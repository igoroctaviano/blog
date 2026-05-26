import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://igoroctaviano.com",
  base: "/blog",
  trailingSlash: "always",
  integrations: [sitemap()],
  redirects: {
    "/imperativa-vs-funcional.md/": {
      status: 301,
      destination: "/imperativa-vs-funcional/",
    },
    "/sistemas-operacionais-exercicios.md/": {
      status: 301,
      destination: "/sistemas-operacionais-exercicios/",
    },
    "/using-typescript/": {
      status: 301,
      destination: "/",
    },
  },
});
