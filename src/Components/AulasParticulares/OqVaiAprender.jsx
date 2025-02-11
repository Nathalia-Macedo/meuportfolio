import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Check, ArrowRight } from "lucide-react"

const learningPoints = [
  "Código sem complicação",
  "Primeiro projeto remunerado garantido",
  "Como se destacar no mercado",
  "Portfólio e currículo estruturados",
  "Recebimento de oportunidades de emprego",
]

const technologies = [
  { name: "HTML", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  {
    name: "JavaScript",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  { name: "Python", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  {
    name: "TypeScript",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  { name: "React", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "React Native", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Node.js", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Flask", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
  { name: "Selenium", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg" },
  { name: "Tailwind", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
  { name: "Next.js", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "Git", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "GitHub", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
]

const WhatYouWillLearn = () => {
  const [activePoint, setActivePoint] = useState(0)
  const [carouselOffset, setCarouselOffset] = useState(0)

  useEffect(() => {
    const pointTimer = setInterval(() => {
      setActivePoint((prev) => (prev + 1) % learningPoints.length)
    }, 3000)

    const techTimer = setInterval(() => {
      setCarouselOffset((prev) => (prev + 1) % technologies.length)
    }, 3000)

    return () => {
      clearInterval(pointTimer)
      clearInterval(techTimer)
    }
  }, [])

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#E3DACD] to-[#D96C4A]/10" />
        <motion.div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(217, 108, 74, 0.1) 0%, rgba(227, 218, 205, 0.1) 50%, rgba(217, 108, 74, 0.05) 100%)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-jungle dark:text-sand mb-12">O Que Você Vai Aprender?</h2>
          <div className="relative h-32 mb-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={activePoint}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="flex items-center text-left text-jungle dark:text-sand text-2xl bg-white/95 dark:bg-jungle-dark/95 p-6 rounded-2xl shadow-lg">
                  <Check className="mr-4 text-terra flex-shrink-0" size={32} />
                  <span>{learningPoints[activePoint]}</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          <motion.a
            href="https://wa.me/71987257532?text=Olá! Gostaria de garantir minha aula grátis!"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-terra hover:bg-terra-dark text-white rounded-full text-lg font-semibold mt-12 transition-all duration-300 transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Garanta sua aula grátis! <ArrowRight className="ml-2" />
          </motion.a>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5 }}>
          <h3 className="text-3xl font-bold text-jungle dark:text-sand mb-12 text-center">
            Tecnologias que você vai dominar
          </h3>
          <div className="relative overflow-hidden">
            <motion.div
              className="flex transition-all duration-500 ease-in-out"
              animate={{ x: `-${carouselOffset * (100 / 5)}%` }}
            >
              {[...technologies, ...technologies.slice(0, 5)].map((tech, index) => (
                <motion.div
                  key={`${tech.name}-${index}`}
                  className="flex-shrink-0 w-1/5 px-4"
                  whileHover={{ scale: 1.1, y: -10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="rounded-lg p-4 flex flex-col items-center justify-center h-40">
                    <img src={tech.image || "/placeholder.svg"} alt={tech.name} className="w-16 h-16 mb-4" />
                    <span className="text-sm text-jungle dark:text-sand text-center font-semibold">{tech.name}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default WhatYouWillLearn

