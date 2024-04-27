import { defineStore } from 'pinia'
import MovieListServices from '../services/MovieListServices'
import { MovieStoreState } from '../types/stores.ts'

export const useMovieStore = defineStore('movie', {
  state: (): MovieStoreState => ({
    movies: [],
    myMovieListServices: MovieListServices.getInstance()
  }),
  getters: {
    moviesCategories(state): Set<string> {
      const allMoviesGenres = state.movies.map((movie) => movie.Genre).join(', ')
      const distinctMoviesGenres = new Set(allMoviesGenres.split(', '))

      return distinctMoviesGenres
    }
  },
  actions: {
    async fetchMovies(): Promise<void> {
      try {
        const response = await fetch(`${import.meta.env.VITE_LOCAL_BASE_URL}/movies`)
        const data = await response.json()
        this.movies = data
      } catch (err) {
        console.error(err)
      }
    }
  }
})
