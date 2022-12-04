<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
</script>

<Navbar />

<main class="thomaswilson-container">
	<section class="main">
		<h1 class="main__text">Software Engineering Principles</h1>
		<p class="main__text">This is a collection of things I've learned about, and while, building software. <br />  
			They are best guesses. <br/>
			I reserve the right to be completely wrong about all of them.</p>
	</section>

	<section>
		<ul class="principles">
			<li class="principles__item"><a href="/blog/2022-11-28-all-problems">All Problems are People Problems</a></li>
			<li class="principles__item"><a href="/blog/2022-03-13-discover-complexity">Discover Complexity</a></li>
			<li class="principles__item"><a href="/blog/2021-12-12-build-the-platform-ship-the-product">Ship the product, build the platform</a></li>
			<li class="principles__item">
				<a href="blog/2022-04-10-recognise-and-reduce-risk">Recognise and Reduce Risk</a>
			</li>
			<li class="principles__item"><a href="/blog/2022-10-22-maintenance-plus-plus">Make your software opinionated</a></li>
			<li class="principles__item"><a href="/blog/2022-03-02-concentrate-on-concentrated-tests">Concentrate on Concentrated Tests</a></li>
		</ul>
	</section>

</main>

<style>

	.main {
		border: 1px solid black;
		padding: 12px;
		align-text: center;
		display: grid;
		place-content: center;

	}

	.main__text {
		text-align: center;
		line-height: 180%;

	}

</style>
