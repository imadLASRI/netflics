export default (() => {
  let instance

  const createInstance = () => {
    let myList = JSON.parse(localStorage.getItem('myList')) || []

    const addToMyList = (movie) => {
      myList.push(movie)
      updateLocalStorage()
    }

    const removeFromMyList = (movieId) => {
      myList = myList.filter((movie) => movie.id !== movieId)
      updateLocalStorage()
    }

    const existsInMyList = (id) => {
      return !!myList.find((movie) => movie.id === id)
    }

    const getMyList = () => myList

    const updateLocalStorage = () => {
      localStorage.setItem('myList', JSON.stringify(myList))
    }

    return {
      addToMyList,
      removeFromMyList,
      getMyList,
      existsInMyList
    }
  }

  return {
    getInstance: () => {
      if (!instance) {
        instance = createInstance()
      }
      return instance
    }
  }
})()
