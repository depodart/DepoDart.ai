import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { close, logo, menu } from '../assets';
import { navLinks } from '../constants';
import { navbarStyles, styles } from '../style';



const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  const toggleResume = () => {
    const resumeUrl = '/example.pdf';
    window.open(resumeUrl);
  };

  useEffect(() => {
    if (toggle) {
      setActive('');
    }
  }, [toggle]);

  const renderNavLinks = (isMobile) => (
    <ul className={isMobile ? navbarStyles.mobileNav : navbarStyles.desktopNav}>
      {navLinks.map((link) => (
        <li
          key={link.id}
          className={`${
            active === link.title 
              ? navbarStyles.activeLink 
              : isMobile 
                ? navbarStyles.inactiveMobileLink 
                : navbarStyles.inactiveDesktopLink
          } ${navbarStyles.navLink} hover:text-white`}
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
        className={`${isMobile ? navbarStyles.inactiveMobileLink : navbarStyles.inactiveDesktopLink} ${navbarStyles.navLink} hover:text-white`}
      >
        <button onClick={toggleResume}>Download info</button>
      </li>
    </ul>
  );

  return (
    <nav className={`${styles.paddingX} ${navbarStyles.nav}`}>
      <div className={navbarStyles.container}>
        <Link
          to="/"
          className={navbarStyles.logo}
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}
        >
          <p className={navbarStyles.logoText}>
            Depo&nbsp;
            <span>Dart</span>
          </p>
        </Link>

        {/* Desktop Navigation */}
        {renderNavLinks(false)}

        {/* Mobile Navigation */}
        <div className={navbarStyles.mobileMenuContainer}>
          <img
            src={toggle ? close : menu}
            alt="menu"
            className={navbarStyles.menuIcon}
            onClick={() => setToggle(!toggle)}
          />

          <div className={`${!toggle ? 'hidden' : 'flex'} ${navbarStyles.mobileMenuDropdown}`}>
            {renderNavLinks(true)}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
