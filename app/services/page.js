"use client";
import Services from "@/components/Services";
import CTA from "@/components/CTA";
import { siteData } from "@/data/siteData";


function CheckIcon() {
  return (
    <span style={{
      width: 18, height: 18, borderRadius: "50%",
      background: "rgba(245,158,11,0.12)", border: "1px solid rgba(245,158,11,0.3)",
      display: "inline-flex", alignItems: "center", justifyContent: "center",
      fontSize: 10, color: "var(--amber)", flexShrink: 0,
    }}>✓</span>
  );
}

function CrossIcon() {
  return (
    <span style={{
      width: 18, height: 18, borderRadius: "50%",
      background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)",
      display: "inline-flex", alignItems: "center", justifyContent: "center",
      fontSize: 10, color: "var(--text-muted)", flexShrink: 0,
    }}>×</span>
  );
}

export default function ServicesPage() {
  const { pricing, faqs } = siteData;

  return (
    <>
      {/* Hero */}
      <section className="grid-bg" style={{ padding: "140px 24px 80px", borderBottom: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>

          <h1 style={{ fontSize: "clamp(44px, 7vw, 80px)", lineHeight: 1, marginBottom: 24, maxWidth: 700 }}>
            Transparent pricing.<br />
            <span className="gradient-text">Zero surprises.</span>
          </h1>
          <p style={{ color: "var(--text-secondary)", fontSize: "clamp(16px, 2vw, 18px)", lineHeight: 1.7, maxWidth: 520 }}>
            Every plan includes clean code, mobile-responsive design, and a dedicated point of contact. No hidden fees.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <Services />

      {/* How it works */}
      <section style={{ padding: "80px 24px", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", background: "var(--bg-secondary)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>

            <h2 style={{ fontSize: "clamp(30px, 4vw, 46px)", lineHeight: 1.1 }}>
              How we work with you
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 1, border: "1px solid var(--border)", borderRadius: 14, overflow: "hidden" }} className="process-grid">
            {[
              { step: "01", icon: "💬", title: "Discovery Call", desc: "Free 30-min consultation to understand your goals, timeline, and budget." },
              { step: "02", icon: "📋", title: "Proposal & Plan", desc: "We send a detailed scope, wireframes, and fixed-price quote within 48 hours." },
              { step: "03", icon: "🛠️", title: "Build & Iterate", desc: "Weekly demos and daily Slack updates. You see progress every step of the way." },
              { step: "04", icon: "🚀", title: "Launch & Support", desc: "Deployment, handover, and post-launch support included in every plan." },
            ].map((item, i) => (
              <div key={i} className="card-hover" style={{
                padding: "36px 28px", background: "var(--bg-card)",
                borderRight: i < 3 ? "1px solid var(--border)" : "none",
              }}>
                <div style={{
                  fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: 11,
                  color: "var(--amber)", letterSpacing: "0.1em", marginBottom: 16,
                }}>STEP {item.step}</div>
                <div style={{ fontSize: 28, marginBottom: 14 }}>{item.icon}</div>
                <h3 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: 17, marginBottom: 10 }}>{item.title}</h3>
                <p style={{ color: "var(--text-secondary)", fontSize: 14, lineHeight: 1.65 }}>{item.desc}</p>
              </div>
            ))}
          </div>
          <style>{`@media (max-width: 768px) { .process-grid { grid-template-columns: repeat(2, 1fr) !important; } }
          @media (max-width: 480px) { .process-grid { grid-template-columns: 1fr !important; } }`}</style>
        </div>
      </section>

      {/* Pricing */}
      <section style={{ padding: "100px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>

            <h2 style={{ fontSize: "clamp(34px, 5vw, 52px)", lineHeight: 1.1, marginBottom: 14 }}>
              Pick your plan
            </h2>
            <p style={{ color: "var(--text-secondary)", fontSize: 16 }}>
              All prices in INR. International clients: USD/GBP/AED accepted.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, alignItems: "start" }} className="pricing-grid">
            {pricing.map((plan) => (
              <div
                key={plan.tier}
                className={plan.highlight ? "pricing-highlight" : "card"}
                style={{ borderRadius: 20, overflow: "hidden", position: "relative" }}
              >
                {plan.badge && (
                  <div style={{
                    position: "absolute", top: 20, right: 20,
                    background: "var(--amber)", color: "#000",
                    fontSize: 11, fontWeight: 800, fontFamily: "'Outfit', sans-serif",
                    padding: "4px 10px", borderRadius: 100, letterSpacing: "0.04em",
                  }}>
                    {plan.badge}
                  </div>
                )}
                <div style={{ padding: "36px 32px" }}>
                  <p style={{
                    fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: 13,
                    color: "var(--text-muted)", letterSpacing: "0.1em",
                    textTransform: "uppercase", marginBottom: 12,
                  }}>{plan.tier}</p>
                  <div style={{ marginBottom: 6 }}>
                    <span style={{
                      fontFamily: "'Outfit', sans-serif", fontWeight: 800,
                      fontSize: plan.price === "Custom" ? 36 : 44,
                      color: plan.highlight ? "var(--amber)" : "var(--text-primary)", lineHeight: 1,
                    }}>{plan.price}</span>
                    {plan.price !== "Custom" && (
                      <span style={{ color: "var(--text-muted)", fontSize: 14, marginLeft: 6 }}>/ {plan.period}</span>
                    )}
                  </div>
                  <p style={{ color: "var(--text-secondary)", fontSize: 14, lineHeight: 1.6, marginBottom: 28, minHeight: 44 }}>
                    {plan.description}
                  </p>

                  <div className="divider" style={{ marginBottom: 24 }} />

                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10, marginBottom: 24 }}>
                    {plan.features.map((f) => (
                      <li key={f} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14 }}>
                        <CheckIcon />
                        <span style={{ color: "var(--text-primary)" }}>{f}</span>
                      </li>
                    ))}
                    {plan.notIncluded.map((f) => (
                      <li key={f} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14 }}>
                        <CrossIcon />
                        <span style={{ color: "var(--text-muted)" }}>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="/contact"
                    className={plan.highlight ? "btn-primary" : "btn-secondary"}
                    style={{ width: "100%", justifyContent: "center" }}
                  >
                    {plan.cta} →
                  </a>
                </div>
              </div>
            ))}
          </div>
          <style>{`@media (max-width: 900px) { .pricing-grid { grid-template-columns: 1fr !important; max-width: 480px; margin: 0 auto; } }`}</style>

          {/* Guarantee strip */}
          <div style={{
            marginTop: 52, padding: "28px 36px",
            background: "rgba(245,158,11,0.04)", border: "1px solid rgba(245,158,11,0.12)",
            borderRadius: 14, display: "flex", alignItems: "center", gap: 20, flexWrap: "wrap",
          }}>
            <div style={{ fontSize: 36 }}>🛡️</div>
            <div>
              <h3 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: 17, marginBottom: 4 }}>Satisfaction Guarantee</h3>
              <p style={{ color: "var(--text-secondary)", fontSize: 14 }}>
                If you're not happy with the first milestone delivery, we'll revise it — free of charge. No questions asked.
              </p>
            </div>
            <a href="/contact" className="btn-primary" style={{ marginLeft: "auto", whiteSpace: "nowrap" }}>
              Start a Project →
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "80px 24px 100px", background: "var(--bg-secondary)", borderTop: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>

            <h2 style={{ fontSize: "clamp(30px, 4vw, 44px)", lineHeight: 1.1 }}>Common questions</h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {faqs.map((faq, i) => (
              <details key={i} style={{
                background: "var(--bg-card)", border: "1px solid var(--border)",
                borderRadius: 12, overflow: "hidden",
              }}>
                <summary style={{
                  padding: "20px 24px", cursor: "pointer", listStyle: "none",
                  fontFamily: "'Outfit', sans-serif", fontWeight: 600, fontSize: 15,
                  display: "flex", justifyContent: "space-between", alignItems: "center",
                  userSelect: "none",
                }}>
                  {faq.q}
                  <span style={{ color: "var(--amber)", fontSize: 20, marginLeft: 16, flexShrink: 0 }}>+</span>
                </summary>
                <div style={{
                  padding: "0 24px 20px",
                  color: "var(--text-secondary)", fontSize: 14, lineHeight: 1.75,
                }}>
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Still have questions?"
        subtitle="Book a free 30-minute call. We'll answer everything and give you an honest assessment of your project."
        primaryCta="Book a Free Call →"
      />
    </>
  );
}
