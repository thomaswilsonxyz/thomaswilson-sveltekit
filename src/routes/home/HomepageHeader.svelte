<script lang="ts">
  import { format as formatDate } from "date-fns";
  // TODO: move somewhere common
  interface BlogPost {
    title: string;
    slug: string;
    date: string;
  }

  export let latestBlogPosts: BlogPost[] = [];
</script>

<section class="homepage-header">
  <h1 class="title">(Thomas) Wilson</h1>
  <p class="body">
    I love the craft of well-built things: mostly software (~8 years), but also
    clothes (~2 years).
  </p>
  <p class="body">
    I work against systems which rely on exploitation, excessive waste, and
    dishonesty. I'm trying to build a kinder and fairer world, and I find that
    hard sometimes.
  </p>
  <p class="body">
    I try to think and be curious, that's why I keep a <a href="/blog">weblog</a
    >. And (equally embarrassing to say) probably what got me through a
    <a
      class="thesis"
      target="_blank"
      rel="noopener noreferrer"
      href="https://eprints.soton.ac.uk/418168/"
      >Ph.D. in Education Technology</a
    >.
  </p>
  <p class="body">Here are some things I've written recently:</p>

  <ol>
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
    >, building tools actually fairer insurance. Before that, I was Head of
    Software Engineering at
    <a href="https://www.oxwash.com" target="_blank" rel="noopener noreferrer"
      >Oxwash</a
    >, building tools for actually sustainable laundry.
  </p>
</section>

<style>
  .homepage-header {
    font-family: monospace;
    display: grid;
    place-items: center;
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
  }

  .body {
    text-align: left;
  }
</style>
