<script lang="ts" setup>
import { useMovieStore } from '../stores/movieStore'
import ItemsList from '../components/ItemsList.vue'

const movieStore = useMovieStore()
const myList = movieStore.myMovieListServices.getMyList()

</script>

<template>
  <ItemsList
    v-if="myList.length"
    class="pt-4"
    :movies="myList"
  />
  <h2
    v-else
    class="text-center text-lg lg:text-2xl"
  >
    Nothing here yet...
  </h2>
</template>
