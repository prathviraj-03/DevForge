"use client";
import Link from "next/link";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { siteData } from "@/data/siteData";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  const { brand, contact } = siteData;
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
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" style={{ flexShrink: 0 }}>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.06-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
               Chat on WhatsApp
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
                  <Mail size={16} /> {contact.email}
                </a>
              </li>
              <li>
                <a href={`tel:${contact.phone}`} style={{ color: "var(--text-secondary)", textDecoration: "none", fontSize: 14, display: "flex", alignItems: "center", gap: 8 }}>
                  <Phone size={16} /> {contact.phone}
                </a>
              </li>
              <li style={{ color: "var(--text-secondary)", fontSize: 14, display: "flex", alignItems: "flex-start", gap: 8 }}>
                <MapPin size={16} /> {contact.location}
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
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
