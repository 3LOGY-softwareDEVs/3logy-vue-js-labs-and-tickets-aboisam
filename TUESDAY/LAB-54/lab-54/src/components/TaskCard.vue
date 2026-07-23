<script setup>
const props = defineProps({
  id: {
    type: Number,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  isComplete: {
    type: Boolean,
    required: true
  }
})

const emit = defineEmits(['completeTask'])

function handleComplete() {
  emit('completeTask', props.id)
}
</script>

<template>
  <div class="task-card" :class="{ 'is-complete': isComplete }">
    <div class="task-content">
      <span class="task-title" :class="{ 'strikethrough': isComplete }">{{ title }}</span>
    </div>
    <button 
      class="complete-btn" 
      @click="handleComplete" 
      :disabled="isComplete"
    >
      {{ isComplete ? 'Completed' : 'Mark Complete' }}
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

.complete-btn:hover:not(:disabled) {
  background-color: #1976d2;
}

.complete-btn:disabled {
  background-color: #a5d6a7;
  cursor: not-allowed;
}
</style>
