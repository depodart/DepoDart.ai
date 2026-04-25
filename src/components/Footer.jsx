import { Link, useNavigate } from 'react-router-dom';
import { FOOTER_TEXT, PRIMARY_CTA } from '../constants';
import { brutal } from '../style';

const Footer = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  const footerSections = [
    {
      title: "PRODUCT",
      links: [
        { text: "Prospectivity Maps", href: "/services/0/details" },
        { text: "3D Orebody Modeling", href: "/services/1/details" },
        { text: "Technology", href: "/technology/saige" },
      ]
    },
    {
      title: "RESOURCES",
      links: [
        { text: "Knowledge Portal", href: "/resources/knowledge" },
        { text: "FAQ", href: "/resources/faq" },
      ]
    },
    {
      title: "COMPANY",
      links: [
        { text: "About DepoDart", href: "/about" },
        { text: "Contact", href: "/contact" },
      ]
    },
  ];

  return (
    <footer className="bg-primary-dark text-primary-light border-t-4 border-secondary-dark">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-14 sm:py-20">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 md:gap-12">
          {/* Brand block — spans 2 cols on md+ */}
          <div className="col-span-2 flex flex-col gap-4">
            <Link
              to="/"
              onClick={() => window.scrollTo(0, 0)}
              className="flex items-baseline gap-0 text-2xl font-bold tracking-tight"
            >
              <span>Depo</span>
              <span className="text-secondary-dark">Dart</span>
            </Link>
            <p className="text-sm text-primary-light/60 max-w-sm leading-relaxed">
              {FOOTER_TEXT.tagline}
            </p>
            <button
              type="button"
              onClick={() => handleNavigation(PRIMARY_CTA.path)}
              className={`${brutal.btnPrimary} self-start mt-2`}
            >
              {PRIMARY_CTA.text}
            </button>
          </div>

          {footerSections.map((section) => (
            <div key={section.title} className="flex flex-col">
              <h3 className="text-[11px] uppercase tracking-[0.22em] font-semibold text-secondary-dark mb-5">
                {section.title}
              </h3>
              <ul className="flex flex-col gap-3">
                {section.links.map((link) => (
                  <li key={link.text}>
                    <button
                      type="button"
                      onClick={() => handleNavigation(link.href)}
                      className="text-sm text-primary-light/70 hover:text-primary-light transition-colors duration-200 text-left"
                    >
                      {link.text}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-8 border-t border-primary-light/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-primary-light/50">
            © {new Date().getFullYear()} DepoDart. All rights reserved.
          </p>
          <p className="text-[11px] uppercase tracking-[0.22em] text-primary-light/40 font-mono">
            {FOOTER_TEXT.address.city}, {FOOTER_TEXT.address.province} &middot; {FOOTER_TEXT.email}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
