"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import styles from "./navbar.module.css"

export function Navbar() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.nav
      className={styles.navbar}
      animate={{
        background: isHovered
          ? "linear-gradient(135deg, #4A90E2, #9C2CF3, #FF007C, #F5A623, #4A90E2)"
          : "linear-gradient(135deg, rgba(0, 0, 0, 0.2), rgba(31, 29, 29, 0.162))",
      }}
      transition={{ duration: 0.3 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={styles.logo}>Portfolio</div>
      <div className={styles.navItems}>
        <motion.a
          href="#about"
          className={styles.navItem}
          whileHover={{ backgroundColor: "rgba(25, 23, 23, 0.425)" }}
          transition={{ duration: 0.2 }}
        >
          About
        </motion.a>
        <motion.a
          href="#projects"
          className={styles.navItem}
          whileHover={{ backgroundColor: "rgba(25, 23, 23, 0.425)" }}
          transition={{ duration: 0.2 }}
        >
          Projects
        </motion.a>
      </div>
    </motion.nav>
  )
}
