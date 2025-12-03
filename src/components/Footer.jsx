import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <img src="/public/MASlogo.png" alt="MAS Logo" className="footer-logo" />
          <p>India's premier startup funding competition where execution matters more than dreams.</p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#investors">Legacy</a></li>
            <li><a href="#highlights">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Connect With Us</h4>
          <div className="social-links">
            <a href="https://www.facebook.com/ecell.iitkgp/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">Facebook</a>
            <a href="https://www.instagram.com/iitkgp_ecell/?hl=en" target="_blank" rel="noopener noreferrer" aria-label="Instagram">Instagram</a>
            <a href="https://in.linkedin.com/company/ecellkgp" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">LinkedIn</a>
            <a href="https://x.com/hashtag/ecelliitkgp?src=hashtag_click" target="_blank" rel="noopener noreferrer" aria-label="Twitter">Twitter</a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Contact Info</h4>
          <p>IIT Kharagpur</p>
          <p>West Bengal, India</p>
          <p>Email: mas@ecell-iitkgp.in</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 Million At Stake - E-Cell IIT Kharagpur. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
