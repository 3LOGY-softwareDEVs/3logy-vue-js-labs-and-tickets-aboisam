<!--
  ========================================
  TICKET-53: Classic ToDo App
  ========================================
  This builds on everything from LAB-53 and adds:
    ★ DELETE a todo (using splice)
    ★ SEARCH/FILTER todos (using computed)

  GRADING CHECKLIST:
    [2.0 pts] Vite project setup correctly
    [2.5 pts] v-model used correctly for inputs
    [2.5 pts] v-for used correctly to render the list
    [3.0 pts] Delete functionality works
    [2.5 pts] Computed property used for Search filtering
  ========================================
-->

<script setup>
// -----------------------------------------------
// IMPORTS
// -----------------------------------------------
// Same as LAB-53: we need ref for reactive variables
// and computed for auto-calculated values
import { ref, computed } from 'vue'

// -----------------------------------------------
// REACTIVE DATA (ref)
// -----------------------------------------------

// Holds what the user is typing in the "add" input
// Connected to the input field via v-model
const newTodo = ref('')

// ★ NEW: Holds what the user is typing in the "search" input
// This is a SECOND v-model — each input gets its own ref
const searchQuery = ref('')

// The master list of all todos
// Every add/delete modifies this array
const todos = ref([])

// -----------------------------------------------
// FUNCTIONS
// -----------------------------------------------

// Same pattern as LAB-53's addTask()
// 1. Check if not empty
// 2. Push to array
// 3. Clear input
function addTodo() {
  if (newTodo.value.trim() !== '') {
    todos.value.push(newTodo.value.trim())
    newTodo.value = ''
  }
}

// ★ NEW: Delete a todo by its index position
//
// HOW splice() WORKS:
//   array.splice(startIndex, deleteCount)
//
//   Example:
//     todos = ['Buy milk', 'Walk dog', 'Code']
//     todos.splice(1, 1)  ← remove 1 item starting at index 1
//     todos = ['Buy milk', 'Code']  ← 'Walk dog' is gone!
//
// We receive 'index' from the template — it tells us
// WHICH todo the user clicked "Delete" on.
function deleteTodo(index) {
  todos.value.splice(index, 1)
}

// -----------------------------------------------
// COMPUTED PROPERTIES
// -----------------------------------------------

// ★ NEW: This is the search filter — the KEY feature for this ticket!
//
// HOW IT WORKS:
//   1. If searchQuery is empty → return ALL todos (show everything)
//   2. If searchQuery has text → filter and return ONLY matching todos
//
// .filter() creates a NEW array keeping only items that return true:
//   ['Apple', 'Banana', 'Apricot'].filter(item => item.includes('Ap'))
//   → ['Apple', 'Apricot']  (Banana was filtered OUT)
//
// .toLowerCase() makes the search case-insensitive:
//   'Buy Milk'.toLowerCase() → 'buy milk'
//   So searching 'buy' matches 'Buy Milk' ✓
//
// WHY computed()?
//   Because it AUTOMATICALLY re-runs whenever:
//     - searchQuery changes (user types in search box)
//     - todos changes (user adds or deletes a todo)
//   We don't need to manually call it — Vue handles that!
const filteredTodos = computed(() => {
  if (searchQuery.value.trim() === '') {
    return todos.value
  }
  return todos.value.filter((todo) =>
    todo.toLowerCase().includes(searchQuery.value.toLowerCase()),
  )
})

// Total count of ALL todos (not just filtered ones)
const totalCount = computed(() => {
  return todos.value.length
})
</script>

<template>
  <div class="app-container">
    <!-- HEADER -->
    <div class="header">
      <h1>📋 My ToDo App</h1>
      <p class="subtitle">Stay organized, get things done</p>
    </div>

    <!-- ==========================================
         ADD TODO SECTION
         Requirement: "An input field and button to
         add a new string to an array of todos"
         ========================================== -->
    <div class="add-section">
      <!--
        v-model="newTodo" — Two-way binding
        When user types → newTodo updates
        When we clear newTodo → input clears

        @keyup.enter="addTodo" — Pressing Enter adds the todo
        (bonus UX, not required but nice to have!)
      -->
      <input
        v-model="newTodo"
        placeholder="What needs to be done?"
        @keyup.enter="addTodo"
        class="add-input"
      />
      <!-- @click="addTodo" — Clicking runs the addTodo function -->
      <button @click="addTodo" class="add-btn">+ Add</button>
    </div>

    <!-- ==========================================
         SEARCH SECTION
         Requirement: "Add a Search input field above
         your list. Use a computed property to filter
         the displayed list."
         ========================================== -->
    <div class="search-section">
      <!--
        v-model="searchQuery" — Second v-model!
        This input is connected to a DIFFERENT variable.
        As the user types here, filteredTodos auto-updates
        because it's a computed property that depends on searchQuery.
      -->
      <input
        v-model="searchQuery"
        placeholder="🔍 Search your todos..."
        class="search-input"
      />
    </div>

    <!-- STATUS BAR — Shows filtered count vs total -->
    <div class="status-bar">
      <span class="count-badge">{{ filteredTodos.length }}</span>
      <span v-if="searchQuery">
        of {{ totalCount }} todos match your search
      </span>
      <span v-else>
        {{ totalCount === 1 ? 'todo' : 'todos' }} total
      </span>
    </div>

    <!-- ==========================================
         TODO LIST
         Requirement: "Display all added todos using v-for"
         ========================================== -->
    <ul class="todo-list">
      <!--
        ★ IMPORTANT: We loop through filteredTodos, NOT todos!
        This is what makes the search work:
          - filteredTodos is a computed property
          - When searchQuery changes, filteredTodos auto-recalculates
          - v-for re-renders the list with the filtered results

        Without this, the list would always show ALL todos
        regardless of what's typed in the search box.
      -->
      <li v-for="(todo, index) in filteredTodos" :key="index" class="todo-item">
        <div class="todo-content">
          <span class="todo-number">{{ index + 1 }}</span>
          <span class="todo-text">{{ todo }}</span>
        </div>

        <!-- ==========================================
             DELETE BUTTON
             Requirement: "Next to each todo, include a
             Delete button. Clicking it should remove
             that specific item from the array."
             ==========================================

             @click="deleteTodo(index)"

             We pass 'index' to tell the function WHICH todo to delete.
             index comes from v-for — it's the position of this item.

             Example: If this is the 3rd item, index = 2
             So deleteTodo(2) removes the 3rd item via splice(2, 1)
        -->
        <button @click="deleteTodo(index)" class="delete-btn">
          ✕
        </button>
      </li>
    </ul>

    <!-- EMPTY STATES — Different messages for different situations -->
    <!--
      v-if / v-else-if — Conditional rendering
      Only ONE of these will show at a time:
        1. If no todos at all → "No todos yet"
        2. If todos exist but search has no matches → "No matches"
    -->
    <div v-if="todos.length === 0" class="empty-state">
      <p class="empty-icon">📝</p>
      <p class="empty-text">No todos yet</p>
      <p class="empty-hint">Add your first todo above to get started!</p>
    </div>

    <div v-else-if="filteredTodos.length === 0" class="empty-state">
      <p class="empty-icon">🔍</p>
      <p class="empty-text">No matches found</p>
      <p class="empty-hint">Try a different search term</p>
    </div>
  </div>
