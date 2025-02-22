import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-primary-dark to-tertiary-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 mix-blend-overlay"></div>
      <motion.div 
        className="text-center relative z-10 px-4"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <motion.h1 
          className="text-[12rem] md:text-[15rem] font-black text-secondary-dark mb-2 leading-none"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
        >
          404
        </motion.h1>
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-primary-light mb-6"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Page Not Found
        </motion.h2>
        <motion.p 
          className="text-tertiary-light mb-10 max-w-lg mx-auto text-lg md:text-xl leading-relaxed font-medium"
          initial={{ y: 50, opacity: 0, scale: 0.95 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ 
            delay: 0.6,
            duration: 0.8,
            type: "spring",
            stiffness: 100
          }}
        >
          Oops! <br />
          We couldn't find what you're looking for. <br />
        </motion.p>
        <motion.p 
          className="text-tertiary-light mb-10 max-w-lg mx-auto text-lg md:text-xl leading-relaxed font-medium"
          initial={{ y: 50, opacity: 0, scale: 0.95 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ 
            delay: 0.6,
            duration: 0.8,
            type: "spring",
            stiffness: 100
          }}
        >
          Let's get you back on track!
        </motion.p>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <Link
            to="/"
            className="inline-block px-10 py-4 text-lg font-bold text-primary-light bg-secondary-dark rounded-xl hover:bg-opacity-90 transition-all duration-300 hover:shadow-[0_0_30px_rgba(210,59,12,0.3)] transform hover:-translate-y-1"
          >
            Return Home
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NotFound;
