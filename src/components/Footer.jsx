import React from "react";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-content">
          <div>
            <h3>OWLmΔrk</h3>
            <p>Elevating brands through strategic digital marketing solutions.</p>
          </div>
          
          <div>
            <h4>Services</h4>
            <div className="footer-links">
              <a href="#services">Digital Strategy</a>
              <a href="#services">SEO Optimization</a>
              <a href="#services">Social Media Marketing</a>
              <a href="#services">Content Creation</a>
            </div>
          </div>
          
          <div>
            <h4>Company</h4>
            <div className="footer-links">
              <a href="#about">About Us</a>
              <a href="#gallery">Our Work</a>
              <a href="#testimonials">Testimonials</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
          
          <div>
            <h4>Connect</h4>
            <div className="footer-links">
              <a href="#contact">Get Started</a>
              <a href="#book">Book a Call</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} OWLmΔrk. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}