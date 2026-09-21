import { useWatchlist } from '../hooks/useWatchlist'

export function WatchlistButton({ movie }) {
  const { watchlist, setWatchlist } = useWatchlist()
  const isInWatchlist = watchlist.some((item) => item.id === movie.id)

  function handleToggleWatchlist() {
    if (isInWatchlist) {
      setWatchlist(watchlist.filter((item) => item.id !== movie.id))
    } else {
      setWatchlist([
        ...watchlist,
        {
          id: movie.id,
          title: movie.title,
          poster_path: movie.poster_path,
          vote_average: movie.vote_average,
        },
      ])
    }
  }

  return (
    <button type="button" onClick={handleToggleWatchlist}>
      {isInWatchlist ? 'Tillagd i listan' : 'Lägg till i lista'}
    </button>
  )
}
