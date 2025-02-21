import React from 'react';
import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="relative w-32 h-32">
        <motion.svg 
          viewBox="0 0 120 120" 
          className="w-full h-full"
          initial="hidden"
          animate="visible"
        >
          {/* Yellow Cuboid (Longest) with animated stroke */}
          <motion.g>
            <motion.polygon 
              points="20,30 90,70 90,90 20,50" 
              fill="#8B6B00"
              stroke="white"
              strokeWidth="1"
              initial={{ strokeDasharray: "500", strokeDashoffset: "500", opacity: 1 }}
              animate={{ 
                strokeDashoffset: [500, 0],
                opacity: [1, 0.4, 1]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                opacity: {
                  duration: 2,
                  repeat: Infinity
                }
              }}
            />
            <motion.polygon 
              points="20,30 90,70 100,60 30,20" 
              fill="#DAA520"
              stroke="white" 
              strokeWidth="1"
              initial={{ strokeDasharray: "500", strokeDashoffset: "500", opacity: 1 }}
              animate={{ 
                strokeDashoffset: [500, 0],
                opacity: [1, 0.4, 1]  
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                delay: 0.3,
                opacity: {
                  duration: 2,
                  repeat: Infinity,
                  delay: 0.3
                }
              }}
            />
            <motion.polygon 
              points="90,70 100,60 100,80 90,90" 
              fill="#DAA520"
              stroke="white"
              strokeWidth="1"
              initial={{ strokeDasharray: "500", strokeDashoffset: "500", opacity: 1 }}
              animate={{ 
                strokeDashoffset: [500, 0],
                opacity: [1, 0.4, 1]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                delay: 0.6,
                opacity: {
                  duration: 2,
                  repeat: Infinity,
                  delay: 0.6
                }
              }}
            />
          </motion.g>

          {/* Red Cuboid (Medium) with animated stroke */}
          <motion.g>
            <motion.polygon 
              points="30,50 90,90 60,90 30,70" 
              fill="#FF4500"
              stroke="white"
              strokeWidth="1"
              initial={{ strokeDasharray: "500", strokeDashoffset: "500", opacity: 1 }}
              animate={{ 
                strokeDashoffset: [500, 0],
                opacity: [1, 0.4, 1]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                delay: 0.9,
                opacity: {
                  duration: 2,
                  repeat: Infinity,
                  delay: 0.9
                }
              }}
            />
            <motion.polygon 
              points="30,50 75,80 90,70 40,40" 
              fill="#D23B0C"
              stroke="white"
              strokeWidth="1"
              initial={{ strokeDasharray: "500", strokeDashoffset: "500", opacity: 1 }}
              animate={{ 
                strokeDashoffset: [500, 0],
                opacity: [1, 0.4, 1]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                delay: 1.2,
                opacity: {
                  duration: 2,
                  repeat: Infinity,
                  delay: 1.2
                }
              }}
            />
            <motion.polygon 
              points="75,80 90,70 90,90 75,100" 
              fill="#D23B0C"
              stroke="white"
              strokeWidth="1"
              initial={{ strokeDasharray: "500", strokeDashoffset: "500", opacity: 1 }}
              animate={{ 
                strokeDashoffset: [500, 0],
                opacity: [1, 0.4, 1]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                delay: 1.5,
                opacity: {
                  duration: 2,
                  repeat: Infinity,
                  delay: 1.5
                }
              }}
            />
          </motion.g>

          {/* Brown Cuboid (Shortest) with animated stroke */}
          <motion.g>
            <motion.polygon 
              points="35,70 65,90 65,105 35,85" 
              fill="#200D02"
              stroke="white"
              strokeWidth="1"
              initial={{ strokeDasharray: "500", strokeDashoffset: "500", opacity: 1 }}
              animate={{ 
                strokeDashoffset: [500, 0],
                opacity: [1, 0.4, 1]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                delay: 1.8,
                opacity: {
                  duration: 2,
                  repeat: Infinity,
                  delay: 1.8
                }
              }}
            />
            <motion.polygon 
              points="35,70 65,90 75,80 45,60" 
              fill="#200D02"
              stroke="white"
              strokeWidth="1"
              initial={{ strokeDasharray: "500", strokeDashoffset: "500", opacity: 1 }}
              animate={{ 
                strokeDashoffset: [500, 0],
                opacity: [1, 0.4, 1]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                delay: 2.1,
                opacity: {
                  duration: 2,
                  repeat: Infinity,
                  delay: 2.1
                }
              }}
            />
            <motion.polygon 
              points="65,90 75,80 75,100 65,105" 
              fill="#200D02"
              stroke="white"
              strokeWidth="1"
              initial={{ strokeDasharray: "500", strokeDashoffset: "500", opacity: 1 }}
              animate={{ 
                strokeDashoffset: [500, 0],
                opacity: [1, 0.4, 1]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                delay: 2.4,
                opacity: {
                  duration: 2,
                  repeat: Infinity,
                  delay: 2.4
                }
              }}
            />
          </motion.g>
        </motion.svg>

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
