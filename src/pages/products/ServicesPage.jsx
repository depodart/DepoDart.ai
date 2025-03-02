import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../../constants";
import { useParams, useNavigate } from "react-router-dom";

const ServiceDetails = ({ service }) => {
  if (!service) {
    return (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center justify-center h-full min-h-[600px] bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10"
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-secondary-dark/70 mb-4"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </motion.div>
        <p className="text-2xl text-primary-light/70 font-medium text-center px-4">
          Select a service from the right to view details
        </p>
      </motion.div>
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
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.3
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
      exit="exit"
      key={service.name}
      className="h-full min-h-[600px] bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-lg relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-secondary-dark/5 to-tertiary-light/5 z-0"></div>
      
      <div className="relative z-10">
        <motion.div 
          variants={itemVariants}
          className="aspect-video rounded-xl overflow-hidden mb-8 shadow-xl relative"
        >
          <img 
            src={service.image}
            alt={service.name}
            className="w-full h-full object-cover"
          />
          {service.underDevelopment && (
            <div className="absolute top-4 left-4 px-3 py-1 bg-yellow-500/90 text-black font-semibold text-xs rounded-full shadow-lg transform rotate-[-5deg] z-10 animate-pulse">
              Under Development
            </div>
          )}
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
      </div>
    </motion.div>
  );
};

const ServiceCard = ({ project, index, isSelected, onClick }) => {
  const cardVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: index * 0.1
      }
    },
    tap: {
      scale: 0.98,
      transition: {
        duration: 0.1
      }
    }
  };

  return (
    <motion.div 
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      whileTap="tap"
      onClick={() => onClick(index)}
      className={`group relative cursor-pointer ${
        isSelected ? 'border-secondary-dark shadow-xl bg-gradient-to-r from-secondary-dark/20 to-tertiary-light/20' : 'hover:border-secondary-dark border-white/10 bg-white/5'
      } backdrop-blur-lg rounded-xl p-5 border  transition-all duration-300 `}
    >
      {isSelected && (
        <motion.div 
          layoutId={`selected-indicator-${index}`}
          className="absolute -left-2 top-1/2 -translate-y-1/2 w-1 h-16 bg-gradient-to-b from-secondary-dark to-tertiary-light rounded-full"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 64 }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        />
      )}
      
      <div className={`absolute inset-0 bg-gradient-to-r ${
        !isSelected ? 'from-secondary-dark/20 to-tertiary-light/20 opacity-0 ' : 'opacity-0'
      } rounded-xl transition-opacity duration-500`}></div>
      
      <div className="relative">
        <div className="aspect-video rounded-lg overflow-hidden mb-4 shadow-md relative">
          <img 
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
          />
          {project.underDevelopment && (
            <div className="absolute top-2 left-2 px-3 py-1 bg-yellow-500/90 text-black font-semibold text-xs rounded-full shadow-lg transform rotate-[-5deg] z-10 animate-pulse">
              Under Development
            </div>
          )}
        </div>
        <h3 className="text-xl font-bold text-primary-light mb-3  transition-colors duration-300">
          {project.name}
        </h3>
        <p className="text-sm text-primary-light/70 line-clamp-2  transition-colors duration-300">
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
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState(null);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const scrollContainerRef = useRef(null);
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    if (id) {
      const service = projects[parseInt(id)];
      setSelectedService(service);
    }
  }, [id]);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = scrollContainer;
      
      // Check if we're near the bottom (within 20px)
      const isNearBottom = scrollTop + clientHeight >= scrollHeight - 20;
      setIsAtBottom(isNearBottom);
      
      // Hide indicator when user has scrolled more than 20% of the way down
      if (scrollTop > (scrollHeight - clientHeight) * 0.2) {
        setShowScrollIndicator(false);
      } else {
        setShowScrollIndicator(true);
      }
    };

    scrollContainer.addEventListener('scroll', handleScroll);
    
    // Initial check
    handleScroll();
    
    return () => scrollContainer.removeEventListener('scroll', handleScroll);
  }, []);

  const handleServiceClick = (index) => {
    setSelectedService(projects[index]);
    navigate(`/services/${index}/details`, { replace: true });
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
            <AnimatePresence mode="wait">
              <ServiceDetails key={selectedService?.name || 'empty'} service={selectedService} />
            </AnimatePresence>
          </div>
          <motion.div 
            ref={scrollContainerRef}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4 max-h-[800px] overflow-y-auto pr-2 custom-scrollbar relative"
          >
            {projects.map((project, index) => (
              <ServiceCard
                key={`project-${index}`}
                project={project}
                index={index}
                isSelected={selectedService === project}
                onClick={handleServiceClick}
              />
            ))}
            <div 
              className={`sticky bottom-0 w-full h-20 pointer-events-none transition-opacity duration-300 ${
                isAtBottom ? 'opacity-0' : 'opacity-100'
              } bg-gradient-to-t from-primary-dark to-transparent`}
            ></div>
            {showScrollIndicator && !isAtBottom && (
              <motion.div 
                className="sticky bottom-4 left-1/2 -translate-x-1/2 text-primary-light/50 w-full flex justify-center pointer-events-none"
                initial={{ opacity: 1 }}
                animate={{ 
                  y: [0, 5, 0],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ 
                  y: { repeat: Infinity, duration: 1.5 },
                  opacity: { repeat: Infinity, duration: 1.5 }
                }}
              >
                <div className="bg-primary-dark/80 backdrop-blur-sm rounded-full p-2 shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
