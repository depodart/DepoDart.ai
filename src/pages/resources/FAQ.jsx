import React, { useState } from 'react';
import { motion } from 'framer-motion';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: "What is DepoDart?",
      answer: "DepoDart is an advanced AI-powered terrain analysis and visualization platform that helps organizations make data-driven decisions about land development, environmental monitoring, and resource management."
    },
    {
      question: "How accurate is DepoDart's terrain analysis?",
      answer: "DepoDart utilizes high-resolution satellite imagery and advanced AI algorithms to provide terrain analysis with accuracy levels up to 98%. The exact accuracy may vary depending on the specific location and available data sources."
    },
    {
      question: "What industries can benefit from DepoDart?",
      answer: "DepoDart serves multiple industries including urban planning, construction, environmental conservation, agriculture, mining, and infrastructure development. Any organization that requires detailed terrain analysis can benefit from our platform."
    },
    {
      question: "How frequently is the terrain data updated?",
      answer: "Our terrain data is updated regularly, with most regions receiving updates every 1-3 months. Critical areas can be monitored more frequently upon request."
    },
    {
      question: "Can I export analysis results from DepoDart?",
      answer: "Yes, DepoDart allows you to export analysis results in multiple formats including PDF reports, CSV data files, and GIS-compatible formats for integration with other tools."
    },
    {
      question: "What kind of support do you offer?",
      answer: "We provide comprehensive support including technical assistance, training sessions, and dedicated account management for enterprise clients. Our support team is available 24/7 to help with any questions or issues."
    },
    {
      question: "Is my data secure with DepoDart?",
      answer: "Yes, we take data security seriously. All data is encrypted both in transit and at rest, and we comply with international data protection standards. We also offer private cloud deployments for enterprise clients."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  return (
    <div className="min-h-screen w-full bg-primary-dark pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-light mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-primary-light/80 max-w-2xl mx-auto">
            Find answers to common questions about DepoDart's terrain analysis platform.
          </p>
        </div>

        <motion.div 
          className="max-w-3xl mx-auto space-y-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {faqData.map((faq, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-primary-medium rounded-lg overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-semibold text-primary-light">{faq.question}</span>
                <svg
                  className={`w-6 h-6 text-tertiary-light transform transition-transform ${
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
                <div className="px-6 pb-4">
                  <p className="text-primary-light/80">{faq.answer}</p>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default FAQ;
