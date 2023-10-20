import React, { createContext, useState } from 'react';

export const themeContext = createContext();

const ThemeContext = ({ children }) => {
   const [theme, setTheme] = useState('light');

   const toggleTheme = () => {
      setTheme(theme === 'light' ? 'dark' : 'light');
   };

   return (
      <themeContext.Provider value={{ theme, toggleTheme }}>
         {children}
      </themeContext.Provider>
   );
};

export default ThemeContext;
