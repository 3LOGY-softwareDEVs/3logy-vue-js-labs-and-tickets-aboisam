<script setup>
import { useCartStore } from '../stores/cartStore'
const store = useCartStore()
</script>

<template>
  <nav class="navbar">
    <div class="nav-content">
      <router-link to="/" class="logo">🛒 Pinia Store</router-link>
      <div class="nav-links">
        <router-link to="/">Home</router-link>
        <router-link to="/products">Products</router-link>
        <router-link to="/checkout" class="cart-link">
          Checkout 
          <span class="badge">{{ store.itemCount }}</span>
        </router-link>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar { 
  background: #2c3e50; 
  padding: 1rem 2rem; 
  position: sticky;
  top: 0;
  z-index: 100;
}
.nav-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  text-decoration: none;
}
.nav-links {
  display: flex;
  gap: 1.5rem;
  align-items: center;
}
.nav-links a { 
  color: #ecf0f1; 
  text-decoration: none; 
  font-weight: 600; 
  transition: color 0.2s;
}
.nav-links a:hover, .nav-links a.router-link-active { 
  color: #42b883; 
}
.cart-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255,255,255,0.1);
  padding: 0.5rem 1rem;
  border-radius: 20px;
}
.badge {
  background: #42b883;
  color: white;
  padding: 0.1rem 0.6rem;
  border-radius: 12px;
  font-size: 0.9rem;
}
</style>
