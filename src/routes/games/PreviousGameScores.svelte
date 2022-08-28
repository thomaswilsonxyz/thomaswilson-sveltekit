<script lang="ts">
	import { slide, fade } from 'svelte/transition';

	export let gameSummaries: string[];
	const pluralRule = new Intl.PluralRules('en', { type: 'ordinal' });
	let isVisible = false;
</script>

<div class="previous-scores">
	{#if isVisible}
		<button
			transition:fade={{ duration: 30, delay: 0 }}
			class="thomaswilson-button"
			on:click={() => (isVisible = false)}>Hide Previous Scores</button
		>
		<ul>
			{#each gameSummaries as summary}
				<li transition:slide>
					{summary}
				</li>
			{/each}
		</ul>
	{:else}
		<button
			transition:slide={{ delay: 0, duration: 30 }}
			class="thomaswilson-button"
			on:click={() => (isVisible = true)}
			>Show {gameSummaries.length} Previous {gameSummaries.length === 1 ? 'Game' : 'Games'}</button
		>
	{/if}
</div>

<style>
	.previous-scores {
		display: grid;
		grid-template-columns: 100%;
		width: 100%;
	}

	.toggle-button {
		width: 100%;
		color: white;
		background: var(--brand-purple);
		border: none;
	}
</style>
