<script setup>
import { useTaskStore } from '../stores/taskStore'

// Keep the prop for the list item
const props = defineProps({
  task: {
    type: Object,
    required: true
  }
})

// Use the store
const store = useTaskStore()

// No defineEmits! The child modifies global state directly.
</script>

<template>
  <div class="task-card" :class="{ 'is-complete': task.isComplete }">
    <div class="task-content">
      <span class="task-title" :class="{ 'strikethrough': task.isComplete }">{{ task.title }}</span>
    </div>
    <button 
      class="complete-btn" 
      @click="store.toggleComplete(task.id)"
    >
      {{ task.isComplete ? 'Undo' : 'Mark Complete' }}
    </button>
  </div>
</template>

<style scoped>
.task-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  background: white;
  border-radius: 12px;
  margin-bottom: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  border-left: 5px solid #ff9800;
}

.task-card.is-complete {
  border-left-color: #4caf50;
  background: #f1f8e9;
  opacity: 0.8;
}

.task-title {
  font-size: 1.1rem;
  font-weight: 500;
  color: #333;
}

.strikethrough {
  text-decoration: line-through;
  color: #888;
}

.complete-btn {
  padding: 0.6rem 1.2rem;
  border: none;
  border-radius: 8px;
  background-color: #2196f3;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;
}

.complete-btn:hover {
  background-color: #1976d2;
}

.is-complete .complete-btn {
  background-color: #9e9e9e;
}

.is-complete .complete-btn:hover {
  background-color: #757575;
}
</style>
