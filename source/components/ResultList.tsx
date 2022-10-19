import { List } from '@mui/material';
import { useContext } from 'react';

import { categoriesContext } from '../context/CategoriesContext';
import { Results } from './Results';

export const ResultList = () => {
  const { categories } = useContext(categoriesContext);

  return (
    <List sx={{ mt: 2 }}>
      {categories.map((category, index) => (
        <Results key={index} title={category} />
      ))}
    </List>
  );
};
