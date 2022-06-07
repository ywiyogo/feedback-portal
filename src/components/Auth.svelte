<!-- Authentication component -->
<script lang="ts">
  import { base } from "$app/paths";
  import { page } from "$app/stores";
  import { supabase } from "../supabase.ts";
  import { goto } from "$app/navigation";
  let email: string = "";
  let passwd: string = "";
  let loading = false;

  export let mode: string;

  export const handleAuth = async () => {
    try {
      if (mode == "Login") {
        loading = true;
        const { error } = await supabase.auth.signIn({
          email: email,
          password: passwd,
        });
        if (error) throw error;
        
        goto($page.url.origin + base);
      } else if (mode == "Sign Up"){
        const { error } = await supabase.auth.signUp({
          email: email,
          password: passwd,
        });
        if (error) throw error;
        goto($page.url.origin + base);
        alert("Please check your email for a verification!");
      }
      else{
        alert("Invalid authentication mode!");
      }
    } catch (error) {
      console.error(error);
      alert(error.error_description || error.message);
    } finally {
      loading = false;
    }
  };

</script>

<h1 class="font-bold text-center text-2xl text-gray-800">{mode}</h1>


<form on:submit|preventDefault={handleAuth} class="form my-6">
  <div class="flex flex-col mb-6">
    <label for="email" class="font-bold text-gray-800">Email</label>
    <input
      type="email"
      name="email"
      class="rounded-lg shadow-sm p-2 border border-gray-200"
      placeholder="Your email"
      bind:value={email}
    />
    <input
      type="password"
      name="passwd"
      class="rounded-lg shadow-sm p-2 border border-gray-200"
      placeholder="Your password"
      bind:value={passwd}
    />
  </div>
  <div class="flex justify-end my-4">
    <button
      type="submit"
      class="rounded shadow-sm bg-teal-500 py-2 px-4 text-white"
      disabled={loading}>{mode}</button
    >
  </div>
</form>

