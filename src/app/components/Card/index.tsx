  'use client'
  import Image from "next/image"; // Import for handling images
  import { useState, useEffect } from "react";
  import { Tilt } from "react-tilt";
  import styles from "./CreditCard.module.css";
  import Discoverme from '../../../../public/icons/Discover_me.png'; // Adjust the path as needed

  interface CreditCardProps {
    name?: string;
  }

  export const CreditCard: React.FC<CreditCardProps> = ({ 
    name = "Abhishek Shrestha" 
  }) => {
    const [activeCard, setActiveCard] = useState(0);
    const [expandedCard, setExpandedCard] = useState<number | null>(null);
    const [isAnimating, setIsAnimating] = useState(true);
    const [greetingIndex, setGreetingIndex] = useState(0);
    const greetings = ["Hola", "你好", "Ciao", "नमस्ते", "Hello", "Bonjour", "مرحبًا"];
    
    const cards = [
      { id: 0, name: "Abhishek Shrestha", color: "from-black to-[#1a1a1a]" },
      { id: 1, name: "John Doe", color: "from-blue-900 to-blue-700" },
      { id: 2, name: "Jane Smith", color: "from-purple-900 to-purple-700" },
      { id: 3, name: "Alex Johnson", color: "from-green-900 to-green-700" },
    ];

    useEffect(() => {
      const intervalId = setInterval(() => {
        setIsAnimating(false);
        setTimeout(() => {
          setGreetingIndex((prevIndex) => (prevIndex + 1) % greetings.length);
          setIsAnimating(true);
        }, 500);
      }, 4000);

      return () => clearInterval(intervalId);
    }, [greetings.length]);

    const handleCardClick = (index: number) => {
      if (expandedCard === index) {
        setExpandedCard(null);
      } else {
        setExpandedCard(index);
        setActiveCard(index);
      }
    };

    const getCardStyle = (index: number) => {
      const isActive = activeCard === index;
      const position = index - activeCard;
      const isExpanded = expandedCard === index;
      
      let transform = "";
      let zIndex = cards.length - Math.abs(position);

      if (isExpanded) {
        transform = "translateY(-60px)";
        zIndex = cards.length + 1;
      } else if (position > 0) {
        // Cards below active card
        transform = `translateY(-${position * 40}px) scale(${1 - position * 0.05})`;
        zIndex = cards.length - position;
      } else if (position < 0) {
        // Cards above active card
        transform = `translateY(${position * 40}px) scale(${1 + position * 0.05})`;
        zIndex = cards.length + position;
      }

      return { transform, zIndex };
    };

    const tiltOptions = {
      reverse: false,
      max: 15,
      perspective: 1000,
      scale: 1.05,
      speed: 1000,
      transition: true,
      axis: null,
      reset: true,
      easing: "cubic-bezier(.03,.98,.52,.99)",
    };

    return (
      <div className={styles.containerWrapper}>
        <div className={styles.container}>
          {cards.map((card, index) => (
            <div
              key={card.id}
              className={styles.cardWrapper}
              style={getCardStyle(index)}
              onClick={() => handleCardClick(index)}
            >
              <Tilt options={tiltOptions}>
                <div className={styles.cardContainer}>
                  {index === 0 && <div className={styles.cardBorder} />}
                  <div className={`${styles.cardContent} bg-gradient-to-tr ${card.color}`}>
                    {index === 0 && (
                      <Image
                        src={Discoverme} // Ensure the correct path to the uploaded image
                        alt="Discover Me Logo"
                        width={150}
                        height={50}
                        className={styles.logo} // Add a CSS class for styling
                      />
                    )}
                    <p
                      className={`${styles.greeting} ${
                        isAnimating ? styles.visible : styles.hidden
                      }`}
                    >
                      {greetings[greetingIndex]}
                    </p>
                    <p className={styles.name}>I am {card.name}</p>
                  </div>
                </div>
              </Tilt>
            </div>
          ))}
        </div>
        {expandedCard !== null && (
          <div className={styles.expandedContent}>
            <p>
              Placeholder for about me section. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Ea autem enim reiciendis. Rerum quisquam optio voluptates
              ipsam repellendus numquam dicta.
            </p>
          </div>
        )}
      </div>
    );
  };
