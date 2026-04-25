// 3_Experience.jsx — "How It Works" 4-step process with Bauhaus canvas background
import { memo } from "react";
import { motion } from "framer-motion";
import { HOW_IT_WORKS, navLinks } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { uiStyles, brutal } from "../../style";
import BauhausArt from "../../components/BauhausArt";
import BauhausGrid from "../../components/canvas/BauhausGrid";

// Step number → Bauhaus illustration kind
const STEP_KINDS = ["assemble", "model", "target", "deliver"];
// Subtle rotation per card so the stickers feel hand-placed
const STICKER_ROT = ["-rotate-3", "rotate-2", "-rotate-2", "rotate-3"];

const StepCard = memo(({ step, index }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: "easeOut" }}
      className={`${brutal.card} flex flex-col h-full`}
    >
      <div className="flex items-start justify-between gap-3 mb-5">
        <BauhausArt kind={STEP_KINDS[index] || "assemble"} size={72} />
        <span className={`${brutal.numberSticker} ${STICKER_ROT[index] || ""}`}>
          {step.number}
        </span>
      </div>
      <h3 className="text-2xl font-bold text-primary-light tracking-tight">
        {step.title}
      </h3>
      <p className="mt-3 text-[14px] sm:text-[15px] leading-relaxed text-primary-light/70">
        {step.description}
      </p>
    </motion.article>
  );
});
StepCard.displayName = "StepCard";

const Experience = () => {
  return (
    <div className="relative">
      {/* Bauhaus animated grid behind the section */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 overflow-hidden"
      >
        <BauhausGrid />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-start gap-4"
      >
        <span className={brutal.badgeOrange}>
          {HOW_IT_WORKS.sectionSubText}
        </span>
        <h2 className={uiStyles.sectionHeading}>
          {HOW_IT_WORKS.sectionHeadText}
        </h2>
        <p className={uiStyles.sectionSubheading}>
          {HOW_IT_WORKS.description}
        </p>
      </motion.div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {HOW_IT_WORKS.steps.map((step, index) => (
          <StepCard key={step.number} step={step} index={index} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Experience, navLinks.SPA[1].id);
