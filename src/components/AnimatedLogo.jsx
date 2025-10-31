// AnimatedLogo.jsx - Animated video-like logo component
import React, { useEffect, useState } from "react";
import "../styles/AnimatedLogo.css";

export default function AnimatedLogo({ className = "" }) {
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    // Create a continuous animation loop
    const timer = setInterval(() => {
      setIsAnimating(prev => !prev);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={`animated-logo-container ${className}`}>
      <svg
        className="animated-logo"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="OWLmΔrk Animated Logo"
      >
        {/* Outer glow circle */}
        <circle
          className="logo-glow"
          cx="100"
          cy="100"
          r="90"
          fill="none"
          stroke="url(#glowGradient)"
          strokeWidth="2"
        />
        
        {/* Rotating accent ring */}
        <circle
          className="logo-ring"
          cx="100"
          cy="100"
          r="85"
          fill="none"
          stroke="url(#accentGradient)"
          strokeWidth="3"
          strokeDasharray="20 10"
        />

        {/* Main owl shape */}
        <g className="logo-owl" transform="translate(100, 100)">
          {/* Owl body */}
          <ellipse
            cx="0"
            cy="10"
            rx="35"
            ry="45"
            fill="url(#bodyGradient)"
            className="owl-body"
          />
          
          {/* Owl eyes */}
          <g className="owl-eyes">
            <circle cx="-15" cy="-5" r="12" fill="white" className="eye-white eye-left" />
            <circle cx="15" cy="-5" r="12" fill="white" className="eye-white eye-right" />
            <circle cx="-15" cy="-5" r="6" fill="#667eea" className="eye-pupil pupil-left" />
            <circle cx="15" cy="-5" r="6" fill="#667eea" className="eye-pupil pupil-right" />
            <circle cx="-13" cy="-7" r="2" fill="white" className="eye-shine" />
            <circle cx="17" cy="-7" r="2" fill="white" className="eye-shine" />
          </g>
          
          {/* Owl beak */}
          <path
            d="M -3,5 L 0,10 L 3,5 Z"
            fill="#ffd700"
            className="owl-beak"
          />
          
          {/* Owl ears/tufts */}
          <path
            d="M -30,-25 L -35,-45 L -25,-40 Z"
            fill="url(#bodyGradient)"
            className="owl-tuft owl-tuft-left"
          />
          <path
            d="M 30,-25 L 35,-45 L 25,-40 Z"
            fill="url(#bodyGradient)"
            className="owl-tuft owl-tuft-right"
          />
          
          {/* Wings */}
          <ellipse
            cx="-40"
            cy="15"
            rx="15"
            ry="25"
            fill="url(#wingGradient)"
            className="owl-wing owl-wing-left"
            transform="rotate(-20)"
          />
          <ellipse
            cx="40"
            cy="15"
            rx="15"
            ry="25"
            fill="url(#wingGradient)"
            className="owl-wing owl-wing-right"
            transform="rotate(20)"
          />
        </g>

        {/* Delta symbol */}
        <g className="logo-delta" transform="translate(100, 155)">
          <path
            d="M -8,0 L 0,-12 L 8,0 Z"
            fill="url(#deltaGradient)"
            stroke="white"
            strokeWidth="1"
          />
        </g>

        {/* Floating particles */}
        <g className="logo-particles">
          <circle cx="30" cy="40" r="2" fill="#ffd700" className="particle particle-1" opacity="0.6" />
          <circle cx="170" cy="60" r="1.5" fill="#f093fb" className="particle particle-2" opacity="0.5" />
          <circle cx="50" cy="150" r="2" fill="#667eea" className="particle particle-3" opacity="0.7" />
          <circle cx="150" cy="140" r="1.5" fill="#ffd700" className="particle particle-4" opacity="0.5" />
          <circle cx="180" cy="120" r="2" fill="#f093fb" className="particle particle-5" opacity="0.6" />
          <circle cx="20" cy="100" r="1.5" fill="#667eea" className="particle particle-6" opacity="0.4" />
        </g>

        {/* Gradients */}
        <defs>
          <linearGradient id="glowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#667eea" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#f093fb" stopOpacity="0.6" />
          </linearGradient>
          
          <linearGradient id="accentGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffd700" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#f093fb" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#667eea" stopOpacity="0.9" />
          </linearGradient>
          
          <linearGradient id="bodyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#764ba2" />
            <stop offset="100%" stopColor="#667eea" />
          </linearGradient>
          
          <linearGradient id="wingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#667eea" />
            <stop offset="100%" stopColor="#764ba2" />
          </linearGradient>
          
          <linearGradient id="deltaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffd700" />
            <stop offset="100%" stopColor="#f093fb" />
          </linearGradient>
        </defs>
      </svg>
      
      <div className="logo-text">
        <span className="logo-text-main">OWLm</span>
        <span className="logo-text-delta">Δ</span>
        <span className="logo-text-main">rk</span>
      </div>
    </div>
  );
}
