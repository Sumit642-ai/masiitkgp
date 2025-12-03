import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const [isRegistered, setIsRegistered] = useState(false);

  useEffect(() => {
    try {
      const flag = localStorage.getItem('mas_registered');
      setIsRegistered(flag === 'true');
    } catch (e) {
      console.error('Could not read registration flag', e);
    }
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-left">
        <div className="logo">
          <img src="/public/MASlogo.png" alt="MAS Logo" className="logo-image" />
          
        </div>
      </div>
      <ul className="nav-links">
        <li>
          <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>
            Home
          </a>
        </li>
        <li>
          <a href="#legacy" onClick={(e) => { e.preventDefault(); scrollToSection('investors'); }}>
            Legacy
          </a>
        </li>
        <li>
          <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('highlights'); }}>
            About
          </a>
        </li>
        <li>
          <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>
            Contact
          </a>
        </li>
      </ul>
      <div className="nav-right">
        <a
          href="https://forms.gle/9aLyRAmKmNsg1kwB6"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-register"
        >
          Register
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
