// src/components/Navbar.jsx
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { navbarStyles, defaultSectionStyles } from '../style';
import { ThemeContext } from '../context/ThemeContext';
import { menu, close, logo } from '../assets';
import { navLinks } from '../constants';

const Navbar = () => {
  const { toggleTheme, isDark } = useContext(ThemeContext);
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

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
          <p className={navbarStyles.logoText}>
            <img src={logo} alt="Logo" className="w-8 h-8 object-contain mr-2" />
            Depo&nbsp;<span>Dart</span>
          </p>
        </Link>

        <button
          onClick={toggleTheme}
          className="ml-4 p-2 rounded border border-gray-300"
        >
          {isDark ? 'Light Mode' : 'Dark Mode'}
        </button>

        {/* Desktop Navigation */}
        <ul className={navbarStyles.desktopNav}>
          {navLinks.map(link => (
            <li
              key={link.id}
              className={`${active === link.title ? navbarStyles.activeLink : navbarStyles.inactiveDesktopLink} ${navbarStyles.navLink}`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        {/* Mobile Navigation */}
        <div className={navbarStyles.mobileMenuContainer}>
          <img
            src={toggle ? close : menu}
            alt="menu"
            className={navbarStyles.menuIcon}
            onClick={() => setToggle(!toggle)}
          />
          <div className={`${!toggle ? 'hidden' : 'flex'} ${navbarStyles.mobileMenuDropdown}`}>
            <ul className={navbarStyles.mobileNav}>
              {navLinks.map(link => (
                <li
                  key={link.id}
                  className={`${active === link.title ? navbarStyles.activeLink : navbarStyles.inactiveMobileLink} ${navbarStyles.navLink}`}
                  onClick={() => {
                    setActive(link.title);
                    setToggle(false);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
