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
  sectionHeadText: "One view of the subsurface, from every dataset you have.",
  overview:
    "Built by exploration geologists and AI researchers, DepoDart brings multi-source geoscience data into a single analytical workflow. Your team spends less time preparing inputs and more time interpreting what the models find.",
};

//! Hero Text
export const HERO_TEXT = {
  eyebrow: "EXPLORATION INTELLIGENCE SOFTWARE",
  headline: "Get more out of your geoscience data.",
  subheadline:
    "DepoDart brings geological, geophysical, and geochemical inputs into one picture of the subsurface — so mineral exploration teams can focus on interpretation instead of data preparation.",
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
      "Highlight promising exploration areas from your integrated geoscience data.",
  },
  {
    title: "Exploration Decision Support",
    icon: null,
    IconComponent: CurrencyDollarIcon,
    description:
      "Inform drill-program decisions with evidence drawn from fused datasets.",
  },
  {
    title: "Resource & Reserve Insight",
    icon: null,
    IconComponent: IconZoomExclamation,
    description:
      "See known deposits through a multi-source lens, not a single dataset.",
  },
  {
    title: "Unified Data Pipeline",
    icon: null,
    IconComponent: IconShovel,
    description:
      "Combine geological, geochemical, and geophysical layers into a single workflow.",
  },
];

//! How It Works — 4-step process (replaces the old Experience timeline)
export const HOW_IT_WORKS = {
  sectionSubText: "HOW DEPODART WORKS",
  sectionHeadText: "From raw data to exploration insight.",
  description:
    "A coherent pipeline for mineral prospectivity — so your geologists interpret model output instead of preparing inputs.",
  steps: [
    {
      number: "01",
      title: "Assemble",
      description:
        "Bring your geological, geochemical, and geophysical data into one consistent data stack, in whatever formats your team already uses.",
    },
    {
      number: "02",
      title: "Model",
      description:
        "Machine-learning models fuse your inputs and estimate mineral distributions across the area of interest.",
    },
    {
      number: "03",
      title: "Target",
      description:
        "Review the resulting prospectivity maps and examine the zones the model ranks highest.",
    },
    {
      number: "04",
      title: "Deliver",
      description:
        "Share maps, reports, and model outputs with your team — or integrate them into your existing exploration workflow.",
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

//! Works / Products section
export const WORKS_TEXT = {
  sectionSubText: "OUR PRODUCTS",
  sectionHeading: "Software built for exploration teams.",
  description:
    "DepoDart applies machine learning to mineral prospectivity. Our models fuse multi-source geoscience data to estimate the distribution of mineral concentrations across a study area — giving your team a clearer view of where to focus next.",
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

//! Personas — speaks to specific buyers (descriptive, no metric claims)
export const PERSONAS = {
  sectionSubText: "WHO WE HELP",
  sectionHeadText: "Built for the teams making exploration decisions.",
  items: [
    {
      number: "01",
      eyebrow: "CEOS & VPS OF EXPLORATION",
      headline: "Lead exploration with evidence, not anecdote.",
      pain: "Boards and investors ask for the rationale behind every exploration dollar.",
      outcome:
        "DepoDart helps you shape a data-grounded exploration strategy — the kind that holds up under diligence and conversation.",
    },
    {
      number: "02",
      eyebrow: "CHIEF & EXPLORATION GEOLOGISTS",
      headline: "Give your models the data they deserve.",
      pain: "Most of the work in multi-source analysis is wrangling files, not interpreting results.",
      outcome:
        "We handle the data integration so your expertise can focus where it matters — reading the geology, not reformatting inputs.",
    },
    {
      number: "03",
      eyebrow: "INVESTORS & JV PARTNERS",
      headline: "Back exploration with a clearer view of the ground.",
      pain: "Technical diligence on a junior's asset is only as good as the inputs behind it.",
      outcome:
        "Interactive prospectivity maps turn exploration narratives into something an investment committee can actually evaluate.",
    },
  ],
};

//! Final CTA band above the footer
export const FINAL_CTA = {
  headline: "Curious what DepoDart sees in your data?",
  subheadline:
    "Book a working session with our team. Bring a project or region you're exploring — we will walk through how our models would approach it.",
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
    "Exploration intelligence software for the mining industry. Built by geologists and AI researchers.",
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
