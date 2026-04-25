// Hero.jsx — top of the landing page
import { Suspense, memo } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRightIcon, PlayCircleIcon } from "@heroicons/react/24/outline";
import GlobeComponentCanvas from "../../components/canvas/GlobeComponent";
import CanvasLoader from "../../components/canvas/CanvasLoader";
import { HERO_TEXT } from "../../constants";
import { AGAUCU } from "../../assets";
import { heroStyles, brutal, defaultSectionStyles } from "../../style";

const scrollToHash = (hash) => (e) => {
  if (!hash) return;
  const id = hash.replace("#", "");
  const el = document.getElementById(id);
  if (el) {
    e.preventDefault();
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

// Bauhaus decorative accents — absolutely positioned across the hero
const HeroAccents = () => (
  <>
    <div
      aria-hidden="true"
      className="hidden md:block absolute top-28 left-10 w-16 h-16 rounded-full border-2 border-secondary-dark/60 pointer-events-none"
    />
    <div
      aria-hidden="true"
      className="hidden md:block absolute top-1/2 left-[4%] w-4 h-4 bg-tertiary-light pointer-events-none rotate-12"
    />
    <div
      aria-hidden="true"
      className="hidden md:block absolute bottom-28 left-12 w-20 h-1 bg-secondary-dark pointer-events-none"
    />
  </>
);

// Platform preview — real product output (AGAUCU prospectivity map) in a brutal frame
const PlatformPreview = () => (
  <motion.div
    initial={{ opacity: 0, x: 30, y: 20 }}
    animate={{ opacity: 1, x: 0, y: 0 }}
    transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
    className="hidden lg:block absolute top-1/2 right-8 xl:right-16 -translate-y-1/2 z-10 w-[420px] xl:w-[500px] pointer-events-none"
    aria-hidden="true"
  >
    <div className="rounded-xl border-2 border-primary-light/80 bg-[#1a0f0a] overflow-hidden shadow-[8px_8px_0_0_#D23B0C]">
      {/* Faux browser chrome */}
      <div className="flex items-center gap-2 px-4 py-2.5 border-b-2 border-primary-light/60 bg-primary-dark">
        <span className="w-3 h-3 rounded-full bg-secondary-dark" />
        <span className="w-3 h-3 rounded-full bg-tertiary-light" />
        <span className="w-3 h-3 rounded-full bg-primary-light/30" />
        <span className="ml-3 text-[10px] font-mono text-primary-light/50 tracking-wider uppercase">
          DepoDart · Prospectivity Map
        </span>
      </div>
      <img
        src={AGAUCU}
        alt="DepoDart prospectivity map output — Abitibi region"
        className="w-full h-auto block"
        loading="eager"
      />
    </div>
    {/* Brutal sticker overlay */}
    <span className={`${brutal.badgeOrange} absolute -top-3 -left-3 -rotate-3`}>
      Real Output
    </span>
  </motion.div>
);

const Hero = () => {
  return (
    <section className={heroStyles.section} aria-label="Hero">
      <HeroAccents />
      <PlatformPreview />

      <div className={heroStyles.contentWrapper}>
        <div className={`${heroStyles.mainContainer} ${defaultSectionStyles.paddingX}`}>
          <div className={heroStyles.leftDecoration.container}>
            <div className={heroStyles.leftDecoration.circle} />
            <div className={heroStyles.leftDecoration.line} />
          </div>

          <div className="max-w-2xl lg:max-w-xl">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className={brutal.badgeOrange}
            >
              {HERO_TEXT.eyebrow}
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className={`${heroStyles.textContent.heroHeadText} mt-5`}
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
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <Link to={HERO_TEXT.primaryCta.path} className={brutal.btnPrimary}>
                {HERO_TEXT.primaryCta.text}
                <ArrowRightIcon className="w-4 h-4" />
              </Link>
              <a
                href={HERO_TEXT.secondaryCta.hash}
                onClick={scrollToHash(HERO_TEXT.secondaryCta.hash)}
                className={brutal.btnSecondary}
              >
                <PlayCircleIcon className="w-4 h-4" />
                {HERO_TEXT.secondaryCta.text}
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Globe stays as the deep background visual */}
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
