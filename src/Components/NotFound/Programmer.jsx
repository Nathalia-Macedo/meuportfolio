"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Home, Coffee, Clock, DollarSign, Zap, Code, Heart, TrendingUp, TrendingDown } from "lucide-react"

const motivationalMessages = [
  "Mas hey, pelo menos você está aprendendo! 🚀",
  "Todo bug é uma oportunidade de crescer! 💪",
  "Lembre-se: até o Stack Overflow teve seu primeiro erro 404! 😄",
  "A jornada vale mais que o destino! ✨",
  "Cada linha de código te deixa mais próximo do sucesso! 🎯",
  "Programar é 1% inspiração, 99% debugar... e vale a pena! 💻",
  "Café + Código = Magia acontecendo! ☕",
  "Erros são apenas features não documentadas! 🐛",
]

const statusMessages = {
  highTime: "Você tem tempo, mas cadê a grana? 🤔",
  highEnergy: "Energia total! Mas o tempo voa... ⚡",
  highMoney: "Rico mas sem tempo nem energia... 💸",
  balanced: "Quase equilibrado... quase! 🎭",
  lowEverything: "A vida real de dev júnior! 😅",
  struggling: "Quando o café não resolve mais... ☕💔",
}

const NotFound404Programmer = () => {
  const [time, setTime] = useState(33)
  const [energy, setEnergy] = useState(33)
  const [money, setMoney] = useState(34)
  const [currentMessage, setCurrentMessage] = useState(0)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isAdjusting, setIsAdjusting] = useState(false)

  // Verificar dark mode
  useEffect(() => {
    const checkDarkMode = () => {
      setIsDarkMode(document.documentElement.classList.contains("dark"))
    }

    checkDarkMode()

    const observer = new MutationObserver(checkDarkMode)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    })

    return () => observer.disconnect()
  }, [])

  // Rotacionar mensagens motivacionais
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % motivationalMessages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const adjustBars = (changedBar, newValue) => {
    setIsAdjusting(true)

    const total = 100
    const maxPerBar = 75
    const minPerBar = 5

    newValue = Math.max(minPerBar, Math.min(maxPerBar, newValue))

    if (changedBar === "time") {
      const remaining = total - newValue
      const energyRatio = energy / (energy + money) || 0.5
      const newEnergy = Math.max(minPerBar, Math.min(maxPerBar, remaining * energyRatio))
      const newMoney = Math.max(minPerBar, remaining - newEnergy)

      setTime(newValue)
      setEnergy(Math.round(newEnergy))
      setMoney(Math.round(newMoney))
    } else if (changedBar === "energy") {
      const remaining = total - newValue
      const timeRatio = time / (time + money) || 0.5
      const newTime = Math.max(minPerBar, Math.min(maxPerBar, remaining * timeRatio))
      const newMoney = Math.max(minPerBar, remaining - newTime)

      setEnergy(newValue)
      setTime(Math.round(newTime))
      setMoney(Math.round(newMoney))
    } else if (changedBar === "money") {
      const remaining = total - newValue
      const timeRatio = time / (time + energy) || 0.5
      const newTime = Math.max(minPerBar, Math.min(maxPerBar, remaining * timeRatio))
      const newEnergy = Math.max(minPerBar, remaining - newTime)

      setMoney(newValue)
      setTime(Math.round(newTime))
      setEnergy(Math.round(newEnergy))
    }

    setTimeout(() => setIsAdjusting(false), 100)
  }

  const getStatusMessage = () => {
    const total = time + energy + money
    if (total < 60) return statusMessages.struggling
    if (time > 50) return statusMessages.highTime
    if (energy > 50) return statusMessages.highEnergy
    if (money > 50) return statusMessages.highMoney
    if (Math.abs(time - energy) < 15 && Math.abs(energy - money) < 15) return statusMessages.balanced
    return statusMessages.lowEverything
  }

  const getBarColor = (value) => {
    if (value > 60) return "from-green-400 to-green-600"
    if (value > 40) return "from-yellow-400 to-yellow-600"
    if (value > 20) return "from-orange-400 to-orange-600"
    return "from-red-400 to-red-600"
  }

  const ProgressBar = ({ label, value, icon: Icon, onChange, barKey, color }) => {
    const [isHovered, setIsHovered] = useState(false)
    const [isDragging, setIsDragging] = useState(false)

    return (
      <motion.div
        className="space-y-4 p-6 bg-white/50 dark:bg-jungle/50 backdrop-blur-sm rounded-xl border border-white/20 dark:border-sand/20 transition-all duration-300"
        whileHover={{ scale: 1.02 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <motion.div
              className={`p-2 rounded-lg ${color} bg-opacity-20`}
              animate={{
                scale: isDragging ? 1.2 : isHovered ? 1.1 : 1,
                rotate: isDragging ? [0, 5, -5, 0] : 0,
              }}
              transition={{ duration: 0.2 }}
            >
              <Icon className={`w-6 h-6 ${color.replace("bg-", "text-")}`} />
            </motion.div>
            <div>
              <span className="font-bold text-lg text-jungle dark:text-sand transition-colors duration-300">
                {label}
              </span>
              <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-sand/70">
                {value > 50 ? (
                  <TrendingUp className="w-4 h-4 text-green-500" />
                ) : (
                  <TrendingDown className="w-4 h-4 text-red-500" />
                )}
                <span>Nível {value > 60 ? "Alto" : value > 30 ? "Médio" : "Baixo"}</span>
              </div>
            </div>
          </div>
          <motion.span
            className={`font-bold text-2xl ${color.replace("bg-", "text-")}`}
            animate={{ scale: isDragging ? 1.2 : 1 }}
          >
            {value}%
          </motion.span>
        </div>

        <div className="relative group">
          <div className="w-full bg-gray-200 dark:bg-jungle/40 rounded-full h-6 shadow-inner transition-colors duration-300">
            <motion.div
              className={`h-6 rounded-full bg-gradient-to-r ${getBarColor(value)} relative overflow-hidden shadow-lg`}
              initial={false}
              animate={{ width: `${value}%` }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
                duration: 0.3,
              }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                animate={{ x: ["-100%", "100%"] }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              />

              {/* Indicador de valor */}
              <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
                <div className="w-2 h-2 bg-white rounded-full shadow-sm" />
              </div>
            </motion.div>
          </div>

          <input
            type="range"
            min="5"
            max="75"
            value={value}
            onChange={(e) => onChange(barKey, Number.parseInt(e.target.value))}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onTouchStart={() => setIsDragging(true)}
            onTouchEnd={() => setIsDragging(false)}
            className="absolute inset-0 w-full h-6 opacity-0 cursor-pointer z-10"
            style={{ background: "transparent" }}
          />

          {/* Tooltip on hover */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-jungle dark:bg-sand text-sand dark:text-jungle px-3 py-1 rounded-lg text-sm font-medium shadow-lg"
              >
                Arraste para ajustar
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-jungle dark:border-t-sand" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-sand via-sand/90 to-terra/10 dark:from-jungle dark:via-jungle/90 dark:to-terra/20 flex items-center justify-center px-4 py-8 transition-all duration-500">
      {/* Background decorativo melhorado */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-terra/5 dark:text-terra/10 transition-colors duration-300"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
              y: [0, -30, 0],
              rotate: [0, 180, 360],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 15 + i * 2,
              delay: i * 0.8,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 40 + 25}px`,
            }}
          >
            {["{ }", "< />", "( )", "[ ]", "=>", "&&", "||", "++", "--", "!="][i % 10]}
          </motion.div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto relative z-10 w-full">
        <motion.div
          className="bg-white/80 dark:bg-jungle/80 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-2xl border border-white/30 dark:border-sand/20 transition-all duration-300"
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          {/* Header melhorado */}
          <div className="text-center mb-12">
            <motion.div
              className="flex justify-center mb-6"
              animate={{
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            >
              <div className="relative">
                <Code className="w-20 h-20 text-terra" />
                <motion.div
                  className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                >
                  !
                </motion.div>
              </div>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-6xl font-bold text-jungle dark:text-sand mb-6 transition-colors duration-300"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              404: Página não encontrada
            </motion.h1>

            <motion.p
              className="text-2xl text-gray-700 dark:text-sand/90 mb-8 transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Bem-vindo ao simulador de vida de programador! ⚖️
            </motion.p>

            <motion.div
              className="bg-gradient-to-r from-terra/20 to-jungle/20 dark:from-terra/30 dark:to-sand/20 rounded-xl p-6 mb-8 transition-colors duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
            >
              <p className="text-jungle dark:text-sand font-semibold text-lg transition-colors duration-300">
                🎮 Arraste as barras e veja como é impossível ter tudo na vida!
              </p>
              <p className="text-sm text-gray-600 dark:text-sand/70 mt-2">(Spoiler: é exatamente assim na vida real)</p>
            </motion.div>
          </div>

          {/* Progress Bars melhoradas */}
          <div className="grid gap-6 mb-10">
            <ProgressBar
              label="Tempo Livre"
              value={time}
              color="bg-blue-500"
              icon={Clock}
              onChange={adjustBars}
              barKey="time"
            />

            <ProgressBar
              label="Energia"
              value={energy}
              color="bg-green-500"
              icon={Zap}
              onChange={adjustBars}
              barKey="energy"
            />

            <ProgressBar
              label="Dinheiro"
              value={money}
              color="bg-terra"
              icon={DollarSign}
              onChange={adjustBars}
              barKey="money"
            />
          </div>

          {/* Status Message melhorada */}
          <motion.div
            className="bg-gradient-to-r from-jungle/10 to-terra/10 dark:from-sand/10 dark:to-terra/20 rounded-xl p-6 mb-8 text-center border border-jungle/20 dark:border-sand/20 transition-all duration-300"
            key={`${time}-${energy}-${money}`}
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.p
              className="text-jungle dark:text-sand font-bold text-xl transition-colors duration-300"
              animate={{ scale: isAdjusting ? 1.05 : 1 }}
            >
              {getStatusMessage()}
            </motion.p>
          </motion.div>

          {/* Motivational Message melhorada */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentMessage}
              className="text-center mb-10"
              initial={{ opacity: 0, y: 30, rotateX: -90 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              exit={{ opacity: 0, y: -30, rotateX: 90 }}
              transition={{ duration: 0.6, type: "spring" }}
            >
              <div className="flex justify-center mb-3">
                <motion.div
                  animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                  <Heart className="w-8 h-8 text-terra" />
                </motion.div>
              </div>
              <p className="text-terra font-bold text-xl bg-terra/10 dark:bg-terra/20 rounded-lg p-4 transition-colors duration-300">
                {motivationalMessages[currentMessage]}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Call to Action melhorada */}
          <div className="text-center space-y-6">
            <motion.p
              className="text-jungle dark:text-sand text-lg transition-colors duration-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              A programação pode ser desafiadora, mas cada desafio te torna mais forte! 💪
            </motion.p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-terra to-terra/80 hover:from-terra/90 hover:to-terra/70 text-white rounded-full font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2 }}
              >
                <Home className="w-6 h-6 mr-3" />
                Voltar para Home
              </motion.a>

              <motion.a
                href="https://wa.me/71987257532?text=Olá! Vi a página 404 e quero saber mais sobre programação!"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-jungle to-jungle/80 dark:from-sand dark:to-sand/80 text-sand dark:text-jungle hover:from-jungle/90 hover:to-jungle/70 dark:hover:from-sand/90 dark:hover:to-sand/70 rounded-full font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.4 }}
              >
                <Coffee className="w-6 h-6 mr-3" />
                Bora Programar!
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default NotFound404Programmer
