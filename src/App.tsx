import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/scrolltotop_temp.tsx';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Sponsor from './pages/Sponsor.tsx';
import Membership from './pages/Membership.tsx';

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop /> 
      <div className="min-h-screen bg-dark-400 text-white">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} /> 
          <Route path="/sponsor" element={<Sponsor />} />
          <Route path="/membership" element={<Membership />} />       
          </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;