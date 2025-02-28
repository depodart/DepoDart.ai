import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import RouteTransitionLoader from '../components/RouteTransitionLoader';

/**
 * TransitionLayout - Component for handling route transitions with loading states
 * Features:
 * - Detects route changes
 * - Shows appropriate loading UI
 * - Provides smooth page transitions
 * - Uses minimal loader for navigating within sections
 * - Uses full screen loader for major section changes
 */
const TransitionLayout = ({ children }) => {
  const location = useLocation();
  const navigationType = useNavigationType();
  const [isLoading, setIsLoading] = useState(false);
  const [useMinimalLoader, setUseMinimalLoader] = useState(true);
  const prevPathRef = useRef('/');
  const loadingTimerRef = useRef(null);

  // Detect if the route change is within the same section
  const isSameSection = useCallback((prevPath, currentPath) => {
    // Extract the first path segment to determine section
    const prevSegments = prevPath.split('/').filter(Boolean);
    const currentSegments = currentPath.split('/').filter(Boolean);
    
    // Consider same section if first segment matches
    return prevSegments[0] === currentSegments[0];
  }, []);

  // Handle route changes
  useEffect(() => {
    // Skip on initial render
    if (prevPathRef.current === '/') {
      prevPathRef.current = location.pathname;
      return;
    }
    
    // Skip loading when using browser back/forward buttons for smoother UX
    if (navigationType === 'POP') {
      prevPathRef.current = location.pathname;
      return;
    }
    
    // Don't trigger if the path hasn't actually changed
    if (prevPathRef.current === location.pathname) {
      return;
    }
    
    // Determine if we're navigating within the same section
    const withinSameSection = isSameSection(
      prevPathRef.current,
      location.pathname
    );
    
    // Use minimal loader for same section, full loader for different section
    setUseMinimalLoader(withinSameSection);
    
    // Start loading
    setIsLoading(true);
    
    // Clear any existing timer
    if (loadingTimerRef.current) {
      clearTimeout(loadingTimerRef.current);
    }
    
    // Simulate loading time - Replace with actual loading logic if needed
    const timeout = withinSameSection ? 300 : 800;
    loadingTimerRef.current = setTimeout(() => {
      setIsLoading(false);
      loadingTimerRef.current = null;
    }, timeout);
    
    // Update previous path
    prevPathRef.current = location.pathname;
    
    // Cleanup on unmount
    return () => {
      if (loadingTimerRef.current) {
        clearTimeout(loadingTimerRef.current);
      }
    };
  }, [location.pathname, isSameSection, navigationType]);

  // Page transition variants
  const pageVariants = {
    initial: {
      opacity: 0,
      y: 10
    },
    in: {
      opacity: 1,
      y: 0
    },
    out: {
      opacity: 0,
      y: -10
    }
  };

  return (
    <>
      {/* Route transition loader */}
      <RouteTransitionLoader 
        isLoading={isLoading} 
        minimal={useMinimalLoader} 
        loadingText={useMinimalLoader ? "Loading..." : "Changing page..."}
      />
      
      {/* Page content with transitions */}
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={{ type: 'tween', ease: 'easeInOut', duration: 0.3 }}
          className="w-full"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default TransitionLayout; 