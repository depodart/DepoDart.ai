import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import Typewriter from "typewriter-effect";
import { GlobeComponent } from "./canvas/GlobeComponent";

const HERO_TEXT = {
  miningCapabilities: [
    import.meta.env.VITE_MINING_CAPABILITY_1,
    import.meta.env.VITE_MINING_CAPABILITY_2,
    import.meta.env.VITE_MINING_CAPABILITY_3,
    import.meta.env.VITE_MINING_CAPABILITY_4,
    import.meta.env.VITE_MINING_CAPABILITY_5,
    import.meta.env.VITE_MINING_CAPABILITY_6,
    import.meta.env.VITE_MINING_CAPABILITY_7,
    import.meta.env.VITE_MINING_CAPABILITY_8,
    import.meta.env.VITE_MINING_CAPABILITY_9,
    import.meta.env.VITE_MINING_CAPABILITY_10,
    import.meta.env.VITE_MINING_CAPABILITY_11
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
      {/* Globe container */}
      <GlobeComponent />
      
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
