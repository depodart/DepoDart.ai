import { motion } from 'framer-motion';
import { services, navLinks, ABOUT_TEXT } from '../../constants';
import { SectionWrapper } from '../../hoc';
import { uiStyles, brutal } from '../../style';
import TiltCard from '../../components/TiltCard';
import BauhausArt from '../../components/BauhausArt';

const KINDS = ["identify", "decision", "insight", "unified"];

const ServiceCard = ({ index, title, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <TiltCard className={`${brutal.card} flex flex-col gap-4 h-full`}>
        <div className="flex items-center justify-center w-11 h-11 rounded-lg bg-primary-light/[0.04] border border-primary-light/10 text-primary-light/70">
          <BauhausArt kind={KINDS[index] || "identify"} size={26} />
        </div>
        <h3 className="text-lg font-semibold text-primary-light tracking-tight">
          {title}
        </h3>
        <p className="text-[14px] leading-relaxed text-primary-light/60">
          {description}
        </p>
      </TiltCard>
    </motion.div>
  );
};

const About = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-start gap-4 max-w-3xl"
      >
        <span className={brutal.badge}>{ABOUT_TEXT.sectionSubText}</span>
        <h2 className={uiStyles.sectionHeading}>
          {ABOUT_TEXT.sectionHeadText}
        </h2>
        <p className={uiStyles.sectionSubheading}>
          {ABOUT_TEXT.overview}
        </p>
      </motion.div>

      <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, navLinks.SPA[0].id);
