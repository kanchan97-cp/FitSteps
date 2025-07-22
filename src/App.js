import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import StepTracker from "./pages/StepTracker/StepTracker";
import About from "./pages/About/About";
import Blog from "./pages/Blog/Blog";
import Contact from "./pages/Contact/Contact";
import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/SignUp"

function App() {
  const [page, setPage] = useState("home");

  const renderPage = () => {
    if (page === "step-tracker") return <StepTracker navigate={setPage}/>;
    if (page === "about") return <About navigate={setPage} />;
    if (page === "blog") return <Blog />;
    if (page === "contact") return <Contact />;
    if (page ==="login") return <Login />;
    if (page === "signup") return <SignUp/>

    return <Home navigate={setPage}/>;
  };

  return (
    <div>
      <Navbar navigate={setPage} />
      {renderPage()}
    </div>
  );
}
export default App;

