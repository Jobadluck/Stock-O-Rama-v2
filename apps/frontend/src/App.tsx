import { useEffect, useState } from 'react'
import './App.css'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)
  const [backendMessage, setBackendMessage] = useState<string>('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Test connection to backend
    const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3000'
    fetch(apiUrl)
      .then(response => response.text())
      .then(data => {
        setBackendMessage(data)
        setLoading(false)
      })
      .catch(error => {
        console.error('Error connecting to backend:', error)
        setBackendMessage('Failed to connect to backend')
        setLoading(false)
      })
  }, [])

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Stock-O-Rama v2</h1>
      <h2>Frontend: Vite + React</h2>

      <div className="card">
        <h3>Backend Connection</h3>
        {loading ? (
          <p>Connecting to backend...</p>
        ) : (
          <p>Backend says: <strong>{backendMessage}</strong></p>
        )}
      </div>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>

      <p className="read-the-docs">
        This is a monorepo with React frontend and NestJS backend
      </p>
    </>
  )
}

export default App
