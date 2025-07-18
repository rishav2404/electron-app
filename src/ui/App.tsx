import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count} kuttu
        </button>
      </div>
      <p className="read-the-docs">
        Electron App
      </p>
    </>
  )
}

export default App
