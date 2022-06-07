<script lang="ts">
  import "../styles/app.css";
  import Navbar from "../components/Navbar.svelte";
</script>

<main>
  <div class="container max-w-7xl mx-auto py-8 px-3">
    <Navbar />
    <!-- Show the authentication page if no user logged in -->
    <slot />
  </div>
</main>
