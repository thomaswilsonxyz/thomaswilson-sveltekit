import adapter from '@sveltejs/adapter-netlify';
import preprocess from 'svelte-preprocess';

import { mdsvex } from 'mdsvex'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [preprocess(), mdsvex({
		extensions: ['.md'],
	})],

	kit: {
		adapter: adapter({ split: false })
	}
};

export default config;
