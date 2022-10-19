import { ImageList } from '@mui/material';
import React from 'react';

import Gif from '../types/Gif';
import GifItem from './GifItem';

type Props = {
  gifs: Gif[];
};

export const GifGrid = ({ gifs }: Props) => {
  return (
    <ImageList variant="masonry" cols={3} gap={8}>
      {gifs.map((gif, index) => (
        <GifItem key={index} title={gif.title} url={gif.image.url} />
      ))}
    </ImageList>
  );
};
