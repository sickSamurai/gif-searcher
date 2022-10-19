import { useEffect, useState } from 'react';

import { categoriesContext } from '../context/CategoriesContext';
import { useCategories } from '../hooks/useCategories';
import { ResultList } from './ResultList';
import { Searcher } from './Searcher';
import { Title } from './Title';

export const MainPage = () => {
  const { categories, addCategory } = useCategories();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [categories]);

  return (
    <categoriesContext.Provider value={{ categories, addCategory }}>
      <Title />
      <Searcher />
      <ResultList />
    </categoriesContext.Provider>
  );
};
