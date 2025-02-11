"use client"

import { useState,useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Briefcase, Target, LineChart, Users, MessageCircle, CheckCircle2, ArrowRight } from "lucide-react"

const statistics = [
  { label: "Alunos Empregados", value: "80+", icon: Users },
  { label: "Vagas Preenchidas", value: "100+", icon: Briefcase },
  { label: "Média Salarial", value: "R$4.5k+", icon: LineChart },
]

const steps = [
  {
    icon: Target,
    title: "Análise de Perfil",
    description: "Identificamos seus pontos fortes e áreas de melhoria para criar um plano personalizado.",
  },
  {
    icon: Briefcase,
    title: "Posicionamento",
    description: "Desenvolvemos sua marca pessoal e otimizamos seu perfil para o mercado.",
  },
  {
    icon: LineChart,
    title: "Estratégia",
    description: "Criamos um plano de ação para aumentar suas chances de sucesso.",
  },
]

const JobMarketHero = () => {
  const [activeStep, setActiveStep] = useState(0)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="min-h-screen bg-sand dark:bg-jungle relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-terra opacity-5 rounded-bl-full transform rotate-180" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-jungle opacity-5 rounded-tr-full" />

        {/* Animated Code Particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-terra opacity-10"
            initial={{
              x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 1000),
            }}
            animate={{
              x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 1000),
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          >
            {["{ }", "< >", "//", "[]", "()"][Math.floor(Math.random() * 5)]}
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-jungle dark:text-sand leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Transforme Seu Conhecimento em Oportunidades
              </motion.h1>
              <motion.p
                className="text-xl text-jungle-dark dark:text-sand-light"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Você já estudou, fez cursos, construiu alguns projetos, mas ainda não conseguiu oportunidades no
                mercado? Vamos mudar isso juntos!
              </motion.p>
            </div>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <a
                href="https://wa.me/71987257532?text=Olá! Gostaria de saber mais sobre a consultoria para mercado de trabalho."
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 bg-terra hover:bg-terra-dark text-white px-6 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:-translate-y-1"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Agendar Consultoria</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Content - Interactive Steps */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="bg-white dark:bg-jungle-dark rounded-2xl shadow-xl p-8">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  className={`relative cursor-pointer p-6 rounded-xl transition-all duration-300 ${
                    activeStep === index ? "bg-terra/10" : "hover:bg-terra/5"
                  }`}
                  onClick={() => setActiveStep(index)}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`p-3 rounded-full ${
                        activeStep === index ? "bg-terra text-white" : "bg-terra/10 text-terra"
                      }`}
                    >
                      <step.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-jungle dark:text-sand mb-2">{step.title}</h3>
                      <AnimatePresence mode="wait">
                        {activeStep === index && (
                          <motion.p
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="text-jungle-dark dark:text-sand-light"
                          >
                            {step.description}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                    <CheckCircle2 className={`w-6 h-6 ${activeStep === index ? "text-terra" : "text-terra/30"}`} />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {statistics.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-jungle-dark rounded-xl p-6 shadow-lg"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-terra/10 rounded-full text-terra">
                  <stat.icon className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-jungle dark:text-sand">{stat.value}</div>
                  <div className="text-jungle-dark dark:text-sand-light">{stat.label}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default JobMarketHero

