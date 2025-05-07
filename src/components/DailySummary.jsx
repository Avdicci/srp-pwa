const DailySummary = ({ totalPoints }) => (
    <div className="fixed top-4 right-4 bg-green-200 px-4 py-2 rounded-lg shadow">
      <span className="font-bold">Points Today: </span>
      {totalPoints.toFixed(1)}
    </div>
  );

export default DailySummary;