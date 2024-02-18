<template>
  <div class="q-pa-md column center">
    <div>
      <q-img :src="imageUrl" spinner-color="white" style="height: 250px; max-width: 250px"></q-img>
    </div>
    <div class="row">
      <q-file v-model="image" label="Upload Image" filled style="max-width: 300px" @update:model-value="handleUpload()"
        accept=".jpg, image/*">
        <template v-slot:prepend>
          <q-icon name="attachment" />
        </template>
      </q-file>

      <q-btn @click="submit" class="text-sm font-medium bg-primary text-primary-foreground" color="primary"
        label="Submit" />
    </div>

    <div class="">
      <label class="font-medium text-sm" for="ingredients">Ingredients</label>
      <q-input outlined v-model="ingredients" class="q-pa-xs" placeholder="Detected ingredients will appear here"
        readonly />

      <label class="font-medium text-sm" for="calories">Calories</label>
      <q-input outlined v-model="calories" class="q-pa-xs" placeholder="Calories" readonly />
    </div>

  </div>
</template>
 
<script>
import { ref } from 'vue';

export default {
  setup() {
    const image = ref(null);
    const imageUrl = ref('');
    const handleUpload = () => {
      console.log('handleUpload is triggered');
      if (image.value) {

        imageUrl.value = URL.createObjectURL(image.value);
      }
    }

    return {
      image, imageUrl, handleUpload
    }
  }
}

</script>
 
<style>
.imagePreviewWrapper {
  width: 250px;
  height: 250px;
  display: block;
  margin: 0 auto 30px;
  background-size: cover;
  background-position: center center;
}
</style>