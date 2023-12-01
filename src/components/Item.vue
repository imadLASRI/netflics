<script setup>
import { defineProps } from 'vue';

defineProps({
  movie: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="item-card col-span-1 cursor-pointer">
    <img
      :src="movie.Poster"
      alt="Poster"
      class="poster"
    />
  </div>
</template>

<style lang="scss" scoped>
.item-card {
  display: flex;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
    transform-origin: bottom;
    transition: all 300ms ease-in-out allow-discrete;
  }
}

.poster {
  max-width: 100%;
  height: auto;
  border-radius: 8px 0 0 8px;
}
</style>
