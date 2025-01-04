<script lang="ts">
  import { format as formatDate } from "date-fns";

  interface Props {
    index: number;
    numberOfPosts: number;
    book_review: boolean;
    title: string;
    preview: string;
    slug: string;
    date: string;
    content_type: "blog" | "book_review" | "snout_street_studios";
  }

  let {
    index,
    numberOfPosts,
    book_review,
    title,
    preview,
    slug,
    date,
    content_type
  }: Props = $props();

  let formattedDate = $derived(formatDate(new Date(date), "yyyy-MM-dd"));
</script>

<li
  class="post"
  role="article"
  aria-posinset={index + 1}
  aria-setsize={numberOfPosts}
>
  <a href={`/blog/${slug}`}>
    <div class="post__title">
      {#if content_type === "book_review"}
        📚
      {:else if content_type === "snout_street_studios"}
        🪡
      {/if}
      {title}
    </div>

    <div class="post__preview">
      {#if preview}
        {preview}...
      {:else}
        No preview available ): Click to read the full post.
      {/if}
    </div>

    <div class="post__date">
      {formattedDate}
    </div>
  </a>
</li>

<style>
  .post {
    border: 1px solid var(--gray-200);
    padding: var(--spacing-lg);
    transition: 0.2s;
    border-radius: 8px;
    max-width: 100%;
  }

  .post:hover {
    color: var(--brand-orange);
    background-color: var(--colour-scheme-background-accent);
    border: 1px solid var(--brand-orange);
    scale: 1.02;
    box-shadow: 10px 10px 10px 10px rgba(0, 0, 0, 0.5);
  }

  .post a {
    color: inherit;
    text-decoration: none;
  }

  .post__title {
    text-decoration: underline;
    font-family: var(--font-family-title);
    font-weight: 600;
    padding-bottom: var(--spacing-md);
    font-size: var(--font-size);
    letter-spacing: 0px;
  }

  .post__preview {
    font-size: var(--font-size-sm);
    letter-spacing: -0.5px;
    line-height: 135%;
    color: var(--gray-600);
    padding-bottom: var(--spacing-md);
  }

  .post__date {
    font-size: 0.9rem;
  }
</style>
