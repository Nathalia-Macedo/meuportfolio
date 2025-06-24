import { useState, useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { Phone, Users, Target, BarChart, ArrowRight, Headphones, MessageCircle, PieChart } from "lucide-react"

const SDRHero = () => {
  const [isHovered, setIsHovered] = useState(false)
  const controls = useAnimation()

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 })
  }, [controls])

  const floatingIcons = [
    { Icon: Headphones, delay: 0 },
    { Icon: MessageCircle, delay: 2 },
    { Icon: PieChart, delay: 4 },
  ]

  return (
    <section className="relative min-h-screen bg-sand dark:bg-jungle overflow-hidden transition-colors duration-300">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        {floatingIcons.map((item, index) => (
          <motion.div
            key={index}
            className="absolute"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0.3, 0.8, 0.3],
              scale: [0.8, 1.2, 0.8],
              x: ["0%", "100%", "0%"],
              y: ["0%", "100%", "0%"],
            }}
            transition={{
              duration: 20,
              delay: item.delay,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            <item.Icon className="w-16 h-16 text-jungle dark:text-sand opacity-10" />
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col justify-center min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          className="bg-white/90 dark:bg-jungle/90 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl border border-transparent dark:border-sand/10 transition-all duration-300"
        >
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-jungle dark:text-sand mb-6 leading-tight transition-colors duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            📞 SDR Que Resolve: <br />
            <span className="text-terra">Mais Leads, Mais Fechamentos!</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-700 dark:text-sand/90 mb-8 transition-colors duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Se você precisa de alguém que cuida do seu pipeline enquanto você foca em vender, eu sou essa pessoa!
          </motion.p>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            {[
              { icon: Phone, text: "Prospecção Ativa" },
              { icon: Users, text: "Qualificação de Leads" },
              { icon: Target, text: "Agendamento de Reuniões" },
              { icon: BarChart, text: "Gestão de Pipeline" },
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="bg-terra rounded-full p-3 mb-2">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-sm text-jungle dark:text-sand transition-colors duration-300">{item.text}</span>
              </div>
            ))}
          </motion.div>

          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <motion.a
              href="https://wa.me/71987257532"
              target="_blank"
              className="group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-medium text-white bg-terra rounded-full shadow-md transition duration-300 ease-out hover:bg-terra/90"
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              rel="noreferrer"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-terra to-terra/80"></span>
              <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-terra/30 opacity-30 group-hover:rotate-90 ease"></span>
              <span className="relative flex items-center">
                Alavanque Suas Vendas
                <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 ease-out group-hover:translate-x-1" />
              </span>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Additional Floating Elements */}
        <motion.div
          className="absolute top-1/4 left-10 w-16 h-16 bg-terra/20 rounded-full"
          animate={{
            y: [0, -20, 0],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-10 w-20 h-20 bg-terra/20 rounded-full"
          animate={{
            y: [0, 20, 0],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
      </div>
    </section>
  )
}

export default SDRHero
