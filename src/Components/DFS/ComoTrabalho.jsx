"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, FileText, PenTool, Palette, Code, Globe, Phone } from "lucide-react"

const steps = [
  {
    icon: MessageCircle,
    title: "Conversa inicial",
    description: "Entendemos juntos suas necessidades e objetivos.",
  },
  {
    icon: FileText,
    title: "Formulário estratégico",
    description: "Elaboro perguntas detalhadas para alinhar todo o projeto (copy + design + desenvolvimento).",
  },
  {
    icon: PenTool,
    title: "Criação da copy",
    description: "Escrevo os textos persuasivos e envio para sua aprovação.",
  },
  {
    icon: Palette,
    title: "Design personalizado",
    description: "Após aprovação da copy, passo para a identidade visual e layout do site.",
  },
  {
    icon: Code,
    title: "Desenvolvimento",
    description: "Depois do design aprovado, coloco tudo em funcionamento.",
  },
  {
    icon: Globe,
    title: "Hospedagem e configuração da URL",
    description:
      "Se já tiver um domínio, configuro tudo para você. Caso contrário, oriento na compra e faço a configuração gratuitamente.",
  },
  {
    icon: Phone,
    title: "Acompanhamento em tempo real",
    description: "Você pode ver cada etapa do desenvolvimento direto do seu celular ou desktop.",
  },
]

const colors = ["bg-sand", "bg-jungle", "bg-terra"]

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0)

  return (
    <section className="py-12 md:py-16 lg:py-20 relative overflow-hidden bg-gradient-to-br from-sand via-terra/10 to-jungle/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-jungle mb-8 md:mb-12"
        >
          Como funciona?
        </motion.h2>

        <div className="relative">
          {/* Ícones em linha */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-8 md:mb-12">
            {steps.map((step, index) => (
              <motion.button
                key={index}
                className={`relative group`}
                onClick={() => setActiveStep(index)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Círculo de fundo com glassmorphism */}
                <div
                  className={`
                    w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full 
                    ${activeStep === index ? colors[index % 3] : "bg-white/80 dark:bg-jungle-dark/80"} 
                    backdrop-blur-md shadow-lg
                    flex items-center justify-center
                    transition-all duration-300
                    ${activeStep === index ? "scale-110" : "hover:bg-white/90 dark:hover:bg-jungle-dark/90"}
                  `}
                >
                  <step.icon
                    className={`w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 
                      ${activeStep === index ? "text-white" : `text-${colors[index % 3].split("-")[1]}`}
                      transition-colors duration-300
                    `}
                  />
                </div>

                {/* Número do passo */}
                <div
                  className={`
                    absolute -top-2 -right-2 
                    w-6 h-6 rounded-full 
                    ${activeStep === index ? "bg-terra" : "bg-jungle"} 
                    text-white text-xs sm:text-sm
                    flex items-center justify-center
                    transition-colors duration-300
                  `}
                >
                  {index + 1}
                </div>

                {/* Linha conectora */}
                {index < steps.length - 1 && (
                  <div
                    className={`
                      hidden md:block absolute top-1/2 left-full w-4 h-0.5 
                      ${activeStep >= index ? "bg-terra" : "bg-terra/20"}
                      transition-colors duration-300
                    `}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Conteúdo do passo ativo */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white/80 dark:bg-jungle-dark/80 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-xl max-w-3xl mx-auto"
            >
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <motion.div
                  className={`${colors[activeStep % 3]} rounded-2xl p-4 flex-shrink-0`}
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {React.createElement(steps[activeStep].icon, {
                    className: "w-8 h-8 text-white",
                  })}
                </motion.div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-terra font-bold text-lg md:text-xl">
                      {(activeStep + 1).toString().padStart(2, "0")}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold text-jungle dark:text-sand">
                      {steps[activeStep].title}
                    </h3>
                  </div>
                  <p className="text-sm md:text-base text-jungle-dark dark:text-sand-light">
                    {steps[activeStep].description}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Elementos decorativos */}
        <div className="absolute inset-0 pointer-events-none">
          {colors.map((color, i) => (
            <motion.div
              key={i}
              className={`absolute rounded-full mix-blend-multiply filter blur-xl opacity-20 ${color}`}
              style={{
                width: `${Math.random() * 200 + 100}px`,
                height: `${Math.random() * 200 + 100}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [1, 1.2, 1],
                x: [0, 50, 0],
                y: [0, 30, 0],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks

