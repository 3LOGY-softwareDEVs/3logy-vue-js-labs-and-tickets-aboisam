<template>
  <div class="admin">
    <h1>🛡️ Secret Admin Panel</h1>
    <p>Welcome! You successfully bypassed the login wall.</p>
    <div class="content">
      <p>Top secret dashboard contents here...</p>
    </div>
    <router-link to="/" class="back-link">Return Home</router-link>
  </div>
</template>

<style scoped>
.admin {
  text-align: center;
  padding: 3rem;
}

h1 {
  color: #e74c3c;
  margin-bottom: 1rem;
}

.content {
  margin: 2rem auto;
  padding: 2rem;
  background: white;
  border-left: 5px solid #e74c3c;
  border-radius: 8px;
  max-width: 500px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}

.back-link {
  color: #3498db;
  text-decoration: none;
  font-weight: bold;
}

.back-link:hover {
  text-decoration: underline;
}
</style>
