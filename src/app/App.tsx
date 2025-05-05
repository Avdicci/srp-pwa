import React from 'react'

import { Routes, Route, Link } from 'react-router-dom'
import Home from '../pages/Home'
import History from '../pages/History'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <nav className="flex gap-4 p-4 bg-gray-800">
        <Link to="/">Home</Link>
        <Link to="/history">History</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </div>
  )
}

export default App
