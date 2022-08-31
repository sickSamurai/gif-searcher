import React, { ChangeEvent } from 'react'

const useForm = () => {
  const [inputValue, setInputValue] = React.useState('')

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => setInputValue(event.target.value)

  const cleanInput = () => setInputValue('')

  return { inputValue, cleanInput, onInputChange }
}
export default useForm
