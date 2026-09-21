import { useEffect, useState } from 'react'

export function useFetch(fetchFunction, dependencies) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    async function loadData() {
      setLoading(true)
      setError('')

      try {
        const result = await fetchFunction()
        setData(result)
      } catch {
        setError('Något gick fel. Försök igen senare.')
      }

      setLoading(false)
    }

    loadData()
    // utan denna kommentar ger lint varning om att depenencies saknas
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies)

  return { data, loading, error }
}
