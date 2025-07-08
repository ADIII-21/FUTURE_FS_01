import React, { useEffect, useState } from 'react'
import profilePic from '../planet111.jpg'

const TYPING_WORDS = [
  'Aditya Gupta',
  'A Web Developer',
  'A Software Engineer',
]

export default function Hero() {
  const [display, setDisplay] = useState('');
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentWord = TYPING_WORDS[wordIdx];
    let timeout;
    if (!deleting && charIdx < currentWord.length) {
      timeout = setTimeout(() => setCharIdx(charIdx + 1), 80);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => setCharIdx(charIdx - 1), 40);
    } else if (!deleting && charIdx === currentWord.length) {
      timeout = setTimeout(() => setDeleting(true), 1200);
    } else if (deleting && charIdx === 0) {
      timeout = setTimeout(() => {
        setDeleting(false);
        setWordIdx((wordIdx + 1) % TYPING_WORDS.length);
      }, 400);
    }
    setDisplay(currentWord.slice(0, charIdx));
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx]);

  return (
    <header className="hero" id="home">
      <div className="hero-profile-pic" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '1.5rem' }}>
        <div style={{ width: 130, height: 130, borderRadius: '50%', overflow: 'hidden', boxShadow: '0 4px 24px rgba(0,0,0,0.18)', background: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img
            src={profilePic}
            alt="Profile"
            className="profile-pic-img"
            width={120}
            height={120}
            style={{ borderRadius: '50%', objectFit: 'cover', width: '100%', height: '100%' }}
          />
        </div>
      </div>
      <div style={{ display: 'grid', placeItems: 'center', minHeight: '6.5em', width: '100%' }}>
        <h1 className="futuristic" style={{ margin: 0, minHeight: '2.5em', width: '100%', textAlign: 'center', position: 'absolute', left: 0, right: 0 }}>
          Hi, I Am <span className="typing-highlight">{display}<span className="typing-cursor">|</span></span>
        </h1>
      </div>
      <div className="hero-btns" style={{ display: 'flex', gap: '1em', flexWrap: 'nowrap', justifyContent: 'center', alignItems: 'center' }}>
        {/* AnimatedButton links removed as requested */}
      </div>
    </header>
  )
}
