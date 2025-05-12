export default function TotalPointsSummary({ history }) {
    const total = Object.values(history).reduce((sum, val) => sum + Number(val), 0)

    return (
        <div className="bg-summary-section text-black p-3 rounded-xl shadow-lg border-2 border-yellow-600 text-center w-30">
            <p className="text-sm font-semibold">Total Points</p>
            <p className="text-2xl font-bold">{total.toFixed(1)}</p>
        </div>
    )
}
