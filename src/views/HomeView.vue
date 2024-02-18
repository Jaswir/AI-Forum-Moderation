<template>
  <div class="q-pa-md row justify-center ">
    <q-card class="my-card">

      <q-card-section class=" q-gutter-md ">
        <div class="text-h4">Upload Image</div>
        <div class="text-subtitle1">Upload an image of the food to get the ingredients</div>
      </q-card-section>

      <div class="q-pa-md text-center ">
        <q-img class="q-pa-md justify-center text-center " :src="imageUrl" spinner-color="white"
          style="height: 250px; max-width: 250px"></q-img>
        <!-- <img src="https://cdn.quasar.dev/img/mountains.jpg"> -->
      </div>




      <div class="column">
        <div class="row q-pa-md ">
          <q-file v-model="image" label="Upload Image" filled style="max-width: 300px"
            @update:model-value="handleUpload()" accept=".jpg, image/*">
            <template v-slot:prepend>
              <q-icon name="attachment" />
            </template>
          </q-file>

          <div class="q-pl-md"> </div>

          <q-btn @click="submit" class="text-sm font-medium bg-primary text-primary-foreground" color="primary"
            label="Submit" />
        </div>
        <div class="q-pa-md">
          <label class="font-medium text-sm" for="ingredients">Ingredients</label>
          <q-input outlined v-model="ingredients" class="q-pa-xs" placeholder="Detected ingredients will appear here"
            readonly />
        </div>

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
        base64_image.value = rawImg.split(',')[1];

        console.log(base64_image.value)
        console.log("image value", image.value)
        console.log("imageUrl.value", imageUrl.value)
      };
      reader.readAsDataURL(image.value);
    }

    const submit = () => {



      let payload = {
        "image_base64": base64_image.value
      }

      console.log("" + payload)

      const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      };

      let response = {
        "ingredients": [
          {
            "name": "roasted peanuts",
            "calories": 5.87,
            "cholesterol": 0,
            "dietary_fiber": 0.08,
            "phosphorus": null,
            "potassium": 6.34,
            "protein": 0.24,
            "saturated_fat": 0.08,
            "sodium": 4.1,
            "sugars": 0.05,
            "total_carbohydrate": 0.21,
            "total_fat": 0.5,
            "serving_quantity": 1,
            "serving_unit": "peanut",
            "serving_weight_grams": 1
          },
          {
            "name": "vegetable oil",
            "calories": 120.22,
            "cholesterol": 0,
            "dietary_fiber": 0,
            "phosphorus": null,
            "potassium": 0,
            "protein": 0,
            "saturated_fat": 1.01,
            "sodium": 0,
            "sugars": 0,
            "total_carbohydrate": 0,
            "total_fat": 13.6,
            "serving_quantity": 1,
            "serving_unit": "tbsp",
            "serving_weight_grams": 13.6
          },
          {
            "name": "salt",
            "calories": 0,
            "cholesterol": 0,
            "dietary_fiber": 0,
            "phosphorus": null,
            "potassium": 0.12,
            "protein": 0,
            "saturated_fat": 0,
            "sodium": 581.37,
            "sugars": 0,
            "total_carbohydrate": 0,
            "total_fat": 0,
            "serving_quantity": 0.25,
            "serving_unit": "tsp",
            "serving_weight_grams": 1.5
          }
        ]
      }
      // Make the POST request using Axios
      // axios.post('https://jobmatch-gamma.vercel.app/api/nutrition/get_ingredients_from_image_base64',
      //   payload, { headers })
      //   .then(response => {
      //     console.log('Response:', response.data);

      //     for (let i = 0; i < response.data.ingredients.length; i++) {
      //       const name = response.data.ingredients[i].name;
      //       console.log(` Ingredient ${i} name:` + name)
      //       ingredients.value += name + ", ";
      //     }

      //   })
      //   .catch(error => {
      //     console.error('Error:', error);
      //   });

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
