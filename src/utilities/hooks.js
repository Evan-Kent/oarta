import { useState } from 'react';

function useFormInput(start) {
  const [value, setValue] = useState(start)

  function handleChange(e) {
    setValue(e.target.value)
  }
  return [
    value,
    handleChange
  ]
}


export {
  useFormInput
}