import React, { useState } from 'react';
import './Header.css';

const Header = ({ onNavClick, darkMode, toggleDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => setMenuOpen(!menuOpen);

  return (
    <header className={`header${darkMode ? ' dark' : ''}`}>
      <div className="logo">MyPortfolio</div>
      <nav className={`nav${menuOpen ? ' open' : ''}`}>
        <a href="#home" onClick={() => onNavClick('home')}>Home</a>
        <a href="#about" onClick={() => onNavClick('about')}>About</a>
        <a href="#skills" onClick={() => onNavClick('skills')}>Skills</a>
        <a href="#projects" onClick={() => onNavClick('projects')}>Projects</a>
        <a href="#experience" onClick={() => onNavClick('experience')}>Experience</a>
        <a href="#contact" onClick={() => onNavClick('contact')}>Contact</a>
        <button className="mode-toggle" onClick={toggleDarkMode} aria-label="Toggle dark mode">
          {darkMode ? '🌙' : '☀️'}
        </button>
      </nav>
      <button className="menu-toggle" onClick={handleMenuToggle} aria-label="Toggle menu">
        <span className="hamburger"></span>
      </button>
    </header>
  );
};

export default Header;
