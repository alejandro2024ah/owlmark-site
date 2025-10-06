import React, { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <section id="contact" className="contact" aria-labelledby="contact-heading">
      <h2 id="contact-heading">Contact Us</h2>
      <p className="section-lead">Let’s explore how we can accelerate your growth.</p>
      <form
        className="contact-form"
        onSubmit={(e) => {
          e.preventDefault();
          setSubmitted(true);
          setTimeout(() => setSubmitted(false), 6000);
          e.target.reset();
        }}
        noValidate
      >
        <div className="form-field">
          <label htmlFor="name">Name<span aria-hidden="true"> *</span></label>
          <input id="name" name="name" type="text" required autoComplete="name" />
        </div>
        <div className="form-field">
          <label htmlFor="email">Email<span aria-hidden="true"> *</span></label>
            <input id="email" name="email" type="email" required autoComplete="email" />
        </div>
        <div className="form-field">
          <label htmlFor="message">Message<span aria-hidden="true"> *</span></label>
          <textarea id="message" name="message" rows="5" required />
        </div>
        <button type="submit" className="cta cta--primary cta--wide">
          Send Message
        </button>
        {submitted && (
          <div className="form-success" role="status">
            Thank you! We will contact you soon.
          </div>
        )}
      </form>
    </section>
  );
}