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
                <p>{{ messages[0] }}</p>
                <p class="text-sm text-gray-600">The comment is encouraging and supportive, telling the person not to be disheartened because they have more knowledge and expertise compared to others their age. It is a positive and uplifting message.
                </p>
              </div>
            </div>
            <div class="rounded-lg border bg-card text-card-foreground shadow-sm w-full" data-v0-t="card">
              <div class="p-3">
                <div
                  class="inline-flex items-center rounded-full whitespace-nowrap border px-2.5 py-0.5 w-fit text-xs font-semibold transition-colors border-transparent bg-[#e53e3e] text-secondary-foreground hover:bg-secondary/80 mb-2 text-white"
                  :style="{ backgroundColor: label_map['Sexist'] }">
                  Sexist
                </div>
                <p>{{ messages[1] }}</p>
                <p class="text-sm text-gray-600">The manager is discriminating against the employee based on her
                  pregnancy status and gender. Preventing a pregnant woman from being seen by clients is a form of
                  pregnancy discrimination and reflects a sexist attitude that pregnant women should be hidden away.</p>
              </div>
            </div>
            <div class="rounded-lg border bg-card text-card-foreground shadow-sm w-full" data-v0-t="card">
              <div class="p-3">
                <div
                  class="inline-flex items-center rounded-full whitespace-nowrap border px-2.5 py-0.5 w-fit text-xs font-semibold transition-colors border-transparent bg-[#e53e3e] text-secondary-foreground hover:bg-secondary/80 mb-2 text-white"
                  :style="{ backgroundColor: label_map['Toxic'] }">
                  Toxic
                </div>
                <p>{{ messages[2] }}</p>
                <p class="text-sm text-gray-600">The comment uses insulting language to call the author a 'waste of space', which is a toxic and demeaning thing to say about someone. The tone is hostile and dismissive.</p>
              </div>
            </div>
            <div class="rounded-lg border bg-card text-card-foreground shadow-sm w-full" data-v0-t="card">
              <div class="p-3">
                <div
                  class="text-white inline-flex items-center rounded-full whitespace-nowrap border px-2.5 py-0.5 w-fit text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent text-secondary-foreground hover:bg-secondary/80 mb-2 bg-[#ef4444]"
                  :style="{ backgroundColor: label_map['Toxic'] }">
                  Toxic
                </div>
                <p>{{ messages[3] }}</p>
                <p class="text-sm text-gray-600">Calling someone a 'drama queen' in a dismissive way is a toxic put-down that minimizes their feelings or concerns. It's a gendered insult that is often used to criticize women's emotional expressions as overblown or attention-seeking.</p>
              </div>
            </div>
            <div class="rounded-lg border bg-card text-card-foreground shadow-sm w-full" data-v0-t="card">
              <div class="p-3">
                <div
                  class="text-white inline-flex items-center rounded-full whitespace-nowrap border px-2.5 py-0.5 w-fit text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent text-secondary-foreground hover:bg-secondary/80 mb-2 bg-[#dd6b20]"
                  :style="{ backgroundColor: label_map['Positive'] }">
                  Positive
                </div>
                <p>{{ messages[4] }}</p>
                <p class="text-sm text-gray-600">The comment is providing constructive feedback in an encouraging way. It acknowledges the person's effort, while gently suggesting they try to think of a more original idea. The tone is positive and supportive.</p>
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
      </div>

    </div>






    <div class="col-span-1  flex justify-center  items-center">
      <button
        class="mt-4 bg-[#0A065D] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        @click="moderateForum">
        {{ view === 'start' ? 'Moderate Forum' : (view === 'moderate' ? 'Get Results' : 'Try Again') }}

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
      "Hassan: Don't disheart, people your age don't have as much knowledge and experties as yours",
      "Bob: My male manager said, ‘You are not to be seen by clients while you are visibly pregnant",
      "Carl: Whoever worte this is waste of space ",
      "Charles: She such a drama queen",
      "Alice: It's okay , but there already exists something like this, I am sure you can come up with a new idea"
    ])

    const result_messages = ref([
      "Hassan: Don't disheart, people your age don't have as much knowledge and experties as yours",
      "comment has been deleted by moderator",
      "comment has been deleted  by moderator",
      "comment has been deleted  by moderator",
      "Alice: It's okay , but there already exists something like this, I am sure you can come up with a new idea"
    ])

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
    const view = ref('start')

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

      else if (this.view == 'result') {
        window.location.reload()
      }
    }

    return {
      emergency_patients, messages, inputContent, moderate_view,
      moderateForum, view,
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
</style>./LandingPageView.vue