import React from 'react';
import { motion } from 'framer-motion';

const Team = () => {
  const teamMembers = [
    {
      name: "Dr. Sarah Chen",
      role: "Chief Executive Officer",
      bio: "Dr. Chen brings over 15 years of experience in AI and geospatial technology. She leads DepoDart's vision of revolutionizing terrain analysis.",
      image: "/team/sarah-chen.jpg"
    },
    {
      name: "Marcus Rodriguez",
      role: "Chief Technology Officer", 
      bio: "With a background in machine learning and computer vision, Marcus oversees the development of DepoDart's cutting-edge AI algorithms.",
      image: "/team/marcus-rodriguez.jpg"
    },
    {
      name: "Dr. Emily Watson",
      role: "Head of Research",
      bio: "Dr. Watson leads our research initiatives in environmental monitoring and sustainable development practices.",
      image: "/team/emily-watson.jpg"
    },
    {
      name: "James Park",
      role: "VP of Product",
      bio: "James brings extensive product management experience from leading tech companies, focusing on user-centric design and innovation.",
      image: "/team/james-park.jpg"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen w-full bg-primary-dark pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-light mb-4">
            Our Team
          </h1>
          <p className="text-lg text-primary-light/80 max-w-2xl mx-auto">
            Meet the experts behind DepoDart's innovative terrain analysis technology.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="bg-primary-medium rounded-lg overflow-hidden shadow-xl"
              variants={itemVariants}
            >
              <div className="aspect-w-1 aspect-h-1">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary-light mb-2">
                  {member.name}
                </h3>
                <p className="text-tertiary-light font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-primary-light/80 text-sm">
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Team;
