"use client";
import { useEffect, useRef } from "react";
import { siteData } from "@/data/siteData";

export default function Hero() {
  const { hero, brand } = siteData;
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    
    const orb1 = el.querySelector(".orb1");
    const orb2 = el.querySelector(".orb2");
    let ticking = false;

    // Parallax on mouse move
    const handler = (e) => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const x = (e.clientX / window.innerWidth - 0.5) * 30;
          const y = (e.clientY / window.innerHeight - 0.5) * 20;
          if (orb1) orb1.style.transform = `translate(${x * 0.6}px, ${y * 0.6}px)`;
          if (orb2) orb2.style.transform = `translate(${-x * 0.4}px, ${-y * 0.4}px)`;
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("mousemove", handler, { passive: true });
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  return (
    <section ref={ref} className="grid-bg" style={{
      minHeight: "100vh", display: "flex", alignItems: "center",
      position: "relative", overflow: "hidden", paddingTop: 100, paddingBottom: 80,
    }}>
      {/* Ambient orbs */}
      <div className="orb1" style={{
        position: "absolute", width: 600, height: 600,
        borderRadius: "50%", top: "-100px", right: "-100px",
        background: "radial-gradient(circle, rgba(245,158,11,0.08) 0%, transparent 70%)",
        transition: "transform 0.8s cubic-bezier(0.23,1,0.32,1)",
        pointerEvents: "none",
        willChange: "transform",
      }} />
      <div className="orb2" style={{
        position: "absolute", width: 500, height: 500,
        borderRadius: "50%", bottom: "-80px", left: "-80px",
        background: "radial-gradient(circle, rgba(245,158,11,0.05) 0%, transparent 70%)",
        transition: "transform 1s cubic-bezier(0.23,1,0.32,1)",
        pointerEvents: "none",
        willChange: "transform",
      }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 2, width: "100%" }}>
        {/* Badge */}
        

        {/* Heading */}
        <div style={{ marginBottom: 28 }}>
          <h1 style={{
            fontFamily: "'Outfit', sans-serif", fontWeight: 800,
            fontSize: "clamp(56px, 9vw, 108px)", lineHeight: 0.95,
            letterSpacing: "-0.04em",
            opacity: 0, animation: "fadeUp 0.7s 0.2s ease forwards",
          }}>
            {hero.heading}
          </h1>
          <h1 style={{
            fontFamily: "'Outfit', sans-serif", fontWeight: 800,
            fontSize: "clamp(56px, 9vw, 108px)", lineHeight: 0.95,
            letterSpacing: "-0.04em",
            opacity: 0, animation: "fadeUp 0.7s 0.3s ease forwards",
          }} className="gradient-text">
            {hero.headingAccent}
          </h1>
        </div>

        {/* Sub-heading + CTAs in a two-col layout */}
        <div style={{
          display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "flex-start",
          opacity: 0, animation: "fadeUp 0.7s 0.45s ease forwards",
        }} className="hero-sub-grid">
          <p style={{
            color: "var(--text-secondary)", fontSize: "clamp(16px, 2vw, 19px)",
            lineHeight: 1.65, fontWeight: 300,
          }}>
            {hero.subheading}
          </p>
          <div>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 28 }}>
              <a href="/contact" className="btn-primary">
                {hero.cta} →
              </a>
              <a href="/projects" className="btn-secondary">
                {hero.ctaSecondary}
              </a>
            </div>
            {/* Trust signals */}
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              {["✓ No contracts", "✓ Free consultation", "✓ 4h response time"].map((t) => (
                <span key={t} style={{ fontSize: 13, color: "var(--text-muted)", fontWeight: 500 }}>{t}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div style={{
          display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 1,
          marginTop: 72, borderTop: "1px solid var(--border)",
          opacity: 0, animation: "fadeUp 0.7s 0.6s ease forwards",
        }} className="stats-grid">
          {hero.stats.map((s, i) => (
            <div key={i} style={{
              padding: "32px 24px", borderRight: i < 3 ? "1px solid var(--border)" : "none",
              display: "flex", flexDirection: "column", gap: 6,
            }} className="stat-item">
              <span style={{
                fontFamily: "'Outfit', sans-serif", fontWeight: 800,
                fontSize: "clamp(32px, 5vw, 48px)", color: "var(--amber)", lineHeight: 1,
              }}>{s.value}</span>
              <span style={{ color: "var(--text-secondary)", fontSize: 13, fontWeight: 400 }}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-sub-grid { grid-template-columns: 1fr !important; gap: 24px !important; }
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .stat-item:nth-child(2) { border-right: none !important; }
          .stat-item:nth-child(1), .stat-item:nth-child(2) { border-bottom: 1px solid var(--border); }
        }
        @media (max-width: 480px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
