import React, { useState } from 'react'
import Routes from './routes'
import { Nav, Offline } from './components'
import { BrowserRouter as Router } from 'react-router-dom'


const App = () => {
  const [connection, setConnection] = useState(true)

  fetch('/devices')
    .then(response => {
      if (response.ok) setConnection(true)
      else setConnection(false)
    })

  if (!connection) return <Offline />

  return (
    <div className="body">
      <Router>
        <Routes />
        <Nav />
      </Router>
    </div>
  )
}

export default App

