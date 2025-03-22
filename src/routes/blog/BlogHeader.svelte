<script lang="ts">
  interface Props {
    title: string;
    showRssFeed: boolean;
    showLinkToAllPosts: boolean;
    daysSinceLastPublish: number;
    numberOfBlogPostsThisYear: number;
    averageDaysBetweenPosts: number;
    numberOfPosts: number;
    daysSinceFirstPost: number;
  }

  const {
    title,
    showLinkToAllPosts,
    showRssFeed,
    daysSinceLastPublish,
    numberOfBlogPostsThisYear,
    averageDaysBetweenPosts,
    numberOfPosts,
    daysSinceFirstPost,
  }: Props = $props();
</script>

<section class="thomaswilson-strapline section heading">
  <h1 class="page-title">{title}</h1>
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
    {numberOfBlogPostsThisYear === 1 ? "piece" : "pieces"} so far this year. On average
    I publish something every {averageDaysBetweenPosts} days ({numberOfPosts}
    posts in {daysSinceFirstPost} days).
  </p>

  {#if showLinkToAllPosts}
    <a href="/blog" class="heading__link">All Posts</a>
  {/if}

  {#if showRssFeed}
    <a href="/blog/feed" class="heading__link">RSS Feed</a>
  {/if}
</section>

<style>
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
