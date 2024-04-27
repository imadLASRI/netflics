import { Movie } from '../types/components.ts'

export const randomSuggestion = (
  moviesArr: Movie[],
  suggestionMovie: Movie,
  options = { pick: 3 }
): Movie[] => {
  let genres: string[] = []
  const suggestionGenreArr = genresToArray(suggestionMovie.Genre)

  const suggested = moviesArr.filter((movie) => {
    genres = genresToArray(movie.Genre)
    return (
      genres.some((genre) => suggestionGenreArr.includes(genre)) &&
      movie.Title !== suggestionMovie.Title
    )
  })

  return randomFromArray(suggested, { pick: options.pick })
}

const genresToArray = (genres: string): string[] => {
  return genres.split(', ')
}

const randomFromArray = (arr: Movie[], options: { pick: number }): Record<string, number> => {
  if (arr.length <= options.pick) {
    return arr
  }

  const shuffledArr = arr.sort(() => Math.random() - 0.5)
  return shuffledArr.slice(0, options.pick)
}
