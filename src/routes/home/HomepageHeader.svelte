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
  <h1 class="title">(Thomas) Wilson</h1>
  <p class="body">Hand-maker of things, notably software and clothes.</p>
  <p class="body">My personal goal is to:</p>
  <blockquote class="mission-statement">
    make things stronger which don&apos;t rely on exploitation, excessive waste,
    or dishonesty; and to try and build a kinder, fairer world even when it's
    hard.
  </blockquote>
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
    font-family: monospace;
    display: grid;
    place-items: center;
    padding: 0 12px;
  }

  a,
  ol,
  li,
  p {
    color: var(--text-color);
    font-family: inherit;
    width: 100%;
    max-width: 60ch;
  }

  .title {
    font-weight: 400;
    font-family: inherit;
    padding-bottom: 1.85rem;
  }

  .body {
    text-align: left;
    line-height: 160%;
  }

  .latest-blog-posts {
    list-style-position: inside;
  }
</style>
