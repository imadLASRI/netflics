<script lang="ts" setup>
  import Item from './Item.vue'
  import { ItemsListProps } from '../types/components.ts'

  defineProps<ItemsListProps>()
</script>

<template>
  <div class="grid grid-cols-2 lg:grid-cols-7 gap-4">
    <Item v-for="item in movies"
      :key="item.id"
      :movie="item"
    />
  </div>
</template>
