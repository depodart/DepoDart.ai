import {
  mathwork,
  python,
  mhft,
} from "../assets";
import { 
  BeakerIcon,
  CpuChipIcon,
  ClockIcon, 
  ServerIcon 
} from '@heroicons/react/24/outline'


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

export const services = [
  { 
    title: "Machine Learning",
    icon: null,
    IconComponent: CpuChipIcon,
    description: "Tailored Mapping Solutions"
  },
  { 
    title: "Reduced operational time",
    icon: null,
    IconComponent: ClockIcon,
    description: "Intuitive ML workflow building that significantly decreases processing time and delivers fast and accurate prediction results"
  },
  { 
    title: "Apply your knowledge",
    icon: null,
    IconComponent: BeakerIcon,
    description: "Intelligent ML Workflow Customisation aimed at retaining your competences and experience"
  },
  { 
    title: "Advanced hybrid neural network",
    icon: null,
    IconComponent: ServerIcon,
    description: "Robust prediction of the most complex geological features based on varying seismic quality and complexity of geological strata"
  },
];

export const experiences = [
  {
    title: "AI-Assisted Mineral Discovery Platform",
    sub_title: "AI and Machine Learning Geological Solutions",
    icon: null,
    iconBg: "#00cea8", // Gold
    // iconBg: "#FFD700", // Gold
    date: "",
    points: [
      "Step into the future of exploration with our groundbreaking AI platform—ditch unreliable tools for precision discovery.",
      "Unlock the hidden power of your data with advanced algorithms that turn raw numbers into game-changing insights.",
      "Rapidly target high-potential zones and maximize your resource value—no expensive surveys required.",
      "Built by industry experts to cut bias and supercharge exploration efficiency."
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
    title: "Geospatial Mapping & Analysis for Mines",
    sub_title: "Precision Geological Intelligence Solutions",
    icon: null,
    iconBg: "#4F5555", // Hematite gray
    date: "",
    points: [
      "Harness cutting-edge AI to generate high-precision geospatial maps tailored for mining success.",
      "Uncover hidden patterns in complex data using advanced machine learning to boost resource discovery.",
      "Utilize dynamic deep learning tools for fast, accurate site assessments that keep you ahead of the competition."
    ],
  },
];

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
