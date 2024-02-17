<template>
  <div class="q-pa">
    <q-layout view="lHh lpr lFf" class="shadow-2 rounded-borders">
      <q-header>
        <q-tabs v-model="tab" class="container">

          <div class="left-flex">
            <q-toolbar>
              <q-toolbar-title class="text-h4" style="display:inline-block ">
                <img src="" width="101" class="logo" alt="logo">
                <span class="title">Nutritious</span>
              </q-toolbar-title>
            </q-toolbar>
          </div>

          <div class="center-flex">
            <q-route-tab name="Home" label="Home" no-caps :ripple="false" to="/repositories" />
            <q-route-tab name="Pricing" label="Pricing" no-caps :ripple="false" to="/index" />
            <q-route-tab name="About" label="About" no-caps :ripple="false" to="/manager" />
            <q-route-tab name="Contact" label="Contact" no-caps :ripple="false" to="/log" />
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


<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { defineComponent } from 'vue';
import { ref } from 'vue'

const tab = ref('images')

defineComponent({
  tab
});
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

.center-flex .q-tab {
  display: inline-block;
  min-height: 0px;
}

.center-flex .q-tab__label {
  font-size: 16px;
  
}

.center-flex .q-tab--inactive{
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


<script lang="ts">
import { setCssVar } from 'quasar'

setCssVar('primary', '#00A6D6')
setCssVar('secondary', '#00B8C8')
setCssVar('negative', '#E03C31')
setCssVar('dark', '#0C2340')

</script>