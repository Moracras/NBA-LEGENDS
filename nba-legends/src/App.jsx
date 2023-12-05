import { useState } from 'react'
import CardContainer from './components/CardContainer'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <CardContainer/>
    </>
  )
}

export default App
