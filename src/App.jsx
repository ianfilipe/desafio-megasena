import { useState } from 'react'

function App() {
  const [size, setSize] = useState(6)
  const [numbers, setNumbers] = useState(Array(size).fill(0))

  const generatesNonRepeatedNumber = (min, max, arr) => {
    const randomNumber = parseInt(Math.random() * (max + 1 - min)) + min
    return arr.includes(randomNumber)
      ? generatesNonRepeatedNumber(min, max, arr)
      : randomNumber
  }

  const generatesNumbers = (size) => {
    const numbers = Array(size)
      .fill(0)
      .reduce((numbers) => {
        const newNumber = generatesNonRepeatedNumber(1, 60, numbers)
        return [...numbers, newNumber]
      }, [])
      .sort((a, b) => a - b)
    return numbers
  }

  return (
    <div>
      <input
        min={1}
        max={60}
        type="number"
        value={size}
        onChange={(event) => setSize(+event.target.value)}
      />
      <button onClick={() => setNumbers(generatesNumbers(size))}>Gerar</button>
      {numbers.map((number) => (
        <li>{number}</li>
      ))}
    </div>
  )
}

export default App
