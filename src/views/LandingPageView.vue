<template>

    <div class="grid grid-cols-3 gap-4">
      <div class="col-span-2 pl-8">
  
  
        <h2 class="text-center text-2xl font-semibold mb-4 p-4">Forum Messages</h2>
  
        <div v-if="moderate_view === false">
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
  
        <div class="bg-white" v-if="moderate_view">
          <main class="container mx-auto p-4">
            <div class="space-y-4">
              <div class="rounded-lg border bg-card text-card-foreground shadow-sm w-full" data-v0-t="card">
                <div class="p-3">
                  <div
                    class="inline-flex items-center rounded-full whitespace-nowrap border px-2.5 py-0.5 w-fit text-xs font-semibold transition-colors border-transparent text-secondary-foreground hover:bg-secondary/80 mb-2 text-white"
                    :style="{backgroundColor: label_map['Positive']}">
                    Positive
                  </div>
                  <p>Hassan: Don't disheart, in your age people don't have much knowledg and experties as yours"</p> <!-- Hardcoded message -->
                  <p class="text-sm text-gray-600">It's giving comfort to a person that's why it is labeled as positive</p>
                </div>
              </div>
              <div class="rounded-lg border bg-card text-card-foreground shadow-sm w-full" data-v0-t="card">
                <div class="p-3">
                  <div
                    class="inline-flex items-center rounded-full whitespace-nowrap border px-2.5 py-0.5 w-fit text-xs font-semibold transition-colors border-transparent bg-[#e53e3e] text-secondary-foreground hover:bg-secondary/80 mb-2 text-white"
                    :style="{backgroundColor: label_map['Sexist']}">
                    Sexist
                  </div>
                  <p>Bob: My male manager said, You are not to be seen by clients while you are visibly pregnant</p> <!-- Hardcoded message -->
                  <p class="text-sm text-gray-600">It's pointing out pregnancy of women and not allowing her to be see by clients that's why it's labeled as sexist</p>
                </div>
              </div>
              <div class="rounded-lg border bg-card text-card-foreground shadow-sm w-full" data-v0-t="card">
                <div class="p-3">
                  <div
                    class="inline-flex items-center rounded-full whitespace-nowrap border px-2.5 py-0.5 w-fit text-xs font-semibold transition-colors border-transparent bg-[#e53e3e] text-secondary-foreground hover:bg-secondary/80 mb-2 text-white"
                    :style="{backgroundColor: label_map['Toxic']}">
                    Toxic
                  </div>
                  <p>Carl: Whoever worte this is waste of space</p> <!-- Hardcoded message -->
                  <p class="text-sm text-gray-600">Contains harsh language not suitable for the forum.</p>
                </div>
              </div>
              <div class="rounded-lg border bg-card text-card-foreground shadow-sm w-full" data-v0-t="card">
                <div class="p-3">
                  <div
                    class="text-white inline-flex items-center rounded-full whitespace-nowrap border px-2.5 py-0.5 w-fit text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent text-secondary-foreground hover:bg-secondary/80 mb-2 bg-[#ef4444]"
                    :style="{backgroundColor: label_map['Positive']}">
                    Positive
                  </div>
                  <p>Alice: It's okay , but there are already exists something like this, I am sure you can come up with new idea</p>
                  <p class="text-sm text-gray-600">It's giving hope to a person that's why labeled as positive</p>
                </div>
              </div>
              <div class="rounded-lg border bg-card text-card-foreground shadow-sm w-full" data-v0-t="card">
                <div class="p-3">
                  <div
                    class="text-white inline-flex items-center rounded-full whitespace-nowrap border px-2.5 py-0.5 w-fit text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent text-secondary-foreground hover:bg-secondary/80 mb-2 bg-[#dd6b20]"
                    :style="{backgroundColor: label_map['Toxic']}">
                    Positive
                  </div>
                  <p>Charles: She such a drama queen</p>
                  <p class="text-sm text-gray-600">Contains discriminatory remarks based on race.</p>
                </div>
              </div>
  
  
              <div class="rounded-lg border bg-card text-card-foreground shadow-sm w-full" data-v0-t="card"
                v-for="(message, index) in addedMessages" :key="index">
                <div class="p-3">
  
                  <div
                    class="text-white inline-flex items-center rounded-full whitespace-nowrap border px-2.5 py-0.5 w-fit text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent text-secondary-foreground hover:bg-secondary/80 mb-2"
                    :style="{ backgroundColor: label_map[state_of_mind]}">
                    {{ state_of_mind }}
                  </div>
                  <p>{{ message }}</p>
                  <p class="text-sm text-gray-600">{{ description }}</p>
  
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
          {{ moderate_view ? 'Moderate' : 'Get Results' }}
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
        "Gh: Don't disheart, in your age people don't have much knowledg and experties as yours",
        "Bob: My male manager said, ‘You are not to be seen by clients while you are visibly pregnant",
        "Carl: Whoever worte this is waste of space ",
        "Charles: She such a drama queen",
        "Alice: It's okay , but there are already exists something like this, I am sure you can come up with new idea"
      ])
    //   const messages = ref([
    //   { content: "Gh: Don't disheart, in your age people don't have much knowledge and expertise as yours" },
    //   { content: "Bob: My male manager said, ‘You are not to be seen by clients while you are visibly pregnant" },
    //   { content: "Carl: Whoever wrote this is a waste of space" },
    //   { content: "Charles: She's such a drama queen" },
    //   { content: "Alice: It's okay, but there are already something like this, I am sure you can come up with new idea" }
    // ])
      const addedMessages = ref([])
  
      const state_of_mind = ref('Toxic')
      const description = ref('this is not good! ')
      const label_map = ref(
        {
          "Toxic": "#800080",
          "Sexist": "#d73044",
          "Racist": "#4a71ad",
          "Positive": "#0e7829"
        }
      )
  
      const inputContent = ref('')
      const moderate_view = ref(false)
  
  
      async function addMessage() {
        console.log("added message")
        this.addedMessages.push(`You: ${inputContent.value}`);
        inputContent.value = ''
  
  
  
  
  
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
  
        let data = {
          comment: "I hate jews",
          stateofmind: "Racist",
          description: "This comment expresses hatred towards Jewish people, which is an antisemitic view. Hating an entire group based on their religion or ethnicity is discriminatory and hateful."
        }
  
  
        this.state_of_mind = data.stateofmind
        this.description = data.description
      }
  
  
      return {
        emergency_patients, messages, inputContent, moderate_view,
        moderateForum,
        addedMessages,
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
  </style>./LandingPageView.vue