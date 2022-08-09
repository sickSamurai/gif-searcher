import { useState } from 'react'
import { Title } from './AppTitle'
import { CategoryList } from './CategoryList'
import { CategoryFinder } from './CategoryFinder'
import React from 'react'

export const Root = () => {
  const [categories, setCategories] = useState<string[]>([])

  const addCategory = (newCategory: string) => {
    if (categories.includes(newCategory)) return
    else setCategories([newCategory, ...categories])
  }

  return (
    <>
      <Title />
      <CategoryFinder onNewSearch={addCategory} />
      <CategoryList categories={categories} />
    </>
  )
}
