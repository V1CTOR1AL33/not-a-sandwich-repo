import { useState } from 'react'
import './style/App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Is it a Sandwich?</h1>
    </div>
  )
}

export default App
