export type FilterItemsProps = {
  categories: Record<string, string>
}

export type ItemProps = {
  movie: {
    Poster: string
    id: string
  }
}

export type ItemButtonProps = {
  action: 'play' | 'mylist'
}

export type ItemsListProps = {
  movies: Record<string, string>[]
}

export type Movie = Record<string, string>

export type ItemSuggestionProps = {
  suggestion: Record<string, Movie>
  amount: number
}
