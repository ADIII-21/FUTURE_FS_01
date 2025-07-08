import React, { useEffect, useRef } from 'react';
import './ParticleConstellation.css';

const NUM_PARTICLES = 80;
const MAX_DISTANCE = 120;

function randomBetween(a, b) {
  return a + Math.random() * (b - a);
}

const ParticleConstellation = ({ theme }) => {
  const canvasRef = useRef(null);
  const particles = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    function createParticles() {
      particles.current = Array.from({ length: NUM_PARTICLES }, () => ({
        x: randomBetween(0, width),
        y: randomBetween(0, height),
        vx: randomBetween(-0.4, 0.4),
        vy: randomBetween(-0.4, 0.4),
        r: randomBetween(1.2, 2.5),
      }));
    }

    function draw() {
      ctx.clearRect(0, 0, width, height);
      // Draw particles
      for (let p of particles.current) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, 2 * Math.PI);
        ctx.fillStyle = theme === 'dark' ? '#fffbe7' : '#7c3aed';
        ctx.shadowColor = theme === 'dark' ? '#b3e0ff' : '#a0bfff';
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
      // Draw lines
      for (let i = 0; i < particles.current.length; i++) {
        for (let j = i + 1; j < particles.current.length; j++) {
          const a = particles.current[i];
          const b = particles.current[j];
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist < MAX_DISTANCE) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = theme === 'dark' ? '#b3e0ff33' : '#7c3aed33';
            ctx.lineWidth = 1.1 - dist / MAX_DISTANCE;
            ctx.stroke();
          }
        }
      }
    }

    function animate() {
      for (let p of particles.current) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;
      }
      draw();
      requestAnimationFrame(animate);
    }

    createParticles();
    animate();

    function handleResize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      createParticles();
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [theme]);

  return (
    <canvas ref={canvasRef} className="particle-constellation" />
  );
};

export default ParticleConstellation;
