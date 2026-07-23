<script setup>
import { ref, computed } from 'vue'

const name = ref('')
const address = ref('')
const creditCard = ref('')
const submitted = ref(false)

const isFormValid = computed(() => {
  return name.value.trim() !== '' &&
         address.value.length >= 10 &&
         creditCard.value.length === 16
})

function submitOrder() {
  if (isFormValid.value) {
    submitted.value = true
  }
}
</script>

<template>
  <div class="checkout">
    <h2>Checkout</h2>
    <div v-if="submitted" class="success">
      <h3>🎉 Order Placed Successfully!</h3>
      <p>Thank you for shopping with us.</p>
      <router-link to="/">Return Home</router-link>
    </div>
    <form v-else @submit.prevent="submitOrder">
      <div class="form-group">
        <label>Full Name</label>
        <input v-model="name" type="text" placeholder="John Doe" />
      </div>
      <div class="form-group">
        <label>Address (Min 10 chars)</label>
        <textarea v-model="address" placeholder="123 Main St, City"></textarea>
      </div>
      <div class="form-group">
        <label>Credit Card (Exactly 16 chars)</label>
        <input v-model="creditCard" type="text" placeholder="1234567812345678" />
      </div>
      <button type="submit" :disabled="!isFormValid">Place Order</button>
    </form>
  </div>
</template>

<style scoped>
.checkout { max-width: 500px; margin: 2rem auto; padding: 2rem; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); background: white;}
h2 { text-align: center; color: #2c3e50; margin-bottom: 1.5rem; }
.form-group { margin-bottom: 1.5rem; }
label { display: block; margin-bottom: 0.5rem; font-weight: bold; color: #34495e;}
input, textarea { width: 100%; padding: 0.8rem; border: 1px solid #ddd; border-radius: 4px; box-sizing: border-box; }
input:focus, textarea:focus { outline: none; border-color: #42b883; box-shadow: 0 0 0 2px rgba(66, 184, 131, 0.2); }
button { width: 100%; padding: 1rem; background: #42b883; color: white; border: none; border-radius: 4px; font-weight: bold; cursor: pointer; transition: background 0.2s;}
button:hover:not(:disabled) { background: #38a376; }
button:disabled { background: #ccc; cursor: not-allowed; }
.success { text-align: center; color: #2ecc71; }
.success a { color: #3498db; display: inline-block; margin-top: 1rem;}
</style>
