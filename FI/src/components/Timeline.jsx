import React from 'react';
import './Timeline.css';

const timeline = [
  {
    year: '2024',
    title: '1st Year CS Student',
    org: 'Tech University',
    desc: 'Started my journey as a Computer Science student.'
  },
  {
    year: '2024',
    title: 'Full Stack Web Developer',
    org: 'Freelance',
    desc: 'Began developing and deploying modern, responsive websites and web applications for startups and local businesses.'
  },
  {
    year: '2025',
    title: '2nd Year CS Student',
    org: 'Tech University',
    desc: 'Currently in my second year, pursuing Software Engineering and building real-world projects.'
  }
];

const Timeline = () => (
  <section className="timeline-section fadeInUp">
    <h2 className="sub-title">My <span>Journey</span></h2>
    <div className="timeline">
      {timeline.map((item, i) => (
        <div className="timeline-item" key={i}>
          <div className="timeline-dot" />
          <div className="timeline-content">
            <span className="timeline-year">{item.year}</span>
            <h3 className="timeline-title">{item.title}</h3>
            <span className="timeline-org">{item.org}</span>
            <div className="timeline-desc">{item.desc}</div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Timeline;
