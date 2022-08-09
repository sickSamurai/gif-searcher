import React from 'react'
import GifGrid from './GifGrid'

type Props = {
  categories: string[]
}

export const CategoryList = ({ categories }: Props) => {
  return (
    <ul>
      {categories.map(category => (
        <GifGrid key={category} category={category} />
      ))}
    </ul>
  )
}
