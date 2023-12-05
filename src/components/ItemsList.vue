<script setup>
import Item from './Item.vue'

defineProps({
  movies: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="grid grid-cols-2 lg:grid-cols-7 gap-4">
    <Item v-for="item in movies"
      :key="item.id"
      :movie="item"
    />
  </div>
</template>
