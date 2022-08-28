<script>
	import Navbar from '$lib/components/Navbar.svelte';
</script>

<main>
	<Navbar />
	<section>
		<p>Erm...</p>
		<h1>Couldn't find that post</h1>
		<a href="/blog">Go back to the blog</a>
	</section>
</main>

<style>
	main {
		background-color: var(--gray-100);
		min-height: 100vh;
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: min-content 1fr;
	}

	main section {
		display: grid;
		min-width: 100vw;
		height: 100%;
		place-content: center;
	}

	a {
		text-align: center;
		color: var(--brand-orange);
		font-size: 1.2rem;
	}
</style>
