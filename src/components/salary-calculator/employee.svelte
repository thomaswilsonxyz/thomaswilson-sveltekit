<script lang="ts">
  import { createEventDispatcher } from "svelte";

  interface Props {
    id: string;
    name: string;
    salary: number;
    count: number;
  }

  let {
    id,
    name = $bindable(),
    salary = $bindable(),
    count = $bindable(),
  }: Props = $props();

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
      bind:value={name}
      oninput={handleChange}
    />
  </div>
  <div class="form__field">
    <label for="name">Salary (Year)</label>
    <input
      type="number"
      step="1"
      placeholder="30,000"
      bind:value={salary}
      onchange={handleChange}
    />
  </div>
  <div class="form__field">
    <label for="name"># of them </label>
    <input
      type="number"
      step="1"
      placeholder="30,000"
      bind:value={count}
      onchange={handleChange}
    />
  </div>
  <button type="button" onclick={handleRemove}> Remove </button>
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
