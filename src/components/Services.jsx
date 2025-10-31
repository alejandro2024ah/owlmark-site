import React from "react";
import ServiceCard from "./ServiceCard";

const services = [
  {
    icon: "🎯",
    title: "Digital Strategy",
    description: "Comprehensive digital marketing strategies tailored to your business goals and target audience."
  },
  {
    icon: "🔍",
    title: "SEO Optimization",
    description: "Improve your search rankings and organic traffic with advanced SEO techniques and best practices."
  },
  {
    icon: "📱",
    title: "Social Media Marketing",
    description: "Build engaging social media presence across platforms to connect with your audience."
  },
  {
    icon: "✏️",
    title: "Content Creation",
    description: "Compelling content that tells your story and resonates with your target market."
  },
  {
    icon: "📊",
    title: "Analytics & Reporting",
    description: "Data-driven insights and comprehensive reporting to track performance and ROI."
  },
  {
    icon: "🚀",
    title: "Performance Marketing",
    description: "Results-focused campaigns that maximize conversions and minimize acquisition costs."
  }
];

export default function Services() {
  return (
    <section id="services" className="section" aria-labelledby="services-title">
      <div className="container">
        <div className="text-center mb-5">
          <h2 id="services-title">Our Services</h2>
          <p>Comprehensive marketing solutions designed for modern businesses</p>
        </div>
        <div className="grid grid-3">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              index={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}