</template>

<style scoped>
/*
  ========================================
  STYLING
  Requirement: "Add basic CSS in the <style scoped>
  block to make it look presentable."
  ========================================
*/

.app-container {
  max-width: 580px;
  margin: 3rem auto;
  padding: 2.5rem;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

/* --- HEADER --- */
.header {
  text-align: center;
  margin-bottom: 2rem;
}

h1 {
  font-size: 2rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 0.3rem;
  letter-spacing: -0.5px;
}

.subtitle {
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.95rem;
}

/* --- ADD TODO SECTION --- */
.add-section {
  display: flex;
  gap: 0.6rem;
  margin-bottom: 1rem;
}

.add-input {
  flex: 1;
  padding: 0.8rem 1.2rem;
  font-size: 1rem;
  background: rgba(255, 255, 255, 0.08);
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  color: #ffffff;
  outline: none;
  transition: all 0.3s ease;
}

.add-input::placeholder {
  color: rgba(255, 255, 255, 0.3);
}

.add-input:focus {
  border-color: #7c4dff;
  background: rgba(255, 255, 255, 0.12);
  box-shadow: 0 0 0 3px rgba(124, 77, 255, 0.2);
}

.add-btn {
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  background: linear-gradient(135deg, #7c4dff, #651fff);
  color: white;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;
}

.add-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(124, 77, 255, 0.4);
}

.add-btn:active {
  transform: translateY(0);
}

/* --- SEARCH SECTION --- */
.search-section {
  margin-bottom: 1rem;
}

.search-input {
  width: 100%;
  padding: 0.7rem 1.2rem;
  font-size: 0.95rem;
  background: rgba(255, 255, 255, 0.06);
  border: 2px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  color: #ffffff;
  outline: none;
  transition: all 0.3s ease;
}

.search-input::placeholder {
  color: rgba(255, 255, 255, 0.3);
}

.search-input:focus {
  border-color: #448aff;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 0 3px rgba(68, 138, 255, 0.15);
}

/* --- STATUS BAR --- */
.status-bar {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 0;
  margin-bottom: 0.8rem;
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.45);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.count-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 26px;
  height: 26px;
  padding: 0 8px;
  background: linear-gradient(135deg, #7c4dff, #651fff);
  color: white;
  font-weight: 700;
  font-size: 0.8rem;
  border-radius: 20px;
}

/* --- TODO LIST --- */
.todo-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.todo-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.85rem 1rem;
  margin-bottom: 0.5rem;
  background: rgba(255, 255, 255, 0.06);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.06);
  transition: all 0.2s ease;
}

.todo-item:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.12);
  transform: translateX(4px);
}

.todo-content {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  flex: 1;
  min-width: 0;
}

.todo-number {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  background: rgba(124, 77, 255, 0.2);
  color: #b388ff;
  font-weight: 700;
  font-size: 0.8rem;
  border-radius: 8px;
  flex-shrink: 0;
}

.todo-text {
  color: rgba(255, 255, 255, 0.9);
  font-size: 1rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* --- DELETE BUTTON --- */
.delete-btn {
  width: 32px;
  height: 32px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 82, 82, 0.1);
  color: #ff5252;
  border: 1px solid rgba(255, 82, 82, 0.15);
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.85rem;
  font-weight: 700;
  flex-shrink: 0;
  margin-left: 0.8rem;
  transition: all 0.2s ease;
}

.delete-btn:hover {
  background: rgba(255, 82, 82, 0.25);
  border-color: rgba(255, 82, 82, 0.4);
  transform: scale(1.1);
}

/* --- EMPTY STATES --- */
.empty-state {
  text-align: center;
  padding: 3rem 1rem;
}

.empty-icon {
  font-size: 2.5rem;
  margin-bottom: 0.8rem;
}

.empty-text {
  color: rgba(255, 255, 255, 0.5);
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.3rem;
}

.empty-hint {
  color: rgba(255, 255, 255, 0.3);
  font-size: 0.9rem;
}
</style>
