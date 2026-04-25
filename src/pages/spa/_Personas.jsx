// _Personas.jsx — Who we help (3 buyer lanes) — brutal cards + Bauhaus avatars
import { motion } from "framer-motion";
import { PERSONAS } from "../../constants";
import { uiStyles, brutal, defaultSectionStyles } from "../../style";
import BauhausArt from "../../components/BauhausArt";

const PERSONA_KINDS = ["persona-leader", "persona-geologist", "persona-investor"];
const STICKER_ROT = ["-rotate-3", "rotate-2", "-rotate-2"];

const PersonaBlock = ({ item, index }) => (
  <motion.article
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.25 }}
    transition={{ duration: 0.6, delay: index * 0.08 }}
    className={`${brutal.card} flex flex-col gap-5 h-full relative`}
  >
    {/* Corner number sticker */}
    <span
      className={`${brutal.numberSticker} ${STICKER_ROT[index] || ""} absolute -top-4 -right-4`}
      aria-hidden="true"
    >
      {item.number}
    </span>

    <BauhausArt kind={PERSONA_KINDS[index] || "persona-leader"} size={72} />

    <span className={brutal.badgeOrange}>
      {item.eyebrow}
    </span>

    <h3 className="text-2xl sm:text-[26px] font-bold text-primary-light tracking-tight leading-tight">
      {item.headline}
    </h3>

    <div className="pt-4 mt-auto border-t-2 border-primary-light/15 flex flex-col gap-3">
      <p className="text-[14px] leading-relaxed text-primary-light/55 italic">
        {item.pain}
      </p>
      <p className="text-[14px] leading-relaxed text-primary-light/85">
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
