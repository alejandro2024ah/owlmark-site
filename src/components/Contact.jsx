import React, { useState } from "react";
import CalendlyInline from "./CalendlyInline";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    
    // Reset success message after 5 seconds
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="section" aria-labelledby="contact-title">
      <div className="container">
        <div className="grid grid-2">
          <div>
            <h2 id="contact-title">Get In Touch</h2>
            <p className="mb-4">
              Ready to take your marketing to the next level? Let's discuss your goals and create a strategy that drives results.
            </p>
            
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name" className="form-label">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                  required
                  autoComplete="name"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email" className="form-label">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  required
                  autoComplete="email"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message" className="form-label">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-textarea"
                  required
                  rows="5"
                ></textarea>
              </div>
              
              <button type="submit" className="cta">Send Message</button>
              
              {submitted && (
                <div style={{ 
                  marginTop: '1rem', 
                  padding: '1rem', 
                  background: 'var(--primary)', 
                  color: 'white', 
                  borderRadius: 'var(--radius)',
                  textAlign: 'center'
                }}>
                  Thank you! We'll get back to you soon.
                </div>
              )}
            </form>
          </div>
          
          <div>
            <h3>Schedule a Call</h3>
            <p className="mb-4">Prefer to speak directly? Book a consultation call with our experts.</p>
            <div className="calendly-container">
              <CalendlyInline />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}