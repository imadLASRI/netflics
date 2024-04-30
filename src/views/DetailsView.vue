<script lang="ts" setup>
  import { onMounted, ref } from 'vue'
  import { useRoute, useRouter } from 'vue-router'
  import { toast } from 'vue3-toastify'
  import 'vue3-toastify/dist/index.css'

  import { useMovieStore } from '../stores/movieStore'
  import { randomSuggestion } from '../utils/helper'

  import ItemSuggestion from '../components/ItemSuggestion.vue'
  import ItemButton from '../components/ItemButton.vue'
  import PlayIcon from '../assets/icons/PlayIcon.vue'
  import PlusIcon from '../assets/icons/PlusIcon.vue'
  import DeleteIcon from '../assets/icons/DeleteIcon.vue'

  type MovieDetails = {
    id: string | number
    Title: string
    Plot: string
    Images: string[]
  }

  const ACTIONS = {
    PLAY: 'play',
    MYLIST: 'mylist'
  }

  const route = useRoute()
  const router = useRouter()
  const movieStore = useMovieStore()

  const movieDetails = ref<MovieDetails>({})
  const isInMyList = ref(false)
  const movieSuggestion = ref<MovieDetails[]>([])
  const movieSuggestionNumber = ref(3)

  const notify = (message: string) => {
    toast.info(message, {
      autoClose: 2000
    })
  }

  router.beforeEach((to) => {
    if (to.name === 'movieDetails') {
      movieDetails.value = getMovieDetails(to.params.id)
      movieSuggestion.value = randomSuggestion(movieStore.movies, movieDetails.value, {
        pick: movieSuggestionNumber.value
      })
      isInMyList.value = movieStore.myMovieListServices.isInMyList(to.params.id)
      window.scrollTo(0, 0)
    }
  })

  onMounted(() => {
    if (!movieStore.movies.length) {
      router.push(`/`)
      return
    } else {
      movieDetails.value = getMovieDetails(route.params.id)
      isInMyList.value = movieStore.myMovieListServices.isInMyList(movieDetails.value.id)
      movieSuggestion.value = randomSuggestion(movieStore.movies, movieDetails.value, {
        pick: movieSuggestionNumber.value
      })
    }
  })

  const getMovieDetails = (id: string | number): MovieDetails => {
    return movieStore.movies.find((movie) => movie.id === id) || {}
  }

  const handleDetailsButtonClick = (action: string) => {
    if (
      action === ACTIONS.MYLIST &&
      movieStore.myMovieListServices.isInMyList(movieDetails.value.id)
    ) {
      movieStore.myMovieListServices.removeFromMyList(movieDetails.value.id)
      isInMyList.value = false
      notify('The movie has been removed from your list')
      return
    }
    if (
      action === ACTIONS.MYLIST &&
      !movieStore.myMovieListServices.isInMyList(movieDetails.value.id)
    ) {
      movieStore.myMovieListServices.addToMyList(movieDetails.value)
      isInMyList.value = true
      notify('The movie has been added to your list.')
      return
    }
    if (action === ACTIONS.PLAY) {
      notify('Calma... its not the real Netflix !')
      return
    }
  }
</script>

<template>
  <div :class="`relative w-full h-[500px] bg-black`">
    <img
      :src="movieDetails?.Images?.at(0)"
      class="object-cover object-top w-full h-[500px] block opacity-60"
    />

    <div class="absolute top-0 left-0 py-16 pl-2 lg:pl-10 drop-shadow-xl select-none">
      <h1 class="text-2xl lg:text-9xl mb-6">{{ movieDetails.Title }}</h1>
      <h2 class="text-xl lg:text-2xl block w-full lg:w-3/6">{{ movieDetails.Plot }}</h2>
      <div class="w-96 flex justify-evenly mt-10">
        <ItemButton :action="ACTIONS.PLAY" @click="handleDetailsButtonClick(ACTIONS.PLAY)">
          <PlayIcon />
        </ItemButton>
        <ItemButton :action="ACTIONS.MYLIST" @click="handleDetailsButtonClick(ACTIONS.MYLIST)">
          <DeleteIcon v-if="isInMyList" />
          <PlusIcon v-else />
        </ItemButton>
      </div>
    </div>
  </div>

  <ItemSuggestion :suggestion="movieSuggestion" :amount="movieSuggestionNumber" />
</template>
