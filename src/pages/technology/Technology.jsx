import React from "react";
import { motion } from "framer-motion";
import { BrainCircuit, Box, Zap, Leaf } from "lucide-react";
import { Link } from "react-router-dom";
const Technology = () => {
  const technologies = [
    {
      title: "AI-ML tools",
      description:
        "Our team has gathered and standardized extensive databases containing geochemical, geological, and geophysical variables to train the models, enhancing their intelligence.",
      icon: <BrainCircuit size={32} className="text-secondary-dark" />,
      gradient: "from-[#FF512F] to-[#DD2476]",
    },
    {
      title: "Big-Data preprocessing",
      description: "Fill with description",
      icon: <Box size={32} className="text-secondary-dark" />,
      gradient: "from-[#4776E6] to-[#8E54E9]",
    },
    //{
    //title: "Big Data preprocessing",
    //description: "State-of-the-art 3D rendering technology allows for immersive visualization of geographical data, enabling better understanding of terrain characteristics.",
    //icon: <Box size={32} className="text-secondary-dark" />,
    //gradient: "from-[#4776E6] to-[#8E54E9]",
    //},
    {
      title: "Real-time Processing",
      description: "Fill",
      icon: <Zap size={32} className="text-secondary-dark" />,
      gradient: "from-[#00B4DB] to-[#0083B0]",
    },
    //{
    //title: "Real-time Processing",
    //description: "Lightning-fast processing capabilities deliver instant analysis of terrain data, supporting rapid assessment and decision-making in the field.",
    //icon: <Zap size={32} className="text-secondary-dark" />,
    //gradient: "from-[#00B4DB] to-[#0083B0]",
    //},
    {
      title: "Hands-Off Access",
      description:
        "Our API allows specialized users to input their own data and get predictions without the need for technical assistance.",
      icon: <Leaf size={32} className="text-secondary-dark" />,
      gradient: "from-[#56ab2f] to-[#a8e063]",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-dark to-tertiary-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-6xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-secondary-dark via-tertiary-light to-primary-light mb-8">
            Pioneering Technology
          </h1>
          <p className="text-2xl text-primary-light/80 max-w-3xl mx-auto leading-relaxed">
            Revolutionizing terrain analysis through cutting-edge AI.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-r ${tech.gradient} rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300`}
              ></div>
              <div className="relative bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-secondary-dark/50 transition-all duration-300">
                <div className="flex items-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {tech.icon}
                  <h3 className="text-2xl font-bold text-primary-light ml-4">
                    {tech.title}
                  </h3>
                </div>
                <p className="text-lg text-primary-light/70 leading-relaxed">
                  {tech.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 text-center"
        >
          <Link
            to="/contact"
            className="inline-block bg-gradient-to-r from-secondary-dark to-tertiary-light text-primary-light px-10 py-4 rounded-full text-lg font-semibold hover:shadow-lg hover:shadow-secondary-dark/30 transition-all duration-300 hover:scale-105"
          >
            Learn More About Our Technology
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Technology;
