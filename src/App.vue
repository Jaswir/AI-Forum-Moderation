<template>
  <nav class="bg-[#A3816A] p-4 text-white">
    <div class="container mx-auto flex items-center justify-between">
      <div class="flex items-center space-x-4">
        <router-link to="/" class="text-xl font-bold">Mod GuardAIn</router-link>
      </div>
      <div class="flex items-center justify-center flex-1 space-x-4">
        <router-link to="/" class="text-white block hover:text-gray-200 hover:font-bold">Home</router-link>
        <router-link to="/pricing" class="text-white block hover:text-gray-200 hover:font-bold">
          Pricing</router-link>
        <router-link to="/about" class="text-white block hover:text-gray-200 hover:font-bold">
          About</router-link>
        <router-link to="/contact" class="text-white block hover:text-gray-200 hover:font-bold">
          Contact</router-link>


      </div>

      <router-link to="/demo" class="text-white block w-20 text-center p-3 rounded-lg animate-bounce border-red-700  bg-green-700 hover:text-gray-200 pr-8">
        Demo</router-link>
    </div>
  </nav>

  <RouterView />

</template>

<style scoped></style>
