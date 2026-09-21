import { useLocalStorage } from '../hooks/useLocalStorage'
import { WatchlistContext } from './watchlist-context'

export function WatchlistProvider({ children }) {
  const [watchlist, setWatchlist] = useLocalStorage('watchlist', [])

  return (
    <WatchlistContext.Provider value={{ watchlist, setWatchlist }}>
      {children}
    </WatchlistContext.Provider>
  )
}
