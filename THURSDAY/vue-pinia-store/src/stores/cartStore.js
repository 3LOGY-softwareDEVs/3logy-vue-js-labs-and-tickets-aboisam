import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCartStore = defineStore('cart', () => {
  const cartItems = ref([])

  const itemCount = computed(() => {
    return cartItems.value.reduce((total, item) => total + item.quantity, 0)
  })

  const cartTotal = computed(() => {
    const total = cartItems.value.reduce((sum, item) => sum + (item.price * item.quantity), 0)
    return `$${total.toFixed(2)}`
  })

  function addToCart(product) {
    const existing = cartItems.value.find(item => item.id === product.id)
    if (existing) {
      existing.quantity++
    } else {
      cartItems.value.push({ ...product, quantity: 1 })
    }
  }

  function removeFromCart(id) {
    cartItems.value = cartItems.value.filter(item => item.id !== id)
  }

  return { cartItems, itemCount, cartTotal, addToCart, removeFromCart }
})
