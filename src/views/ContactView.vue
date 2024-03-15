<template>
    <div class="py-4 px-4 md:gap-4 flex flex-row justify-center flex-wrap">
  
      <!-- Contact Form Section -->
      <div class="w-full lg:w-7/12">
        <div class="w-full bg-white rounded-lg shadow">
          <div class="p-6">
            <div class="space-y-2">
              <p class="text-4xl font-bold tracking-tight">Contact us</p>
              <p class="text-gray-600">We'll get back to you as soon as possible.</p>
            </div>
            <div class="space-y-4 mt-4">
              <div class="flex flex-wrap -mx-2">
                <div class="w-full sm:w-1/2 px-2 space-y-2">
                  <label class="mb-1 block">First name</label>
                  <input v-model="firstName" placeholder="Enter your first name" class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300" />
                </div>
                <div class="w-full sm:w-1/2 px-2 space-y-2">
                  <label class="mb-1 block">Last name</label>
                  <input v-model="lastName" placeholder="Enter your last name" class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300" />
                </div>
              </div>
              <div class="space-y-2">
                <label class="mb-1 block">Email</label>
                <input v-model="email" placeholder="Enter your email" class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300" />
              </div>
              <div class="space-y-2">
                <label class="mb-1 block">Message</label>
                <textarea v-model="message" placeholder="Enter your message" class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"></textarea>
              </div>
              <button @click="sendMessage" class="mt-4 bg-[#0A065D] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Send message</button>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Contact Information Section -->
      <div class="w-full lg:w-3/12">
        <div class="w-full bg-[#F8F1F1] rounded-lg shadow">
          <div class="p-6">
            <div class="space-y-2">
              <p class="text-xl font-bold">Contact information</p>
              <p class="text-gray-600">Reach out to us using the information below.</p>
            </div>
            <div>
              <div>
                <p class="text-lg font-bold">Email</p>
                <p>jaswirraghoe@gmail.com</p>
              </div>
              <div class="space-y-2">
                <p class="text-lg font-bold">Phone</p>
                <p>(415) 123-4567</p>
              </div>
              <div class="space-y-2">
                <p class="text-lg font-bold">Address</p>
                <p>33 Shields St San Francisco, California(CA), 94132</p>
              </div>
            </div>
          </div>
        </div>
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
  