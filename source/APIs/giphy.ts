import axios, { AxiosResponse } from 'axios'
import Gif from '../types/Gif'

const baseURL = 'https://api.giphy.com/v1/gifs'
const searchRoute = '/search?'
const key = 'NzYey5Ev76VWxb9ojOwPWtOYHTvFVBYG'
const limit = 10

const requestGiphy = async (searchTerm: string) => {
  const url = `${baseURL}${searchRoute}q=${searchTerm}&api_key=${key}&limit=${limit}`
  const giphyResponse = await axios.get(url)
  return giphyResponse
}

const formatData = (response: AxiosResponse<any, any>) => {
  const responseGifs = response.data.data as any[]
  const formatedGifs = responseGifs.map(gif => {
    return {
      id: gif.id,
      title: gif.title,
      url: gif.url,
      image: gif.images.downsized
    } as Gif
  })
  return formatedGifs
}

export const getGifs = async (searchTerm: string) => {
  return formatData(await requestGiphy(searchTerm))
}
