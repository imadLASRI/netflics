<script setup>
import { defineProps,defineEmits, ref } from 'vue'

defineProps({
  categories: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['categoryChanged'])

const selectedCategory = ref('popular')

</script>

<template>
  <div class="flex items-center my-5">
    <span class="text-2xl">Filter by category: </span>
    <select
      class="text-black text-xl ml-5 w-52 h-10 rounded-md"
      v-model="selectedCategory"
      @change="emit('categoryChanged', selectedCategory)"
    >
      <option value="popular" class="text-gray-400">Popular</option>
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
