// _Personas.jsx — Who we help (3 buyer lanes) — refined cards with calm photo headers
import { motion } from "framer-motion";
import { PERSONAS } from "../../constants";
import { uiStyles, brutal, defaultSectionStyles } from "../../style";
import TiltCard from "../../components/TiltCard";

const PERSONA_PHOTOS = [
  "/photos/persona-leaders.jpg",
  "/photos/persona-geologists.jpg",
  "/photos/persona-investors.jpg",
];
const PERSONA_PHOTO_ALTS = [
  "Aerial view of an open-pit mining operation",
  "Aerial view of geological terrain",
  "Performance analytics charts on a laptop screen",
];

const PersonaBlock = ({ item, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.25 }}
    transition={{ duration: 0.6, delay: index * 0.08 }}
    className="h-full"
  >
    <TiltCard className={`${brutal.card} flex flex-col gap-5 h-full p-0 overflow-hidden`}>
      <div className="relative h-44 overflow-hidden border-b border-primary-light/10">
        <img
          src={PERSONA_PHOTOS[index]}
          alt={PERSONA_PHOTO_ALTS[index]}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/20 via-primary-dark/40 to-primary-dark/85" />
        <span className="absolute top-4 left-4 z-10 text-[11px] font-mono uppercase tracking-[0.22em] text-primary-light/60">
          {item.number}
        </span>
      </div>

      <div className="px-6 sm:px-8 pb-7 sm:pb-8 flex flex-col gap-4">
        <span className={brutal.badge}>{item.eyebrow}</span>

        <h3 className="text-xl sm:text-2xl font-semibold text-primary-light tracking-tight leading-tight">
          {item.headline}
        </h3>

        <div className="pt-4 mt-1 border-t border-primary-light/10 flex flex-col gap-3">
          <p className="text-[14px] leading-relaxed text-primary-light/45 italic">
            {item.pain}
          </p>
          <p className="text-[14px] leading-relaxed text-primary-light/80">
            {item.outcome}
          </p>
        </div>
      </div>
    </TiltCard>
  </motion.div>
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
          className="flex flex-col items-start gap-4 mb-14 max-w-3xl"
        >
          <span className={brutal.badge}>{PERSONAS.sectionSubText}</span>
          <h2 className={uiStyles.sectionHeading}>
            {PERSONAS.sectionHeadText}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {PERSONAS.items.map((item, index) => (
            <PersonaBlock key={item.number} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Personas;
