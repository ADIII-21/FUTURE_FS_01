import React from 'react'

export default function Skills() {
  const skills = [
    { name: 'Python' },
    { name: 'JavaScript' },
    { name: 'React' },
    { name: 'Vite' },
    { name: 'C++' },
    { name: 'HTML' },
    { name: 'CSS' },
  ]
  return (
    <section id="Skills">
      <h1 className="sub-title">My <span>Skills</span></h1>
      <div className="skills-icons-list">
        {skills.map(skill => (
          <div className="skill-icon-card" key={skill.name}>
            <span className="skill-label">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
