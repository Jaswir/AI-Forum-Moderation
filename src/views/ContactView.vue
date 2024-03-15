<template>
    <div class="q-pa-md q-gutter-md row justify-center">
  
  
      <!-- Contact Form Section -->
      <div class="col-12 col-lg-7">
        <q-card class="full-width">
          <q-card-section>
            <div class="space-y-2">
              <p class="text-h4 text-bold tracking-tighter">Contact us</p>
              <p class="text-grey">We'll get back to you as soon as possible.</p>
            </div>
            <div class="space-y-4">
              <div class="row">
                <div class="col-12 col-sm-6 space-y-2">
                  <label class="q-mb-xs">First name</label>
                  <q-input v-model="firstName" placeholder="Enter your first name" dense />
                </div>
                <div class="col-12 col-sm-6 space-y-2">
                  <label class="q-mb-xs">Last name</label>
                  <q-input v-model="lastName" placeholder="Enter your last name" dense />
                </div>
              </div>
              <div class="space-y-2">
                <label class="q-mb-xs">Email</label>
                <q-input v-model="email" placeholder="Enter your email" dense />
              </div>
              <div class="space-y-2">
                <label class="q-mb-xs">Message</label>
                <q-input v-model="message" type="textarea" placeholder="Enter your message" dense />
              </div>
              <q-btn @click="sendMessage" color="primary" label="Send message" dense class="q-mt-md" />
            </div>
          </q-card-section>
        </q-card>
      </div>
      <!-- Contact Information Section -->
      <div class="col-12 col-lg-3">
        <q-card class="full-width bg-green-1">
          <q-card-section class="">
            <div class="space-y-2">
              <p class="text-h5 text-bold">Contact information</p>
              <p class="text-grey">Reach out to us using the information below.</p>
            </div>
            <div class="">
              <div class="">
                <p class="text-subtitle  text-bold">Email</p>
                <p>jaswirraghoe@gmail.com</p>
              </div>
              <div class="space-y-2">
                <p class="text-subtitle text-bold">Phone</p>
                <p>(415) 123-4567</p>
              </div>
              <div class="space-y-2">
                <p class="text-subtitle-2 text-bold">Address</p>
                <p>33 Shields St San Francisco, California(CA), 94132</p>
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        firstName: '',
        lastName: '',
        email: '',
        message: '',
        error: ''
      };
    },
    methods: {
      sendMessage() {
        // Your message sending logic here
        // Example error handling
        this.error = 'Something went wrong. Please try again.';
      }
    }
  };
  </script>
  
  <style scoped>
  .full-width {
    width: 100%;
  }
  </style>
  