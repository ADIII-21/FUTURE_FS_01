import React, { useEffect, useRef } from 'react';
import './Clouds.css';

// Simple animated SVG clouds background for light theme
export default function Clouds() {
  const ref = useRef();
  useEffect(() => {
    // Animate clouds by moving SVG groups
    let frame = 0;
    let raf;
    function animate() {
      frame++;
      if (ref.current) {
        const clouds = ref.current.querySelectorAll('.cloud-group');
        clouds.forEach((cloud, i) => {
          const speed = 0.12 + i * 0.04;
          let x = (frame * speed + i * 120) % 900 - 100;
          cloud.setAttribute('transform', `translate(${x},${i * 30})`);
        });
      }
      raf = requestAnimationFrame(animate);
    }
    animate();
    return () => cancelAnimationFrame(raf);
  }, []);
  return (
    <svg ref={ref} className="clouds-bg" width="100vw" height="100vh" viewBox="0 0 900 300" style={{position:'fixed',top:0,left:0,width:'100vw',height:'100vh',zIndex:0,pointerEvents:'none'}}>
      <g className="cloud-group">
        <ellipse cx="120" cy="80" rx="60" ry="22" fill="#e0e7ff" opacity="0.7" />
        <ellipse cx="170" cy="90" rx="30" ry="14" fill="#f5f6fa" opacity="0.8" />
        <ellipse cx="90" cy="90" rx="25" ry="10" fill="#e0e7ff" opacity="0.6" />
      </g>
      <g className="cloud-group">
        <ellipse cx="320" cy="120" rx="50" ry="18" fill="#e0e7ff" opacity="0.7" />
        <ellipse cx="360" cy="130" rx="22" ry="9" fill="#f5f6fa" opacity="0.8" />
        <ellipse cx="290" cy="130" rx="18" ry="7" fill="#e0e7ff" opacity="0.6" />
      </g>
      <g className="cloud-group">
        <ellipse cx="600" cy="60" rx="70" ry="24" fill="#e0e7ff" opacity="0.7" />
        <ellipse cx="650" cy="70" rx="32" ry="13" fill="#f5f6fa" opacity="0.8" />
        <ellipse cx="570" cy="70" rx="28" ry="11" fill="#e0e7ff" opacity="0.6" />
      </g>
      <g className="cloud-group">
        <ellipse cx="800" cy="180" rx="60" ry="20" fill="#e0e7ff" opacity="0.7" />
        <ellipse cx="850" cy="190" rx="28" ry="12" fill="#f5f6fa" opacity="0.8" />
        <ellipse cx="770" cy="190" rx="22" ry="9" fill="#e0e7ff" opacity="0.6" />
      </g>
    </svg>
  );
}
