import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { experiences, EXPERIENCE_TEXT, navLinks } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { experienceStyles, defaultSectionStyles } from "../style";

const ExperienceCard = ({ experience }) => {
  return (
      <VerticalTimelineElement
        className={experienceStyles.timelineElement}
        contentStyle={{
              background: '#371703',
              color: 'rgb(17 24 39)'
        }}
        contentArrowStyle={{
          //  borderRight: "7px solid #E5E7EB",
          //  background: '#1d1836'
        }}
        date={experience.date}
        iconStyle={{ background: experience.iconBg }}
        icon={
        experience.icon && (
          <div className={`${experienceStyles.timelineElementContent} ${experienceStyles.iconContainer}`}
            >
            <img
              src={experience.icon}
              alt={experience.sub_title}
              className={experienceStyles.iconImage}
            />
          </div>
        )
      }
    >
      <div>
        <h3 className={experienceStyles.cardTitle}>{experience.title}</h3>
        <p className={experienceStyles.cardSubtitle.className} style={experienceStyles.cardSubtitle}>
          {experience.sub_title}
        </p>
      </div>

      <ul className={experienceStyles.pointsList}>
        {experience.points.map((point, index) => (
          <li key={`experience-point-${index}`} className={experienceStyles.pointItem}>
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${defaultSectionStyles.sectionSubText} text-center`}>
          {EXPERIENCE_TEXT.sectionSubText}
        </p>
        <h2 className={`${defaultSectionStyles.sectionHeadText} text-center`}>
          {EXPERIENCE_TEXT.sectionHeadText}
        </h2>
      </motion.div>

      <div className={experienceStyles.timelineContainer}>
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
