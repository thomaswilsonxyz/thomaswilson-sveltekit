<script lang="ts">
  import type { PageData } from "./$types.js";
  import { intlFormat } from "date-fns";
  import Navbar from "$lib/components/Navbar.svelte";
  import { onMount } from "svelte";

  export let data: PageData;
  $: ({ date, post } = data);

  onMount(() => {
    console.log({ date, post });
  });
</script>

<svelte:head>
  <!-- Primary Meta Tags -->
  <title>{post.title} | thomaswilson.xyz</title>
  <meta name="title" content="Blog | thomaswilson.xyz" />
  <meta name="description" content="{post.preview}" />

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website" />
  <meta
    property="og:url"
    content="{`https://www.thomaswilson.xyz/blog/${post.slug}`}"
  />
  <meta property="og:title" content="{post.title}" />
  <meta property="og:description" content="{post.preview}" />

  <!-- Twitter -->
  <meta property="twitter:title" content="{post.title}" />
  <meta property="twitter:description" content="{post.preview}" />
</svelte:head>

<Navbar />
<main class="thomaswilson-container">
  <header class="section">
    <h1 class="title post-title">{post.title}</h1>
    <p class="post-author">
      {#if post.autor}
        {post.author}
      {:else}
        Thomas Wilson
      {/if}
    </p>
    <p class="post-date">
      {intlFormat(date, {
        weekday: "long",
        day: "2-digit",
        month: "long",
        year: "numeric",
        localeMatcher: "best fit",
      })}
    </p>
  </header>

  <article id="article">
    {@html post.content}
    <a href="/blog">See other articles</a>
  </article>
</main>

<style lang="scss">
  header {
    padding-top: 24px;
  }

  :global(blockquote) {
    font-size: var(--font-size);
    font-style: italic;
    margin: 0;
    padding: 0 0 0 1rem;
    border-left: 2px solid var(--brand-orange);
  }

  :global(p, a) {
    line-height: 160%;
    font-size: var(--font-size);
    font-weight: 400;
    margin-bottom: 1.5rem;
    letter-spacing: 0.5px;
  }

  :global(li) {
    margin: 0;
    line-height: 140%;
    font-size: var(--font-size);
  }

  #article {
    max-width: 95%;
    width: 65ch;
    flex-grow: 1;

    @media screen and (max-width: 700px) {
      --font-size: 1.1rem;
      padding: 12px;
    }

    @media screen and (min-width: 700px) {
      --font-size: 1.29rem;
      padding: 24px;
    }
  }

  .post-title {
    text-align: center;
    line-height: 125%;
  }
  .post-author {
    font-size: 1.3rem;
    text-align: center;
    line-height: 100%;
    margin: 0;
  }

  .post-date {
    font-size: 1rem;
    text-align: center;
    line-height: 100%;
    margin: 0;
  }
</style>
