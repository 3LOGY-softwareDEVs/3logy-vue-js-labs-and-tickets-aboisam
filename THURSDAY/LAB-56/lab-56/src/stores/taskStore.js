import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useTaskStore = defineStore('tasks', () => {
  // 1. STATE: Move array of tasks here
  const tasks = ref([
    { id: 1, title: 'Learn Vue', isComplete: false },
    { id: 2, title: 'Master Pinia', isComplete: false },
    { id: 3, title: 'Build Enterprise Apps', isComplete: false },
  ])

  // 2. GETTER: Compute number of completed tasks
  const completedCount = computed(() => tasks.value.filter(t => t.isComplete).length)

  // 3. ACTION: Toggle task status
  function toggleComplete(id) {
    const task = tasks.value.find(t => t.id === id)
    if (task) {
      task.isComplete = !task.isComplete
    }
  }

  return { tasks, completedCount, toggleComplete }
})
