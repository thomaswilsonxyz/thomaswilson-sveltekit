<script lang="ts">
  export let doesUserHaveGuessingHistory: boolean;
  export let correctGuessCount: number;
  export let incorrectGuessCount: number;
  export let currentStreakLength: number;

  $: totalGuessCount = correctGuessCount + incorrectGuessCount;
</script>

<section class="score">
  <div class="score__card">
    <h2 class="score__title">Your Score Card</h2>
    {#if doesUserHaveGuessingHistory}
      <p class="score__text">
        You've made {totalGuessCount}
        {totalGuessCount === 1 ? "guess" : "guesses"} so far.
      </p>
      <p class="score__text">
        Your current streak is {currentStreakLength}
        {currentStreakLength === 1 ? "day" : "days"}.
      </p>
      <p class="score__text">
        You've guessed correctly {Number(correctGuessCount / totalGuessCount) *
          100}% of the time.
      </p>
    {:else}
      <p class="score__text">You've not guessed yet.</p>
    {/if}
  </div>
</section>

<style type="text/postcss">
  .score {
    display: flex;
    place-content: center;
    text-align: center;
    padding: 12px;
  }

  .score__card {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 500px;
    place-content: center;
    background: white;
    text-align: center;
    padding: 12px;
    border-radius: 4px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
  }

  .score__title {
    font-size: 1.2rem;
  }
</style>
