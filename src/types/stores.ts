/* eslint-disable no-unused-vars */
import MovieListServices from '../services/MovieListServices'
import { Movie } from '../types/components.ts'

export type MovieStoreState = {
  movies: Movie[]
  myMovieListServices: MovieListServices
}

export type MyListInstance = {
  addToMyList: (movie: Movie) => void
  removeFromMyList: (movieId: string) => void
  getMyList: () => Movie[]
  isInMyList: (id: string) => boolean
}
