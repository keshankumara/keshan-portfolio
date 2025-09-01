import React from 'react';
import './Timeline.css';

const timelineData = [

    {
        type: 'edu',
        title: 'B.Sc. Computer Engineering (Undergraduate)',
        org: 'State University',
        date: '2019 - Present',
        desc: 'Currently pursuing a degree in Computer Engineering.'
    },
    {
        type: 'work',
        title: 'Digital Intern',
        org: 'HNB Bank',
        date: '2023 - Present',
        desc: 'Worked on digital solutions and supported banking technology initiatives.'
    },
    {
        type: 'work',
        title: 'Volunteer Teacher',
        org: 'Mehewara',
        date: '2022 - Present',
        desc: 'Volunteering as a teacher, supporting educational initiatives at Mehewara.'
    }
    
];

const Timeline = ({ darkMode }) => (
  <section className={`timeline${darkMode ? ' dark' : ''}`} id="experience">
    <h2>Experience & Education</h2>
    <div className="timeline-list">
      {timelineData.map((item, idx) => (
        <div className={`timeline-item ${item.type}`} key={idx}>
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>{item.title}</h3>
            <span className="timeline-org">{item.org}</span>
            <span className="timeline-date">{item.date}</span>
            <p>{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Timeline;
