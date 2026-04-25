// 6_Contacts.jsx — footer contact cards with brutal styling
import { memo } from "react";
import { SectionWrapper } from "../../hoc";
import { FOOTER_TEXT } from "../../constants";
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from "@heroicons/react/24/outline";
import { uiStyles, brutal, footerStyles } from "../../style";

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
    <div className={`${brutal.card} flex flex-col gap-3`}>
      <div className="flex items-center gap-3">
        <span className="w-9 h-9 rounded-lg border border-primary-light/10 bg-primary-light/[0.04] text-primary-light/80 flex items-center justify-center shrink-0">
          {icon}
        </span>
        <h3 className="text-[11px] uppercase tracking-[0.22em] font-semibold text-primary-light/60">
          {title}
        </h3>
      </div>
      <p className="text-[15px] font-medium text-primary-light/90 break-words">
        {content}
      </p>
    </div>
  );
});
ContactCard.displayName = "ContactCard";

const Contacts = () => {
  return (
    <section className={footerStyles.container}>
      <div className={footerStyles.topSection}>
        <div className={footerStyles.innerWrapper}>
          <div className={footerStyles.gridLayout}>
            <div className="flex flex-col gap-4 lg:col-span-1">
              <span className={brutal.badge}>REACH US</span>
              <h2 className={uiStyles.sectionHeading}>
                Let's talk exploration.
              </h2>
              <p className="text-[15px] text-primary-light/65 leading-relaxed max-w-md">
                We respond within two business days. Bring a project — we'll take a look.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:col-span-2">
              {FOOTER_CONTACT_SECTIONS.map((section, index) => (
                <ContactCard key={index} {...section} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper(Contacts, "");
