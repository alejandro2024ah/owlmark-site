// ServiceCard.jsx - Interactive service card with animated icon
import React, { useState } from "react";
import "../styles/ServiceCard.css";

export default function ServiceCard({ icon, title, description, index }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`card service-card ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="card-icon-wrapper">
        <div className="card-icon service-icon">{icon}</div>
        <div className="icon-particles">
          <span className="icon-particle"></span>
          <span className="icon-particle"></span>
          <span className="icon-particle"></span>
        </div>
      </div>
      <h3 className="service-title">{title}</h3>
      <p className="service-description">{description}</p>
      <div className="service-hover-indicator">
        <span>Learn more →</span>
      </div>
    </div>
  );
}
