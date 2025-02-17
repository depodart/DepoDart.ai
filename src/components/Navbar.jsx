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
            DepoDart
          </p>
        </Link>

        <button
          onClick={toggleTheme}
          className={`ml-4 px-4 py-2 rounded-full transition-colors duration-300 flex items-center gap-2 ${
            isDark 
            ? 'bg-transparent border border-primary-dark text-white hover:bg-gray-500'
            : 'bg-yellow-400 text-gray-900 hover:bg-yellow-500' 
          }`}
        >
          {isDark ? (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
              </svg>
              <span>Light</span>
            </>
          ) : (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
              <span>Dark</span>
            </>
          )}
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
