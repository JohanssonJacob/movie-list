import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { getPopularMovies, searchMovies } from '../services/tmdb'
import { MovieCard } from '../components/MovieCard'
import { SearchBar } from '../components/SearchBar'
import { Pagination } from '../components/Pagination'

export function HomePage() {
  
  const location = useLocation()

  let startingPage = 1

  if (location.state?.page) {
    startingPage = location.state.page
  }

  const [movies, setMovies] = useState([])
  const [query, setQuery] = useState('')
  const [page, setPage] = useState(startingPage)

  useEffect(() => {
    async function loadMovies() {
      let data

      if (query) {
        data = await searchMovies(query)
      } else {
        data = await getPopularMovies(page)
      }

      setMovies(data.results)
    }

    loadMovies()
  }, [query, page])

  function handleQueryChange(newQuery) {
    setQuery(newQuery)
    setPage(1)
  }

  return (
    <>
      <SearchBar value={query} onChange={handleQueryChange} />
      <ul className="movie-grid">
        {movies.map((movie) => {
          return <MovieCard key={movie.id} movie={movie} page={page} />
        })}
      </ul>
      {!query && <Pagination page={page} onPageChange={setPage} />}
    </>
  )
}
