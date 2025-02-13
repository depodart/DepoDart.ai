import React, 
{ 
  useEffect, 
  useRef 
} 
from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import Typewriter from "typewriter-effect";
import Globe from 'globe.gl';

const typewriterStrings = ["Precise Mineral Exploration", "Reduced Exploration Costs", "Advanced Resource Detection", "Geological Surveying", "Deposit Identification", "Subsurface Mapping", "Formation Analysis", "Ore Body Detection", "Mineral Assessment", "Resource Estimation", "Geophysical Prospecting"];
const Hero = () => {

  const globeRef = useRef();

  useEffect(() => {
    // Initialize globe
    const globe = Globe()
      .globeImageUrl('//unpkg.com/three-globe/example/img/earth-dark.jpg')
      .backgroundColor('rgba(0,0,0,0)')
      .width(window.innerWidth)
      .height(window.innerHeight)
      (globeRef.current);

    // Add resize handler
    const handleResize = () => {
      globe
        .width(window.innerWidth)
        .height(window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="relative w-full h-screen mx-auto">
      {/* Globe container */}
      <div ref={globeRef} className="absolute inset-0 z-0" />
      
      {/* Existing hero content with higher z-index */}
      <div className="relative z-10">
        <div className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
            <div className="w-1 sm:h-80 h-40 violet-gradient" />
          </div>
          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
            Depo<span className="text-[#915EFF]">Dart</span>
            </h1>
            <div className={`${styles.heroSubText} mt-2 text-white-100`}>
            AI-Powered Automation for Every Mineral Mining Exploration
              <Typewriter
                options={{
                  strings: typewriterStrings,
                  autoStart: true,
                  loop: true,
                  loopCount: Infinity,
                  deleteSpeed: "natural",
                  pauseFor: 1000,
                }}
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* {myGlobe} */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
