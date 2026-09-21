import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { MovieCard } from '../components/MovieCard'
import { SearchBar } from '../components/SearchBar'
import { Pagination } from '../components/Pagination'
import { useMovies } from '../hooks/useMovies'

export function HomePage() {
  const location = useLocation()

  let startingPage = 1

  if (location.state?.page) {
    startingPage = location.state.page
  }

  const [query, setQuery] = useState('')
  const [page, setPage] = useState(startingPage)

  const { movies, loading, error } = useMovies(query, page)

  function handleQueryChange(newQuery) {
    setQuery(newQuery)
    setPage(1)
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
