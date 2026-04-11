"use client";
import { MessageCircle, Bolt } from "lucide-react";
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
                display: "inline-flex", alignItems: "center", gap: 6,
              }}>
                <Bolt size={12} /> Limited spots available
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
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.06-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                 {secondaryCta || "WhatsApp Us Now"}
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
