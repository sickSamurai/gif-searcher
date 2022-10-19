import SearchIcon from '@mui/icons-material/Search';
import { AppBar, IconButton, InputAdornment, TextField, Toolbar } from '@mui/material';
import { FormEvent, useContext } from 'react';

import { categoriesContext } from '../context/CategoriesContext';
import useForm from '../hooks/useForm';

export const Searcher = () => {
  const { addCategory } = useContext(categoriesContext);
  const { inputValue, cleanInput, onInputChange } = useForm();

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const searchedCategory = inputValue.trim();
    if (searchedCategory) addCategory(searchedCategory);
    cleanInput();
  };

  return (
    <AppBar color="inherit" position="sticky">
      <Toolbar component="form" onSubmit={onSubmit} disableGutters variant="dense">
        <TextField
          type="text"
          value={inputValue}
          onChange={onInputChange}
          required={true}
          variant="filled"
          label="Buscar GIFs"
          autoComplete="off"
          sx={{ width: "100%" }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton type="submit">
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            )
          }}
        />
      </Toolbar>
    </AppBar>
  );
};
