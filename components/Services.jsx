"use client";
import Link from "next/link";
import { siteData } from "@/data/siteData";

export default function Services({ preview = false }) {
  const { services } = siteData;
  const displayed = preview ? services.slice(0, 4) : services;

  return (
    <section style={{ padding: "100px 0", background: "var(--bg-secondary)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 60, flexWrap: "wrap", gap: 24 }}>
          <div>

            <h2 style={{ fontSize: "clamp(34px, 5vw, 52px)", lineHeight: 1.1, maxWidth: 500 }}>
              Services built to<br />
              <span className="gradient-text">drive results</span>
            </h2>
          </div>
          {preview && (
            <Link href="/services" className="btn-secondary">
              View All Services →
            </Link>
          )}
          {!preview && (
            <p style={{ color: "var(--text-secondary)", maxWidth: 320, fontSize: 15, lineHeight: 1.7 }}>
              From idea to production — we handle design, engineering, and deployment so you can focus on your business.
            </p>
          )}
        </div>

        {/* Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: preview ? "repeat(2, 1fr)" : "repeat(3, 1fr)",
          gap: 1,
          border: "1px solid var(--border)",
          borderRadius: 16,
          overflow: "hidden",
        }} className="services-grid">
          {displayed.map((s, i) => (
            <div
              key={s.title}
              className="card-hover"
              style={{
                padding: "36px 32px",
                background: "var(--bg-card)",
                borderRight: "1px solid var(--border)",
                borderBottom: "1px solid var(--border)",
                cursor: "default",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Hover glow */}
              <div style={{
                position: "absolute", top: 0, left: 0, right: 0, height: 2,
                background: "linear-gradient(90deg, transparent, var(--amber), transparent)",
                opacity: 0, transition: "opacity 0.3s",
              }} className="top-border" />

              <div style={{
                width: 52, height: 52, borderRadius: 12,
                background: "var(--amber-dim)", border: "1px solid rgba(245,158,11,0.18)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 24, marginBottom: 20,
              }}>
                {s.icon}
              </div>
              <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 10, fontFamily: "'Outfit', sans-serif" }}>{s.title}</h3>
              <p style={{ color: "var(--text-secondary)", fontSize: 14, lineHeight: 1.7, marginBottom: 20 }}>{s.description}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {s.features.map((f) => (
                  <span key={f} style={{
                    fontSize: 11, fontWeight: 600,
                    color: "var(--text-muted)",
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid var(--border)",
                    padding: "3px 9px", borderRadius: 100,
                    fontFamily: "'Outfit', sans-serif", letterSpacing: "0.02em",
                  }}>{f}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {preview && (
          <div style={{ textAlign: "center", marginTop: 40 }}>
            <Link href="/services" className="btn-primary">
              Explore All Services + Pricing →
            </Link>
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 900px) {
          .services-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 560px) {
          .services-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
