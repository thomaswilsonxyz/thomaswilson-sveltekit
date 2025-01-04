<script lang="ts">
  import { spring } from "svelte/motion";
  import { fade } from "svelte/transition";
  import type { Writable } from "svelte/store";

  interface Props {
    visibleNotification: Writable<"none" | "success" | "failure">;
  }

  let { visibleNotification }: Props = $props();
  let hasAnimationTriggered = false;
  const revealResultDelayDurationMs = 550;

  const resultSpring = spring(20, {
    stiffness: 0.1,
    damping: 0.15,
    precision: 0.01
  });

  function triggerAnimation() {
    hasAnimationTriggered = true;
    setTimeout(() => {
      resultSpring.set(0);
    }, revealResultDelayDurationMs);
  }

  function resetAnimation() {
    hasAnimationTriggered = false;
    resultSpring.set(20);
  }

  visibleNotification.subscribe((value) => {
    if (value === "none") {
      resetAnimation();
      return;
    } else if (hasAnimationTriggered) {
      return;
    }

    triggerAnimation();
  });
</script>

<section class="notification">
  {#if $visibleNotification !== "none"}
    <div class="notification--success">
      <p class="notification__prefix" transition:fade={{ duration: 250 }}>
        Today's Guess:
      </p>
      <p
        class="notification__result"
        transition:fade={{ duration: 300, delay: revealResultDelayDurationMs }}
        style="transform: translateY({$resultSpring}px);"
      >
        {$visibleNotification === "success" ? "Correct 🎉" : "Incorrect 💔"}
      </p>
    </div>
  {/if}
</section>

<style type="text/postcss">
  .notification {
  }

  .notification--success {
    color: var(--colour-dark-grey);
    padding: 12px;
    text-align: center;
    font-size: 1.2rem;
  }

  .notification__prefix {
    font-size: 1.1rem;
    padding-bottom: 0;
  }

  .notification__result {
    font-size: 1.4rem;
    font-weight: 600;
  }
</style>
