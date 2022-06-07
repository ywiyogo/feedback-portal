<script lang="ts">
  // first run the fetch feedback data
  import { feedbackList, getFeedbackById } from "../../stores/FeedbackStore.ts";
  import { page } from "$app/stores";

  let feedback_data: any[] = [];
  let id: string = "";
  $: {
    id = $page.params.id.substring(1);
    if (id) {
      const data = $feedbackList.filter((feedback: any) => {
        return feedback.id.includes(id);
      });
      feedback_data = [...data];
    }
  }
</script>

<svelte:head>
  <title>Feedback -</title>
</svelte:head>

<div class="flex flex-col items-center">
  <h1 class="text-4xl text-center my-8 uppercase">{feedback_data[0].title}</h1>
  <p>
    Date: <strong>{feedback_data[0].date}</strong>
    | City: {feedback_data[0].city}
  </p>
  <img class="card-image" src="" alt="" />

  <p class="mx-3 lg:mx-10 bg-transparent mt-8">
    {feedback_data[0].description}
  </p>
</div>
