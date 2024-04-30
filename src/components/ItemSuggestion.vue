<script lang="ts" setup>
  import Item from './Item.vue'
  import { ItemSuggestionProps } from '../types/components.ts'

  defineProps<ItemSuggestionProps>()
</script>

<template>
  <h1 class="text-xl text-center select-none capitalize my-6">movies recommendation</h1>
  <div :class="`w-4/6 m-auto mb-10 grid grid-cols-${amount} gap-${amount}`">
    <Item v-for="item in suggestion" :key="item.id" :movie="item" />
  </div>
</template>
