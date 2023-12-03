<script setup>
import { defineProps, onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router'
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

import { useMovieStore } from '../stores/movieStore'

import ItemSuggestion from "./ItemSuggestion.vue";
import ItemButton from "./ItemButton.vue";
import PlayIcon from '../assets/icons/PlayIcon.vue'
import PlusIcon from '../assets/icons/PlusIcon.vue'
import DeleteIcon from '../assets/icons/DeleteIcon.vue'

const route = useRoute()
const router = useRouter()
const movieStore = useMovieStore()

let movieDetails = ref({})
let existsInMyList = ref(false)

const notify = (message) => {
	toast.info(message, {
		autoClose: 2000,
	})
}

defineProps({
	movie: {
		type: Object,
		required: true
	}
})

onMounted(() => {
	if(!movieStore.movies.length){
		router.push(`/`)
		return
	}
	else {
		movieDetails.value = getMovieDetails(route.params.id)
		existsInMyList.value = movieStore.myMovieListServices.existsInMyList(movieDetails.value.id)
	}
})

function getMovieDetails(id) {
	return movieStore.movies.find(movie => movie.id === id)
}

function handleDetailsButtonClick(action) {
	if(action === 'mylist' && movieStore.myMovieListServices.existsInMyList(movieDetails.value.id)){
		movieStore.myMovieListServices.removeFromMyList(movieDetails.value.id)
		existsInMyList.value = false
		notify('The movie has been removed from your list')
		return
	}
	if(action === 'mylist' && !movieStore.myMovieListServices.existsInMyList(movieDetails.value.id)){
		movieStore.myMovieListServices.addToMyList(movieDetails.value)
		existsInMyList.value = true
		notify('The movie has been added to your list.')
		return
	}
	if(action === 'play') {
		notify('Calma... its not the real Netflix !')
		return
	}
}
</script>

<template>
	<div :class="`relative w-full h-[500px] bg-black`">
		<img :src="movieDetails.Images?.at(0)" class="object-cover object-top w-full h-[500px] block opacity-60"/>

		<div class="absolute top-0 left-0 py-16 pl-10 drop-shadow-xl select-none">
			<h1 class="text-9xl mb-6">{{ movieDetails.Title }}</h1>
			<h2 class="text-2xl block w-3/6">{{ movieDetails.Plot }}</h2>
			<div class="w-96 flex justify-evenly mt-10">
				<ItemButton
					action="play"
					@click="handleDetailsButtonClick('play')"
				>
					<PlayIcon />
				</ItemButton>
				<ItemButton
					action="mylist"
					@click="handleDetailsButtonClick('mylist')"
				>
					<DeleteIcon v-if="existsInMyList"/>
					<PlusIcon v-else/>
				</ItemButton>
			</div>
		</div>
	</div>

	<ItemSuggestion />
</template>
