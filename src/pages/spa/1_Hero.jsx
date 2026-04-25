// Hero.jsx — minimalist professional hero
import { Suspense, memo } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import GlobeComponentCanvas from "../../components/canvas/GlobeComponent";
import CanvasLoader from "../../components/canvas/CanvasLoader";
import { HERO_TEXT } from "../../constants";
import { brutal, defaultSectionStyles } from "../../style";

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
  // Subtle scroll parallax — content drifts slower than scroll, creating depth.
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, -60]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0.4]);

  return (
    <section
      className="relative w-full min-h-[88vh] mx-auto flex items-center"
      aria-label="Hero"
    >
      {/* The 3D globe — primary spatial moment, behind the content */}
      <Suspense fallback={<CanvasLoader />}>
        <GlobeComponentCanvas />
      </Suspense>

      <div className={`relative z-10 w-full ${defaultSectionStyles.paddingX}`}>
        <motion.div
          style={{ y, opacity }}
          className="max-w-3xl"
        >
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-primary-light font-semibold tracking-tight leading-[1.1] text-[36px] sm:text-[44px] md:text-[52px] lg:text-[58px]"
          >
            {HERO_TEXT.headline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-xl text-[15px] sm:text-[17px] text-primary-light/65 leading-relaxed"
          >
            {HERO_TEXT.subheadline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-9 flex flex-wrap items-center gap-5"
          >
            <Link to={HERO_TEXT.primaryCta.path} className={brutal.btnPrimary}>
              {HERO_TEXT.primaryCta.text}
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
            <a
              href={HERO_TEXT.secondaryCta.hash}
              onClick={scrollToHash(HERO_TEXT.secondaryCta.hash)}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-primary-light/70 hover:text-primary-light transition-colors"
            >
              {HERO_TEXT.secondaryCta.text}
              <ArrowRightIcon className="w-3.5 h-3.5" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Subtle scroll indicator */}
      <a
        href="#about"
        aria-label="Scroll to next section"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-primary-light/40 hover:text-primary-light/70 transition-colors"
      >
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="text-[10px] font-mono uppercase tracking-[0.3em]"
        >
          Scroll
        </motion.span>
      </a>
    </section>
  );
};

export default memo(Hero);
