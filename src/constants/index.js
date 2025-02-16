import {
  mathwork,
  python,
  mhft,
} from "../assets";
import { 
  BeakerIcon,
  CpuChipIcon,
  ClockIcon, 
} from '@heroicons/react/24/outline'




//! Nav Links
export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Research", 
  },
  {
    id: "contact",
    title: "Contact",
  },
];

//! About Text
export const ABOUT_TEXT = {
  sectionSubText: "Introduction",
  sectionHeadText: "Overview",
  overview: "At DepoDart, we collect and process large geological, geophysical, remote sensing, satellite and geochemical datasets to identify rare mineral deposits through specialized AI models. Our big data-driven model can be continuously retrained, integrating local data from the area of interest to refine predictions and adapt to its unique geological characteristics."
};


//! Hero Text
export const HERO_TEXT = {
  miningCapabilities: ["AI-Powered Geological Mapping",
    "Predictive Mineral Targeting",
    "Automated Geochemical Analysis",
    "Geological Surveying",
    "AI-Optimized Drilling & Core Logging",
    "Machine Learning for Geophysical Data Interpretation",
    "Big Data Integration & Decision Support Systems",
    "AI-Driven Resource Estimation & Feasibility Studies"
  ],
  brandName: {
    first: import.meta.env.VITE_HERO_TEXT_BRAND_NAME_FIRST,
    second: import.meta.env.VITE_HERO_TEXT_BRAND_NAME_SECOND
  },
  tagline: import.meta.env.VITE_HERO_TEXT_TAGLINE
};



//! Services

export const services = [
  { 
    title: "Potential Deposits Identification",
    icon: null,
    IconComponent: CpuChipIcon,
    description: ""
  },
  { 
    title: "Exploration Cost Reduction",
    icon: null,
    IconComponent: ClockIcon,
    description: ""
  },
  { 
    title: "Mine Planning & Optimization",
    icon: null,
    IconComponent: BeakerIcon,
    description: ""
  },
  { 
    title: "Data Collection & Integration",
    icon: null,
    IconComponent: BeakerIcon,
    description: ""
  },
];

export const experiences = [
  {
    title: "New Deposit Discovery Asisted by AI specialists and geologists",
    //sub_title: "Data Scientist & Geologist personal assistance",
    icon: null,
    iconBg: "#00cea8", // Gold
    // iconBg: "#FFD700", // Gold
    date: "",
    points: [
      "Interact with DepoDart Data Scientists and Geologists to beter understand, process and integrate your data.",
      "Tune our models to your specific geological context.",
      "Rapidly identify your new mineral deposits under human supervision for best accuracy."
    ]
  },
  {
    title: "Consulting Powered AI",
    sub_title: "Expert AI Consulting & Geoscience Integration",
    icon: null,
    iconBg: "#B87333", // Copper
    date: "",
    points: [
      "Unlock AI's true potential with consulting that merges deep geoscience expertise with advanced analytics.",
      "Get tailored strategies to implement machine learning that revolutionizes your data interpretation.",
      "Leverage bespoke AI solutions designed to overcome your unique geological challenges and drive success."
    ],
  },
  {
    title: "Autonomous Solutions",
    sub_title: "Intelligent Automation & Robotics Division",
    icon: null,
    iconBg: "#ff6b6b", // Ruby red
    date: "",
    points: [
      "Experience next-level automation with AI-driven systems that revolutionize data collection in mining.",
      "Deploy real-time deep learning models for continuous mapping and proactive, smart monitoring.",
      "Benefit from self-optimizing algorithms that predict maintenance needs and maximize operational efficiency."
    ],
  },
  {
    title: "Outsourcing Solutions", 
    sub_title: "Enterprise AI Integration Services",
    icon: null,
    iconBg: "#915eff", // Emerald
    date: "",
    points: [
      "Supercharge your operations with custom AI pipelines engineered for unmatched scalability and precision.",
      "Seamlessly integrate robust machine learning to drive data-led decisions and elevate exploration outcomes.",
      "Transform raw geophysical data into real-time, actionable insights with cutting-edge deep learning."
    ],
  },
  {
    title: "Mineral Resource & Reserve Evaluation",
    sub_title: "Precision Geological Intelligence Solutions",
    icon: null,
    iconBg: "#4F5555", // Hematite gray
    date: "",
    points: [
      "Assesses remaining ore reserves to determine economic feasibility.",
      "resource modeling, grade control, and depletion analysis."
    ],
  },
];

