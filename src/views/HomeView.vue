<script setup>
import ItemsList from '../components/ItemsList.vue'
import FilterItems from '../components/FilterItems.vue'
</script>

<template>
  <h1>HomeView</h1>
  <FilterItems />
  <ItemsList />
</template>

<style scoped>
/* TODO: mobile  */
@media (max-width: 400px) {
}
</style>
