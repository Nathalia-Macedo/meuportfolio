"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import tony from '../Assets/Tony.png'

const KONAMI_CODE = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
]
const MOBILE_TAP_COUNT = 10
const KonamiEasterEgg = () => {
  const [showEasterEgg, setShowEasterEgg] = useState(false)
  const [konamiIndex, setKonamiIndex] = useState(0)
  const [mobileTapCount, setMobileTapCount] = useState(0)

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === KONAMI_CODE[konamiIndex]) {
        if (konamiIndex === KONAMI_CODE.length - 1) {
          setShowEasterEgg(true)
          setKonamiIndex(0)
        } else {
          setKonamiIndex(konamiIndex + 1)
        }
      } else {
        setKonamiIndex(0)
      }
    }

    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [konamiIndex])

  const handleMobileTap = () => {
    if (mobileTapCount === MOBILE_TAP_COUNT - 1) {
      setShowEasterEgg(true)
      setMobileTapCount(0)
    } else {
      setMobileTapCount(mobileTapCount + 1)
    }
  }

  return (
    <>
      <div
        className="fixed bottom-4 right-4 w-16 h-16 bg-transparent z-50 cursor-pointer md:hidden"
        onClick={handleMobileTap}
      />
      <AnimatePresence>
        {showEasterEgg && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50"
            onClick={() => setShowEasterEgg(false)}
          >
            <div className="bg-white p-8 rounded-lg shadow-xl max-w-md text-center">
              <img
                src={tony}
                alt="Tony Stark Funny"
                className="w-64 h-64 object-cover rounded-full mx-auto mb-4"
              />
              <p className="text-xl font-bold mb-4">
                "E aí, mini-eu! Parece que você decifrou o código. Continue ultrapassando limites e, quem sabe? Talvez
                um dia você construa uma armadura que possa rivalizar com a minha. Mas por enquanto, fique com a
                programação – é mais seguro, e o café é melhor."
              </p>
              <p className="text-sm text-gray-600">(Clique em qualquer lugar para fechar)</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default KonamiEasterEgg

