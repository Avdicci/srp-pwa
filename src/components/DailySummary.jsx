import React from 'react'

const DailySummary = ({ totalPoints }) => {
  const handleSave = () => {
    const today = new Date().toISOString().split('T')[0] // e.g. "2025-05-07"

    const existing = JSON.parse(localStorage.getItem('dailyPoints') || '{}')
    existing[today] = totalPoints

    localStorage.setItem('dailyPoints', JSON.stringify(existing))

    alert('Points saved for today!')
  }

  return (
    <div className="bg-white p-4 rounded-xl shadow-md mt-4 w-full max-w-md mx-auto">
      <p className="text-lg font-semibold mb-2">Total Points Today: {totalPoints}</p>
      <button
        onClick={handleSave}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Save Day
      </button>
    </div>
  )
}

export default DailySummary
