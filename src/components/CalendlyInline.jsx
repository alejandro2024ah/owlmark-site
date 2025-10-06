// src/components/CalendlyInline.jsx
import { useEffect, useRef, useState } from "react";

export default function CalendlyInline({
  url = "https://calendly.com/alejandro-owlmark",
  height = 820,
}) {
  const containerRef = useRef(null);
  const [ready, setReady] = useState(false);

  // Load Calendly assets exactly once
  useEffect(() => {
    const jsSrc = "https://assets.calendly.com/assets/external/widget.js";
    const cssHref = "https://assets.calendly.com/assets/external/widget.css";

    // Inject CSS once
    if (!document.querySelector(`link[href="${cssHref}"]`)) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = cssHref;
      document.head.appendChild(link);
    }

    // If JS already present, nothing to do
    if (document.querySelector(`script[src="${jsSrc}"]`)) return;

    const script = document.createElement("script");
    script.src = jsSrc;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // no-op on unmount (we keep the script for future visits)
    };
  }, []);

  // Initialize the inline widget once the script is ready
  useEffect(() => {
    let cancelled = false;

    function init() {
      if (cancelled || !containerRef.current || !window.Calendly) return;

      // Clear any previous embed (useful in React Strict Mode)
      containerRef.current.innerHTML = "";

      window.Calendly.initInlineWidget({
        url,
        parentElement: containerRef.current,
        prefill: {},
        utm: {},
      });

      setReady(true);
    }

    // If Calendly is already on window, init immediately
    if (window.Calendly && typeof window.Calendly.initInlineWidget === "function") {
      init();
    } else {
      // Wait for the script to load
      const onLoad = () => init();
      // Find the script tag we injected above
      const script = document.querySelector(
        'script[src="https://assets.calendly.com/assets/external/widget.js"]'
      );
      if (script) {
        script.addEventListener("load", onLoad, { once: true });
      } else {
        // Fallback retry in case script tag is delayed by blockers
        const t = setInterval(() => {
          if (window.Calendly) {
            clearInterval(t);
            init();
          }
        }, 300);
      }
    }

    return () => {
      cancelled = true;
      // Clean the container to avoid duplicate if component remounts
      if (containerRef.current) containerRef.current.innerHTML = "";
    };
  }, [url]);

  return (
    <section id="book" className="section">
      <div className="container">
        <h2 className="mb-3">Book a Call</h2>

        <div
          ref={containerRef}
          style={{
            minWidth: 320,
            height,
            borderRadius: 14,
            overflow: "hidden",
            border: "1px solid rgba(15,27,45,.08)",
            boxShadow: "0 10px 24px rgba(15,27,45,.06)",
            background: "#fff",
          }}
        />

        {!ready && (
          <div style={{ textAlign: "center", marginTop: 12 }}>
            <a className="cta" href={url} target="_blank" rel="noreferrer">
              Open Calendly
            </a>
            <div style={{ marginTop: 8, color: "#6b7c93", fontSize: 14 }}>
              If the calendar doesn’t load here, click “Open Calendly”.
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
