import React from 'react';
import { motion } from 'framer-motion';
import SkeletonLoader from './SkeletonLoader';

/**
 * Collection of skeleton loaders for different page types
 * Each component matches the structure of the corresponding page
 */

// Skeleton for About page and section
export const AboutSkeleton = () => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
    <div className="text-center mb-20">
      <div className="h-12 bg-white/10 rounded-lg w-3/4 mx-auto mb-6" />
      <div className="h-6 bg-white/10 rounded-md w-2/3 mx-auto" />
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
      {Array.from({ length: 4 }, (_, i) => (
        <div key={i} className="relative bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
          <div className="flex items-center mb-6">
            <div className="h-8 w-8 bg-white/10 rounded-full mr-4" />
            <div className="h-6 bg-white/10 rounded-md w-1/2" />
          </div>
          <div className="h-4 bg-white/10 rounded-md mb-2 w-full" />
          <div className="h-4 bg-white/10 rounded-md mb-2 w-5/6" />
          <div className="h-4 bg-white/10 rounded-md w-4/6" />
        </div>
      ))}
    </div>
    
    <div className="grid md:grid-cols-2 gap-10 mb-16">
      {Array.from({ length: 2 }, (_, i) => (
        <div key={i} className="relative bg-white/5 backdrop-blur-lg rounded-2xl p-10 border border-white/10">
          <div className="h-8 bg-white/10 rounded-md mb-6 w-1/3" />
          <div className="h-4 bg-white/10 rounded-md mb-2 w-full" />
          <div className="h-4 bg-white/10 rounded-md w-5/6" />
        </div>
      ))}
    </div>
    
    <div className="flex justify-center mt-12">
      <div className="h-12 bg-white/10 rounded-full w-64" />
    </div>
  </div>
);

