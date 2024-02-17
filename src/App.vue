
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
              <q-item clickable v-close-popup  to="/contact">
                <q-item-section>Contact</q-item-section>
              </q-item>
            </q-list>
          </q-menu>

        </q-btn>
        <q-btn class="text-h5" flat label="Nutritious" no-caps to="/" />
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

.responsive-toolbar span.block {
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



