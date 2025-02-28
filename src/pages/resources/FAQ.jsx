import React, { useState } from 'react';
import { motion } from 'framer-motion';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: "What is DepoDart?",
      answer: "DepoDart is an advanced AI-powered terrain analysis and visualization platform that helps organizations make data-driven decisions about land development, environmental monitoring, and resource management.",
      gradient: "from-[#FF512F] to-[#DD2476]"
    },
    {
      question: "How accurate is DepoDart's terrain analysis?", 
      answer: "DepoDart utilizes high-resolution satellite imagery and advanced AI algorithms to provide terrain analysis with accuracy levels up to 98%. The exact accuracy may vary depending on the specific location and available data sources.",
      gradient: "from-[#4776E6] to-[#8E54E9]"
    },
    {
      question: "What industries can benefit from DepoDart?",
      answer: "DepoDart serves multiple industries including urban planning, construction, environmental conservation, agriculture, mining, and infrastructure development. Any organization that requires detailed terrain analysis can benefit from our platform.",
      gradient: "from-[#00B4DB] to-[#0083B0]"
    },
    {
      question: "How frequently is the terrain data updated?",
      answer: "Our terrain data is updated regularly, with most regions receiving updates every 1-3 months. Critical areas can be monitored more frequently upon request.",
      gradient: "from-[#56ab2f] to-[#a8e063]"
    },
    {
      question: "Can I export analysis results from DepoDart?",
      answer: "Yes, DepoDart allows you to export analysis results in multiple formats including PDF reports, CSV data files, and GIS-compatible formats for integration with other tools.",
      gradient: "from-[#FF512F] to-[#DD2476]"
    },
    {
      question: "What kind of support do you offer?",
      answer: "We provide comprehensive support including technical assistance, training sessions, and dedicated account management for enterprise clients. Our support team is available 24/7 to help with any questions or issues.",
      gradient: "from-[#4776E6] to-[#8E54E9]"
    },
    {
      question: "Is my data secure with DepoDart?",
      answer: "Yes, we take data security seriously. All data is encrypted both in transit and at rest, and we comply with international data protection standards. We also offer private cloud deployments for enterprise clients.",
      gradient: "from-[#00B4DB] to-[#0083B0]"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-dark to-tertiary-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-20">
          <h1 className="text-6xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-secondary-dark via-tertiary-light to-primary-light mb-8">
            Frequently Asked Questions
          </h1>
          <p className="text-2xl text-primary-light/80 max-w-3xl mx-auto leading-relaxed">
            Find answers to common questions about DepoDart's terrain analysis platform
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 gap-10"
        >
          {faqData.map((faq, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${faq.gradient} rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
              <div className="relative bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-secondary-dark/50 transition-all duration-300">
                <button
                  className="w-full flex justify-between items-center transition-all duration-300 hover:scale-[1.02]"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <h3 className="text-2xl font-bold text-primary-light">
                    {faq.question}
                  </h3>
                  <svg
                    className={`w-6 h-6 text-secondary-dark transform transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {openIndex === index && (
                  <p className="text-lg text-primary-light/70 leading-relaxed mt-4 transform transition-all duration-300">
                    {faq.answer}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default FAQ;
