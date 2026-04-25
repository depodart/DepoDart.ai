// 3_Experience.jsx — "How It Works" 4-step process
import { memo } from "react";
import { motion } from "framer-motion";
import { HOW_IT_WORKS, navLinks } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { uiStyles } from "../../style";

const StepCard = memo(({ step, index }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: "easeOut" }}
      className={`${uiStyles.card} flex flex-col h-full`}
    >
      <div className="flex items-baseline gap-3">
        <span className="text-[13px] font-mono tracking-widest text-secondary-dark">
          {step.number}
        </span>
        <span className="h-px flex-1 bg-gradient-to-r from-secondary-dark/60 to-transparent" />
      </div>
      <h3 className="mt-5 text-2xl font-bold text-primary-light tracking-tight">
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
    <>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-start gap-3"
      >
        <span className={uiStyles.eyebrow}>
          <span className={uiStyles.eyebrowDot} />
          {HOW_IT_WORKS.sectionSubText}
        </span>
        <h2 className={uiStyles.sectionHeading}>
          {HOW_IT_WORKS.sectionHeadText}
        </h2>
        <p className={uiStyles.sectionSubheading}>
          {HOW_IT_WORKS.description}
        </p>
      </motion.div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {HOW_IT_WORKS.steps.map((step, index) => (
          <StepCard key={step.number} step={step} index={index} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Experience, navLinks.SPA[1].id);
