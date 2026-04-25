// _Personas.jsx — Who we help (3 buyer lanes) — brutal cards with real photo headers
import { motion } from "framer-motion";
import { PERSONAS } from "../../constants";
import { uiStyles, brutal, defaultSectionStyles } from "../../style";
import BauhausArt from "../../components/BauhausArt";

const PERSONA_PHOTOS = [
  "/photos/persona-leaders.jpg",
  "/photos/persona-geologists.jpg",
  "/photos/persona-investors.jpg",
];
const PERSONA_PHOTO_ALTS = [
  "Aerial view of an open-pit mining operation",
  "Aerial view of geological terrain and rock formations",
  "Performance analytics charts on a laptop screen",
];
const PERSONA_KINDS = ["persona-leader", "persona-geologist", "persona-investor"];
const STICKER_ROT = ["-rotate-3", "rotate-2", "-rotate-2"];

const PersonaBlock = ({ item, index }) => (
  <motion.article
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.25 }}
    transition={{ duration: 0.6, delay: index * 0.08 }}
    className={`${brutal.card} flex flex-col gap-5 h-full relative p-0 overflow-hidden`}
  >
    {/* Photo header with overlaid Bauhaus avatar + number sticker */}
    <div className="relative h-44 overflow-hidden border-b-2 border-primary-light/80">
      <img
        src={PERSONA_PHOTOS[index]}
        alt={PERSONA_PHOTO_ALTS[index]}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/30 via-primary-dark/40 to-primary-dark/85" />
      <span
        className={`${brutal.numberSticker} ${STICKER_ROT[index] || ""} absolute top-4 right-4 z-10`}
        aria-hidden="true"
      >
        {item.number}
      </span>
      <div className="absolute bottom-3 left-4 z-10">
        <BauhausArt kind={PERSONA_KINDS[index] || "persona-leader"} size={56} />
      </div>
    </div>

    <div className="px-6 sm:px-8 pb-6 sm:pb-8 flex flex-col gap-4">
      <span className={brutal.badgeOrange}>
        {item.eyebrow}
      </span>

      <h3 className="text-2xl sm:text-[26px] font-bold text-primary-light tracking-tight leading-tight">
        {item.headline}
      </h3>

      <div className="pt-4 mt-2 border-t-2 border-primary-light/15 flex flex-col gap-3">
        <p className="text-[14px] leading-relaxed text-primary-light/55 italic">
          {item.pain}
        </p>
        <p className="text-[14px] leading-relaxed text-primary-light/85">
          {item.outcome}
        </p>
      </div>
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
          className="flex flex-col items-start gap-4 mb-14 max-w-3xl"
        >
          <span className={brutal.badge}>{PERSONAS.sectionSubText}</span>
          <h2 className={uiStyles.sectionHeading}>
            {PERSONAS.sectionHeadText}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 md:gap-8">
          {PERSONAS.items.map((item, index) => (
            <PersonaBlock key={item.number} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Personas;
