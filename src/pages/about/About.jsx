import React from "react";
import { motion } from "framer-motion";
import { ABOUT_TEXT } from "../../constants";
import { BrainCircuit, Globe2, Leaf, Users } from "lucide-react";

const About = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
  };

  const containerAnimation = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const features = [
    {
      title: "AI-Powered Analysis",
      description:
        "Innovative machine learning models that uncover complex relationships between geological, geophysical, and geochemical variables.",
      icon: <BrainCircuit size={32} className="text-secondary-dark" />,
    },
    {
      title: "Global Coverage",
      description:
        "Using extensive mining datasets from all corners of the world makes our model the most comprehensive of its kind.",
      icon: <Globe2 size={32} className="text-secondary-dark" />,
    },
    {
      title: "Tailored input",
      description:
        "New variables matching the input format can be quickly added to the model for tuning, making it the most versatile of its kind.",
      icon: <Leaf size={32} className="text-secondary-dark" />,
    },
    {
      title: "Hands-Off Access",
      description:
        "Our API allows specialized users to input their own data and get predictions without the need for technical assistance.",
      icon: <Users size={32} className="text-secondary-dark" />,
    },
  ];

  return (
    <div className="min-h-screen bg-primary-dark">
      <div className="container mx-auto px-6 py-24">
        <motion.div
          initial="hidden"
          animate="show"
          variants={containerAnimation}
          className="space-y-20"
        >
          {/* Hero Section */}
          <motion.div
            variants={fadeInUp}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-secondary-dark to-primary-light mb-8">
              Revolutionizing Mineral Exploration
            </h1>
            <p className="text-xl text-primary-light/80">
              {ABOUT_TEXT.overview}
            </p>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            variants={fadeInUp}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-secondary-dark/50 transition-all duration-300 text-center group hover:transform hover:scale-105"
              >
                <div className="flex justify-center text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-secondary-dark mb-3">
                  {feature.title}
                </h3>
                <p className="text-primary-light/70">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              variants={fadeInUp}
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-10 border border-white/10 hover:border-secondary-dark/50 transition-all duration-300"
            >
              <h2 className="text-3xl font-bold text-secondary-dark mb-6">
                Our Mission
              </h2>
              <p className="text-primary-light/80 text-lg leading-relaxed">
                To meet the growing demand for minerals by transforming vast
                amounts of data into valuable insights for the industry.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-10 border border-white/10 hover:border-secondary-dark/50 transition-all duration-300"
            >
              <h2 className="text-3xl font-bold text-secondary-dark mb-6">
                Our Vision
              </h2>
              <p className="text-primary-light/80 text-lg leading-relaxed">
                To revolutionize the mining industry by making data-driven
                decision-making the standard for the future.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
