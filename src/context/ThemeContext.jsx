// src/context/ThemeContext.jsx
import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(() =>
    localStorage.getItem('isDark')
      ? JSON.parse(localStorage.getItem('isDark'))
      : window.matchMedia('(prefers-color-scheme: dark)').matches
  );

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
