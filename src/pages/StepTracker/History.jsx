import "./History.css";

function History({ totalSteps , average , BestDay, goalStats}) {
  const { goalsMet, totalDays, successRate } = goalStats;
  return (
    <div className="history-container">
      <h2 className="history-title">Step Tracker</h2>

      <div className="card-container">  
        <div className="card card-1">
          <p>Total Steps</p>
          <h3>{totalSteps}</h3>
          <span className="icon">👟</span>
        </div>

        <div className="card card-2">
          <p>Total Average</p>
          <h3>{average}</h3>
          <span className="icon">📅</span>
        </div>

        <div className="card card-3">
          <p>Best Day</p>
          <h3>{BestDay ? BestDay.count.toLocaleString() : '—'}</h3>
          <small>{BestDay ? BestDay.date : 'No data yet'}</small>
           <span className="icon">🏆</span>
        </div>

        <div className="card card-4">
          <p>Goals Reached</p>
          <h3>{goalsMet} / {totalDays} days</h3>
          <small>{successRate}% success rate </small>
          <span className="icon">🔥</span>
        </div>
      </div>
    </div>
  );
}

export default History;
