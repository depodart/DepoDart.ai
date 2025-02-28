import React from "react";
import { motion } from "framer-motion";
import { ABOUT_TEXT } from "../../constants";
import { BrainCircuit, Globe2, Settings, Network } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const features = [
    {
      title: "AI-Powered Analysis",
      description:
        "Innovative machine learning models that uncover complex relationships between geological, geophysical, and geochemical variables.",
      icon: <BrainCircuit size={32} className="text-secondary-dark" />,
      gradient: "from-[#FF512F] to-[#DD2476]",
    },
    {
      title: "Global Coverage",
      description:
        "Using extensive mining datasets from all corners of the world makes our model the most comprehensive of its kind.",
      icon: <Globe2 size={32} className="text-secondary-dark" />,
      gradient: "from-[#4776E6] to-[#8E54E9]",
    },
    {
      title: "Tailored Input",
      description:
        "New variables matching the input format can be quickly added to the model for tuning, making it the most versatile of its kind.",
      icon: <Settings size={32} className="text-secondary-dark" />,
      gradient: "from-[#00B4DB] to-[#0083B0]",
    },
    {
      title: "Format Flexibility",
      description:
        "Preprocessing supports table, image, and text formats. This goes hand in hand with the ability to use a wide range of variables.",
      icon: <Network size={32} className="text-secondary-dark" />,
      gradient: "from-[#56ab2f] to-[#a8e063]",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-dark to-tertiary-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-6xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-secondary-dark via-tertiary-light to-primary-light mb-8">
            Revolutionizing Mineral Exploration
          </h1>
          <p className="text-2xl text-primary-light/80 max-w-3xl mx-auto leading-relaxed">
            {ABOUT_TEXT.overview}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300`}
              ></div>
              <div className="relative bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-secondary-dark/50 transition-all duration-300">
                <div className="flex items-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                  <h3 className="text-2xl font-bold text-primary-light ml-4">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-lg text-primary-light/70 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 grid md:grid-cols-2 gap-10"
        >
          <div className="relative bg-white/5 backdrop-blur-lg rounded-2xl p-10 border border-white/10 hover:border-secondary-dark/50 transition-all duration-300">
            <h2 className="text-3xl font-bold text-secondary-dark mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-primary-light/70 leading-relaxed">
              To meet the growing demand for minerals by transforming vast
              amounts of data into valuable insights for the industry.
            </p>
          </div>

          <div className="relative bg-white/5 backdrop-blur-lg rounded-2xl p-10 border border-white/10 hover:border-secondary-dark/50 transition-all duration-300">
            <h2 className="text-3xl font-bold text-secondary-dark mb-6">
              Our Vision
            </h2>
            <p className="text-lg text-primary-light/70 leading-relaxed">
              To revolutionize the mining industry by making data-driven
              decision-making the standard for the future.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 text-center"
        >
          <Link
            to="/contact"
            className="inline-block bg-gradient-to-r from-secondary-dark to-tertiary-light text-primary-light px-10 py-4 rounded-full text-lg font-semibold hover:shadow-lg hover:shadow-secondary-dark/30 transition-all duration-300 hover:scale-105"
          >
            Learn More About Our Company
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
