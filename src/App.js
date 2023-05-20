import React from 'react';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Album from './components/Gallery';
import Home from './components/Home';
import Navigation from './components/Navigation';
import { Route, Routes, BrowserRouter as Router  } from 'react-router-dom';
import Aos from 'aos';
import "aos/dist/aos.css";

function App() {
  React.useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);
  return (
    <>
      <Navigation/>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/gallery' element={<Album />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>
      <Footer/>
    </>
  );
}

export default App;
