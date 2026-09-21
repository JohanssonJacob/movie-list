import { useEffect, useState } from 'react'
import { getPopularMovies, searchMovies } from '../services/tmdb'
import { useFetch } from './useFetch'

export function useMovies(query, page) {
  const [delayedQuery, setDelayedQuery] = useState('')

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

  let movies = []

  if (data) {
    movies = data.results
  }

  return { movies, loading, error }
}
