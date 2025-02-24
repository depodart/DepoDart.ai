// Hero.jsx
import React, { Suspense, memo } from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import GlobeComponentCanvas from "../../components/canvas/GlobeComponent";
import CanvasLoader from "../../components/canvas/CanvasLoader";
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
              <div className="relative h-12">
                {HERO_TEXT.miningCapabilities.map((text, index) => {
                  const [currentIndex, setCurrentIndex] = React.useState(0);

                  React.useEffect(() => {
                    const interval = setInterval(() => {
                      setCurrentIndex(prev => 
                        (prev + 1) % HERO_TEXT.miningCapabilities.length
                      );
                    }, 1500);

                    return () => clearInterval(interval);
                  }, []);

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ 
                        opacity: index === currentIndex ? 1 : 0,
                        y: 0,
                        transition: {
                          duration: 0.5
                        }
                      }}
                      className="absolute top-0 left-0 w-full text-xl font-bold"
                      style={{
                        background: "linear-gradient(90deg, #FFFFFF 0%, #D23B0C 50%, #FFFFFF 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent"
                      }}
                    >
                      {text}
                    </motion.div>
                  );
                })}
              </div>
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
