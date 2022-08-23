<script lang="ts">
	import { onMount } from 'svelte';
	import { slide } from 'svelte/transition';
	import type { PageData } from './$types.ts';

	import { FloriferousGame } from '../../../lib/floriferous';
	import type { FloriferousPlayer } from '../../../lib/floriferous';
	import { FloriferousPlayerForm } from '../../../components/games';
	import {
		FloriferousGameApiPort,
		type FloriferousGameJson
	} from '$lib/floriferous/floriferous-game-api-port';
	import ApiPasswordFrom from '../../../components/games/ApiPasswordForm.svelte';
	import type { ApiGamesFloriferousPostRequest } from '$lib/floriferous/floriferous-api-controller';

	export let data: PageData;
	let previousGames: FloriferousGame[] = data.previousGames;
	let apiPassword = '';
	let players: FloriferousPlayer[] = [];
	let isWinnerVisible = false;
	let isSaveSubmitting = false;
	let isGameSaved = false;

	function handleShowWinner() {
		isWinnerVisible = true;
	}

	function onAddPlayer(event: CustomEvent<FloriferousPlayer>) {
		players = [...players, event.detail];
	}

	function onRemovePlayer(playerToRemove: FloriferousPlayer) {
		players = players.filter((player) => {
			return playerToRemove.name !== player.name;
		});
	}

	function clearGameData() {
		players = [];
		isWinnerVisible = false;
	}

	async function onSaveGame() {
		isSaveSubmitting = true;

		if (players.length < 2) {
			console.warn(`Not enough players to save game`);
			isSaveSubmitting = false;
			return;
		}

		const body: { players: FloriferousPlayer[] } = { players };

		fetch('/api/games/floriferous.json', {
			method: 'POST',
			body: JSON.stringify(body),
			headers: {
				'Content-Type': 'application/json',
				'x-api-password': apiPassword
			}
		})
			.then((response) => {
				return response.json();
			})
			.then((gameAsJson: FloriferousGameJson) => {
				const game = FloriferousGameApiPort.jsonToGame(gameAsJson);
				previousGames = [...previousGames, game];
				clearGameData();
			})
			.catch((error) => {
				if (error.status === 401) {
					console.warn(`Invalid API password`);
					return;
				}
				console.error(error);
				isSaveSubmitting = false;
			});
	}

	$: game = new FloriferousGame({ playedTs: new Date(), players });
</script>

<h1>Floriferous Scoring</h1>
{#if previousGames.length > 0}
	<section class="previous-games">
		<h2>Previous Games</h2>
		<ul>
			{#each previousGames as game}
				<li transition:slide>
					{Intl.DateTimeFormat('en-GB', {
						weekday: 'long',
						day: 'numeric',
						month: 'long',
						year: 'numeric',
						hour: '2-digit',
						minute: '2-digit'
					}).format(game.playedTs)}:
					{game.winner} Won
				</li>
			{/each}
		</ul>
	</section>
{/if}

<section class="players">
	<h2>Players</h2>

	{#if players.length > 0}
		<ul>
			{#each players as player}
				<li>
					{player.name} ({player.score} points, finished on row {player.rowAtEndOfGame}) (<button
						on:click={() => onRemovePlayer(player)}>Remove</button
					>)
				</li>
			{/each}
		</ul>

		{#if players.length > 1}
			{#if isWinnerVisible}
				<p transition:slide>And the winner is:<strong>{game.winner}</strong></p>
				<h3>Add to Ledger</h3>

				<ApiPasswordFrom on:change={(event) => (apiPassword = event.detail)} />

				{#if apiPassword.length > 0}
					<p>You can save this game in the Ledger</p>
					<button on:click={onSaveGame}>Save Game</button>
				{/if}
			{:else}
				<button on:click={handleShowWinner}>Show me the winner</button>
			{/if}
		{/if}
	{:else}
		<p>Add at least one player to get started</p>
	{/if}

	{#if !isWinnerVisible}
		<h3>Add a New Player</h3>
		<FloriferousPlayerForm on:submit={onAddPlayer} />
	{/if}
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		padding: var(--spacing-sm);
		max-width: 600px;
	}
</style>
