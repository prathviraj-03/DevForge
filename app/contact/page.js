"use client";
import ContactForm from "@/components/ContactForm";
import { MessageCircle, Mail, Phone, MapPin, Zap, Check } from "lucide-react";
import { siteData } from "@/data/siteData";


export default function ContactPage() {
  const { contact, hero, faqs } = siteData;

  return (
    <>
      {/* Hero */}
      <section className="grid-bg" style={{ padding: "140px 24px 80px", borderBottom: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>

          <h1 style={{ fontSize: "clamp(44px, 7vw, 80px)", lineHeight: 1, marginBottom: 24, maxWidth: 660 }}>
            Let's build<br />
            <span className="gradient-text">something great.</span>
          </h1>
          <p style={{ color: "var(--text-secondary)", fontSize: "clamp(16px, 2vw, 18px)", lineHeight: 1.7, maxWidth: 480 }}>
            Free consultation. No commitment. We'll assess your project and give you an honest timeline and estimate.
          </p>
        </div>
      </section>

      {/* Main contact section */}
      <section style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "5fr 4fr", gap: 40, alignItems: "start" }} className="contact-grid">

            {/* Left: Form */}
            <ContactForm />

            {/* Right: Info */}
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {/* Response time */}
              <div style={{
                background: "rgba(245,158,11,0.07)", border: "1px solid rgba(245,158,11,0.18)",
                borderRadius: 14, padding: "24px 24px",
                display: "flex", alignItems: "center", gap: 16,
              }}>
                <div style={{ fontSize: 32 }}><Zap size={32} /></div>
                <div>
                  <p style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: 15, marginBottom: 4 }}>
                    {contact.responseTime}
                  </p>
                  <p style={{ color: "var(--text-secondary)", fontSize: 13 }}>Mon–Sat, 9am–7pm IST</p>
                </div>
              </div>

              {/* Contact methods */}
              <div className="card" style={{ padding: "28px" }}>
                <h3 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: 16, marginBottom: 20 }}>
                  Prefer to reach out directly?
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  <a href={`mailto:${contact.email}`} style={{
                    display: "flex", alignItems: "center", gap: 14, textDecoration: "none",
                    padding: "14px 18px", borderRadius: 10,
                    background: "rgba(255,255,255,0.03)", border: "1px solid var(--border)",
                    transition: "all 0.2s", color: "var(--text-primary)",
                  }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--amber)"; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; }}
                  >
                    <Mail size={22} style={{ flexShrink: 0 }} />
                    <div style={{ minWidth: 0 }}>
                      <p style={{ fontSize: 11, color: "var(--text-muted)", fontWeight: 600, marginBottom: 2, fontFamily: "'Outfit', sans-serif", letterSpacing: "0.05em", textTransform: "uppercase" }}>Email</p>
                      <p style={{ fontSize: 14, fontWeight: 500, wordBreak: "break-word" }}>{contact.email}</p>
                    </div>
                  </a>
                  <a href={`tel:${contact.phone}`} style={{
                    display: "flex", alignItems: "center", gap: 14, textDecoration: "none",
                    padding: "14px 18px", borderRadius: 10,
                    background: "rgba(255,255,255,0.03)", border: "1px solid var(--border)",
                    transition: "all 0.2s", color: "var(--text-primary)",
                  }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--amber)"; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; }}
                  >
                    <Phone size={22} style={{ flexShrink: 0 }} />
                    <div style={{ minWidth: 0 }}>
                      <p style={{ fontSize: 11, color: "var(--text-muted)", fontWeight: 600, marginBottom: 2, fontFamily: "'Outfit', sans-serif", letterSpacing: "0.05em", textTransform: "uppercase" }}>Phone</p>
                      <p style={{ fontSize: 14, fontWeight: 500, wordBreak: "break-word" }}>{contact.phone}</p>
                    </div>
                  </a>
                  <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer" style={{
                    display: "flex", alignItems: "center", gap: 14, textDecoration: "none",
                    padding: "14px 18px", borderRadius: 10,
                    background: "rgba(255,255,255,0.03)", border: "1px solid var(--border)",
                    transition: "all 0.2s", color: "var(--text-primary)",
                  }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--amber)"; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; }}
                  >
                    <MessageCircle size={22} style={{ flexShrink: 0, color: "var(--amber)" }} />
                    <div style={{ minWidth: 0 }}>
                      <p style={{ fontSize: 11, color: "var(--text-muted)", fontWeight: 600, marginBottom: 2, fontFamily: "'Outfit', sans-serif", letterSpacing: "0.05em", textTransform: "uppercase" }}>WhatsApp</p>
                      <p style={{ fontSize: 14, fontWeight: 600, wordBreak: "break-word" }}>Start a chat instantly</p>
                    </div>
                  </a>
                  <div style={{
                    display: "flex", alignItems: "center", gap: 14,
                    padding: "14px 18px", borderRadius: 10,
                    background: "rgba(255,255,255,0.02)", border: "1px solid var(--border)",
                    color: "var(--text-secondary)",
                  }}>
                    <MapPin size={22} style={{ flexShrink: 0 }} />
                    <div style={{ minWidth: 0 }}>
                      <p style={{ fontSize: 11, color: "var(--text-muted)", fontWeight: 600, marginBottom: 2, fontFamily: "'Outfit', sans-serif", letterSpacing: "0.05em", textTransform: "uppercase" }}>Location</p>
                      <p style={{ fontSize: 14, fontWeight: 500, color: "var(--text-primary)", wordBreak: "break-word" }}>{contact.location}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust signals */}
              <div className="card" style={{ padding: "24px 28px" }}>
                <h3 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: 15, marginBottom: 16 }}>Why teams choose us</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {[
                    `${hero.stats[0].value} projects successfully delivered`,
                    `${hero.stats[1].value} client satisfaction rate`,
                    "Free consultation, no commitment",
                    "Full source code ownership",
                    "Post-launch support included",
                    "Transparent, fixed-price quotes",
                  ].map((item) => (
                    <div key={item} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 13, color: "var(--text-secondary)" }}>
                      <Check size={16} style={{ color: "var(--amber)" }} />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <style>{`
            @media (max-width: 768px) { 
              .contact-grid { grid-template-columns: 1fr !important; } 
            }
          `}</style>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "60px 24px 100px", background: "var(--bg-secondary)", borderTop: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>

            <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", lineHeight: 1.1 }}>Frequently asked</h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {faqs.map((faq, i) => (
              <details key={i} style={{
                background: "var(--bg-card)", border: "1px solid var(--border)",
                borderRadius: 12, overflow: "hidden",
              }}>
                <summary style={{
                  padding: "18px 22px", cursor: "pointer", listStyle: "none",
                  fontFamily: "'Outfit', sans-serif", fontWeight: 600, fontSize: 15,
                  display: "flex", justifyContent: "space-between", alignItems: "center",
                  userSelect: "none",
                }}>
                  {faq.q}
                  <span style={{ color: "var(--amber)", fontSize: 20, marginLeft: 12, flexShrink: 0 }}>+</span>
                </summary>
                <div style={{ padding: "0 22px 18px", color: "var(--text-secondary)", fontSize: 14, lineHeight: 1.75 }}>
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
