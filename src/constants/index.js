import { AGAUCU } from "../assets";
import { Results } from "../assets";
import { ORE3D } from "../assets";

import {
  BeakerIcon,
  CpuChipIcon,
  ClockIcon,
  CurrencyDollarIcon,
  CursorArrowRaysIcon,
} from "@heroicons/react/24/outline";

import { IconShovel, IconZoomExclamation } from "@tabler/icons-react";

//! Nav Links
export const navLinks = {
  main: [
    // {
    //   id: "home",
    //   title: "Home",
    //   path: "/",
    // },
    // {
    //   id: "careers",
    //   title: "Careers",
    //   path: "/careers",
    // },
    {
      id: "services",
      title: "Services",
      path: "/services/1/details",
    },
    {
      id: "contact",
      title: "Explore with us",
      path: "/contact",
    },
  ],
  SPA: [
    {
      id: "about",
      title: "About",
    },
    {
      id: "experience",
      title: "Services",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ],
};

//! About Text
export const ABOUT_TEXT = {
  sectionSubText: "",
  sectionHeadText: "Overview",
  overview:
    "At DepoDart, we leverage large geological, geophysical, and geochemical datasets to train specialized AI models that identify rare mineral deposits. Our big data-driven model can be fine-tuned to integrate local data from the area of interest, enhancing predictions and adapting to its unique geological characteristics.",
};

//! Hero Text
export const HERO_TEXT = {
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

//! Services

export const services = [
  {
    title: "Potential Deposits Identification",
    icon: null,
    IconComponent: CursorArrowRaysIcon,
    description:
      "Discover the most promising areas for exploration identified by our Data-Driven AI model.",
  },
  {
    title: "Exploration Cost Reduction",
    icon: null,
    IconComponent: CurrencyDollarIcon,
    description:
      "Make the most of your resources with precise insights from AI.",
  },
  {
    title: "Mineral Resource & Reserve Evaluation",
    icon: null,
    IconComponent: IconZoomExclamation,
    description:
      "Evaluate the potential of your mineral resources and reserves with AI.",
  },
  {
    title: "Data Collection & Integration",
    icon: null,
    IconComponent: IconShovel,
    description:
      "Collect your data in the field and integrate it to create a comprehensive geological model.",
  },
];

//! Experience Text
export const EXPERIENCE_TEXT = {
  sectionSubText: "", // TODO: Add a slogan here
  sectionHeadText: "OUR SERVICES",
};

export const experiences = [
  {
    title: "New Deposit Discovery Asisted by AI specialists and geologists",
    //sub_title: "Data Scientist & Geologist personal assistance",
    icon: null,
    iconBg: "#200D02",
    date: "",
    points: [
      "Interact with DepoDart Data Scientists and Geologists to beter understand, process and integrate your data.",
      "Tune our models to your specific geological context.",
      "Rapidly identify your new mineral deposits under human supervision for best accuracy.",
    ],
  },
  {
    title: "Autonomous Solution for Deposit Descovery",
    // sub_title: "Intelligent Automation",
    icon: null,
    iconBg: "#200D02",
    date: "",
    points: [
      "Use our AI models yourself by enter your data and generate your predictions.",
      "Receive automatic assistance in placing your data in the correct format.",
      "Get a detailed report of your predictions and recommendations for further actions.",
    ],
  },
  {
    title: "Outsourcing Solutions",
    // sub_title: "Enterprise AI Integration Services",
    icon: null,
    iconBg: "#200D02",
    date: "",
    points: [
      "Supercharge your operations with custom AI pipelines engineered for unmatched scalability and precision.",
      "Seamlessly integrate robust machine learning to drive data-led decisions and elevate exploration outcomes.",
      "Transform raw geophysical data into real-time, actionable insights with cutting-edge deep learning.",
    ],
  },
  {
    title: "Mine Planning & Optimization",
    // sub_title: "Resource Modeling",
    icon: null,
    iconBg: "#200D02",
    date: "",
    points: [
      "Evaluate remaining ore reserves in mines to determine economic feasibility.",
      "Createe a 3D orebody model of a mineral deposit using geological, geochemical, and geophysical data",
    ],
  },
];

//! Text content for Works component
export const WORKS_TEXT = {
  sectionHeading: "Why DepoDart?",
  description:
    "Our model leverages autoencoders and semi-supervised learning to estimate\
   the concentrations of dozens of minerals simultaneously. For rare minerals like gold, \
   cobalt, and silver in Abitibi region, one every four zones predicted predicted as mineralized is correct. The algorithm operates at a 50-meter resolution, \
   with predicted mineralized zones typically spanning 200 to 1000 meters in diameter.",
};

export const projects = [
  {
    name: "Geochemical 2D maps",
    underDevelopment: false,
    description:
      "Predicted areas of high-concentration zones for gold, cobalt, and silver in Abitibi region.",
    route_description: "Our advanced AI models analyze geochemical data to generate detailed 2D maps highlighting areas with high mineral concentrations. These maps provide valuable insights for exploration targeting, with accuracy rates of approximately 25% in high-concentration ranges. The maps are generated at a 50-meter resolution and can identify potential deposits spanning 200-1000 meters in diameter. This tool is particularly effective for precious metals like gold, silver, and strategic minerals like cobalt.",
    tags: [
      { name: "Geochemical maps", color: "" }, //"green-text-gradient"
      { name: "Geological Modeling", color: "" }, //"pink-text-gradient"
    ],
    image: AGAUCU,
    source_code_link: "https://github.com/",
  },

  {
    name: "3D orebody model",
    underDevelopment: true,
    description:
      "Create 3D maps of a mineral deposit using geological, geochemical, and geophysical data",
    route_description: "Our 3D orebody modeling system integrates multiple data sources including drill hole data, geological mapping, geochemical sampling, and geophysical surveys to create comprehensive three-dimensional models of mineral deposits. These models help visualize the spatial distribution of mineralization, structural controls, and geological features. The system employs advanced interpolation techniques and machine learning algorithms to predict mineral grades between sampling points, providing a more complete understanding of the deposit's geometry and grade distribution.",
    tags: [
      { name: "3D orebody", color: "" },
      { name: "Geochemical maps", color: "" },
    ],
    image: ORE3D,
    source_code_link: "https://github.com/",
  },
  // {
  //   name: "AI Exploration Reports",
  //   underDevelopment: false,
  //   description:
  //     "Get a detailed report of your predictions and recommendations for further actions.",
  //   route_description: "Our AI-powered reporting system generates comprehensive exploration reports that include detailed analysis of mineral potential, risk assessment, and recommended next steps. The reports incorporate machine learning predictions, statistical analysis of geochemical data, and geological interpretations. Each report includes high-resolution maps, probability distributions of mineral occurrences, and specific recommendations for follow-up exploration activities such as drilling targets or additional sampling locations. The system also provides confidence levels for predictions and highlights areas of uncertainty that may require additional investigation.",
  //   tags: [
  //     { name: "Predictive Analytics", color: "" },
  //     { name: "Geological Modeling", color: "" },
  //   ],
  //   image: Results,
  //   source_code_link: "https://github.com/",
  // },
];

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
  sectionSubText: "Get in touch",
  sectionHeadText: "Contact Sales",
  firstNameLabel: "First Name",
  lastNameLabel: "Last Name",
  companyLabel: "Company",
  emailLabel: "Email Address",
  phoneLabel: "Phone Number",
  phonePlaceholder: "123-456-7890",
  messageLabel: "Message",
  privacyLabel: "Agree to our privacy policy",
  sendButton: "Let's talk",
  sendingButton: "Sending...",
  firstNameError: "First name is required.",
  emailError: "Please enter a valid email address.",
  agreementError: "You must agree to our privacy policy.",
  successMessage:
    "Thank you for your message. Our team will review and respond within 1-2 business days.",
  errorMessage: "Something went wrong. Please try again",
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
  address: {
    street: import.meta.env.VITE_ADDRESS_STREET || "24 Tyndall Ave",
    province: import.meta.env.VITE_ADDRESS_PROVINCE || "ON",
    city: import.meta.env.VITE_ADDRESS_CITY || "Toronto",
  },
  phone: import.meta.env.VITE_PHONE || "+1 416-562-6578",
  email: import.meta.env.VITE_EMAIL_RECIPIENT || "info@depodart.com",
  copyright: `© ${new Date().getFullYear()} ${
    import.meta.env.VITE_EMAIL_RECIPIENT_NAME || ""
  }. All rights reserved.`,
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
