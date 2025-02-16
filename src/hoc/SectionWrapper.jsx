import React from "react";
import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motion";
import { sectionStyles, defaultSectionStyles } from "../style";

const StarWrapper = (Component, idName) => () => {
  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${defaultSectionStyles.padding} ${sectionStyles.section}`}
    >
      <span className={sectionStyles.hashSpan} id={idName}>
        &nbsp;
      </span>
      <Component />
    </motion.section>
  );
};

export default StarWrapper;
