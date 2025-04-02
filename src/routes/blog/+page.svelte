<script lang="ts">
  import { differenceInCalendarDays } from "date-fns";
  import type { PageData } from "./$types.js";
  import Navbar from "$lib/components/Navbar.svelte";
  import BlogHead from "./BlogHead.svelte";
  import BlogHeader from "./BlogHeader.svelte";
  import BlogPostListItem from "./BlogPostListItem.svelte";

  interface Props {
    data: PageData;
  }

  const { data }: Props = $props();

  const { numberOfBlogPostsThisYear, numberOfPosts, posts } = data;

  const daysSinceFirstPost = $derived(
    differenceInCalendarDays(new Date(), new Date(posts[posts.length - 1].date))
  );

  const daysSinceLastPublish = $derived(
    differenceInCalendarDays(new Date(), new Date(posts[0].date))
  );
</script>

<BlogHead />

<Navbar />

<main class="thomaswilson-container">
  <BlogHeader
    title="Weblog"
    showRssFeed={true}
    showLinkToAllPosts={false}
    {numberOfBlogPostsThisYear}
    {daysSinceFirstPost}
    {numberOfPosts}
    averageDaysBetweenPosts={Number(daysSinceFirstPost / posts.length)}
    {daysSinceLastPublish}
  />
  <section class="section">
    <h2>All Writing</h2>
    <ul class="posts">
      {#each posts as post, index}
        <BlogPostListItem
          {index}
          content_type={post.content_type}
          book_review={post.content_type === "book_review"}
          date={post.date}
          numberOfPosts={posts.length}
          preview={(post as any).preview ?? ""}
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
</style>
