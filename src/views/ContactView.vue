<template>
  <div class="q-pa-md row justify-center relative-position">
    <q-card class="my-card">

      <q-card-section class=" q-gutter-md ">
        <div class="text-h4">Upload Image</div>
        <div class="text-subtitle1">Upload an image of the food to get the ingredients</div>
      </q-card-section>


      <div class="q-pa-md text-center ">
        <q-img class="q-pa-md" :src="'https://picsum.photos/500/300'" spinner-color="white"
          style="height: 250px; max-width: 250px"></q-img>
      </div>




    </q-card>


  </div>
</template>

<script>
import { ref } from 'vue';
import axios from 'axios';


export default {
  setup() {
    const image = ref(null);
    const imageUrl = ref('');
    const ingredients = ref('');
    const base64_image = ref('');

    const handleUpload = () => {
      console.log('handleUpload is triggered');
      if (image.value) {

        imageUrl.value = URL.createObjectURL(image.value);
      }
      let rawImg;
      const reader = new FileReader();
      reader.onload = () => {
        rawImg = reader.result;
        base64_image.value = rawImg;
        console.log("Converted image to base64")
      };
      reader.readAsDataURL(image.value);
    }

    const submit = () => {

      console.log("Base 64 For the api call:" + base64_image.value)

    }

    return {
      image, imageUrl, ingredients, handleUpload, submit
    }
  }
}

</script>
 
<style>
.my-card {
  width: 100%;
  max-width: 800px;
  max-height: 800px
}
</style>
