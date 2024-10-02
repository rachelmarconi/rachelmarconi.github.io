import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

const dev = process.argv.includes("dev");

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter(),
    alias: {
      "$components/*": "./src/lib/components/*",
      "$data/*": "./src/data/*",
      "$assets/*": "./src/assets/*",
      "$stores/*": "./src/lib/stores/*",
      "$utils/*": "./src/lib/utils/*",
    },
    paths: {
      base: process.env.NODE_ENV === 'production' ? '/rachelmarconi.github.io' : '',
      relative: false
    },
  },
};

export default config;
