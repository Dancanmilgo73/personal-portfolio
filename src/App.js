import "./App.css";
import Nav from "./Components/Nav";
import Animation from "./Components/Animation";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Nav />
      <Animation />
      <About />
      <Projects />
      <Contact />

      <Footer />
    </div>
  );
}

export default App;
