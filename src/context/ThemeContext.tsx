"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type ThemeContextProps = {
  toggle: () => void | string;
  theme: string;
};
export const ThemeContext = createContext<any>(null);
const getLocalStorage = () => {
  if (typeof window !== "undefined") {
    const value = localStorage.getItem("theme");

    return value || "";
  }
};
export const ThemeContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [theme, setTheme] = useState(() => {
    return getLocalStorage() as string;
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);
  const toggle = () => {
    setTheme(theme === "dark" ? "" : "dark");
  };
  return (
    <ThemeContext.Provider value={{ toggle, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};
