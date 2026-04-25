import { motion } from "framer-motion";
import { BrainCircuit, Box, Zap, Leaf, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { PRIMARY_CTA } from "../../constants";
import { uiStyles } from "../../style";

const technologies = [
  {
    title: "AI & Machine Learning",
    description:
      "Unique algorithms integrate predictive variables in the mining context, producing high-precision geospatial prospectivity maps.",
    icon: <BrainCircuit size={26} />,
  },
  {
    title: "Big-Data Preprocessing",
    description:
      "Standardizes extensive databases of geochemical, geological, and geophysical variables to train and continuously sharpen our models.",
    icon: <Box size={26} />,
  },
  {
    title: "Visualization",
    description:
      "Graphical applications that present results in the most useful form for the client, tailored to each exploration workflow.",
    icon: <Zap size={26} />,
  },
  {
    title: "Hands-Off API Access",
    description:
      "Our API lets specialized users submit their own data and retrieve predictions without requiring technical assistance.",
    icon: <Leaf size={26} />,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const Technology = () => {
  return (
    <div className="min-h-screen bg-primary-dark">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start gap-4 max-w-3xl"
        >
          <span className={uiStyles.eyebrow}>
            <span className={uiStyles.eyebrowDot} />
            TECHNOLOGY
          </span>
          <h1 className={`${uiStyles.sectionHeading} text-[40px] sm:text-[56px] md:text-[64px]`}>
            Prospectivity mapping, powered by multi-source AI.
          </h1>
          <p className={`${uiStyles.sectionSubheading} max-w-3xl text-[17px] sm:text-[19px]`}>
            Our models fuse geological, geophysical, and geochemical data so your team can focus on interpretation instead of integration.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-5"
        >
          {technologies.map((tech) => (
            <motion.article
              key={tech.title}
              variants={itemVariants}
              className={`${uiStyles.card} flex flex-col gap-4`}
            >
              <div className="w-11 h-11 rounded-lg flex items-center justify-center bg-secondary-dark/15 text-secondary-dark">
                {tech.icon}
              </div>
              <h2 className="text-xl font-bold text-primary-light tracking-tight">
                {tech.title}
              </h2>
              <p className="text-[14px] leading-relaxed text-primary-light/70">
                {tech.description}
              </p>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 flex flex-wrap items-center gap-3"
        >
          <Link to={PRIMARY_CTA.path} className={uiStyles.btnPrimary}>
            {PRIMARY_CTA.text}
            <ArrowRight size={16} />
          </Link>
          <Link to="/resources/knowledge" className={uiStyles.btnSecondary}>
            Read our research
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Technology;
