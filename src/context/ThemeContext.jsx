import React, { createContext, useState, useEffect } from 'react';
import { themes, initialTheme } from '../style';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Lazy initialization to read from localStorage immediately
  const [currentTheme, setCurrentTheme] = useState(() => {
    const storedTheme = localStorage.getItem('theme');
    return storedTheme ? JSON.parse(storedTheme) : initialTheme;
  });

  // Persist theme changes in localStorage
  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(currentTheme));
  }, [currentTheme]);

  const toggleTheme = () => {
    setCurrentTheme(prevTheme =>
      prevTheme === themes.dark ? themes.light : themes.dark
    );
  };

  return (
    <ThemeContext.Provider value={{ currentTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
