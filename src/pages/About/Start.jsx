import "./Start.css";

const Start = ({ navigate }) => {
  return (
    <div className="start-container">
      <h2 className="start-title">Ready to Start Tracking?</h2>
      <p className="start-subtext">
        Join thousands of users who are already tracking their steps and
        achieving their fitness goals.
      </p>
      <button className="start-button" onClick={() => navigate("step-tracker")}>
        Get Started Now
      </button>
    </div>
  );
};

export default Start;
