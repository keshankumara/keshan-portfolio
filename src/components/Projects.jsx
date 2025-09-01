import React from 'react';
import './Projects.css';
import project1 from '../assets/images/project1.png';
import project2 from '../assets/images/project2.png';
import project3 from '../assets/images/project3.png';
import project4 from '../assets/images/project4.jpeg';

const projects = [
    {
        title: 'Smart Parking System',
        description: 'Book parking spaces with user/admin roles.',
        features: [
            'User & admin dashboards',
            'Real-time slot availability',
            'Secure booking system'
        ],
        image: project1,
        github: 'https://github.com/keshankumara/GUI-Parking-System',
        demo: 'https://smartpark-demo.com',
    },
    {
        title: 'Ballerina Translator',
        description: 'Translate text, images, and voice using AI.',
        features: [
            'Text translation (100+ languages)',
            'Image OCR & translation',
            'Voice transcription & translation'
        ],
        image: project4, // Replace with your generated image
        github: 'https://github.com/keshankumara/iwb25-214-code-hawks',
        demo: '',
    },
    {
        title: 'DSA Smart Parking System',
        description: 'C# console app for parking slot management.',
        features: [
            'Slot allocation & release',
            'Vehicle tracking',
            'Simple CLI interface'
        ],
        image: project2,
        github: 'https://github.com/keshankumara/DSA_Project_SmartParking',
        demo: '',
    },
    {
        title: 'ServiceLK',
        description: 'Manage services with React & Spring Boot.',
        features: [
            'Service listing & booking',
            'User authentication',
            'Admin management'
        ],
        image: project3,
        github: 'https://github.com/keshankumara/ServiceLK-Web',
        demo: '',
    }
];

const Projects = ({ darkMode }) => (
  <section className={`projects${darkMode ? ' dark' : ''}`} id="projects">
    <h2>Projects</h2>
    <div className="projects-list">
      {projects.map((project, idx) => (
        <div className="project-card" key={idx}>
          <img src={project.image} alt={project.title} className="project-img" />
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <div className="project-links">
            <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
