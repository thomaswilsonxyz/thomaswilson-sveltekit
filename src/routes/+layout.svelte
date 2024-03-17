<script lang="ts">
  import "../styles/thomaswilson.css";
  import { colourSchemeStore } from "../stores/colourSchemeStore.ts";
  import { browser } from "$app/environment";

  colourSchemeStore.subscribe((value) => {
    if (browser) {
      document.documentElement.style.setProperty(
        "--colour-scheme-background",
        value.background
      );

      document.documentElement.style.setProperty(
        "--colour-scheme-text",
        value.text
      );

      document.documentElement.style.setProperty(
        "--colour-scheme-background-accent",
        value.backgroundAccent
      );

      document.documentElement.style.setProperty(
        "--colour-scheme-text-accent",
        value.textAccent
      );

    }
  });
</script>

<svelte:head>
  <title>Thomas Wilson</title>
</svelte:head>

<slot />
