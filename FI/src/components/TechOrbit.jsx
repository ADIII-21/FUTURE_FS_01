import React from 'react';
import './TechOrbit.css';

const techs = [
  { name: 'React', color: '#61dafb' },
  { name: 'Vite', color: '#ffd62e' },
  { name: 'JavaScript', color: '#f7e018' },
  { name: 'CSS3', color: '#2965f1' },
  { name: 'HTML5', color: '#e44d26' },
  { name: 'Node.js', color: '#8cc84b' },
  { name: 'MongoDB', color: '#47a248' },
  { name: 'MySQL', color: '#00758f' },
  { name: 'Git', color: '#f34f29' },
  { name: 'GitHub', color: '#333' },
  { name: 'Firebase', color: '#ffca28' },
  { name: 'Vercel', color: '#000' },
  { name: 'Netlify', color: '#00c7b7' },
  { name: 'Python', color: '#3776ab' },
  { name: 'C++', color: '#00599c' },
  { name: 'Java', color: '#b07219' },
];

const TechOrbit = () => (
  <section className="techstack-section fadeInUp">
    <h2 className="sub-title">Tech <span>Stack</span></h2>
    <div className="techstack-list" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2.5em', marginTop: '2em' }}>
      {techs.map((tech) => (
        <div
          key={tech.name}
          className="techstack-item"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            minWidth: 90,
            padding: '1em 1.5em',
            background: '#fff',
            borderRadius: 12,
            boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
            border: `2px solid ${tech.color}`,
            transition: 'transform 0.2s',
          }}
        >
          <div
            style={{
              width: 32,
              height: 32,
              borderRadius: '50%',
              background: tech.color,
              marginBottom: 10,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              fontWeight: 700,
              fontSize: 18,
              boxShadow: `0 2px 8px ${tech.color}33`,
            }}
          >
            {tech.name[0]}
          </div>
          <span style={{ fontWeight: 600, fontSize: 16, color: '#222' }}>{tech.name}</span>
        </div>
      ))}
    </div>
  </section>
);

export default TechOrbit;
