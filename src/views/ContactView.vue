<template>
  <div class="contact-section q-pa-md">
    <div class="contact-form">
      <h2 class="text-h4">Contact Us</h2>
      <p>We'll get back to you as soon as possible.</p>
      <q-form @submit="submitForm">
        <q-input outlined placeholder="Enter your name" />
        <q-input outlined placeholder="Enter your email" type="email" />
        <q-textarea outlined placeholder="Enter your message" />
        <q-btn type="submit" color="primary">Send message</q-btn>
      </q-form>
    </div>
    <div class="contact-info">
      <h2 class="text-h4">Contact Information</h2>
      <p>Reach out to us directly.</p>
      <p><strong>Email</strong><br /><a href="mailto:info@example.com" class="text-primary">info@example.com</a></p>
      <p><strong>Phone</strong><br />(123) 456-7890</p>
      <p><strong>Address</strong><br />123 Example St, City, Country</p>
    </div>
    <div class="error-message q-mt-md">
      <p>Something went wrong</p>
    </div>
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
.contact-section {
  display: flex;
  justify-content: space-between;
  max-width: 900px;
  margin: auto;
}

.contact-form, .contact-info {
  flex-basis: 45%;
}

.contact-form h2, .contact-info h2 {
  color: #000;
}

.contact-form p, .contact-info p {
  color: #333;
}

.contact-form form {
  display: flex;
  flex-direction: column;
}

.contact-form q-input,
.contact-form q-textarea {
  margin-bottom: 10px;
}

.contact-info p {
  margin-bottom: 10px;
}

.contact-info a {
  text-decoration: none;
}

.error-message {
  border: 1px solid #ff0000;
  background-color: #fff;
  color: #ff0000;
  padding: 10px;
  width: 90%;
}

@media (max-width: 600px) {
  .contact-section {
    flex-direction: column;
  }

  .contact-form, .contact-info {
    flex-basis: 100%;
  }
}
</style>
