import React from "react";

const pillars = [
  {
    title: "Human-first strategy",
    description:
      "Work directly with senior strategists who translate your business goals into bold marketing roadmaps that resonate with real people.",
    icon: "🤝"
  },
  {
    title: "Cinematic storytelling",
    description:
      "From launch films to always-on content, we craft immersive narratives that turn curious scrollers into loyal advocates.",
    icon: "🎬"
  },
  {
    title: "Full-funnel performance",
    description:
      "Measure what matters. Every campaign is optimized in real time with experimentation, analytics, and clear outcomes.",
    icon: "📊"
  }
];

export default function About() {
  return (
    <section id="about" className="section about" aria-labelledby="about-title">
      <div className="container about-layout">
        <div className="about-intro">
          <span className="eyebrow">About OWLmΔrk</span>
          <h2 id="about-title">A creative performance studio for ambitious teams</h2>
          <p>
            OWLmΔrk is a hybrid marketing collective built for brands that refuse to settle. We merge deep research, design thinking, and agile media buying so you can move from idea to impact faster than ever.
          </p>
          <p className="about-highlight">
            Whether you need a full product launch, a campaign refresh, or a dedicated growth partner, we’re here to help you find your signal and amplify it.
          </p>
        </div>

        <div className="about-pillars">
          {pillars.map((pillar) => (
            <article className="about-card" key={pillar.title}>
              <span className="about-card-icon" aria-hidden="true">{pillar.icon}</span>
              <h3>{pillar.title}</h3>
              <p>{pillar.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
