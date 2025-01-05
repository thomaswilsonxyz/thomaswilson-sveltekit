<script lang="ts">
  import Navbar from "$lib/components/Navbar.svelte";
  import HomepageHeader from "./home/HomepageHeader.svelte";

  let { data = { latestBlogPosts: [] } } = $props();
</script>

<svelte:head>
  <title>Thomas Wilson</title>
</svelte:head>

<Navbar />

<main class="home">
  <HomepageHeader latestBlogPosts={data.latestBlogPosts} />
</main>

<style>
  .home {
    display: flex;
    flex-direction: column;
    place-items: center;
  }
</style>
