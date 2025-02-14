import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { close, logo, menu } from '../assets';
import { navLinks } from '../constants';
import { styles } from '../styles';

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
    <ul className={`list-none ${isMobile ? 'flex flex-col' : 'hidden sm:flex flex-row'} gap-6`}>
      {navLinks.map((link) => (
        <li
          key={link.id}
          className={`${
            active === link.title ? 'text-white' : isMobile ? 'text-secondary' : 'text-white'
          } hover:text-white text-[18px] font-medium cursor-pointer`}
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
        className={`text-${
          isMobile ? 'secondary' : 'white'
        } hover:text-white text-[18px] font-medium cursor-pointer`}
      >
        <button onClick={toggleResume}>Download info</button>
      </li>
    </ul>
  );

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-gradient-to-b from-[#050816] via-[#050816] to-transparent backdrop-blur-md`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}
        >
          <p className="text-white text-[20px] font-bold cursor-pointer flex">
            Depo&nbsp;
            <span>Dart</span>
          </p>
        </Link>

        {/* Desktop Navigation */}
        {renderNavLinks(false)}

        {/* Mobile Navigation */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl bg-[#915EFF]`}>
            {renderNavLinks(true)}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
