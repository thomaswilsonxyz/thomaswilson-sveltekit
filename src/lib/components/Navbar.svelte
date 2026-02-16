<script lang="ts">
  import { tweened } from "svelte/motion";
  import { expoOut } from "svelte/easing";
  import {
    colourSchemeStore,
    lightColourScheme,
    darkColourScheme,
  } from "../../stores/colourSchemeStore";
  import sunSvg from "./sun.svg";
  import moonSvg from "./moon.svg";

  function onColourSchemeChange() {
    const newColourScheme =
      $colourSchemeStore.name === "dark" ? lightColourScheme : darkColourScheme;
    localStorage.setItem("colourScheme", newColourScheme.name);
    colourSchemeStore.set(newColourScheme);
    iconMovement.set($iconMovement + 360);
  }

  const iconMovement = tweened(0, {
    duration: 300,
    easing: expoOut,
  });
</script>

<nav>
  <div class="left">
    <a href="/" class="home no-icon">TWC</a>
  </div>

  <div class="right">
    <a href="/" class="navlink no-icon">/</a>
    <a href="/now" class="navlink no-icon">/now</a>
    <a href="/blog" class="navlink no-icon">/blog</a>
    <button class="colour-theme-toggle" onclick={onColourSchemeChange}>
      <img
        class="icon"
        src={$colourSchemeStore.name === "light" ? sunSvg : moonSvg}
        alt="Light mode"
        width="24"
        height="24"
        style="transform: rotate({$iconMovement}deg)"
      />
    </button>
  </div>
</nav>

<style>
  nav {
    display: flex;
    flex-flow: row;
    max-width: 100vw;
    overflow: hidden;
    min-height: var(--navbar-height);
    font-family: var(--font-family-mono);
  }

  .left {
    flex: 1;
    flex-grow: 0;
    text-align: left;
    padding: var(--spacing-base);
  }

  .home {
    color: var(--brand-orange);
    font-family: inherit;
    text-decoration: none;
    font-weight: 300;
    display: flex;
    width: fit-content;
    white-space: nowrap;
    transition: 0.3s;
  }

  .home:hover {
    transform: rotate(11deg);
  }

  .right {
    display: flex;
    flex: 1;
    text-align: right;
    gap: 1rem;
    align-items: center;
    justify-content: flex-end;
    padding: var(--spacing-base);
  }

  .colour-theme-toggle {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  svg path {
    fill: var(--colour-scheme-text);
  }

  .navlink {
    font-size: 1.1rem;
    padding: 0;
    margin: 0;
  }

  .navlink:visited {
    color: var(--colour-scheme-text);
  }
</style>
