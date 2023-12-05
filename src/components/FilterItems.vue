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
    <span class="text-lg lg:text-2xl">Filter by category: </span>
    <select
      class="text-black text-lg lg:text-xl ml-5 w-40 h-6 lg:w-52 lg:h-10 rounded-md text-center"
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
