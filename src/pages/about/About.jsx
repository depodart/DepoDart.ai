import { motion } from 'framer-motion';

const About = () => {
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

  const teamMembers = [
    {
      name: "Dr. Sarah Chen",
      role: "Chief Technology Officer",
      description: "Ph.D. in Geospatial Analytics with 15 years of experience in terrain analysis and AI.",
      image: "🧑‍🔬"
    },
    {
      name: "Mark Rodriguez",
      role: "Lead Developer",
      description: "Expert in 3D visualization and real-time terrain rendering systems.",
      image: "👨‍💻"
    },
    {
      name: "Dr. Emily Watson",
      role: "Environmental Scientist",
      description: "Specialist in environmental impact assessment and terrain sustainability.",
      image: "👩‍🔬"
    },
    {
      name: "James Kim",
      role: "AI Research Lead",
      description: "Pioneer in applying machine learning to geographical data analysis.",
      image: "🧑‍💻"
    }
  ];

  return (
    <div className="min-h-screen w-full bg-primary-dark pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-light mb-4">
            About DepoDart
          </h1>
          <p className="text-xl text-secondary-light max-w-3xl mx-auto">
            Revolutionizing terrain analysis through cutting-edge technology and expert innovation
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            className="bg-secondary-dark p-8 rounded-lg shadow-lg"
            variants={itemVariants}
          >
            <h2 className="text-3xl font-bold text-primary-light mb-4">Our Mission</h2>
            <p className="text-secondary-light text-lg">
              At DepoDart, we're committed to transforming how organizations understand and interact with terrain data. 
              Through innovative AI-powered analysis and advanced visualization technologies, we provide unprecedented 
              insights into geographical landscapes.
            </p>
          </motion.div>

          <motion.div 
            className="bg-secondary-dark p-8 rounded-lg shadow-lg"
            variants={itemVariants}
          >
            <h2 className="text-3xl font-bold text-primary-light mb-4">Our Vision</h2>
            <p className="text-secondary-light text-lg">
              We envision a future where terrain analysis is accessible, accurate, and actionable. 
              Our goal is to empower organizations with the tools they need to make informed decisions 
              about geographical challenges and opportunities.
            </p>
          </motion.div>
        </motion.div>

        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-light mb-4">
            Meet Our Team
          </h2>
          <p className="text-xl text-secondary-light max-w-3xl mx-auto">
            Experts dedicated to pushing the boundaries of terrain analysis
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="bg-secondary-dark p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              variants={itemVariants}
            >
              <div className="text-4xl mb-4">{member.image}</div>
              <h3 className="text-2xl font-bold text-primary-light mb-2">
                {member.name}
              </h3>
              <h4 className="text-xl text-primary-light/80 mb-3">
                {member.role}
              </h4>
              <p className="text-secondary-light">
                {member.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default About;
