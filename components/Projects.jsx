import Link from "next/link";
import { siteData } from "@/data/siteData";

export default function Projects({ preview = false }) {
  const { projects } = siteData;
  const displayed = preview ? projects.slice(0, 3) : projects;

  return (
    <section style={{ padding: "100px 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 60, flexWrap: "wrap", gap: 24 }}>
          <div>
            <span className="section-badge">🏆 Our Work</span>
            <h2 style={{ fontSize: "clamp(34px, 5vw, 52px)", lineHeight: 1.1 }}>
              Projects that<br />
              <span className="gradient-text">move the needle</span>
            </h2>
          </div>
          {preview && (
            <Link href="/projects" className="btn-secondary">View All Projects →</Link>
          )}
        </div>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }} className="projects-grid">
          {displayed.map((p, i) => (
            <div
              key={p.title}
              className="card card-hover"
              style={{ overflow: "hidden", display: "flex", flexDirection: "column" }}
            >
              {/* Top color bar */}
              <div style={{
                height: 6,
                background: `linear-gradient(90deg, ${getGradientColors(p.color)})`,
              }} />

              <div style={{ padding: "28px 28px 24px", flex: 1, display: "flex", flexDirection: "column" }}>
                {/* Category + result */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
                  <span className="category-badge">{p.category}</span>
                </div>

                <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 10, fontFamily: "Syne, sans-serif" }}>{p.title}</h3>
                <p style={{ color: "var(--text-secondary)", fontSize: 14, lineHeight: 1.7, marginBottom: 20, flex: 1 }}>{p.description}</p>

                {/* Result callout */}
                <div style={{
                  background: "rgba(245,158,11,0.06)", border: "1px solid rgba(245,158,11,0.15)",
                  borderRadius: 8, padding: "10px 14px", marginBottom: 20,
                  fontSize: 13, color: "var(--amber)", fontWeight: 600,
                  display: "flex", alignItems: "center", gap: 6,
                }}>
                  📈 {p.result}
                </div>

                {/* Tech stack */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {p.tech.map((t) => (
                    <span key={t} className="skill-pill">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {preview && (
          <div style={{ textAlign: "center", marginTop: 44 }}>
            <Link href="/projects" className="btn-primary">See All {siteData.projects.length} Projects →</Link>
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 900px) { .projects-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 580px) { .projects-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
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
