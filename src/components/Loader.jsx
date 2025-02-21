import React from 'react';
import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="relative w-32 h-32">
      

<svg viewBox="0 0 120 120" className="w-full h-full">
  {/* Yellow Cuboid (Longest) */}
  <polygon points="20,30 90,70 90,90 20,50" fill="#8B6B00" /> {/* Front face */}
  <polygon points="20,30 90,70 100,60 30,20" fill="#DAA520" /> {/* Top face */}
  <polygon points="90,70 100,60 100,80 90,90" fill="#DAA520" /> {/* Right face */}

  {/* Red Cuboid (Medium) */}
  <polygon points="30,50 90,90 60,90 30,70" fill="#FF4500" /> {/* Front face */}
  <polygon points="30,50 75,80 90,70 40,40" fill="#D23B0C" /> {/* Top face */}
  <polygon points="75,80 90,70 90,90 75,100" fill="#D23B0C" /> {/* Right face - adjusted height */}

  {/* Brown Cuboid (Shortest) */}
  <polygon points="35,70 65,90 65,105 35,85" fill="#200D02" /> {/* Front face */}
  <polygon points="35,70 65,90 75,80 45,60" fill="#200D02" /> {/* Top face */}
  <polygon points="65,90 75,80 75,100 65,105" fill="#200D02" /> {/* Right face - adjusted width */}
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

