// src/context/ThemeContext.jsx
import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {

  // Todo: Remove this once we have a way to persist the theme(Dark mode and light mode) 
  // const [isDark, setIsDark] = useState(() =>
  //   localStorage.getItem('isDark')
  //     ? JSON.parse(localStorage.getItem('isDark'))
  //     : window.matchMedia('(prefers-color-scheme: dark)').matches
  // );
  // Always set isDark to true
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    localStorage.setItem('isDark', JSON.stringify(isDark));
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(prev => !prev);

  return (
    <ThemeContext.Provider value={{ isDark: true, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
