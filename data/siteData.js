export const siteData = {
  brand: {
    name: "DevTechForge",
    tagline: "We build scalable web apps for startups & businesses",
    logo: "⬡",
  },

  hero: {
    badge: "Fresh & Hungry",
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
        icon: "speed",
        title: "Speed Without Sacrifice",
        desc: "Fast delivery doesn't mean cutting corners. We move quickly because we're experienced, not careless.",
      },
      {
        icon: "security",
        title: "Radical Transparency",
        desc: "No surprises. You get daily updates, clean code, and honest timelines from day one.",
      },
      {
        icon: "growth",
        title: "Built for Growth",
        desc: "Every line of code we write is designed to scale. Your success is our longest-running project.",
      },
    ],
  },

  team: [
    {
      name: "Prathviraj Acharya",
      image: "https://drive.google.com/thumbnail?id=1HLbhtEJxSujKGbgBdtk9oJ6xCW2eNkGj&sz=w1000",
      avatar: "PA",
      bio: "Driving product strategy, design, and delivery with a strong focus on client success.",
      skills: ["Product Strategy", "React", "Next.js", "UI/UX", "Growth"],
      social: { github: "https://github.com/prathviraj-03", linkedin: "https://www.linkedin.com/in/prathviraj-j-acharya/" },
    },
    {
      name: "Priyanka",
      image: "https://drive.google.com/thumbnail?id=1_n_nYgfeEAL3rzOvWll4y20Ntt7Bz-18&sz=w1000",
      avatar: "P",
      bio: "Creates polished interfaces and seamless user experiences that convert.",
      skills: ["Figma", "React", "Next.js", "Accessibility", "Brand Design"],
      social: { github: "https://github.com/Priyanka959", linkedin: "https://www.linkedin.com/in/priyanka-b04963313/" },
    },
    {
      name: "Dhanush",
      image: "https://drive.google.com/thumbnail?id=1CPwf6kztih8PwBT_CpayCyKSUt0w2fMJ&sz=w1000",
      avatar: "D",
      bio: "Builds scalable systems and clean architecture for web and mobile products.",
      skills: ["Node.js", "API Design", "Cloud", "Databases", "DevOps"],
      social: { github: "https://github.com/dhnshshettigar", linkedin: "https://www.linkedin.com/in/dhanush-shettigar-914766231/" },
    }
  ],

  services: [
    {
      icon: "web",
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
      icon: "custom",
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
      icon: "backend",
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
      icon: "ecommerce",
      title: "E-Commerce",
      description:
        "Revenue-optimized stores on Shopify, WooCommerce, or fully custom solutions with payment gateway integration.",
      features: [
        "Payment Gateway",
        "Inventory Management",
        "Order Tracking",
        "Conversion Optimization",
      ],
    },
    {
      icon: "ai",
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
      icon: "cloud",
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
      tier: "Basic",
      badge: null,
      price: "₹8,000",
      period: "project",
      description: "Price can vary according to requirement.",
      features: [
        "4 Pages",
        "Mobile Responsive",
        "Basic Meta Tags",
        "Before / After Gallery: Basic",
        "WhatsApp Chat Button",
      ],
      notIncluded: [
        "Online Booking",
        "Blog",
        "Testimonials Page",
        "Local SEO",
        "Live Chat Widget",
        "Telemedicine / Video Call",
        "Patient Portal",
        "Payment Gateway",
        "Multi-language Support",
        "Analytics Dashboard",
      ],
      cta: "Choose Basic",
      highlight: false,
    },
    {
      tier: "Standard",
      badge: "Most Popular",
      price: "₹15,000",
      period: "project",
      description: "Price can vary according to requirement.",
      features: [
        "8–10 Pages",
        "Mobile Responsive",
        "Online Booking",
        "Blog — Starter",
        "Before / After Gallery: Filterable",
        "Testimonials Page",
        "Local SEO",
        "WhatsApp Chat Button",
        "Live Chat Widget",
        "Google Analytics",
      ],
      notIncluded: [
        "Telemedicine / Video Call",
        "Patient Portal",
        "Payment Gateway",
        "Multi-language Support",
        "Analytics Dashboard",
      ],
      cta: "Choose Standard",
      highlight: true,
    },
    {
      tier: "Custom",
      badge: null,
      price: "Custom",
      period: "quote",
      description: "Custom scope for products with advanced workflows, portals, AI, and integrations.",
      features: [
        "20+ Pages",
        "Mobile Responsive",
        "Online Booking — Advanced",
        "Blog — Full Hub",
        "Before / After Gallery + Video",
        "Testimonials Page — Aggregated",
        "Full SEO Suite",
        "WhatsApp Chat Button + Chatbot",
        "Live Chat Widget — AI-Powered",
        "Telemedicine / Video Call",
        "Patient Portal",
        "Payment Gateway — Razorpay",
        "Multi-language Support",
        "Analytics Dashboard — Full Dashboard",
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
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "MediConnect App",
      description:
        "Telemedicine platform connecting patients with doctors. Video consults, prescription management, and appointment booking.",
      tech: ["React Native", "Firebase", "WebRTC", "Stripe"],
      category: "HealthTech",
      result: "10,000+ consults in first 3 months",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "ShopNest E-Commerce",
      description:
        "High-conversion Shopify alternative built custom for a D2C fashion brand. Includes AI-powered size recommendations.",
      tech: ["Next.js", "Shopify API", "OpenAI", "Redis"],
      category: "E-Commerce",
      result: "₹2.1Cr revenue in launch quarter",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "LogiRoute Platform",
      description:
        "Fleet management and logistics optimization SaaS. Real-time GPS tracking, route optimization, and driver analytics.",
      tech: ["React", "Node.js", "MongoDB", "Google Maps API"],
      category: "Logistics",
      result: "40% reduction in fuel costs for clients",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "EduSpark LMS",
      description:
        "Learning management system for coaching institutes. Live classes, recorded content, quiz engine, and certificates.",
      tech: ["Next.js", "Django", "AWS S3", "Razorpay"],
      category: "EdTech",
      result: "5,000+ students onboarded in 60 days",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "TalentHub ATS",
      description:
        "AI-powered applicant tracking system. Resume parsing, interview scheduling, and candidate scoring automation.",
      tech: ["React", "FastAPI", "OpenAI", "PostgreSQL"],
      category: "HR Tech",
      result: "Hiring time cut by 65% for 30 companies",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
    },
  ],

  testimonials: [
    {
      name: "Vikram Nair",
      role: "CEO, FinTrack",
      avatar: "VN",
      feedback:
        "DevTechForge delivered our entire dashboard in 3 weeks. The quality was enterprise-level. We raised our seed round partly on the strength of the product they built.",
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
        "Our old Shopify store was slow and losing us sales. DevTechForge built a custom solution that cut our page load time by 70% and boosted conversion by 35%. ROI was immediate.",
      rating: 5,
      project: "ShopNest E-Commerce",
    },
    {
      name: "Deepa Menon",
      role: "CTO, LogiRoute",
      avatar: "DM",
      feedback:
        "I've worked with many dev agencies. DevTechForge stands apart — clean code, good architecture decisions, and they actually push back when an idea won't scale. That's rare.",
      rating: 5,
      project: "LogiRoute Platform",
    },
  ],

  contact: {
    email: "prathvirajacharya0407@gmail.com",
    phone: "+91 9380985762",
    whatsapp: "https://api.whatsapp.com/send?phone=919380985762&text=Hi%20DevTechForge!%20I'd%20like%20to%20discuss%20a%20project%20with%20your%20team.",
    whatsappMessage:
      "Hi DevTechForge! I'd like to discuss a project with your team.",
    location: "Mangalore, India (Remote-First)",
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
