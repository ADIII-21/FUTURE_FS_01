import React, { useEffect, useState } from 'react';
import './Stats.css';

const stats = [
  { label: 'Years Experience', value: 1 },
  { label: 'Projects', value: 3 },
  { label: 'Happy Clients', value: 0 },
];

const Stats = () => {
  const [animatedValues, setAnimatedValues] = useState(stats.map(() => 0));

  useEffect(() => {
    const durations = 1200;
    let animationFrame;
    const start = performance.now();

    function animate(now) {
      const elapsed = now - start;
      const newValues = stats.map(stat => {
        const progress = Math.min(elapsed / durations, 1);
        return progress < 1 ? Math.floor(progress * stat.value) : stat.value;
      });
      setAnimatedValues(newValues);
      if (elapsed < durations) {
        animationFrame = requestAnimationFrame(animate);
      }
    }
    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <section className="stats-section fadeInUp">
      <h2 className="sub-title">Fun <span>Stats</span></h2>
      <div className="collab-message">
        Let's work together! If you're looking to collaborate or just want to say hi, feel free to reach out.
      </div>
      <div className="stats-list">
        {stats.map((stat, i) => (
          <div className="stat-card" key={stat.label}>
            <span className="stat-value">{animatedValues[i]}</span>
            <span className="stat-label">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
