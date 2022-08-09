import React, { ChangeEvent, FormEvent } from 'react'
import { useState } from 'react'

type Props = {
  onNewSearch: (searchTerm: string) => void
}

export const CategoryFinder = ({ onNewSearch }: Props) => {
  const [inputValue, setInputValue] = useState('')

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const trimedInput = inputValue.trim()
    if (trimedInput) {
      onNewSearch(trimedInput)
      setInputValue('')
    }
  }

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => setInputValue(event.target.value)

  return (
    <>
      <form onSubmit={onSubmit}>
        <input type='text' placeholder='Buscar GIF' value={inputValue} onChange={onInputChange} />
      </form>
    </>
  )
}
