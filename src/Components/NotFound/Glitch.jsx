"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import { BugIcon } from "lucide-react"

const NotFound404Glitch = () => {
  const [glitchEffect, setGlitchEffect] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setGlitchEffect(true)
      setTimeout(() => setGlitchEffect(false), 200)
    }, 2000)

    return () => clearInterval(glitchInterval)
  }, [])

  const handleReturnClick = () => {
    console.log("Navigating to /")
    navigate("/")
  }

  return (
    <div className="min-h-screen bg-jungle flex items-center justify-center p-4 overflow-hidden relative">
      {/* Background with code-like elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-terra"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 20 + 10}px`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          >
            {`{${Math.random().toString(36).substring(7)}}`}
          </div>
        ))}
      </div>

      {/* Large 404 background */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        <div className="text-[20rem] md:text-[40rem] font-bold text-jungle-dark opacity-10 select-none">404</div>
      </div>

      <div className="relative w-full max-w-3xl">
        {/* Glitch effect container */}
        <motion.div
          className="relative bg-sand dark:bg-jungle-dark rounded-lg shadow-2xl overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Glitch effect layers */}
          <div className="absolute inset-0 bg-terra opacity-10 animate-pulse"></div>
          {glitchEffect && (
            <>
              <div className="absolute inset-0 bg-terra opacity-30 transform -translate-x-2"></div>
              <div className="absolute inset-0 bg-jungle opacity-30 transform translate-x-2"></div>
            </>
          )}

          {/* Content */}
          <div className="relative p-8 text-center">
            <motion.h1
              className="text-6xl md:text-8xl font-bold text-jungle dark:text-sand mb-8 glitch-text"
              animate={{ x: glitchEffect ? [-5, 5, -5, 0] : 0 }}
              transition={{ duration: 0.2 }}
            >
              4<BugIcon className="inline-block mx-2 text-terra animate-spin-slow" size={64} />4
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-jungle-dark dark:text-sand-light mb-8"
              animate={{ x: glitchEffect ? [3, -3, 3, 0] : 0 }}
              transition={{ duration: 0.2, delay: 0.1 }}
            >
              Ops! O sistema encontrou um erro inesperado.
              <br />
              Parece que você caiu em uma dimensão paralela do código.
            </motion.p>
            <motion.div className="inline-block" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <button
                className="bg-terra hover:bg-terra-dark text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 cursor-pointer"
                onClick={handleReturnClick}
              >
                Retornar à Realidade
              </button>
            </motion.div>
          </div>
          

         
        </motion.div>
      </div>
    </div>
  )
}

export default NotFound404Glitch