import "./Navbar.css";
const Navbar = ({ navigate }) => {
  return (
    <nav className="navbar">
      <h1 className="navbar-name">FitSteps</h1>
      <div className="nav-links">
        <button className="button" onClick={() => navigate("home")}>
          Home
        </button>
        <button className="button" onClick={() => navigate("step-tracker")}>
          Step Tracker
        </button>
        <button className="button" onClick={() => navigate("about")}>
          About
        </button>
        <button className="button" onClick={() => navigate("blog")}>
          Blog
        </button>
        <button className="button" onClick={() => navigate("contact")}>
          Contact
        </button>
      </div>
      <div className="navbar-buttons">
        <button className="login" onClick={() => navigate("login")}>
          Log In
        </button>
        <button className="signup" onClick={() => navigate("signup")}>
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
