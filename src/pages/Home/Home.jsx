import Achieve from "./Achieve";
import Footer from "../../components/Footer";
import HeroSection from "./HeroSection";
import Start from "./Start";

function Home({navigate}) {
  return (
    <>
      <HeroSection navigate={navigate}/>
      <Achieve />
      <Start navigate={navigate}/>
      <Footer />
    </>
  );
}

export default Home;
