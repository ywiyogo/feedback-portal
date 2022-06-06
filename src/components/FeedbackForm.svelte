<!-- FeedbackForm component describes the form to input a feedback. It has to be matched to the database
      title
      description
      date

-->
<script lang="ts">
  import { DateInput } from "date-picker-svelte";
  import { feedbackList, addFeedback } from "../stores/FeedbackStore.ts";
  import { user } from "../stores/AuthStore.ts";

  let feedback: any = {
    title: "",
    description: "",
    object_id: "",
    media_src: "",
    date: new Date(),
    reviewed: false,
    city: "",
    user_id: $user.id,
  };
  const handleSubmit = () => {
    addFeedback(feedback);
    feedback = {};
    console.log("submitting");
  };
</script>

<h1>Feedback form</h1>
<form action="" class="my-6" on:submit|preventDefault={handleSubmit}>
  <div class="flex flex-col mb-6">
    <label for="title" class="font-bold my-2 text-gray-800">Title</label>
    <input
      type="text"
      name="title"
      bind:value={feedback.title}
      placeholder="Title of your feedback"
      class="border p-2 shadow-sm rounded-lg border-gray-200 focus:outline-none focus:border-gray-500 "
    />
    <label for="descr" class="font-bold my-2 text-gray-800">Description</label>
    <textarea
      type="text"
      name="descr"
      bind:value={feedback.description}
      placeholder="Write your feedback here"
      class="border p-2 shadow-sm rounded-lg border-gray-200 focus:outline-none focus:border-gray-500 "
    />
    <div class="flex flex-row">
    <div class="basis-1/2 flex flex-col">
      <label for="date" class=" font-bold my-2 text-gray-800">Date</label>
      <DateInput bind:value={feedback.date} />
    </div>
  <div class="basis-1/2 flex flex-col">
    <label for="city" class="basis-1/2 font-bold my-2 text-gray-800">Where</label>
    <input
      type="text"
      name="city"
      bind:value={feedback.description}
      placeholder="City, Country"
      class="border p-2 shadow-sm rounded-lg border-gray-200 focus:outline-none focus:border-gray-500 "
    />
  </div>
  </div>
    <label for="object_id" class="font-bold my-2 text-gray-800">Object ID</label
    >
    <input
      type="text"
      name="object_id"
      bind:value={feedback.object_id}
      placeholder="Choose the object id"
      class="border p-2 shadow-sm rounded-lg border-gray-200 focus:outline-none focus:border-gray-500 "
    />
    <button
      type="submit"
      class="border w-full my-6 py-2 px-4 shadow-sm text-white bg-teal-500 hover:bg-teal-700"
      >Submit</button
    >
  </div>
</form>
