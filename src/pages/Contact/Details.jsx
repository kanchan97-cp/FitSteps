import "./Details.css";

const Details = () => {
  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <p className="description">
        Have a question or feedback? We'd love to hear from you.
      </p>

      <div className="contact-info">
        <div className="info-box">
          <h3>📍 Our Location</h3>
          <p>-------</p>
        </div>

        <div className="info-box">
          <h3>📞 Phone Number</h3>
          <p>XXXXXXXXXX</p>
        </div>

        <div className="info-box">
          <h3>📧 Email Address</h3>
          <p>contact@fitsteps.com</p>
        </div>

        <div className="info-box">
          <h3>🕒 Working Hours</h3>
          <p>Monday - Friday: 9am - 7pm</p>
          <p>Saturday - Sunday: 10am - 4pm</p>
        </div>
      </div>
    </div>
  );
};

export default Details;
