import { motion } from "framer-motion";
import { BrainCircuit, Globe2, Settings, Network, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { ABOUT_TEXT, PRIMARY_CTA } from "../../constants";
import { uiStyles } from "../../style";

const features = [
  {
    title: "AI-Powered Analysis",
    description:
      "Innovative machine learning models that uncover complex relationships between geological, geophysical, and geochemical variables.",
    icon: <BrainCircuit size={26} />,
  },
  {
    title: "Global Coverage",
    description:
      "Extensive mining datasets from around the world make our model one of the most comprehensive of its kind.",
    icon: <Globe2 size={26} />,
  },
  {
    title: "Tailored Input",
    description:
      "New variables matching the input format can be added to the model quickly — making it the most versatile of its kind.",
    icon: <Settings size={26} />,
  },
  {
    title: "Format Flexibility",
    description:
      "Preprocessing supports table, image, and text formats — alongside a wide range of variable types.",
    icon: <Network size={26} />,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const About = () => {
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
            ABOUT DEPODART
          </span>
          <h1 className={`${uiStyles.sectionHeading} text-[40px] sm:text-[56px] md:text-[64px]`}>
            Geologists and AI researchers building exploration software.
          </h1>
          <p className={`${uiStyles.sectionSubheading} max-w-3xl text-[17px] sm:text-[19px]`}>
            {ABOUT_TEXT.overview}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-5"
        >
          {features.map((feature) => (
            <motion.article
              key={feature.title}
              variants={itemVariants}
              className={`${uiStyles.card} flex flex-col gap-4`}
            >
              <div className="w-11 h-11 rounded-lg flex items-center justify-center bg-secondary-dark/15 text-secondary-dark">
                {feature.icon}
              </div>
              <h2 className="text-xl font-bold text-primary-light tracking-tight">
                {feature.title}
              </h2>
              <p className="text-[14px] leading-relaxed text-primary-light/70">
                {feature.description}
              </p>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          <section className={`${uiStyles.card}`}>
            <span className={uiStyles.eyebrow}>
              <span className={uiStyles.eyebrowDot} />
              OUR MISSION
            </span>
            <h2 className="mt-4 text-2xl font-bold text-primary-light">
              Make geoscience data useful.
            </h2>
            <p className="mt-3 text-[14px] leading-relaxed text-primary-light/70">
              Help exploration teams get more from the data they already have. Bring multi-source inputs into one coherent picture of the subsurface.
            </p>
          </section>

          <section className={`${uiStyles.card}`}>
            <span className={uiStyles.eyebrow}>
              <span className={uiStyles.eyebrowDot} />
              OUR VISION
            </span>
            <h2 className="mt-4 text-2xl font-bold text-primary-light">
              Data-driven exploration as standard practice.
            </h2>
            <p className="mt-3 text-[14px] leading-relaxed text-primary-light/70">
              The next generation of discoveries will come from teams reading all of their geoscience data together — not one layer at a time.
            </p>
          </section>
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
          <Link to="/technology/saige" className={uiStyles.btnSecondary}>
            Explore the technology
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
