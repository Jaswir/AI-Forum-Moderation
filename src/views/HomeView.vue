<template>

 Landing Page


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

      else if(this.view == 'result'){
        window.location.reload()
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