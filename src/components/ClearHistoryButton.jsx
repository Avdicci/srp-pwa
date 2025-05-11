'use client'
export default function ClearHistoryButton() {
    const handleClear = () => {
        const confirmed = confirm("Are you sure you want to delete all SRP data?")
        if (confirmed) {
            localStorage.removeItem('savedPoints')
            window.location.reload()
        }
    }

    return (
        <div className="flex justify-center mt-6">
            <button
                onClick={handleClear}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded shadow transition"
            >
                Clear All SRP Data
            </button>
        </div>
    )
}
