// src/components/Navbar.jsx
import React, { 
  // useContext, 
  useState 
} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { navbarStyles, defaultSectionStyles } from '../style';
// import { ThemeContext } from '../context/ThemeContext';
import { menu, close, logo } from '../assets';
import { navLinks } from '../constants';

const Navbar = () => {
  //? Dark mode and light mode toggle button
  // const { toggleTheme, isDark } = useContext(ThemeContext);
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (path, title) => {
    setActive(title);
    navigate(path);
    window.scrollTo(0, 0);
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
            <img src={logo} alt="Logo" className="w-8 h-8 object-contain mr-2" />
            DepoDart
          </p>
        </Link>
        {/* Desktop Navigation */}
        <ul className={navbarStyles.desktopNav}>
          {navLinks?.main?.map(link => (
            <li
              key={link.id}
              className={`${active === link.title ? navbarStyles.activeLink : navbarStyles.inactiveDesktopLink} ${navbarStyles.navLink}`}
              onClick={() => handleNavigation(link.path, link.title)}
            >
              <Link to={link.path}>{link.title}</Link>
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
                  className={`${active === link.title ? navbarStyles.activeLink : navbarStyles.inactiveMobileLink} ${navbarStyles.navLink}`}
                  onClick={() => {
                    handleNavigation(link.path, link.title);
                    setToggle(false);
                  }}
                >
                  <Link to={link.path}>{link.title}</Link>
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
