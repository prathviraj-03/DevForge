"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteData } from "@/data/siteData";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transition: "all 0.3s",
          borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
          background: scrolled ? "rgba(9,9,9,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 68 }}>
          {/* Logo */}
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
            <span style={{ fontFamily: "'Rubik Glitch', system-ui", fontWeight: 400, fontSize: 24, color: "var(--text-primary)" }}>
              {siteData.brand.name}
            </span>
          </Link>

          {/* Desktop nav */}
          <div style={{ display: "flex", alignItems: "center", gap: 4 }} className="hidden md:flex">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                style={{
                  padding: "8px 14px",
                  borderRadius: 6,
                  fontSize: 14,
                  fontWeight: 500,
                  textDecoration: "none",
                  transition: "all 0.2s",
                  color: pathname === l.href ? "var(--amber)" : "var(--text-secondary)",
                  background: pathname === l.href ? "var(--amber-dim)" : "transparent",
                }}
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* CTA + Hamburger */}
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <a href="/contact" className="btn-primary hidden md:inline-flex" style={{ padding: "9px 20px", fontSize: 14 }}>
              Hire Us →
            </a>
            {/* Hamburger */}
            <button
              onClick={() => setOpen(true)}
              style={{ background: "none", border: "none", cursor: "pointer", color: "var(--text-primary)", padding: 4 }}
              className="md:hidden"
              aria-label="Open menu"
            >
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <line x1="2" y1="6" x2="20" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <line x1="2" y1="11" x2="20" y2="11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <line x1="2" y1="16" x2="20" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div style={{
          position: "fixed", inset: 0, background: "var(--bg-primary)",
          zIndex: 200, display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center", gap: 8,
        }}>
          <button
            onClick={() => setOpen(false)}
            style={{
              position: "absolute", top: 20, right: 24,
              background: "none", border: "none", cursor: "pointer",
              color: "var(--text-secondary)", fontSize: 28,
            }}
          >×</button>
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              style={{
                fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: 28,
                textDecoration: "none",
                color: pathname === l.href ? "var(--amber)" : "var(--text-primary)",
                padding: "12px 0",
                transition: "color 0.2s",
              }}
            >{l.label}</Link>
          ))}
          <a href="/contact" className="btn-primary" style={{ marginTop: 24 }}>Hire Us →</a>
        </div>
      )}
    </>
  );
}
