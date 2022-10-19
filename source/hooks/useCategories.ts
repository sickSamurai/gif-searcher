import { useState } from 'react';

export const useCategories = () => {
  const [categories, setCategories] = useState([] as string[]);

  const addCategory = (newCategory: string) => {
    if (!categories.includes(newCategory))
      setCategories([newCategory, ...categories]);
  };

  return { categories, addCategory };
};
