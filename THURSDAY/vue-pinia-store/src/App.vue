<script setup>
import NavBar from './components/NavBar.vue'
</script>

<template>
  <div class="app-container">
    <NavBar />
    <main class="main-content">
      <router-view />
    </main>
  </div>
</template>

<style>
body { 
  font-family: 'Inter', -apple-system, sans-serif; 
  margin: 0; 
  background: #f9f9f9; 
  color: #2c3e50;
}
.main-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}
</style>
