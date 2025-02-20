import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { departments, careers } from '../../constants';


const CareersPage = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('all');



  const filteredJobs = selectedDepartment === 'all' 
    ? careers
    : careers.filter(job => job.department === selectedDepartment);

  return (
    <div className="container mx-auto px-4 py-8 top-10 bg-background-secondary-dark dark:bg-background-tertiary-dark">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-secondary-dark dark:text-primary-light mb-8">
          Join Our Team
        </h1>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-primary-dark dark:text-primary-light">
            Filter by Department
          </h2>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => setSelectedDepartment('all')}
              className={`px-4 py-2 rounded-lg ${
                selectedDepartment === 'all' 
                  ? 'bg-secondary-dark text-primary-light shadow-[-2px_-2px_0px_0px_rgba(210,59,12,0.3)]'
                  : 'bg-background-secondary-dark dark:bg-background-tertiary-dark text-primary-dark dark:text-primary-light'
              }`}
            >
              All Departments
            </button>
            {departments.map(dept => (
              <button
                key={dept.id}
                onClick={() => setSelectedDepartment(dept.id)}
                className={`px-4 py-2 rounded-lg ${
                  selectedDepartment === dept.id
                    ? 'bg-secondary-dark text-primary-light shadow-[-2px_-2px_0px_0px_rgba(210,59,12,0.3)]'
                    : 'bg-background-secondary-dark dark:bg-background-tertiary-dark text-primary-dark dark:text-primary-light'
                }`}
              >
                {dept.name}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredJobs.map(job => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="bg-background-secondary-dark dark:bg-background-tertiary-dark rounded-lg shadow-[-4px_-4px_4px_0px_rgba(210,59,12,0.6),_-4px_0px_4px_0px_rgba(210,59,12,0.6),_-4px_4px_4px_0px_rgba(210,59,12,0.6)] p-6"
            >
              <h3 className="text-xl font-semibold mb-2 text-primary-dark dark:text-primary-light">{job.title}</h3>
              <div className="flex gap-4 mb-4">
                <span className="text-sm bg-blue-100 dark:bg-blue-900 text-blue-900 dark:text-blue-100 px-2 py-1 rounded">
                  {job.location}
                </span>
                <span className="text-sm bg-green-100 dark:bg-green-900 text-green-900 dark:text-green-100 px-2 py-1 rounded">
                  {job.type}
                </span>
              </div>
              <p className="text-primary-dark dark:text-primary-light mb-4">
                {job.description}
              </p>
              <button className="bg-secondary-dark text-primary-light px-4 py-2 rounded hover:opacity-90 transition-opacity">
                Apply Now
              </button>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default CareersPage;