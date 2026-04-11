export const siteData = {
  brand: {
    name: "DevForge",
    tagline: "We build scalable web apps for startups & businesses",
    logo: "⬡",
  },

  hero: {
    badge: "🚀 Fresh & Hungry",
    heading: "Build Fast.",
    headingAccent: "Scale Smart.",
    subheading:
      "We craft premium web solutions that turn ideas into revenue-generating products. From MVPs to enterprise platforms — delivered on time, every time.",
    cta: "Get a Free Consultation",
    ctaSecondary: "View Our Work",
    stats: [
      { value: "100%", label: "Commitment" },
      { value: "24/7", label: "Support" },
      { value: "Fast", label: "Delivery" },
      { value: "Clean", label: "Code" },
    ],
  },

  about: {
    mission:
      "We exist to close the gap between great ideas and great software. Too many startups fail not because of bad ideas, but bad execution. We're here to fix that.",
    vision:
      "A world where any founder, anywhere, can access world-class engineering without the enterprise price tag.",
    values: [
      {
        icon: "⚡",
        title: "Speed Without Sacrifice",
        desc: "Fast delivery doesn't mean cutting corners. We move quickly because we're experienced, not careless.",
      },
      {
        icon: "🔒",
        title: "Radical Transparency",
        desc: "No surprises. You get daily updates, clean code, and honest timelines from day one.",
      },
      {
        icon: "📈",
        title: "Built for Growth",
        desc: "Every line of code we write is designed to scale. Your success is our longest-running project.",
      },
    ],
  },

  team: [
    {
      name: "Arjun Mehta",
      role: "Founder & Full Stack Lead",
      avatar: "AM",
      bio: "8 years building products at scale. Ex-Razorpay engineer with a passion for clean architecture.",
      skills: ["React", "Node.js", "AWS", "PostgreSQL", "System Design"],
      social: { github: "#", linkedin: "#", twitter: "#" },
    },
    {
      name: "Priya Sharma",
      role: "UI/UX & Frontend Engineer",
      avatar: "PS",
      bio: "Design engineer who bridges the gap between pixel-perfect UI and performant code.",
      skills: ["Figma", "Next.js", "Tailwind", "Framer Motion", "Accessibility"],
      social: { github: "#", linkedin: "#", twitter: "#" },
    },
    {
      name: "Rohan Das",
      role: "Backend & DevOps Engineer",
      avatar: "RD",
      bio: "Infrastructure specialist. Keeps systems fast, secure, and costs low.",
      skills: ["Python", "Docker", "Kubernetes", "Redis", "CI/CD"],
      social: { github: "#", linkedin: "#", twitter: "#" },
    },
    {
      name: "Sneha Iyer",
      role: "Mobile & API Engineer",
      avatar: "SI",
      bio: "Cross-platform mobile developer who ships React Native apps that users actually love.",
      skills: ["React Native", "GraphQL", "Firebase", "TypeScript", "Testing"],
      social: { github: "#", linkedin: "#", twitter: "#" },
    },
  ],

  services: [
    {
      icon: "🌐",
      title: "Web Development",
      description:
        "Modern, blazing-fast websites and web apps built with Next.js, React, and Node.js. SEO-optimized and conversion-ready.",
      features: [
        "Custom Design",
        "SEO Optimized",
        "CMS Integration",
        "Analytics Setup",
      ],
    },
    {
      icon: "�",
      title: "Custom Software Development",
      description:
        "Bespoke web applications, internal tools, and SaaS platforms built to solve your unique business challenges.",
      features: [
        "SaaS Platforms",
        "Internal Dashboards",
        "Admin Panels",
        "Automation Workflows",
      ],
    },
    {
      icon: "⚙️",
      title: "Backend & APIs",
      description:
        "Scalable REST and GraphQL APIs, database design, authentication, and cloud infrastructure on AWS or GCP.",
      features: [
        "REST / GraphQL",
        "Auth & Security",
        "Database Design",
        "99.9% Uptime SLA",
      ],
    },
    {
      icon: "🛒",
      title: "E-Commerce",
      description:
        "Revenue-optimized stores on Shopify, WooCommerce, or fully custom solutions with payment gateway integration.",
      features: [
        "Payment Gateway",
        "Inventory Mgmt",
        "Order Tracking",
        "Conversion Optimization",
      ],
    },
    {
      icon: "🤖",
      title: "AI Integration",
      description:
        "Supercharge your product with AI. Chatbots, recommendation engines, content generation, and automation pipelines.",
      features: [
        "OpenAI / Claude",
        "Custom Chatbots",
        "Automation Flows",
        "Data Pipelines",
      ],
    },
    {
      icon: "☁️",
      title: "DevOps & Cloud",
      description:
        "From CI/CD pipelines to Kubernetes clusters. We make deployment boring — in the best possible way.",
      features: [
        "Docker / K8s",
        "CI/CD Setup",
        "Cost Optimization",
        "24/7 Monitoring",
      ],
    },
  ],

  pricing: [
    {
      tier: "Starter",
      badge: null,
      price: "₹9,999",
      period: "project",
      description: "Perfect for landing pages and simple informational sites.",
      features: [
        "Up to 5 pages",
        "Mobile responsive",
        "Contact form",
        "Basic SEO setup",
        "1 round of revisions",
        "7-day delivery",
      ],
      notIncluded: ["CMS / Blog", "Custom animations", "E-commerce"],
      cta: "Get Started",
      highlight: false,
    },
    {
      tier: "Professional",
      badge: "Most Popular",
      price: "₹29,999",
      period: "project",
      description: "Full-featured web app or business website with CMS.",
      features: [
        "Up to 15 pages",
        "CMS integration",
        "Authentication system",
        "Custom animations",
        "Advanced SEO",
        "3 rounds of revisions",
        "14-day delivery",
        "30-day support",
      ],
      notIncluded: ["Custom Software", "AI features"],
      cta: "Most Popular — Start Now",
      highlight: true,
    },
    {
      tier: "Enterprise",
      badge: null,
      price: "Custom",
      period: "quote",
      description: "End-to-end product development for funded startups.",
      features: [
        "Unlimited pages",
        "Complex Web Apps",
        "AI/ML integration",
        "Custom backend & API",
        "DevOps & cloud setup",
        "Dedicated PM",
        "Unlimited revisions",
        "90-day support",
      ],
      notIncluded: [],
      cta: "Let's Talk",
      highlight: false,
    },
  ],

  projects: [
    {
      title: "FinTrack Dashboard",
      description:
        "Real-time finance tracking platform for SMBs. Features multi-currency support, budget forecasting, and PDF reports.",
      tech: ["Next.js", "Node.js", "PostgreSQL", "Chart.js"],
      category: "SaaS",
      result: "3x faster reporting for 200+ SMB clients",
      color: "from-amber-500 to-orange-600",
    },
    {
      title: "MediConnect App",
      description:
        "Telemedicine platform connecting patients with doctors. Video consults, prescription management, and appointment booking.",
      tech: ["React Native", "Firebase", "WebRTC", "Stripe"],
      category: "HealthTech",
      result: "10,000+ consults in first 3 months",
      color: "from-emerald-500 to-teal-600",
    },
    {
      title: "ShopNest E-Commerce",
      description:
        "High-conversion Shopify alternative built custom for a D2C fashion brand. Includes AI-powered size recommendations.",
      tech: ["Next.js", "Shopify API", "OpenAI", "Redis"],
      category: "E-Commerce",
      result: "₹2.1Cr revenue in launch quarter",
      color: "from-purple-500 to-pink-600",
    },
    {
      title: "LogiRoute Platform",
      description:
        "Fleet management and logistics optimization SaaS. Real-time GPS tracking, route optimization, and driver analytics.",
      tech: ["React", "Node.js", "MongoDB", "Google Maps API"],
      category: "Logistics",
      result: "40% reduction in fuel costs for clients",
      color: "from-blue-500 to-cyan-600",
    },
    {
      title: "EduSpark LMS",
      description:
        "Learning management system for coaching institutes. Live classes, recorded content, quiz engine, and certificates.",
      tech: ["Next.js", "Django", "AWS S3", "Razorpay"],
      category: "EdTech",
      result: "5,000+ students onboarded in 60 days",
      color: "from-rose-500 to-red-600",
    },
    {
      title: "TalentHub ATS",
      description:
        "AI-powered applicant tracking system. Resume parsing, interview scheduling, and candidate scoring automation.",
      tech: ["React", "FastAPI", "OpenAI", "PostgreSQL"],
      category: "HR Tech",
      result: "Hiring time cut by 65% for 30 companies",
      color: "from-violet-500 to-indigo-600",
    },
  ],

  testimonials: [
    {
      name: "Vikram Nair",
      role: "CEO, FinTrack",
      avatar: "VN",
      feedback:
        "DevForge delivered our entire dashboard in 3 weeks. The quality was enterprise-level. We raised our seed round partly on the strength of the product they built.",
      rating: 5,
      project: "FinTrack Dashboard",
    },
    {
      name: "Ananya Krishnan",
      role: "Founder, MediConnect",
      avatar: "AK",
      feedback:
        "Communication was flawless. Daily updates, zero surprises. They understood our vision better than we expected and delivered features we didn't even know we needed.",
      rating: 5,
      project: "MediConnect App",
    },
    {
      name: "Rahul Bose",
      role: "Marketing Director, ShopNest",
      avatar: "RB",
      feedback:
        "Our old Shopify store was slow and losing us sales. DevForge built a custom solution that cut our page load time by 70% and boosted conversion by 35%. ROI was immediate.",
      rating: 5,
      project: "ShopNest E-Commerce",
    },
    {
      name: "Deepa Menon",
      role: "CTO, LogiRoute",
      avatar: "DM",
      feedback:
        "I've worked with many dev agencies. DevForge stands apart — clean code, good architecture decisions, and they actually push back when an idea won't scale. That's rare.",
      rating: 5,
      project: "LogiRoute Platform",
    },
  ],

  contact: {
    email: "hello@devforge.studio",
    phone: "+91 98765 43210",
    whatsapp: "https://wa.me/919876543210",
    whatsappMessage:
      "Hi DevForge! I'd like to discuss a project with your team.",
    location: "Bengaluru, India (Remote-First)",
    responseTime: "We respond within 4 hours",
  },

  faqs: [
    {
      q: "How long does a typical project take?",
        a: "Landing pages: 5–7 days. Web apps: 3–8 weeks. Custom software: 6–12 weeks. We'll give you an exact timeline in your free consultation.",
    },
    {
      q: "Do you work with international clients?",
      a: "Absolutely. We work with clients across India, the US, UK, and UAE. Payments in INR, USD, GBP, and AED accepted.",
    },
    {
      q: "What happens after the project is delivered?",
      a: "All plans include a support period (7–90 days depending on tier). After that, we offer affordable monthly maintenance packages.",
    },
    {
      q: "Will I own the source code?",
      a: "Yes, 100%. Upon final payment, you receive full ownership of the source code, design files, and all project assets.",
    },
  ],
};
