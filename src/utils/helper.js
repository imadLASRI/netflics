export const randomSuggestion = (moviesArr, suggestionMovie, options = { pick: 3 }) => {
  let genres = []
  const suggestionGenreArr = genresToArray(suggestionMovie.Genre)

  let suggested = moviesArr.filter((movie) => {
    genres = genresToArray(movie.Genre)
    return (
      genres.some((genre) => suggestionGenreArr.includes(genre)) &&
      movie.Title !== suggestionMovie.Title
    )
  })

  return randomfromArray(suggested, { pick: options.pick })
}

const genresToArray = (genres) => {
  return genres.split(', ')
}

const randomfromArray = (arr, options) => {
  if (arr.length <= options.pick) {
    return arr
  }

  const shuffledArr = arr.sort(() => Math.random() - 0.5)
  return shuffledArr.slice(0, options.pick)
}
