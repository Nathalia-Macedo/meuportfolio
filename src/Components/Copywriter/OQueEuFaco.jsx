"use client"
import { motion } from "framer-motion"
import { Rocket, Mail, Share2, GitBranch, ShoppingCart, MessageSquare } from "lucide-react"

const services = [
  {
    icon: Rocket,
    title: "Landing Pages de Alta Conversão",
    description: "Textos que prendem a atenção e geram vendas",
  },
  {
    icon: Mail,
    title: "E-mails Persuasivos",
    description: "Campanhas que nutrem leads e aumentam taxas de resposta",
  },
  {
    icon: Share2,
    title: "Anúncios para Redes Sociais",
    description: "Copy certeira para Facebook Ads, Instagram Ads e Google Ads",
  },
  {
    icon: GitBranch,
    title: "Sequências de E-mails e Funis de Venda",
    description: "Textos estratégicos para cada etapa da jornada do cliente",
  },
  {
    icon: ShoppingCart,
    title: "Páginas de Vendas",
    description: "Apresentação irresistível de produtos e serviços",
  },
  {
    icon: MessageSquare,
    title: "Scripts de Vendas e Pitches",
    description: "Comunicação persuasiva para fechar negócios",
  },
]

const WhatICreate = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-sand to-white dark:from-jungle dark:to-jungle-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center text-jungle dark:text-sand mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          O Que Posso Criar Para Seu Negócio?
        </motion.h2>

        <div className="flex flex-wrap justify-center items-center">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="w-64 h-72 m-4 relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            >
              <div
                className="absolute inset-0 bg-white dark:bg-jungle-dark shadow-lg"
                style={{
                  clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                }}
              >
                <div
                  className="absolute inset-2 bg-gradient-to-br from-terra to-jungle dark:from-terra-dark dark:to-jungle-dark"
                  style={{
                    clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                  }}
                >
                  <div
                    className="absolute inset-1 bg-white dark:bg-jungle-dark flex flex-col items-center justify-center p-4 text-center"
                    style={{
                      clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                    }}
                  >
                    <service.icon className="w-12 h-12 text-terra mb-4" />
                    <h3 className="text-lg font-semibold text-jungle dark:text-sand mb-2">{service.title}</h3>
                    <p className="text-sm text-jungle-dark dark:text-sand-light">{service.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <a
            href="#contact"
            className="inline-block bg-terra hover:bg-terra-dark text-white font-bold py-3 px-8 rounded-full transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Vamos criar algo incrível juntos?
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default WhatICreate

