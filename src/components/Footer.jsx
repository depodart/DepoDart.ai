// Footer.jsx
import React, { memo } from "react";
import { SectionWrapper } from "../hoc";
import { FOOTER_TEXT } from "../constants";
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from "@heroicons/react/24/outline";
import { defaultSectionStyles, footerStyles } from "../style";

export const FOOTER_CONTACT_SECTIONS = [
  {
    icon: <EnvelopeIcon className="h-6 w-6" />,
    title: "EMAIL",
    content: FOOTER_TEXT.email,
  },
  {
    icon: <PhoneIcon className="h-6 w-6" />,
    title: "PHONE",
    content: FOOTER_TEXT.phone,
  },
  {
    icon: <MapPinIcon className="h-6 w-6" />,
    title: "ADDRESS",
    content: `${FOOTER_TEXT.address.city}, ${FOOTER_TEXT.address.province}, ${FOOTER_TEXT.address.street}`,
  },
];

const ContactCard = memo(({ title, content, icon }) => {
  return (
    <div
      className={`${footerStyles.contactCard.container} ${footerStyles.contactCard.default}`}
    >
      <div className={footerStyles.contactCard.header}>
        <span className={footerStyles.contactCard.icon}>{icon}</span>
        <h3 className={footerStyles.contactCard.title}>{title || ""}</h3>
      </div>
      <dl className={footerStyles.contactCard.contentList}>
        <div>
          <dt className="sr-only">{title}</dt>
          <dd>
            <p className={`${footerStyles.contactCard.content} ${footerStyles.contactCard.contentDefault}`}>
              {content || ""}
            </p>
          </dd>
        </div>
      </dl>
    </div>
  );
});

const Footer = () => {
  return (
    <footer className={footerStyles.container}>
      <div className={footerStyles.topSection}>
        <div className={footerStyles.innerWrapper}>
          <div className={footerStyles.contentContainer}>
            <div className={footerStyles.gridLayout}>
              <div>
                <h2 className={defaultSectionStyles.sectionHeadText}>Contacts</h2>
                <p className={footerStyles.description}>
                  Discover how innovative exploration companies are making breakthrough discoveries with DepoDart.
                </p>
              </div>
              <div className={footerStyles.cardsGrid}>
                {FOOTER_CONTACT_SECTIONS.map((section, index) => (
                  <ContactCard key={index} {...section} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={footerStyles.bottomSection}>
        <div className={footerStyles.copyrightWrapper}>
          <p className={footerStyles.copyrightText}>
            {FOOTER_TEXT.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default SectionWrapper(Footer, "");
