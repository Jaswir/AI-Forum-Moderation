<template>
  <q-page class="q-pa-md pricing-section">
    <h1 class="q-pa-md text-h4 text-center">Pricing</h1>
    <div class="q-gutter-md row justify-center">
      <!-- Starter Plan -->
      <q-card class="card q-pa-md column" style="max-width: 400px;">

        <h2 class="text-h5">Starter</h2>
        <p class="text-primary text-h6">$19 / month</p>
        <p class="text-grey">Ideal for home cooks and food enthusiasts.</p>
        <ul>
          <li>Identify ingredients for up to 5 meals per month</li>
          <li>Access to 500 common ingredients database</li>
          <li>Recipe suggestions based on 20 groceries</li>
          <li>Community support and basic app features</li>
        </ul>
        <q-space />
        <q-btn class="q-mt-md" color="primary" @click="submitForm">Monthly billing</q-btn>
      </q-card>
      <!-- Professional Plan -->
      <q-card class="card recommended q-pa-md column" style="max-width: 400px;">

        <q-badge color="teal" class="ribbon">RECOMMENDED</q-badge>
        <h2 class="text-h5">Professional</h2>
        <p class="text-primary text-h6">$39 / month</p>
        <p class="text-grey">Perfect for cooking professionals and frequent users.</p>
        <ul>
          <li>Identify ingredients for up to 20 meals per month</li>
          <li>Access to 2,000 ingredients including rare items</li>
          <li>Unlimited grocery inputs for recipes</li>
          <li>Priority support and professional content</li>
        </ul>
        <q-space />
        <q-btn class="q-mt-md" color="primary" @click="submitForm">Monthly billing</q-btn>

      </q-card>
      <!-- Enterprise Plan -->
      <q-card class="card q-pa-md column" style="max-width: 400px;">

        <h2 class="text-h5">Enterprise</h2>
        <p class="text-primary text-h6">$99 / month</p>
        <p class="text-grey">Designed for culinary businesses and food industry professionals.</p>
        <ul>
          <li>Unlimited meal ingredient identification</li>
          <li>Full ingredient database access</li>
          <li>Inventory management system integration</li>
          <li>24/7 dedicated support and account manager</li>
          <li>Advanced analytics on food trends</li>
          <li>White-label app option</li>
        </ul>

        <q-btn class="q-mt-md" color="primary" @click="submitForm">Monthly billing</q-btn>

      </q-card>
    </div>
  </q-page>
</template>

<script>
export default {
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
