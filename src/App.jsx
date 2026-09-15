import { useEffect, useState } from 'react'
import { getPopularMovies } from './services/tmdb'

function App() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    async function loadMovies() {
      const data = await getPopularMovies()
      setMovies(data.results)
    }

    loadMovies()
  }, [])

  return (
    <ul>
      {movies.map((movie) => {
        return <li key={movie.id}>{movie.title}</li>
      })}
    </ul>
  )
}

export default App
