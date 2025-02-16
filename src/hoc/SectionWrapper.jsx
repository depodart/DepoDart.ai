import React, { useContext } from "react";
import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motion";
import { sectionStyles, defaultSectionStyles } from "../style";
import { ThemeContext } from '../context/ThemeContext';

const StarWrapper = (Component, idName) => () => {
  const { currentTheme } = useContext(ThemeContext);

  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${defaultSectionStyles(currentTheme).padding} ${sectionStyles(currentTheme).section}`}
  >
    <span className={sectionStyles.hashSpan} id={idName}>
      &nbsp;
    </span>
    <Component />
  </motion.section>
);
}

export default StarWrapper;
