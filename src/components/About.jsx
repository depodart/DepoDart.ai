import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';
import { services, navLinks, ABOUT_TEXT } from '../constants';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
import { defaultSectionStyles, aboutStyles } from '../style';

const ServiceCard = ({ index, title, description, icon, IconComponent }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Tilt className={aboutStyles.serviceCard}>
      <motion.div
        variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
        className={`${aboutStyles.serviceCardInner} ${isHovered ? 'animate-border-flow' : ''}`}
        style={{
          background: `linear-gradient(${isHovered ? '90deg' : '0deg'}, 
            ${aboutStyles.serviceCardInnerColors.start} 0%, 
            ${aboutStyles.serviceCardInnerColors.middle} 50%,
            ${aboutStyles.serviceCardInnerColors.end} 100%
          )`
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className={aboutStyles.serviceCardContent}>
          {IconComponent && (
            <IconComponent className={`${aboutStyles.icon.base} ${isHovered ? aboutStyles.icon.hovered : aboutStyles.icon.default}`} />
          )}
          <h3 className={`${aboutStyles.title.base} ${isHovered ? aboutStyles.title.hovered : aboutStyles.title.default}`}>
            {title}
          </h3>
          <p className={`${aboutStyles.description.base} ${isHovered ? aboutStyles.description.hovered : aboutStyles.description.default}`}>
            {description}
          </p>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${defaultSectionStyles.sectionSubText} text-center`}>
          {ABOUT_TEXT.sectionSubText}
        </p>
        <h2 className={`${defaultSectionStyles.sectionHeadText} text-center`}>
          {ABOUT_TEXT.sectionHeadText}
        </h2>
      </motion.div>

      <motion.p variants={fadeIn('', '', 0.1, 1)} className={aboutStyles.overview}>
        {ABOUT_TEXT.overview}
      </motion.p>

      <div className={aboutStyles.servicesContainer}>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, navLinks[0].id);
