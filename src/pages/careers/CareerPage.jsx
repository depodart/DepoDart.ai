import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CareersPage = () => {
  const [selectedJob, setSelectedJob] = useState(null);

  const job = {
    id: 'tech-004',
    title: 'Digital Solutions Architect',
    department: 'technology-development', 
    location: 'Remote',
    type: 'Full-time',
    description: 'Design cutting-edge web platforms for geological data visualization. Collaborate with data scientists to create responsive tools that transform technical datasets into exploration insights.',
    requirements: [
      'Bachelor's degree in Computer Science, Software Engineering or related field',
      '5+ years experience in full-stack web development',
      'Strong knowledge of modern JavaScript frameworks (React, Node.js)',
      'Experience with data visualization libraries and geospatial technologies',
      'Excellent problem-solving and communication skills'
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-b">
      <div className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-10"
        >
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-secondary-dark to-primary-light dark:from-primary-light dark:to-secondary-dark mb-4"
            >
              Join Our Team
            </motion.h1>
            <p className="text-lg text-primary-dark/80 dark:text-primary-light/80 max-w-2xl mx-auto">
              Be part of something extraordinary. We're looking for talented people to join our growing team.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-white/10 hover:border-secondary-dark/50"
            >
              <h3 className="text-2xl font-bold mb-3 text-primary-dark dark:text-primary-light group-hover:text-secondary-dark dark:group-hover:text-secondary-dark transition-colors">
                {job.title}
              </h3>
              <div className="flex gap-3 mb-4">
                <span className="text-sm bg-blue-500/10 text-blue-500 dark:text-blue-400 px-4 py-1.5 rounded-full">
                  {job.location}
                </span>
                <span className="text-sm bg-green-500/10 text-green-500 dark:text-green-400 px-4 py-1.5 rounded-full">
                  {job.type}
                </span>
              </div>
              <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
                <p className="text-primary-dark/80 dark:text-primary-light/80">
                  {job.description}
                </p>
                <h3 className="text-xl font-semibold mt-6 mb-3">Requirements</h3>
                <ul className="list-disc pl-6">
                  {job.requirements.map((req, index) => (
                    <li key={index} className="text-primary-dark/80 dark:text-primary-light/80">{req}</li>
                  ))}
                </ul>
              </div>
              <div className="flex gap-4">
                <a 
                  href={`mailto:info@depodart.com?subject=Application for ${job.title}`}
                  className="flex-1 bg-secondary-dark text-primary-light px-6 py-3 rounded-xl hover:shadow-lg hover:shadow-secondary-dark/30 transition-all duration-300 text-center"
                >
                  Apply Now
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CareersPage;