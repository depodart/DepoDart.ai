import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../utils/motion';
import { worksStyles, defaultSectionStyles } from '../style';
import { Outlet } from 'react-router-dom';

const ServicesLayout = () => {
  return (
    <div className="relative z-0">
      <div className={`${defaultSectionStyles.padding} max-w-7xl mx-auto relative z-0`}>
        <motion.div variants={textVariant()}>
          <h2 className={`
            ${defaultSectionStyles.sectionHeadText} 
            ${worksStyles.text.mainContent.h2}`
          }>
            Our Services
          </h2>
        </motion.div>

        <motion.div 
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4"
        >
          <p className={worksStyles.text.mainContent.p}>
            Explore our comprehensive range of services designed to meet your needs.
          </p>
        </motion.div>

        <div className="mt-20">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default ServicesLayout;
