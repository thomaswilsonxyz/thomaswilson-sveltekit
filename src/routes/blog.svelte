<script lang="ts" context="module">
	import type { Load, LoadInput, LoadOutput } from '@sveltejs/kit';
	import { differenceInCalendarDays, intlFormat } from 'date-fns';
	export const prerender = true;

	type BlogPost = {
		filename: string;
		preview: string[];
		title: string;
		slug: string;
		date: Date;
		book_review?: boolean;
	};

	export async function load({ fetch }: LoadInput): Promise<LoadOutput> {
		const posts = await fetch('/api/blog.json')
			.then((res) => res.json())
			.then((res) => res.posts);

		const mostRecentPost = posts[0];

		const daysSinceLastPublish = differenceInCalendarDays(
			new Date(),
			new Date(mostRecentPost.date)
		);

		const res: LoadOutput = {
			status: 200,
			props: {
				posts,
				daysSinceLastPublish
			}
		};

		return res;
	}
</script>

<script lang="ts">
	import Navbar from '../components/Navbar.svelte';
	export let posts: BlogPost[];
	export let daysSinceLastPublish: number;
</script>

<svelte:head>
	<!-- Primary Meta Tags -->
	<title>Blog | thomaswilson.xyz</title>
	<meta name="title" content="Blog | thomaswilson.xyz">
	<meta name="description" content="I write about software and how I should have built it, and sometimes other things.">

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website">
	<meta property="og:url" content="https://www.thomaswilson.xyz/blog">
	<meta property="og:title" content="Blog | thomaswilson.xyz">
	<meta property="og:description" content="I write about software and how I should have built it, and sometimes other things.">

	<!-- Twitter -->
	<meta property="twitter:title" content="Blog | thomaswilson.xyz">
	<meta property="twitter:description" content="I write about software and how I should have built it, and sometimes other things.">
</svelte:head>

<Navbar />
<main class="thomaswilson-container">
	<section class="thomaswilson-strapline section">
		<h1>Blog</h1>
		<p>
			I write about software and I how I should have built it, books I've read, and sometimes other
			things.
		</p>
		<p>
			I like to write at least once a month. It's been <span
				class="days-since"
				class:days-since-success={daysSinceLastPublish === 0}
			>
				{daysSinceLastPublish}
			</span>
			{daysSinceLastPublish === 1 ? 'day' : 'days'} since I last published something.
		</p>
	</section>

	<section class="section">
		<h2>All Writing</h2>
		<ul class="posts">
			{#each posts as post}
				<li class="post">
					<a href={`/blog/${post.slug}`}>
						{#if post.book_review} 📚 {/if}
						<div class="post-title">{post.title}</div>
						<div class="post-preview">{post.preview}...</div>
						<div class="post-date">{intlFormat(new Date(post.date))}</div>
					</a>
				</li>{/each}
		</ul>
	</section>
</main>

<style>
	.posts {
		list-style: none;
		margin: 0;
		padding: 0;
		display: grid;
		grid-template-columns: 1fr;
		gap: var(--spacing-base);
		max-width: 100%;
	}

	.post {
		border: 1px solid var(--gray-200);
		padding: var(--spacing-md);
		transition: 0.2s;
		border-radius: 8px;
		max-width: 100%;
	}

	.post:hover {
		color: var(--brand-orange);
	}

	.post a {
		color: inherit;
		text-decoration: none;
	}

	.post-title {
		text-decoration: underline;
		font-family: var(--font-family-title);
		font-weight: 600;
		padding-bottom: 8px;
	}

	.post-date {
		font-size: 0.9rem;
	}

	.post-preview {
		font-size: 0.9rem;
		line-height: 120%;
		color: var(--gray-600);
	}

	.days-since {
		color: var(--brand-orange);
		font-weight: 300;
		border: 1px solid var(--brand-orange);
		border-radius: 4px;
		padding: 8px;
		font-family: monospace;
	}

	.days-since-success {
		color: var(--brand-green);
		border: 1px solid var(--brand-green);
		animation-name: pulse_green;
		animation-duration: 5.2s;
		animation-iteration-count: infinite;
		background: rgba(54, 130, 127, 0.05);
	}

	@keyframes pulse_green {
		0% {
			box-shadow: 0 0 0 0px rgba(54, 130, 127, 1);
		}
		20%,
		100% {
			box-shadow: 0 0 0 5px rgba(54, 130, 127, 0);
		}
	}
</style>
