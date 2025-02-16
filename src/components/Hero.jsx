import React, { Suspense, useContext } from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import GlobeComponentCanvas from "./canvas/GlobeComponent";
import CanvasLoader from "./Loader";
import { HERO_TEXT } from "../constants";
import { heroStyles, defaultSectionStyles } from "../style";
import { ThemeContext } from '../context/ThemeContext';

const Hero = () => {
  const { currentTheme } = useContext(ThemeContext);

  return (
    <section className={heroStyles(currentTheme).section}>
      <div className={heroStyles(currentTheme).contentWrapper}>
        <div className={`${heroStyles(currentTheme).mainContainer} ${defaultSectionStyles(currentTheme).paddingX}`}>
          <div className={heroStyles(currentTheme).leftDecoration.container}>
            <div className={heroStyles(currentTheme).leftDecoration.circle} />
            <div className={heroStyles(currentTheme).leftDecoration.line} />
          </div>
          <div>
            <h1 className={`${defaultSectionStyles(currentTheme).heroHeadText} ${heroStyles(currentTheme).heroHeadText}`}>
              {HERO_TEXT.brandName.first}
              <span className={heroStyles(currentTheme).textContent.brandHighlight}>
                {HERO_TEXT.brandName.second}
              </span>
            </h1>
            <div className={`${defaultSectionStyles(currentTheme).heroSubText} ${heroStyles(currentTheme).textContent.subtextContainer}`}>
              {HERO_TEXT.tagline}
              <Typewriter
                options={{
                  strings: HERO_TEXT.miningCapabilities,
                  autoStart: true,
                  loop: true,
                  loopCount: Infinity,
                  deleteSpeed: 30, // Faster typing speed
                  delay: 30, // Reduced delay between characters
                  pauseFor: 500, // Shorter pause between loops
                }}
              />
            </div>
          </div>
        </div>
      </div>
      
      <Suspense fallback={<CanvasLoader />}>
        <GlobeComponentCanvas />
      </Suspense>
      
      <div className={heroStyles(currentTheme).scrollIndicator.container}>
        <a href="#about">
          <div className={heroStyles(currentTheme).scrollIndicator.button}>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className={heroStyles(currentTheme).scrollIndicator.dot}
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
