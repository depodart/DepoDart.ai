// src/components/Navbar.jsx
import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { navbarStyles, defaultSectionStyles, uiStyles } from '../style';
import { menu, close, Dart_1 } from '../assets';
import { navLinks, PRIMARY_CTA } from '../constants';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const smoothScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleNavigation = (path, title) => {
    setActive(title);

    // If already on "/" and path is /contact, smooth-scroll to the contact section
    if (location.pathname === '/' && path === '/contact') {
      smoothScroll('contact');
    } else {
      navigate(path);
      window.scrollTo(0, 0);
    }
  };

  const handlePrimaryCta = () => {
    if (location.pathname === '/') {
      smoothScroll('contact');
    } else {
      navigate(PRIMARY_CTA.path);
      window.scrollTo(0, 0);
    }
    setToggle(false);
  };

  return (
    <nav className={`${defaultSectionStyles.paddingX} ${navbarStyles.nav}`}>
      <div className={navbarStyles.container}>
        <Link
          to="/"
          className={navbarStyles.logo}
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={Dart_1}
            alt="DepoDart logo"
            className="w-8 h-8 object-contain mr-2 filter brightness-500 hover:brightness-100 transition-all duration-300"
          />
          <div className="flex flex-col leading-tight">
            <p className={navbarStyles.logoText}>
              <span>Depo</span>
              <span className="text-secondary-dark">Dart</span>
            </p>
            <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-primary-light/50 hidden xs:block">
              AI Prospectivity Mapping
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden sm:flex items-center gap-6">
          <ul className={navbarStyles.desktopNav}>
            {navLinks?.main?.map((link) => (
              <li
                key={link.id}
                className={`
                  ${active === link.title ? navbarStyles.activeLink : navbarStyles.inactiveDesktopLink}
                  ${navbarStyles.navLink}
                  text-[15px]
                `}
                onClick={() => handleNavigation(link.path, link.title)}
              >
                <span>{link.title}</span>
              </li>
            ))}
          </ul>
          <button
            type="button"
            onClick={handlePrimaryCta}
            className={uiStyles.btnPrimary}
          >
            {PRIMARY_CTA.text}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={navbarStyles.mobileMenuContainer}>
          <img
            src={toggle ? close : menu}
            alt={toggle ? 'Close navigation menu' : 'Open navigation menu'}
            className={navbarStyles.menuIcon}
            onClick={() => setToggle(!toggle)}
          />
          <div className={`${!toggle ? 'hidden' : 'flex'} ${navbarStyles.mobileMenuDropdown}`}>
            <ul className={navbarStyles.mobileNav}>
              {navLinks?.main?.map((link) => (
                <li
                  key={link.id}
                  className={`${active === link.title ? navbarStyles.activeLink : navbarStyles.inactiveMobileLink} ${navbarStyles.navLink}`}
                  onClick={() => {
                    handleNavigation(link.path, link.title);
                    setToggle(false);
                  }}
                >
                  <span>{link.title}</span>
                </li>
              ))}
              <li className="pt-2">
                <button
                  type="button"
                  onClick={handlePrimaryCta}
                  className={`${uiStyles.btnPrimary} w-full`}
                >
                  {PRIMARY_CTA.text}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
