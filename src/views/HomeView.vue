<template>

  <div class="grid grid-cols-3 gap-4">
    <div class="col-span-2 pl-8">


      <h2 class="text-center text-2xl font-semibold mb-4 p-4">Forum Messages</h2>

      <div v-if="moderate_view === false">
        <div class="p-4">
          <div class="message-card" v-for="(message, index) in messages" :key="index">

            <div class="border rounded-lg shadow-md p-4 pl-8">
              {{ message }}
            </div>
          </div>
        </div>


        <div class="mb-2">
          <textarea class="p-2 form-textarea mt-1 block w-full rounded-md border-[#A3816A] border " rows="4"
            placeholder="Enter your comment here." v-model="inputContent"></textarea>
        </div>
        <div class="text-right">
          <button
            class="mt-4 bg-[#0A065D] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            @click="addMessage">
            Submit Comment
          </button>
        </div>

      </div>

      <div class="bg-white" v-if="moderate_view">
        <main class="container mx-auto p-4">
          <div class="space-y-4">
            <div class="rounded-lg border bg-card text-card-foreground shadow-sm w-full" data-v0-t="card">
              <div class="p-3">
                <div
                  class="inline-flex items-center rounded-full whitespace-nowrap border px-2.5 py-0.5 w-fit text-xs font-semibold transition-colors border-transparent bg-[#e53e3e] text-secondary-foreground hover:bg-secondary/80 mb-2 text-white">
                  Toxic
                </div>
                <p>User1: Wow that's an amazing idea!</p> <!-- Hardcoded message -->
                <p class="text-sm text-gray-600">Contains harsh language not suitable for the forum.</p>
              </div>
            </div>
            <div class="rounded-lg border bg-card text-card-foreground shadow-sm w-full" data-v0-t="card">
              <div class="p-3">
                <div
                  class="inline-flex items-center rounded-full whitespace-nowrap border px-2.5 py-0.5 w-fit text-xs font-semibold transition-colors border-transparent bg-[#e53e3e] text-secondary-foreground hover:bg-secondary/80 mb-2 text-white">
                  Toxic
                </div>
                <p>Bob: Go back to the kitchen and make me a sandwich</p> <!-- Hardcoded message -->
                <p class="text-sm text-gray-600">Contains harsh language not suitable for the forum.</p>
              </div>
            </div>
            <div class="rounded-lg border bg-card text-card-foreground shadow-sm w-full" data-v0-t="card">
              <div class="p-3">
                <div
                  class="inline-flex items-center rounded-full whitespace-nowrap border px-2.5 py-0.5 w-fit text-xs font-semibold transition-colors border-transparent bg-[#e53e3e] text-secondary-foreground hover:bg-secondary/80 mb-2 text-white">
                  Toxic
                </div>
                <p>Carl: Go kill yourself</p> <!-- Hardcoded message -->
                <p class="text-sm text-gray-600">Contains harsh language not suitable for the forum.</p>
              </div>
            </div>
            <div class="rounded-lg border bg-card text-card-foreground shadow-sm w-full" data-v0-t="card">
              <div class="p-3">
                <div
                  class="text-white inline-flex items-center rounded-full whitespace-nowrap border px-2.5 py-0.5 w-fit text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent text-secondary-foreground hover:bg-secondary/80 mb-2 bg-[#ef4444]">
                  Sexist
                </div>
                <p>How are you?</p>
                <p class="text-sm text-gray-600">Includes content that discriminates based on gender.</p>
              </div>
            </div>
            <div class="rounded-lg border bg-card text-card-foreground shadow-sm w-full" data-v0-t="card">
              <div class="p-3">
                <div
                  class="text-white inline-flex items-center rounded-full whitespace-nowrap border px-2.5 py-0.5 w-fit text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent text-secondary-foreground hover:bg-secondary/80 mb-2 bg-[#dd6b20]">
                  Racist
                </div>
                <p>Welcome to our chat application.</p>
                <p class="text-sm text-gray-600">Contains discriminatory remarks based on race.</p>
              </div>
            </div>


            <div class="message-card " v-for="(message, index) in messages" :key="index">

              <div class="border rounded-lg shadow-md p-4 pl-8">
                {{ message }}
              </div>
            </div>
          </div>
        </main>
      </div>

    </div>






    <div class="col-span-1  flex justify-center  items-center">
      <button
        class="mt-4 bg-[#0A065D] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        @click="moderateForum">
        Moderate Forum
      </button>
    </div>





  </div>



</template>




<script lang="js">

import axios from 'axios';
import { ref, onMounted } from 'vue'

export default {

  setup() {

    const emergency_patients = ref([]);
    const messages = ref([
      "User1: Wow that's an amazing idea!",
      "Bob: Go back to the kitchen and make me a sandwich",
      "Carl: Go kill yourself ",
      "User1: How are you going to deal with the investors? Some of the people on this forum ...",
      "Alice: It's okay, but there are already exists something like this"
    ])
    const inputContent = ref('')
    const moderate_view = ref(false)

    async function addMessage() {
      console.log("added message")
      this.messages.push(`You: ${inputContent.value}`);





      // let api_url = "https://healthomatic-psi.vercel.app"
      // console.log("API URL:", api_url)
      // api_url = 'http://127.0.0.1:8000'

      // axios.get(`${api_url}/patients/${priority}`)
      //   .then(response => {
      //     if (priority === 'Emergency') {
      //       emergency_patients.value = response.data;
      //     }
      //   })
      //   .catch(error => {
      //     console.error('Error fetching patients:', error);
      //   });
    };

    async function moderateForum() {
      console.log("Shows labels and descriptions")
      this.moderate_view = true
    }


    return {
      emergency_patients, messages, inputContent, moderate_view,
      moderateForum,
      addMessage,
    }
  }
}



</script>


<style>
.responsive-toolbar span.block {
  font-size: 16px;

}
</style>./HomeView.vue