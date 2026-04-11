"use client";
import Link from "next/link";
import { siteData } from "@/data/siteData";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  const { brand, contact, hero } = siteData;
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: "var(--bg-secondary)", borderTop: "1px solid var(--border)", marginTop: "auto" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "64px 24px 32px" }}>
        {/* Top row */}
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 48, marginBottom: 56 }}
          className="footer-grid">
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <div style={{
                width: 34, height: 34, background: "var(--amber)", borderRadius: 7,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 16, fontWeight: 800, color: "#000",
              }}>⬡</div>
              <span style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: 17 }}>{brand.name}</span>
            </div>
            <p style={{ color: "var(--text-secondary)", fontSize: 14, lineHeight: 1.7, maxWidth: 280, marginBottom: 24 }}>
              {brand.tagline}. Building products that grow businesses, one commit at a time.
            </p>
            <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "rgba(37,211,102,0.1)", border: "1px solid rgba(37,211,102,0.25)",
              color: "#25D366", padding: "9px 16px", borderRadius: 8,
              fontSize: 13, fontWeight: 600, textDecoration: "none", transition: "all 0.2s",
            }}>
              💬 Chat on WhatsApp
            </a>
          </div>

          {/* Navigation */}
          <div>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: 13, color: "var(--text-muted)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 16 }}>Pages</p>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} style={{ color: "var(--text-secondary)", textDecoration: "none", fontSize: 14, transition: "color 0.2s" }}
                    onMouseEnter={e => e.target.style.color = "var(--amber)"}
                    onMouseLeave={e => e.target.style.color = "var(--text-secondary)"}
                  >{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: 13, color: "var(--text-muted)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 16 }}>Services</p>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
              {siteData.services.slice(0, 5).map((s) => (
                <li key={s.title}>
                  <Link href="/services" style={{ color: "var(--text-secondary)", textDecoration: "none", fontSize: 14, transition: "color 0.2s" }}
                    onMouseEnter={e => e.target.style.color = "var(--amber)"}
                    onMouseLeave={e => e.target.style.color = "var(--text-secondary)"}
                  >{s.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: 13, color: "var(--text-muted)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 16 }}>Contact</p>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
              <li>
                <a href={`mailto:${contact.email}`} style={{ color: "var(--text-secondary)", textDecoration: "none", fontSize: 14, display: "flex", alignItems: "center", gap: 8 }}>
                  ✉️ {contact.email}
                </a>
              </li>
              <li>
                <a href={`tel:${contact.phone}`} style={{ color: "var(--text-secondary)", textDecoration: "none", fontSize: 14, display: "flex", alignItems: "center", gap: 8 }}>
                  📞 {contact.phone}
                </a>
              </li>
              <li style={{ color: "var(--text-secondary)", fontSize: 14, display: "flex", alignItems: "flex-start", gap: 8 }}>
                📍 {contact.location}
              </li>
            </ul>
          </div>
        </div>

        <div className="divider" style={{ marginBottom: 28 }} />

        {/* Bottom bar */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
          <p style={{ color: "var(--text-muted)", fontSize: 13 }}>
            © {year} {brand.name}. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: 24 }}>
            <p style={{ color: "var(--text-muted)", fontSize: 13 }}>Built with ❤️ in India</p>
            <p style={{ color: "var(--text-muted)", fontSize: 13 }}>🚀 {hero.stats[0].value} Projects Delivered</p>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
