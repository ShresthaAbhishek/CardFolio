"use client";
import styles from "./Navbar.module.css";
import { useState } from "react";

export const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <nav className={`${styles.navbar} ${isHovered ? styles.hovered : ""}`} onMouseEnter={handleHover} onMouseLeave={handleHover}>
      <div className={styles.logo}>Logo</div>
      <div className={styles.navItems}>
        <a href="#item1" className={styles.navItem}>Item 1</a>
        <a href="#item2" className={styles.navItem}>Item 2</a>
      </div>
    </nav>
  );
};