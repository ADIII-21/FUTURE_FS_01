import React from 'react'

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <div className="projects-grid">
        <div className="project-card">Project 1</div>
        <div className="project-card">Project 2</div>
        <div className="project-card">
          <h3>E-Commerce Website</h3>
          <p>
            A full-featured online store built with React, Node.js, Express, and MongoDB. Includes user authentication, product management, shopping cart, order processing, and a modern, responsive UI. Focused on performance, security, and a seamless user experience.
          </p>
        </div>
      </div>
    </section>
  )
}
