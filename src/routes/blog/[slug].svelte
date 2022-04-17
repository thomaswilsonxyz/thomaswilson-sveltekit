<script lang="ts" context="module">
	import type { LoadInput, LoadOutput } from '@sveltejs/kit';

	export async function load({ params, fetch }: LoadInput): Promise<LoadOutput> {
		const { slug } = params;
		const { post } = await fetch(`/api/blog/${slug}.json`)
			.then((res) => res.json())
			.catch((error) => {
				console.error(error);
				return { post: null };
			});

		const res: LoadOutput = {
			status: post ? 200 : 404,
			props: {
				date: new Date(post.date),
				post
			}
		};

		return res;
	}
</script>

<script lang="ts">
	import type { Post } from '$lib/Post';
	import { intlFormat } from 'date-fns';
	import Navbar from '../../components/Navbar.svelte';

	export let date: Date;
	export let post: Post;
</script>

<svelte:head>
	<title>{post.title} | thomaswilson.xyz</title>
</svelte:head>

<Navbar />
<main class="thomaswilson-container">
	<header class="section">
		<h1 class="title post-title">{post.title}</h1>
		<p class="post-author">{post.author}</p>
		<p class="post-date">{intlFormat(date)}</p>
	</header>

	<article>
		{@html post.html}
	</article>
</main>

<style>
	header {
		padding-top: 24px;
	}

	article {
		max-width: 65ch;
	}

	@media screen and (max-width: 700px) {
		article {
			padding: 12px;
		}
	}

	.post-title {
		text-align: center;
		padding-bottom: 1rem;
		line-height: 125%;
	}
	.post-author {
		font-size: 1rem;
		text-align: center;
		line-height: 100%;
	}

	.post-date {
		font-size: 1rem;
		text-align: center;
		line-height: 100%;
	}
</style>
