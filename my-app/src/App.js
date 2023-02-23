import "./App.css";
import "./assets/css/Nav.css";
import "./assets/css/HeroSection.css";
import "./assets/css/Highlights.css";
import "./assets/css/Testimonial.css";
import "./assets/css/About.css";
import "./assets/css/Footer.css";
import Footer from "./Components/Footer";
import Nav from "./Components/Nav";
import HeroSection from "./Components/HeroSection";
import Testimonials from "./Components/Testimonials";
import Highlights from "./Components/Highlights";
import About from "./Components/About";

function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <Nav />
        <HeroSection />
        <Highlights />
        <Testimonials />
        <About />
      </div>
      <Footer />
    </div>
  );
}

export default App;
