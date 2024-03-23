import React from 'react'; // Add this line to import React

// Import CSS in order
import 'normalize.css';
// import './animate.css';
import 'bootstrap/dist/css/bootstrap.css';
import './img/icons/css/ionicons.css';
import './img/font-awesome/css/font-awesome.css';
import 'lightbox2/dist/css/lightbox.min.css'
import './App.css';

// Import JS libraries
import 'jquery/dist/jquery.min.js';
// import 'popper.js/dist/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import './libs/easing.js';
import 'lightbox2/dist/js/lightbox.min.js';

// Import components
import Navbar from './components/Navbar.js';
import About from './components/About.js';
import BackToTop from './components/BackToTop.js';
import Contact from './components/Contact.js';
import Intro from './components/Intro.js';
// import Preloader from './components/Preloader.js';
import Projects from './components/Projects.js';

function App() {
  return (
    <React.Fragment>
        <Navbar />
        <Intro />
        <About />
        <Projects />
        <Contact />
        <BackToTop />
        {/* <Preloader /> */}
    </React.Fragment>
  );
}

export default App;
