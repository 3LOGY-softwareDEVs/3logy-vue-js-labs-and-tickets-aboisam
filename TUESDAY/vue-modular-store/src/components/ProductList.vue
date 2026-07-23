<script setup>
import { useProducts } from '../composables/useProducts'
import ProductCard from './ProductCard.vue'

const { products, loading } = useProducts()

const emit = defineEmits(['addToCart'])

function handleAddToCart(product) {
  emit('addToCart', product)
}
</script>

<template>
  <div class="product-list-container">
    <div v-if="loading" class="loading-state">
      <div class="spinner"></div>
      <p>Loading products...</p>
    </div>
    
    <div v-else class="product-grid">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :id="product.id"
        :title="product.title"
        :price="product.price"
        :image="product.image"
        @add-to-cart="handleAddToCart"
      />
    </div>
  </div>
</template>

<style scoped>
.product-list-container {
  padding: 2rem 0;
}

.loading-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 300px;
  color: #666;
}

.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid rgba(66, 184, 131, 0.2);
  border-left-color: #42b883;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-bottom: 1rem;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
}
</style>
