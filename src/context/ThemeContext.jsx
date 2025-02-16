// src/context/ThemeContext.js
import React, { createContext, useState, useEffect } from 'react';
import { themes, initialTheme } from '../style';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(initialTheme);

  // Optional: Load theme from local storage on mount
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setCurrentTheme(JSON.parse(storedTheme));
    }
  }, []);

  // Persist theme changes in local storage
  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(currentTheme));
  }, [currentTheme]);

  const toggleTheme = () => {
    setCurrentTheme((prevTheme) =>
      prevTheme === themes.dark ? themes.light : themes.dark
    );
  };

  return (
    <ThemeContext.Provider value={{ currentTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