// Skeleton for Experience section
export const ExperienceSkeleton = () => (
  <div className="container mx-auto px-4 py-12">
    <div className="mb-12">
      <div className="h-6 bg-white/10 rounded-md w-1/3 mb-4" />
      <div className="h-10 bg-white/10 rounded-lg w-2/3 mb-8" />
    </div>
    
    <div className="space-y-8">
      {Array.from({ length: 3 }, (_, i) => (
        <div key={i} className="relative bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
          <div className="flex items-center mb-4">
            <div className="h-12 w-12 bg-white/10 rounded-full mr-4" />
            <div>
              <div className="h-6 bg-white/10 rounded-md mb-2 w-48" />
              <div className="h-4 bg-white/10 rounded-md w-32" />
            </div>
          </div>
          
          <div className="ml-4">
            {Array.from({ length: 3 }, (_, j) => (
              <div key={j} className="flex items-center mb-3">
                <div className="h-2 w-2 bg-white/10 rounded-full mr-3" />
                <div className="h-4 bg-white/10 rounded-md w-full" />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);

// Skeleton for Services section
export const ServicesSkeleton = () => (
  <div className="container mx-auto px-4 py-12">
    <div className="mb-12">
      <div className="h-12 bg-white/10 rounded-lg w-2/3 mx-auto mb-6" />
      <div className="h-6 bg-white/10 rounded-md w-full max-w-3xl mx-auto mb-12" />
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {Array.from({ length: 6 }, (_, i) => (
        <SkeletonLoader key={i} type="card" className="h-full" />
      ))}
    </div>
  </div>
);

// Skeleton for Contact section
export const ContactSkeleton = () => (
  <div className="container mx-auto px-4 py-12 flex flex-wrap">
    <div className="w-full lg:w-1/2 p-4">
      <div className="mb-8">
        <div className="h-6 bg-white/10 rounded-md w-1/3 mb-3" />
        <div className="h-10 bg-white/10 rounded-lg w-2/3 mb-6" />
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
        {Array.from({ length: 4 }, (_, i) => (
          <div key={i} className={`${i > 1 ? 'sm:col-span-2' : ''}`}>
            <div className="h-5 bg-white/10 rounded-md w-1/3 mb-2" />
            <div className="h-12 bg-white/10 rounded-md w-full" />
          </div>
        ))}
        
        <div className="sm:col-span-2">
          <div className="h-5 bg-white/10 rounded-md w-1/3 mb-2" />
          <div className="h-32 bg-white/10 rounded-md w-full" />
        </div>
      </div>
      
      <div className="h-12 bg-white/10 rounded-md w-full sm:w-1/3 mt-6" />
    </div>
    
    <div className="w-full lg:w-1/2 p-4">
      <div className="aspect-square bg-white/5 rounded-2xl animate-pulse" />
    </div>
  </div>
);

// Skeleton for Contacts (Footer) section
export const ContactsSkeleton = () => (
  <div className="container mx-auto px-4 py-12">
    <div className="mb-8">
      <div className="h-10 bg-white/10 rounded-lg w-1/3 mb-6" />
      <div className="h-6 bg-white/10 rounded-md w-3/4 mb-12" />
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {Array.from({ length: 3 }, (_, i) => (
        <div key={i} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
          <div className="flex items-center mb-4">
            <div className="h-8 w-8 bg-white/10 rounded-full mr-3" />
            <div className="h-6 bg-white/10 rounded-md w-1/2" />
          </div>
          <div className="h-5 bg-white/10 rounded-md w-full" />
        </div>
      ))}
    </div>
  </div>
);

// Skeleton for Technology page
export const TechnologySkeleton = () => (
  <div className="min-h-screen">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="text-center mb-20">
        <div className="h-12 bg-white/10 rounded-lg w-3/4 mx-auto mb-6" />
        <div className="h-6 bg-white/10 rounded-md w-2/3 mx-auto" />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
        {Array.from({ length: 4 }, (_, i) => (
          <div key={i} className="relative bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
            <div className="flex items-center mb-6">
              <div className="h-8 w-8 bg-white/10 rounded-full mr-4" />
              <div className="h-6 bg-white/10 rounded-md w-1/2" />
            </div>
            <div className="h-4 bg-white/10 rounded-md mb-2 w-full" />
            <div className="h-4 bg-white/10 rounded-md mb-2 w-5/6" />
            <div className="h-4 bg-white/10 rounded-md w-4/6" />
          </div>
        ))}
      </div>
      
      <div className="flex justify-center mt-12">
        <div className="h-12 bg-white/10 rounded-full w-64" />
      </div>
    </div>
  </div>
);

// Skeleton for FAQ page
export const FAQSkeleton = () => (
  <div className="min-h-screen">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="text-center mb-20">
        <div className="h-12 bg-white/10 rounded-lg w-3/4 mx-auto mb-6" />
        <div className="h-6 bg-white/10 rounded-md w-2/3 mx-auto" />
      </div>
      
      <div className="space-y-8">
        {Array.from({ length: 5 }, (_, i) => (
          <div key={i} className="relative bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
            <div className="flex justify-between items-center">
              <div className="h-6 bg-white/10 rounded-md w-2/3" />
              <div className="h-6 w-6 bg-white/10 rounded-full" />
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// Skeleton for Knowledge page
export const KnowledgeSkeleton = () => (
  <div className="min-h-screen w-full pt-24 pb-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <div className="h-10 bg-white/10 rounded-lg w-1/2 mx-auto mb-4" />
        <div className="h-6 bg-white/10 rounded-md w-3/4 mx-auto mb-16" />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {Array.from({ length: 4 }, (_, i) => (
          <div key={i} className="bg-white/5 p-6 rounded-lg">
            <div className="flex justify-between items-start mb-4">
              <div className="h-6 bg-white/10 rounded-full w-1/3" />
              <div className="h-4 bg-white/10 rounded-md w-1/4" />
            </div>
            <div className="h-6 bg-white/10 rounded-md w-3/4 mb-3" />
            <div className="h-4 bg-white/10 rounded-md mb-2 w-full" />
            <div className="h-4 bg-white/10 rounded-md mb-4 w-5/6" />
            <div className="h-6 bg-white/10 rounded-md w-1/4 mt-4" />
          </div>
        ))}
      </div>
    </div>
  </div>
);

// Skeleton for Careers page
export const CareersSkeleton = () => (
  <div className="min-h-screen">
    <div className="container mx-auto px-6 py-12">
      <div className="space-y-10">
        <div className="text-center">
          <div className="h-12 bg-white/10 rounded-lg w-1/2 mx-auto mb-4" />
          <div className="h-6 bg-white/10 rounded-md w-3/4 mx-auto" />
        </div>
        
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 shadow-lg">
          <div className="h-8 bg-white/10 rounded-md w-1/3 mb-6" />
          <div className="flex flex-wrap gap-3">
            {Array.from({ length: 5 }, (_, i) => (
              <div key={i} className="h-10 bg-white/10 rounded-full w-32" />
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 6 }, (_, i) => (
            <div key={i} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <div className="h-8 bg-white/10 rounded-md w-3/4 mb-3" />
              <div className="flex gap-3 mb-4">
                {Array.from({ length: 3 }, (_, j) => (
                  <div key={j} className="h-6 bg-white/10 rounded-full w-20" />
                ))}
              </div>
              <div className="h-4 bg-white/10 rounded-md mb-2 w-full" />
              <div className="h-4 bg-white/10 rounded-md mb-2 w-5/6" />
              <div className="h-4 bg-white/10 rounded-md mb-6 w-4/6" />
              <div className="h-12 bg-white/10 rounded-xl w-full" />
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

// Loading wrapper component that can be used around any page component
export const WithSkeleton = ({ children, isLoading, skeletonComponent: SkeletonComponent }) => {
  return (
    <>
      {isLoading ? <SkeletonComponent /> : children}
    </>
  );
}; 