<script setup></script>

<template>
  <div class="item-card col-span-1">
    <img
      src="https://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg"
      alt="Poster"
      class="poster"
    />
  </div>
</template>

<style lang="scss" scoped>
.item-card {
  display: flex;
  background-color: #111;
  color: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
}

.poster {
  max-width: 100%;
  height: auto;
  border-radius: 8px 0 0 8px;
}
</style>
