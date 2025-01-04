<script lang="ts">
    import "../../../styles/prism.css";
    interface Props {
        children?: import('svelte').Snippet;
    }

    let { children }: Props = $props();
</script>

<svelte:head>
    <script src="/prism.js"></script>
</svelte:head>

{@render children?.()}