import { List } from '@mui/material'
import GifGrid from './GifGrid'

type Props = {
  categories: string[]
}

export const CategoryList = ({ categories }: Props) => {
  return (
    <List sx={{ mt: 2 }}>
      {categories.map(category => (
        <GifGrid key={category} category={category} />
      ))}
    </List>
  )
}
