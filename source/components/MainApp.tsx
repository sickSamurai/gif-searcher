import { useState } from 'react'
import { Title } from './AppTitle'
import { CategoryList } from './CategoryList'
import { CategoryFinder } from './CategoryFinder'

const MainApp = () => {
  const [categories, setCategories] = useState([] as string[])

  const addCategory = (newCategory: string) => {
    if (categories.includes(newCategory) || !newCategory) return
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

export default MainApp
