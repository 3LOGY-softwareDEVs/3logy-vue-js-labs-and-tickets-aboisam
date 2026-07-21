<!--
  ========================================
  LAB-53: Productivity Tracker
  ========================================
  This is a Single-File Component (SFC).
  It has 3 sections:
    1. <script setup>  → Your JavaScript logic
    2. <template>       → Your HTML (what the user sees)
    3. <style scoped>   → Your CSS (how it looks)
  ========================================
-->

<script setup>
// -----------------------------------------------
// STEP 1: IMPORTS
// -----------------------------------------------
// We import 'ref' and 'computed' from Vue.
// - ref()      → creates a reactive variable (when it changes, the page updates)
// - computed() → creates an auto-calculated value (recalculates when dependencies change)
import { ref, computed } from 'vue'

// -----------------------------------------------
// STEP 2: REACTIVE DATA (using ref)
// -----------------------------------------------

// ref('') creates a reactive variable starting as an empty string.
// This will be connected to the input field via v-model.
// When the user types, this variable updates automatically.
const newTask = ref('')

// ref([]) creates a reactive empty array.
// Every time the user adds a task, it gets pushed into this array.
// When the array changes, the list on screen updates automatically.
const tasks = ref([])

// -----------------------------------------------
// STEP 3: FUNCTIONS
// -----------------------------------------------

// This function runs when the user clicks "Add Task"
function addTask() {
  // .trim() removes whitespace from both ends
  // We check if the input is not empty/blank
  if (newTask.value.trim() !== '') {
    // .push() adds the new task to the END of the tasks array
    // We use .value because we're in <script> (not <template>)
    tasks.value.push(newTask.value)

    // Clear the input field so the user can type a new task
    // Since newTask is connected to the input via v-model,
    // setting it to '' also clears the input on screen!
    newTask.value = ''
  }
}

// -----------------------------------------------
// STEP 4: COMPUTED PROPERTY
// -----------------------------------------------

// computed() creates a value that AUTOMATICALLY recalculates
// whenever the data it depends on changes.
//
// Here, taskCount depends on tasks.value.length
// So whenever tasks array changes (add/remove), taskCount updates too!
//
// Think of it like a formula in Excel:
//   Cell A1 = number of items
//   When items change, A1 auto-updates
const taskCount = computed(() => {
  return tasks.value.length
})
</script>

<template>
  <!--
    STEP 5: THE TEMPLATE (HTML)
    Everything inside <template> is what the user sees.
    Vue special attributes:
      v-model   → two-way binding (input ↔ variable)
      @click    → run function when clicked
      v-for     → repeat element for each item in array
      v-if      → show element only if condition is true
      {{ }}     → display a variable's value (called "mustache syntax")
  -->
  <div class="app-container">
    <!-- App Title -->
    <h1>🚀 Productivity Tracker</h1>
    <p class="subtitle">Track what you accomplish today</p>

    <!-- INPUT SECTION -->
    <div class="input-section">
      <!--
        v-model="newTask"
        This creates a TWO-WAY connection:
          → User types "Hello" → newTask becomes "Hello"
          → We set newTask to "" → input clears on screen
      -->
      <input
        v-model="newTask"
        placeholder="What did you accomplish today?"
        @keyup.enter="addTask"
      />
      <!--
        @keyup.enter="addTask"
        This means: when the user presses Enter, run addTask()
        This is a nice UX touch so they don't HAVE to click the button!
      -->

      <!--
        @click="addTask"
        When this button is clicked, run the addTask() function
      -->
      <button @click="addTask">Add Task</button>
    </div>

    <!-- TASK COUNT - Using our computed property -->
    <!--
      {{ taskCount }} displays the computed value.
      No .value needed in the template!
      This number auto-updates whenever tasks array changes.
    -->
    <h3>Total Tasks: {{ taskCount }}</h3>

    <!-- TASK LIST -->
    <ul>
      <!--
        v-for="(task, index) in tasks"
        This loops through the tasks array.
        For EACH item, it creates one <li> element.

        - task  = the current item's value (e.g., "Finished homework")
        - index = the current item's position (0, 1, 2, ...)

        :key="index"
        Vue needs a unique key for each item to efficiently track changes.
        The colon (:) means this is a dynamic value, not a string.
      -->
      <li v-for="(task, index) in tasks" :key="index">
        <span class="task-number">{{ index + 1 }}.</span>
        {{ task }}
      </li>
    </ul>

    <!--
      v-if="tasks.length === 0"
      Only show this paragraph when the tasks array is empty.
      Once a task is added, this message disappears automatically!
    -->
    <p v-if="tasks.length === 0" class="empty-message">
      No tasks yet. Start adding your accomplishments! ✨
    </p>
  </div>
</template>

<style scoped>
/*
  STEP 6: STYLING
  "scoped" means these styles ONLY apply to this component.
  They won't leak to other components or pages.
*/

.app-container {
  padding: 2rem;
  font-family: 'Segoe UI', system-ui, sans-serif;
  max-width: 550px;
  margin: 2rem auto;
  background: linear-gradient(135deg, #f5f7fa 0%, #e4e9f0 100%);
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

h1 {
  color: #2c3e50;
  margin-bottom: 0.25rem;
  font-size: 1.8rem;
}

.subtitle {
  color: #7f8c8d;
  margin-top: 0;
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
}

/* Input Section - flexbox puts input and button side by side */
.input-section {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.input-section input {
  flex: 1; /* Take up all remaining space */
  padding: 0.7rem 1rem;
  font-size: 1rem;
  border: 2px solid #dcdfe6;
  border-radius: 10px;
  outline: none;
  transition: border-color 0.3s ease;
  background: white;
}

/* Change border color when the input is focused (clicked into) */
.input-section input:focus {
  border-color: #42b883;
  box-shadow: 0 0 0 3px rgba(66, 184, 131, 0.15);
}

.input-section button {
  padding: 0.7rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  background-color: #42b883;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.2s ease;
}

/* Button changes color when hovered */
.input-section button:hover {
  background-color: #38a376;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(66, 184, 131, 0.3);
}

.input-section button:active {
  transform: translateY(0);
}

h3 {
  color: #42b883;
  font-size: 1.15rem;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #e8e8e8;
}

/* The task list */
ul {
  list-style: none; /* Remove default bullet points */
  padding: 0;
  margin: 0;
}

li {
  padding: 0.75rem 1rem;
  margin-bottom: 0.5rem;
  background: white;
  border-radius: 10px;
  font-size: 1.05rem;
  color: #34495e;
  border-left: 4px solid #42b883;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

/* Subtle lift effect when hovering a task */
li:hover {
  transform: translateX(4px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
}

.task-number {
  font-weight: 700;
  color: #42b883;
  margin-right: 0.5rem;
}

.empty-message {
  text-align: center;
  color: #a0a0a0;
  font-style: italic;
  padding: 2rem 1rem;
  font-size: 1rem;
}
</style>
