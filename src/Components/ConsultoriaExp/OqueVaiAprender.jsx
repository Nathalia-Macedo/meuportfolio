"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Linkedin, Briefcase, DollarSign, Users, BookOpen, Target, Wallet, CreditCard, Phone } from "lucide-react"

const learningPoints = [
  {
    icon: Linkedin,
    title: "LinkedIn estratégico",
    description: "Como atrair recrutadores e ser notado por empresas",
  },
  {
    icon: Briefcase,
    title: "Portfólio profissional",
    description: "Projetos que realmente chamam atenção",
  },
  {
    icon: Target,
    title: "Plataformas freelancers",
    description: "Como começar e conseguir os primeiros clientes",
  },
  {
    icon: DollarSign,
    title: "Precificação de projetos",
    description: "Como cobrar pelo seu trabalho sem desvalorizar seu tempo",
  },
  {
    icon: Users,
    title: "Networking inteligente",
    description: "Criando conexões que geram oportunidades",
  },
  {
    icon: BookOpen,
    title: "Entrevistas e testes técnicos",
    description: "Como se preparar e se sair bem",
  },
]

const LearningPointsSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  return (
    <section className="py-20 bg-gradient-to-b from-sand to-white dark:from-jungle dark:to-jungle-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-terra opacity-10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-jungle opacity-10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-jungle dark:text-sand mb-6">O Que Você Vai Aprender?</h2>
          <p className="text-xl text-jungle-dark dark:text-sand-light max-w-3xl mx-auto">
            Domine as habilidades essenciais para se destacar no mercado de trabalho de tecnologia.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {learningPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="bg-white dark:bg-jungle-dark rounded-xl p-6 shadow-lg h-full transition-all duration-300 hover:shadow-xl">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-terra/10 rounded-full text-terra mr-4">
                    <point.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-jungle dark:text-sand">{point.title}</h3>
                </div>
                <p className="text-jungle-dark dark:text-sand-light">{point.description}</p>
              </div>
              <motion.div
                className="absolute inset-0 bg-terra rounded-xl z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredIndex === index ? 0.1 : 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>

        {/* Pricing Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 flex justify-center"
        >
          <div className="bg-white dark:bg-jungle-dark rounded-3xl shadow-xl overflow-hidden max-w-2xl w-full">
            <div className="p-8">
              <div className="flex justify-between items-start">
                <div className="space-y-2">
                  <p className="text-jungle-dark/60 dark:text-sand/60 text-lg line-through">Valor: R$500,00</p>
                  <div className="flex items-center gap-3">
                    <span className="bg-terra/10 text-terra px-3 py-1 rounded-full text-sm font-semibold">20% OFF</span>
                    <h3 className="text-[2.5rem] font-bold text-jungle dark:text-sand">R$400,00</h3>
                  </div>
                  <p className="text-terra text-lg font-medium flex items-center gap-2">
                    🔥 Promoção por tempo limitado
                  </p>
                </div>
                <motion.a
                  href="https://wa.me/71987257532?text=Olá! Gostaria de agendar minha consultoria para o mercado de trabalho em programação."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-terra hover:bg-terra-dark text-white font-semibold px-6 py-3 rounded-full transition-colors duration-300 flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Phone className="w-5 h-5" />
                  Agendar Agora
                </motion.a>
              </div>

              <div className="mt-6 flex items-center gap-6">
                <div className="flex items-center gap-2 text-jungle-dark dark:text-sand-light">
                  <Wallet className="w-5 h-5" />
                  <span>PIX</span>
                </div>
                <div className="w-px h-5 bg-jungle/20 dark:bg-sand/20" />
                <div className="flex items-center gap-2 text-jungle-dark dark:text-sand-light">
                  <CreditCard className="w-5 h-5" />
                  <span>Cartão</span>
                </div>
              </div>
            </div>

            <div className="border-t border-jungle/10 dark:border-sand/10 p-4 text-center bg-jungle/5 dark:bg-sand/5">
              <p className="text-jungle-dark dark:text-sand-light">
                👉 Agende agora e dê o primeiro passo da maneira certa!
              </p>
            </div>
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <div className="mt-8 flex flex-wrap justify-center gap-8 text-sm text-jungle-dark/60 dark:text-sand/60">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>Pagamento Seguro</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Atendimento Imediato</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
            <span>Satisfação Garantida</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LearningPointsSection

