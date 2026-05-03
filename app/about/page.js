"use client";
import { Target, Search, Bolt, ShieldCheck, TrendingUp } from "lucide-react";
import Team from "@/components/Team";
import CTA from "@/components/CTA";
import { siteData } from "@/data/siteData";


export default function AboutPage() {
  const { about, hero } = siteData;

  return (
    <>
      {/* Hero */}
      <section className="grid-bg" style={{ padding: "140px 24px 80px", borderBottom: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>

          <h1 style={{ fontSize: "clamp(44px, 7vw, 80px)", lineHeight: 1, marginBottom: 28, maxWidth: 700 }}>
            We build products<br />
            <span className="gradient-text">that actually ship.</span>
          </h1>
          <p style={{ color: "var(--text-secondary)", fontSize: "clamp(16px, 2vw, 19px)", lineHeight: 1.7, maxWidth: 560 }}>
            {about.mission}
          </p>
        </div>
      </section>

      {/* Mission / Vision */}
      <section style={{ padding: "80px 24px", borderBottom: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }} className="mv-grid">
            <div className="card" style={{ padding: "40px" }}>
              <div style={{ fontSize: 32, marginBottom: 20 }}><Target size={32} /></div>
              <h2 style={{ fontSize: 24, fontFamily: "'Outfit', sans-serif", marginBottom: 16 }}>Our Mission</h2>
              <p style={{ color: "var(--text-secondary)", lineHeight: 1.75, fontSize: 15 }}>{about.mission}</p>
            </div>
            <div className="card" style={{ padding: "40px", background: "linear-gradient(135deg, rgba(245,158,11,0.07), rgba(245,158,11,0.02))", border: "1px solid rgba(245,158,11,0.15)" }}>
              <div style={{ fontSize: 32, marginBottom: 20 }}><Search size={32} /></div>
              <h2 style={{ fontSize: 24, fontFamily: "'Outfit', sans-serif", marginBottom: 16 }}>Our Vision</h2>
              <p style={{ color: "var(--text-secondary)", lineHeight: 1.75, fontSize: 15 }}>{about.vision}</p>
            </div>
          </div>
          <style>{`@media (max-width: 640px) { .mv-grid { grid-template-columns: 1fr !important; } }`}</style>
        </div>
      </section>

      {/* Values */}
      <section style={{ padding: "80px 24px", borderBottom: "1px solid var(--border)", background: "var(--bg-secondary)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>

            <h2 style={{ fontSize: "clamp(30px, 4vw, 46px)", lineHeight: 1.1 }}>How we operate</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }} className="vals-grid">
            {about.values.map((v, i) => (
              <div key={v.title} className="card card-hover" style={{ padding: "36px 28px" }}>
                <div style={{ fontSize: 36, marginBottom: 18 }}>
                  {i === 0 ? <Bolt size={36} /> : i === 1 ? <ShieldCheck size={36} /> : <TrendingUp size={36} />}
                </div>
                <h3 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: 18, marginBottom: 10 }}>{v.title}</h3>
                <p style={{ color: "var(--text-secondary)", fontSize: 14, lineHeight: 1.7 }}>{v.desc}</p>
              </div>
            ))}
          </div>
          <style>{`@media (max-width: 768px) { .vals-grid { grid-template-columns: 1fr !important; } }`}</style>
        </div>
      </section>

      {/* Stats strip */}
      <section style={{ padding: "64px 24px", borderBottom: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 1, border: "1px solid var(--border)", borderRadius: 14, overflow: "hidden" }} className="about-stats">
            {hero.stats.map((s, i) => (
              <div key={i} style={{
                padding: "40px 24px", background: "var(--bg-card)",
                borderRight: i < 3 ? "1px solid var(--border)" : "none",
                textAlign: "center",
              }}>
                <div style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: 40, color: "var(--amber)", lineHeight: 1, marginBottom: 8 }}>{s.value}</div>
                <div style={{ color: "var(--text-secondary)", fontSize: 13 }}>{s.label}</div>
              </div>
            ))}
          </div>
          <style>{`
            @media (max-width: 640px) { .about-stats { grid-template-columns: repeat(2, 1fr) !important; } }
          `}</style>
        </div>
      </section>

      {/* <Team /> */}
      <CTA title="Work with us" subtitle="We take on a limited number of projects each month to ensure quality. Book your spot today." />
    </>
  );
}
