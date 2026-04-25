// _Stats.jsx — By the numbers
import { motion } from "framer-motion";
import { STATS } from "../../constants";
import { uiStyles, defaultSectionStyles } from "../../style";

const StatItem = ({ item, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.4 }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    className="flex flex-col gap-3 pt-6 border-t border-secondary-dark/20"
  >
    <div className="flex items-baseline gap-1">
      <span className="text-[56px] sm:text-[72px] md:text-[84px] leading-none font-bold text-secondary-dark tracking-tight">
        {item.value}
      </span>
      {item.unit && (
        <span className="text-2xl sm:text-3xl font-semibold text-secondary-dark/80">
          {item.unit}
        </span>
      )}
    </div>
    <p className="text-[11px] sm:text-xs uppercase tracking-[0.22em] font-semibold text-primary-dark">
      {item.label}
    </p>
    <p className="text-sm sm:text-[15px] leading-relaxed text-primary-dark/70 max-w-xs">
      {item.caption}
    </p>
  </motion.div>
);

const Stats = () => {
  return (
    <section
      aria-label="Key metrics"
      className={`${uiStyles.sectionLight} ${defaultSectionStyles.paddingX} py-20 sm:py-28`}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start gap-3 mb-14"
        >
          <span className={uiStyles.eyebrow}>
            <span className={uiStyles.eyebrowDot} />
            {STATS.sectionSubText}
          </span>
          <h2 className="text-[32px] sm:text-[44px] md:text-[56px] font-bold text-primary-dark tracking-tight leading-[1.1]">
            {STATS.sectionHeadText}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {STATS.items.map((item, index) => (
            <StatItem key={item.label} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
