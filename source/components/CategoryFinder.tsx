import { FormEvent } from 'react'
import { AppBar, IconButton, InputAdornment, TextField, Toolbar } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import useForm from '../hooks/useForm'

type Props = {
  onNewSearch: (searchTerm: string) => void
}

export const CategoryFinder = ({ onNewSearch }: Props) => {
  const { inputValue, cleanInput, onInputChange } = useForm()

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    onNewSearch(inputValue.trim())
    cleanInput()
  }

  return (
    <AppBar color='inherit' position='sticky'>
      <Toolbar component='form' onSubmit={onSubmit}>
        <TextField
          type='text'
          value={inputValue}
          onChange={onInputChange}
          required={true}
          variant='filled'
          label='Buscar GIFs'
          autoComplete='off'
          sx={{ width: '100%' }}
          InputProps={{
            endAdornment: (
              <InputAdornment position='end'>
                <IconButton type='submit'>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            )
          }}
        />
      </Toolbar>
    </AppBar>
  )
}
