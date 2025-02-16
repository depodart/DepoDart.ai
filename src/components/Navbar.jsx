import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { close, logo, menu } from '../assets';
import { navLinks } from '../constants';
import { navbarStyles, styles, initialTheme } from '../style';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  const [currentTheme] = useState(initialTheme);

  const toggleResume = () => {
    const resumeUrl = '/example.pdf';
    window.open(resumeUrl);
  };

  useEffect(() => {
    if (toggle) {
      setActive('');
    }
  }, [toggle]);     

  const renderNavLinks = (isMobile) => {
    return (
      <ul className={isMobile ? navbarStyles(currentTheme).mobileNav : navbarStyles(currentTheme).desktopNav}>
        {navLinks.map((link) => (
          <li
            key={link.id}
            className={`${
              active === link.title 
                ? navbarStyles(currentTheme).activeLink 
                : isMobile 
                  ? navbarStyles(currentTheme).inactiveMobileLink 
                  : navbarStyles(currentTheme).inactiveDesktopLink
            } ${navbarStyles(currentTheme).navLink} hover:text-white`}
            onClick={() => {
              setActive(link.title);
              
              const element = document.getElementById(link.id);
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
              
              if (isMobile) {
                setToggle(false);
              }
            }}
          >
            <a href={`#${link.id}`}>{link.title}</a>
          </li>
        ))}
        <li
          className={`${isMobile ? navbarStyles(currentTheme).inactiveMobileLink : navbarStyles(currentTheme).inactiveDesktopLink} ${navbarStyles(currentTheme).navLink} hover:text-white`}
        >
          <button onClick={toggleResume}>Download info</button>
        </li>
      </ul>
    );
  };

  return (
    <nav className={`${styles(currentTheme).paddingX} ${navbarStyles(currentTheme).nav}`}>
      <div className={navbarStyles(currentTheme).container}>
        <Link
          to="/"
          className={navbarStyles(currentTheme).logo}
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}
        >
          <p className={navbarStyles(currentTheme).logoText}>
            Depo&nbsp;
            <span>Dart</span>
            <img src={logo} alt="Logo" className="w-8 h-8 object-contain mr-2" />
          </p>
        </Link>

        {/* Desktop Navigation */}
        {renderNavLinks(false)}

        {/* Mobile Navigation */}
        <div className={navbarStyles(currentTheme).mobileMenuContainer}>
          <img
            src={toggle ? close : menu}
            alt="menu"
            className={navbarStyles(currentTheme).menuIcon}
            onClick={() => setToggle(!toggle)}
          />

          <div className={`${!toggle ? 'hidden' : 'flex'} ${navbarStyles(currentTheme).mobileMenuDropdown}`}>
            {renderNavLinks(true)}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
