import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { navbarStylesVertical } from '../style';
import { menu, close } from '../assets';
import { navLinks } from '../constants';

const VerticalNavbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  // Smooth scroll function
  const smoothScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  // Set active link on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.SPA.map(link => document.getElementById(link.id));
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach(section => {
        if (section && section.offsetTop <= scrollPosition && 
            section.offsetTop + section.offsetHeight > scrollPosition) {
          setActive(section.getAttribute('id'));
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animation variants
  const tabVariants = {
    hover: { scale: 1.05 },
    tap: { scale: 0.95 }
  };

  const activeBackgroundVariants = {
    initial: { scaleY: 0 },
    animate: { scaleY: 1 },
    exit: { scaleY: 0 }
  };

  return (
    <>
      {/* Desktop Vertical Navbar */}
      <nav className={`${navbarStylesVertical.floatingNav} hidden sm:block`}>
        <div className={navbarStylesVertical.verticalContainer}>
          <motion.ul 
            className={navbarStylesVertical.verticalNav}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {navLinks?.SPA?.map(link => (
              <motion.li
                key={link.id}
                className={`relative ${navbarStylesVertical.verticalLink}`}
                variants={tabVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <a
                  href={`#${link.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setActive(link.title);
                    smoothScroll(link.id);
                  }}
                  className="block w-full h-full p-2"
                >
                  <span className="relative z-10 inline-block origin-left">
                    {link.title}
                  </span>
                  
                  {active === link.id && (
                    <motion.span
                      layoutId="activeTab"
                      className="absolute inset-0 bg-background-primary-dark rounded-lg"
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      variants={activeBackgroundVariants}
                      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    />
                  )}
                </a>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={navbarStylesVertical.mobileMenuContainer}>
        <motion.img
          src={toggle ? close : menu}
          alt="menu"
          className={navbarStylesVertical.menuIcon}
          onClick={() => setToggle(!toggle)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        />
        
        <AnimatePresence>
          {toggle && (
            <motion.div
              className={navbarStylesVertical.mobileMenuDropdown}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
            >
              {navLinks?.SPA?.map(link => (
                <motion.a
                  key={link.id}
                  href={`#${link.id}`}
                  className={`relative text-sm p-2 rounded-md block ${
                    active === link.id 
                      ? 'text-secondary-dark dark:text-secondary-light' 
                      : 'text-gray-600 dark:text-gray-300'
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    setActive(link.id);
                    setToggle(false);
                    smoothScroll(link.id);
                  }}
                  whileHover={{ scale: 1.05 }}
                >
                  {active === link.id && (
                    <motion.span
                      className="absolute inset-0 bg-background-primary-dark rounded-md"
                      layoutId="mobileActiveTab"
                      transition={{ type: 'spring', stiffness: 300 }}
                    />
                  )}
                  <span className="relative z-10">{link.title}</span>
                </motion.a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}

export default VerticalNavbar;

