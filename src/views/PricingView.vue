<template>
    <q-page class="q-pa-md pricing-section">
      <h1 class="q-pa-md text-h4 text-center">Pricing</h1>
      <div class="q-gutter-md row justify-center">
        <!-- Starter Plan -->
        <q-card class="card q-pa-md column" style="max-width: 400px;">
  
          <h2 class="text-h5">Starter</h2>
          <p class="text-primary text-h6">Supported by ads</p>
          <p class="text-grey">Basic features for individuals.</p>
          <ul class="list-padding">
            <li>Identify foods</li>
            <li>Estimate calories</li>
            <li>View basic nutritional info</li>
            <li>Receive limited recipe suggestions</li>
          </ul>
          <q-space />
          <q-btn class="q-mt-md" color="primary" @click="submitForm">Get Started</q-btn>
        </q-card>
  
  
        <!-- Premium Plan -->
        <q-card class="card recommended q-pa-md column" style="max-width: 400px;">
  
          <q-badge color="teal" class="ribbon">RECOMMENDED</q-badge>
          <h2 class="text-h5">Premium</h2>
          <p class="text-primary text-h6">$9.99 / month</p>
          <p class="text-grey">Full features for enthusiasts.</p>
          <ul class="list-padding">
            <li>Personalized dietary recommendations</li>
            <li>Fitness tracker integration</li>
            <li>Ad-free experience</li>
            <li>Priority support</li>
            <li>Advanced nutritional analysis</li>
          </ul>
          <q-btn class="q-mt-md" color="primary" @click="submitForm">Get Started</q-btn>
  
        </q-card>
        <!-- Enterprise Plan -->
        <q-card class="card q-pa-md column" style="max-width: 400px;">
  
          <h2 class="text-h5">Enterprise</h2>
          <p class="text-primary text-h6">Custom pricing</p>
          <p class="text-grey">Custom solutions for businesses.</p>
          <ul class="list-padding">
            <li>API access</li>
            <li>Customizable solutions</li>
            <li>Enhanced analytics</li>
            <li>Scalable infrastructure</li>
            <li>Dedicated account manager</li>
          </ul>
          <q-btn class="q-mt-md" color="primary" @click="submitForm">Contact Sales</q-btn>
  
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
  .list-padding li {
    padding: 5px 0;
    /* Adjust padding as needed */
  }
  
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
  