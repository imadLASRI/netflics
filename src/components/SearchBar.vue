<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useMovieStore } from '../stores/movieStore'

const router = useRouter()
const route = useRoute()

const searchData = useMovieStore()
const searchQuery = ref('')
const searchResults = ref([])

const handleSearch = () => {
  let moviesList = []

  if(route.name === 'mylist') {
    moviesList = searchData.myMovieListServices.getMyList()
  } else {
    moviesList = searchData.movies
  }

  searchResults.value = moviesList.filter(movie =>
    movie.Title.toLowerCase().includes(searchQuery.value.toLowerCase()) || 
    movie.Plot.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
}

const goToMovieDetails = (id) => {
  router.push(`/movie/${id}`)
  searchQuery.value = ''
}
</script>

<template>
  <div class="relative max-w-300">
    <input
      v-model="searchQuery"
      @input="handleSearch"
      class="w-full p-2 border-none rounded-md text-base bg-gray-800 text-white"
      type="text"
      placeholder="Search for movies..."
    />
    <ul
      v-if="searchQuery.length > 1 && searchResults.length > 0"
      class="absolute top-full left-0 z-10 w-full bg-gray-900 border border-gray-700 rounded-md list-none p-0 m-0"
    >
      <li
        class="p-2 cursor-pointer transition duration-300 ease-in-out hover:bg-gray-800"
        v-for="result in searchResults"
        :key="result.id"
        @click="goToMovieDetails(result.id)"
      >
        {{ result.Title }}
      </li>
    </ul>
  </div>
</template>
