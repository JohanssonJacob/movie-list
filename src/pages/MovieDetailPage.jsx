import { Link, useLocation, useParams } from 'react-router-dom'
import { getMovieDetails } from '../services/tmdb'
import { TrailerButton } from '../components/TrailerButton'
import { WatchlistButton } from '../components/WatchlistButton'
import { useFetch } from '../hooks/useFetch'

export function MovieDetailPage() {
  const { id } = useParams()
  const location = useLocation()

  function fetchMovie() {
    return getMovieDetails(id)
  }

  const { data: movie, loading, error } = useFetch(fetchMovie, [id])

  if (loading) {
    return <p className="status-message">Laddar film...</p>
  }

  if (error) {
    return <p className="status-message form-error">{error}</p>
  }

  const posterUrl = `https://image.tmdb.org/t/p/w300${movie.poster_path}`
  const year = movie.release_date.slice(0, 4)
  const genreNames = movie.genres.map((genre) => genre.name)
  const previousPage = location.state?.page

  return (
    <div>
      <Link to="/" state={{ page: previousPage }}>
        Tillbaka
      </Link>
      <img src={posterUrl} alt={movie.title} />
      <h1>{movie.title}</h1>
      <p>{year}</p>
      <p>{genreNames.join(', ')}</p>
      <p>{movie.overview}</p>
      <TrailerButton movieId={movie.id} />
      <WatchlistButton movie={movie} />
    </div>
  )
}
