import { Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';

const CareersLayout = () => {
  return (
    <div className="relative z-0 bg-background-primary-light dark:bg-background-primary-dark">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="pt-[100px] min-h-screen"
      >
        <Outlet />
      </motion.div>

      <div className="relative z-0">
        <div className="absolute z-[-1] w-[50%] h-[50%] right-20 bottom-20 blue-gradient" />
      </div>
    </div>
  );
};

export default CareersLayout;
