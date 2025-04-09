"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Tilt } from "react-tilt"

interface WalletCardProps {
  color: string
  isActive?: boolean
  zIndex: number
  onClick?: () => void
  children?: React.ReactNode
}

const defaultTiltOptions = {
  reverse: false,
  max: 15,
  perspective: 1000,
  scale: 1,
  speed: 1000,
  transition: true,
  axis: null,
  reset: true,
  easing: "cubic-bezier(.03,.98,.52,.99)",
}

export function WalletCard({ color, isActive, zIndex, onClick, children }: WalletCardProps) {
  return (
    <Tilt options={defaultTiltOptions}>
      <motion.div
        className={`absolute left-1/2 w-[600px] max-w-[90vw] aspect-[1.586/1] rounded-2xl cursor-pointer
          ${isActive ? "hover:scale-105" : "hover:scale-102"}
          transition-transform duration-300 ease-out`}
        style={{
          backgroundColor: color,
          zIndex,
          translateX: "-50%",
          translateY: isActive ? "0%" : `${zIndex * 5}%`,
        }}
        onClick={onClick}
        animate={{
          y: isActive ? 0 : zIndex * 20,
        }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
      >
        {isActive && (
          <div className="absolute inset-0 rounded-2xl animate-border-gradient [background:linear-gradient(60deg,#5f86f2,#a65ff2,#f25fd0,#f25f61,#f2cb5f,#5ff281,#5ff2f0)] [background-size:300%_300%] p-[2px]">
            <div className="h-full w-full bg-black rounded-2xl">{children}</div>
          </div>
        )}
        {!isActive && children}
      </motion.div>
    </Tilt>
  )
}
