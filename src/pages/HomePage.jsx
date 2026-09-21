import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { getPopularMovies, searchMovies } from '../services/tmdb'
import { MovieCard } from '../components/MovieCard'
import { SearchBar } from '../components/SearchBar'
import { Pagination } from '../components/Pagination'
import { useFetch } from '../hooks/useFetch'

export function HomePage() {
  const location = useLocation()

  let startingPage = 1

  if (location.state?.page) {
    startingPage = location.state.page
  }

  const [query, setQuery] = useState('')
  const [delayedQuery, setDelayedQuery] = useState('')
  const [page, setPage] = useState(startingPage)

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDelayedQuery(query)
    }, 400)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [query])

  function fetchMovies() {
    if (delayedQuery) {
      return searchMovies(delayedQuery)
    }

    return getPopularMovies(page)
  }

  const { data, loading, error } = useFetch(fetchMovies, [delayedQuery, page])

  function handleQueryChange(newQuery) {
    setQuery(newQuery)
    setPage(1)
  }

  let movies = []

  if (data) {
    movies = data.results
  }

  return (
    <>
      <SearchBar value={query} onChange={handleQueryChange} />

      {loading && <p className="status-message">Laddar filmer...</p>}

      {error && <p className="status-message form-error">{error}</p>}

      {!loading && !error && movies.length === 0 && (
        <p className="status-message">Inga resultat hittades.</p>
      )}

      {!loading && !error && movies.length > 0 && (
        <ul className="movie-grid">
          {movies.map((movie) => {
            return <MovieCard key={movie.id} movie={movie} page={page} />
          })}
        </ul>
      )}

      {!query && !loading && !error && <Pagination page={page} onPageChange={setPage} />}
    </>
  )
}
