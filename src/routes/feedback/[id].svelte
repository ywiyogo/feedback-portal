<script lang="ts">
  // first run the fetch feedback data
  import { page } from "$app/stores";
  import { supabase } from "../../supabase.ts";

  let id: string = "";

  // works but it shows an error "Uncaught (in promise) TypeError: ctx[0] is undefined"
  // $: {
  //   id = $page.params.id.substring(1);
  //   if (id) {
  //     getFeedbackById(id);
  //     const data = $feedbackList.filter((feedback: any) => {
  //       console.log("Test feedback");
  //       console.log(feedback);
  //       return feedback.id.includes(id);
  //     });
  //     console.log("Test data");
  //     console.log(data);
  //     feedback_data = data[0];
  //   }
  // }

  async function getFeedback(id: string) {
    const { data, error } = await supabase
      .from("feedbacks")
      .select()
      .eq("id", id);
    if (error) {
      return console.error(error);
    } else {
      // the return data is an array
      return data[0];
    }
  }
  let promise = getFeedback($page.params.id.substring(1));
</script>

<div class="flex flex-col items-center">
  {#await promise}
    <h1 class="text-4xl text-center my-8 uppercase">Loading ...</h1>
  {:then feedback_data}
    <h1 class="text-4xl text-center my-8 uppercase">{feedback_data.title}</h1>
    <p>
      Date: <strong>{feedback_data.date}</strong>
      | City: {feedback_data.city}
    </p>
    <img class="card-image" src="" alt="" />

    <p class="mx-3 lg:mx-10 bg-transparent mt-8">
      {feedback_data.description}
    </p>
  {/await}
</div>
