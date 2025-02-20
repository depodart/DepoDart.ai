import React from 'react';
import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="relative w-32 h-32">
        {/* Penrose Triangle */}
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <motion.path
            d="M20,80 L50,20 L80,80 Z"
            fill="none"
            stroke="#D23B0C" // secondary-dark (red)
            strokeWidth="8"
            animate={{
              strokeDasharray: ["0,1000", "1000,0"],
              rotate: [0, 360]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.path 
            d="M30,70 L50,30 L70,70 Z"
            fill="none"
            stroke="#FFC409" // tertiary-light (yellow)
            strokeWidth="8"
            animate={{
              strokeDasharray: ["0,1000", "1000,0"],
              rotate: [360, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.path
            d="M25,75 L50,25 L75,75 Z"
            fill="none" 
            stroke="#110A07" // primary-dark (black)
            strokeWidth="8"
            animate={{
              strokeDasharray: ["1000,0", "0,1000"],
              scale: [0.9, 1.1]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </svg>

        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
          <motion.div
            className="text-secondary-dark text-sm font-medium"
            animate={{
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            Loading...
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
