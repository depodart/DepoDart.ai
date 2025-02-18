import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { worksStyles, defaultSectionStyles } from "../style";
import { WORKS_TEXT } from "../constants";


const ProjectCard = ({ name, description, tags, image, source_code_link }) => {


  return (
    <motion.div variants={fadeIn("up", "spring")}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className={worksStyles.projectCard.wrapper}
      >
        <div className={worksStyles.projectCard.imageContainer}>
          <img
            src={image}
            alt="project_image"
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
};

  const Works = () => {

  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={`${defaultSectionStyles.sectionHeadText}`}>{WORKS_TEXT.sectionHeading}</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p variants={fadeIn("", "", 0.1)} className={worksStyles.mainContent.description}>
          {WORKS_TEXT.description}
        </motion.p>
      </div>
      <div className={worksStyles.mainContent.projectsGrid}>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
