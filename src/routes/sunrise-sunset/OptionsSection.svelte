<script lang="ts">
  import { createEventDispatcher } from "svelte";

  interface Props {
    isDisabled: boolean;
    hasAlreadyGuessedToday: boolean;
  }

  let { isDisabled, hasAlreadyGuessedToday }: Props = $props();

  const eventDispatcher = createEventDispatcher<{
    optionSelected: { option: "sunrise" | "sunset" };
  }>();

  function onOptionSelected(option: "sunrise" | "sunset") {
    eventDispatcher("optionSelected", { option });
  }
</script>

<section class="options">
  <div class="options__buttons-container">
    <button
      disabled={isDisabled}
      class="options__button option--sunrise"
      onclick={() => onOptionSelected("sunrise")}>Sunrise</button
    >
    <button
      disabled={isDisabled}
      class="options__button option--sunset"
      id="button-sunset"
      onclick={() => onOptionSelected("sunset")}>Sunset</button
    >
  </div>
  {#if hasAlreadyGuessedToday}
    <p class="options__text">
      You've already guessed today. Come back tomorrow.
    </p>
  {/if}
</section>

<style type="text/postcss">
  .options {
    padding: 12px;
    display: grid;
    place-items: center;
    grid-template-columns: 100%;
  }

  .options__buttons-container {
    display: grid;
    gap: 12px;
    grid-template-columns: 50% 50%;
    place-content: center;
    max-width: 500px;
  }

  .options__button {
    border: 1px solid #000;
    text-align: center;
    border-radius: 4px;
    padding: 12px;
    font-size: 1.2rem;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
  }

  .options__button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .option--sunrise {
    border-color: var(--colour-orage);
    background-color: var(--colour-orage);
    color: white;
  }

  .option--sunrise:hover:not(:disabled) {
    color: white;
    background-color: var(--colour-orange-lightened);
  }

  .option--sunset {
    border-color: var(--colour-grey-lightened);
    background-color: var(--colour-grey-lightened);
    color: white;
  }

  .option--sunset:hover:not(:disabled) {
    color: white;
    background-color: var(--colour-grey);
    border-color: var(--colour-dark-grey);
  }
</style>
