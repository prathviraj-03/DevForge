import { Lock, Sparkles, Zap } from "lucide-react";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import { siteData } from "@/data/siteData";

// Tech marquee items
const techItems = [
  "Next.js", "React", "Node.js", "Python", "TypeScript",
  "MongoDB", "PostgreSQL", "AWS", "Docker", "React Native",
  "GraphQL", "Redis", "Tailwind CSS", "Firebase", "Stripe",
];

export default function Home() {
  const { hero } = siteData;

  return (
    <>
      <Hero />

      {/* Tech marquee */}
      <div style={{
        borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)",
        padding: "20px 0", overflow: "hidden", background: "var(--bg-secondary)",
      }}>
        <div className="marquee-track" style={{ gap: 48 }}>
          {[...techItems, ...techItems].map((t, i) => (
            <span key={i} style={{
              color: "var(--text-muted)", fontSize: 13, fontWeight: 700,
              fontFamily: "'Outfit', sans-serif", letterSpacing: "0.06em",
              textTransform: "uppercase", whiteSpace: "nowrap", flexShrink: 0,
              display: "flex", alignItems: "center", gap: 48,
            }}>
              {t}
              <span style={{ color: "var(--amber)", fontSize: 8 }}>◆</span>
            </span>
          ))}
        </div>
      </div>

      {/* Why us strip */}
      <section style={{ padding: "80px 24px", borderBottom: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 1, border: "1px solid var(--border)", borderRadius: 14, overflow: "hidden" }} className="why-grid">
            {[
              { icon: <Zap size={24} />, title: "Fast Delivery", desc: "Most projects delivered within 2–4 weeks. We move quickly without cutting corners." },
              { icon: <Sparkles size={24} />, title: "Premium Quality", desc: "Enterprise-grade code, design, and architecture at startup-friendly prices." },
            ].map((item, i) => (
              <div key={i} className="card-hover" style={{
                padding: "36px 32px", background: "var(--bg-card)",
                borderRight: i < 1 ? "1px solid var(--border)" : "none",
                display: "flex", gap: 20, alignItems: "flex-start",
              }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 10, background: "var(--amber-dim)",
                  border: "1px solid rgba(245,158,11,0.18)", display: "flex",
                  alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0,
                }}>{item.icon}</div>
                <div>
                  <h3 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: 17, marginBottom: 8 }}>{item.title}</h3>
                  <p style={{ color: "var(--text-secondary)", fontSize: 14, lineHeight: 1.65 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 768px) { .why-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>

      <Services preview />
      <Projects preview />
      <Testimonials />
      <CTA />
    </>
  );
}
