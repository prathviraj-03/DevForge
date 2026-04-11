import { siteData } from "@/data/siteData";
import "./globals.css";

export const metadata = {
  title: `${siteData.brand.name} — ${siteData.brand.tagline}`,
  description: siteData.hero.subheading,
  keywords: "web development, mobile apps, Next.js, React, Node.js, freelance, India",
  openGraph: {
    title: siteData.brand.name,
    description: siteData.hero.subheading,
    type: "website",
  },
};

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({ children }) {
  const { contact } = siteData;
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300&display=swap"
          rel="stylesheet"
        />
        <link href="https://fonts.googleapis.com/css2?family=Rubik+Glitch&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Navbar />
        <main style={{ minHeight: "100vh" }}>{children}</main>
        <Footer />

        {/* WhatsApp float button */}
        <a
          href={contact.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-float"
          title="Chat on WhatsApp"
        >
          💬
        </a>
      </body>
    </html>
  );
}
