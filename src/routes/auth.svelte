<script lang="ts">
  import Auth from "../components/Auth.svelte";
  import { user } from "../stores/AuthStore.ts";
</script>

{#if $user}
  <p>You've already logged in successfully!</p>
{:else}
  <Auth />
{/if}
