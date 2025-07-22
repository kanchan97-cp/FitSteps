import "./Streak.css";

const StreakTable = ({ steps = [], target }) => {
  const formatDate = (date) => {
    return date.toISOString().split("T")[0];
  };

  const generateDates = () => {
    const dates = [];
    const today = new Date();
    for (let i = 29; i >= 0; i--) {
      const d = new Date(today);
      d.setDate(today.getDate() - i);
      dates.push(formatDate(d));
    }
    return dates;
  };

  const getBoxClass = (date) => {
    const entry = steps.find((step) => step.date === date);
    if (!entry) return "box gray";
    if (entry.count >= target) return "box dark-green";
    if (entry.count > 0) return "box light-green";
    return "box gray";
  };

  if (!steps || steps.length === 0 || target == null) {
    return <p className="streak-empty">No streak data to display.</p>;
  }

  const dates = generateDates();
  const totalActiveDays = dates.filter(date =>
  steps.some(step => step.date === date && step.count > 0)
).length;
  return (
    <div className="streak-container">
      <h3>📅 30-Day Streak — {totalActiveDays} Days Logged</h3>
      <div className="streak-grid">
        {dates.map((date, index) => (
          <div key={index} className={getBoxClass(date)} title={date}></div>
        ))}
      </div>
      <p className="legend">
        <span className="legend-item dark-green">●</span> Target Met &nbsp;
        <span className="legend-item light-green">●</span> Steps Taken &nbsp;
        <span className="legend-item gray">●</span> No Data
      </p>
    </div>
  );
};

export default StreakTable;
