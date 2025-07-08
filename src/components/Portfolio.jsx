import React from 'react'

const PROJECTS = [
  {
    title: 'Netflix Clone',
    img: 'assets/Netflix clone.png',
    desc: 'A full-stack streaming UI replica with a clean, responsive interface.',
    repo: 'https://github.com/ADIII-21/FUTURE_FS_03',
  },
  {
    title: 'Portfolio Website',
    img: 'assets/project-2.png',
    desc: 'A sleek personal portfolio showcasing skills and projects with modern UI/UX.',
    repo: 'https://github.com/ADIII-21/FUTURE_FS_01',
  },
  {
    title: 'E-Commerce Website',
    img: 'assets/ecommerce.png',
    desc: 'A modern online store with authentication, product management, and a seamless shopping experience.',
    repo: 'https://github.com/ADIII-21/FUTURE_FS_02',
  },
]

export default function Portfolio() {
  return (
    <section id="portfolio">
      <div className="main-text">
        <h2>Latest <span>Project</span></h2>
        <div className="Portfolio-content">
          {PROJECTS.map(project => (
            <div className="row" key={project.title}>
              <div className="layer">
                <h5>{project.title}</h5>
                <p>{project.desc}</p>
                <a href={project.repo} target="_blank" rel="noopener noreferrer" title="View GitHub Repository">
                  <i className='bx bx-link-external'></i> GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
