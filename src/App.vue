
<template>
  <div class="q-pa">
    <q-layout>
      <q-toolbar class="bg-primary text-white shadow-2" color>
        <q-btn flat round dense icon="menu" class="q-mr-sm xs">
          <q-menu>
            <q-list style="min-width: 100px">
              <q-item clickable v-close-popup to="">
                <q-item-section>Pricing</q-item-section>
              </q-item>
              <q-item clickable v-close-popup to="/about">
                <q-item-section>About</q-item-section>
              </q-item>
              <q-item clickable v-close-popup to="/contact">
                <q-item-section>Contact</q-item-section>
              </q-item>
            </q-list>
          </q-menu>

        </q-btn>

        
        <q-btn class="text-h5" flat no-caps to="/">
          <q-avatar>
            <img src="/assets/images/fruits2.svg" width="101" class="logo" alt="logo">
          </q-avatar>
          <div class="q-ml-sm">Nutritious</div>
        </q-btn>

        <q-space />

        <!--
        notice shrink property since we are placing it
        as child of QToolbar
      -->
        <q-btn-toggle class="gt-xs responsive-toolbar" v-model="model" flat stretch toggle-color="yellow"
          :options="options" no-caps to="/pricing" />

        <q-space />
      </q-toolbar>


      <q-page-container>
        <q-page class="q-pa-md">
          <RouterView />
        </q-page>
      </q-page-container>


    </q-layout>
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
        { label: 'Pricing', value: 'pricing', to: '/pricing' },
        { label: 'About', value: 'about', to: '/about' },
        { label: 'Contact', value: 'contact', to: '/contact' }
      ]
    }
  }
}

</script>


<style>
.responsive-toolbar span.block {
  font-size: 16px;

}

</style>



