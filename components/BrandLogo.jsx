"use client";
import { siteData } from "@/data/siteData";

export default function BrandLogo({ showIcon = true, showName = true, style, logoStyle, textStyle }) {
  const { brand } = siteData;

  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: showIcon && showName ? 10 : 0,
        fontFamily: "'Rubik Glitch', system-ui, sans-serif",
        fontWeight: 400,
        color: "var(--text-primary)",
        ...style,
      }}
    >
      {showIcon && (
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: 34,
            height: 34,
            background: "var(--amber)",
            borderRadius: 8,
            fontSize: 18,
            fontWeight: 700,
            color: "#000",
            ...logoStyle,
          }}
        >
          {brand.logo}
        </span>
      )}
      {showName && (
        <span style={{ fontSize: 19, letterSpacing: "0.04em", ...textStyle }}>{brand.name}</span>
      )}
    </span>
  );
}
