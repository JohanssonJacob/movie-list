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
  const previousPage = location.state?.page

  return (
    <div className="movie-detail-page">
      <Link to="/" state={{ page: previousPage }} className="movie-detail-back">
        <img src="/left-arrow.png" alt="" className="movie-detail-back-icon" />
        Tillbaka
      </Link>

      <div className="movie-detail">
        <div className="movie-detail-poster">
          <img src={posterUrl} alt={movie.title} />
        </div>

        <div className="movie-detail-info">
          <h1>{movie.title}</h1>

          <div className="movie-detail-tags">
            {movie.genres.map((genre) => (
              <span key={genre.id} className="tag">
                {genre.name}
              </span>
            ))}
            <span className="tag tag-year">{year}</span>
          </div>

          <div className="movie-detail-actions">
            <TrailerButton movieId={movie.id} />
            <WatchlistButton movie={movie} />
          </div>

          <p className="movie-detail-overview">{movie.overview}</p>
        </div>
      </div>
    </div>
  )
}
