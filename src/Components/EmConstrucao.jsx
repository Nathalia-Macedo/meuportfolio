"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Hammer, HardHat, Ruler, Pencil, BookOpen, Brain } from 'lucide-react'
import { useNavigate } from "react-router-dom"

const ConstructionItem = ({ Icon, text }) => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center bg-sand dark:bg-jungle p-4 rounded-lg shadow-lg h-32 w-32"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <Icon className="w-12 h-12 text-terra mb-2" />
      <p className="text-jungle dark:text-sand text-center text-sm font-bold">{text}</p>
    </motion.div>
  )
}

const UnderConstruction = () => {
  const [showMessage, setShowMessage] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setInterval(() => {
      setShowMessage((prev) => !prev)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  const constructionItems = [
    { Icon: BookOpen, text: "Artigos Incríveis" },
    { Icon: Brain, text: "Quizzes Divertidos" },
    { Icon: Pencil, text: "Tutoriais Práticos" },
    { Icon: Ruler, text: "Projetos Guiados" },
  ]

  return (
    <div className="min-h-screen bg-sand dark:bg-jungle flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Construction site background */}
      <div className="absolute inset-0 bg-terra opacity-10"></div>
      <div className="absolute inset-0 bg-stripes-jungle dark:bg-stripes-sand opacity-5"></div>

      {/* Animated construction elements */}
      <motion.div
        className="absolute top-10 left-10"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
      >
        <Hammer className="w-16 h-16 text-terra" />
      </motion.div>
      <motion.div
        className="absolute bottom-10 right-10"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <HardHat className="w-16 h-16 text-terra" />
      </motion.div>

      <motion.h1
        className="text-4xl md:text-6xl font-bold text-jungle dark:text-sand mb-8 text-center relative z-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Estamos Construindo Algo Incrível!
      </motion.h1>

      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 relative z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {constructionItems.map((item, index) => (
          <ConstructionItem key={index} {...item} />
        ))}
      </motion.div>

      <AnimatePresence>
        {showMessage && (
          <motion.p
            className="text-xl md:text-2xl text-jungle dark:text-sand mt-4 text-center max-w-2xl relative z-10 bg-sand dark:bg-jungle p-4 rounded-lg border-2 border-terra"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
          >
            Nossos engenheiros de conteúdo estão trabalhando duro para trazer conhecimento de qualidade para você!
          </motion.p>
        )}
      </AnimatePresence>

      <motion.div
        className="mt-8 relative z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <motion.button
          onClick={() => navigate("/")}
          className="px-6 py-3 bg-terra text-sand rounded-full text-lg font-semibold transition-colors duration-300"
          whileHover={{ scale: 1.05, backgroundColor: "#C05A3E" }}
          whileTap={{ scale: 0.95 }}
        >
          Voltar para a Página Inicial
        </motion.button>
      </motion.div>
    </div>
  )
}

export default UnderConstruction