import React from 'react'

export default function AppLogo({ size = 32 }) {
  // Replace with your own SVG or logo
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="22" stroke="#7f5af0" strokeWidth="4" fill="#232946" />
      <path d="M24 12L32 36H16L24 12Z" fill="#2cb67d" />
      <circle cx="24" cy="24" r="6" fill="#7f5af0" />
    </svg>
  )
}
