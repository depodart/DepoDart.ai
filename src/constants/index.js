import {
  AG_AU_Cu,
} from "../assets";

import { 
  BeakerIcon,
  CpuChipIcon,
  ClockIcon, 
  CurrencyDollarIcon,
  CursorArrowRaysIcon,
} from '@heroicons/react/24/outline';

import {
  IconShovel,
  IconZoomExclamation,
}  from "@tabler/icons-react";




//! Nav Links
export const navLinks = {
  main: [
    {
      id: "home",
      title: "Home",
      path: "/",
    },
    {
      id: "careers",
      title: "Careers",
      path: "/careers",
    },
    {
      id: "services",
      title: "Services",
      path: "/services/1",
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
    IconComponent: CursorArrowRaysIcon,
    description: "Discover the most promising areas for exploration identified by our Data-Driven AI model."
  },
  { 
    title: "Exploration Cost Reduction",
    icon: null,
    IconComponent: CurrencyDollarIcon,
    description: "Make the most of your resources with precise insights from AI."
  },
  { 
    title: "Mineral Resource & Reserve Evaluation",
    icon: null,
    IconComponent: IconZoomExclamation,
    description: "Evaluate the potential of your mineral resources and reserves with AI."
  },
  { 
    title: "Data Collection & Integration",
    icon: null,
    IconComponent: IconShovel,
    description: "Collect your data in the field and integrate it to create a comprehensive geological model."
  },
];


//! Experience Text
export const EXPERIENCE_TEXT = {
  sectionSubText: "", // TODO: Add a slogan here
  sectionHeadText: "OUR SERVICES"
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
      "Rapidly identify your new mineral deposits under human supervision for best accuracy."
    ]
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
      "Get a detailed report of your predictions and recommendations for further actions."
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
      "Transform raw geophysical data into real-time, actionable insights with cutting-edge deep learning."
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
      "Createe a 3D orebody model of a mineral deposit using geological, geochemical, and geophysical data"
    ],
  },
];

//! Text content for Works component
export const WORKS_TEXT = {
  sectionHeading: "Why DepoDart?",
  description: "Our model leverages autoencoders and semi-supervised learning to estimate\
   the concentrations of dozens of minerals simultaneously. For rare minerals like gold, \
   cobalt, and silver in Abitibi region, for example, we achieve approximately 25% accuracy in high-concentration ranges—meaning \
   one in four predictions is correct. The algorithm operates at a 50-meter resolution, \
   with predicted high-concentration zones typically spanning 200 to 1000 meters in diameter."
};


export const projects = [
  {
    name: "Geochemical 2D maps",
    description:
      "Predicted areas of high-concentration zones for gold, cobalt, and silver in Abitibi region.",
    tags: [
      { name: "DepoDart", color: "" }, //#blue-text-gradient
      { name: "Geochemical maps", color: "" },  //"green-text-gradient"
      { name: "Geological Modeling", color: "" }, //"pink-text-gradient"
    ],
    image: AG_AU_Cu,
    source_code_link: "https://github.com/",
  },
 
  {
    name: "3D orebody model",
    description:
      "Create 3D maps of a mineral deposit using geological, geochemical, and geophysical data",
    tags: [
      { name: "DepoDart", color: "" },
      { name: "3D orebody", color: "" },
      { name: "Geochemical maps", color: "" },
    ],
    image: AG_AU_Cu,
    source_code_link: "https://github.com/",
  },
  {
    name: "AI Exploration Reports",
    description:
      "Get a detailed report of your predictions and recommendations for further actions.",
    tags: [
      { name: "DepoDart", color: "" },
      { name: "Predictive Analytics", color: "" },
      { name: "Geological Modeling", color: "" },
    ],
    image: AG_AU_Cu,

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



//! Careers


export const departments = [
  { id: 'engineering', name: 'Engineering' },
  { id: 'data-science', name: 'Data Science' },
  { id: 'geology', name: 'Geology' },
  { id: 'operations', name: 'Operations' }
];

export const careers = [
  {
    id: 1,
    title: 'Senior Machine Learning Engineer',
    department: 'engineering',
    location: 'Remote',
    type: 'Full-time',
    description: 'We are seeking an experienced Machine Learning Engineer to develop and implement AI models for geological data analysis.'
  },
  {
    id: 2, 
    title: 'Data Scientist',
    department: 'data-science',
    location: 'Hybrid',
    type: 'Full-time',
    description: 'Join our data science team to work on cutting-edge predictive models for mineral exploration.'
  },
  {
    id: 3,
    title: 'Senior Geologist',
    department: 'geology', 
    location: 'On-site',
    type: 'Full-time',
    description: 'Looking for an experienced geologist to lead field operations and provide domain expertise for our AI systems.'
  }
];