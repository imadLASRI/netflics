<script setup>
import { RouterLink } from 'vue-router'
import SearchBar from './SearchBar.vue'
</script>

<template>
  <div class="bg-black text-lg">
    <nav class="flex justify-between items-center mx-10 text-white capitalize">
      <div class="flex items-center w-3/6 select-none">
        <RouterLink to="/" class="mr-10">
          <img alt="Netflix logo" class="w-60 h-20" src="@/assets/logo.svg" />
        </RouterLink>
        <div class="flex justify-evenly w-2/6">
          <RouterLink to="/">home</RouterLink>
          <RouterLink to="/mylist">my list</RouterLink>
        </div>
      </div>

      <SearchBar />
    </nav>
  </div>
</template>

<style scoped></style>
