import { useState } from 'react'
import './App.css'
import { YoutubeForm } from './components/YoutubeForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
          <YoutubeForm/>
      </div>
    </>
  )
}

export default App
