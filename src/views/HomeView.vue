<template>
  <div class="p-4">
    <h2 class="text-center text-xl font-semibold mb-4 p-4">Forum Messages</h2>
    <div class="message-card p-3" v-for="(message, index) in messages" :key="index">
      <div class="w-3/6 mx-auto border rounded-lg shadow-md p-4 pl-8">
        {{ message }}
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
      "Hello!",
      "How are you?",
      "Welcome to our chat application.",
      "Feel free to ask any questions."
    ])

    async function fetchPatientsByPriority(priority) {
      let api_url = "https://healthomatic-psi.vercel.app"
      console.log("API URL:", api_url)
      api_url = 'http://127.0.0.1:8000'

      axios.get(`${api_url}/patients/${priority}`)
        .then(response => {
          if (priority === 'Emergency') {
            emergency_patients.value = response.data;
          }
        })
        .catch(error => {
          console.error('Error fetching patients:', error);
        });
    };


    onMounted(() => {
      fetchPatientsByPriority("Emergency");
    });



    return {
      emergency_patients,
      messages
    }
  }
}



</script>


<style>
.responsive-toolbar span.block {
  font-size: 16px;

}
</style>./HomeView.vue