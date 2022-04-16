import adapter from '@sveltejs/adapter-netlify';
import preprocess from 'svelte-preprocess';

import { mdsvex } from 'mdsvex'
import remarkGfm from 'remark-gfm'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [preprocess(), mdsvex({
		extensions: ['.md'],
		remarkPlugins: [remarkGfm]
	})],

	kit: {
		adapter: adapter({ split: false })
	}
};

export default config;
