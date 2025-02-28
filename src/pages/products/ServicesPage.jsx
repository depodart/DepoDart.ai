import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { projects } from "../../constants";
import { useParams } from "react-router-dom";

const ServiceDetails = ({ service }) => {
  if (!service) {
    return (
      <div className="flex items-center justify-center h-full min-h-[600px] bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10">
        <p className="text-2xl text-primary-light/70 font-medium">Select a service to view details</p>
      </div>
    );
  }

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.5
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="h-full min-h-[600px] bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-lg"
    >
      <motion.div 
        variants={itemVariants}
        className="aspect-video rounded-xl overflow-hidden mb-8 group shadow-xl"
      >
        <img 
          src={service.image}
          alt={service.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
        />
      </motion.div>
      
      <motion.h1 
        variants={itemVariants}
        className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-secondary-dark via-tertiary-light to-primary-light mb-6"
      >
        {service.name}
      </motion.h1>
      
      
      <motion.p 
        variants={itemVariants}
        className="text-lg text-primary-light/80 leading-relaxed border-t border-white/10 pt-8"
      >
        {service.route_description}
      </motion.p>
    </motion.div>
  );
};

const ServiceCard = ({ project, index, isSelected, onClick }) => {
  const cardVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1
      }
    }
  };

  return (
    <motion.div 
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      onClick={() => onClick(index)}
      className={`group relative cursor-pointer ${
        isSelected ? 'border-secondary-dark shadow-xl bg-gradient-to-r from-secondary-dark/20 to-tertiary-light/20' : 'border-white/10 bg-white/5'
      } backdrop-blur-lg rounded-xl p-5 border hover:border-secondary-dark/50 transition-all duration-300 hover:shadow-lg`}
    >
      <div className={`absolute inset-0 bg-gradient-to-r ${
        !isSelected ? 'from-secondary-dark/20 to-tertiary-light/20 opacity-0 group-hover:opacity-100' : 'opacity-0'
      } rounded-xl transition-opacity duration-500`}></div>
      
      <div className="relative">
        <div className="aspect-video rounded-lg overflow-hidden mb-4 shadow-md">
          <img 
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
          />
        </div>
        <h3 className="text-xl font-bold text-primary-light mb-3 group-hover:text-secondary-dark transition-colors duration-300">
          {project.name}
        </h3>
        <p className="text-sm text-primary-light/70 line-clamp-2 group-hover:text-primary-light/90 transition-colors duration-300">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mt-3">
          {project.tags.map((tag) => (
            <span 
              key={tag.name}
              className={`
                px-3 py-1 text-sm
                bg-gradient-to-r ${isSelected ? 'from-secondary-dark/30 to-tertiary-light/30' : 'from-secondary-dark/20 to-tertiary-light/20'}
                rounded-full text-primary-light/80
                hover:text-white transition-all duration-500
                hover:shadow-xl hover:from-secondary-dark/50 hover:to-tertiary-light/50
                hover:scale-110
              `}
            >
              #{tag.name}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const ServicesPage = () => {
  const { id } = useParams();
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    if (id) {
      const service = projects[parseInt(id)];
      setSelectedService(service);
    }
  }, [id]);

  const handleServiceClick = (index) => {
    setSelectedService(projects[index]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-dark to-tertiary-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-secondary-dark via-tertiary-light to-primary-light mb-16 text-center"
        >
          Our Services
        </motion.h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <ServiceDetails service={selectedService} />
          </div>
          <div className="space-y-4 max-h-[800px] overflow-y-auto pr-2 custom-scrollbar">
            {projects.map((project, index) => (
              <ServiceCard
                key={`project-${index}`}
                project={project}
                index={index}
                isSelected={selectedService === project}
                onClick={handleServiceClick}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
