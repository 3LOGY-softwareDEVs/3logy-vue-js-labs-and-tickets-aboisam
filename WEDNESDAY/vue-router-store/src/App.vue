<template>
  <div>
    <nav class="navbar">
      <div class="nav-content">
        <router-link to="/" class="logo">Vue E-Commerce</router-link>
        <div class="nav-links">
          <router-link to="/">Home</router-link>
          <router-link to="/products">Products</router-link>
          <router-link to="/checkout">Checkout</router-link>
        </div>
      </div>
    </nav>
    <main class="main-container">
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

.navbar { 
  background: white; 
  padding: 1rem 2rem; 
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
  position: sticky;
  top: 0;
  z-index: 100;
}

.nav-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.5rem;
  font-weight: 800;
  color: #2c3e50;
  text-decoration: none;
}

.nav-links a { 
  color: #666; 
  text-decoration: none; 
  margin-left: 2rem; 
  font-weight: 600; 
  transition: color 0.2s;
}

.nav-links a:hover, .nav-links a.router-link-active { 
  color: #42b883; 
}

.main-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}
</style>
