import React, { useState, useContext } from "react";
import { SectionWrapper } from "../hoc";
import { FOOTER_TEXT } from "../constants";
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from "@heroicons/react/24/outline";
import { styles, footerStyles } from "../style";
import { ThemeContext } from '../context/ThemeContext';


export const FOOTER_CONTACT_SECTIONS = [
  {
    icon: <EnvelopeIcon className="h-6 w-6" />,
    title: "EMAIL",
    content: FOOTER_TEXT.email,
  },
  {
    icon: <PhoneIcon className="h-6 w-6" />,
    title: "PHONE",
    content: FOOTER_TEXT.phone
  },
  {
    icon: <MapPinIcon className="h-6 w-6" />,
    title: "ADDRESS", 
    content: FOOTER_TEXT.address.city + ", " + FOOTER_TEXT.address.province + ", " + FOOTER_TEXT.address.street
  },
];

const ContactCard = ({ title, content, icon }) => {
  const { currentTheme } = useContext(ThemeContext);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`${footerStyles(currentTheme).contactCard.container} ${
        isHovered ? footerStyles(currentTheme).contactCard.hovered : footerStyles(currentTheme).contactCard.default
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={footerStyles(currentTheme).contactCard.header}>
          <span className={footerStyles(currentTheme).contactCard.icon}>
          {icon}
        </span>
        <h3 className={footerStyles(currentTheme).contactCard.title}>
          {title || ""}
        </h3>
      </div>
      <dl className={footerStyles(currentTheme).contactCard.contentList}>
        <div>
          <dt className="sr-only">{title}</dt>
          <dd>
            <p className={`${footerStyles(currentTheme).contactCard.content} ${
                isHovered ? footerStyles(currentTheme).contactCard.contentHovered : footerStyles(currentTheme).contactCard.contentDefault
              }`}
            >
              {content || ""}
            </p>
          </dd>
        </div>
      </dl>
    </div>
  );
};

const Footer = () => {
  const { currentTheme } = useContext(ThemeContext);

  return (
    <footer className={footerStyles(currentTheme).container}>
      <div className={footerStyles(currentTheme).topSection}>
        <div className={footerStyles(currentTheme).innerWrapper}>
          <div className={footerStyles(currentTheme).contentContainer}>
            <div className={footerStyles(currentTheme).gridLayout}>
              <div>
                <h2 className={`${styles(currentTheme).sectionHeadText}`}>
                  Contacts
                </h2>
                <p className={footerStyles(currentTheme).description}>
                  Discover how innovative exploration companies are making breakthrough discoveries with DepoDart.
                </p>
              </div>
              <div className={footerStyles(currentTheme).cardsGrid}>
                {FOOTER_CONTACT_SECTIONS.map((section, index) => (
                  <ContactCard key={index} {...section} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={footerStyles(currentTheme).bottomSection}>
        <div className={footerStyles(currentTheme).copyrightWrapper}>
          <p className={footerStyles(currentTheme).copyrightText}>{FOOTER_TEXT.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default SectionWrapper(Footer, "");
