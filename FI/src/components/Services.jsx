import React from 'react'

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="container1">
        <h1 className="sub-title">My <span>Services</span></h1>
        <div className="services-list">
          <div className="service-card">
            <i className='bx bx-laptop'></i>
            <h2>💻 Full Stack Web Development</h2>
            <p>I build responsive and high-performance web applications from scratch using modern technologies like React, Node.js, Express, and MongoDB. From UI/UX to backend logic and database management — I handle it all.</p>
          </div>
          <div className="service-card">
            <i className='bx bx-paint'></i>
            <h2>🎨 Front-End Development</h2>
            <p>I create user-centric, mobile-friendly interfaces using HTML, CSS, Tailwind, JavaScript, and React. My goal is always a seamless and engaging user experience across devices.</p>
          </div>
          <div className="service-card">
            <i className='bx bx-cog'></i>
            <h2>⚙️ Back-End Development</h2>
            <p>I design and develop robust server-side applications using Node.js, Express.js, and integrate databases like MongoDB or MySQL. I ensure fast APIs, secure architecture, and clean code.</p>
          </div>
          <div className="service-card">
            <i className='bx bx-bug'></i>
            <h2>🔍 Debugging & Optimization</h2>
            <p>Got bugs or performance issues? I help you identify, debug, and fix them — improving speed, reliability, and maintainability of your application.</p>
          </div>
          <div className="service-card">
            <i className='bx bx-mobile'></i>
            <h2>📱 Responsive Web Design</h2>
            <p>Every website I build is fully responsive, adapting beautifully to all screen sizes — phones, tablets, and desktops.</p>
          </div>
          <div className="service-card">
            <i className='bx bx-cloud-upload'></i>
            <h2>🚀 Deployment & Hosting</h2>
            <p>I deploy and maintain websites using platforms like Vercel, Netlify, or Firebase, ensuring they're always live, fast, and secure.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
