import React, { useState } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { worksStyles, styles, initialTheme } from "../style";
import { WORKS_TEXT } from "../constants";


const ProjectCard = ({ name, description, tags, image, source_code_link }) => {
  const [currentTheme] = useState(initialTheme);

  return (
    <motion.div variants={fadeIn("up", "spring")}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className={worksStyles(currentTheme).projectCard.wrapper}
      >
        <div className={worksStyles(currentTheme).projectCard.imageContainer}>
          <img
            src={image}
            alt="project_image"
            className={worksStyles(currentTheme).projectCard.image}
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className={worksStyles(currentTheme).projectCard.githubButton}
            >
              <img src={github} alt="source code" className={worksStyles(currentTheme).projectCard.githubIcon} />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className={worksStyles(currentTheme).projectCard.title}>{name}</h3>
          <p className={worksStyles(currentTheme).projectCard.description}>{description}</p>
        </div>
        <div className={worksStyles(currentTheme).projectCard.tagsContainer}>
          {tags.map((tag) => (
            <p key={tag.name} className={`${worksStyles(currentTheme).projectCard.tag} ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

  const Works = () => {
  const [currentTheme] = useState(initialTheme);

  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles(currentTheme).sectionHeadText}`}>{WORKS_TEXT.sectionHeading}</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p variants={fadeIn("", "", 0.1)} className={worksStyles(currentTheme).mainContent.description}>
          {WORKS_TEXT.description}
        </motion.p>
      </div>
      <div className={worksStyles(currentTheme).mainContent.projectsGrid}>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
