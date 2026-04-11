"use client";
import { siteData } from "@/data/siteData";

export default function Testimonials() {
  const { testimonials } = siteData;
  const doubled = [...testimonials, ...testimonials]; // for marquee effect

  return (
    <section style={{ padding: "100px 0", background: "var(--bg-secondary)", overflow: "hidden" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", marginBottom: 52 }}>
        <div style={{ textAlign: "center" }}>

          <h2 style={{ fontSize: "clamp(34px, 5vw, 52px)", lineHeight: 1.1, marginBottom: 12 }}>
            Loved by founders
          </h2>
          <p style={{ color: "var(--text-secondary)", fontSize: 16 }}>
            {siteData.hero.stats[1].value} client satisfaction across {siteData.hero.stats[0].value} projects
          </p>
        </div>
      </div>

      {/* Marquee track */}
      <div style={{ overflow: "hidden", position: "relative" }}>
        {/* Fade edges */}
        <div style={{
          position: "absolute", left: 0, top: 0, bottom: 0, width: 120, zIndex: 2,
          background: "linear-gradient(90deg, var(--bg-secondary), transparent)",
        }} />
        <div style={{
          position: "absolute", right: 0, top: 0, bottom: 0, width: 120, zIndex: 2,
          background: "linear-gradient(270deg, var(--bg-secondary), transparent)",
        }} />

        <div className="marquee-track" style={{ gap: 20, padding: "8px 0" }}>
          {doubled.map((t, i) => (
            <TestimonialCard key={i} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ t, static: isStatic }) {
  return (
    <div
      className={isStatic ? "card card-hover" : ""}
      style={{
        minWidth: isStatic ? undefined : 360,
        maxWidth: isStatic ? undefined : 380,
        padding: "28px",
        background: isStatic ? "var(--bg-card)" : "var(--bg-card)",
        border: "1px solid var(--border)",
        borderRadius: 14,
        flexShrink: 0,
        display: "flex",
        flexDirection: "column",
        gap: 16,
      }}
    >
      {/* Stars */}
      <div className="stars" style={{ fontSize: 14 }}>{"★".repeat(t.rating)}</div>

      {/* Quote */}
      <p style={{ color: "var(--text-primary)", fontSize: 15, lineHeight: 1.7, fontStyle: "italic", fontWeight: 300 }}>
        "{t.feedback}"
      </p>

      {/* Project tag */}
      <span style={{
        fontSize: 11, fontWeight: 700, color: "var(--amber)", fontFamily: "'Outfit', sans-serif",
        letterSpacing: "0.06em", textTransform: "uppercase",
      }}>
        ↳ {t.project}
      </span>

      {/* Author */}
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 4 }}>
        <div className="avatar" style={{ width: 42, height: 42, fontSize: 13 }}>{t.avatar}</div>
        <div>
          <p style={{ fontWeight: 700, fontFamily: "'Outfit', sans-serif", fontSize: 14 }}>{t.name}</p>
          <p style={{ color: "var(--text-muted)", fontSize: 12 }}>{t.role}</p>
        </div>
      </div>
    </div>
  );
}
