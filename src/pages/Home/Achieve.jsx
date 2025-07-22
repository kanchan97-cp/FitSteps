import "./Achieve.css";

function Achieve() {
  return (
    <div className="achieve-container">
      <h1>Track Every Step of Your Journey</h1>
      <p>
        FitSteps helps you monitor your daily activity and stay on track with
        your fitness goals.
      </p>
      <div className="achieve-cards">
        <div className="card">
          <h3>Step Counting</h3>
          <h5>Track your daily steps and monitor your progress over time.</h5>
        </div>
        <div className="card">
          <h3>Progress Analytics</h3>
          <h5>Visualize your activity with detailed charts and statistics.</h5>
        </div>
        <div className="card">
          <h3>Goals & Achievements</h3>
          <h5>Set personal goals and earn badges for your accomplishments.</h5>
        </div>
        <div className="card">
          <h3>Social Challenges</h3>
          <h5>Challenge friends and participate in community events.</h5>
        </div>
      </div>
    </div>
  );
}
export default Achieve;
