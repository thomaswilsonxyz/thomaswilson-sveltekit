<script lang="ts">
  import { format as formatDate } from "date-fns";
  import { BlogPost } from "$lib/blog/BlogPost.js";
  import { goto } from "$app/navigation";
  let title = "";
  let author = "Thomas Wilson";
  let date = new Date();
  let content = "";
  let slug = "";
  let blogPost: BlogPost | null = null;

  $: safeContent = JSON.stringify(content);

  function slugifyString(originalString: string): string {
    return originalString
      .toLowerCase()
      .replaceAll(/ /g, "-")
      .replaceAll(/[^a-zA-Z0-9-]+/g, "")
      .replaceAll(/-+/g, "-");
  }

  function handleTitleChange() {
    const dateAsString = formatDate(date, "yyyy-MM-dd");
    const slugifiedTitle = slugifyString(title);
    slug = `${dateAsString}-${slugifiedTitle}`;
  }

  async function onCreatePreviewBlogPost() {
    const _blogPost = new BlogPost({
      author,
      title,
      markdownContent: content,
      slug,
      date,
      fileName: `${slug}.md`
    });

    await _blogPost.build();
    blogPost = _blogPost;
  }

  async function onCreate() {
    const requestBody = {
      title,
      author,
      slug,
      markdownContent: JSON.stringify(content),
      fileName: `${slug}.md`,
      date: date.toISOString()
    };

    fetch("/api/blog/new.json", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(requestBody)
    }).then(async (res) => {
      if (res.status === 200) {
        return await goto(`blog/${slug}`);
      } else {
        alert("Something went wrong");
      }
    });
  }
</script>

<section class="new-blog-post">
  <h1>New Blog Post</h1>
  <form on:submit|preventDefault={onCreate}>
    <div class="field">
      <label class="field__label" for="title">Title</label>
      <input
        type="text"
        id="title"
        required
        bind:value={title}
        on:change={handleTitleChange}
      />
    </div>
    <div class="field">
      <label class="field__label" for="author">Author</label>
      <input type="text" id="author" required bind:value={author} />
    </div>

    <div class="field">
      <label class="field__label" for="slug">Slug</label>
      <input type="text" id="slug" required bind:value={slug} />
    </div>

    <div class="field">
      <label class="field__label" for="content">Content</label>
      <textarea id="content" rows="10" cols="50" bind:value={content} />
    </div>

    <div class="submit">
      <button
        class="preview-button"
        type="button"
        on:click|preventDefault={onCreatePreviewBlogPost}
      >
        Preview
      </button>
      <button class="create-button">Create</button>
    </div>
  </form>
</section>

{#if blogPost}
  <section class="preview">
    <h2>Preview</h2>
    <article>
      {@html blogPost.html}
    </article>
  </section>
{/if}

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

  .preview {
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: min-content 1fr;
    gap: var(--gap);
    place-items: center;
  }

  .preview article {
    width: 100%;
    max-width: 65ch;
  }
</style>
