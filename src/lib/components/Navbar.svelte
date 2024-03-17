<script lang="ts">
	import { colourSchemeStore, lightColourScheme, darkColourScheme } from "../../stores/colourSchemeStore";

	function onColourSchemeChange() {
		if ($colourSchemeStore.name === 'dark') {
			colourSchemeStore.set(lightColourScheme)
		} else {
			colourSchemeStore.set(darkColourScheme)
		}
	}

</script>
<nav>
	<div class="left">
		<a href="/" class="home">Thomas Wilson</a>
	</div>

	<div class="right">
		<button class="colour-theme-toggle" on:click={onColourSchemeChange}>Toggle Colour Scheme</button>	
		<a href="/blog" class="blog">/blog</a>
	</div>
</nav>

<style>
	nav {
		display: flex;
		flex-flow: row;
		max-width: 100vw;
		overflow: hidden;
		min-height: var(--navbar-height);
		font-family: var(--font-family-mono);
	}

	.left {
		flex: 1;
		flex-grow: 0;
		text-align: left;
		padding: var(--spacing-base);
		
	}

	.home {
		color: var(--brand-orange);
		font-family: inherit;
		text-decoration: none;
		font-weight: 300;
		display: flex;
		width: fit-content;
		white-space: nowrap;
		transition: 0.3s;
	}

	.home:hover {
		transform: rotate(11deg);
	}

	.right {
		display: flex;
		flex: 1;
		text-align: right;
		gap: 1rem;
		align-items: center;
		justify-content: flex-end;
		padding: var(--spacing-base);
	}

	.colour-theme-toggle {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.blog {
		font-size: 1.1rem;
		padding: 0;
		margin: 0;
	}

	.blog:visited {
		color: var(--colour-scheme-text);
	}
</style>
