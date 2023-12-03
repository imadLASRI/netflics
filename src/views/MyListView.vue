<script setup>
import { useMovieStore } from '../stores/movieStore'
import ItemsList from '../components/ItemsList.vue'

const movieStore = useMovieStore()
const myList = movieStore.myMovieListServices.getMyList()

</script>

<template>
  <ItemsList
    class="pt-4"
    :movies="myList"
  />
</template>

<style scoped></style>
