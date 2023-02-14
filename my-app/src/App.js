import "./App.css";
import "./Components/Nav.css";
import "./Components/HeroSection.css";
import "./Components/Highlights.css";
import Footer from "./Components/Footer";
import Nav from "./Components/Nav";
import HeroSection from "./Components/HeroSection";
import Testimonials from "./Components/Testimonials";
import Highlights from "./Components/Highlights";
import About from "./Components/About";

function App() {
  return (
    <>
      <Nav />
      <HeroSection />
      <Highlights />
      <Testimonials />
      <About />
      <Footer />
    </>
  );
}

export default App;
