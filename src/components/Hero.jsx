  import React, { Suspense } from "react";
  import { motion } from "framer-motion";
  import Typewriter from "typewriter-effect";
  import  GlobeComponentCanvas  from "./canvas/GlobeComponent";
  import CanvasLoader from "./Loader";
  import { HERO_TEXT } from "../constants";
  import { heroStyles, styles } from "../style";
  


  const Hero = () => {
    return (
      <section className={heroStyles.section}>
        <div className={heroStyles.contentWrapper}>
          <div className={`${heroStyles.mainContainer} ${styles.paddingX}`}>
            <div className={heroStyles.leftDecoration.container}>
              <div className={heroStyles.leftDecoration.circle} />
              <div className={heroStyles.leftDecoration.line} />
            </div>
            <div>
              <h1 className={`${styles.heroHeadText} ${heroStyles.heroHeadText}`}>
                {HERO_TEXT.brandName.first}
                <span className={heroStyles.textContent.brandHighlight}>
                  {HERO_TEXT.brandName.second}
                </span>
              </h1>
              <div className={`${styles.heroSubText} ${heroStyles.textContent.subtextContainer}`}>
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
        
        <Suspense fallback={<CanvasLoader />}>
          <GlobeComponentCanvas />
        </Suspense>
        
        <div className={heroStyles.scrollIndicator.container}>
          <a href="#about">
            <div className={heroStyles.scrollIndicator.button}>
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className={heroStyles.scrollIndicator.dot}
              />
            </div>
          </a>
        </div>
      </section>
    );
  };

  export default Hero;
