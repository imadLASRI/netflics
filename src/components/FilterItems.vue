<script setup>
import { defineProps,defineEmits, ref } from 'vue'

defineProps({
  categories: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['categoryChanged'])

const selectedCategory = ref('select')

</script>

<template>
  <div class="flex items-center">
    <span>Filter by category: </span>
    <select
      class="text-black m-5"
      v-model="selectedCategory"
      @change="emit('categoryChanged', selectedCategory)"
    >
      <option value="select" class="text-gray-400">All categories</option>
      <option
        v-for="category in categories"
        :value="category"
        :key="category"
      >
        {{ category }}
      </option>
    </select>
  </div>
</template>
