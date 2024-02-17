<template>
  <div class="q-pa">

    <q-toolbar class="bg-primary text-white q-my shadow-2 ">
      <q-btn flat round dense icon="menu" class="q-mr-sm xs">
        <q-menu>
          <q-list style="min-width: 100px">
            <q-item clickable v-close-popup>
              <q-item-section>Pricing</q-item-section>
            </q-item>
            <q-item clickable v-close-popup>
              <q-item-section>About</q-item-section>
            </q-item>
            <q-item clickable v-close-popup>
              <q-item-section>Contact</q-item-section>
            </q-item>
          </q-list>
        </q-menu>

      </q-btn>
      <q-space />

      <q-btn-toggle class="gt-xs responsive-toolbar" v-model="model" flat stretch toggle-color="yellow" :options="options" />
    </q-toolbar>
  </div>
</template>


<script lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { defineComponent } from 'vue';
import { ref } from 'vue'
import { setCssVar } from 'quasar'

setCssVar('primary', '#67b57c')
setCssVar('secondary', '#00B8C8')
setCssVar('negative', '#E03C31')
setCssVar('dark', '#0C2340')

export default {

  setup() {
    const tab = ref('Home')
    const leftDrawerOpen = ref(false)

    function toggleLeftDrawer() {
      leftDrawerOpen.value = !leftDrawerOpen.value
    }

    return {
      tab,
      leftDrawerOpen,
      toggleLeftDrawer,
      model: ref('home'),
      options: [
        { label: 'Pricing', value: 'pricing' },
        { label: 'About', value: 'about' },
        { label: 'Contact', value: 'contact' }
      ]
    }
  }
}

</script>


<!--<template>
  <div class="q-pa">
    <q-layout view="lHh lpr lFf" class="shadow-2 rounded-borders">
      <q-header>
        <q-tabs v-model="tab" class="container">

          <div class="left-flex">
            <q-toolbar>
              <q-btn flat dense round @click="toggleLeftDrawer" aria-label="Menu" icon="menu" class="xs">

              </q-btn>
              <q-toolbar-title class="text-h4" style="display:inline-block ">
                 <img src="" width="101" class="logo" alt="logo">
                <span class="title">Nutritious</span>
              </q-toolbar-title>
            </q-toolbar>
          </div>

          <div class="center-flex row">


            <q-route-tab name="Home" label="Home" no-caps :ripple="false" to="/home" />
            <q-route-tab name="Pricing" label="Pricing" no-caps :ripple="false" to="/pricing" />
            <q-route-tab name="About" label="About" no-caps :ripple="false" to="/about" />
            <q-route-tab name="Contact" label="Contact" no-caps :ripple="false" to="/contact" />
          </div>
        </q-tabs>
      </q-header>

      <q-page-container>
        <q-page class="q-pa-md">
          <RouterView />
        </q-page>
      </q-page-container>

    </q-layout>
  </div>
</template>
  -->


<style>

@media only screen and (min-width: 900px) {

  /* Adjust font size for even larger screens (e.g., desktops) */
  .responsive-toolbar {
    width: 50%;
  }
}

.container {

  padding-bottom: 0.45rem;
  padding-top: 0.45rem;
  padding-left: 1.46875rem;
  padding-right: 1.46875rem;

  width: 80%;

  /* max-width: 80rem; */

  /* flex-direction: row; */
}



.left-flex {
  margin-right: auto;
  justify-content: space;
}

body .left-flex span {
  margin-right: auto;
  padding-left: 5rem;
}

.center-flex {
  margin-right: auto;
}

@media (max-width: 768px) {

  /* Hide the center-flex div on smaller screens */
  .center-flex {
    background-color: #0C2340;
    display: none !important;

  }
}

.center-flex .q-tab {
  display: inline-block;
  min-height: 0px;
}

.center-flex .q-tab__label {
  font-size: 16px;

}

.center-flex .q-tab--inactive {
  opacity: 1.0;
}

.q-tab__label:hover {
  color: #0C2340;
}

body.desktop .q-tab .q-focus-helper {
  width: 0%;
  height: 0%;
}
</style>



