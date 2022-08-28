<script lang="ts">
	import { slide } from 'svelte/transition';
	import Navbar from '$lib/components/Navbar.svelte';

	let isWorkExpanded = false;
	let isPersonalExpanded = false;
</script>

<svelte:head>
	<title>Thomas Wilson</title>
</svelte:head>

<Navbar />

<main class="thomaswilson-container">
	<section class="section thomaswilson-strapline">
		<h1 class="title">Thomas Wilson</h1>
		<p>
			I'm a software engineer who loves the craft of building reliable and human-friendly software
			for the web. I build good things with good people for good companies.
		</p>
	</section>

	<section class="work section">
		<h2>My work</h2>
		{#if isWorkExpanded}
			<ul transition:slide={{ duration: 220 }}>
				<li>
					Right now I'm leading software engineering at <a
						class="oxwash"
						target="_blank"
						rel="noopener noreferrer"
						href="https://www.oxwash.com">Oxwash</a
					>, we're building the sustainable and scalable future of laundry.
				</li>
				<li>
					I build full-stack software for the web, especially with TypeScript, Node, Svelte, and
					React.
				</li>

				<li>
					I can create and champion Design Systems in Code and in <a
						target="_blank"
						rel="noopener noreferrer"
						href="https://www.figma.com"
						class="figma">Figma</a
					>
				</li>

				<li>
					I've previously built software with data privacy, ed-tech, and sustainability companies.
				</li>

				<li>
					I have a <a
						class="thesis"
						target="_blank"
						rel="noopener noreferrer"
						href="https://eprints.soton.ac.uk/418168/">Ph.D. in education technology</a
					>, where I looked at how we can use tech in the teaching lab to promote and evidence
					understanding.
				</li>

				<li>
					I have only ever worked with companies actively solving environment and societal problems.
				</li>

				<li><button on:click={() => (isWorkExpanded = false)}> Ew, show less </button></li>
			</ul>
		{:else}
			<p>I build human-friendly software for the web, and help teams do that with better design.</p>
			<button on:click={() => (isWorkExpanded = true)}> Wow, Show more </button>
		{/if}
	</section>

	<section class="section personal">
		<h2>Me</h2>
		{#if isPersonalExpanded}
			<ul transition:slide={{ duration: 210 }}>
				<li>I try to write at least once a month on my <a class="thesis" href="/blog">blog</a>.</li>
				<li>I'm learning to sew my own clothes</li>
				<li>I love fruity coffees and botanical gins</li>
				<li>I used to dance and produce with a contemporary dance company</li>
				<li><button on:click={() => (isPersonalExpanded = false)}>Cool, show less</button></li>
			</ul>
		{:else}
			<p>
				I like to write on my <a href="/blog">blog</a> and ride bikes. I'm learning to sew and my French
				is terrible.
			</p>
			<button on:click={() => (isPersonalExpanded = true)}>Oh, cool, tell me more</button>
		{/if}
	</section>

	<section class="section links">
		<h2>Links</h2>
		<ul>
			<li>I write here, <a href="/blog">on my blog</a></li>
			<li>I'm on <a href="https://www.twitter.com/tjwilson92">Twitter</a></li>
			<li>And on <a href="https://www.github.com/thomaswilsonxyz">GitHub</a></li>
		</ul>
	</section>
</main>

<style>
	section {
		--link-transition: 0.2s;
		--link-padding: 4px;
		--link-border-radius: 8px;
	}

	section ul {
		margin-top: 0;
		margin-bottom: 0;
	}

	section p {
		padding-bottom: var(--spacing-md);
	}

	.strapline p {
		padding-top: 4px;
		padding-bottom: 1rem;

		color: var(--gray-700);
	}

	.oxwash {
		padding: var(--link-padding);
		transition: var(--link-transition);
		border-radius: var(--link-border-radius);
		border: 1px solid #0256f2;
		color: #0256f2;
		text-decoration: none;
	}

	.oxwash:hover {
		background: #6fbbec;
		border: 1px solid #6fbbec;
		text-decoration: underline;
		color: white;
	}

	.figma {
		padding: var(--link-padding);
		transition: var(--link-transition);
		border-radius: var(--link-border-radius);
		border: 1px solid #c7b9ff;
		color: #000000;
		text-decoration: none;
	}

	.figma:hover {
		background: #c7b9ff;
		color: #000000;
		text-decoration: underline;
	}

	.thesis {
		padding: var(--link-padding);
		transition: var(--link-transition);
		border-radius: var(--link-border-radius);
		border: 1px solid var(--brand-orange);
		color: var(--brand-orange);
		text-decoration: none;
	}

	.thesis:hover {
		background: var(--brand-orange);
		color: white;
		text-decoration: underline;
	}

	.links a {
		color: var(--brand-orange);
	}

	h1 {
		font-size: 2.5rem;
	}

	h2 {
		font-family: var(--font-family-title);
		color: var(--gray-800);
	}

	li {
		padding-bottom: 0.3rem;
	}
</style>
