<script lang="ts">
  import "../styles/thomaswilson.css";
  import {
    colourSchemeStore,
    colourSchemes,
    darkColourScheme,
    lightColourScheme,
  } from "../stores/colourSchemeStore.ts";
  import { browser } from "$app/environment";
  import { onMount } from "svelte";
  interface Props {
    children?: import('svelte').Snippet;
  }

  let { children }: Props = $props();

  onMount(() => {
    const prefersDarkmode: boolean = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    const colourSchemeName: string | null =
      localStorage.getItem("colourScheme");
    const colourScheme = colourSchemes?.[colourSchemeName];

    if (colourScheme) {
      colourSchemeStore.set(colourScheme);
    } else if (prefersDarkmode) {
      colourSchemeStore.set(darkColourScheme);
    } else {
      colourSchemeStore.set(lightColourScheme);
    }
  });

  colourSchemeStore.subscribe((value) => {
    if (!browser) return;

    document.documentElement.style.setProperty(
      "--colour-scheme-background",
      value.background
    );

    // document.documentElement.style.setProperty(
    //   "--colour-scheme-back""
    // )

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
  });
</script>

<svelte:head>
  <title>Thomas Wilson</title>
</svelte:head>

{@render children?.()}
