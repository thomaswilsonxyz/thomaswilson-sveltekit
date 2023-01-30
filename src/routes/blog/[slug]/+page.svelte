<script lang="ts">
  import type { PageData } from "./$types.js";
  import type { Post } from "$lib/Post.js";
  import { intlFormat } from "date-fns";
  import Navbar from "$lib/components/Navbar.svelte";

  export let data: PageData;
  $: ({ date, post } = data);
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
<main class="thomaswilson-container">
  <header class="section">
    <h1 class="title post-title">{post.title}</h1>
    <p class="post-author">{post.author}</p>
    <p class="post-date">{intlFormat(date)}</p>
  </header>

  <article>
    {@html post.content}
    <a href="/blog">See other articles</a>
  </article>
</main>

<style lang="scss">
  header {
    padding-top: 24px;
  }

  article {
    max-width: 65ch;
  }

  @media screen and (max-width: 700px) {
    article {
      padding: 12px;
    }
  }

  .post-title {
    text-align: center;
    padding-bottom: 1rem;
    line-height: 125%;
  }
  .post-author {
    font-size: 1rem;
    text-align: center;
    line-height: 100%;
  }

  .post-date {
    font-size: 1rem;
    text-align: center;
    line-height: 100%;
  }
</style>
