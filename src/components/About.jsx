import { motion } from 'framer-motion';
import React from 'react';
import { Tilt } from 'react-tilt';
import { services } from '../constants';
import { SectionWrapper } from '../hoc';
import { styles } from '../style';
import { fadeIn, textVariant } from '../utils/motion';
import { navLinks } from '../constants';
const ServiceCard = ({ index, title, description, icon, IconComponent }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
        className={`w-full p-[1px] rounded-[20px] shadow-card relative overflow-hidden ${
          isHovered ? 'animate-border-flow' : ''
        }`}
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
          className="bg-tertiary rounded-[20px] py-5 px-8 h-[280px] flex justify-evenly items-center flex-col"
        >
          {IconComponent && (
            <IconComponent 
              className={`w-10 h-10 transition-all duration-300 ${
                isHovered ? 'text-[#915EFF]' : 'text-[#00cea8]'
              }`}
            />
          )}
    
          <h3 className={`text-[18px] font-bold text-center transition-all duration-300 ${
            isHovered 
              ? 'text-[#915EFF] transform scale-110 tracking-wider' 
              : 'text-[#E0E0E0]'
          }`}>
            {title}
          </h3>
          
          <p className={`mt-2 text-[14px] text-center transition-all duration-300 leading-[1.6] ${
            isHovered
              ? 'text-[#00cea8] transform translate-y-[-5px] leading-relaxed'
              : 'text-[#B0B0B0]'
          }`}>
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
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      > At DepoDart, we collect and process large geological, geophysical, 
      remote sensing, satellite and geochemical datasets to identify 
      rare mineral deposits through specialized AI models. 
      Our big data-driven model can be continuously retrained, 
      integrating local data from the area of interest to refine 
      predictions and adapt to its unique geological characteristics.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

const WrappedAbout = SectionWrapper(About, navLinks[0].id);

export default WrappedAbout;
