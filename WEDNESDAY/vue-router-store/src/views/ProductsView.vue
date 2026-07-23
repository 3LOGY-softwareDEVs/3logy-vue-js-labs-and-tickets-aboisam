<script setup>
import { ref } from 'vue'

const products = ref([
  { id: 1, title: 'Laptop Pro', price: 999 },
  { id: 2, title: 'Wireless Mouse', price: 29 },
  { id: 3, title: 'Mechanical Keyboard', price: 89 },
  { id: 4, title: 'HD Monitor', price: 199 },
  { id: 5, title: 'USB-C Hub', price: 49 }
])
</script>

<template>
  <div class="products-page">
    <h2>Our Products</h2>
    <div class="grid">
      <div v-for="product in products" :key="product.id" class="card">
        <h3>{{ product.title }}</h3>
        <p class="price">${{ product.price }}</p>
        <router-link :to="`/products/${product.id}`" class="btn">View Details</router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.products-page { padding: 2rem; }
.grid { display: grid; gap: 1.5rem; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); }
.card { padding: 1.5rem; border: 1px solid #ddd; border-radius: 8px; text-align: center; background: white; }
.price { color: #42b883; font-weight: bold; margin: 1rem 0; }
.btn { display: inline-block; padding: 0.5rem 1rem; background-color: #2c3e50; color: white; text-decoration: none; border-radius: 4px; }
</style>
