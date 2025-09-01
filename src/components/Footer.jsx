import React from 'react';
import './Footer.css';

const Footer = ({ darkMode }) => (
  <footer className={`footer${darkMode ? ' dark' : ''}`}>
    <div className="footer-content">
      <div className="social-links">
        <a href="https://www.linkedin.com/in/keshankumara/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <i className="fab fa-linkedin"></i> LinkedIn
        </a>
        <a href="https://github.com/keshankumara" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <i className="fab fa-github"></i> GitHub
        </a>
      </div>
      <div className="copyright">
        &copy; {new Date().getFullYear()} keshan.. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
