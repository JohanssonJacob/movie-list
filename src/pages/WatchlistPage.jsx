import { useState } from 'react'
import { useWatchlist } from '../hooks/useWatchlist'
import { MovieCard } from '../components/MovieCard'
import { Pagination } from '../components/Pagination'
import { SearchBar } from '../components/SearchBar'

const MOVIES_PER_PAGE = 20

function byHypeLevelDescending(a, b) {
  return Number(b.hypeLevel) - Number(a.hypeLevel)
}

export function WatchlistPage() {
  const { watchlist } = useWatchlist()
  const [query, setQuery] = useState('')
  const [sortBy, setSortBy] = useState('recent')
  const [page, setPage] = useState(1)

  function handleQueryChange(newQuery) {
    setQuery(newQuery)
    setPage(1)
  }

  function handleSortByChange(newSortBy) {
    setSortBy(newSortBy)
    setPage(1)
  }

  if (watchlist.length === 0) {
    return <p className="status-message">Din lista är tom.</p>
  }

  const filteredWatchlist = watchlist.filter((movie) =>
    movie.title.toLowerCase().includes(query.toLowerCase()),
  )

  let sortedWatchlist = filteredWatchlist
  if (sortBy === 'hype') {
    sortedWatchlist = [...filteredWatchlist].sort(byHypeLevelDescending)
  }

  const totalPages = Math.ceil(sortedWatchlist.length / MOVIES_PER_PAGE)

  const startIndex = (page - 1) * MOVIES_PER_PAGE
  const endIndex = startIndex + MOVIES_PER_PAGE
  const moviesToShow = sortedWatchlist.slice(startIndex, endIndex)

  return (
    <>
      <div className="watchlist-controls">
        <SearchBar value={query} onChange={handleQueryChange} />

        <div className="sort-toggle">
          <button
            type="button"
            className={sortBy === 'recent' ? 'sort-toggle-option active' : 'sort-toggle-option'}
            onClick={() => handleSortByChange('recent')}
          >
            Senast tillagd
          </button>
          <button
            type="button"
            className={sortBy === 'hype' ? 'sort-toggle-option active' : 'sort-toggle-option'}
            onClick={() => handleSortByChange('hype')}
          >
            Hypenivå
          </button>
        </div>
      </div>

      {sortedWatchlist.length === 0 && <p className="status-message">Inga resultat hittades.</p>}

      {sortedWatchlist.length > 0 && (
        <ul className="movie-grid">
          {moviesToShow.map((movie) => {
            return (
              <MovieCard
                key={movie.id}
                movie={movie}
                hypeLevel={movie.hypeLevel}
                note={movie.note}
                backTo="/watchlist"
              />
            )
          })}
        </ul>
      )}

      {totalPages > 1 && <Pagination page={page} onPageChange={setPage} totalPages={totalPages} />}
    </>
  )
}
