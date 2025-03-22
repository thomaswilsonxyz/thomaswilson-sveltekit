<script lang="ts">
  import type { PageData } from "./$types.js";
  import BlogHead from "../../BlogHead.svelte";
  import Navbar from "$lib/components/Navbar.svelte";
  import BlogHeader from "../../BlogHeader.svelte";
  import BlogPostListItem from "../../BlogPostListItem.svelte";

  interface Props {
    data: PageData;
  }

  let { data }: Props = $props();

  let {
    posts,
    tag,
    numberOfPosts,
    daysSinceLastPublish,
    daysSinceFirstPost,
    averageDaysBetweenPosts,
    numberOfBlogPostsThisYear,
  } = $derived(data);
</script>

<BlogHead />
<Navbar />
<main class="thomaswilson-container">
  <BlogHeader
    title={`Posts tagged #${tag}`}
    showLinkToAllPosts={true}
    showRssFeed={false}
    {numberOfBlogPostsThisYear}
    {daysSinceFirstPost}
    {numberOfPosts}
    averageDaysBetweenPosts={Number(averageDaysBetweenPosts)}
    {daysSinceLastPublish}
  />

  <section class="section">
    <h2>#{tag}</h2>
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
