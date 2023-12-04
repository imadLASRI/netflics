<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

defineProps({
  movie: {
    type: Object,
    required: true
  }
})

const openItemDetails = (id) => {
  router.push(`/movie/${id}`)
}
</script>

<template>
  <div class="flex border-radius-8 overflow-hidden shadow-md transition-transform duration-200 ease-in-out hover:transform hover:scale-105 hover:transform-origin-bottom hover:transition-all hover:duration-300 hover:ease-in-out hover:allow-discrete col-span-1 cursor-pointer">
    <img
      :src="movie.Poster"
      @click="openItemDetails(movie.id)"
      alt="Poster"
      class="w-full h-auto rounded-l-8"
    />
  </div>
</template>