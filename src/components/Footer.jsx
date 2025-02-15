import React from "react";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from "@heroicons/react/24/outline";

const FOOTER_TEXT = {
  address: {
    street: import.meta.env.VITE_ADDRESS_STREET || "",
    province: import.meta.env.VITE_ADDRESS_PROVINCE || "",
    city: import.meta.env.VITE_ADDRESS_CITY || ""
  },
  phone: import.meta.env.VITE_PHONE || "",
  email: import.meta.env.VITE_EMAIL_RECIPIENT || "",
  copyright: `© ${new Date().getFullYear()} ${import.meta.env.VITE_EMAIL_RECIPIENT_NAME || ""}. All rights reserved.`
};

const contactSections = [
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
  // {
  //   icon: "",
  //   title: "SOCIAL",
  //   content: "Facebook, Twitter, Instagram"
  // }
];

const ContactCard = ({ title, content, icon }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div 
      className={`rounded-2xl p-10 transition-all duration-300 ${
        isHovered ? 'bg-[#1d1836] text-white' : 'bg-tertiary'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center gap-3">
        <span className={`transition-all duration-300 ${
          isHovered ? 'text-[#915EFF]' : 'text-[#915EFF]'
        }`}>
          {icon}
        </span>
        <h3 className={`text-base font-semibold transition-all duration-300 ${
          isHovered ? 'text-[#915EFF]' : 'text-[#915EFF]'
        }`}>
          {title || ""}
        </h3>
      </div>
      <dl className="mt-3 space-y-1 text-sm">
        <div>
          <dt className="sr-only">{title}</dt>
          <dd>
            <p className={`font-semibold transition-all duration-300 ${
                isHovered ? 'text-[#00cea8]' : 'text-[#E0E0E0]'
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
  return (
    <footer className="w-full">
      {/* Top Section – Contact & Locations */}
      <div className="bg-primary py-8 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl divide-y divide-gray-700 lg:mx-0 lg:max-w-none">
            {/* Contact Information */}
            <div className="grid grid-cols-1 gap-10 py-16 lg:grid-cols-3">
              <div>
                <h2 className={styles.sectionHeadText}>
                  Contacts
                </h2>
                <p className="mt-4 text-base text-[#B0B0B0]">
                Discover how innovative exploration companies are making breakthrough discoveries with DepoDart.
               </p>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
                {contactSections.map((section, index) => (
                  <ContactCard key={index} {...section} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section – Company Info */}
      <div className="bg-primary text-white py-8">
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-400">{FOOTER_TEXT.copyright}</p>
          </div>
        </div>
    </footer>
  );
};

export default SectionWrapper(Footer, "");
