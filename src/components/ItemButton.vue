<script setup>
import PlayIcon from '../assets/icons/PlayIcon.vue'
import PlusIcon from '../assets/icons/PlusIcon.vue'

defineProps({
	icon: {
		type: String,
		required: true
	}
})

function handleDetailsButtonClick() {

}
</script>

<template>
	<div
		:class="`w-40 h-12 p-4 flex justify-evenly items-center rounded cursor-pointer ${icon === 'play' ? 'bg-white hover:bg-gray-400' : 'bg-gray-400 hover:bg-white'}`"
		@click="handleDetailsButtonClick"
	>
		<PlayIcon v-if="icon === 'play'"/>
		<PlusIcon v-else/>
		<span class="text-black text-lg font-bold">{{ icon === 'play' ? 'Play' : 'My List' }}</span>
	</div>
</template>
