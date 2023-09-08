<script lang="ts">
  import { createEventDispatcher } from "svelte";

  export let id: string;
  export let name: string;
  export let salary: number;
  export let count: number;

  const dispatch = createEventDispatcher<{
    change: { name: string; salary: number; count: number };
    remove: { id: string };
  }>();

  function handleChange() {
    dispatch("change", { name, salary, count });
  }

  function handleRemove() {
    console.log("handleRemove", { id });
    dispatch("remove", { id });
  }
</script>

<form>
  <div class="form__field">
    <label for="name">Job Title</label>
    <input
      type="text"
      placeholder="Junior Software Engineer"
      bind:value="{name}"
      on:input="{handleChange}"
    />
  </div>
  <div class="form__field">
    <label for="name">Salary (Year)</label>
    <input
      type="number"
      step="1"
      placeholder="30,000"
      bind:value="{salary}"
      on:change="{handleChange}"
    />
  </div>
  <div class="form__field">
    <label for="name"># of them </label>
    <input
      type="number"
      step="1"
      placeholder="30,000"
      bind:value="{count}"
      on:change="{handleChange}"
    />
  </div>
  <button type="button" on:click="{handleRemove}"> Remove </button>
</form>

<style>
  form {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 8px;
  }

  .form__field {
    display: grid;
    grid-template-columns: 1fr;
  }
</style>
