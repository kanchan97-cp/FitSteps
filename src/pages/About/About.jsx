import Footer from "../../components/Footer";
import Start from "./Start";
import Mission from "./Mission";
import Values from "./Values";

function About({ navigate }) {
  return (
    <>
      <Mission navigate={navigate} />
      <Values />
      <Start navigate={navigate} />
      <Footer />
    </>
  );
}

export default About;
