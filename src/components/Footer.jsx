import React, { useState } from "react";
import { SectionWrapper } from "../hoc";
import { FOOTER_TEXT } from "../constants";
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from "@heroicons/react/24/outline";
import { styles, initialTheme } from "../style";

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
  // {
  //   icon: "",
  //   title: "SOCIAL",
  //   content: "Facebook, Twitter, Instagram"
  // }
];

const ContactCard = ({ title, content, icon }) => {
  const [currentTheme] = useState(initialTheme);
  const [isHovered, setIsHovered] = useState(false);

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
  const [currentTheme] = useState(initialTheme);

      return (
    <footer className="w-full">
      {/* Top Section – Contact & Locations */}
      <div className="bg-primary py-8 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl divide-y divide-gray-700 lg:mx-0 lg:max-w-none">
            {/* Contact Information */}
            <div className="grid grid-cols-1 gap-10 py-16 lg:grid-cols-3">
              <div>
                <h2 className={`${styles(currentTheme).sectionHeadText}`}>
                  Contacts
                </h2>
                <p className="mt-4 text-base text-[#B0B0B0]">
                Discover how innovative exploration companies are making breakthrough discoveries with DepoDart.
               </p>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
                {FOOTER_CONTACT_SECTIONS.map((section, index) => (
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
