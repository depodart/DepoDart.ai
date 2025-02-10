import {
  data_mining_image,
  python,
  deep_learning_icon,
  predictive_analytics_icon,
  barrick_logo,
  weatherpedia,
  termpw,
  payloadmaster,
  mhft,
  sketcher,
  mathwork,
  CompileVortex,
  rio_tinto_logo,
} from "../assets";

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
  { title: "Data Mining", 
    icon: data_mining_image,
    description: "Mineral Exploration Supervision"
  },
  { title: "Predictive Analytics", 
    icon: predictive_analytics_icon,
    description: "Geochemical Data Analysis"
  },
  { title: "Machine Learning", 
    icon: python,
    description: "Tailored Mapping Solutions"
  },
  { title: "Deep Learning", 
    icon: deep_learning_icon,
    description: "Data Quality Assurance"
  },
];

export const experiences = [
  {
    title: "Abitibi-Témiscamingue Region in Québec",
    company_name: "Mineral Exploration Lab | Data Science Division",
    icon: rio_tinto_logo,
    iconBg: "#161329",
    date: "", 
    points: [
      "Developed deep learning models for mineral deposit prediction using geological data and satellite imagery.",
      "Implemented computer vision algorithms for automated mineral classification from core samples.",
    ],
  },
  {
    title: "Data Scientist",
    company_name: "GeoAI Research Institute",
    icon: mathwork,
    iconBg: "#161329",
    date: "",
    points: [
      "Built predictive models for mineral resource estimation using machine learning techniques.",
      "Applied deep learning for geophysical data interpretation and subsurface mapping.",
      "Developed novel algorithms for processing and analyzing geological big data.",
    ],
  },
  {
    title: "AI Research Intern",
    company_name: "Mining Analytics Lab | Advanced Research Division",
    icon: barrick_logo,
    iconBg: "#161329",
    date: "",
    points: [
      "Created an AI-powered mineral identification system using computer vision and deep learning.",
      "Achieved 98.50% accuracy in automated mineral classification using ensemble methods.",
      "Analyzed geological datasets from 150+ mining sites using advanced regression techniques.",
    ],
  },
];

export const projects = [
  {
    name: "MineralNet",
    description:
      "Deep learning platform for automated mineral identification and classification from rock samples",
    tags: [
      { name: "TensorFlow", color: "blue-text-gradient" },
      { name: "Computer Vision", color: "green-text-gradient" },
      { name: "Deep Learning", color: "pink-text-gradient" },
      { name: "Geological Data", color: "yellow-text-gradient" },
    ],
    image: weatherpedia,
    source_code_link: "https://github.com/mineralnet",
  },
  {
    name: "GeoPredict",
    description:
      "Machine learning system for predicting mineral deposits using geological and geophysical data.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "Scikit-learn", color: "green-text-gradient" },
      { name: "Data Mining", color: "pink-text-gradient" },
    ],
    image: termpw,
    source_code_link: "https://github.com/geopredict",
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
    source_code_link: "https://github.com/resource-estimation-ai",
  },
  {
    name: "CoreAnalyzer",
    description:
      "Automated system for analyzing drill core samples using computer vision",
    tags: [
      { name: "Deep Learning", color: "blue-text-gradient" },
    ],
    image: payloadmaster,
    source_code_link: "https://github.com/coreanalyzer",
  },
  {
    name: "GeoVision",
    description:
      "Computer vision platform for geological feature extraction and analysis",
    tags: [
      { name: "PyTorch", color: "blue-text-gradient" },
      { name: "OpenCV", color: "green-text-gradient" },
      { name: "CNN", color: "pink-text-gradient" },
    ],
    image: CompileVortex,
    source_code_link: "https://github.com/geovision",
  },
  {
    name: "MineralMap",
    description:
      "Interactive mapping system for visualizing mineral deposits and geological features",
    tags: [
      { name: "GIS", color: "blue-text-gradient" },
      { name: "Data Visualization", color: "green-text-gradient" },
      { name: "Machine Learning", color: "pink-text-gradient" },
    ],
    image: sketcher,
    source_code_link: "https://github.com/mineralmap",
  },
];
