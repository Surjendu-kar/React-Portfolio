import React from "react"; 
import "normalize.css";
import "bootstrap/dist/css/bootstrap.css";
import "./img/icons/css/ionicons.css";
import "./img/font-awesome/css/font-awesome.css";
import "lightbox2/dist/css/lightbox.min.css";
import "./App.css";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import "./libs/easing.js";
import "lightbox2/dist/js/lightbox.min.js";
import Navbar from "./components/Navbar.js";
import About from "./components/About.js";
import BackToTop from "./components/BackToTop.js";
import Contact from "./components/Contact.js";
import Intro from "./components/Intro.js";
import Cursor from "./components/Cursor";
import Projects from "./components/Projects.js";

function App() {
  return (
    <React.Fragment>
      <Cursor />
      <Navbar />
      <Intro />
      <About />
      <Projects />
      <Contact />
      <BackToTop />
    </React.Fragment>
  );
}

export default App;
