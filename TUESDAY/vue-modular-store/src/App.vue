<script setup>
import { ref, computed } from 'vue'
import ProductList from './components/ProductList.vue'

const cart = ref([])

const cartItemCount = computed(() => {
  return cart.value.length
})

function addToCart(product) {
  cart.value.push(product)
}
</script>

<template>
  <div class="app-layout">
    <nav class="navbar">
      <div class="nav-content">
        <h1 class="logo">🛒 Vue Store</h1>
        <div class="cart-widget">
          <span class="cart-icon">🛍️</span>
          <span class="cart-count">{{ cartItemCount }}</span>
          <span class="cart-label">Items in Cart</span>
        </div>
      </div>
    </nav>

    <main class="main-content">
      <div class="container">
        <header class="page-header">
          <h2>Our Products</h2>
          <p>Discover our latest collection of premium items.</p>
        </header>

        <ProductList @add-to-cart="addToCart" />
      </div>
    </main>
  </div>
</template>

<style>
/* Global reset and variables */
:root {
  --primary-color: #42b883;
  --text-dark: #2c3e50;
  --text-light: #7f8c8d;
  --bg-light: #f8f9fa;
  --white: #ffffff;
}

body, html {
  margin: 0;
  padding: 0;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background-color: var(--bg-light);
  color: var(--text-dark);
}

* {
  box-sizing: border-box;
}

.app-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.navbar {
  background-color: var(--white);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  position: sticky;
  top: 0;
  z-index: 100;
}

.nav-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--text-dark);
  margin: 0;
  letter-spacing: -0.5px;
}

.cart-widget {
  display: flex;
  align-items: center;
  background-color: var(--primary-color);
  color: var(--white);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-weight: 600;
  box-shadow: 0 4px 6px rgba(66, 184, 131, 0.2);
}

.cart-count {
  background-color: var(--white);
  color: var(--primary-color);
  border-radius: 50%;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0.5rem;
  font-size: 0.85rem;
}

.cart-label {
  font-size: 0.9rem;
}

.main-content {
  flex-grow: 1;
  padding: 3rem 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.page-header {
  margin-bottom: 2rem;
  text-align: center;
}

.page-header h2 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  color: var(--text-dark);
}

.page-header p {
  font-size: 1.1rem;
  color: var(--text-light);
}
</style>
