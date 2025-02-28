import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * RouteTransitionLoader - Component that displays during route changes
 * Features:
 * - Progress bar animation
 * - Customizable colors
 * - Backdrop blur effect for content loading behind it
 * - Can show custom messages
 */
const RouteTransitionLoader = ({ 
  isLoading, 
  loadingText = "Loading...",
  progress = null, // If you want to show actual progress value
  minimal = false // For minimal UI with just a progress bar
}) => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.3 }
    },
    exit: { 
      opacity: 0,
      transition: { duration: 0.3, delay: 0.2 }
    }
  };

  const progressVariants = {
    initial: { width: "0%" },
    animate: { 
      width: progress ? `${progress}%` : "100%",
      transition: { 
        duration: progress ? 0.3 : 2, 
        ease: "easeInOut"
      }
    }
  };

  return (
    <AnimatePresence>
      {isLoading && (
        <>
          {minimal ? (
            // Minimal version - just a progress bar at the top of the screen
            <motion.div 
              className="fixed top-0 left-0 z-50 w-full h-1 bg-secondary-dark/20"
              initial="initial"
              animate="animate"
              exit="initial"
              variants={containerVariants}
            >
              <motion.div 
                className="h-full bg-gradient-to-r from-secondary-dark via-tertiary-light to-primary-light"
                initial="initial"
                animate="animate"
                variants={progressVariants}
              />
            </motion.div>
          ) : (
            // Full version with backdrop and animation
            <motion.div 
              className="fixed inset-0 flex items-center justify-center z-50 bg-primary-dark/80 backdrop-blur-sm"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="relative w-64">
                <motion.div 
                  className="h-2 bg-white/10 rounded-full overflow-hidden mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <motion.div 
                    className="h-full bg-gradient-to-r from-secondary-dark via-tertiary-light to-primary-light"
                    initial="initial"
                    animate="animate"
                    variants={progressVariants}
                  />
                </motion.div>
                
                <motion.div 
                  className="flex justify-center items-center"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="mr-3">
                    <motion.div
                      className="w-5 h-5 border-2 border-transparent border-t-secondary-dark border-r-tertiary-light rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ 
                        duration: 1, 
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />
                  </div>
                  <span className="text-sm font-medium text-primary-light">{loadingText}</span>
                </motion.div>
              </div>
            </motion.div>
          )}
        </>
      )}
    </AnimatePresence>
  );
};

export default RouteTransitionLoader; 