import React from 'react'

const SOCIALS = [
  { name: 'Instagram', href: 'https://instagram.com/', icon: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" rx="7" fill="#fff"/><path d="M12 7.2A4.8 4.8 0 1 0 12 16.8A4.8 4.8 0 1 0 12 7.2Z" stroke="#E4405F" strokeWidth="2"/><circle cx="17.5" cy="6.5" r="1.5" fill="#E4405F"/></svg>
  ) },
  { name: 'LinkedIn', href: 'https://linkedin.com/', icon: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" rx="7" fill="#fff"/><path d="M6.94 8.5a1.06 1.06 0 1 1 0-2.12a1.06 1.06 0 0 1 0 2.12Zm.03 2.25h2.12v6.75H6.97v-6.75Zm3.56 0h2.03v.92h.03c.28-.53.97-1.09 2-1.09c2.14 0 2.54 1.41 2.54 3.25v3.67h-2.12v-3.25c0-.77-.01-1.76-1.07-1.76c-1.07 0-1.23.84-1.23 1.7v3.31h-2.12v-6.75Z" fill="#0077B5"/></svg>
  ) },
  { name: 'GitHub', href: 'https://github.com/', icon: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" rx="7" fill="#fff"/><path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.48 2.87 8.28 6.84 9.63c.5.09.68-.22.68-.48c0-.24-.01-.87-.01-1.7c-2.78.62-3.37-1.36-3.37-1.36c-.45-1.18-1.1-1.5-1.1-1.5c-.9-.63.07-.62.07-.62c1 .07 1.53 1.05 1.53 1.05c.89 1.56 2.34 1.11 2.91.85c.09-.66.35-1.11.63-1.37c-2.22-.26-4.56-1.14-4.56-5.07c0-1.12.39-2.03 1.03-2.75c-.1-.26-.45-1.3.1-2.7c0 0 .84-.28 2.75 1.05a9.36 9.36 0 0 1 2.5-.34c.85 0 1.7.11 2.5.34c1.91-1.33 2.75-1.05 2.75-1.05c.55 1.4.2 2.44.1 2.7c.64.72 1.03 1.63 1.03 2.75c0 3.94-2.34 4.81-4.57 5.07c.36.32.68.94.68 1.9c0 1.37-.01 2.47-.01 2.81c0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" fill="#181824"/></svg>
  ) },
]

export default function Connect() {
  return (
    <section id="connect" className="connect-section">
      <div className="connect-socials">
        {SOCIALS.map(link => (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="connect-icon"
            aria-label={link.name}
          >
            {link.icon}
          </a>
        ))}
      </div>
      <h2>Connect With Me</h2>
      <div className="connect-logo">
        {/* You can add your AppLogo or profile image here */}
      </div>
      <p>Let’s build something amazing together! Reach out via any platform above</p>
    </section>
  )
}
