<script lang="ts">
  import { format as formatDate } from "date-fns";
  import { SunriseSunsetStreakCalculator } from "./SunriseSunsetStreakCalculator.js";
  import { browser } from "$app/environment";
  interface Props {
    doesUserHaveGuessingHistory: boolean;
    correctGuessDays: string[];
    incorrectGuessDays: string[];
    currentStreakLength: number;
  }

  let {
    doesUserHaveGuessingHistory,
    correctGuessDays,
    incorrectGuessDays,
    currentStreakLength,
  }: Props = $props();

  const todayAsString = formatDate(new Date(), "yyyy-MM-dd");
  const calculator = new SunriseSunsetStreakCalculator(todayAsString);
  let hasTextBeenCopied = $state(false);

  let historyStatement = $derived(
    calculator.getShareableStatement(
      correctGuessDays,
      incorrectGuessDays,
      new Date()
    )
  );

  function copyHistory() {
    if (browser) {
      navigator.clipboard.writeText(historyStatement);
      hasTextBeenCopied = true;
    }
  }
</script>

<section class="score">
  <div class="score__card">
    <h2 class="score__title">Your Score Card</h2>
    {#if doesUserHaveGuessingHistory}
      <p class="score__text">
        {historyStatement}
      </p>
      <button onclick={() => copyHistory()}> Copy to Clipboard </button>

      {#if hasTextBeenCopied}
        <p>Copied!</p>
      {/if}
    {:else}
      <p class="score__text">You've not guessed yet.</p>
    {/if}
  </div>
</section>

<style>
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
    box-shadow:
      0 0 0 1px rgba(0, 0, 0, 0.1),
      0 1px 2px rgba(0, 0, 0, 0.1);
  }

  .score__title {
    font-size: 1.2rem;
  }

  .score__text {
    white-space: pre-line;
    line-height: 135%;
  }
</style>
