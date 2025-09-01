import React from 'react';
import './Hero.css';

const Hero = ({ onContactClick, darkMode }) => (
    <section className={`hero${darkMode ? ' dark' : ''}`} id="home">
        <div className="hero-content">
            <h1>Keshan Kumara</h1>
      <h2>Aspiring Full Stack Developer</h2>
      <p>I enjoy building modern and user-friendly web applications, turning ideas into functional projects while constantly learning and improving my skills.</p>
      <button className="cta" onClick={onContactClick}>Contact Me</button>
    </div>
  </section>
);

export default Hero;
