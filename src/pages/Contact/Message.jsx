import "./Message.css";

const Message = () => {
  return (
    <div className="message-container">
      <h2>Send Us a Message</h2>

      <form className="message-form">
        <div className="form-row">
          <input type="text" placeholder="Your Name" name="name" required />
          <input type="email" placeholder="Your Email" name="email" required />
        </div>

        <input type="text" placeholder="Subject" name="subject" required />

        <textarea
          placeholder="Message"
          name="message"
          rows="5"
          required
        ></textarea>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Message;
