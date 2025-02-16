import React, { useContext } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import { navLinks } from "../constants";

import "react-vertical-timeline-component/style.min.css";

import { experiences, EXPERIENCE_TEXT } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { experienceStyles, defaultSectionStyles } from "../style";
import { ThemeContext } from '../context/ThemeContext';



const ExperienceCard = ({ experience }) => {
  const { currentTheme } = useContext(ThemeContext);

  return (
    <VerticalTimelineElement
      contentStyle={experienceStyles(currentTheme).timelineElementContent}
      contentArrowStyle={experienceStyles(currentTheme).timelineElementArrow}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        experience.icon && (
          <div className={experienceStyles(currentTheme).iconContainer}>
            <img
              src={experience.icon}
              alt={experience.sub_title}
              className={experienceStyles(currentTheme).iconImage}
            />
          </div>
        )
      }
    >
      <div>
        <h3 className={experienceStyles(currentTheme).cardTitle}>{experience.title}</h3>
        <p className={experienceStyles(currentTheme).cardSubtitle.className} style={experienceStyles(currentTheme).cardSubtitle}>
          {experience.sub_title}
        </p>
      </div>

      <ul className={experienceStyles(currentTheme).pointsList}>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className={experienceStyles(currentTheme).pointItem}
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  const { currentTheme } = useContext(ThemeContext);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${defaultSectionStyles(currentTheme).sectionSubText} text-center`}>
          {EXPERIENCE_TEXT.sectionSubText}
        </p>
        <h2 className={`${defaultSectionStyles(currentTheme).sectionHeadText} text-center`}>
          {EXPERIENCE_TEXT.sectionHeadText}
        </h2>
      </motion.div>

      <div className={experienceStyles(currentTheme).timelineContainer}>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={`experience-${index}`} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, navLinks[1].id);
