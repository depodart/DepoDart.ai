import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { departments, careers } from '../../constants';

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 }
};

const modalAnimation = {
  overlay: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
  },
  content: {
    initial: { scale: 0.9, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.9, opacity: 0 }
  }
};

// Reusable components
const Badge = ({ text, color }) => (
  <span className={`text-sm bg-${color}-500/10 text-${color}-500 dark:text-${color}-400 px-4 py-1.5 rounded-full`}>
    {text}
  </span>
);

const RequirementSection = ({ title, requirements }) => (
  <div className="mt-6">
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <ul className="list-disc pl-6">
      {requirements.map((req, index) => (
        <li key={index} className="text-primary-dark/80 dark:text-primary-light/80">{req}</li>
      ))}
    </ul>
  </div>
);

const PageHeader = () => (
  <div className="text-center">
    <motion.h1 
      {...fadeInUp}
      transition={{ delay: 0.2, duration: 0.5 }}
      className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-secondary-dark to-primary-light dark:from-primary-light dark:to-secondary-dark mb-4"
    >
      Join Our Team
    </motion.h1>
    <p className="text-lg text-primary-dark/80 dark:text-primary-light/80 max-w-2xl mx-auto">
      Be part of something extraordinary. We're always looking for talented people to join our growing team.
    </p>
  </div>
);

const DepartmentFilter = ({ selectedDepartment, setSelectedDepartment }) => (
  <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 shadow-lg">
    <h2 className="text-2xl font-semibold mb-6 text-primary-dark dark:text-primary-light">
      Filter by Department
    </h2>
    <div className="flex flex-wrap gap-3">
      {[{id: 'all', name: 'All Departments'}, ...departments].map(dept => (
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
);

const JobCard = ({ job, index, onSelect }) => (
  <motion.div
    key={job.id}
    {...fadeInUp}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="group bg-white/5 backdrop-blur-lg rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-white/10 hover:border-secondary-dark/50"
  >
    <h3 className="text-2xl font-bold mb-3 text-primary-dark dark:text-primary-light group-hover:text-secondary-dark dark:group-hover:text-secondary-dark transition-colors">
      {`${job.title} - ${job.location.region} - ${job.department}`}
    </h3>
    <div className="flex gap-3 mb-4">
      <Badge text={job.location.workType} color="blue" />
      <Badge text={job.employment.type} color="green" />
      <Badge text={job.employment.experience.level} color="purple" />
    </div>
    <p className="text-primary-dark/80 dark:text-primary-light/80 mb-6 line-clamp-3">
      {job.description}
    </p>
    <button
      onClick={() => onSelect(job)}
      className="block w-full bg-secondary-dark text-primary-light px-6 py-3 rounded-xl hover:shadow-lg hover:shadow-secondary-dark/30 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] text-center"
    >
      Read More
    </button>
  </motion.div>
);

const JobModal = ({ job, onClose }) => (
  <motion.div
    {...modalAnimation.overlay}
    onClick={onClose}
    className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
  >
    <motion.div
      {...modalAnimation.content}
      onClick={(e) => e.stopPropagation()}
      className="bg-primary-light dark:bg-primary-dark rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
    >
      <h2 className="text-3xl font-bold text-primary-dark dark:text-primary-light mb-4">
        {job.title}
      </h2>
      <div className="flex gap-3 mb-6">
        <Badge text={job.location.workType} color="blue" />
        <Badge text={job.employment.type} color="green" />
        <Badge text={job.employment.experience.level} color="purple" />
      </div>
      <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
        <p className="text-primary-dark/80 dark:text-primary-light/80">
          {job.description}
        </p>
        <RequirementSection title="Technical Requirements" requirements={job.requirements.technical} />
        <RequirementSection title="Professional Requirements" requirements={job.requirements.professional} />
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-3">Compensation</h3>
          <p className="text-primary-dark/80 dark:text-primary-light/80">
            {`${job.compensation.currency} ${job.compensation.range[0].toLocaleString()} - ${job.compensation.range[1].toLocaleString()}`}
          </p>
          <RequirementSection title="Benefits" requirements={job.compensation.benefits} />
        </div>
      </div>
      <div className="flex gap-4">
        <a
          href={`mailto:info@depodart.com?subject=Application for ${job.title}`}
          className="flex-1 bg-secondary-dark text-primary-light px-6 py-3 rounded-xl hover:shadow-lg hover:shadow-secondary-dark/30 transition-all duration-300 text-center"
        >
          Apply Now
        </a>
        <button
          onClick={onClose}
          className="px-6 py-3 rounded-xl bg-primary-light dark:bg-primary-dark text-secondary-dark hover:bg-secondary-dark/10 transition-all duration-300 hover:scale-105 active:scale-95"
        >
          Back to Jobs
        </button>
      </div>
    </motion.div>
  </motion.div>
);

const CareersPage = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedJob, setSelectedJob] = useState(null);

  const filteredJobs = selectedDepartment === 'all' 
    ? careers 
    : careers.filter(job => job.department === selectedDepartment);

  return (
    <div className="min-h-screen bg-gradient-to-b">
      <div className="container mx-auto px-6 py-12">
        <motion.div {...fadeInUp} transition={{ duration: 0.6, ease: "easeOut" }} className="space-y-10">
          <PageHeader />
          <DepartmentFilter 
            selectedDepartment={selectedDepartment}
            setSelectedDepartment={setSelectedDepartment}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredJobs.map((job, index) => (
              <JobCard 
                key={job.id}
                job={job}
                index={index}
                onSelect={setSelectedJob}
              />
            ))}
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedJob && (
          <JobModal 
            job={selectedJob}
            onClose={() => setSelectedJob(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default CareersPage;