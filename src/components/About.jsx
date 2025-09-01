import React from 'react';
import './About.css';
import profilePic from '../assets/images/profile-placeholder.jpeg';

const About = ({ darkMode }) => (
  <section className={`about${darkMode ? ' dark' : ''}`} id="about">
    <div className="about-container">
      <img src={profilePic} alt="Profile" className="profile-pic" />
      <div className="about-content">
        <h2>About Me</h2>
        <p>
          Hi! I'm Keshan Kumara, an aspiring Full Stack Developer and Computer Engineering undergraduate. I enjoy building modern, performant web applications, exploring new technologies, and turning creative ideas into functional projects.
        </p>
        <ul className="highlights">
          <li>💻 Completed multiple personal and academic projects</li>
          <li>🌱 Continuously learning full-stack development and modern web technologies</li>
          <li>🎓 Pursuing a B.Sc. in Computer Engineering</li>
        </ul>
      </div>
    </div>
  </section>
);

export default About;
