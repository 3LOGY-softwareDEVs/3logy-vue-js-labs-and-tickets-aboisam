<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="app">
    <header class="app-header">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/login">Login</RouterLink>
        <RouterLink to="/admin">Admin</RouterLink>
      </nav>
    </header>

    <main class="main-content">
      <RouterView />
    </main>
  </div>
</template>

<style>
body {
  margin: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f5f6fa;
  color: #2f3640;
}

.app-header {
  background-color: white;
  padding: 1rem 2rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}

nav {
  display: flex;
  gap: 2rem;
  justify-content: center;
}

nav a {
  text-decoration: none;
  color: #7f8fa6;
  font-weight: 600;
  font-size: 1.1rem;
  padding: 0.5rem;
  border-bottom: 2px solid transparent;
  transition: all 0.2s;
}

nav a:hover, nav a.router-link-exact-active {
  color: #353b48;
  border-bottom-color: #3498db;
}

.main-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}
</style>
