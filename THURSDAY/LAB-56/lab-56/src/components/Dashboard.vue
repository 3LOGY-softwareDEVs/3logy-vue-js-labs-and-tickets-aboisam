<script setup>
import { useTaskStore } from '../stores/taskStore'
import TaskCard from './TaskCard.vue'

const store = useTaskStore()
</script>

<template>
  <div class="dashboard">
    <header class="dashboard-header">
      <h1>📋 Pinia Task Dashboard</h1>
      <p>Global State Management with Pinia</p>
      
      <div class="stats">
        Completed: <span class="badge">{{ store.completedCount }}</span> / {{ store.tasks.length }}
      </div>
    </header>

    <div class="task-list">
      <!-- We only pass the task object as a prop, NO emits needed! -->
      <TaskCard
        v-for="task in store.tasks"
        :key="task.id"
        :task="task"
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
  margin-bottom: 1.5rem;
}

.stats {
  font-size: 1.2rem;
  font-weight: bold;
  color: #34495e;
  background: white;
  display: inline-block;
  padding: 0.8rem 1.5rem;
  border-radius: 30px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
}

.badge {
  background: #42b883;
  color: white;
  padding: 0.2rem 0.8rem;
  border-radius: 12px;
  margin: 0 0.5rem;
}
</style>
