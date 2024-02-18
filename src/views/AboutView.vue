
<template>
  <q-page class="q-pa-md">
    <div class="text-center">
      <h1 class="text-h3">Meet the Team</h1>
      <p class="text-subtitle1">Get to know the amazing individuals behind our company</p>
    </div>
    <!-- First Row -->
    <div class="row q-mb-md">
      <div class="col-md-6">
        <q-card class="full-width">
          <q-card-section>
            <h2 class="text-h6">Jaswir Raghoe</h2>
            <p>This is the content of card 1.</p>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-md-6">
        <q-card class="full-width">
          <q-card-section>
            <h2 class="text-h6">William Bohm</h2>
            <p>This is the content of card 2.</p>
          </q-card-section>
        </q-card>
      </div>
    </div>
    <!-- Second Row -->
    <div class="row">
      <div class="col-md-6">
        <q-card class="full-width">
          <q-card-section>
            <h2 class="text-h6">Muhammed Bilal</h2>
            <p>This is the content of card 3.</p>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-md-6">
        <q-card class="full-width">
          <q-card-section>
            <h2 class="text-h6">Ram The Goat</h2>
            <p>This is the content of card 4.</p>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'AboutPage',
  data() {
    return {
      team: [
        {
          name: 'Alice Smith',
          role: 'CEO',
          bio: 'Passionate about leadership and innovation. Loves to travel and explore new cultures.',
          avatar: '/alice.jpg'
        },
        {
          name: 'Bob Johnson',
          role: 'CTO',
          bio: 'Enthusiastic technologist. Enjoys building robots in his spare time.',
          avatar: '/bob.jpg'
        },
        {
          name: 'Emily Brown',
          role: 'Designer',
          bio: 'Creative mind with a passion for art. Enjoys painting and sketching in her free time.',
          avatar: '/emily.jpg'
        },
        {
          name: 'Alex Lee',
          role: 'Developer',
          bio: 'Coding ninja with a love for open source. Enjoys contributing to community projects.',
          avatar: '/alex.jpg'
        }
      ]
    };
  }
}
</script>

<style scoped>
.full-width {
  width: 100%;
}
</style>




