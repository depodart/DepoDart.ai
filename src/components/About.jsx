import React, { useState, useContext } from 'react';
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';
import { services } from '../constants';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
import { navLinks } from '../constants';
import { ABOUT_TEXT } from '../constants';
import { styles, aboutStyles } from '../style';
import { ThemeContext } from '../context/ThemeContext';

const ServiceCard = ({ index, title, description, icon, IconComponent }) => {
  const { currentTheme } = useContext(ThemeContext);
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <Tilt className={aboutStyles(currentTheme).serviceCard}>
      <motion.div
        variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
        className={`${aboutStyles(currentTheme).serviceCardInner} ${isHovered ? 'animate-border-flow' : ''}`}
        style={{
          background: `linear-gradient(${isHovered ? '90deg' : '0deg'}, 
            ${aboutStyles(currentTheme).serviceCardInnerColors.start} 0%, 
            ${aboutStyles(currentTheme).serviceCardInnerColors.middle} 50%,
            ${aboutStyles(currentTheme).serviceCardInnerColors.end} 100%
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
          className={aboutStyles(currentTheme).serviceCardContent}
        >
          {IconComponent && (
            <IconComponent 
              className={`${aboutStyles(currentTheme).icon.base} ${isHovered ? aboutStyles(currentTheme).icon.hovered : aboutStyles(currentTheme).icon.default}`}
            />
          )}
    
          <h3 className={`${aboutStyles(currentTheme).title.base} ${isHovered ? aboutStyles(currentTheme).title.hovered : aboutStyles(currentTheme).title.default}`}>
            {title}
          </h3>
          
          <p className={`${aboutStyles(currentTheme).description.base} ${isHovered ? aboutStyles(currentTheme).description.hovered : aboutStyles(currentTheme).description.default}`}>
            {description}
          </p>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  const { currentTheme } = useContext(ThemeContext);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles(currentTheme).sectionSubText} text-center`}>{ABOUT_TEXT.sectionSubText}</p>
        <h2 className={`${styles(currentTheme).sectionHeadText} text-center`}>{ABOUT_TEXT.sectionHeadText}</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className={aboutStyles(currentTheme).overview}
      >
        {ABOUT_TEXT.overview}
      </motion.p>

      <div className={aboutStyles(currentTheme).servicesContainer}>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

const WrappedAbout = SectionWrapper(About, navLinks[0].id);

export default WrappedAbout;
