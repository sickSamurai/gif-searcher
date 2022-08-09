import { useEffect, useState } from 'react'
import { getGifs } from '../APIs/giphy'
import Gif from '../types/Gif'

export default (category: string) => {
  const [gifs, setGifs] = useState<Gif[]>([])
  const [isLoading, setChargeState] = useState(true)

  useEffect(() => {
    const fetchGifs = async () => setGifs(await getGifs(category))
    fetchGifs().then(() => setChargeState(false))
  }, [])
  return {
    gifs,
    isLoading
  }
}
