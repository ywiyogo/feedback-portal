<script lang="ts">
  import EntryForm from "../components/FeedbackForm.svelte";
  import { supabase } from "../supabase.ts";
  import { user } from "../stores/AuthStore.ts";
  import { feedbackList, loadFeedbacks } from "../stores/FeedbackStore.ts";
  import Feedback from "../components/Feedback.svelte";
import { page } from "$app/stores";

  user.set(supabase.auth.user());
  supabase.auth.onAuthStateChange((_, session: any) => {
    user.set(session?.user);
    if (session?.user) {
      loadFeedbacks(true);
    }
  });

  // Search logic
  let searchText: string = "";
  let filteredFeedbacks: any[] = [];
  $: {
    console.log(searchText);
    if (searchText) {
      const f_title = $feedbackList.filter((feedback: any) =>
        feedback.title.toLowerCase().includes(searchText.toLowerCase())
      );
      const f_city = $feedbackList.filter((feedback: any) => {
        if (feedback.city) {
          let test = feedback.city
            .toLowerCase()
            .includes(searchText.toLowerCase());
          return test;
        } else {
          // do not return [] to avoid duplication
          return false;
        }
      });
      const f_descr = $feedbackList.filter((feedback: any) =>
        feedback.description.toLowerCase().includes(searchText.toLowerCase())
      );

      // Merge without duplication
      filteredFeedbacks = [...new Set([...f_title, ...f_city, ...f_descr])];
    } else {
      filteredFeedbacks = [...$feedbackList];
    }
  }
  // load the entries from the DB
  if (!!supabase.auth.user()) {
    loadFeedbacks(true);
  } else {
    loadFeedbacks();
  }

</script>

<main>
  <h1 class="my-6 text-2xl text-center font-bold text-gray-800 md:text-3xl">
    Feedback Portal
  </h1>
  {#if $user}
    <EntryForm />
  {/if}
  <input
    type="text"
    name="search"
    bind:value={searchText}
    class="w-full rounded-md text-lg p-4 my-6 border-2"
    placeholder="Search text"
  />
  <h3>List of Feedbacks</h3>
  <div class="flex flex-row flex-wrap justify-around">
    {#each filteredFeedbacks as feedback}
      <Feedback {feedback} index={feedback.id} />
    {/each}
  </div>
</main>
