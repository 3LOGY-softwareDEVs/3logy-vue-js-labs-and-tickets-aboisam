<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { globalState } from '../router/index'

const router = useRouter()
const email = ref('')
const password = ref('')

const isFormValid = computed(() => {
  return email.value.includes('@') && password.value.length >= 5
})

function handleLogin() {
  if (isFormValid.value) {
    globalState.isAuthenticated = true
    router.push('/admin')
  }
}
</script>

<template>
  <div class="login-container">
    <h2>Login Required</h2>
    <form @submit.prevent="handleLogin" class="login-form">
      <div class="form-group">
        <label>Email</label>
        <input v-model="email" type="email" placeholder="Enter email (@ required)" />
      </div>
      
      <div class="form-group">
        <label>Password</label>
        <input v-model="password" type="password" placeholder="At least 5 characters" />
      </div>
      
      <button type="submit" :disabled="!isFormValid" class="submit-btn">
        Login
      </button>
    </form>
  </div>
</template>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 4rem auto;
  padding: 2.5rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}

h2 {
  text-align: center;
  color: #2c3e50;
  margin-bottom: 2rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: #34495e;
}

input {
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 1rem;
}

input:focus {
  outline: none;
  border-color: #3498db;
  box-shadow: 0 0 0 2px rgba(52, 152, 219, 0.2);
}

.submit-btn {
  width: 100%;
  padding: 1rem;
  background-color: #2ecc71;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s;
}

.submit-btn:hover:not(:disabled) {
  background-color: #27ae60;
}

.submit-btn:disabled {
  background-color: #95a5a6;
  cursor: not-allowed;
}
</style>
