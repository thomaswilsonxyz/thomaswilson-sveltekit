<script lang="ts">
  import { format as formatDate } from "date-fns";
  let title = "";
  let author = "Thomas Wilson";
  let date = formatDate(new Date(), "yyyy-MM-dd");
  let content = "";

  function onCreate() {}
</script>

<section class="new-blog-post">
  <h1>New Blog Post</h1>
  <div class="field">
    <label class="field__label" for="title">Title</label>
    <input type="text" id="title" bind:value={title} />
  </div>
  <div class="field">
    <label class="field__label" for="author">Author</label>
    <input type="text" id="author" bind:value={author} />
  </div>

  <div class="field">
    <label class="field__label" for="date">Date</label>
    <input type="text" id="date" bind:value={date} />
  </div>

  <div class="field">
    <label class="field__label" for="content">Content</label>
    <textarea id="content" rows="10" cols="50" bind:value={content} />
  </div>

  <div class="submit">
    <button class="create-button" on:click={onCreate}>Create</button>
  </div>
</section>

<style>
  section {
    --gap: 8px;
    --padding: 8px;
    --padding-md: 16px;
  }

  .new-blog-post {
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: min-content min-content min-content 1fr;
    gap: var(--gap);
    place-items: center;
  }

  .field {
    width: 100%;
    max-width: 600px;
    display: flex;
    flex-direction: column;
  }

  .field__label {
    font-family: var(--font-family-title);
    font-size: 1.15rem;
    color: var(--grey-600);
  }

  .create-button {
    background-color: var(--brand-orange);
    color: var(--white);
    border: none;
    border-radius: 4px;
    padding: var(--padding) var(--padding-md);
    font-family: var(--font-family-title);
    font-size: 1.15rem;
    cursor: pointer;
  }
</style>
