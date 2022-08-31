import { ImageListItem, ImageListItemBar } from '@mui/material'

type Props = {
  title: string
  url: string
}

export default ({ title, url }: Props) => {
  return (
    <ImageListItem>
      <img src={url} alt={title} loading='lazy' />
      <ImageListItemBar title={title} />
    </ImageListItem>
  )
}
