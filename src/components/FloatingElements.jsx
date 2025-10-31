// FloatingElements.jsx - Decorative floating elements for engagement
import React from "react";
import "../styles/FloatingElements.css";

export default function FloatingElements() {
  return (
    <div className="floating-elements" aria-hidden="true">
      {/* Geometric shapes */}
      <div className="floating-shape shape-1">
        <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
          <circle cx="25" cy="25" r="20" fill="url(#shapeGradient1)" opacity="0.6" />
        </svg>
      </div>
      
      <div className="floating-shape shape-2">
        <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
          <polygon points="25,5 45,35 5,35" fill="url(#shapeGradient2)" opacity="0.5" />
        </svg>
      </div>
      
      <div className="floating-shape shape-3">
        <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="10" width="30" height="30" rx="5" fill="url(#shapeGradient3)" opacity="0.4" />
        </svg>
      </div>
      
      <div className="floating-shape shape-4">
        <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
          <path d="M 25 5 L 40 20 L 25 45 L 10 20 Z" fill="url(#shapeGradient4)" opacity="0.5" />
        </svg>
      </div>
      
      <div className="floating-shape shape-5">
        <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
          <circle cx="25" cy="25" r="15" fill="url(#shapeGradient5)" opacity="0.6" />
        </svg>
      </div>
      
      <div className="floating-shape shape-6">
        <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
          <polygon points="25,10 40,25 25,40 10,25" fill="url(#shapeGradient6)" opacity="0.4" />
        </svg>
      </div>

      {/* Sparkles */}
      <div className="sparkle sparkle-1">✨</div>
      <div className="sparkle sparkle-2">⭐</div>
      <div className="sparkle sparkle-3">✨</div>
      <div className="sparkle sparkle-4">⭐</div>

      {/* SVG Gradients */}
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <linearGradient id="shapeGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#667eea" />
            <stop offset="100%" stopColor="#f093fb" />
          </linearGradient>
          <linearGradient id="shapeGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffd700" />
            <stop offset="100%" stopColor="#f093fb" />
          </linearGradient>
          <linearGradient id="shapeGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#764ba2" />
            <stop offset="100%" stopColor="#667eea" />
          </linearGradient>
          <linearGradient id="shapeGradient4" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f093fb" />
            <stop offset="100%" stopColor="#667eea" />
          </linearGradient>
          <linearGradient id="shapeGradient5" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffd700" />
            <stop offset="100%" stopColor="#764ba2" />
          </linearGradient>
          <linearGradient id="shapeGradient6" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#667eea" />
            <stop offset="100%" stopColor="#ffd700" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
