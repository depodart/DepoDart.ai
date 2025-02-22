import React from 'react';
import { motion } from 'framer-motion';

const UseCases = () => {
  const cases = [
    {
      title: "Urban Planning",
      description: "Support city development with detailed terrain analysis for infrastructure planning, risk assessment, and sustainable urban growth.",
      icon: "🏙️"
    },
    {
      title: "Environmental Conservation",
      description: "Monitor and analyze terrain changes to support conservation efforts, track erosion, and plan restoration projects.",
      icon: "🌿"
    },
    {
      title: "Disaster Management",
      description: "Assess terrain conditions for natural disaster risk prediction, emergency response planning, and post-disaster recovery.",
      icon: "🚨"
    },
    {
      title: "Agriculture",
      description: "Optimize agricultural practices through detailed terrain analysis for irrigation planning, soil management, and crop placement.",
      icon: "🌾"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen w-full bg-primary-dark pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-light mb-4">
            Use Cases
          </h1>
          <p className="text-xl text-secondary-light max-w-3xl mx-auto">
            Discover how DepoDart's terrain analysis technology is transforming various industries
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {cases.map((useCase, index) => (
            <motion.div
              key={index}
              className="bg-secondary-dark p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              variants={itemVariants}
            >
              <div className="text-4xl mb-4">{useCase.icon}</div>
              <h3 className="text-2xl font-bold text-primary-light mb-3">
                {useCase.title}
              </h3>
              <p className="text-secondary-light">
                {useCase.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default UseCases;
