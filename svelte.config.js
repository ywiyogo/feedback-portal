// import adapter from '@sveltejs/adapter-auto';	// default
import adapter from "@sveltejs/adapter-static"; // for static page
import preprocess from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess(),

  kit: {
    adapter: adapter(),
    prerender: {
      default: true,
    },
    paths: {
      base: "/feedback-portal",
    },
  },
};

export default config;
