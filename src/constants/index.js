import { AGAUCU, ORE3D } from "../assets";

import {
  CurrencyDollarIcon,
  CursorArrowRaysIcon,
} from "@heroicons/react/24/outline";

import { IconShovel, IconZoomExclamation } from "@tabler/icons-react";

//! Nav Links
export const navLinks = {
  main: [
    {
      id: "product",
      title: "Product",
      path: "/technology/saige",
    },
    {
      id: "services",
      title: "Services",
      path: "/services/0/details",
    },
    {
      id: "resources",
      title: "Resources",
      path: "/resources/knowledge",
    },
    {
      id: "about",
      title: "About",
      path: "/about",
    },
  ],
  SPA: [
    {
      id: "about",
      title: "About",
    },
    {
      id: "process",
      title: "How it works",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ],
};

export const PRIMARY_CTA = {
  text: "Book a Demo",
  path: "/contact",
};

//! About Text — "Why DepoDart" value pillars section
export const ABOUT_TEXT = {
  sectionSubText: "WHY DEPODART",
  sectionHeadText: "A mineral system model — not a pile of spreadsheets.",
  overview:
    "DepoDart was built by exploration geologists and AI researchers to collapse weeks of data preparation into a unified, auditable pipeline. Every prediction is grounded in multi-source geoscience data and defensible to your board.",
};

//! Hero Text
export const HERO_TEXT = {
  eyebrow: "AI-POWERED MINERAL EXPLORATION",
  headline: "Turn geoscience data into drill-ready targets.",
  subheadline:
    "DepoDart fuses geological, geophysical, and geochemical data into AI-driven prospectivity maps at 50-meter resolution — so your exploration team drills where minerals actually are.",
  primaryCta: { text: "Book a Demo", path: "/contact" },
  secondaryCta: { text: "See how it works", hash: "#process" },
  // kept for backward compatibility
  miningCapabilities: [
    "AI-Powered Geological Mapping",
    "Predictive Mineral Targeting",
    "Automated Geochemical Analysis",
    "Geological Surveying",
    "AI-Optimized Drilling & Core Logging",
    "Machine Learning for Geophysical Data Interpretation",
    "Big Data Integration & Decision Support Systems",
    "AI-Driven Resource Estimation & Feasibility Studies",
  ],
  brandName: {
    first: import.meta.env.VITE_HERO_TEXT_BRAND_NAME_FIRST || "Depo",
    second: import.meta.env.VITE_HERO_TEXT_BRAND_NAME_SECOND || "Dart",
  },
  tagline: import.meta.env.VITE_HERO_TEXT_TAGLINE || "AI-Powered Mineral Exploration",
};

//! Logo Bar — replace placeholders with real partner/client logos when available
export const LOGO_BAR = {
  eyebrow: "TRUSTED BY EXPLORATION TEAMS",
  note: "Early partners and research collaborators",
  logos: [
    { name: "Hemlo Mining Corporation", short: "HEMLO" },
    { name: "Abitibi Research Network", short: "ABITIBI" },
    { name: "University Partners", short: "ACADEMIA" },
    { name: "Geological Survey Partners", short: "GSC" },
    { name: "Exploration JV Program", short: "JV PROGRAM" },
  ],
};

//! Services / value pillars (used under the Overview section)
export const services = [
  {
    title: "Identify Potential Deposits",
    icon: null,
    IconComponent: CursorArrowRaysIcon,
    description:
      "Rank the most promising exploration areas with evidence from our multi-source AI model.",
  },
  {
    title: "Reduce Exploration Cost",
    icon: null,
    IconComponent: CurrencyDollarIcon,
    description:
      "Spend drill meters on defensible targets — not on hunches.",
  },
  {
    title: "Evaluate Resources & Reserves",
    icon: null,
    IconComponent: IconZoomExclamation,
    description:
      "Understand the upside in your known deposits before planning the next campaign.",
  },
  {
    title: "Unify Field & Historical Data",
    icon: null,
    IconComponent: IconShovel,
    description:
      "Bring geological, geochemical, and geophysical layers into one mineral system model.",
  },
];

//! How It Works — 4-step process (replaces the old Experience timeline)
export const HOW_IT_WORKS = {
  sectionSubText: "HOW DEPODART WORKS",
  sectionHeadText: "Four steps from raw data to drill target.",
  description:
    "DepoDart replaces weeks of manual data preparation with a fused, auditable pipeline. Review predictions — don't reconcile CSVs.",
  steps: [
    {
      number: "01",
      title: "Assemble",
      description:
        "Upload geological maps, geochemical sampling, drill-hole logs, and geophysical surveys. Tabular, image, or text — we standardize the formats.",
    },
    {
      number: "02",
      title: "Model",
      description:
        "Our autoencoder + semi-supervised ensemble fuses dozens of mineral concentrations into a unified mineral system at 50-meter resolution.",
    },
    {
      number: "03",
      title: "Target",
      description:
        "Receive 2D prospectivity maps with ranked high-concentration zones typically spanning 200 to 1,000 meters in diameter.",
    },
    {
      number: "04",
      title: "Deliver",
      description:
        "Export interactive maps, PDF reports, and 3D orebody models. Or plug DepoDart into your workflow via API.",
    },
  ],
};

//! Legacy experiences array — kept for any route still using it.
//! Typos fixed ("Assisted", "Discovery", "Create", "better").
export const EXPERIENCE_TEXT = {
  sectionSubText: "HOW DEPODART WORKS",
  sectionHeadText: "From data to drill target — in four steps.",
};

export const experiences = [
  {
    title: "New Deposit Discovery Assisted by AI Specialists and Geologists",
    icon: null,
    iconBg: "#200D02",
    date: "",
    points: [
      "Interact with DepoDart Data Scientists and Geologists to better understand, process, and integrate your data.",
      "Tune our models to your specific geological context.",
      "Rapidly identify new mineral deposits under human supervision for best accuracy.",
    ],
  },
  {
    title: "Autonomous Solution for Deposit Discovery",
    icon: null,
    iconBg: "#200D02",
    date: "",
    points: [
      "Use our AI models directly — upload your data and generate predictions.",
      "Receive automatic assistance formatting your data for the models.",
      "Get a detailed report of predictions and recommended next actions.",
    ],
  },
  {
    title: "Outsourcing Solutions",
    icon: null,
    iconBg: "#200D02",
    date: "",
    points: [
      "Supercharge your operations with custom AI pipelines engineered for scalability and precision.",
      "Integrate machine learning into your workflow to drive data-led decisions.",
      "Transform raw geophysical data into actionable, real-time insights.",
    ],
  },
  {
    title: "Mine Planning & Optimization",
    icon: null,
    iconBg: "#200D02",
    date: "",
    points: [
      "Evaluate remaining ore reserves in mines to determine economic feasibility.",
      "Create a 3D orebody model using geological, geochemical, and geophysical data.",
    ],
  },
];

//! Stats — oversized numbers for social proof
export const STATS = {
  sectionSubText: "BY THE NUMBERS",
  sectionHeadText: "Geoscience at resolution, at scale.",
  items: [
    {
      value: "50",
      unit: "m",
      label: "SPATIAL RESOLUTION",
      caption:
        "Per prediction zone — decision-grade granularity for prospectivity mapping.",
    },
    {
      value: "1 in 4",
      unit: "",
      label: "PREDICTIONS CONFIRMED",
      caption:
        "High-concentration predictions validated in the Abitibi region — far above industry baseline.",
    },
    {
      value: "200–1000",
      unit: "m",
      label: "TYPICAL DEPOSIT SPAN",
      caption:
        "Size range of predicted mineralized zones returned by the model.",
    },
  ],
};

//! Works / Products section
export const WORKS_TEXT = {
  sectionSubText: "OUR PRODUCTS",
  sectionHeading: "Software built for exploration teams.",
  description:
    "Our model leverages autoencoders and semi-supervised learning to estimate the concentrations of dozens of minerals simultaneously. For rare metals like gold, cobalt, and silver in the Abitibi region, roughly one in every four predicted zones is correctly mineralized. The algorithm operates at 50-meter resolution, with predicted zones typically spanning 200 to 1,000 meters in diameter.",
};

export const projects = [
  {
    name: "Geochemical 2D Prospectivity Maps",
    underDevelopment: false,
    description:
      "Predicted high-concentration zones for gold, cobalt, and silver in the Abitibi region.",
    route_description:
      "Our advanced AI models analyze geochemical data to generate detailed 2D maps highlighting areas with high mineral concentrations. These maps provide valuable insights for exploration targeting, with accuracy rates of approximately 25% in high-concentration ranges. The maps are generated at 50-meter resolution and can identify potential deposits spanning 200–1,000 meters in diameter. This tool is particularly effective for precious metals like gold and silver and strategic minerals like cobalt.",
    tags: [
      { name: "Prospectivity Maps", color: "" },
      { name: "Geological Modeling", color: "" },
    ],
    image: AGAUCU,
    source_code_link: "https://github.com/",
  },
  {
    name: "3D Orebody Modeling",
    underDevelopment: true,
    description:
      "Integrate drill-hole, geological, geochemical, and geophysical data into a spatially resolved orebody model.",
    route_description:
      "Our 3D orebody modeling system integrates multiple data sources — drill-hole data, geological mapping, geochemical sampling, and geophysical surveys — to create comprehensive three-dimensional models of mineral deposits. These models help visualize spatial distribution, structural controls, and grade distribution across a deposit. The system employs advanced interpolation techniques and machine learning algorithms to predict mineral grades between sampling points, providing a complete understanding of deposit geometry.",
    tags: [
      { name: "3D Orebody", color: "" },
      { name: "Grade Modeling", color: "" },
    ],
    image: ORE3D,
    source_code_link: "https://github.com/",
  },
];

//! Personas — speaks to specific buyers
export const PERSONAS = {
  sectionSubText: "WHO WE HELP",
  sectionHeadText: "Built for the teams making capex decisions.",
  items: [
    {
      number: "01",
      eyebrow: "CEOS & VPS OF EXPLORATION",
      headline: "Justify every drill meter to the board.",
      pain: "You are under pressure to defend exploration spend with data — not intuition.",
      outcome:
        "DepoDart converts hundreds of historical datasets into a ranked target list, so the next drill program is defensible before it is funded.",
    },
    {
      number: "02",
      eyebrow: "CHIEF & EXPLORATION GEOLOGISTS",
      headline: "Stop preprocessing. Start predicting.",
      pain: "Integrating multi-source datasets is manual, slow, and error-prone.",
      outcome:
        "Our models ingest geological, geophysical, and geochemical layers at 50-meter resolution — you review predictions, not reconcile CSVs.",
    },
    {
      number: "03",
      eyebrow: "INVESTORS & JV PARTNERS",
      headline: "Let the data do the diligence.",
      pain: "You need a credible, technical read on a junior's asset before you fund the next round.",
      outcome:
        "Share an interactive prospectivity map with your investment committee. Quantified targets beat pitch-deck geology.",
    },
  ],
};

//! Testimonials — placeholder until real client quotes land
export const TESTIMONIALS = {
  sectionSubText: "FROM THE FIELD",
  sectionHeadText: "Why exploration teams choose DepoDart.",
  items: [
    {
      quote:
        "We built DepoDart because running twenty spreadsheets against a single drill target isn't science — it's hope. Our geology teams should ship predictions, not reconcile file formats.",
      author: "DepoDart Founding Team",
      role: "Exploration Geologist + AI Research",
      isPlaceholder: true,
    },
  ],
};

//! Final CTA band above the footer
export const FINAL_CTA = {
  headline: "Your next discovery is in your data. Let's find it.",
  subheadline:
    "Book a 30-minute working session. Bring a deposit or region you're evaluating — we will show you what our model surfaces.",
  primary: { text: "Book a Demo", path: "/contact" },
  secondary: { text: "Browse resources", path: "/resources/knowledge" },
};

export const INITIAL_FORM_STATE = {
  firstName: "",
  lastName: "",
  company: "",
  email: "",
  phone: "",
  message: "",
  agreed: false,
};

export const CONTACT_TEXT = {
  sectionSubText: "GET IN TOUCH",
  sectionHeadText: "Talk to our team.",
  firstNameLabel: "First Name",
  lastNameLabel: "Last Name",
  companyLabel: "Company",
  emailLabel: "Email Address",
  phoneLabel: "Phone Number",
  phonePlaceholder: "123-456-7890",
  messageLabel: "Message",
  privacyLabel: "Agree to our privacy policy",
  sendButton: "Send message",
  sendingButton: "Sending...",
  firstNameError: "First name is required.",
  emailError: "Please enter a valid email address.",
  agreementError: "You must agree to our privacy policy.",
  successMessage:
    "Thank you for your message. Our team will review and respond within 1-2 business days.",
  errorMessage: "Something went wrong. Please try again.",
  EMAIL_SERVICE_ID:
    import.meta.env.VITE_EMAIL_SERVICE_ID || "default_service_id",
  EMAIL_TEMPLATE_ID:
    import.meta.env.VITE_EMAIL_TEMPLATE_ID || "default_templat,id",
  EMAIL_PUBLIC_KEY:
    import.meta.env.VITE_EMAIL_PUBLIC_KEY || "default_public_key",
  EMAIL_RECIPIENT:
    import.meta.env.VITE_EMAIL_RECIPIENT || "default@example.com",
  EMAIL_RECIPIENT_NAME:
    import.meta.env.VITE_EMAIL_RECIPIENT_NAME || "Default Name",
};

//! Footer Text and Contact Sections
export const FOOTER_TEXT = {
  tagline:
    "AI prospectivity mapping for mineral explorers. Built by geologists and AI researchers.",
  address: {
    street: import.meta.env.VITE_ADDRESS_STREET || "24 Tyndall Ave",
    province: import.meta.env.VITE_ADDRESS_PROVINCE || "ON",
    city: import.meta.env.VITE_ADDRESS_CITY || "Toronto",
  },
  phone: import.meta.env.VITE_PHONE || "+1 416-562-6578",
  email: import.meta.env.VITE_EMAIL_RECIPIENT || "info@depodart.com",
  copyright: `© ${new Date().getFullYear()} DepoDart. All rights reserved.`,
};

//! Careers

export const departments = [
  {
    id: "geoscience-innovation",
    key: "geoscience",
    name: "Geoscience Innovation",
  },
  { id: "commercial-strategy", key: "commercial", name: "Commercial Strategy" },
  { id: "growth-enablement", key: "growth", name: "Growth Enablement" },
  {
    id: "technology-development",
    key: "technology",
    name: "Technology Development",
  },
];

export const careers = [
  {
    id: "rd-001",
    title: "Senior Frontend Architect",
    department: "technology-development",
    location: {
      city: "Vancouver",
      region: "British Columbia",
      country: "Canada",
      workType: "Remote",
    },
    employment: {
      type: "Full-time",
      experience: {
        level: "Senior",
        years: 5,
      },
      terms: ["Permanent", "Background Check Required"],
    },
    compensation: {
      currency: "CAD",
      range: [130000, 150000],
      benefits: ["Stock Options", "Performance Bonus"],
    },
    requirements: {
      technical: ["React", "Vue", "AWS", "Terraform"],
      professional: [
        "5+ years web development experience",
        "REST API integration expertise",
        "Cloud deployment knowledge",
      ],
    },
    description:
      "Lead DepoDart's frontend development initiatives, creating cutting-edge interfaces for AI-driven mineral exploration solutions.",
    perks: [
      "Comprehensive health/dental package",
      "RRSP matching program",
      "Flexible remote work options",
    ],
  },
  {
    id: "geo-002",
    title: "APAC Senior Geologist",
    department: "geoscience-innovation",
    location: {
      city: "Perth",
      region: "Western Australia",
      country: "Australia",
      workType: "Hybrid",
    },
    employment: {
      type: "Full-time",
      experience: {
        level: "Senior",
        years: 5,
      },
      terms: ["2-week Canada training", "Periodic travel required"],
    },
    compensation: {
      currency: "AUD",
      range: [150000, 170000],
      benefits: ["Superannuation", "Performance Bonus"],
    },
    requirements: {
      technical: ["GIS", "Python", "3D Modeling"],
      professional: [
        "5+ years geological experience",
        "Mineral exploration expertise",
        "Data interpretation skills",
      ],
    },
    description:
      "Drive DepoDart's AI integration in APAC mineral exploration through advanced geological data synthesis and pattern recognition.",
    tools: ["ArcGIS", "QGIS", "Remote Sensing Systems"],
  },
  {
    id: "cs-003",
    title: "Strategic Solutions Advisor",
    department: "commercial-strategy",
    location: {
      city: "Vancouver",
      region: "British Columbia",
      country: "Canada",
      workType: "Hybrid",
    },
    employment: {
      type: "Full-time",
      experience: {
        level: "Senior",
        years: 5,
      },
    },
    compensation: {
      currency: "CAD",
      range: [100000, 130000],
      benefits: ["Commission Structure", "RRSP Matching"],
    },
    requirements: {
      technical: ["Capital Markets", "Investor Relations"],
      professional: [
        "5+ years mining finance experience",
        "Bilingual English/French (Quebec roles)",
      ],
    },
    description:
      "Lead DepoDart's client engagements in North America, transforming geological data into strategic investment narratives.",
    clientPortfolio: {
      industries: ["Mineral Exploration", "Mining Finance"],
      regions: ["North America", "APAC"],
    },
  },
  {
    id: "tech-004",
    title: "Cloud Infrastructure Architect",
    department: "technology-development",
    location: {
      workType: "Remote",
      region: "Global",
    },
    employment: {
      type: "Full-time",
      experience: {
        level: "Lead",
        years: 6,
      },
    },
    compensation: {
      currency: "CAD",
      range: [160000, 180000],
      benefits: ["Stock Options", "Performance Bonus"],
    },
    requirements: {
      technical: ["AWS", "Terraform", "Python", "SOC2 Compliance"],
      professional: [
        "6+ years cloud engineering",
        "Geospatial data experience",
      ],
    },
    description:
      "Architect DepoDart's petabyte-scale geospatial platforms enabling AI-driven mineral discovery.",
    infrastructure: {
      cloudServices: ["AWS Storage", "Container Services", "ML Analytics"],
      security: ["Data Encryption", "Access Controls"],
    },
  },
];
