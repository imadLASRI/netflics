<script setup>
import { defineProps, onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router'

import { useMovieStore } from '../stores/movieStore'

import ItemSuggestion from "./ItemSuggestion.vue";
import ItemButton from "./ItemButton.vue";

const route = useRoute()
const router = useRouter()
const movieStore = useMovieStore()

let movieDetails = ref({})

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
	}
})

function getMovieDetails(id) {
	return movieStore.movies.find(movie => movie.id === id)
}
</script>

<template>
	<div :class="`relative w-full h-[500px] bg-black`">
		<img :src="movieDetails.Images?.at(0)" class="object-cover object-top w-full h-[500px] block opacity-60"/>

		<div class="absolute top-0 left-0 py-16 pl-10 drop-shadow-xl select-none">
			<h1 class="text-9xl mb-6">{{ movieDetails.Title }}</h1>
			<h2 class="text-2xl block w-3/6">{{ movieDetails.Plot }}</h2>
			<div class="w-96 flex justify-evenly mt-10">
				<ItemButton icon="play" />
				<ItemButton icon="mylist" />
			</div>
		</div>
	</div>

	<ItemSuggestion />
</template>
