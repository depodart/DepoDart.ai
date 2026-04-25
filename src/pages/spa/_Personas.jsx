// _Personas.jsx — Who we help (3 buyer lanes)
import { motion } from "framer-motion";
import { PERSONAS } from "../../constants";
import { uiStyles, defaultSectionStyles } from "../../style";

const PersonaBlock = ({ item, index }) => (
  <motion.article
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.25 }}
    transition={{ duration: 0.6, delay: index * 0.08 }}
    className={`${uiStyles.card} flex flex-col gap-5 h-full`}
  >
    <div className="flex items-center gap-3">
      <span className="text-[13px] font-mono tracking-widest text-secondary-dark">
        {item.number}
      </span>
      <span className="h-px flex-1 bg-gradient-to-r from-secondary-dark/50 to-transparent" />
    </div>
    <span className="text-[11px] sm:text-xs uppercase tracking-[0.22em] font-semibold text-secondary-dark">
      {item.eyebrow}
    </span>
    <h3 className="text-2xl sm:text-[26px] font-bold text-primary-light tracking-tight leading-tight">
      {item.headline}
    </h3>
    <div className="pt-4 mt-auto border-t border-primary-light/10 flex flex-col gap-3">
      <p className="text-[14px] leading-relaxed text-primary-light/55 italic">
        {item.pain}
      </p>
      <p className="text-[14px] leading-relaxed text-primary-light/80">
        {item.outcome}
      </p>
    </div>
  </motion.article>
);

const Personas = () => {
  return (
    <section
      id="who-we-help"
      aria-label="Who we help"
      className={`${defaultSectionStyles.paddingX} py-20 sm:py-28 relative z-0`}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start gap-3 mb-12 max-w-3xl"
        >
          <span className={uiStyles.eyebrow}>
            <span className={uiStyles.eyebrowDot} />
            {PERSONAS.sectionSubText}
          </span>
          <h2 className={uiStyles.sectionHeading}>
            {PERSONAS.sectionHeadText}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {PERSONAS.items.map((item, index) => (
            <PersonaBlock key={item.number} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Personas;
