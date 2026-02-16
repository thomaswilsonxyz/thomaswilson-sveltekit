<script lang="ts">
  var value: string = 'that';
  import Navbar from '$lib/components/Navbar.svelte'

  const items = [
    {
      title: 'Thinking about my music listening.',
      text: `I'm trying to be a better citizen of the music world.  I'm digitising my (surprisingly large) physical music collection, and thinking about swapping out my phone for a dedicated MP3 player.  I'm using <a href="https://jellyfin.org">Jellyfin</a> for organisation, and streaming.`,
    },
    {
      title: `Knitting my first sweater.`,
      text: `I picked the Jo Sweater from <i>Adorable knits</i> (<a href="https://adorable-knits.com/products/jo-sweater">link to pattern</a>)`
    },
    {
      title: `Sewing a Chore Jacket.`,
      text: `I'm sewing my second iteration of Modern Sewing Co.'s Jamie Jacket (<a href="https://modernsewingco.com/products/jaime-jacket">Link to pattern</a>) which I have modified to add a lining.  I'm using some <i>mdoerately</i> thick wool, from the 2025 Heart of Huddersfield Collection from Fabworks (<a href="https://fabworks.co.uk/pages/hoh-2025-overview-page">link to fabric</a>)`
    },
    {
      title: 'Using Fedora Linux',
      text: `on my workstation.  I'm running an experiment in 2026 to see how much for my day-to-day computing I can do on linux.`,
    },
  ]

</script>

<Navbar />


<div class="now">
  <section class="intro">
    <h1 class="title">Now</h1>
    <p class="intro__text">This is a living page of little(ish) projects I am doing at the moment.</p>
    <p class="intro__text last-updated">Accurate (probably) as of 2026-02-14 (💘)</p>
  </section>

  <section class="list">
    <ul>
      {#each items as item}
        <li class='item'>
          <b class='item__title'>{item.title}</b> {@html item.text}
        </li>
      {/each}
    </ul>
    <hr />
  </section>


  <section class="links">
    <p> 
      Check out my <a href="/blog">weblog</a>, or go <a href="/">back home</a>.
    </p>
  </section>
</div>


<style>
  .now {
    font-size: 1rem;
    display: grid;
    grid-template-rows: min-content max-content auto;
    gap: 24px;
    align-items: center;
    min-height: 100vh;
    width: 100dvw;

    hr {
      width: 80%
    }
  }


  .title {
    font-size: 3.5rem;
  }

  .intro {
    flex-direction: column;
    display: flex;
    align-items: center;
    font-size: 1.1rem;
    border-bottom: 1px solid var(--colour-scheme-text);
    padding: var(--spacing-base);

    container-type: inline-size;
  }

  .intro__text {
    width: 100%;
    @container (width > 850px) {
      width: 100%;
      max-width: 60ch;
      text-align: center;
    }
  }

  .last-updated {
    font-size: 0.85rem;
  }

  .list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;

    li {
      max-width: 65ch;
      padding-bottom: 12px;
    }
  }

  .links {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-items: flex-start;
    p {
      text-align: center;
    }

  }

</style>
