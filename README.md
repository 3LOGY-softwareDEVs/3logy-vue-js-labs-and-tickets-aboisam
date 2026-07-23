# Vue.js Labs and Tickets: Week 15

This repository contains the completed work for Week 15 of the Vue.js curriculum. Over the course of the week, I built and iteratively improved a series of applications demonstrating core Vue concepts including reactivity, component architecture, routing, and global state management.

## 🚀 Projects Overview

The week's tasks were divided into Labs (focused exercises) and Tickets (broader, practical applications) across three main concepts.

### 1. Component Architecture & Props/Emits (Tuesday)
- **LAB-54 (Task Dashboard)**: Built a modular dashboard utilizing `defineProps` and `defineEmits`. Demonstrated unidirectional data flow by passing state from a parent `Dashboard.vue` to a child `TaskCard.vue`, and emitting a `completeTask` event back up.
- **TICKET-54 (Modular E-Commerce UI)**: Developed a storefront UI with nested components (`App` -> `ProductList` -> `ProductCard`). Extracted data fetching logic into a reusable `useProducts.js` composable to fetch data from the Fake Store API.

### 2. Vue Router & Forms (Wednesday)
- **LAB-55 (Protected Routing)**: Implemented Vue Router to create a multi-page application with a "Login Wall". Configured a global `beforeEach` navigation guard to protect the `/admin` route. Utilized `computed` properties for client-side form validation.
- **TICKET-55 (Multi-Page Router Store)**: Upgraded the e-commerce store into a 4-page SPA (`/`, `/products`, `/products/:id`, `/checkout`). Demonstrated dynamic routing with route parameters and built a robust checkout form requiring validation across multiple fields.

### 3. Global State Management with Pinia (Thursday)
- **LAB-56 (Pinia Dashboard Refactor)**: Refactored LAB-54 by migrating local state and events into a global Pinia Setup Store (`taskStore.js`). Eliminated prop-drilling and `defineEmits` entirely, allowing the `TaskCard` component to interact directly with the store via a `toggleComplete` action.
- **TICKET-56 (Pinia E-Commerce Cart)**: Integrated Vue Router and Pinia together to create a fully functional shopping cart. Created a `cartStore.js` to manage items, quantities, and a computed total price. The global `NavBar` component reactively displays the cart count across all routes.

## 🛠️ Tech Stack & Tooling
- **Vue 3** (Composition API & `<script setup>`)
- **Vite** (Build Tooling & Dev Server)
- **Vue Router 4** (Client-side Routing)
- **Pinia** (State Management)
- **ESLint & Prettier** (Code Quality)

## 🏃‍♂️ How to Run the Projects

Each project is its own standalone Vite application. To run a specific project:

1. Navigate to the project's directory in your terminal. For example:
   ```bash
   cd THURSDAY/vue-pinia-store
   ```
2. Run the development server:
   ```bash
   npm run dev
   ```
3. To test the production build locally:
   ```bash
   npm run build
   ```

*Note: If you run into build errors related to `@vue/devtools-api`, ensure that it is installed (`npm install @vue/devtools-api`) since strict peer dependency resolution can occasionally skip it during initial setup.*
