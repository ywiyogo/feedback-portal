<script lang="ts">
  import { supabase } from "../supabase.ts";
  import { user } from "../stores/AuthStore.ts";
  import { page } from "$app/stores";
  import { base } from '$app/paths';
  const logout = () => {
    const { error } = supabase.auth.signOut();
  };
</script>

<nav class="flex flex-row justify-center">
  <div class="text-2xl font-bold my-4 flex-auto w-3/4">
    <a href="{base}" class="mx-4">Home</a>
    <a href="{base}/about" class="mx-4">About</a>
  </div>
  <div class="my-4 flex-auto w-1/4 justify-end text-right">
    {#if $user}
      <button
        on:click={logout}
        class="rounded shadow-sm py-2 px-4  text-white bg-teal-500 hover:bg-teal-700"
        >Logout</button
      >
    {:else}
      <a href="{base}/auth">
        <button
          class={`rounded shadow-sm py-2 px-4  text-white bg-teal-500 hover:bg-teal-700 ${
            $page.routeId === "auth" ? "hidden" : ""
          }`}>Login</button
        >
      </a>
    {/if}
  </div>
</nav>
