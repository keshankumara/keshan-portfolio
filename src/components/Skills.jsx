import React from 'react';
import './Skills.css';

const skills = [
  { name: 'JavaScript', level: 90 },
  { name: 'React', level: 85 },
  { name: 'HTML5', level: 95 },
  { name: 'CSS3', level: 90 },
  { name: 'Node.js', level: 80 },
  { name: 'Git', level: 85 },
  { name: 'Teamwork', level: 80 },
  { name: 'Communication', level: 85 },
];

const Skills = ({ darkMode }) => (
  <section className={`skills${darkMode ? ' dark' : ''}`} id="skills">
    <h2>Skills</h2>
    <div className="skills-list">
      {skills.map(skill => (
        <div className="skill-card" key={skill.name}>
          <span className="skill-name">{skill.name}</span>
          <div className="progress-bar">
            <div className="progress" style={{ width: `${skill.level}%` }}></div>
          </div>
          <span className="skill-level">{skill.level}%</span>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
