import React, { Suspense } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import Typewriter from "typewriter-effect";
import  GlobeComponentCanvas  from "./canvas/GlobeComponent";
import CanvasLoader from "./Loader";

const HERO_TEXT = {
  miningCapabilities: ["AI-Powered Geological Mapping",
    "Predictive Mineral Targeting",
    "Automated Geochemical Analysis",
    "Geological Surveying",
    "AI-Optimized Drilling & Core Logging",
    "Machine Learning for Geophysical Data Interpretation",
    "Big Data Integration & Decision Support Systems",
    "AI-Driven Resource Estimation & Feasibility Studies"
  ],
  brandName: {
    first: import.meta.env.VITE_HERO_TEXT_BRAND_NAME_FIRST,
    second: import.meta.env.VITE_HERO_TEXT_BRAND_NAME_SECOND
  },
  tagline: import.meta.env.VITE_HERO_TEXT_TAGLINE
};

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">

      {/* Existing hero content with higher z-index */}
      <div className="relative z-10">
        <div className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
            <div className="w-1 sm:h-80 h-40 violet-gradient" />
          </div>
          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              {HERO_TEXT.brandName.first}<span className="text-[#915EFF]">{HERO_TEXT.brandName.second}</span>
            </h1>
            <div className={`${styles.heroSubText} mt-2 text-white-100`}>
              {HERO_TEXT.tagline}
              <Typewriter
                options={{
                  strings: HERO_TEXT.miningCapabilities,
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
      
        {/* Globe container */}
        <Suspense fallback={<CanvasLoader />}>
          <GlobeComponentCanvas />
        </Suspense>
      
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
