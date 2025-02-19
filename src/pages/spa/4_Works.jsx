// Works.jsx
import React, { memo } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { SectionWrapper } from "../../hoc";
import { projects, WORKS_TEXT } from "../../constants";
import { fadeIn, textVariant } from "../../utils/motion";
import { worksStyles, defaultSectionStyles } from "../../style";

const ProjectCard = memo(({ id, name, description, tags, image, source_code_link }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`projects/${id}`);
  };

  return (
    <motion.div variants={fadeIn("up", "spring")} onClick={handleClick}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className={`${worksStyles.projectCard.wrapper} cursor-pointer`}
      >
        <div className={worksStyles.projectCard.imageContainer}>
          <img
            src={image}
            alt={name}
            className={worksStyles.projectCard.image}
          />
        </div>
        <div className="mt-5">
          <h3 className={worksStyles.projectCard.title}>{name}</h3>
          <p className={worksStyles.projectCard.description}>{description}</p>
        </div>
        <div className={worksStyles.projectCard.tagsContainer}>
          {tags.map((tag) => (
            <p key={tag.name} className={`${worksStyles.projectCard.tag} ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
});

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={`
          ${defaultSectionStyles.sectionHeadText} 
          ${worksStyles.text.mainContent.h2}`
        }>
          {WORKS_TEXT.sectionHeading}
        </h2>
      </motion.div>
      <div className="w-full flex">
        <p className={worksStyles.text.mainContent.p}>{WORKS_TEXT.description}</p>
      </div>
      <div className={worksStyles.mainContent.projectsGrid}>
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            {...project}
            id={index}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
