<script lang="ts">
  import { format as formatDate } from "date-fns";
  // TODO: move somewhere common
  interface BlogPost {
    title: string;
    slug: string;
    date: string;
  }

  interface Props {
    latestBlogPosts?: BlogPost[];
  }

  let { latestBlogPosts = [] }: Props = $props();
</script>

<section class="homepage-header">
  <h1 class="title">Thomas Wilson-Cook</h1>
  <p class="body strapline">
    I craft well-meaning things, like software, clothes, photographs, and words.
  </p>
  <p class="body strapline">
    I want to help build things that don&apos;t rely on exploitation, excessive
    waste, or dishonesty; and to try and build a kinder, fairer world even when
    it's hard.
  </p>

  <hr />
  <p class="body">
    I try to think and be curious, which is why I keep a <a href="/blog"
      >weblog</a
    >
    and, equally worth mentioning, what got me through a
    <a
      class="thesis"
      target="_blank"
      rel="noopener noreferrer"
      href="https://eprints.soton.ac.uk/418168/"
      >Ph.D. in Education Technology</a
    >.
  </p>
  <p class="body">Here are some things I've written recently:</p>

  <ol class="latest-blog-posts">
    {#each latestBlogPosts as post}
      <li>
        <a href="/blog/{post.slug}">{post.title}</a> ({formatDate(
          new Date(post.date),
          "yyyy-MM-dd"
        )})
      </li>
    {/each}
  </ol>

  <p class="body">
    Right now I am a Senior Software engineer at <a
      href="https://www.laka.co.uk"
      target="_blank"
      rel="noopener noreferrer">Laka</a
    >, making insurance genuinely fairer. Before that, I was Head of Software
    Engineering at
    <a href="https://www.oxwash.com" target="_blank" rel="noopener noreferrer"
      >Oxwash</a
    >, building tools for actually sustainable laundry and wet cleaning.
  </p>
</section>

<style>
  .homepage-header {
    display: grid;
    padding: 0 12px;
    gap: 8px;
    font-size: var(--font-size-md);
    font-family: var(--font-family-serif);
    max-width: 60ch;
  }

  a,
  ol,
  li,
  p {
    color: var(--text-color);
    font-family: inherit;
    font-size: inherit;
    width: 100%;
    max-width: 60ch;
    padding-bottom: 8px;
  }

  .mission-statement {
    display: flex;
    padding: 12px 34px;
    font-family: inherit;
    font-size: var(--font-size-lg);
    max-width: 100%;
    margin-bottom: 24px;
  }

  hr {
    border: 0;
    border-top: 1px solid white;
    margin: 24px 0;
  }

  .title {
    font-weight: 400;
    font-family: inherit;
    padding-bottom: 1.85rem;
    text-align: center;
  }

  .body {
    text-align: left;
    line-height: 160%;
  }

  .body.strapline {
    font-size: var(--font-size-lg);
    line-height: 140%;
  }

  .latest-blog-posts {
    list-style-position: inside;
  }
</style>
