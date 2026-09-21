import { useState } from 'react'
import { useWatchlist } from '../hooks/useWatchlist'
import { MovieCard } from '../components/MovieCard'
import { Pagination } from '../components/Pagination'

const MOVIES_PER_PAGE = 20

export function WatchlistPage() {
  const { watchlist } = useWatchlist()
  const [page, setPage] = useState(1)

  const totalPages = Math.ceil(watchlist.length / MOVIES_PER_PAGE)

  const startIndex = (page - 1) * MOVIES_PER_PAGE
  const endIndex = startIndex + MOVIES_PER_PAGE
  const moviesToShow = watchlist.slice(startIndex, endIndex)

  return (
    <>
      <ul className="movie-grid">
        {moviesToShow.map((movie) => {
          return <MovieCard key={movie.id} movie={movie} />
        })}
      </ul>
      {totalPages > 1 && <Pagination page={page} onPageChange={setPage} totalPages={totalPages} />}
    </>
  )
}
