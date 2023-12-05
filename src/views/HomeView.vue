<script setup>
import { onMounted, ref } from 'vue'
import { cloneDeep } from "lodash"

import { useMovieStore } from '../stores/movieStore'

import ItemsList from '../components/ItemsList.vue'
import FilterItems from '../components/FilterItems.vue'

const movieStore = useMovieStore()
let loading = ref(true)
let movies = ref([])
let categories = ref([])

function handleCategoryChange(category) {
  if(category === 'popular') {
    movies.value = cloneDeep(movieStore.movies)
  } else {
    movies.value = movieStore.movies.filter(movie => movie.Genre.includes(category))
  }
}

onMounted(async () => {
      try {
        await movieStore.fetchMovies()
        movies.value = cloneDeep(movieStore.movies)
        categories.value = movieStore.moviesCategories
      } 
      catch(err) {
        console.error(err)
      }
      finally {
        loading.value = false;
      }
});
</script>

<template>
  <span
    v-if="loading"
    class="flex justify-center w-full my-10"
  >
    Loading...
  </span>
  <template v-else>  
    <FilterItems :categories="categories" @category-changed="handleCategoryChange"/>
    <ItemsList :movies="movies"/>
  </template>
</template>
