import { Box, Typography } from '@mui/material';
import { useEffect } from 'react';

import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGrid } from './GifGrid';
import { NoItem } from './NoItem';

type Props = {
  title: string;
};

export const Results = ({ title }: Props) => {
  const { gifs } = useFetchGifs(title);

  let content: JSX.Element;

  if (gifs.length === 0) content = <NoItem />;
  else content = <GifGrid gifs={gifs} />;

  return (
    <Box sx={{ my: 4 }}>
      <Typography variant="h5" sx={{ mb: 2 }}>
        {title}
      </Typography>
      {content}
    </Box>
  );
};
