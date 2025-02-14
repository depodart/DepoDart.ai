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
    id: "research",
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
    IconComponent: CpuChipIcon,
    description: "Tailored Mapping Solutions"
  },
  { 
    title: "Reduced operational time",
    IconComponent: ClockIcon,
    description: "Intuitive ML workflow building that significantly decreases processing time and delivers fast and accurate prediction results"
  },
  { 
    title: "Apply your knowledge",
    IconComponent: BeakerIcon,
    description: "Intelligent ML Workflow Customisation aimed at retaining your competences and experience"
  },
  { 
    title: "Advanced hybrid neural network",
    IconComponent: ServerIcon,
    description: "Robust prediction of the most complex geological features based on varying seismic quality and complexity of geological strata"
  },
];

export const experiences = [
  {
    title: "Data Scientist",
    company_name: "GeoAI Research Institute",
    icon: mathwork,
    iconBg: "#161329",
    date: "",
    points: [
      "Built predictive models for identifying mineral deposit using machine learning techniques.",
      "Applied deep learning for geophysical data interpretation and subsurface mapping.",
      "Developed novel algorithms for processing and analyzing geological big data.",
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
