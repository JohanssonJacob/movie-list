import { getMovieVideos } from '../services/tmdb'

export function TrailerButton({ movieId }) {
  async function handleShowTrailer() {
    const data = await getMovieVideos(movieId)
    const trailer = data.results.find(
      (video) => video.type === 'Trailer' && video.official && video.site === 'YouTube',
    )

    if (trailer) {
      window.open(`https://www.youtube.com/watch?v=${trailer.key}`, '_blank')
    }
  }

  return (
    <button type="button" onClick={handleShowTrailer}>
      Visa trailer
    </button>
  )
}
