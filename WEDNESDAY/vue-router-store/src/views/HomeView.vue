<template>
  <div class="home">
    <h1>Welcome to Vue E-Commerce</h1>
    <p>Your one-stop shop for everything awesome.</p>
    <router-link to="/products" class="btn">Shop Now</router-link>
  </div>
</template>

<style scoped>
.home {
  text-align: center;
  padding: 4rem;
}
.btn {
  display: inline-block;
  margin-top: 1rem;
  padding: 1rem 2rem;
  background-color: #42b883;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-weight: bold;
}
</style>
