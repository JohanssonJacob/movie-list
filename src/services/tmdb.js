const BASE_URL = 'https://api.themoviedb.org/3'
const TOKEN = import.meta.env.VITE_TMDB_TOKEN

export async function getPopularMovies(page) {
  const response = await fetch(`${BASE_URL}/movie/popular?page=${page}`, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      accept: 'application/json',
    },
  })

  if (!response.ok) {
    throw new Error(`TMDb request failed: ${response.status}`)
  }

  return response.json()
}

export async function searchMovies(query) {
  const response = await fetch(`${BASE_URL}/search/movie?query=${encodeURIComponent(query)}`, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      accept: 'application/json',
    },
  })

  if (!response.ok) {
    throw new Error(`TMDb request failed: ${response.status}`)
  }

  return response.json()
}

export async function getMovieVideos(id) {
  const response = await fetch(`${BASE_URL}/movie/${id}/videos`, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      accept: 'application/json',
    },
  })

  if (!response.ok) {
    throw new Error(`TMDb request failed: ${response.status}`)
  }

  return response.json()
}

export async function getMovieDetails(id) {
  const response = await fetch(`${BASE_URL}/movie/${id}`, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      accept: 'application/json',
    },
  })

  if (!response.ok) {
    throw new Error(`TMDb request failed: ${response.status}`)
  }

  return response.json()
}
