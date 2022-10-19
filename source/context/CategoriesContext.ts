import { createContext, useState } from 'react';

import { ContextObject } from '../types/ContextObject';

const initValue: ContextObject = {
  categories: [],
  addCategory: () => {}
};

export const categoriesContext = createContext(initValue);
