<script lang="ts">
  import type { PageData } from "./$types.js";
  import { format as formatDate } from "date-fns";
  import { onMount } from "svelte";
  import { spring } from "svelte/motion";
  import { fade } from "svelte/transition";
  import { writable } from "svelte/store";
  import Navbar from "$lib/components/Navbar.svelte";

  import MetaTags from "./MetaTags.svelte";
  import OptionsSection from "./OptionsSection.svelte";
  import ScoreCardSection from "./ScoreCardSection.svelte";
  import type { ISunriseSunsetGuessingHistory } from "./ISunriseSunsetGuessingHistory.js";

  let hasGuessingHistoryBeenLoaded = false;
  let debug = true;
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

  function onOptionSelected(event: { option: "sunrise" | "sunset" }) {
    const { option } = event;
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

<svelte:head>
  <MetaTags />
</svelte:head>

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

    <OptionsSection
      isDisabled={$guessingHistory.mostRecentGuessDate === todaysDateString}
      hasAlreadyGuessedToday={$guessingHistory.mostRecentGuessDate ===
        todaysDateString}
      on:optionSelected={(event) => {
        onOptionSelected(event.detail);
      }}
    />

    <ScoreCardSection
      doesUserHaveGuessingHistory={$guessingHistory.mostRecentGuessDate !==
        undefined}
      correctGuessCount={$guessingHistory.correctDays.length}
      incorrectGuessCount={$guessingHistory.incorrectDays.length}
    />
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

  .notification {
  }

  .notification--success {
    color: var(--colour-dark-grey);
    padding: 12px;
    text-align: center;
    font-size: 1.2rem;
  }
</style>
