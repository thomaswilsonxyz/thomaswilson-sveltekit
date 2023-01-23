<script lang="ts">
	import { writable } from 'svelte/store';

	const pictures: {
		imageUrl: string;
		daytime: 'sunrise' | 'sunset';
	}[] = [
		{
			imageUrl: '/example',
			daytime: 'sunrise'
		},
		{
			imageUrl: '/examplele',
			daytime: 'sunset'
		}
	];

	const pictureStore = writable(pictures[0]);

	const guessHistory = writable({
		correct: 0,
		incorrect: 0,
		total: 0
	});

	function onOptionSelected(option: 'sunrise' | 'sunset') {
		$guessHistory.total += 1;
		if (option === $pictureStore.daytime) {
			$guessHistory.correct += 1;
		} else {
			$guessHistory.incorrect += 1;
		}
		console.log(option);
	}
</script>

<h1>Sunrise, Sunset?</h1>

<section class="picture">
	<img src={$pictureStore.imageUrl} alt="Sunrise or Sunset?" />
</section>

<section class="options">
	<div class="options__buttons-container">
		<button class="options__button" on:click={() => onOptionSelected('sunrise')}>Sunrise</button>
		<button class="options__button" on:click={() => onOptionSelected('sunset')}>Sunset</button>
	</div>
</section>

<section class="score">
	{#if $guessHistory.total > 0}
		<p class="score__text">
			You've guessed correctly {Number($guessHistory.correct / $guessHistory.total)}% of the time
		</p>
	{:else}
		<p class="score__text">You've not guessed yet.</p>
	{/if}
</section>

<style lang="scss" type="text/postcss">
	.options {
		width: 100%;
		display: flex;
		justify-content: center;
	}

	.options__buttons-container {
		display: grid;
		grid-template-columns: 50% 50%;
		gap: 12px;
	}

	.options__button {
		background-color: #fff;
		border: 1px solid #000;
		border-radius: 4px;
		padding: 12px;
		font-size: 1.2rem;
		cursor: pointer;
	}

	.options__button:hover {
		background-color: #000;
		color: #fff;
	}
</style>
