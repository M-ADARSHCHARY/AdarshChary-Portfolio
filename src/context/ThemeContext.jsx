import React, { createContext, useState, useContext, useEffect } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark"); // default theme

  const toggleTheme = () => {
    // console.log("Toggling theme",theme);
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    document.documentElement.className = theme; // apply class to <html>
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};


export const useTheme = () => useContext(ThemeContext); 