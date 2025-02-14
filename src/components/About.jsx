import { motion } from 'framer-motion';
import React from 'react';
import { Tilt } from 'react-tilt';
import { services } from '../constants';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';

const ServiceCard = ({ index, title, description, icon, IconComponent }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          {/* {icon && ( <img src={icon} alt="web-development" className="w-16 h-16 object-contain" loading="lazy" /> )} */}
          {/* {IconComponent && <IconComponent className="w-10 h-10 text-blue-500" />} */}
          {IconComponent && (
            <IconComponent 
              className={`w-10 h-10 transition-all duration-300 ${
                isHovered ? 'text-[#915EFF]' : 'text-[#00cea8]'
              }`}
            />
          )}
    
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
          <p className="mt-2 text-white text-[16px] text-center">{description}</p>
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
      > At DepoDart, we harness the power of AI to create 
      precise geochemical maps for the identification 
      of rare minerals such as gold and copper. 
      Our innovative solutions streamline 
      the mineral exploration process and optimize resource discovery.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

const WrappedAbout = SectionWrapper(About, 'about');

export default WrappedAbout;