//! Text content for Works component
export const WORKS_TEXT = {
  sectionHeading: "Why DepoDart?",
  description: "Our science and geology team developed a neural network utilizing advanced deep learning, achieving 98.5% accuracy in mineral deposit prediction. The AI integrates ensemble learning, custom attention mechanisms, and active learning to process complex geological data with precision, delivering reliable and innovative exploration results."
};


export const projects = [
  {
    name: "Resource Estimation AI",
    description:
      "AI model that uses regression techniques to estimate mineral resources and predict deposit locations.",
    tags: [
      { name: "Machine Learning", color: "blue-text-gradient" },
      { name: "Predictive Analytics", color: "green-text-gradient" },
      { name: "Geological Modeling", color: "pink-text-gradient" },
    ],
    image: mhft,
    source_code_link: "https://github.com/",
  },
 
  {
    name: "Resource Estimation AI",
    description:
      "AI model that uses regression techniques to estimate mineral resources and predict deposit locations.",
    tags: [
      { name: "Machine Learning", color: "blue-text-gradient" },
      { name: "Predictive Analytics", color: "green-text-gradient" },
      { name: "Geological Modeling", color: "pink-text-gradient" },
    ],
    image: mhft,
    source_code_link: "https://github.com/",
  },
  {
    name: "Resource Estimation AI",
    description:
      "AI model that uses regression techniques to estimate mineral resources and predict deposit locations.",
    tags: [
      { name: "Machine Learning", color: "blue-text-gradient" },
      { name: "Predictive Analytics", color: "green-text-gradient" },
      { name: "Geological Modeling", color: "pink-text-gradient" },
    ],
    image: mhft,
    source_code_link: "https://github.com/",
  }
];

export const INITIAL_FORM_STATE = {
  firstName: "",
  lastName: "",
  company: "",
  email: "",
  phone: "",
  message: "",
  agreed: false
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
  successMessage: "Thank you for your message. Our team will review and respond within 1-2 business days.",
  errorMessage: "Something went wrong. Please try again",
  EMAIL_SERVICE_ID : import.meta.env.VITE_EMAIL_SERVICE_ID || "default_service_id",
 EMAIL_TEMPLATE_ID : import.meta.env.VITE_EMAIL_TEMPLATE_ID || "default_templat,id",
 EMAIL_PUBLIC_KEY : import.meta.env.VITE_EMAIL_PUBLIC_KEY || "default_public_key",
 EMAIL_RECIPIENT : import.meta.env.VITE_EMAIL_RECIPIENT || "default@example.com",
 EMAIL_RECIPIENT_NAME : import.meta.env.VITE_EMAIL_RECIPIENT_NAME || "Default Name",


};


//! Footer Text and Contact Sections
export const FOOTER_TEXT = {
  address: {
    street: import.meta.env.VITE_ADDRESS_STREET || "",
    province: import.meta.env.VITE_ADDRESS_PROVINCE || "",
    city: import.meta.env.VITE_ADDRESS_CITY || ""
  },
  phone: import.meta.env.VITE_PHONE || "",
  email: import.meta.env.VITE_EMAIL_RECIPIENT || "",
  copyright: `© ${new Date().getFullYear()} ${import.meta.env.VITE_EMAIL_RECIPIENT_NAME || ""}. All rights reserved.`
};

