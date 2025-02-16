import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motion";
import { sectionStyles, styles } from "../style";

const StarWrapper = (Component, idName) => () => (
  <motion.section
    variants={staggerContainer()}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.25 }}
    className={`${styles.padding} ${sectionStyles.section}`}
  >
    <span className={sectionStyles.hashSpan} id={idName}>
      &nbsp;
    </span>
    <Component />
  </motion.section>
);

export default StarWrapper;
