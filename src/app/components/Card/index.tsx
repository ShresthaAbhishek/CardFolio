"use client";

import { Tilt } from "react-tilt";
import styles from "./CreditCard.module.css";

export const CreditCard = () => {
  return (
    <Tilt className={styles.cardContainer}>
      <div className={styles.cardBorder}>
        <div className={styles.cardContent}>
          {/* Add any card content here if needed */}
        </div>
      </div>
    </Tilt>
  );
};
