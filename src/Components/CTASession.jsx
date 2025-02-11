"use client"
import { motion } from "framer-motion"
import { MessageCircle } from "lucide-react"

const CTASection = () => {
  const phoneNumber = "71987257532"
  const message = encodeURIComponent("Olá! Vi seu portfólio e gostaria de conversar.")
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`

  return (
    <section className="relative overflow-hidden py-20 px-4 bg-gradient-to-br from-sand to-terra/20 dark:from-jungle dark:to-terra-dark/20">
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-jungle dark:text-sand mb-6">Vamos Trabalhar Juntos?</h2>
          <p className="text-xl text-jungle-dark dark:text-sand-light mb-10 max-w-2xl mx-auto">
            Estou sempre aberta a novos projetos e parcerias. Vamos conversar e transformar suas ideias em realidade!
          </p>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-block group">
            <div className="bg-terra dark:bg-terra-dark text-white dark:text-sand px-8 py-4 rounded-full text-lg font-semibold flex items-center justify-center transition-all duration-300 transform hover:scale-105 hover:shadow-lg relative overflow-hidden">
              <span className="relative z-10 flex items-center">
                <MessageCircle className="mr-2 h-6 w-6" />
                Iniciar Conversa no WhatsApp
              </span>
              <div className="absolute inset-0 bg-jungle dark:bg-sand opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </div>
          </a>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-32 h-32 md:w-64 md:h-64 bg-terra/10 dark:bg-terra-dark/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 md:w-80 md:h-80 bg-terra/10 dark:bg-terra-dark/10 rounded-full translate-x-1/2 translate-y-1/2"></div>

      {/* Animated lines */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <motion.path
          d="M0,100 Q50,50 100,100 T200,100"
          fill="none"
          stroke="rgba(217, 108, 74, 0.2)"
          strokeWidth="2"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", ease: "easeInOut" }}
        />
        <motion.path
          d="M0,200 Q50,150 100,200 T200,200"
          fill="none"
          stroke="rgba(217, 108, 74, 0.2)"
          strokeWidth="2"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{
            duration: 2.5,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
      </svg>
    </section>
  )
}

export default CTASection

