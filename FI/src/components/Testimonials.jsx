import React, { useState } from 'react';
import './Testimonials.css';

const testimonials = [
  {
    name: 'Alex Kim',
    role: 'Product Manager, InnovateX',
    text: 'A visionary developer! The UI/UX was beyond expectations and communication was flawless.'
  },
  {
    name: 'Priya Singh',
    role: 'CEO, StartupHub',
    text: 'Delivered our project on time with stunning animations and a modern, professional look.'
  },
  {
    name: 'Liam Chen',
    role: 'CTO, Futurist Tech',
    text: 'Highly recommend for any frontend work. Creative, reliable, and detail-oriented.'
  },
];

const Testimonials = () => {
  const [idx, setIdx] = useState(0);
  const next = () => setIdx((idx + 1) % testimonials.length);
  const prev = () => setIdx((idx - 1 + testimonials.length) % testimonials.length);
  return (
    <section className="testimonials-section fadeInUp">
      <h2 className="sub-title">Client <span>Testimonials</span></h2>
      <div className="testimonial-card">
        <p className="testimonial-text">“{testimonials[idx].text}”</p>
        <div className="testimonial-meta">
          <span className="testimonial-name">{testimonials[idx].name}</span>
          <span className="testimonial-role">{testimonials[idx].role}</span>
        </div>
        <div className="testimonial-nav">
          <button className="testimonial-btn" onClick={prev} aria-label="Previous testimonial">&#8592;</button>
          <button className="testimonial-btn" onClick={next} aria-label="Next testimonial">&#8594;</button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
