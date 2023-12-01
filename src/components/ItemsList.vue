<script setup>
import { defineProps } from 'vue'
import { useRouter } from 'vue-router'

import Item from './Item.vue'

const router = useRouter()

defineProps({
  movies: {
    type: Object,
    required: true
  }
})

function openItemDetails(id) {
  router.push(`/movie/${id}`)
}
</script>

<template>
  <div class="grid grid-cols-7 gap-4">
    <Item v-for="item in movies"
      :key="item.id"
      :movie="item"
      @click="openItemDetails(item.id)"
    />
  </div>
</template>
