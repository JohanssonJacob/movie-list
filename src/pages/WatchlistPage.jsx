import { useWatchlist } from '../hooks/useWatchlist'
import { MovieCard } from '../components/MovieCard'

export function WatchlistPage() {
  const { watchlist } = useWatchlist()

  return (
    <ul className="movie-grid">
      {watchlist.map((movie) => {
        return <MovieCard key={movie.id} movie={movie} />
      })}
    </ul>
  )
}
