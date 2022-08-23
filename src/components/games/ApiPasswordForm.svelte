<script lang="ts">
	import { writable } from 'svelte/store';
	import { onMount, onDestroy, createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher<{ change: string }>();

	let apiPassword = '';
	let state: 'edit' | 'view' = 'edit';
	let unsubscribe: () => void;

	function onSubmit() {
		state = 'view';
		if (localStorage) {
			localStorage.setItem('apiPassword', apiPassword);
		}
		dispatch('change', apiPassword);
	}

	function onEdit() {
		state = 'edit';
	}

	onMount(() => {
		if (localStorage !== undefined) {
			apiPassword = localStorage.getItem('apiPassword') || '';
		}

		if (apiPassword.length > 0) {
			dispatch('change', apiPassword);
			state = 'view';
		}
	});
</script>

<section>
	{#if apiPassword.length === 0}
		<p>
			To save things to the ledger you need to enter the password. Right now you haven't set one.
		</p>
	{/if}
	{#if state === 'view'}
		<button on:click={onEdit}>Edit Password</button>
	{:else}
		<form on:submit|preventDefault={onSubmit}>
			<input type="text" bind:value={apiPassword} />
			<input type="submit" value="Set Password" />
		</form>
	{/if}
</section>
