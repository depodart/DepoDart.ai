import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { departments, careers } from '../../constants';

const CareersPage = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  const filteredJobs = selectedDepartment === 'all' 
    ? careers
    : careers.filter(job => job.department === selectedDepartment);

  return (
    <div className="min-h-screen bg-gradient-to-b ">
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
              Be part of something extraordinary. We're always looking for talented people to join our growing team.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-primary-dark dark:text-primary-light">
              Filter by Department
            </h2>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setSelectedDepartment('all')}
                className={`px-6 py-2.5 rounded-full transition-all duration-300 ${
                  selectedDepartment === 'all' 
                    ? 'bg-secondary-dark text-primary-light shadow-lg shadow-secondary-dark/30 scale-105'
                    : 'bg-background-secondary-dark/50 hover:bg-background-secondary-dark text-primary-dark dark:text-primary-light hover:scale-105'
                }`}
              >
                All Departments
              </button>
              {departments.map(dept => (
                <button
                  key={dept.id}
                  onClick={() => setSelectedDepartment(dept.id)}
                  className={`px-6 py-2.5 rounded-full transition-all duration-300 ${
                    selectedDepartment === dept.id
                      ? 'bg-secondary-dark text-primary-light shadow-lg shadow-secondary-dark/30 scale-105'
                      : 'bg-background-secondary-dark/50 hover:bg-background-secondary-dark text-primary-dark dark:text-primary-light hover:scale-105'
                  }`}
                >
                  {dept.name}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredJobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white/5 backdrop-blur-lg rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-white/10 hover:border-secondary-dark/50"
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
                <p className="text-primary-dark/80 dark:text-primary-light/80 mb-6 line-clamp-3">
                  {job.description}
                </p>
                <a 
                  href={`mailto:careers@depodart.com?subject=Application for ${job.title}`}
                  className="block w-full bg-secondary-dark text-primary-light px-6 py-3 rounded-xl hover:shadow-lg hover:shadow-secondary-dark/30 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] text-center"
                >
                  Apply Now
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CareersPage;