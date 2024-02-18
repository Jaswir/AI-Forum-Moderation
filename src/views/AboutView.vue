<template>
  <div class="demo-container q-pa-lg">
    <h1>GET A DEMO</h1>
    <p>Let us show you the magic of Help Scout. Our sales team offers one-on-one product demos for companies with more
      than 10 employees.</p>
    <q-form @submit="submitForm" class="demo-form">
      <div class="form-row">
        <q-input outlined placeholder="First name" />
        <q-input outlined placeholder="Last name" />
      </div>
      <div class="form-row">
        <q-input outlined placeholder="Company name" />
        <q-input outlined placeholder="Work Email" type="email" />
      </div>
      <q-input outlined placeholder="Number of employees at company" type="number" class="q-mb-md" />
      <q-btn type="submit" color="primary">Get a Demo!</q-btn>
    </q-form>
  </div>
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

<style scoped>
.demo-container {
  background-color: #ebebeb;
  padding: 40px;
  max-width: 400px;
  margin: auto;
  text-align: center;
}

h1 {
  color: #333;
  margin-bottom: 20px;
}

p {
  color: #333;
  margin-bottom: 30px;
}

.form-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.q-input {
  flex: 1;
  margin-right: 10px; /* Adjust the space between inputs */
}

.q-input:last-child {
  margin-right: 0;
}

.q-input[type="number"] {
  width: 100%;
}

q-btn {
  border-radius: 4px;
}
</style>
