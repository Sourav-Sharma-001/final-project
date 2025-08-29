import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import Dashboard from './Components/Dashboard/Dashboard'
import './main.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Dashboard />
    </Router>
  </StrictMode>,
)
