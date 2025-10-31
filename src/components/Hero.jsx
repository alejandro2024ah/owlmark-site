// Hero.jsx
import React from "react";
import AnimatedLogo from "./AnimatedLogo";
import FloatingElements from "./FloatingElements";
import heroBg from "../assets/hero.jpg";

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
        <FloatingElements />
      </div>

      <div className="hero-content">
        <AnimatedLogo />
        <h1 id="hero-title" className="sr-only">OWLmΔrk</h1>
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
