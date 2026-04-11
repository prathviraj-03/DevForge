"use client";
import { useState } from "react";
import { CheckCircle } from "lucide-react";
import { siteData } from "@/data/siteData";

export default function ContactForm() {
  const { contact } = siteData;
  const [form, setForm] = useState({ name: "", email: "", budget: "", message: "" });
  const [status, setStatus] = useState(null); // null | "sending" | "sent" | "error"
  const [errorMessage, setErrorMessage] = useState("");
  const [showWhatsApp, setShowWhatsApp] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");
    setShowWhatsApp(false);

    const timeoutId = setTimeout(() => {
      setShowWhatsApp(true);
    }, 5000);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error || "Failed to send message");
      }

      setStatus("sent");
    } catch (err) {
      console.error(err);
      setErrorMessage(err.message || "Failed to send message");
      setStatus("error");
    } finally {
      clearTimeout(timeoutId);
    }
  };

  if (status === "sent") {
    return (
      <div style={{
        textAlign: "center", padding: "64px 24px",
        background: "var(--bg-card)", border: "1px solid var(--border)",
        borderRadius: 16,
      }}>
        <div style={{ fontSize: 56, marginBottom: 20 }}><CheckCircle size={56} /></div>
        <h3 style={{ fontSize: 24, fontWeight: 700, marginBottom: 10, fontFamily: "'Outfit', sans-serif" }}>Message Received!</h3>
        <p style={{ color: "var(--text-secondary)", marginBottom: 24 }}>
          We'll get back to you within 4 hours. Check your inbox!
        </p>
        <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-primary">
          Chat on WhatsApp Instead
        </a>
      </div>
    );
  }

  return (
    <div className="contact-form-container" style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 16, padding: "40px 36px", width: "100%", maxWidth: "100%" }}>
      <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 6, fontFamily: "'Outfit', sans-serif" }}>Send us a message</h3>

      <p style={{ color: "var(--text-secondary)", fontSize: 14, marginBottom: 28 }}>{contact.responseTime}</p>

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="form-row">
          <div>
            <label htmlFor="contact-name" style={{ fontSize: 13, fontWeight: 600, color: "var(--text-secondary)", display: "block", marginBottom: 6, fontFamily: "'Outfit', sans-serif" }}>Your Name *</label>
            <input id="contact-name" className="form-input" name="name" required value={form.name} onChange={handleChange} placeholder="Rahul Sharma" />
          </div>
          <div>
            <label htmlFor="contact-email" style={{ fontSize: 13, fontWeight: 600, color: "var(--text-secondary)", display: "block", marginBottom: 6, fontFamily: "'Outfit', sans-serif" }}>Email Address *</label>
            <input id="contact-email" className="form-input" name="email" type="email" required value={form.email} onChange={handleChange} placeholder="rahul@startup.com" />
          </div>
        </div>

        <div>
          <label htmlFor="contact-budget" style={{ fontSize: 13, fontWeight: 600, color: "var(--text-secondary)", display: "block", marginBottom: 6, fontFamily: "'Outfit', sans-serif" }}>Project Budget</label>
          <select id="contact-budget" className="form-input custom-select" name="budget" value={form.budget} onChange={handleChange}
            style={{ 
              backgroundColor: "var(--bg-card)", 
              color: form.budget ? "var(--text-primary)" : "var(--text-muted)",
              backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%239a9a9a' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "calc(100% - 16px) center",
              backgroundSize: "16px",
              WebkitAppearance: "none",
              MozAppearance: "none",
              appearance: "none",
              paddingRight: "40px",
              cursor: "pointer"
            }}>
            <option value="" style={{ backgroundColor: "var(--bg-card)", color: "var(--text-primary)" }}>Select a budget range</option>
            <option style={{ backgroundColor: "var(--bg-card)", color: "var(--text-primary)" }} value="Under ₹10,000">Under ₹10,000</option>
            <option style={{ backgroundColor: "var(--bg-card)", color: "var(--text-primary)" }} value="₹10,000 – ₹30,000">₹10,000 – ₹30,000</option>
            <option style={{ backgroundColor: "var(--bg-card)", color: "var(--text-primary)" }} value="₹30,000 – ₹1,00,000">₹30,000 – ₹1,00,000</option>
            <option style={{ backgroundColor: "var(--bg-card)", color: "var(--text-primary)" }} value="₹1,00,000+">₹1,00,000+</option>
            <option style={{ backgroundColor: "var(--bg-card)", color: "var(--text-primary)" }} value="Let's discuss">Let's discuss</option>
          </select>
        </div>

        <div>
          <label htmlFor="contact-message" style={{ fontSize: 13, fontWeight: 600, color: "var(--text-secondary)", display: "block", marginBottom: 6, fontFamily: "'Outfit', sans-serif" }}>Tell us about your project *</label>
          <textarea id="contact-message"
            className="form-input"
            name="message"
            required
            value={form.message}
            onChange={handleChange}
            placeholder="Briefly describe your project, timeline, and goals..."
            rows={5}
            style={{ resize: "vertical" }}
          />
        </div>

        <button type="submit" className="btn-primary" style={{ width: "100%", justifyContent: "center", padding: "15px" }}
          disabled={status === "sending"}>
          {status === "sending" ? "Sending..." : "Send Message →"}
        </button>

        {status === "sending" && showWhatsApp && (
          <div style={{ textAlign: "center", marginTop: 8 }}>
            <p style={{ color: "var(--text-secondary)", fontSize: 13, marginBottom: 8 }}>
              Taking longer than expected...
            </p>
            <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: "10px 20px", fontSize: 14 }}>
              Chat on WhatsApp Instead
            </a>
          </div>
        )}

        {status === "error" && (
          <p style={{ color: "#f87171", fontSize: 13, textAlign: "center", marginTop: 8 }}>
            {errorMessage || "Something went wrong. Please try again or email us directly."}
          </p>
        )}

        <p style={{ textAlign: "center", color: "var(--text-muted)", fontSize: 12 }}>
          Or reach us directly: <a href={`mailto:${contact.email}`} style={{ color: "var(--amber)", textDecoration: "none" }}>{contact.email}</a>
        </p>
      </form>

      <style>{`
        @media (max-width: 540px) { 
          .form-row { grid-template-columns: 1fr !important; } 
          .contact-form-container { padding: 24px 20px !important; }
        }
      `}</style>
    </div>
  );
}
