"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import astro from '../../Assets/astro.png'
const NotFound404Space = () => {
  const navigate = useNavigate()
  const [stars, setStars] = useState([])

  useEffect(() => {
    const generateStars = () => {
      const newStars = []
      for (let i = 0; i < 100; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 2 + 1,
          opacity: Math.random() * 0.5 + 0.5,
        })
      }
      setStars(newStars)
    }

    generateStars()
  }, [])

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      {/* Stars */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute bg-white rounded-full"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
          }}
          animate={{
            opacity: [star.opacity, 0, star.opacity],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
      ))}

      {/* Astronaut */}
      <motion.img
        src={astro}
        alt="Astronaut"
        className="absolute left-1/2 top-1/2 w-32 h-32 object-contain"
        style={{ x: "-50%", y: "-50%" }}
        animate={{
          y: ["-55%", "-45%"],
          rotate: [0, 10, -10, 0],
        }}
        transition={{
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />

      {/* Black Hole */}
      <div className="absolute right-1/4 top-1/4 w-32 h-32">
        <motion.div
          className="w-full h-full rounded-full bg-black"
          animate={{
            scale: [1, 1.2, 1],
            rotate: 360,
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
          }}
        >
          <div className="absolute inset-0 bg-gradient-radial from-transparent via-purple-500/30 to-transparent rounded-full" />
        </motion.div>
      </div>

      {/* Text */}
      <div className="absolute left-1/2 top-1/4 transform -translate-x-1/2 text-center">
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          404: Você foi longe demais!
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-gray-300 mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Você viajou além dos limites conhecidos da web...
          <br />e não há nada aqui!
        </motion.p>
      </div>

      {/* Button */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <motion.button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/")}
        >
          Voltar para a Terra
        </motion.button>
      </div>
    </div>
  )
}

export default NotFound404Space

