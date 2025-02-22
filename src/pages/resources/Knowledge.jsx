import React from 'react';
import { motion } from 'framer-motion';

const Knowledge = () => {
  const articles = [
    {
      title: "Understanding Terrain Analysis",
      description: "Learn about the fundamentals of terrain analysis and how DepoDart's AI technology revolutionizes this field.",
      category: "Technology",
      readTime: "5 min read"
    },
    {
      title: "AI in Environmental Monitoring",
      description: "Discover how artificial intelligence is transforming environmental monitoring and conservation efforts.",
      category: "AI & Environment",
      readTime: "8 min read"
    },
    {
      title: "Best Practices in Land Development",
      description: "Expert insights on sustainable land development practices and how technology can support better decision-making.",
      category: "Industry",
      readTime: "10 min read"
    },
    {
      title: "The Future of Urban Planning",
      description: "Explore how advanced terrain analysis is shaping the future of urban development and smart cities.",
      category: "Urban Planning",
      readTime: "7 min read"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen w-full bg-primary-dark pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-light mb-4">
            Knowledge Portal
          </h1>
          <p className="text-lg text-primary-light/80 max-w-2xl mx-auto">
            Explore our collection of articles, guides, and insights about terrain analysis, environmental monitoring, and sustainable development.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {articles.map((article, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-primary-medium p-6 rounded-lg hover:bg-primary-medium/80 transition-colors duration-300 cursor-pointer"
            >
              <div className="flex justify-between items-start mb-4">
                <span className="text-sm text-tertiary-light px-3 py-1 rounded-full bg-tertiary-light/10">
                  {article.category}
                </span>
                <span className="text-sm text-primary-light/60">
                  {article.readTime}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-primary-light mb-3">
                {article.title}
              </h3>
              <p className="text-primary-light/70">
                {article.description}
              </p>
              <div className="mt-4">
                <button className="text-tertiary-light hover:text-tertiary-light/80 transition-colors duration-300">
                  Read More →
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Knowledge;
