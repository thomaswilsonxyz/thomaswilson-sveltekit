<script lang="ts">
  export let isActive: boolean;
</script>

<div class="summer-hours">
  <p class="summer-hours__emoji">☀️🥂🌻</p>
  <p class="summer-hours__text" class:inactive={!isActive}>
    I'm currently out of office for the summer. I'm getting married in July, and
    I'll be spending as much time as possible out-of-doors in August. I'll be
    back at keyboard in September.
  </p>
  {#if !isActive}
    <p class="summer-hours__text">
      Summer hours are over, slowly rebooting, bear with.
    </p>
  {/if}
  <p class="summer-hours__signature">--TJW 2024-08-26</p>
</div>

<style>
  .summer-hours {
    border: 2px solid var(--brand-orange);
    padding: var(--spacing-md) var(--spacing-lg);
    border-radius: 8px;
    margin-top: var(--spacing-base);
    gap: 0px;
    font-size: var(--font-size-sm);
  }

  .summer-hours__emoji {
    font-family: sans-serif;
    font-size: var(--font-size-xl);
    margin: 0;
  }

  .summer-hours__text {
    margin: 0;
    font-size: var(--font-size-base);
    line-height: 150%;
  }

  .summer-hours__text.inactive {
    text-decoration: line-through;
  }

  .summer-hours__signature {
    margin: 0;
    font-size: var(--font-size-sm);
    text-align: right;
  }
</style>
