import axios, { AxiosResponse } from 'axios';

import Gif from '../types/Gif';

const baseURL = "https://api.giphy.com/v1/gifs/search?";
const key = "NzYey5Ev76VWxb9ojOwPWtOYHTvFVBYG";
const limit = 10;

const requestGiphy = async (searchTerm: string) => {
  const url = `${baseURL}q=${searchTerm}&api_key=${key}&limit=${limit}`;
  const response = await axios.get(url);
  return response;
};

const formatResponse = (response: AxiosResponse) => {
  const giphyResponse = response.data.data as any[];
  return giphyResponse.map<Gif>((gif) => ({
    id: gif.id,
    title: gif.title,
    url: gif.url,
    image: gif.images.downsized
  }));
};

export const getGifs = async (searchTerm: string) => {
  return formatResponse(await requestGiphy(searchTerm));
};
