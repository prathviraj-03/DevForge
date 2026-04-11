"use client";
import { siteData } from "@/data/siteData";

export default function CTA({ title, subtitle, primaryCta, secondaryCta }) {
  const { contact, hero } = siteData;

  return (
    <section style={{ padding: "80px 24px" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <div style={{
          background: "linear-gradient(135deg, rgba(245,158,11,0.1) 0%, rgba(245,158,11,0.04) 50%, rgba(245,158,11,0.08) 100%)",
          border: "1px solid rgba(245,158,11,0.2)",
          borderRadius: 24, padding: "64px 48px", textAlign: "center",
          position: "relative", overflow: "hidden",
        }}>
          {/* Decorative elements */}
          <div style={{
            position: "absolute", top: -60, right: -60, width: 240, height: 240,
            borderRadius: "50%", background: "radial-gradient(circle, rgba(245,158,11,0.12) 0%, transparent 70%)",
            pointerEvents: "none",
          }} />
          <div style={{
            position: "absolute", bottom: -40, left: -40, width: 180, height: 180,
            borderRadius: "50%", background: "radial-gradient(circle, rgba(245,158,11,0.08) 0%, transparent 70%)",
            pointerEvents: "none",
          }} />

          <div style={{ position: "relative", zIndex: 1 }}>
            {/* Badge */}
            <div style={{ marginBottom: 24 }}>
              <span style={{
                background: "var(--amber)", color: "#000", padding: "5px 14px",
                borderRadius: 100, fontSize: 12, fontWeight: 800,
                fontFamily: "'Outfit', sans-serif", letterSpacing: "0.06em", textTransform: "uppercase",
              }}>
                ⚡ Limited spots available
              </span>
            </div>

            <h2 style={{
              fontSize: "clamp(30px, 5vw, 52px)", lineHeight: 1.1,
              marginBottom: 18, fontFamily: "'Outfit', sans-serif", fontWeight: 800,
            }}>
              {title || "Ready to build\nsomething great?"}
            </h2>
            <p style={{ color: "var(--text-secondary)", fontSize: 17, lineHeight: 1.7, marginBottom: 36, maxWidth: 520, margin: "0 auto 36px" }}>
              {subtitle || `${hero.stats[0].value} products shipped. Join the startups that chose speed, quality, and transparency.`}
            </p>

            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
              <a href="/contact" className="btn-primary" style={{ fontSize: 16, padding: "15px 32px" }}>
                {primaryCta || "Get a Free Consultation →"}
              </a>
              <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer"
                style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  background: "rgba(37,211,102,0.12)", border: "1px solid rgba(37,211,102,0.3)",
                  color: "#25D366", padding: "14px 28px", borderRadius: 8,
                  fontSize: 15, fontWeight: 700, textDecoration: "none",
                  fontFamily: "'Outfit', sans-serif", transition: "all 0.2s",
                }}
              >
                💬 {secondaryCta || "WhatsApp Us Now"}
              </a>
            </div>

            {/* Trust micro-copy */}
            <p style={{ color: "var(--text-muted)", fontSize: 13, marginTop: 24 }}>
              {contact.responseTime} · No spam · Free project estimate
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
