<script lang="ts">
  import type { PageData } from "./$types.js";
  import { format as formatDate } from "date-fns";
  import { onMount } from "svelte";
  import { spring } from "svelte/motion";
  import { fade } from "svelte/transition";
  import { writable } from "svelte/store";
  import Navbar from "$lib/components/Navbar.svelte";

  import type { ISunriseSunsetGuessingHistory } from "./ISunriseSunsetGuessingHistory.js";

  let hasGuessingHistoryBeenLoaded = false;
  let debug = false;
  let visibleNotification: "none" | "success" | "failure" = "none";

  const guessingHistory = writable<ISunriseSunsetGuessingHistory>({
    mostRecentGuessDate: undefined,
    totalNumberOfGuesses: 0,
    guesses: [],
    correctDays: [],
    incorrectDays: []
  });

  const notificationSpring = spring(20, {
    stiffness: 0.1,
    damping: 0.15,
    precision: 0.01
  });

  export let data: PageData;
  const now = new Date();
  const todaysDateString = formatDate(now, "yyyy-MM-dd");
  const localStorageKey = "sunrise-sunset-guessing-history";

  $: picture = data.body.photo;

  function debugRemoveLocalStorage() {
    notificationSpring.set(20);
    localStorage.removeItem(localStorageKey);
    visibleNotification = "none";
    guessingHistory.set({
      mostRecentGuessDate: undefined,
      totalNumberOfGuesses: 0,
      guesses: [],
      correctDays: [],
      incorrectDays: []
    });
  }

  function revealNotification(wasCorrect: boolean) {
    notificationSpring.set(0);
    if (wasCorrect) {
      visibleNotification = "success";
    } else {
      visibleNotification = "failure";
    }
  }

  function onOptionSelected(option: "sunrise" | "sunset") {
    $guessingHistory.mostRecentGuessDate = todaysDateString;
    $guessingHistory.totalNumberOfGuesses += 1;
    $guessingHistory.guesses = [...$guessingHistory.guesses, option];

    if (option === picture.sunrise_or_sunset) {
      revealNotification(true);
      $guessingHistory.correctDays = [
        ...$guessingHistory.correctDays,
        todaysDateString
      ];
    } else {
      revealNotification(false);
      $guessingHistory.incorrectDays = [
        ...$guessingHistory.incorrectDays,
        todaysDateString
      ];
    }
  }

  guessingHistory.subscribe((value) => {
    console.log("guessingHistory.subscribe", value);

    if (!hasGuessingHistoryBeenLoaded) {
      return;
    }

    localStorage.setItem(localStorageKey, JSON.stringify(value));
  });

  onMount(() => {
    const storedGuessHistory = localStorage.getItem(localStorageKey);
    if (storedGuessHistory) {
      guessingHistory.set(JSON.parse(storedGuessHistory));
    }
    hasGuessingHistoryBeenLoaded = true;
  });
</script>

<Navbar />

<div class="page">
  <section class="header">
    <h1 class="header__title">Sunrise, Sunset?</h1>
    <p class="header__explanation">
      It's a simple game. Is the picture below a sunrise, or a sunset?
    </p>
  </section>

  {#if debug}
    <button on:click={debugRemoveLocalStorage}>Remove Local Storage</button>
  {/if}

  <section class="picture">
    <img src={picture.small_url} alt="Sunrise or Sunset?" />
  </section>

  {#if hasGuessingHistoryBeenLoaded}
    <section class="notification">
      {#if visibleNotification !== "none"}
        <div
          class="notification--success"
          transition:fade={{ duration: 200 }}
          style="transform: translateY({$notificationSpring}px);"
        >
          {visibleNotification === "success" ? "Correct 🎉" : "Incorrect 💔"}
        </div>
      {/if}
    </section>
    <section class="options">
      <div class="options__buttons-container">
        <button
          disabled={$guessingHistory.mostRecentGuessDate === todaysDateString}
          class="options__button option--sunrise"
          on:click={() => onOptionSelected("sunrise")}>Sunrise</button
        >
        <button
          disabled={$guessingHistory.mostRecentGuessDate === todaysDateString}
          class="options__button option--sunset"
          id="button-sunset"
          on:click={() => onOptionSelected("sunset")}>Sunset</button
        >
      </div>
      {#if $guessingHistory.mostRecentGuessDate === todaysDateString}
        <p class="options__text">
          You've already guessed today. Come back tomorrow.
        </p>
      {/if}
    </section>

    <section class="score">
      <div class="score__card">
        <h2 class="score__title">Your Score</h2>
        {#if $guessingHistory.mostRecentGuessDate !== undefined}
          <p class="score__text">
            You've made {$guessingHistory.totalNumberOfGuesses}
            {$guessingHistory.totalNumberOfGuesses === 1 ? "guess" : "guesses"} so
            far.
          </p>
          <p class="score__text">
            You've guessed correctly {Number(
              $guessingHistory.correctDays.length /
                $guessingHistory.totalNumberOfGuesses
            ) * 100}% of the time.
          </p>
        {:else}
          <p class="score__text">You've not guessed yet.</p>
        {/if}
      </div>
    </section>
  {/if}
</div>

<style lang="scss" type="text/postcss">
  :root {
    --background-colour: hsl(40, 8%, 85%);
    --colour-light-grey: hsl(28, 35%, 85%);
    --colour-grey: hsl(20, 6%, 10%);
    --colour-grey-lightened: hsl(20, 7%, 22%);
    --colour-orage: hsl(19, 69%, 49%);
    --colour-green: hsl(120, 69%, 49%);
    --colour-orange-lightened: hsl(19, 75%, 55%);
    --colour-dark-grey: #1b1918;
  }

  .page {
    background-color: var(--background-colour);
    display: grid;
    min-height: calc(100vh - 64px);
    grid-template-rows: max-content max-content max-content auto;
    gap: 12px;
  }

  .header {
    display: grid;
    place-content: center;
    text-align: center;
    padding: 12px 0px;
  }

  .header__title {
    font-size: 2rem;
  }

  .header__explanation {
    font-size: 1.2rem;
  }

  .picture {
    display: grid;
    place-content: center;
    padding: 12px 0px;
  }

  .picture img {
    max-width: 100%;
    max-height: 100%;
  }

  .options {
    width: 100%;
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
    color: var(--colour-light-grey);
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

  .notification {
  }

  .notification--success {
    color: var(--colour-dark-grey);
    padding: 12px;
    text-align: center;
    font-size: 1.2rem;
  }

  .score {
    display: grid;
    place-content: center;
    text-align: center;
    padding: 12px 0px;
  }

  .score__card {
    display: grid;
    place-content: center;
    background: white;
    text-align: center;
    padding: 12px;
    border-radius: 4px;
    // gentle grey border, with soft shadow
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
  }

  .score__title {
    font-size: 1.2rem;
  }
</style>
