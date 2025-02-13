import React from 'react';
import { SectionWrapper } from '../hoc';

const FOOTER_TEXT = {
  address: {
    street: import.meta.env.VITE_ADDRESS_STREET || "",
    province: import.meta.env.VITE_ADDRESS_PROVINCE || "",
    city: import.meta.env.VITE_ADDRESS_CITY || ""
  },
  phone: import.meta.env.VITE_PHONE || "",
  email: import.meta.env.VITE_EMAIL_RECIPIENT || "",
  copyright: `© ${new Date().getFullYear()} ${import.meta.env.VITE_COMPANY_NAME}. All rights reserved.`
};

const Footer = () => {
  return (
    <footer className="w-full bg-primary text-white py-8">
    <div className="max-w-full flex flex-col justify-between items-center">
      <div className="flex gap-8 items-center">
        <div className="flex gap-4">
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <p>{FOOTER_TEXT.address.street}<br/>{FOOTER_TEXT.address.city}, {FOOTER_TEXT.address.province}</p>
          </div>
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <p>{FOOTER_TEXT.phone}</p>
          </div>
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <p>{FOOTER_TEXT.email}</p>
          </div>
        </div>
      </div>
    </div>
    
      <div className="mt-4 text-center">
        <p className="text-sm text-gray-400">
          {FOOTER_TEXT.copyright.replace("{year}", new Date().getFullYear())}
        </p>
      </div>
  </footer>
  );
};

export default SectionWrapper(Footer, "");
