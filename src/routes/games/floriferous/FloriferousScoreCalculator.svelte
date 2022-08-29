<script lang="ts">
	import { slide } from 'svelte/transition';
	export let isVisible: boolean;

	let currentScore = 0;
	let actions = [];

	let newActionScore = 0;
	let newActionName = '';
	let newActionNameInput;
	let isNewActionNameVisible = false;

	function incrementNewActionScore() {
		newActionScore += 1;
	}

	function decrementNewActionScore() {
		newActionScore -= 1;
	}

	function onNewActionSubmit(score: number, name = '') {
		actions = [...actions, { score, name }];
		currentScore += score;
		newActionScore = 0;
		newActionName = '';
	}

	function toggleIsNewActionNameVisible() {
		isNewActionNameVisible = true;
		newActionNameInput.focus();
		newActionName = '';
	}

	const suggestedDescriptions = [
		'Arrangement Card',
		'Desire Card',
		'Bounty',
		'Stones',
		'Cup of Tea'
	];
</script>

{#if isVisible}
	<div transition:slide>
		<div>
			<p>Your score is {currentScore}</p>

			<ul class="actions-list">
				{#each actions as action}
					<li class="actions-list__item">
						+{action.score}
						{#if action.name.length > 0} ({action.name}) {/if}
					</li>
				{/each}
			</ul>
		</div>

		<form
			class="form"
			on:submit|preventDefault={() => onNewActionSubmit(newActionScore, newActionName)}
		>
			<div class="form-field">
				<label class="form__label" for="points">Points*</label>
				<input required name="points" type="number" bind:value={newActionScore} step="1" />
			</div>

			<div class="increment-decrement">
				<button type="button" on:click={decrementNewActionScore}>-</button>
				<button type="button" on:click={incrementNewActionScore}>+</button>
			</div>

			<div class="form-field">
				<fieldset class="suggested-descriptions">
					<legend>Reason for Points</legend>
					{#each suggestedDescriptions as suggestion}
						<label
							class="suggested-descriptions__label"
							class:selected={newActionName === suggestion}
							for={`suggestion-${suggestion}`}
						>
							<input
								type="radio"
								name="suggestion"
								id={`suggestion-${suggestion}`}
								value={suggestion}
								class="suggested-descriptions__item"
								on:click={() => (newActionName = suggestion)}
								checked={newActionName === suggestion}
							/>
							{suggestion}</label
						>
					{/each}
					<label class="suggested-descriptions__item">
						<button
							type="button"
							class="suggested-descriptions__button"
							on:click={toggleIsNewActionNameVisible}
						>
							Other
						</button>
					</label>
					<input
						transition:slide
						name="action-name"
						type="text"
						step="1"
						class:sr-only={!isNewActionNameVisible}
						bind:value={newActionName}
						bind:this={newActionNameInput}
					/>
				</fieldset>
			</div>

			<div class="submit">
				<input type="submit" value="Add Points" class="thomaswilson-button form__submit" />
			</div>
		</form>
	</div>
{/if}

<style>
	.actions-list {
		padding: 0;
	}

	.actions-list__item {
		padding: 0;
	}

	.form {
		display: grid;
		grid-template-columns: 100%;
		gap: var(--spacing-md);
		width: 100%;
	}

	.form__label {
		font-size: var(--font-size-md);
	}

	.form-field {
		display: grid;
		grid-template-columns: 100%;
	}

	.increment-decrement {
		padding: var(--spacing-md) 0;
		display: grid;
		grid-template-columns: 50% 50%;
		gap: var(--spacing-md);
	}

	.suggested-descriptions {
		padding: var(--spacing-sm);
		margin: 0;
		display: grid;
		grid-template-columns: 100%;
	}

	.suggested-descriptions__item {
		padding: var(--spacing-sm) 0;
	}

	.suggested-descriptions__label {
		border: none;
		background: transparent;
		text-decoration: underline;
		transition: all 0.15s;
		padding: var(--spacing-sm) 0;
	}

	.suggested-descriptions__label.selected {
		color: var(--brand-blue);
	}

	.submit {
		padding-top: var(--spacing-lg);
		display: grid;
		grid-template-columns: 100%;
		width: 100%;
	}

	.form__submit {
		background: var(--brand-blue);
		color: white;
		border: none;
	}
</style>
