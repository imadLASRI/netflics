import { Movie } from '../types/components.ts'
import { MyListInstance } from '../types/stores.ts'

export default (() => {
  let instance: MyListInstance

  const createInstance = (): MyListInstance => {
    let myList: Movie[] = JSON.parse(localStorage.getItem('myList')) || []

    const addToMyList = (movie: Movie): void => {
      myList.push(movie)
      updateLocalStorage()
    }

    const removeFromMyList = (movieId: string): void => {
      myList = myList.filter((movie) => movie.id !== movieId)
      updateLocalStorage()
    }

    const isInMyList = (id: string): boolean => {
      return !!myList.find((movie) => movie.id === id)
    }

    const getMyList = (): Movie[] => myList

    const updateLocalStorage = (): void => {
      localStorage.setItem('myList', JSON.stringify(myList))
    }

    return {
      addToMyList,
      removeFromMyList,
      getMyList,
      isInMyList
    }
  }

  return {
    getInstance: (): MyListInstance => {
      if (!instance) {
        instance = createInstance()
      }
      return instance
    }
  }
})()
