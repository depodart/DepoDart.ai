// Works.jsx
import React, { memo } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { SectionWrapper } from "../../hoc";
import { projects, WORKS_TEXT } from "../../constants";
import { textVariant } from "../../utils/motion";
import { worksStyles, defaultSectionStyles } from "../../style";

const ServiceCard = memo(({ id, name, description, tags, image, source_code_link }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/services/${id}/details`);
  };

  return (
    <article onClick={handleClick}>
      <section
        className={`${worksStyles.projectCard.wrapper} cursor-pointer bg-white/5 backdrop-blur-lg rounded-2xl p-5 border border-white/10 hover:border-secondary-dark hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl`}
      >
        <figure className={`${worksStyles.projectCard.imageContainer} relative aspect-video rounded-xl overflow-hidden mb-6 shadow-lg group`}>
          <img
            src={image}
            alt={`Service preview for ${name}`}
            className={`${worksStyles.projectCard.image} w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <button 
            className="absolute bottom-4 right-4 px-4 py-2 bg-secondary-dark/80 hover:bg-secondary-dark text-white rounded-lg shadow-lg transform translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500"
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/services/${id}/details`);
            }}
          >
            Learn More
          </button>
        </figure>

        <header className="space-y-4">
          <h3 className={`${worksStyles.projectCard.title} text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-secondary-dark to-tertiary-light group-hover:scale-105 transition-transform duration-500`}>
            {name}
          </h3>
          <p className={`${worksStyles.projectCard.description} text-primary-light/80 text-sm leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all duration-500 group-hover:text-primary-light`}>
            {description}
          </p>
        </header>

        <footer className={worksStyles.projectCard.tagsContainer}>
          {tags.map((tag) => (
            <span key={tag.name} className={`${worksStyles.projectCard.tag} ${tag.color}`}>
              <span 
                className="px-3 py-1 text-sm bg-gradient-to-r from-secondary-dark/20 to-tertiary-light/20 rounded-full text-primary-light/80 hover:text-white transition-all duration-500 hover:shadow-xl hover:from-secondary-dark/50 hover:to-tertiary-light/50 hover:scale-110"
              >
                #{tag.name}
              </span>
            </span>
          ))}
        </footer>
      </section>
    </article>
  );
});

const Services = () => {
  return (
    <main>
      <header className="hidden md:block">
        <motion.div variants={textVariant()}>
          <h2 className={`
            ${defaultSectionStyles.sectionHeadText} 
            ${worksStyles.text.mainContent.h2}
            text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-secondary-dark via-tertiary-light to-primary-light mb-8
          `}>
            {WORKS_TEXT.sectionHeading}
          </h2>
        </motion.div>
      </header>

      <header className="md:hidden">
        <h2 className={`
          ${defaultSectionStyles.sectionHeadText} 
          ${worksStyles.text.mainContent.h2}
          text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-secondary-dark via-tertiary-light to-primary-light mb-8
        `}>
          {WORKS_TEXT.sectionHeading}
        </h2>
      </header>

      <section className="w-full flex mb-12">
        <p className={`${worksStyles.text.mainContent.p} text-lg text-primary-light/80 leading-relaxed max-w-3xl`}>
          {WORKS_TEXT.description}
        </p>
      </section>
      
      <section className={`${worksStyles.mainContent.projectsGrid} grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8`}>
        {projects.map((project, index) => (
          <ServiceCard
            key={`project-${index}`}
            {...project}
            id={index}
          />
        ))}
      </section>
    </main>
  );
};

export default SectionWrapper(Services, "");
