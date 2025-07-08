import React, { useEffect, useRef } from 'react';
import './Snow.css';

const NUM_SNOWFLAKES = 70;

function randomBetween(a, b) {
  return Math.random() * (b - a) + a;
}

export default function Snow() {
  const canvasRef = useRef();
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let w = window.innerWidth;
    let h = window.innerHeight;
    canvas.width = w;
    canvas.height = h;
    let snowflakes = Array.from({ length: NUM_SNOWFLAKES }, () => ({
      x: randomBetween(0, w),
      y: randomBetween(0, h),
      r: randomBetween(1.5, 4.5),
      speed: randomBetween(0.7, 1.8),
      drift: randomBetween(-0.7, 0.7),
      opacity: randomBetween(0.5, 1)
    }));
    function draw() {
      ctx.clearRect(0, 0, w, h);
      for (let s of snowflakes) {
        ctx.save();
        ctx.globalAlpha = s.opacity;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, 2 * Math.PI);
        ctx.fillStyle = '#e0e7ff';
        ctx.shadowColor = '#fff';
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.restore();
      }
    }
    function animate() {
      for (let s of snowflakes) {
        s.y += s.speed;
        s.x += s.drift;
        if (s.y > h + 8) {
          s.x = randomBetween(0, w);
          s.y = -8;
        }
        if (s.x < -8) s.x = w + 8;
        if (s.x > w + 8) s.x = -8;
      }
      draw();
      requestAnimationFrame(animate);
    }
    animate();
    window.addEventListener('resize', () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w;
      canvas.height = h;
    });
    return () => {
      window.removeEventListener('resize', () => {});
    };
  }, []);
  return <canvas ref={canvasRef} className="snow-bg"></canvas>;
}
