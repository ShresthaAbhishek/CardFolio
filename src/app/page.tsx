"use client"

import { Navbar } from "./components/Card/navBar"
import { CreditCard } from "./components/Card/credit-card"
import { TransparentBox } from "./components/Card/transparent-box"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <motion.main
      className="min-h-screen bg-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Navbar />
      <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-8 pt-24">
        <div className="w-full md:w-3/5">
          <CreditCard />
        </div>
        <div className="w-full md:w-2/5 mt-8 md:mt-0">
          <TransparentBox />
        </div>
      </div>
    </motion.main>
  )
}

