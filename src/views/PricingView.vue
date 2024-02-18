<template>
  <q-card class="rounded-lg border bg-card text-card-foreground shadow-sm w-full max-w-3xl mx-auto">
    <div class="q-pa-6">
      <h3 class="text-2xl font-semibold whitespace-nowrap leading-none tracking-tight">Upload an image</h3>
      <p class="text-sm text-muted-foreground">
        Select an image of food to analyze its ingredients and calorie information
      </p>
    </div>
    <div class="q-p-6 flex flex-col gap-4">
      <div class="flex items-center gap-4">
        <q-img src="/placeholder.svg" width="200" height="200" alt="Uploaded image" class="aspect-square rounded-lg border" />
        <div class="w-full">
          <div class="q-gutter-md">
            <label class="text-sm font-medium leading-none" for="image">Image</label>
            <q-input outlined v-model="image" type="file" class="q-pa-sm" accept="image/*" />
          </div>
          <div class="text-sm">
            Supported file types: jpg, png. Maximum file size: 10MB.
          </div>
        </div>
      </div>
      <div class="q-gutter-md">
        <label class="font-medium text-sm" for="ingredients">Ingredients</label>
        <q-input outlined v-model="ingredients" class="q-pa-sm" placeholder="Detected ingredients will appear here" readonly />
      </div>
      <div class="q-gutter-md">
        <label class="font-medium text-sm" for="calories">Calories</label>
        <q-input outlined v-model="calories" class="q-pa-sm" placeholder="Calories" readonly />
      </div>
    </div>
    <div class="q-p-6">
      <q-btn @click="submit" class="text-sm font-medium bg-primary text-primary-foreground" color="primary" label="Submit" />
    </div>
  </q-card>
</template>

<script>
export default {
  data() {
    return {
      image: null,
      ingredients: null,
      calories: null,
      previewImage: null
    }
  },
  methods: {
    submit() {
      // Handle submission logic here
    },
    selectImage() {
      this.$refs.fileInput.click()
    },
    pickFile() {
      let input = this.$refs.fileInput
      let file = input.files
      if (file && file[0]) {
        let reader = new FileReader
        reader.onload = e => {
          this.previewImage = e.target.result
        }
        reader.readAsDataURL(file[0])
        this.$emit('input', file[0])
      }
    }
  }
}
</script>

<style>
/* Add your custom styles here */
</style>



