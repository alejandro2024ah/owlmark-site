import React from "react";
import logo from "../assets/logo.svg";

const heroBg = "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1400&q=80";

export default function Hero() {
  return (
    <section id="top" className="hero" aria-labelledby="hero-title">
      <div className="hero-bg-wrapper">
        <img 
          src={heroBg} 
          alt="Beautiful mountain landscape representing growth and success" 
          className="hero-bg" 
          loading="eager" 
          fetchpriority="high" 
        />
        <div className="hero-overlay"></div>
      </div>

      <div className="hero-content">
        <img src={logo} alt="OWLmΔrk brand symbol" className="hero-logo" />
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