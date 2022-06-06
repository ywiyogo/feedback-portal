<!-- Feedback Component describes the html visualization and interaction logic -->
<script lang="ts">
  import {
    type IFeedback,
    deleteFeedback,
    toggleFeedbackReviewed,
  } from "../stores/FeedbackStore";
  import { user } from "../stores/AuthStore";
  export let feedback: any;
</script>

<div class="w-full bg-white p-2 m-3 border my-4">
  <div class="flex-col">
    <!-- Profile Card -->
    <div
      class="rounded-lg shadow-lg bg-gray-600 h-full p-3 antialiased"
      style="
  background-image: url('https://images.unsplash.com/photo-1578836537282-3171d77f8632?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80');
  background-repeat: no-repat;
  background-size: cover;
  background-blend-mode: multiply;
"
    >
      <div class="w-full h-500 px-3 flex-auto flex-wrap justify-end">
        <div
          class="w-full flex-col text-right text-gray-700 font-semibold relative pt-3"
        >
          <div class="text-2xl flex-auto text-white leading-tight">
            {feedback.title}
          </div>
          <div
            class="text-normal flex-auto  text-gray-300 hover:text-gray-400 cursor-pointer"
          >
            <span class="border-b border-dashed border-gray-500 pb-1"
              >{feedback.city}</span
            >
          </div>
        </div>
      </div>
      <div class="w-full flex relative px-3">
        <div class="w-1/12 justify-start">
          <img
            class="rounded-lg shadow-lg antialiased"
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
            alt={feedback.object_id}
          />
        </div>
      </div>
      <div class="mb-2 text-white">
        <span class="font-medium mr-2">ID: {feedback.object_id}</span>
      </div>
      <div
        class="text-sm text-right flex-auto px-3  text-gray-300 hover:text-gray-400 cursor-pointer  bottom-0 right-0"
      >
        Occurence date: <b>{feedback.date}</b>
      </div>
      <div class="w-full flex text-right px-3">
        <span
          class={`flex-1 text-green-400 ${feedback.reviewed ? "" : "invisible"}`}
          >Verified</span
        >
      </div>
    </div>
    <!-- End Profile Card -->
  </div>
  <div class="mx-auto flex-auto">
    <div class=" mb-2 text-md">{feedback.description}</div>
  </div>
</div>
