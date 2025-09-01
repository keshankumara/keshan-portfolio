import React, { useEffect, useState } from 'react';
import './BackToTop.css';

const BackToTop = ({ darkMode }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return visible ? (
    <button className={`back-to-top${darkMode ? ' dark' : ''}`} onClick={scrollToTop} aria-label="Back to top">
      ↑
    </button>
  ) : null;
};

export default BackToTop;
