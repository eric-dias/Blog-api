"use client";

import { useContext } from "react";
import styles from "./themeToggle.module.css";
import { ThemeContext } from "@/context/ThemeContext";

const ThemeToggle = () => {
  const { selectTheme, theme } = useContext(ThemeContext);

  return (
    <div className={styles.container}>
      <button onClick={() => selectTheme("LightTheme")}>L</button>
      <button onClick={() => selectTheme("DarkTheme")}>D</button>
    </div>
  );
};

export default ThemeToggle;
