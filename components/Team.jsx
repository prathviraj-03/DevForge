"use client";
import { siteData } from "@/data/siteData";

export default function Team() {
  const { team } = siteData;

  return (
    <section style={{ padding: "100px 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ textAlign: "center", marginBottom: 60 }}>

          <h2 style={{ fontSize: "clamp(34px, 5vw, 52px)", lineHeight: 1.1, marginBottom: 14 }}>
            Meet the people<br />
            <span className="gradient-text">behind your product</span>
          </h2>
          <p style={{ color: "var(--text-secondary)", fontSize: 16, maxWidth: 520, margin: "0 auto" }}>
            {siteData.team.length} specialists, one unified team. Every member brings deep domain expertise.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }} className="team-grid">
          {team.map((member) => (
            <div key={member.name} className="card card-hover" style={{ padding: "32px 24px", textAlign: "center" }}>
              {/* Avatar */}
              <div style={{
                width: 72, height: 72, borderRadius: "50%",
                background: "linear-gradient(135deg, rgba(245,158,11,0.15), rgba(245,158,11,0.05))",
                border: "2px solid rgba(245,158,11,0.25)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: 20,
                color: "var(--amber)", margin: "0 auto 20px",
              }}>
                {member.avatar}
              </div>

              <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 4, fontFamily: "'Outfit', sans-serif" }}>{member.name}</h3>
              <p style={{ color: "var(--amber)", fontSize: 12, fontWeight: 700, fontFamily: "'Outfit', sans-serif", letterSpacing: "0.04em", textTransform: "uppercase", marginBottom: 14 }}>
                {member.role}
              </p>
              <p style={{ color: "var(--text-secondary)", fontSize: 13, lineHeight: 1.7, marginBottom: 18 }}>
                {member.bio}
              </p>

              {/* Skills */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 5, justifyContent: "center", marginBottom: 20 }}>
                {member.skills.map((sk) => (
                  <span key={sk} className="skill-pill">{sk}</span>
                ))}
              </div>

              {/* Social links */}
              <div style={{ display: "flex", justifyContent: "center", gap: 12 }}>
                {Object.entries(member.social).map(([platform, url]) => (
                  <a key={platform} href={url}
                    style={{
                      width: 32, height: 32, borderRadius: 8,
                      background: "rgba(255,255,255,0.04)", border: "1px solid var(--border)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: 13, textDecoration: "none", color: "var(--text-muted)",
                      transition: "all 0.2s",
                    }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--amber)"; e.currentTarget.style.color = "var(--amber)"; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--text-muted)"; }}
                  >
                    {platform === "github" ? "gh" : platform === "linkedin" ? "in" : "tw"}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .team-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 500px) { .team-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
