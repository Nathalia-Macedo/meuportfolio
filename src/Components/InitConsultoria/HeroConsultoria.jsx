import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Code, Coffee, Brain, Lightbulb, Rocket, Zap, ChevronRight, MessageCircle } from "lucide-react"
import { FaReact, FaNodeJs, FaPython, FaDatabase, FaGithub, FaCode } from "react-icons/fa"

const ConsultoriaHero = () => {
  const [activeStep, setActiveStep] = useState(null)

  const journeySteps = [
    { icon: Code, title: "Fundamentos", description: "Aprenda as bases da programação" },
    { icon: Coffee, title: "Prática", description: "Desenvolva projetos reais" },
    { icon: Brain, title: "Lógica", description: "Aprimore seu raciocínio lógico" },
    { icon: Lightbulb, title: "Criatividade", description: "Encontre soluções inovadoras" },
    { icon: Rocket, title: "Carreira", description: "Prepare-se para o mercado" },
    { icon: Zap, title: "Evolução", description: "Aprenda continuamente" },
  ]

  const floatingIcons = [FaReact, FaNodeJs, FaPython, FaDatabase, FaGithub, FaCode]

  return (
    <section className="bg-sand min-h-screen flex items-center justify-center px-4 py-12 overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#2D4C3B" strokeWidth="0.5" strokeOpacity="0.1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-jungle opacity-10 rounded-bl-full" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-terra opacity-10 rounded-tr-full" />
      </div>

      {/* Floating Icons */}
      {floatingIcons.map((Icon, index) => (
        <motion.div
          key={index}
          className="absolute text-terra opacity-20 hidden sm:block"
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
          <Icon size={Math.random() * 30 + 20} />
        </motion.div>
      ))}

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-jungle leading-tight">
              Sua Jornada na Programação Começa Aqui
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-jungle-dark">
              Consultoria personalizada para iniciantes que querem decolar na carreira de programação.
            </p>
            <div className="space-y-4">
              <p className="text-base sm:text-lg text-jungle-dark">Nossa abordagem única oferece:</p>
              <ul className="space-y-2">
                {[
                  "Plano de estudos sob medida",
                  "Mentoria one-on-one com experts",
                  "Projetos práticos alinhados ao mercado",
                  "Suporte contínuo em sua evolução",
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-2 text-jungle-dark">
                    <ChevronRight className="text-terra flex-shrink-0" size={20} />
                    <span className="text-sm sm:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <motion.a
              href="https://wa.me/71987257532?text=Olá! Gostaria de saber mais sobre a consultoria para iniciantes em programação."
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center bg-terra hover:bg-terra-dark text-white font-medium py-2 sm:py-3 px-4 sm:px-6 rounded-full text-base sm:text-lg transition-colors duration-300 shadow-lg"
            >
              <MessageCircle className="mr-2" size={20} />
              Inicie Sua Jornada Agora!
            </motion.a>
          </div>

          {/* Right Content - Journey Path */}
          <div className="relative mt-8 lg:mt-0">
            <div className="absolute inset-0 bg-jungle opacity-5 rounded-3xl" />
            <div className="relative bg-white/50 backdrop-blur-sm rounded-3xl p-4 sm:p-8 shadow-xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {journeySteps.map((step, index) => (
                  <motion.div
                    key={index}
                    className="relative"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    onHoverStart={() => setActiveStep(index)}
                    onHoverEnd={() => setActiveStep(null)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-md flex flex-col items-center justify-center h-full cursor-pointer transition-all duration-300">
                      <step.icon size={32} className="text-terra mb-2 sm:mb-4" />
                      <h3 className="text-base sm:text-lg font-semibold text-jungle mb-1 sm:mb-2">{step.title}</h3>
                      <p className="text-xs sm:text-sm text-jungle-dark text-center">{step.description}</p>
                    </div>
                    <AnimatePresence>
                      {activeStep === index && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          className="absolute inset-0 bg-jungle text-sand rounded-2xl flex items-center justify-center p-4 sm:p-6"
                        >
                          <p className="text-center text-xs sm:text-sm font-medium">
                            Domine {step.title.toLowerCase()} e avance em sua jornada de programação!
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ConsultoriaHero

