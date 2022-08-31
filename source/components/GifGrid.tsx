import { Box, Divider, ImageList, Typography } from '@mui/material'
import useFetchGifs from '../hooks/useFetchGifs'
import GifItem from './GifItem'

type Props = {
  category: string
}

export default ({ category }: Props) => {
  const { gifs, isLoading } = useFetchGifs(category)

  let gridContent: JSX.Element

  if (isLoading)
    gridContent = (
      <Typography variant='h6' align='center'>
        Cargando...
      </Typography>
    )
  else if (gifs.length === 0) {
    gridContent = (
      <Typography variant='body1'>
        No se encontró ningun GIF relacionado con el termino de busqueda ingresado
      </Typography>
    )
  } else
    gridContent = (
      <ImageList variant='masonry' cols={3} gap={8}>
        {gifs.map((gif, index) => (
          <GifItem key={index} title={gif.title} url={gif.image.url} />
        ))}
      </ImageList>
    )

  return (
    <Box sx={{ my: 3 }}>
      <Typography variant='h5' sx={{ mb: 2 }}>{category}</Typography>
      {gridContent!}
      <Divider sx={{ mt: 2 }} />
    </Box>
  )
}
