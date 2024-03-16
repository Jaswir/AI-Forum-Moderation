<template>

  <div class="grid grid-cols-3 gap-4">
    <div class="col-span-2 pl-8">

      <div class="p-4">
        <h2 class="text-center text-2xl font-semibold mb-4 p-4">Forum Messages</h2>
        <div class="message-card p-3" v-for="(message, index) in messages" :key="index">
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

    async function moderateForum(){
      console.log("Shows labels and descriptions")
    }


    return {
      emergency_patients, messages, inputContent,
      addMessage, moderateForum
    }
  }
}



</script>


<style>
.responsive-toolbar span.block {
  font-size: 16px;

}
</style>./HomeView.vue