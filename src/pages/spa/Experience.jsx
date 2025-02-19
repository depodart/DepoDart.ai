// Experience.jsx
import React, { memo, useContext } from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiences, EXPERIENCE_TEXT, navLinks } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { experienceStyles, defaultSectionStyles, themes } from "../../style";
import { ThemeContext } from "../../context/ThemeContext";

const ExperienceCard = memo(({ experience }) => {
  const { isDark } = useContext(ThemeContext);
  const backgroundColor = isDark
    ? themes.colors.dark.background.tertiary
    : themes.colors.dark.background.secondary;

  return (
    <VerticalTimelineElement
      contentStyle={{ background: backgroundColor }}
      contentArrowStyle={{
        borderRight: "7px solid #E5E7EB",
      }}
      date={experience.date}
      iconStyle={{ background: backgroundColor }}
      icon={
        experience.icon && (
          <div className={experienceStyles.icon.iconContainer}>
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
        <p className={experienceStyles.text.cardSubtitle}>{experience.sub_title}</p>
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
});

const Experience = () => {
  return (
    <>
      <p className={`
        ${defaultSectionStyles.sectionSubText} 
        ${experienceStyles.text.mainTitle.p}
        `}>
        {EXPERIENCE_TEXT.sectionSubText}
      </p>
      <h2 className={`
        ${defaultSectionStyles.sectionHeadText} 
        ${experienceStyles.text.mainTitle.h2}`
      }>
        {EXPERIENCE_TEXT.sectionHeadText}
      </h2>

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
