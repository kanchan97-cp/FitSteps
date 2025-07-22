import "./Mission.css";

const Mission = ({ navigate }) => {
  return (
    <section className="mission-section">
      <div className="container">
        <h2 className="mission-title">Our Mission</h2>
        <p className="mission-text">
          At FitSteps, we believe that small, consistent actions lead to
          significant health improvements. Our mission is to help everyone take
          those daily steps toward better health by providing an engaging,
          easy-to-use step tracking platform.
        </p>
        <p className="mission-text">
          We’re committed to making fitness tracking accessible, motivating, and
          most importantly, effective. Whether you’re just starting your fitness
          journey or are a seasoned athlete, FitSteps is designed to support you
          every step of the way.
        </p>
        <button
          className="mission-link"
          onClick={() => navigate("step-tracker")}
        >
          Try our step tracker →
        </button>
      </div>
    </section>
  );
};

export default Mission;
