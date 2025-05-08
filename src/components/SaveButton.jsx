'use client'

export default function SaveButton({ dailyPoints, label = 'Save Today' }) {
    const handleSave = () => {
        const today = new Date().toISOString().split('T')[0]
        const previous = JSON.parse(localStorage.getItem('savedPoints') || '{}')

        localStorage.setItem(
            'savedPoints',
            JSON.stringify({
                ...previous,
                [today]: dailyPoints,
            })
        )

        alert(`Saved ${dailyPoints} points for ${today}`)
    }

    return (
        <button
            onClick={handleSave}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-3 py-1 rounded-lg shadow text-sm"
        >
            {label}
        </button>
    )
}
