import { FormEvent } from 'react'
import { Box, Divider, IconButton, Stack, TextField } from '@mui/material'
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
    <Stack direction='row' component='form' onSubmit={onSubmit}>
      <TextField
        type='text'
        value={inputValue}
        onChange={onInputChange}
        required={true}
        variant='outlined'
        label='Buscar GIFs'
        placeholder='Dragon Ball'
        autoComplete='off'
        sx={{ minWidth: '95%' }}
      />
      <IconButton type='submit' sx={{ m: 'auto' }}>
        <SearchIcon />
      </IconButton>
    </Stack>
  )
}
