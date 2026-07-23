<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { useCartStore } from '../stores/cartStore'

const route = useRoute()
const store = useCartStore()
const productId = Number(route.params.id)

const allProducts = [
  { id: 1, title: 'Laptop Pro', price: 999, desc: 'High performance laptop.' },
  { id: 2, title: 'Wireless Mouse', price: 29, desc: 'Ergonomic wireless mouse.' },
  { id: 3, title: 'Mechanical Keyboard', price: 89, desc: 'Clicky mechanical keyboard.' },
  { id: 4, title: 'HD Monitor', price: 199, desc: '1080p IPS display.' },
  { id: 5, title: 'USB-C Hub', price: 49, desc: '7-in-1 USB-C hub.' }
]

const product = computed(() => {
  return allProducts.find(p => p.id === productId)
})

function addToCart() {
  if (product.value) {
    store.addToCart(product.value)
  }
}
</script>

<template>
  <div class="product-detail">
    <div v-if="product" class="card">
      <h2>{{ product.title }}</h2>
      <p class="price">${{ product.price }}</p>
      <p class="desc">{{ product.desc }}</p>
      <button class="add-btn" @click="addToCart">Add to Cart</button>
      <router-link to="/products" class="back">Back to Products</router-link>
    </div>
    <div v-else>
      <h2>Product not found</h2>
      <router-link to="/products">Back to Products</router-link>
    </div>
  </div>
</template>

<style scoped>
.product-detail { padding: 3rem; max-width: 600px; margin: 0 auto; text-align: center; }
.card { background: white; padding: 3rem; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.05); }
.price { font-size: 1.5rem; color: #42b883; font-weight: bold; }
.desc { margin: 1.5rem 0; color: #666; line-height: 1.5; }
.add-btn { padding: 0.8rem 2rem; background: #42b883; color: white; border: none; border-radius: 6px; cursor: pointer; display: block; margin: 0 auto 2rem; font-weight: bold;}
.add-btn:hover { background: #38a376; }
.back { color: #3498db; text-decoration: none; }
</style>
