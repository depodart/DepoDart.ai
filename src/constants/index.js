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
    title: "Mineral Resource & Reserve Evaluation",
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
  // {
  //   title: "Consulting Powered AI",
  //   sub_title: "Expert AI Consulting & Geoscience Integration",
  //   icon: null,
  //   iconBg: "#B87333", // Copper
  //   date: "",
  //   points: [
  //     "Unlock AI's true potential with consulting that merges deep geoscience expertise with advanced analytics.",
  //     "Get tailored strategies to implement machine learning that revolutionizes your data interpretation.",
  //     "Leverage bespoke AI solutions designed to overcome your unique geological challenges and drive success."
  //   ],
  // },
  {
    title: "Autonomous Solution for Deposit Descovery",
    // sub_title: "Intelligent Automation",
    icon: null,
    iconBg: "#ff6b6b", // Ruby red
    date: "",
    points: [
      "Use our AI models yourself by enter your data and generate your predictions.",
      "Receive automatic assistance in placing your data in the correct format.",
      "Get a detailed report of your predictions and recommendations for further actions."
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
    title: "Mine Planning & Optimization",
    // sub_title: "Resource Modeling",
    icon: null,
    iconBg: "#4F5555", // Hematite gray
    date: "",
    points: [
      "Evaluate remaining ore reserves in mines to determine economic feasibility.",
      "Createe a 3D digital model of a mineral deposit using geological, geochemical, and geophysical data"
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
