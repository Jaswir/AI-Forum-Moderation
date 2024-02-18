<template>
  <section class="pricing-section">
    <h1 class="pricing-title">Pricing</h1>
    <div class="pricing-cards">
      <div class="card">
        <h2 class="plan-name">Starter</h2>
        <p class="plan-price">$19 / month</p>
        <p class="plan-description">Ideal for home cooks starting their culinary exploration.</p>
        <ul class="plan-features">
          <li>Identify ingredients for 5 meals per month</li>
          <li>Access to 500-ingredient database</li>
          <li>Recipe suggestions for up to 20 groceries</li>
          <li>Community support and basic tips</li>
        </ul>
        <button class="billing-button">Monthly billing</button>
      </div>
      <div class="card recommended">
        <div class="ribbon">RECOMMENDED</div>
        <h2 class="plan-name">Professional</h2>
        <p class="plan-price">$39 / month</p>
        <p class="plan-description">Perfect for cooking enthusiasts improving their skills.</p>
        <ul class="plan-features">
          <li>Identify ingredients for 20 meals per month</li>
          <li>Access to 2,000-ingredient database</li>
          <li>Unlimited grocery-based recipe suggestions</li>
          <li>Priority email and chat support</li>
          <li>Flavor profile analysis</li>
          <li>Exclusive cooking content</li>
        </ul>
        <button class="billing-button">Monthly billing</button>
      </div>
      <div class="card">
        <h2 class="plan-name">Enterprise</h2>
        <p class="plan-price">$99 / month</p>
        <p class="plan-description">Designed for culinary businesses seeking a competitive edge.</p>
        <ul class="plan-features">
          <li>Unlimited meal ingredient identification</li>
          <li>Full ingredient database access</li>
          <li>Customizable recipe engine</li>
          <li>24/7 priority support with account manager</li>
          <li>Inventory system integration</li>
          <li>Food trend analytics</li>
          <li>White-label app option</li>
        </ul>
        <button class="billing-button">Monthly billing</button>
      </div>
    </div>
  </section>
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
body {
  font-family: 'Arial', sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f7f7f7;
}

.pricing-section {
  max-width: 960px;
  margin: 40px auto;
  text-align: center;
}

.pricing-title {
  font-size: 2em;
  color: #333;
  margin-bottom: 30px;
}

.pricing-cards {
  display: flex;
  justify-content: space-around;
  gap: 20px;
}

.card {
  background-color: #e6e6e6;
  padding: 20px;
  border-radius: 8px;
  width: 30%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: relative;
}

.card .plan-name {
  color: #333;
  font-size: 1.5em;
}

.card .plan-price {
  color: #333;
  font-size: 2.5em;
  margin: 10px 0;
}

.card .plan-description {
  font-size: 0.9em;
  margin-bottom: 15px;
}

.plan-features {
  text-align: left;
  list-style: none;
  padding: 0;
  margin-bottom: 15px;
}

.plan-features li {
  margin-bottom: 10px;
}

.billing-button {
  background-color: #28a745;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  font-size: 1em;
}

.recommended .ribbon {
  position: absolute;
  top: -10px;
  right: -10px;
  background-color: #dc3545;
  color: white;
  padding: 5px;
  font-size: 0.8em;
  transform: rotate(45deg);
}

@media (max-width: 768px) {
  .pricing-cards {
    flex-direction: column;
    gap: 15px;
  }

  .card {
    width: auto;
  }
}
</style>



