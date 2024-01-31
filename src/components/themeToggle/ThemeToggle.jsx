"use client";

import { useContext } from "react";
import styles from "./themeToggle.module.css";
import { ThemeContext } from "@/context/ThemeContext";

const ThemeToggle = () => {
  const { selectTheme, theme } = useContext(ThemeContext);

  return (
    <div className={styles.container}>
      <button onClick={() => selectTheme("ThemeItadori")}>I</button>
      <button onClick={() => selectTheme("ThemeGojo")}>G</button>
      <button onClick={() => selectTheme("ThemeSukuna")}>S</button>
    </div>
  );
};

export default ThemeToggle;
