import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';
import { services } from '../constants';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
import { navLinks } from '../constants';
import { styles, initialTheme, aboutStyles } from '../style';
import { ABOUT_TEXT } from '../constants';



const ServiceCard = ({ index, title, description, icon, IconComponent }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <Tilt className={aboutStyles.serviceCard}>
      <motion.div
        variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
        className={`${aboutStyles.serviceCardInner} ${isHovered ? 'animate-border-flow' : ''}`}
        style={{
          background: `linear-gradient(${isHovered ? '90deg' : '0deg'}, 
            #00cea8 0%, 
            #915eff 50%,
            #ff6b6b 100%
          )`
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className={aboutStyles.serviceCardContent}
        >
          {IconComponent && (
            <IconComponent 
              className={`${aboutStyles.icon.base} ${isHovered ? aboutStyles.icon.hovered : aboutStyles.icon.default}`}
            />
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
  const [currentTheme] = useState(initialTheme);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles(currentTheme).sectionSubText} text-center`}>{ABOUT_TEXT.sectionSubText}</p>
        <h2 className={`${styles(currentTheme).sectionHeadText} text-center`}>{ABOUT_TEXT.sectionHeadText}</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className={aboutStyles.overview}
      >
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

const WrappedAbout = SectionWrapper(About, navLinks[0].id);

export default WrappedAbout;
