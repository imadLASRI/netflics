<script setup>
import Item from './Item.vue'

defineProps({
  suggestion: {
    type: Object,
    required: true
  },
  ammount: {
    type: Number,
    required: true
  }
})
</script>

<template>
  <h1 class="text-xl text-center select-none capitalize my-6">movies recommendation</h1>
  <div :class="`w-4/6 m-auto mb-10 grid grid-cols-${ammount} gap-${ammount}`">
    <Item v-for="item in suggestion"
      :key="item.id"
      :movie="item"
    />
  </div>
</template>
