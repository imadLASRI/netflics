<script lang="ts" setup>
  import { ItemButtonProps } from '../types/components.ts'

  defineProps<ItemButtonProps>()
</script>

<template>
  <div
    :class="`w-40 h-12 p-4 flex justify-evenly items-center rounded cursor-pointer ${
      action === 'play' ? 'bg-white hover:bg-gray-400' : 'bg-gray-400 hover:bg-white'
    }`"
  >
    <slot></slot>
    <span class="text-black text-lg font-bold">{{ action === 'play' ? 'Play' : 'My List' }}</span>
  </div>
</template>
