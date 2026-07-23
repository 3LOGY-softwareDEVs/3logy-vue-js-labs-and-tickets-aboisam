<script setup>
import { useCartStore } from '../stores/cartStore'

const store = useCartStore()
</script>

<template>
  <div class="checkout">
    <h2>Your Cart</h2>
    
    <div v-if="store.cartItems.length === 0" class="empty">
      <p>Your cart is empty.</p>
      <router-link to="/products" class="btn">Go Shopping</router-link>
    </div>
    
    <div v-else>
      <div class="cart-items">
        <div v-for="item in store.cartItems" :key="item.id" class="cart-item">
          <div class="item-info">
            <h3>{{ item.title }}</h3>
            <p>${{ item.price }} x {{ item.quantity }}</p>
          </div>
          <button class="remove-btn" @click="store.removeFromCart(item.id)">Remove</button>
        </div>
      </div>
      
      <div class="total-section">
        <h3>Total: {{ store.cartTotal }}</h3>
        <button class="checkout-btn">Proceed to Payment</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.checkout { max-width: 600px; margin: 2rem auto; padding: 2rem; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); background: white;}
h2 { text-align: center; color: #2c3e50; margin-bottom: 2rem; }
.empty { text-align: center; padding: 2rem; color: #7f8c8d; }
.cart-item { display: flex; justify-content: space-between; align-items: center; padding: 1rem; border-bottom: 1px solid #eee; }
.item-info h3 { margin: 0 0 0.5rem 0; font-size: 1.1rem; }
.item-info p { margin: 0; color: #666; }
.remove-btn { padding: 0.5rem 1rem; background: #e74c3c; color: white; border: none; border-radius: 4px; cursor: pointer; font-weight: bold;}
.remove-btn:hover { background: #c0392b; }
.total-section { margin-top: 2rem; text-align: right; border-top: 2px solid #eee; padding-top: 1rem;}
.checkout-btn { padding: 1rem 2rem; background: #42b883; color: white; border: none; border-radius: 4px; font-weight: bold; cursor: pointer; margin-top: 1rem;}
.checkout-btn:hover { background: #38a376; }
.btn { display: inline-block; padding: 0.8rem 1.5rem; background: #42b883; color: white; text-decoration: none; border-radius: 4px; margin-top: 1rem; font-weight: bold;}
</style>
