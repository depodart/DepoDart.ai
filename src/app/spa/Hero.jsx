// Hero.jsx
import React, { Suspense, memo } from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import GlobeComponentCanvas from "../../components/canvas/GlobeComponent";
import CanvasLoader from "../../components/CanvasLoader";
import { HERO_TEXT } from "../../constants";
import { heroStyles, defaultSectionStyles } from "../../style";

const Hero = () => {
  return (
    <section className={heroStyles.section}>
      <div className={heroStyles.contentWrapper}>
        <div className={`${heroStyles.mainContainer} ${defaultSectionStyles.paddingX}`}>
          <div className={heroStyles.leftDecoration.container}>
            <div className={heroStyles.leftDecoration.circle} />
            <div className={heroStyles.leftDecoration.line} />
          </div>
          <div>
            <h1 className={heroStyles.textContent.heroHeadText}>
              {HERO_TEXT.brandName.first}
              <span className={heroStyles.textContent.brandHighlight}>
                {HERO_TEXT.brandName.second}
              </span>
            </h1>
            <div className={heroStyles.textContent.subtextContainer}>
              <h3>{HERO_TEXT.tagline}</h3>
              <Typewriter
                options={{
                  strings: HERO_TEXT.miningCapabilities,
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 30,
                  delay: 30,
                  pauseFor: 2000,
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <Suspense fallback={<CanvasLoader />}>
        <GlobeComponentCanvas />
      </Suspense>

      <div className={heroStyles.scrollIndicator.container}>
        <a href="#about">
          <div className={heroStyles.scrollIndicator.button}>
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className={heroStyles.scrollIndicator.dot}
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default memo(Hero);
