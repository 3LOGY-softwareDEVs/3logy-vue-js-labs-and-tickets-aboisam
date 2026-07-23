import { ref } from 'vue'

export function useProducts() {
  const products = ref([])
  const loading = ref(true)
  const error = ref(null)

  const fallbackProducts = [
    { id: 1, title: 'Laptop Pro', price: 999, image: 'https://via.placeholder.com/150' },
    { id: 2, title: 'Wireless Mouse', price: 29, image: 'https://via.placeholder.com/150' },
    { id: 3, title: 'USB-C Hub', price: 49, image: 'https://via.placeholder.com/150' },
  ]

  async function fetchProducts() {
    try {
      loading.value = true
      const response = await fetch('https://fakestoreapi.com/products')
      if (!response.ok) throw new Error('Failed to fetch')
      const data = await response.json()
      products.value = data
    } catch (e) {
      console.warn('Fake Store API failed, using fallback data.', e)
      products.value = fallbackProducts
    } finally {
      loading.value = false
    }
  }

  // Fetch immediately
  fetchProducts()

  return { products, loading, error }
}
