// Hero.jsx — top of the landing page
import { Suspense, memo } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRightIcon, PlayCircleIcon } from "@heroicons/react/24/outline";
import GlobeComponentCanvas from "../../components/canvas/GlobeComponent";
import CanvasLoader from "../../components/canvas/CanvasLoader";
import { HERO_TEXT } from "../../constants";
import { heroStyles, uiStyles, defaultSectionStyles } from "../../style";

const scrollToHash = (hash) => (e) => {
  if (!hash) return;
  const id = hash.replace("#", "");
  const el = document.getElementById(id);
  if (el) {
    e.preventDefault();
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

const Hero = () => {
  return (
    <section className={heroStyles.section} aria-label="Hero">
      <div className={heroStyles.contentWrapper}>
        <div className={`${heroStyles.mainContainer} ${defaultSectionStyles.paddingX}`}>
          <div className={heroStyles.leftDecoration.container}>
            <div className={heroStyles.leftDecoration.circle} />
            <div className={heroStyles.leftDecoration.line} />
          </div>

          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className={uiStyles.eyebrow}
            >
              <span className={uiStyles.eyebrowDot} />
              {HERO_TEXT.eyebrow}
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className={`${heroStyles.textContent.heroHeadText} mt-4`}
            >
              {HERO_TEXT.headline}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-5 text-[15px] sm:text-[18px] text-primary-light/75 leading-relaxed"
            >
              {HERO_TEXT.subheadline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4"
            >
              <Link to={HERO_TEXT.primaryCta.path} className={uiStyles.btnPrimary}>
                {HERO_TEXT.primaryCta.text}
                <ArrowRightIcon className="w-4 h-4" />
              </Link>
              <a
                href={HERO_TEXT.secondaryCta.hash}
                onClick={scrollToHash(HERO_TEXT.secondaryCta.hash)}
                className={uiStyles.btnSecondary}
              >
                <PlayCircleIcon className="w-4 h-4" />
                {HERO_TEXT.secondaryCta.text}
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-10 flex items-center gap-4 text-xs uppercase tracking-[0.2em] text-primary-light/40 font-mono"
            >
              <span>50m resolution</span>
              <span aria-hidden="true" className="w-px h-4 bg-primary-light/20" />
              <span>Multi-source data fusion</span>
              <span aria-hidden="true" className="hidden sm:inline w-px h-4 bg-primary-light/20" />
              <span className="hidden sm:inline">Exploration-grade accuracy</span>
            </motion.div>
          </div>
        </div>
      </div>

      <Suspense fallback={<CanvasLoader />}>
        <GlobeComponentCanvas />
      </Suspense>

      <div className={heroStyles.scrollIndicator.container}>
        <a href="#about" aria-label="Scroll to next section">
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
