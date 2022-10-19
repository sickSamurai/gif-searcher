import { useEffect, useState } from 'react';

import { getGifs } from '../APIs/giphy';
import Gif from '../types/Gif';

export const useFetchGifs = (searchTerm: string) => {
  const [gifs, setGifs] = useState([] as Gif[]);

  useEffect(() => {
    getGifs(searchTerm).then(setGifs);
  }, [searchTerm]);

  return { gifs };
};
