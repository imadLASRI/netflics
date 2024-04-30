<script lang="ts" setup>
  import { RouterLink } from 'vue-router'
  import SearchBar from './SearchBar.vue'
</script>

<template>
  <div class="bg-gradient-to-b from-black via-black to-transparent text-lg">
    <nav class="flex justify-between items-center lg:mx-10 text-white capitalize">
      <div class="flex items-center lg:w-3/6 select-none">
        <RouterLink to="/" class="lg:mr-10">
          <img alt="Netflix logo" class="h-16 lg:w-60 lg:h-20" src="@/assets/logo.svg" />
        </RouterLink>
        <div class="flex justify-evenly lg:w-2/6">
          <RouterLink to="/" class="hidden lg:block">home</RouterLink>
          <RouterLink to="/mylist" class="ml-4 lg:ml-0">my list</RouterLink>
        </div>
      </div>

      <SearchBar />
    </nav>
  </div>
</template>
