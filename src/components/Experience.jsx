import React, { useContext } from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiences, EXPERIENCE_TEXT, navLinks } from "../constants";
import { SectionWrapper } from "../hoc";
import { experienceStyles, defaultSectionStyles, themes } from "../style";
import { ThemeContext } from "../context/ThemeContext";


const ExperienceCard = ({ experience }) => {
  const { isDark } = useContext(ThemeContext);
  return (
      <VerticalTimelineElement
        contentStyle={{
          background: isDark 
          ? themes.colors.dark.background.tertiary 
          : themes.colors.dark.background.secondary
        }}
        contentArrowStyle={{
          borderRight: "7px solid #E5E7EB",
          color: isDark 
          ? themes.colors.dark.background.secondary 
          : themes.colors.dark.background.secondary
        }}
        date={experience.date}
        iconStyle={{ background: isDark 
          ? themes.colors.dark.background.tertiary 
          : themes.colors.dark.background.secondary 
        }}
        icon={
        experience.icon && (
          <div 
          className={experienceStyles.icon.iconContainer}
            >
            <img
              src={experience.icon}
              alt={experience.sub_title}
              className={experienceStyles.icon.iconImage}
            />
          </div>
        )
      }
    >
      <div>
        <h3 className={experienceStyles.text.cardTitle}>{experience.title}</h3>
        <p className={experienceStyles.text.cardSubtitle.className}>
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
      {/* <motion.div variants={textVariant()}> */}
        <p className={`${defaultSectionStyles.sectionSubText} text-center`}>
          {EXPERIENCE_TEXT.sectionSubText}
        </p>
        <h2 className={`${defaultSectionStyles.sectionHeadText} text-center`}>
          {EXPERIENCE_TEXT.sectionHeadText}
        </h2>
      {/* </motion.div> */}

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
