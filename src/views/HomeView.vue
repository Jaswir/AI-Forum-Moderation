<template>

  <div class="grid grid-cols-3 gap-4">
    <div class="col-span-2 pl-8">


      <h2 class="text-center text-2xl font-semibold mb-4 p-4">Forum Messages</h2>

      <div v-if="view === 'start'">
        <div class="space-y-4">
          <div class="message-card" v-for="(message, index) in messages" :key="index">

            <div class="border rounded-lg shadow-md p-4 pl-8">
              {{ message }}
            </div>
          </div>

          <div class="message-card" v-for="(message, index) in addedMessages" :key="index">

            <div class="border rounded-lg shadow-md p-4 pl-8">
              {{ message }}
            </div>

          </div>
        </div>


        <div class="mb-2 pt-4">
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

      <div class="bg-white" v-if="view == 'moderate'">
        <main class="container mx-auto p-4">
          <div class="space-y-4">
            <div class="rounded-lg border bg-card text-card-foreground shadow-sm w-full" data-v0-t="card">
              <div class="p-3">
                <div
                  class="inline-flex items-center rounded-full whitespace-nowrap border px-2.5 py-0.5 w-fit text-xs font-semibold transition-colors border-transparent text-secondary-foreground hover:bg-secondary/80 mb-2 text-white"
                  :style="{ backgroundColor: label_map['Positive'] }">
                  Positive
                </div>
                <p>User1: Wow that's an amazing idea!</p> <!-- Hardcoded message -->
                <p class="text-sm text-gray-600">Contains harsh language not suitable for the forum.</p>
              </div>
            </div>
            <div class="rounded-lg border bg-card text-card-foreground shadow-sm w-full" data-v0-t="card">
              <div class="p-3">
                <div
                  class="inline-flex items-center rounded-full whitespace-nowrap border px-2.5 py-0.5 w-fit text-xs font-semibold transition-colors border-transparent bg-[#e53e3e] text-secondary-foreground hover:bg-secondary/80 mb-2 text-white">
                  Sexist
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
                  Positive
                </div>
                <p>How are you?</p>
                <p class="text-sm text-gray-600">Includes content that discriminates based on gender.</p>
              </div>
            </div>
            <div class="rounded-lg border bg-card text-card-foreground shadow-sm w-full" data-v0-t="card">
              <div class="p-3">
                <div
                  class="text-white inline-flex items-center rounded-full whitespace-nowrap border px-2.5 py-0.5 w-fit text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent text-secondary-foreground hover:bg-secondary/80 mb-2 bg-[#dd6b20]">
                  Positive
                </div>
                <p>Welcome to our chat application.</p>
                <p class="text-sm text-gray-600">Contains discriminatory remarks based on race.</p>
              </div>
            </div>


            <div class="rounded-lg border bg-card text-card-foreground shadow-sm w-full" data-v0-t="card"
              v-for="(message, index) in addedMessages" :key="index">
              <div class="p-3">

                <div
                  class="text-white inline-flex items-center rounded-full whitespace-nowrap border px-2.5 py-0.5 w-fit text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent text-secondary-foreground hover:bg-secondary/80 mb-2"
                  :style="{ backgroundColor: label_map[state_of_mind] }">
                  {{ state_of_mind }}
                </div>
                <p>{{ message }}</p>
                <p class="text-sm text-gray-600">{{ description }}</p>

              </div>
            </div>
          </div>
        </main>
      </div>

      <div v-if="view === 'result'">
        <div class="space-y-4">
          <div class="message-card" v-for="(message, index) in result_messages" :key="index">

            <div class="border rounded-lg shadow-md p-4 pl-8">
              {{ message }}
            </div>
          </div>

          <div class="message-card" v-for="(message, index) in addedMessages" :key="index">

            <div class="border rounded-lg shadow-md p-4 pl-8">
              {{ message }}
            </div>

          </div>
        </div>


        <div class="mb-2 pt-4">
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


    </div>


    <div class="col-span-1  flex justify-center  items-center">
      <button
        class="mt-4 bg-[#0A065D] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        @click="moderateForum">
        {{ view === 'start' ? 'Moderate Forum' : 'Get Results' }}
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

    const result_messages = ref([
      "User1: Wow that's an amazing idea!",
      "comment has been deleted by moderator",
      "comment has been deleted  by moderator",
      "User1: How are you going to deal with the investors? Some of the people on this forum ...",
      "Alice: It's okay, but there are already exists something like this"
    ])

    const addedMessages = ref([])

    const state_of_mind = ref('Toxic')
    const description = ref('this is not good! ')
    const label_map = ref(
      {
        "Toxic": "#fcca58",
        "Sexist": "#d73044",
        "Racist": "#4a71ad",
        "Positive": "#81ebb2"
      }
    )

    const inputContent = ref('')
    const view = ref('start')

    async function addMessage() {
      console.log("added message")
      this.addedMessages.push(`You: ${inputContent.value}`);

      // let api_url = "https://mod-guard-cqd1w4ft6-bilals-projects-972f3150.vercel.app/"

      // axios.get(`${api_url}/single_message/${inputContent.value}`)
      //   .then(response => {
      //     let res = response.data;
      //     description.value = res.description
      //     state_of_mind.value = res.stateofmind
      //     inputContent.value = ''

      //   })
      //   .catch(error => {
      //     console.error('Error fetching patients:', error);
      //   });
    };

    async function moderateForum() {


      if (this.view == 'start') {
        console.log("Shows labels and descriptions")

        this.view = 'moderate'

        let data = {
          comment: "I hate jews",
          stateofmind: "Racist",
          description: "This comment expresses hatred towards Jewish people, which is an antisemitic view. Hating an entire group based on their religion or ethnicity is discriminatory and hateful."
        }

        this.state_of_mind = data.stateofmind
        this.description = data.description

      }

      else if (this.view == 'moderate') {
        console.log("Getting Results")
        this.view = 'result'
        this.messages = this.result_messages
      }
    }

    return {
      emergency_patients, messages, inputContent, view,
      moderateForum,
      addedMessages, result_messages,
      state_of_mind, description, label_map,
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