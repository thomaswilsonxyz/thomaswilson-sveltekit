<script lang="ts">
  import type { PageData, PageServerData } from "./$types.js";
  import { intlFormat } from "date-fns";
  import Navbar from "$lib/components/Navbar.svelte";
  import { onMount } from "svelte";

  interface Props {
    data: PageData;
  }

  let { data }: Props = $props();
  const post = data.post;
</script>

<svelte:head>
  <!-- Primary Meta Tags -->
  <title>{post.title} | thomaswilson.xyz</title>
  <meta name="title" content="Blog | thomaswilson.xyz" />
  <meta name="description" content={post.preview} />

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website" />
  <meta
    property="og:url"
    content={`https://www.thomaswilson.xyz/blog/${post.slug}`}
  />
  <meta property="og:title" content={post.title} />
  <meta property="og:description" content={post.preview} />

  <!-- Twitter -->
  <meta property="twitter:title" content={post.title} />
  <meta property="twitter:description" content={post.preview} />
</svelte:head>

<Navbar />
<main class="thomaswilson-container blog">
  <header class="blog__header">
    <h1 class="title post-title">{post.title}</h1>
    <p class="post-author">
      {#if post.author}
        {post.author}
      {:else}
        Thomas Wilson
      {/if}
    </p>
    <p class="post-date">
      {intlFormat(post.date, {
        weekday: "long",
        day: "2-digit",
        month: "long",
        year: "numeric",
        localeMatcher: "best fit",
      })}
    </p>
    {#if post}
      <div class="post-tags">
        {#each post.tags as tag}
          <a
            href={`/blog/tag/${encodeURIComponent(tag)}`}
            class="post-tags__tag no-icon">#{tag}</a
          >
        {/each}
      </div>
    {/if}
  </header>

  <article id="article">
    {@html post.content}
    <div id="disclosure">
      <a id="see-other-articles" href="/blog">See other articles</a>
      <br />
      Everything written here, on my personal blog, is just that: personal. Nothing
      here reflects, or is endorsed by, my current or previous employers.
    </div>
  </article>
</main>

<style>
  .blog {
    background-color: var(--colour-scheme-background);
    display: flex;
    flex-direction: column;
    --max-width: 65ch;
    --width: 100%;
  }

  .blog__header {
    width: 100dvw;
    background-color: var(--colour-scheme-background);
    padding: 48px 0;
    display: flex;
    flex-flow: column;
    align-items: center;
    container-type: inline-size;
  }

  .post-title {
    text-align: center;
    line-height: 125%;
    max-width: 30ch;
    font-family: var(--font-family-serif);
    font-size: clamp(2rem, 10vw, 4rem);
    max-width: 95%;
  }

  @container (min-width: 550px) {
    .post-title {
      font-size: 4rem;
      max-width: 21ch;
    }
  }

  .post-author {
    font-size: 1.3rem;
    text-align: center;
    line-height: 100%;
    margin: 0;
    font-weight: 300;
  }

  .post-date {
    font-size: 1rem;
    text-align: center;
    line-height: 100%;
    margin: 0;
  }

  .post-tags {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 8px;
    gap: 8px;
  }

  .post-tags__tag {
    border: 2px solid var(--brand-orange);
    border-radius: 8px;
    padding: 4px 8px;
    font-size: 0.8rem;
  }

  :global(#article p) {
    padding-bottom: 12px;
  }

  :global(#article blockquote) {
    font-size: var(--font-size);
    margin: 0;
    margin-bottom: 12px;
    padding: 0 0 0 1rem;
    border-left: 2px solid var(--brand-orange);
  }

  :global(#article p, a) {
    line-height: 165%;
    font-size: var(--font-size);
    font-weight: 400;
    letter-spacing: -0.5px;
  }

  :global(#article #disclosure) {
    padding: 4px;
    margin-top: 48px;
    font-size: 0.9rem;
    color: var(--colour-scheme-text-secondary);
    border-top: 1px solid var(--colour-scheme-border);
  }

  :global(#article #see-other-articles) {
    padding-bottom: 4px;
    display: inline-block;
  }

  :global(li) {
    margin: 0;
    line-height: 140%;
    font-size: var(--font-size);
  }

  :global(sup > a) {
    font-size: 0.75rem;
    vertical-align: super;
    color: var(--brand-orange);
    padding: 2px;
    transition:
      background-color 0.2s,
      color 0.2s;

    &:hover {
      text-decoration: underline;
      background-color: var(--brand-orange);
      color: white;
    }
  }

  #article {
    --padding: 4px;
    --font-size: var(--font-size-base);
    padding: var(--padding);
    font-size: var(--font-size);
    width: var(--width);
    max-width: var(--max-width);
    flex-grow: 1;
    line-height: 150%;

    @media screen and (max-width: 700px) {
      --font-size: var(--font-size-sm);
      --padding: 4px;
      letter-spacing: normal;
      line-height: 110%;
    }

    @media screen and (min-width: 700px) {
      --font-size: var(--font-size-base);
      --padding: 1.5rem 2rem;
    }
  }
</style>
