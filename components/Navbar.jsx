"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteData } from "@/data/siteData";
import BrandLogo from "@/components/BrandLogo";

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
    let ticking = false;
    const handler = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handler, { passive: true });
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
            <BrandLogo showIcon={false} style={{ fontSize: 24, color: "var(--text-primary)" }} textStyle={{ fontSize: 24 }} />
          </Link>

          {/* Desktop nav */}
          <div style={{ display: "flex", alignItems: "center", gap: 4 }} className="desktop-menu">
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
            <a href="/contact" className="btn-primary desktop-cta" style={{ padding: "9px 20px", fontSize: 14 }}>
              Hire Us →
            </a>
            {/* Hamburger */}
            <button
              onClick={() => setOpen(true)}
              style={{ background: "none", border: "none", cursor: "pointer", color: "var(--text-primary)", padding: 4 }}
              className="mobile-hamburger"
              aria-label="Open menu"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <line x1="3" y1="6" x2="21" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <line x1="3" y1="12" x2="21" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <line x1="3" y1="18" x2="21" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div style={{
        position: "fixed", inset: 0, background: "var(--bg-primary)",
        zIndex: 200, display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center", gap: 8,
        transform: open ? "translateX(0)" : "translateX(100%)",
        pointerEvents: open ? "auto" : "none",
        transition: "transform 0.4s cubic-bezier(0.77, 0, 0.175, 1)",
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

      <style>{`
        .mobile-hamburger { display: none; }
        @media (max-width: 768px) {
          .desktop-menu { display: none !important; }
          .desktop-cta { display: none !important; }
          .mobile-hamburger { display: flex; align-items: center; justify-content: center; }
        }
      `}</style>
    </>
  );
}
