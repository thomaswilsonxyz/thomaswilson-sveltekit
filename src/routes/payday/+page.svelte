<script lang="ts">
  import { onMount } from "svelte";
  import {
    endOfMonth,
    isWeekend,
    sub,
    differenceInCalendarDays
  } from "date-fns";

  let lastDayOfMonth = new Date();
  let daysUntilPayDay = 0;

  function prettyPrintDays(numberOfDays: number): string {
    return `${numberOfDays} ${numberOfDays === 1 ? "day" : "days"}`;
  }

  $: pluralisedDays = prettyPrintDays(Math.abs(daysUntilPayDay));

  onMount(() => {
    lastDayOfMonth = endOfMonth(new Date());

    while (isWeekend(lastDayOfMonth)) {
      lastDayOfMonth = sub(lastDayOfMonth, { days: 1 });
    }

    daysUntilPayDay = differenceInCalendarDays(lastDayOfMonth, new Date());
  });
</script>

<svelte:head>
  <title>Pay Day</title>
</svelte:head>

<main>
  <section class="content">
    {#if daysUntilPayDay > 0}
      <h1>
        Your next pay day is in <span style="display:none"
          >{pluralisedDays}</span
        >
      </h1>
      <p class="days-away" aria-hidden="true">{pluralisedDays}</p>
      <p class="day">
        The last working day of this month is <strong>
          {Intl.DateTimeFormat("en-GB", {
            weekday: "long",
            month: "long",
            day: "numeric"
          }).format(lastDayOfMonth)}</strong
        >
        <br />
        That's only {prettyPrintDays(daysUntilPayDay - 1)} with Monzo's "get paid
        now"
      </p>
    {:else}
      <p class="day">PayDay was {pluralisedDays} ago</p>
    {/if}
  </section>
</main>

<style>
  main {
    display: grid;
    place-items: center;
    height: 100vh;
    width: 100vw;
    background: var(--gray-200);
    overflow-x: hidden;
    grid-template-columns: 1fr;
    box-sizing: border-box;
    padding: 12px;
  }

  h1 {
    font-size: 1.15rem;
    text-align: center;
    padding: 0;
    margin: 0;
    color: #111827;
  }

  .content {
    background: white;
    display: flex;
    flex-flow: column;
    padding: 24px;
    border-radius: 8px;
  }

  .days-away {
    font-size: 2rem;
    text-align: center;
    line-height: 100%;
    padding-top: 4px;
    padding-bottom: 18px;
  }

  .day {
    font-size: 1.1rem;
    padding: 0;
    color: #374151;
  }
</style>
