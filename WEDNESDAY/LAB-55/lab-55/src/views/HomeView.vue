<template>
  <div class="home">
    <h1>🏠 Welcome Home</h1>
    <p>This is the public home page.</p>
    <div class="links">
      <router-link to="/login" class="link-btn">Go to Login</router-link>
      <router-link to="/admin" class="link-btn">Go to Admin (Protected)</router-link>
    </div>
  </div>
</template>

<style scoped>
.home {
  text-align: center;
  padding: 3rem;
}
.links {
  margin-top: 2rem;
  display: flex;
  gap: 1rem;
  justify-content: center;
}
.link-btn {
  display: inline-block;
  padding: 0.8rem 1.5rem;
  background-color: #3498db;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  transition: background-color 0.2s;
}
.link-btn:hover {
  background-color: #2980b9;
}
</style>
