import { useEffect, useState } from 'react'
import { getPopularMovies, searchMovies } from '../services/tmdb'
import { MovieCard } from '../components/MovieCard'
import { SearchBar } from '../components/SearchBar'

export function HomePage() {
  const [movies, setMovies] = useState([])
  const [query, setQuery] = useState('')

  useEffect(() => {
    async function loadMovies() {
      let data

      if (query) {
        data = await searchMovies(query)
      } else {
        data = await getPopularMovies()
      }

      setMovies(data.results)
    }

    loadMovies()
  }, [query])

  return (
    <>
      <SearchBar value={query} onChange={setQuery} />
      <ul className="movie-grid">
        {movies.map((movie) => {
          return <MovieCard key={movie.id} movie={movie} />
        })}
      </ul>
    </>
  )
}
