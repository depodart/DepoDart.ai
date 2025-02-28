import React from 'react';
import { motion } from 'framer-motion';

/**
 * SkeletonLoader - Component that shows content placeholders during data loading
 * Features different preset layouts for various content types
 */
const SkeletonLoader = ({ 
  type = 'card', // Options: 'card', 'text', 'list', 'profile', 'table', 'media'
  count = 1, 
  className = '',
  hideAnimation = false,
}) => {
  // Shimmer animation for skeleton loaders
  const shimmer = {
    background: {
      x: [-200, 200],
      transition: {
        repeat: Infinity,
        duration: 2,
        ease: "linear"
      }
    }
  };

  // Generate skeleton array based on count
  const skeletons = Array.from({ length: count }, (_, index) => index);
  
  // Helper to render skeleton based on type
  const renderSkeleton = (type, index) => {
    switch (type) {
      case 'card':
        return (
          <div 
            key={`skeleton-${index}`}
            className={`relative overflow-hidden bg-white/5 rounded-xl p-4 ${className}`}
          >
            {/* Image placeholder */}
            <div className="aspect-video w-full bg-white/10 rounded-lg mb-4" />
            
            {/* Title placeholder */}
            <div className="h-6 bg-white/10 rounded-md mb-3 w-3/4" />
            
            {/* Description placeholders */}
            <div className="h-4 bg-white/10 rounded-md mb-2 w-full" />
            <div className="h-4 bg-white/10 rounded-md mb-2 w-5/6" />
            <div className="h-4 bg-white/10 rounded-md w-4/6" />
            
            {/* Tag placeholders */}
            <div className="flex gap-2 mt-4">
              <div className="h-6 bg-white/10 rounded-full w-16" />
              <div className="h-6 bg-white/10 rounded-full w-20" />
              <div className="h-6 bg-white/10 rounded-full w-14" />
            </div>
          </div>
        );
        
      case 'text':
        return (
          <div 
            key={`skeleton-${index}`}
            className={`relative overflow-hidden ${className}`}
          >
            <div className="h-6 bg-white/10 rounded-md mb-3 w-3/4" />
            <div className="h-4 bg-white/10 rounded-md mb-2 w-full" />
            <div className="h-4 bg-white/10 rounded-md mb-2 w-5/6" />
            <div className="h-4 bg-white/10 rounded-md mb-2 w-full" />
            <div className="h-4 bg-white/10 rounded-md w-4/6" />
          </div>
        );
        
      case 'list':
        return (
          <div 
            key={`skeleton-${index}`}
            className={`relative overflow-hidden ${className}`}
          >
            {Array.from({ length: 5 }, (_, i) => (
              <div key={i} className="flex items-center py-3 border-b border-white/5">
                <div className="h-10 w-10 bg-white/10 rounded-full mr-3" />
                <div className="flex-1">
                  <div className="h-4 bg-white/10 rounded-md mb-2 w-3/4" />
                  <div className="h-3 bg-white/10 rounded-md w-1/2" />
                </div>
              </div>
            ))}
          </div>
        );
        
      case 'profile':
        return (
          <div 
            key={`skeleton-${index}`}
            className={`relative overflow-hidden flex flex-col items-center ${className}`}
          >
            <div className="h-24 w-24 bg-white/10 rounded-full mb-4" />
            <div className="h-6 bg-white/10 rounded-md mb-2 w-48" />
            <div className="h-4 bg-white/10 rounded-md mb-4 w-60" />
            <div className="h-10 bg-white/10 rounded-md w-40" />
          </div>
        );
        
      case 'table':
        return (
          <div 
            key={`skeleton-${index}`}
            className={`relative overflow-hidden ${className}`}
          >
            {/* Header */}
            <div className="flex mb-2 pb-2 border-b border-white/10">
              <div className="h-8 bg-white/10 rounded-md w-1/4 mr-2" />
              <div className="h-8 bg-white/10 rounded-md w-1/4 mr-2" />
              <div className="h-8 bg-white/10 rounded-md w-1/4 mr-2" />
              <div className="h-8 bg-white/10 rounded-md w-1/4" />
            </div>
            
            {/* Rows */}
            {Array.from({ length: 5 }, (_, i) => (
              <div key={i} className="flex mb-2 py-2 border-b border-white/5">
                <div className="h-6 bg-white/10 rounded-md w-1/4 mr-2" />
                <div className="h-6 bg-white/10 rounded-md w-1/4 mr-2" />
                <div className="h-6 bg-white/10 rounded-md w-1/4 mr-2" />
                <div className="h-6 bg-white/10 rounded-md w-1/4" />
              </div>
            ))}
          </div>
        );
        
      case 'media':
        return (
          <div 
            key={`skeleton-${index}`}
            className={`relative overflow-hidden ${className}`}
          >
            {/* Media player placeholder */}
            <div className="aspect-video w-full bg-white/10 rounded-xl mb-4 flex items-center justify-center">
              <div className="h-16 w-16 bg-white/5 rounded-full flex items-center justify-center">
                <div className="h-8 w-8 bg-white/10 rounded-md" />
              </div>
            </div>
            
            {/* Title and info */}
            <div className="h-6 bg-white/10 rounded-md mb-3 w-3/4" />
            <div className="flex justify-between">
              <div className="h-4 bg-white/10 rounded-md w-1/3" />
              <div className="h-4 bg-white/10 rounded-md w-1/4" />
            </div>
          </div>
        );
        
      default:
        return (
          <div 
            key={`skeleton-${index}`}
            className={`relative overflow-hidden h-24 bg-white/5 rounded-md ${className}`}
          />
        );
    }
  };

  return (
    <div className="skeleton-container">
      {/* Shimmer animation overlay if not hidden */}
      {!hideAnimation && (
        <motion.div
          className="absolute inset-0 z-0 w-full h-full"
          aria-hidden="true"
        >
          <motion.div
            className="w-1/3 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent"
            variants={shimmer}
            animate="background"
          />
        </motion.div>
      )}
      
      {/* Skeleton elements */}
      <div className="relative z-10">
        {count === 1 ? (
          renderSkeleton(type, 0)
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {skeletons.map((index) => renderSkeleton(type, index))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SkeletonLoader; 