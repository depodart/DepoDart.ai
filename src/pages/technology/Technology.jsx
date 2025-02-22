import React from 'react';
import { motion } from 'framer-motion';

const Technology = () => {
  const technologies = [
    {
      title: "AI-Powered Analysis",
      description: "Our advanced artificial intelligence algorithms process terrain data with unprecedented accuracy, providing detailed insights for informed decision-making.",
      icon: "🤖"
    },
    {
      title: "3D Terrain Visualization",
      description: "State-of-the-art 3D rendering technology allows for immersive visualization of geographical data, enabling better understanding of terrain characteristics.",
      icon: "🗺️"
    },
    {
      title: "Real-time Processing",
      description: "Lightning-fast processing capabilities deliver instant analysis of terrain data, supporting rapid assessment and decision-making in the field.",
      icon: "⚡"
    },
    {
      title: "Environmental Integration",
      description: "Seamless integration of environmental data provides comprehensive understanding of terrain in relation to ecological factors.",
      icon: "🌍"
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
            Our Technology
          </h1>
          <p className="text-xl text-secondary-light max-w-3xl mx-auto">
            Leveraging cutting-edge AI and visualization technologies to revolutionize terrain analysis
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              className="bg-secondary-dark p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              variants={itemVariants}
            >
              <div className="text-4xl mb-4">{tech.icon}</div>
              <h3 className="text-2xl font-bold text-primary-light mb-3">
                {tech.title}
              </h3>
              <p className="text-secondary-light">
                {tech.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Technology;
