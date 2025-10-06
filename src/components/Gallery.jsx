import React from "react";

const galleryItems = [
  {
    src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80",
    alt: "Team collaboration and strategy session",
    title: "Strategy & Planning"
  },
  {
    src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80",
    alt: "Modern digital workspace with analytics",
    title: "Digital Transformation"
  },
  {
    src: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80",
    alt: "Creative brainstorming session",
    title: "Creative Innovation"
  },
  {
    src: "https://images.unsplash.com/photo-1482062364825-616fd23b8fc1?auto=format&fit=crop&w=600&q=80",
    alt: "Marketing analytics and performance dashboard",
    title: "Data-Driven Results"
  }
];

export default function Gallery() {
  return (
    <section id="gallery" className="section" aria-labelledby="gallery-title">
      <div className="container">
        <div className="text-center mb-5">
          <h2 id="gallery-title">Our Work</h2>
          <p>Real results from real clients</p>
        </div>
        <div className="grid grid-2">
          {galleryItems.map((item, index) => (
            <div key={index} className="gallery-item">
              <img 
                src={item.src} 
                alt={item.alt} 
                loading="lazy" 
                width="400" 
                height="300" 
              />
              <div className="gallery-overlay">
                <h3 style={{ color: 'white', margin: 0 }}>{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}