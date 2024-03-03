import { defineStore } from 'pinia'
import MovieListServices from '../services/MovieListServices'

export const useMovieStore = defineStore('movie', {
  state: () => ({
    movies: {},
    myMovieListServices: MovieListServices.getInstance()
  }),
  getters: {
    moviesCategories(state) {
      const allMoviesGenres = state.movies.map((movie) => movie.Genre).join(', ')
      const distinctMoviesGenres = new Set(allMoviesGenres.split(', '))

      return distinctMoviesGenres
    }
  },
  actions: {
    async fetchMovies() {
      try {
        const response = await fetch('http://localhost:3000/movies')
        const data = await response.json()
        this.movies = data
      } catch (err) {
        console.error(err)
      }
    }
  }
})
