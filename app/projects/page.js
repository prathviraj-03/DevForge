"use client";
import CTA from "@/components/CTA";
import { siteData } from "@/data/siteData";


const gradientMap = {
  "from-amber-500 to-orange-600": "#f59e0b, #ea580c",
  "from-emerald-500 to-teal-600": "#10b981, #0d9488",
  "from-purple-500 to-pink-600": "#a855f7, #db2777",
  "from-blue-500 to-cyan-600": "#3b82f6, #0891b2",
  "from-rose-500 to-red-600": "#f43f5e, #dc2626",
  "from-violet-500 to-indigo-600": "#8b5cf6, #4f46e5",
};

export default function ProjectsPage() {
  const { projects, hero } = siteData;

  // Get unique categories
  const categories = ["All", ...new Set(projects.map((p) => p.category))];

  return (
    <>
      {/* Hero */}
      <section className="grid-bg" style={{ padding: "140px 24px 80px", borderBottom: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 2 }}>
          <span className="section-badge">✦ Portfolio</span>
          <h1 style={{
            fontFamily: "'Outfit', sans-serif", fontWeight: 800,
            fontSize: "clamp(48px, 8vw, 84px)", lineHeight: 1.05,
            letterSpacing: "-0.04em", marginBottom: 24,
          }}>Our Proven Results</h1>
          <p style={{
            maxWidth: 600, margin: "0 auto", color: "var(--text-secondary)",
            fontSize: "clamp(16px, 2vw, 19px)", lineHeight: 1.65, fontWeight: 300,
          }}>
            Explore how we've helped forward-thinking companies scale their digital footprint and exceed business goals.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section style={{ padding: "100px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div className="projects-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 32 }}>
            {projects.map((p, i) => (
              <div key={i} className="card card-hover" style={{
                display: "flex", flexDirection: "column", overflow: "hidden",
                gridColumn: i === 0 ? "span 3" : "auto", display: i === 0 ? "flex" : "flex",
                flexDirection: i === 0 ? "row" : "column",
                border: i === 0 ? "1px solid var(--amber)" : "1px solid var(--border)",
                background: i === 0 ? "rgba(245,158,11,0.015)" : "var(--bg-card)",
              }}>
                {/* Decorative header */}
                <div style={{
                  height: i === 0 ? "auto" : 200, width: i === 0 ? "45%" : "100%", position: "relative",
                  background: `linear-gradient(135deg, ${getGradientColors(p.color)})`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <div className="glass" style={{
                    padding: "16px 32px", borderRadius: 100, fontSize: i === 0 ? 15 : 13,
                    fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#fff"
                  }}>
                    {p.client}
                  </div>
                </div>

                <div style={{ padding: i === 0 ? "56px 48px" : "28px 28px 26px", flex: 1, display: "flex", flexDirection: "column" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: i === 0 ? 20 : 16 }}>
                    <span className="category-badge">{p.category}</span>
                    <span style={{ fontSize: 13, color: "var(--text-muted)", fontWeight: 500 }}>{p.year}</span>
                  </div>
                  
                  <h3 style={{ fontSize: i === 0 ? 24 : 19, fontWeight: 700, marginBottom: 10, fontFamily: "'Outfit', sans-serif" }}>{p.title}</h3>
                  <p style={{ color: "var(--text-secondary)", fontSize: 14, lineHeight: 1.7, marginBottom: 20, flex: 1 }}>{p.description}</p>

                  {/* Result */}
                  <div style={{
                    background: "rgba(245,158,11,0.06)", border: "1px solid rgba(245,158,11,0.15)",
                    borderRadius: 8, padding: "10px 14px", marginBottom: 18,
                    fontSize: 13, color: "var(--amber)", fontWeight: 600,
                    display: "flex", alignItems: "center", gap: 6,
                  }}>
                    📈 {p.result}
                  </div>

                  {/* Tech + CTA row */}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                      {p.tech.map((t) => (
                        <span key={t} className="skill-pill">{t}</span>
                      ))}
                    </div>
                    <a href="/contact" style={{
                      fontSize: 12, fontWeight: 700, color: "var(--amber)",
                      textDecoration: "none", fontFamily: "'Outfit', sans-serif",
                      display: "flex", alignItems: "center", gap: 4,
                      whiteSpace: "nowrap",
                    }}>
                      Build similar →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <style>{`
            @media (max-width: 900px) {
              .projects-grid { grid-template-columns: repeat(2, 1fr) !important; }
              .projects-grid > div:first-child { grid-column: span 2 !important; }
            }
            @media (max-width: 580px) {
              .projects-grid { grid-template-columns: 1fr !important; }
              .projects-grid > div:first-child { grid-column: span 1 !important; }
            }
          `}</style>
        </div>
      </section>

      {/* Industries */}
      <section style={{ padding: "80px 24px", background: "var(--bg-secondary)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>

            <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", lineHeight: 1.1 }}>We've worked across</h2>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 12 }}>
            {[
              "🏦 FinTech", "🏥 HealthTech", "🎓 EdTech", "🛒 E-Commerce",
              "🚚 Logistics", "🤝 HR Tech", "🏗️ PropTech", "🎮 Gaming",
              "✈️ Travel", "🍔 FoodTech", "⚖️ LegalTech", "🌿 GreenTech",
            ].map((ind) => (
              <span key={ind} className="card card-hover" style={{
                padding: "12px 20px", fontSize: 14, fontWeight: 600,
                fontFamily: "'Outfit', sans-serif", cursor: "default",
              }}>
                {ind}
              </span>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Have a project in mind?"
        subtitle="Tell us what you're building. We'll give you a free estimate and timeline within 48 hours."
        primaryCta="Get a Free Estimate →"
      />
    </>
  );
}

function getGradientColors(cls) {
  const map = {
    "from-amber-500 to-orange-600": "#f59e0b, #ea580c",
    "from-emerald-500 to-teal-600": "#10b981, #0d9488",
    "from-purple-500 to-pink-600": "#a855f7, #db2777",
    "from-blue-500 to-cyan-600": "#3b82f6, #0891b2",
    "from-rose-500 to-red-600": "#f43f5e, #dc2626",
    "from-violet-500 to-indigo-600": "#8b5cf6, #4f46e5",
  };
  return map[cls] || "#f59e0b, #ea580c";
}
