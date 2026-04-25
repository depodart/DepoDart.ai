import { useState } from 'react';
import { motion } from 'framer-motion';
import { services, navLinks, ABOUT_TEXT } from '../../constants';
import { SectionWrapper } from '../../hoc';
import { uiStyles } from '../../style';

const ServiceCard = ({ index, title, description, IconComponent }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className={`${uiStyles.card} flex flex-col gap-4`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {IconComponent && (
        <div
          className={`w-11 h-11 rounded-lg flex items-center justify-center transition-all duration-300 ${
            isHovered
              ? 'bg-secondary-dark text-primary-light'
              : 'bg-secondary-dark/15 text-secondary-dark'
          }`}
        >
          <IconComponent className="w-6 h-6" />
        </div>
      )}
      <h3 className="text-lg font-bold text-primary-light tracking-tight">
        {title}
      </h3>
      <p className="text-[14px] leading-relaxed text-primary-light/70">
        {description}
      </p>
    </motion.article>
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
        className="flex flex-col items-start gap-3"
      >
        <span className={uiStyles.eyebrow}>
          <span className={uiStyles.eyebrowDot} />
          {ABOUT_TEXT.sectionSubText}
        </span>
        <h2 className={uiStyles.sectionHeading}>
          {ABOUT_TEXT.sectionHeadText}
        </h2>
        <p className={uiStyles.sectionSubheading}>
          {ABOUT_TEXT.overview}
        </p>
      </motion.div>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, navLinks.SPA[0].id);
