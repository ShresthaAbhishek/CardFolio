"use client";

import { useState, useEffect } from "react";
import styles from "./CreditCard.module.css";
import { Tilt } from "react-tilt";

export const CreditCard = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [greeting, setGreeting] = useState("Hello!"); // Initial greeting
  const greetings = ["Hola", "Ciao", "नमस्ते", "Hello", "Bonjour", "你好", "مرحبًا"]; // Array of greetings

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setGreeting((prev) => {
        // Cycle through the greetings array
        const currentIndex = greetings.indexOf(prev);
        const nextIndex = (currentIndex + 1) % greetings.length;
        return greetings[nextIndex];
      });
    }, 4000); // Change greeting every 4 seconds

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={styles.container}>
      <Tilt>
        <div
          className={`${styles.cardContainer} ${isClicked ? styles.clicked : ""}`}
          onClick={handleClick}
        >
          <div className={styles.cardBorder}>
            <div className={styles.cardContent}>
              <span className={styles.greeting}>{greeting } </span>I am Abhishek Shrestha
            </div>
          </div>
        </div>
      </Tilt>
      {isClicked && (
        <div className={styles.expandedContent}>
          <p>
            Placeholder for about me section Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ea autem enim reiciendis. Rerum quisquam optio voluptates
            ipsam repellendus numquam dicta.
          </p>
        </div>
      )}
    </div>
  );
};
