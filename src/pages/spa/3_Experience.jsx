// 3_Experience.jsx — "How It Works" 4-step process. Calm, refined.
import { memo } from "react";
import { motion } from "framer-motion";
import { HOW_IT_WORKS, navLinks } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { uiStyles, brutal } from "../../style";
import TiltCard from "../../components/TiltCard";

const StepCard = memo(({ step, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: "easeOut" }}
      className="h-full"
    >
      <TiltCard className={`${brutal.card} flex flex-col h-full`}>
        <span className={brutal.numberSticker}>
          {step.number}
          <span aria-hidden="true" className="h-px w-8 bg-primary-light/15" />
        </span>
        <h3 className="mt-5 text-xl font-semibold text-primary-light tracking-tight">
          {step.title}
        </h3>
        <p className="mt-3 text-[14px] sm:text-[15px] leading-relaxed text-primary-light/60">
          {step.description}
        </p>
      </TiltCard>
    </motion.div>
  );
});
StepCard.displayName = "StepCard";

const Experience = () => {
  return (
    <div className="relative">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-start gap-4 max-w-3xl"
      >
        <span className={brutal.badge}>
          {HOW_IT_WORKS.sectionSubText}
        </span>
        <h2 className={uiStyles.sectionHeading}>
          {HOW_IT_WORKS.sectionHeadText}
        </h2>
        <p className={uiStyles.sectionSubheading}>
          {HOW_IT_WORKS.description}
        </p>
      </motion.div>

      <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {HOW_IT_WORKS.steps.map((step, index) => (
          <StepCard key={step.number} step={step} index={index} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Experience, navLinks.SPA[1].id);
