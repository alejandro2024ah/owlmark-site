// Hero.jsx
import React, { useRef, useEffect } from "react";
import heroBg from "../assets/hero.jpg";
import logoImg from "../logo.png";

export default function Hero() {
  const videoRef = useRef(null);

  useEffect(() => {
    // Ensure video plays on mount
    if (videoRef.current) {
      videoRef.current.play().catch(err => {
        console.log("Video autoplay prevented:", err);
      });
    }
  }, []);

  return (
    <section className="hero" id="hero">
      {/* Video Background */}
      <div className="hero-bg-wrapper">
        <video
          ref={videoRef}
          className="hero-video"
          autoPlay
          loop
          muted
          playsInline
          poster={heroBg}
        >
          {/* Using a premium abstract/tech video URL from Pexels */}
          <source 
            src="https://player.vimeo.com/external/370467553.hd.mp4?s=067e767bc3569c0ae4c4e97a413c8bc33d1d03c4&profile_id=174" 
            type="video/mp4" 
          />
          {/* Fallback to image if video doesn't load */}
          <img src={heroBg} alt="" className="hero-bg" />
        </video>
        <div className="hero-overlay"></div>
      </div>

      {/* Content */}
      <div className="container hero-content">
        <div className="hero-logo-wrap">
          <img src={logoImg} alt="OWLmΔrk Logo" className="hero-logo" />
        </div>
        <h1 className="hero-title sr-only">OWLmΔrk</h1>
        <p className="hero-subtitle">
          Premium Design & Development Solutions
        </p>
        <div className="hero-actions">
          <a href="#contact" className="cta">
            Get Started
          </a>
          <a href="#about" className="cta cta--secondary">
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
