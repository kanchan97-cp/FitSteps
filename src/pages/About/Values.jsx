import "./Values.css";

const values = [
  {
    icon: "💡",
    title: "Innovation",
    description:
      "We continuously improve our solution with the latest technology and user feedback to provide the best possible experience.",
  },
  {
    icon: "🤝",
    title: "Community",
    description:
      "We believe fitness is more enjoyable and sustainable when shared with a supportive community of like-minded individuals.",
  },
  {
    icon: "🏆",
    title: "Achievement",
    description:
      "We celebrate progress at every level, believing that recognizing milestones is key to maintaining motivation.",
  },
  {
    icon: "📈",
    title: "Growth",
    description:
      "We support continual improvement, helping users push their limits and reach new personal bests.",
  },
];

const Values = () => {
  return (
    <section className="values-section">
      <div className="values-container">
        <h2 className="values-title">Our Values</h2>
        <p className="values-subtitle">
          The principles that guide our work and shape our product.
        </p>
        <div className="values-grid">
          {values.map((value, index) => (
            <div className="value-card" key={index}>
              <div className="value-icon">{value.icon}</div>
              <h3 className="value-title">{value.title}</h3>
              <p className="value-description">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
