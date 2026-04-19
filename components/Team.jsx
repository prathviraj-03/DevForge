"use client";
import { siteData } from "@/data/siteData";

/* ── SVG Icons ──────────────────────────────────────────────── */
function GithubIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedinIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

/* ── Team Card ──────────────────────────────────────────────── */
function TeamCard({ member }) {
  return (
    <div className="team-card">
      {/* Image area */}
      <div className="team-card__img-wrap">
        {member.image ? (
          <img
            src={member.image}
            alt={member.name}
            referrerPolicy="no-referrer"
            className="team-card__img"
          />
        ) : (
          <div className="team-card__fallback">{member.avatar}</div>
        )}
        {/* Subtle amber glow on bottom of image */}
        <div className="team-card__img-overlay" />
      </div>

      {/* Body */}
      <div className="team-card__body">
        <h3 className="team-card__name">{member.name}</h3>

        <p className="team-card__bio">{member.bio}</p>

        {/* Skills */}
        <div className="team-card__skills">
          {member.skills.map((sk) => (
            <span key={sk} className="skill-pill">{sk}</span>
          ))}
        </div>

        {/* Divider */}
        <div className="team-card__divider" />

        {/* Social */}
        <div className="team-card__social">
          {member.social.github && (
            <a
              href={member.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="team-card__social-btn"
              aria-label="GitHub"
            >
              <GithubIcon size={16} />
              <span>GitHub</span>
            </a>
          )}
          {member.social.linkedin && (
            <a
              href={member.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="team-card__social-btn"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={16} />
              <span>LinkedIn</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

/* ── Section ────────────────────────────────────────────────── */
export default function Team() {
  const { team } = siteData;

  return (
    <section style={{ padding: "100px 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>

        {/* Heading */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <h2 style={{ fontSize: "clamp(34px, 5vw, 52px)", lineHeight: 1.1, marginBottom: 14 }}>
            Meet the people<br />
            <span className="gradient-text">behind your product</span>
          </h2>
          <p style={{ color: "var(--text-secondary)", fontSize: 16, maxWidth: 520, margin: "0 auto" }}>
            {team.length} specialists, one unified team. Every member brings deep domain expertise.
          </p>
        </div>

        {/* Grid */}
        <div className="team-grid">
          {team.map((member) => (
            <TeamCard key={member.name} member={member} />
          ))}
        </div>
      </div>

      <style>{`
        /* ── Card shell ─────────────────────────────── */
        .team-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .team-card {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 18px;
          overflow: hidden;
          transition: transform 0.28s ease, box-shadow 0.28s ease, border-color 0.28s ease;
          display: flex;
          flex-direction: column;
        }
        .team-card:hover {
          transform: translateY(-6px);
          border-color: rgba(245,158,11,0.30);
          box-shadow: 0 20px 60px rgba(0,0,0,0.45), 0 0 0 1px rgba(245,158,11,0.10);
        }

        /* ── Image ──────────────────────────────────── */
        .team-card__img-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: 4 / 4;
          overflow: hidden;
          background: var(--bg-card);
          /* force own GPU layer so parent translateY never bleeds */
          transform: translateZ(0);
          isolation: isolate;
        }
        .team-card__img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          display: block;
          /* slight brightness dim on hover via filter — no transform needed */
          transition: filter 0.35s ease;
          filter: brightness(0.92);
        }
        .team-card:hover .team-card__img {
          filter: brightness(1);
        }
        .team-card__img-overlay {
          position: absolute;
          inset: 0;
          top: auto;
          height: 55%;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(
            to top,
            var(--bg-card) 0%,
            rgba(17,17,17,0.6) 40%,
            transparent 100%
          );
          pointer-events: none;
          z-index: 1;
        }
        .team-card__fallback {
          width: 100%; height: 100%;
          display: flex; align-items: center; justify-content: center;
          font-family: 'Outfit', sans-serif; font-weight: 800; font-size: 48px;
          color: var(--amber);
          background: linear-gradient(135deg, rgba(245,158,11,0.08), rgba(245,158,11,0.02));
        }

        /* ── Body ───────────────────────────────────── */
        .team-card__body {
          padding: 22px 24px 24px;
          display: flex;
          flex-direction: column;
          gap: 14px;
          flex: 1;
        }
        .team-card__name {
          font-family: 'Outfit', sans-serif;
          font-size: 18px;
          font-weight: 700;
          color: var(--text-primary);
          letter-spacing: -0.01em;
          margin: 0;
          text-align: center;
        }
        .team-card__bio {
          font-size: 13.5px;
          color: var(--text-secondary);
          line-height: 1.75;
          margin: 0;
          text-align: center;
        }
        .team-card__skills {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          justify-content: center;
        }
        .team-card__divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--border), transparent);
          margin: 2px 0;
        }

        /* ── Social buttons ─────────────────────────── */
        .team-card__social {
          display: flex;
          gap: 10px;
          justify-content: center;
        }
        .team-card__social-btn {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 8px 15px;
          border-radius: 8px;
          border: 1px solid var(--border);
          background: rgba(255,255,255,0.03);
          color: var(--text-secondary);
          font-size: 12.5px;
          font-weight: 600;
          font-family: 'Outfit', sans-serif;
          text-decoration: none;
          transition: all 0.2s ease;
          white-space: nowrap;
        }
        .team-card__social-btn:hover {
          background: var(--amber-dim);
          border-color: rgba(245,158,11,0.40);
          color: var(--amber);
          transform: translateY(-1px);
        }

        /* ── Responsive ─────────────────────────────── */
        @media (max-width: 960px) {
          .team-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 560px) {
          .team-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
