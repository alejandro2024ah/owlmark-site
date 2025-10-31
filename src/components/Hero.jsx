// Hero.jsx
import React from "react";
import heroBg from "../assets/hero.jpg";

export default function Hero() {
  return (
    <section id="top" className="hero hero-video" aria-labelledby="hero-title">
      <div className="hero-bg-wrapper">
        {/* Video background - falls back to static image if video not available */}
        <video 
          className="hero-video-bg"
          autoPlay
          loop
          muted
          playsInline
          poster={heroBg}
        >
          <source src="/assets/hero.mp4" type="video/mp4" />
          {/* Fallback to image if video fails */}
        </video>
        <img 
          src={heroBg} 
          alt="Beautiful mountain landscape representing growth and success" 
          className="hero-bg hero-bg-fallback" 
          loading="eager" 
          fetchpriority="high" 
        />
        <div className="hero-overlay"></div>
      </div>

      <div className="hero-content">
        <h1 id="hero-title" className="hero-title">OWLmΔrk</h1>
        <p className="hero-subtitle">
          Elevate your brand with strategic marketing solutions that drive real results
        </p>
        <div className="hero-actions">
          <a href="#contact" className="cta">Get Started</a>
          <a href="#services" className="cta cta--secondary">Our Services</a>
        </div>
      </div>
    </section>
  );
}
