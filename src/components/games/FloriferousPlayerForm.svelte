<script lang="ts">
	import { FloriferousPlayer } from '$lib/floriferous';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	let nameInput: HTMLInputElement;
	let name = '';
	let score = 0;
	let rowAtEndOfGame = 1;

	function handleFormSubmit() {
		const player = new FloriferousPlayer({
			name,
			score,
			rowAtEndOfGame: rowAtEndOfGame
		});

		dispatch('submit', player);

		name = '';
		score = 0;
		rowAtEndOfGame = 1;
		nameInput.focus();
	}
</script>

<form on:submit|preventDefault={() => handleFormSubmit()}>
	<div class="field">
		<label for="player-name">Name</label>
		<input bind:this={nameInput} bind:value={name} type="text" id="player-name" />
	</div>
	<div class="field">
		<label for="player-score">Score</label>
		<input bind:value={score} type="number" step="1" min="0" id="player-score" />
	</div>
	<div class="field">
		<label for="player-score">Finishing Row</label>
		<input bind:value={rowAtEndOfGame} type="number" step="1" min="0" id="player-score" />
		<p class="example-text">"1" for the highest row, "2" for the second highest, etc.</p>
	</div>
	<input type="submit" value="add" />
</form>

<style>
	form {
		display: flex;
		flex-direction: column;
		padding: var(--spacing-sm);
		border: 1px solid var(--gray-600);
	}

	.field {
		display: flex;
		flex-flow: column;
		padding: var(--spacing-sm) 0;
	}

	.example-text {
		color: var(--grey800);
		font-size: var(--font-size-sm);
	}
</style>
