import { useEffect, useState } from 'react'
import { getPopularMovies } from '../services/tmdb'
import { MovieCard } from '../components/MovieCard'

export function HomePage() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    async function loadMovies() {
      const data = await getPopularMovies()
      setMovies(data.results)
    }

    loadMovies()
  }, [])

  return (
    <ul className="movie-grid">
      {movies.map((movie) => {
        return <MovieCard key={movie.id} movie={movie} />
      })}
    </ul>
  )
}
