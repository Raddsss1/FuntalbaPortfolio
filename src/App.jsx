import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Achievements from "./components/Achievements";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import CallToAction from "./components/CallToAction";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Achievements />
      <Education />
      <Skills />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;
