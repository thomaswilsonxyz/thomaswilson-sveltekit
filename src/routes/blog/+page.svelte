<script lang="ts">
  import type { PageData } from "./$types.js";
  import Navbar from "$lib/components/Navbar.svelte";
  import BlogPostListItem from "./BlogPostListItem.svelte";

  interface Props {
    data: PageData;
  }

  let { data }: Props = $props();

  let {
    posts,
    numberOfPosts,
    daysSinceLastPublish,
    daysSinceFirstPost,
    averageDaysBetweenPosts,
    numberOfBlogPostsThisYear,
  } = $derived(data);
</script>

<svelte:head>
  <!-- Primary Meta Tags -->
  <title>Blog | thomaswilson.xyz</title>
  <meta name="title" content="Blog | thomaswilson.xyz" />
  <meta
    name="description"
    content="I write about software and how I should have built it, and sometimes other things."
  />

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.thomaswilson.xyz/blog" />
  <meta property="og:title" content="Blog | thomaswilson.xyz" />
  <meta
    property="og:description"
    content="I write about software and how I should have built it, and sometimes other things."
  />

  <!-- Twitter -->
  <meta property="twitter:title" content="Blog | thomaswilson.xyz" />
  <meta
    property="twitter:description"
    content="I write about software and how I should have built it, and sometimes other things."
  />
</svelte:head>

<Navbar />
<main class="thomaswilson-container">
  <section class="thomaswilson-strapline section heading">
    <h1 class="page-title">Blog</h1>
    <p class="heading__text">
      It has been been
      <span
        class="days-since"
        class:days-since-success={daysSinceLastPublish === 0}
      >
        {daysSinceLastPublish}
      </span>
      {daysSinceLastPublish === 1 ? "day" : "days"} since I last published something.
    </p>

    <p class="heading__text">
      I have written {numberOfBlogPostsThisYear}
      {numberOfBlogPostsThisYear === 1 ? "piece" : "pieces"} so far this year. On
      average I publish something every {averageDaysBetweenPosts} days ({numberOfPosts}
      posts in {daysSinceFirstPost} days).
    </p>

    <a href="/blog/feed">RSS Feed</a>
  </section>

  <section class="section">
    <h2>All Writing</h2>
    <ul class="posts">
      {#each posts as post, index}
        <BlogPostListItem
          {index}
          content_type={post.content_type}
          book_review={post.book_review}
          date={post.date}
          numberOfPosts={posts.length}
          preview={post.preview}
          slug={post.slug}
          title={post.title}
        />
      {/each}
    </ul>
  </section>
</main>

<style lang="scss">
  .page-title {
    font-size: 2.5rem;
    margin: 0;
    line-height: 100%;
  }

  .heading {
    padding: 0;
    gap: var(--spacing-base);
    display: grid;
    grid-template-columns: 100%;
  }

  .heading__text {
    font-family: sans-serif;
    margin: 0;
    line-height: 150%;
    font-size: 1.25rem;
  }

  .posts {
    list-style: none;
    margin: 0;
    padding: 0;
    display: grid;
    grid-template-columns: 100%;
    gap: var(--spacing-xl);
    max-width: 100%;
  }

  .days-since {
    color: var(--brand-orange);
    font-weight: 300;
    border: 1px solid var(--brand-orange);
    border-radius: 4px;
    padding: 8px;
    margin: 0 4px;
    font-family: monospace;
    font-size: inherit;
  }

  .days-since-success {
    color: var(--brand-green);
    border: 1px solid var(--brand-green);
    animation-name: pulse_green;
    animation-duration: 5.2s;
    animation-iteration-count: infinite;
    background: rgba(54, 130, 127, 0.05);
  }

  @keyframes pulse_green {
    0% {
      box-shadow: 0 0 0 0px rgba(54, 130, 127, 1);
    }
    20%,
    100% {
      box-shadow: 0 0 0 5px rgba(54, 130, 127, 0);
    }
  }
</style>
