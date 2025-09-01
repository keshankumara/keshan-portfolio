
import React, { useState, useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import './App.css';
import './styles/variables.css';
import './components/Header.css';
import './components/Hero.css';
import './components/About.css';
import './components/Skills.css';
import './components/Projects.css';
import './components/Timeline.css';
import './components/Contact.css';
import './components/Footer.css';
import './components/BackToTop.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const sectionRefs = {
    home: useRef(null),
    about: useRef(null),
    skills: useRef(null),
    projects: useRef(null),
    experience: useRef(null),
    contact: useRef(null),
  };

  const handleNavClick = (section) => {
    const ref = sectionRefs[section];
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactClick = () => handleNavClick('contact');

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  React.useEffect(() => {
    document.body.className = darkMode ? 'dark' : '';
  }, [darkMode]);

  return (
    <div className={`app${darkMode ? ' dark' : ''}`}>
      <Header onNavClick={handleNavClick} darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        <div ref={sectionRefs.home}><Hero onContactClick={handleContactClick} darkMode={darkMode} /></div>
        <div ref={sectionRefs.about}><About darkMode={darkMode} /></div>
        <div ref={sectionRefs.skills}><Skills darkMode={darkMode} /></div>
        <div ref={sectionRefs.projects}><Projects darkMode={darkMode} /></div>
        <div ref={sectionRefs.experience}><Timeline darkMode={darkMode} /></div>
        <div ref={sectionRefs.contact}><Contact darkMode={darkMode} /></div>
      </main>
      <Footer darkMode={darkMode} />
      <BackToTop darkMode={darkMode} />
    </div>
  );
}

export default App;
