"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Tilt } from "react-tilt"
import styles from './CreditCard.module.css'

interface CardData {
  id: number
  title: string
  content: string
  color: string
  isAboutCard?: boolean
}

const CARDS: CardData[] = [
  {
    id: 1,
    title: "DISCOVER ME",
    content: "I am Your Name",
    color: "from-black to-[#1a1a1a]",
    isAboutCard: true,
  },
  {
    id: 2,
    title: "EXPERIENCE",
    content: "5+ Years of Web Development",
    color: "from-[#bb9b49] to-[#ebd197]",
  },
  {
    id: 3,
    title: "PROJECTS",
    content: "Featured Works & Case Studies",
    color: "from-purple-900 to-purple-700",
  },
  {
    id: 4,
    title: "SKILLS",
    content: "Technologies & Tools",
    color: "from-green-900 to-green-700",
  },
]

const GREETINGS = ["Hola", "你好", "Ciao", "नमस्ते", "Hello", "Bonjour", "مرحبًا"]

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
}

export function CreditCard() {
  const [activeCard, setActiveCard] = useState(0)
  const [greetingIndex, setGreetingIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(false)
      setTimeout(() => {
        setGreetingIndex((prev) => (prev + 1) % GREETINGS.length)
        setIsAnimating(true)
      }, 500)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  // Reorder cards so the active card is last (rendered on top in DOM)
  // but will be positioned at the bottom visually
  const orderedCards = [...CARDS].sort((a, b) => {
    if (a.id === activeCard + 1) return 1
    if (b.id === activeCard + 1) return -1
    return a.id - b.id
  })

  return (
    <div className={styles.container}>
      {orderedCards.map((card) => {
        const isActive = card.id === activeCard + 1
        // Calculate position relative to active card (negative for cards above)
        const positionFromActive = card.id - (activeCard + 1)

        return (
          <motion.div
            key={card.id}
            className={styles.cardWrapper}
            initial={false}
            animate={{
              // Active card has highest z-index for proper stacking
              zIndex: isActive ? 10 : 10 - Math.abs(positionFromActive),
              // Position cards from bottom (active) to top (inactive)
              y: isActive ? 0 : -Math.abs(positionFromActive) * 40,
              scale: isActive ? 1 : 1 - Math.abs(positionFromActive) * 0.05,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
            onClick={() => !isActive && setActiveCard(card.id - 1)}
          >
            <Tilt options={tiltOptions} disabled={!isActive}>
              <motion.div className={styles.cardContainer} whileTap={isActive ? { scale: 0.95 } : undefined}>
                <AnimatePresence>
                  {isActive && card.isAboutCard && (
                    <motion.div
                      className={styles.cardBorder}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </AnimatePresence>
                <div className={`${styles.cardContent} bg-gradient-to-tr ${card.color}`}>
                  <div className={styles.cardLogo}>{card.title}</div>

                  {card.isAboutCard && (
                    <>
                      <AnimatePresence mode="wait">
                        <motion.p
                          key={GREETINGS[greetingIndex]}
                          className={styles.greeting}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.3 }}
                        >
                          {GREETINGS[greetingIndex]}
                        </motion.p>
                      </AnimatePresence>
                      <p className={styles.name}>{card.content}</p>
                    </>
                  )}

                  {!card.isAboutCard && (
                    <div className={styles.content}>
                      <p>{card.content}</p>
                    </div>
                  )}
                </div>
              </motion.div>
            </Tilt>
          </motion.div>
        )
      })}
    </div>
  )
}
