import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Home from './pages/Home';
import Courses from './pages/Courses';
import About from './pages/About';
import Contact from './pages/Contact';
import Forms from './pages/Forms';
import Complaints from './pages/Complaints';

import './App.css';
import logo from './ss-logo.jpeg.jpeg';

function App() {
  return (
    <BrowserRouter>
      <header className="header">

        <div className="brand">
          <img
  src={logo}
  alt="SS Technologies Logo"
  className="site-logo"
/>

          <div>
            <h2>SS Technologies</h2>
            <p>Medical Coding Institute</p>
          </div>
        </div>

        <nav>
          <Link to="/">Home</Link>
          <Link to="/courses">Courses</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/forms">Forms</Link>
          <Link to="/complaints">Complaints</Link>
        </nav>

      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/forms" element={<Forms />} />
          <Route path="/complaints" element={<Complaints />} />
        </Routes>
      </main>

      <footer className="site-footer">

  <div className="footer-content">

    <div className="footer-brand">
      <h3>SS Technologies</h3>
      <p>Medical Coding Institute</p>
      <p className="footer-tagline">
        Learn • Practice • Get Certified
      </p>
    </div>

    <div className="footer-links">
      <h4>Quick Links</h4>

      <Link to="/">Home</Link>
      <Link to="/courses">Courses</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/forms">Forms</Link>
      <Link to="/complaints">Complaints</Link>
    </div>

    <div className="footer-contact">
      <h4>Contact Us</h4>

      <p>📞 8309751976</p>
      <p>☎️ 04035024143</p>

      <a
        href="https://wa.me/918309751976"
        target="_blank"
        rel="noopener noreferrer"
      >
        💬 WhatsApp
      </a>

      <a
        href="https://www.facebook.com/saraswathi.ankinapalli9"
        target="_blank"
        rel="noopener noreferrer"
      >
        📘 Facebook
      </a>

      <a
        href="https://www.instagram.com/ankin_apalli/"
        target="_blank"
        rel="noopener noreferrer"
      >
        📸 Instagram
      </a>
    </div>

  </div>

  <div className="footer-bottom">
    <p>
      © 2026 SS Technologies Medical Coding Institute. All Rights Reserved.
    </p>
  </div>

</footer>

    </BrowserRouter>
  );
}

export default App;