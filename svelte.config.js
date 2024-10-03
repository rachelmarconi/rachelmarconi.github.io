import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

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
      base: process.env.NODE_ENV === 'production' ? process.env.BASE_PATH : '',
      //base: process.env.NODE_ENV === 'production' ? '/rachelmarconi.github.io' : '',
      relative: false
    },
  },
};

export default config;
