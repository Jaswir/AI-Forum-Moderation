<template>
  <q-page class="q-pa-md pricing-section">
    <h1 class="q-pa-md text-h4 text-center">Pricing</h1>
    <div class="q-gutter-md row justify-center">
      <!-- Starter Plan -->
      <q-card class="card q-pa-md column" style="max-width: 400px;">
        <q-card-section>
          <h2 class="text-h5">Starter</h2>
          <p class="text-primary text-h6">$19 / month</p>
          <p class="text-grey">Ideal for home cooks and food enthusiasts.</p>
          <q-list>
            <q-item v-for="item in starterFeatures" :key="item">
              <q-item-section> * {{ item }}</q-item-section>
            </q-item>
          </q-list>
        </q-card-section>
        <q-space />
        <q-btn class="q-mt-md" color="primary" @click="submitForm">Monthly billing</q-btn>
      </q-card>
      <!-- Professional Plan -->
      <q-card class="card recommended card q-pa-md column" style="max-width: 400px;">

          <q-badge color="teal" class="ribbon">RECOMMENDED</q-badge>
          <h2 class="text-h5">Professional</h2>
          <p class="text-primary text-h6">$39 / month</p>
          <p class="text-grey">Perfect for cooking professionals and frequent users.</p>
          <q-list>
            <q-item v-for="item in professionalFeatures" :key="item">
              <q-item-section> * {{ item }}</q-item-section>
            </q-item>
          </q-list>


        <q-space />
        <q-btn class="q-mt-md" color="primary" @click="submitForm">Monthly billing</q-btn>
      </q-card>
      <!-- Enterprise Plan -->
      <q-card class="card q-pa-md column" style="max-width: 400px;">
       
          <h2 class="text-h5">Enterprise</h2>
          <p class="text-primary text-h6">$99 / month</p>
          <p class="text-grey">Designed for culinary businesses and food industry professionals.</p>
          <q-list>
            <q-item v-for="item in enterpriseFeatures" :key="item">
              <q-item-section> * {{ item }}</q-item-section>
            </q-item>
          </q-list>
     
        <q-space />
        <q-btn class="q-mt-md" color="primary" @click="submitForm">Monthly billing</q-btn>
      </q-card>
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      starterFeatures: [
        "Identify ingredients for up to 5 meals per month",
        "Access to 500 common ingredients database",
        "Recipe suggestions based on 20 groceries",
        "Community support and basic app features"
      ],
      professionalFeatures: [
        "Identify ingredients for up to 20 meals per month",
        "Access to 2,000 ingredients including rare items",
        "Unlimited grocery inputs for recipes",
        "Priority support and professional content"
      ],
      enterpriseFeatures: [
        "Unlimited meal ingredient identification",
        "Full ingredient database access",
        "Inventory management system integration",
        "24/7 dedicated support and account manager",
        "Advanced analytics on food trends",
        "White-label app option"
      ]
    }
  },
  methods: {
    submitForm() {
      // Your form submission logic here
    }
  }
}
</script>

<style>
.card {
  background-color: #e6e6e6;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.ribbon {
  position: absolute;
  top: -8px;
  right: -8px;
}

.text-h4 {
  font-size: 24px;
}

.text-h5 {
  font-size: 20px;
}

.text-h6 {
  font-size: 16px;
}

.text-primary {
  color: #28a745;
}

.text-grey {
  color: #555;
}
</style>
