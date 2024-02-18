<template>
  <div class="q-pa-md row justify-center q-gutter-md relative-position">
    <q-card class="my-card">

      <q-card-section>
        <div class="text-h4">Upload Image</div>
        <div class="text-subtitle1">Upload an image of the food to get the ingredients and calorie information</div>
      </q-card-section>


      <div class="q-pa-md">
        <q-img class="q-pa-md justify-center text-center " :src="imageUrl"
          spinner-color="white" style="height: 250px; max-width: 250px"></q-img>
        <!-- <img src="https://cdn.quasar.dev/img/mountains.jpg"> -->
      </div>

      <div class="row q-pa-md">
        <q-file v-model="image" label="Upload Image" filled style="max-width: 300px" @update:model-value="handleUpload()"
          accept=".jpg, image/*">
          <template v-slot:prepend>
            <q-icon name="attachment" />
          </template>
        </q-file>

        <q-btn @click="submit" class="text-sm font-medium bg-primary text-primary-foreground" color="primary"
          label="Submit" />
      </div>

      <div class="q-pa-md">
        <label class="font-medium text-sm" for="ingredients">Ingredients</label>
        <q-input outlined v-model="ingredients" class="q-pa-xs" placeholder="Detected ingredients will appear here"
          readonly />
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
  max-width: 600px;
  max-height: 600px
}
</style>
