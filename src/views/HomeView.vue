<template>
  <div class="q-pa-md q-gutter-md row justify-center ">

    <div class="col-12 col-lg-7">
      <q-card class="full-width my-card">

        <q-card-section class="">
          <div class="text-h4">Upload Image</div>
          <div class="text-subtitle1">Upload an image of the food to get the ingredients</div>
        </q-card-section>

        <div class="q-pa-md text-center ">
          <q-img class="q-pa-md justify-center text-center " :src="imageUrl" spinner-color="white"
            style="height: 25rem; max-width: 25rem"></q-img>
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
            <label class="font-medium text-sm" for="ingredients">Healthiness</label>
            <q-input outlined v-model="healthiness" class="q-pa-xs" placeholder="Health Recommendation will appear here"
              readonly autogrow />
          </div>

        </div>
      </q-card>

    </div>

    <div class="col-12 col-lg-3">
      <q-card class="full-width">
        <q-card-section class="">


          <div class="row items-center">
            <p class="text-h5 text-bold">Calories:</p>
            <p class="q-pl-sm text-subtitle1">{{ total_calories_ref }}</p>
          </div>

          <p class="text-h5 text-bold">Ingredients</p>
          <!-- <q-input outlined v-model="ingredients" placeholder="Detected ingredients will appear here" readonly /> -->
          <q-list dense>
            <q-item v-for="(ingredient, index) in ingredients_ref" :key="index">
              <q-item-section class="text-subtitle1">
                <q-item-label>• {{ ingredient }}</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>




          <div class="space-y-2">
            <p class="text-h5 text-bold">Micro Nutrients</p>
            <q-list dense>
              <q-item class="text-subtitle1" v-for="(value, key) in micro_nutrients_ref" :key="key">
                <q-item-section>
                  <q-item-label>• {{ key }}:</q-item-label>
                </q-item-section>
                <q-item-section>
                  <q-item-label>{{ value.toFixed(2) }} {{ quantifications[key] }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </div>
        </q-card-section>
      </q-card>
   
      <q-card>

      </q-card>
    </div>


  </div>
</template>

<script>
import { ref } from 'vue';
import axios from 'axios';


export default {
  setup() {
    const image = ref(null);
    const imageUrl = ref('');
    const ingredients_ref = ref(['']);
    const total_calories_ref = ref(0);
    const micro_nutrients_ref = ref({});
    const quantifications = ref(
      {
        "Cholesterol": "mg",
        "Total_fat": "g",
        "Saturated_fat": "g",
        "Dietary_fiber": "g",
        "Protein": "g",
        "Sugars": "g",
        "Carbs": "g",
        "Sodium": "mg",
        "Potassium": "mg",
      }
    );
    const base64_image = ref('');
    const healthiness = ref('');



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

        // console.log(base64_image.value)
        // console.log("image value", image.value)
        // console.log("imageUrl.value", imageUrl.value)
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

      let ingredients = []
      let total_calories = 0
      let micro_nutrients = {
        "Cholesterol": 0,
        "Total_fat": 0,
        "Saturated_fat": 0,
        "Dietary_fiber": 0,
        "Protein": 0,
        "Sugars": 0,
        "Carbs": 0,
        "Sodium": 0,
        "Potassium": 0,
      }



      // Gets ingrëdients, etc
      axios.post('https://jobmatch-gamma.vercel.app/api/nutrition/get_ingredients_from_image_base64',
        payload, { headers })
        .then(response => {
          console.log('Response:', response.data);

          let data = response.data

          for (let i = 0; i < data.ingredients.length; i++) {
            const ingredient = data.ingredients[i];
            const ingredient_name = data.ingredients[i].name;
            ingredients.push(ingredient_name)

            const calories = data.ingredients[i].calories;
            total_calories += calories

            micro_nutrients.Cholesterol += ingredient.cholesterol !== null ? ingredient.cholesterol : 0;
            micro_nutrients.Dietary_fiber += ingredient.dietary_fiber !== null ? ingredient.dietary_fiber : 0;
            micro_nutrients.Potassium += ingredient.potassium !== null ? ingredient.potassium : 0;
            micro_nutrients.Protein += ingredient.protein !== null ? ingredient.protein : 0;
            micro_nutrients.Saturated_fat += ingredient.saturated_fat !== null ? ingredient.saturated_fat : 0;
            micro_nutrients.Sodium += ingredient.sodium !== null ? ingredient.sodium : 0;
            micro_nutrients.Sugars += ingredient.sugars !== null ? ingredient.sugars : 0;
            micro_nutrients.Carbs += ingredient.total_carbohydrate !== null ? ingredient.total_carbohydrate : 0;
            micro_nutrients.Total_fat += ingredient.total_fat !== null ? ingredient.total_fat : 0;
          }

          console.log("Ingredients: ", ingredients)
          console.log("Total Calories: ", total_calories)
          console.log("Micro Nutrients: ", micro_nutrients)

          // ingredients = ingredients.map(ingredients => {
          //   return ingredients.charAt(0).toUpperCase() + ingredients.slice(1);
          // });

          ingredients_ref.value = ingredients
          total_calories_ref.value = total_calories
          micro_nutrients_ref.value = micro_nutrients
          getHealthiness(ingredients, total_calories, micro_nutrients)


        })
        .catch(error => {
          console.error('Error:', error);
        });

    }

    const getHealthiness = () => {

      const data = {
        model: "gpt-3.5-turbo-0125",
        messages: [
          {
            role: "system",
            content: "You are a Nutritional Expert!"
          },
          {
            role: "user",
            content: `How healthy is this food, here is some information: Calories: ${total_calories_ref.value}
            Ingredients: ${ingredients_ref.value} Micro Nutrients: ${micro_nutrients_ref.value}
            `
          }
        ]
      };

      // Show Healthiness
      axios.post('https://api.openai.com/v1/chat/completions', data, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`
        }
      })
        .then(response => {
          let res = response.data.choices[0].message.content
          console.log(res);
          healthiness.value = res
        })
        .catch(error => {
          console.error('Error:', error);
        });

    }


    return {
      image, imageUrl, ingredients_ref,
      total_calories_ref,
      micro_nutrients_ref, handleUpload, submit, getHealthiness,
      quantifications, healthiness
    }
  }
}

</script>
 
<style>
.my-card {
  width: 100%;

}
</style>
