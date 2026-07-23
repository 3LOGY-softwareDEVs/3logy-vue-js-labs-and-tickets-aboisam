<script setup>
const props = defineProps({
  id: {
    type: Number,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  image: {
    type: String,
    required: true
  }
})

const emit = defineEmits(['addToCart'])

function handleAddToCart() {
  emit('addToCart', {
    id: props.id,
    title: props.title,
    price: props.price
  })
}
</script>

<template>
  <div class="product-card">
    <div class="image-container">
      <img :src="image" :alt="title" />
    </div>
    <div class="product-info">
      <h3 class="title" :title="title">{{ title }}</h3>
      <p class="price">${{ price.toFixed(2) }}</p>
      <button class="add-btn" @click="handleAddToCart">Add to Cart</button>
    </div>
  </div>
</template>

<style scoped>
.product-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.image-container {
  height: 200px;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-bottom: 1px solid #f0f0f0;
}

.image-container img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.product-info {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.title {
  font-size: 1.1rem;
  color: #2c3e50;
  margin-bottom: 0.5rem;
  font-weight: 600;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  height: 2.8em;
}

.price {
  font-size: 1.25rem;
  font-weight: 700;
  color: #42b883;
  margin-bottom: 1.5rem;
  margin-top: auto;
}

.add-btn {
  background-color: #2c3e50;
  color: white;
  border: none;
  padding: 0.8rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;
  width: 100%;
}

.add-btn:hover {
  background-color: #34495e;
}

.add-btn:active {
  transform: translateY(1px);
}
</style>
