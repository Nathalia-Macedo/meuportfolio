"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { BookOpen, Target, Palette, Laptop, Code, TrendingUp, Clock } from "lucide-react"

const discoveryPoints = [
  {
    icon: BookOpen,
    title: "Por que a faculdade não ensina a programar",
    description: "(e o que fazer no lugar)",
  },
  {
    icon: Target,
    title: "Por que as vagas pedem um absurdo",
    description: "(e como se destacar sem anos de experiência)",
  },
  {
    icon: Palette,
    title: "Programação NÃO é difícil",
    description: "você só precisa da abordagem certa",
  },
  {
    icon: Code,
    title: "Como montar um portfólio autêntico",
    description: "mesmo começando do zero",
  },
  {
    icon: Laptop,
    title: "Qual máquina comprar para estudar",
    description: "sem gastar demais",
  },
  {
    icon: Code,
    title: "Por qual linguagem começar",
    description: "de acordo com o seu objetivo",
  },
  {
    icon: TrendingUp,
    title: "Pesquisa estratégica de mercado",
    description: "para focar no que realmente dá retorno",
  },
]

const DiscoverySection = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="bg-[#E3DACD] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-[#2D4C3B] text-4xl font-bold mb-4">O que você vai descobrir em 1h30:</h2>
          <div className="flex items-center justify-center text-[#D96C4A] gap-2">
            <Clock className="h-6 w-6" />
            <span className="text-xl">90 minutos que podem mudar sua carreira</span>
          </div>
        </div>

        <div className="relative mt-20">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[#D96C4A]" />

          {/* Discovery Points */}
          <div className="space-y-12">
            {discoveryPoints.map((point, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-6"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Icon */}
                <div
                  className={`relative z-10 w-16 h-16 rounded-full bg-[#D96C4A] flex items-center justify-center cursor-pointer
                    ${index === activeIndex ? "ring-4 ring-[#D96C4A]/20" : ""}`}
                  onClick={() => setActiveIndex(index)}
                >
                  <point.icon className="h-8 w-8 text-white" />
                </div>

                {/* Content Card */}
                <motion.div
                  className="flex-1 bg-white rounded-xl shadow-lg p-6"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <h3 className="text-[#2D4C3B] text-xl font-semibold mb-2">{point.title}</h3>
                  <p className="text-[#2D4C3B]/80">{point.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <button
            className="bg-[#D96C4A] hover:bg-[#D96C4A]/90 text-white font-bold py-4 px-8 rounded-full text-lg
              transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Garanta Sua Vaga Agora!
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default DiscoverySection

