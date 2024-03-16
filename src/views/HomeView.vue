<template>

  <div class="bg-gray-50 dark:border-gray-950 py-12">
    <div class="container px-4 lg:px-8">
      <header class="text-center">
        <div class="max-w-3xl mx-auto">
          <div class="space-y-6">
            <div class="space-y-3">
              <h1 class="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Protect Your Community with AIGuard
              </h1>
              <p class="text-gray-600 dark:text-gray-400">
                Advanced AI moderation for forums and communities. Keep the
                conversation positive and safe.
              </p>
            </div>

            <div><img src="/public/hero_image.png" width="800" height="400" alt="Sentiment Analysis"
                class="aspect-[2.5] overflow-hidden rounded-lg object-cover w-3/2 mx-auto">
            </div>
            <div
              style="margin-left:48%; margin-top: 15px; background-color: black; width: 80px; height: 32px; border-radius:6px; display: flex; justify-content: center; align-items: center; ">
              <router-link to="/demo"
                class=" bg-secondary text-white rounded-md transition-colors hover:bg-primary/90 h-10 px-4 py-2 w-full sm:w-auto">Demo</router-link>
            </div>
            <div class="space-y-2">
              <form class="flex flex-col items-center space-y-2 sm:flex-row sm:justify-center sm:space-y-0"><input
                  type="email"
                  class="flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 max-w-md w-full sm:w-auto"
                  placeholder="Enter your email" required=""><button
                  class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full sm:w-auto"
                  type="submit">
                  Get Started
                </button></form>

              <p class="text-xs text-gray-500 dark:text-gray-400">
                Sign up to get notified when we launch. 🚀
              </p>
            </div>
          </div>
        </div>
      </header>


      <div class="grid gap-6 lg:gap-12 max-w-3xl mx-auto my-12 lg:my-24">
        <div class="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
          <div class="flex flex-col space-y-1.5 p-6 pb-6">
            <h3 class="text-2xl font-bold">Auto-Reply to Forum Posts</h3>
          </div>
          <div class="p-6 pt-4">
            <p class="text-gray-500 dark:text-gray-400">
              AIGuard can automatically respond to forum posts, providing
              instant feedback and support to your community members.
            </p>
          </div>
        </div>
        <div class="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
          <div class="flex flex-col space-y-1.5 p-6 pb-6">
            <h3 class="text-2xl font-bold">Detect Comment Quality</h3>
          </div>
          <div class="p-6 pt-4">
            <p class="text-gray-500 dark:text-gray-400">
              Our AI analyzes comments, identifying positive, negative, and
              neutral sentiments to help you understand the tone of your
              community's conversations.
            </p>
          </div>
        </div>
        <div class="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
          <div class="flex flex-col space-y-1.5 p-6 pb-6">
            <h3 class="text-2xl font-bold">Remove Bad Comments</h3>
          </div>
          <div class="p-6 pt-4">
            <p class="text-gray-500 dark:text-gray-400">
              AIGuard can automatically detect and remove inappropriate or
              offensive comments, helping you maintain a safe and welcoming
              environment for your community.
            </p>
          </div>
        </div>
      </div>
      <div class="grid gap-6 lg:gap-12 max-w-3xl mx-auto">
        <div class="flex flex-col items-center space-y-2">
          <h2 class="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            How AIGuard Works
          </h2>
          <p class="max-w-[700px] text-center text-gray-500 dark:text-gray-400">
            AIGuard uses advanced machine learning models to analyze and
            moderate forum comments, providing automated tools to help you
            manage your community.
          </p>
        </div>
        <div class="grid gap-6 md:gap-12 lg:gap-24">
          <div class="flex flex-col items-center space-y-2">
            <div class="space-y-2 text-center">
              <h3 class="text-2xl font-bold">Sentiment Analysis</h3>
              <p class="text-gray-500 dark:text-gray-400">
                AIGuard can detect the sentiment of comments, identifying
                positive, negative, and neutral tones.
              </p>
            </div><img src="" width="800" height="400" alt="Sentiment Analysis"
              class="aspect-[2.5] overflow-hidden rounded-lg object-cover">
          </div>
          <div class="flex flex-col items-center space-y-2">
            <div class="space-y-2 text-center">
              <h3 class="text-2xl font-bold">Comment Moderation</h3>
              <p class="text-gray-500 dark:text-gray-400">
                AIGuard can automatically moderate comments, flagging or
                removing inappropriate content.
              </p>
            </div><img src="" width="800" height="400" alt="Comment Moderation"
              class="aspect-[2.5] overflow-hidden rounded-lg object-cover">
          </div>
        </div>
      </div>
    </div>
  </div>;

  <div>
    <div class="py-12 lg:py-24">
      <div class="container flex flex-col items-center justify-center px-4 space-y-6 lg:px-8 lg:flex-row lg:space-y-0">
        <div class="space-y-3 text-center lg:text-left">
          <h2 class="text-4xl font-bold tracking-tight">Get Started with AIGuard</h2>
          <p class="max-w-md text-gray-500 dark:text-gray-400">
            Sign up to get notified when we launch and receive early access to
            the AIGuard platform.
          </p>
        </div>

      </div>
      <div class="space-y-2 p-4">
        <form class="flex flex-col items-center space-y-2 sm:flex-row sm:justify-center sm:space-y-0"><input
            type="email"
            class="flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 max-w-md w-full sm:w-auto"
            placeholder="Enter your email" required=""><button
            class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full sm:w-auto"
            type="submit">
            Get Started

          </button>
          <p class="text-xs text-gray-500 dark:text-gray-400">
            Sign up to get notified when we launch. 🚀
          </p>
        </form>


      </div>
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

      let api_url = "https://mod-guard-snowy.vercel.app/"


      console.log("DOing api call")
      axios.get(`${api_url}/single_message/${inputContent.value}`)
        .then(response => {
          let res = response.data;
          console.log(respone.data)
          description.value = res.description
          state_of_mind.value = res.stateofmind
          inputContent.value = ''

        })
        .catch(error => {
          console.error('Error fetching patients:', error);
        });
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
</style>./HomeView.vue