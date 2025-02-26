import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  const footerSections = [
    {
      title: "TECHNOLOGY",
      links: [
        { text: "DepoDart Technology", href: "/technology/saige" },
        // { text: "Use Cases", href: "/technology/use-cases" }
      ]
    },
    {
      title: "ABOUT", 
      links: [
        { text: "About DepoDart", href: "/about" },
        // { text: "Our Team", href: "/about/team" },
        { text: "Careers", href: "/careers" }
      ]
    },
    {
      title: "RESOURCES",
      links: [
        { text: "Knowledge Portal", href: "/resources/knowledge" },
        { text: "FAQ", href: "/resources/faq" }
      ]
    },
    {
      title: "CONTACT",
      links: [
        { text: "Get In Touch", href: "/contact" }
      ]
    }
  ];

  return (
    <footer className="bg-gradient-to-r from-primary-dark to-primary-medium text-primary-light py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {footerSections.map((section, index) => (
            <div key={index} className="text-center md:text-left">
              <h3 className="text-xl font-bold mb-6 text-tertiary-light">{section.title}</h3>
              <ul className="space-y-4">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <button 
                      onClick={() => handleNavigation(link.href)}
                      className="relative inline-block hover:text-tertiary-light transition-colors duration-300
                        after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-tertiary-light 
                        after:left-0 after:-bottom-1 after:transition-all after:duration-300
                        hover:after:w-full"
                    >
                      {link.text}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-16 pt-8 border-t border-primary-light/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-light/70">
              © {new Date().getFullYear()} DepoDart. All rights reserved.
            </p>
            {/* <div className="flex items-center gap-6">
              <Link to="/privacy" className="text-sm text-primary-light/70 hover:text-tertiary-light">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-primary-light/70 hover:text-tertiary-light">
                Terms of Service
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
