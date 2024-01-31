"use client";

import { createContext, useEffect, useState } from "react";

const getFromLocalStorage = () => {
  if (typeof window !== "undefined" && window.localStorage) {
    const value = localStorage.getItem("theme");
    return value || "ThemeGojo";
  }
};

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    return getFromLocalStorage();
  });

  const selectTheme = (selectedTheme) => {
    setTheme(selectedTheme);
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ selectTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};
