import React, {useState} from 'react'

interface TestProps {

}

export const Test :React.FC<TestProps> = () => {
  const [value,setValue] = useState(0)
  const handleChange = () => {
    setValue(value + 1)
  }
  const prevChange = () => {
    setValue(prev => prev - 1)
  }
  return (
  <>
    <form action="#">
      <p>{value}</p>
      <button onClick={handleChange}>button</button>
      <button onClick={prevChange}>button</button>
    </form>
  </>
  )
}
