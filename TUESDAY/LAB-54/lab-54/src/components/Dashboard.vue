<script setup>
import { ref } from 'vue'
import TaskCard from './TaskCard.vue'

const tasks = ref([
  { id: 1, title: 'Learn Vue.js Fundamentals', isComplete: false },
  { id: 2, title: 'Master Component Props & Emits', isComplete: false },
  { id: 3, title: 'Build a Task Dashboard', isComplete: false },
])

function handleComplete(taskId) {
  const task = tasks.value.find(t => t.id === taskId)
  if (task) {
    task.isComplete = true
  }
}
</script>

<template>
  <div class="dashboard">
    <header class="dashboard-header">
      <h1>📋 Task Dashboard</h1>
      <p>Manage your daily tasks efficiently</p>
    </header>

    <div class="task-list">
      <TaskCard
        v-for="task in tasks"
        :key="task.id"
        :id="task.id"
        :title="task.title"
        :isComplete="task.isComplete"
        @complete-task="handleComplete"
      />
    </div>
  </div>
</template>

<style scoped>
.dashboard {
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  background-color: #f8f9fa;
  min-height: 100vh;
}

.dashboard-header {
  text-align: center;
  margin-bottom: 2rem;
}

.dashboard-header h1 {
  color: #2c3e50;
  font-size: 2.2rem;
  margin-bottom: 0.5rem;
}

.dashboard-header p {
  color: #7f8c8d;
  font-size: 1.1rem;
}
</style>
