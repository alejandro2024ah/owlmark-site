import React from "react";

const testimonials = [
  {
    quote: "OWLmΔrk transformed our online presence completely. Our website traffic increased by 300% in just 3 months!",
    author: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    avatar: "SJ"
  },
  {
    quote: "The team's strategic approach and attention to detail helped us achieve our marketing goals faster than we imagined.",
    author: "Mike Chen",
    role: "Marketing Director, GrowthCo",
    avatar: "MC"
  },
  {
    quote: "Working with OWLmΔrk was a game-changer. Their creative solutions and data-driven strategies delivered outstanding results.",
    author: "Emily Rodriguez",
    role: "Founder, CreativeStudio",
    avatar: "ER"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section" aria-labelledby="testimonials-title">
      <div className="container">
        <div className="text-center mb-5">
          <h2 id="testimonials-title">What Our Clients Say</h2>
          <p>Don't just take our word for it</p>
        </div>
        <div className="grid grid-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card">
              <blockquote style={{ fontSize: '1.1rem', fontStyle: 'italic', marginBottom: '1rem' }}>
                "{testimonial.quote}"
              </blockquote>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ 
                  width: '3rem', 
                  height: '3rem', 
                  borderRadius: '50%', 
                  background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontWeight: 'bold'
                }}>
                  {testimonial.avatar}
                </div>
                <div>
                  <div style={{ fontWeight: '600' }}>{testimonial.author}</div>
                  <div style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}