// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { navbarStyles, defaultSectionStyles } from '../style';
import { menu, close, logo, Dart_1 } from '../assets';
import { navLinks } from '../constants';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const smoothScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const handleNavigation = (path, title, id) => {
    setActive(title);
    
    // If on main route and clicking contact, scroll to contact section
    if (location.pathname === '/' && path === '/contact') {
      smoothScroll('contact');
    } else {
      // Otherwise navigate to the path
      navigate(path);
      window.scrollTo(0, 0);
    }
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
          <p className={navbarStyles.logoText}>
            <img 
              src={Dart_1} 
              alt="Logo" 
              className="w-8 h-8 object-contain mr-2 filter brightness-500 hover:brightness-100 transition-all duration-300" 
            />
            <span className="">DepoDart</span>
          </p>
        </Link>
        {/* Desktop Navigation */}
        <ul className={navbarStyles.desktopNav}>
          {navLinks?.main?.map(link => (
            <li
              key={link.id}
              className={`
                ${active === link.title ? navbarStyles.activeLink : navbarStyles.inactiveDesktopLink} 
                ${navbarStyles.navLink} 
              ${link.path === '/contact' ? ' text-secondary-dark bg-transparent px-4 py-2 rounded-lg hover:bg-secondary-dark hover:text-primary-dark border-2 border-secondary-dark transition-all duration-300' : ''}`}
              onClick={() => handleNavigation(link.path, link.title, link.id)}
            >
              <span>{link.title}</span>
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
              {navLinks?.main?.map(link => (
                <li
                  key={link.id}
                  className={`${active === link.title ? navbarStyles.activeLink : navbarStyles.inactiveMobileLink} 
                  ${navbarStyles.navLink} ${link.path === '/contact' ? 'bg-tertiary-light text-primary-dark px-4 py-2 rounded-lg hover:bg-tertiary-dark' : ''}`}
                  onClick={() => {
                    handleNavigation(link.path, link.title, link.id);
                    setToggle(false);
                  }}
                >
                  <span>{link.title}</span>
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
