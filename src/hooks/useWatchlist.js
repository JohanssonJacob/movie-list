import { useContext } from 'react'
import { WatchlistContext } from '../context/watchlist-context'

export function useWatchlist() {
  return useContext(WatchlistContext)
}
