import "./HeroSection.css"

const HeroSection = ({ navigate }) => {

    return (
      <section className="hero">
        <div className="hero-content">
          <h1>Track Your Steps, Stay Fit</h1>
          <p>Monitor your daily step goals, challenge yourself, and stay motivated.</p>
          <div className="hero-buttons">
            <button className="btn-primary" onClick={() => navigate("step-tracker")} >Start Tracking</button>
            <button className="btn-outline" onClick={() => navigate("about")}>Learn More</button>
          </div>
          <div className="hero-stats">
            <div className="stat-card">
              <h2>10,000+</h2>
              <p>Steps Daily Goal</p>
            </div>
            <div className="stat-card">
              <h2>5K</h2>
              <p>Active Users</p>
            </div>
            <div className="stat-card">
              <h2>30+</h2>
              <p>Days Streak</p>
            </div>
          </div>
        </div>
      </section>
    );
  };
export default HeroSection;
  