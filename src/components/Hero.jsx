import React from "react";
import logoMark from "../assets/logo.png";
import heroPoster from "../assets/hero.jpg";

const HERO_VIDEO_SRC = "/videos/hero-intro.mp4";

export default function Hero() {
  return (
    <section id="top" className="hero" aria-labelledby="hero-title">
      <div className="hero-media" aria-hidden="true">
        <video
          className="hero-video"
          autoPlay
          loop
          muted
          playsInline
          poster={heroPoster}
          aria-hidden="true"
        >
          <source src={HERO_VIDEO_SRC} type="video/mp4" />
        </video>
        <img
          src={heroPoster}
          alt=""
          className="hero-image"
          loading="eager"
          aria-hidden="true"
        />
        <div className="hero-media-overlay" />
      </div>

      <div className="hero-content container">
        <div className="hero-badge">
          <img src={logoMark} alt="" aria-hidden="true" />
          <span>OWLmΔrk Studio</span>
        </div>

        <h1 id="hero-title" className="hero-title">
          Story-driven marketing that moves ambitious brands forward
        </h1>

        <p className="hero-subtitle">
          We blend cinematic storytelling with data-backed growth strategies to help you launch bold ideas, scale faster, and earn lasting customer loyalty.
        </p>

        <div className="hero-actions">
          <a href="#contact" className="cta">Start a project</a>
          <a href="#services" className="cta cta--secondary">Explore services</a>
        </div>

        <dl className="hero-stats" aria-label="Key OWLmΔrk results">
          <div>
            <dt>Average ROI</dt>
            <dd>4.6× campaign lift</dd>
          </div>
          <div>
            <dt>Client retention</dt>
            <dd>92% partnerships</dd>
          </div>
          <div>
            <dt>Launches delivered</dt>
            <dd>75+ global rollouts</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
