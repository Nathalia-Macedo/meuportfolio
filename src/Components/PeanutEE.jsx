"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const PeanutEasterEgg = () => {
  const [showMessage, setShowMessage] = useState(false)

  return (
    <>
      <motion.div
        className="absolute bottom-4 left-4 w-8 h-8 cursor-pointer opacity-30 hover:opacity-100 transition-opacity duration-300"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setShowMessage(true)}
      >
        <span role="img" aria-label="Amendoim" className="text-2xl">
          🥜
        </span>
      </motion.div>

      <AnimatePresence>
        {showMessage && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50"
            onClick={() => setShowMessage(false)}
          >
            <div className="bg-white p-6 rounded-lg shadow-xl max-w-sm text-center">
              <p className="text-xl font-bold mb-4 text-jungle">
                "Sim, eu já vendi amendoim no ônibus! E agora sou dev! Nunca subestime onde sua jornada pode te levar!"
              </p>
              <p className="text-sm text-gray-600">(Clique em qualquer lugar para fechar)</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default PeanutEasterEgg

