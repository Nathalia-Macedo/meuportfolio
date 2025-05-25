// "use client"
// import { motion } from "framer-motion"
// import { Zap, BookOpen, Target, MessageCircle } from "lucide-react"

// const strategies = [
//   {
//     icon: Zap,
//     title: "Gatilhos Mentais e Persuasão",
//     description: "Uso de técnicas como urgência, escassez e reciprocidade para impulsionar conversões",
//   },
//   {
//     icon: BookOpen,
//     title: "Storytelling Comercial",
//     description: "Criando narrativas envolventes que conectam o cliente à solução",
//   },
//   {
//     icon: Target,
//     title: "Técnica AIDA",
//     description: "Estrutura comprovada para textos que vendem: Atenção, Interesse, Desejo, Ação",
//   },
// ]

// const SalesStrategies = () => {
//   return (
//     <section className="py-20 bg-gradient-to-br from-white to-sand dark:from-jungle-dark dark:to-jungle overflow-hidden">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
//         <motion.h2
//           className="text-4xl md:text-5xl font-bold text-center text-jungle dark:text-sand mb-16"
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           Estratégias de Vendas Que Eu Aplico
//         </motion.h2>

//         <div className="grid md:grid-cols-3 gap-8 mb-16">
//           {strategies.map((strategy, index) => (
//             <motion.div
//               key={index}
//               className="bg-white dark:bg-jungle-dark rounded-xl p-6 shadow-lg"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//               whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
//             >
//               <strategy.icon className="w-12 h-12 text-terra mb-4" />
//               <h3 className="text-xl font-semibold text-jungle dark:text-sand mb-2">{strategy.title}</h3>
//               <p className="text-jungle-dark dark:text-sand-light">{strategy.description}</p>
//             </motion.div>
//           ))}
//         </div>

//         <motion.div
//           className="text-center max-w-3xl mx-auto"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.6, delay: 0.5 }}
//         >
//           <p className="text-xl text-jungle-dark dark:text-sand-light mb-8">
//             💡 Copywriting não é só sobre escrever, é sobre vender! Com a estratégia certa, cada palavra gera impacto e
//             resultado.
//           </p>
//           <p className="text-2xl font-bold text-jungle dark:text-sand mb-8">
//             💰 Quer transformar sua comunicação em vendas reais? Vamos conversar!
//           </p>
//           <a
//             href="https://wa.me/71987257532?text=Olá! Gostaria de saber mais sobre suas estratégias de vendas e copywriting."
//             target="_blank"
//             rel="noopener noreferrer"
//             className="inline-flex items-center gap-2 bg-terra hover:bg-terra-dark text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
//           >
//             <MessageCircle className="w-5 h-5" />
//             Entre em contato e venda mais! 🚀
//           </a>
//         </motion.div>
//       </div>
//     </section>
//   )
// }

// export default SalesStrategies


"use client"

import { motion } from "framer-motion"
import { Zap, BookOpen, Target, MessageCircle } from "lucide-react"

const strategies = [
  {
    icon: Zap,
    title: "Gatilhos Mentais e Persuasão",
    description: "Uso de técnicas como urgência, escassez e reciprocidade para impulsionar conversões",
  },
  {
    icon: BookOpen,
    title: "Storytelling Comercial",
    description: "Criando narrativas envolventes que conectam o cliente à solução",
  },
  {
    icon: Target,
    title: "Técnica AIDA",
    description: "Estrutura comprovada para textos que vendem: Atenção, Interesse, Desejo, Ação",
  },
]

const SalesStrategies = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-white to-sand dark:from-jungle/90 dark:to-jungle overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center text-jungle dark:text-sand mb-16 transition-colors duration-300"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Estratégias de Vendas Que Eu Aplico
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {strategies.map((strategy, index) => (
            <motion.div
              key={index}
              className="bg-white/90 dark:bg-jungle/90 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-transparent dark:border-sand/10 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            >
              <strategy.icon className="w-12 h-12 text-terra mb-4" />
              <h3 className="text-xl font-semibold text-jungle dark:text-sand mb-2 transition-colors duration-300">
                {strategy.title}
              </h3>
              <p className="text-gray-700 dark:text-sand/80 transition-colors duration-300">{strategy.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="text-xl text-gray-700 dark:text-sand/90 mb-8 transition-colors duration-300">
            💡 Copywriting não é só sobre escrever, é sobre vender! Com a estratégia certa, cada palavra gera impacto e
            resultado.
          </p>
          <p className="text-2xl font-bold text-jungle dark:text-sand mb-8 transition-colors duration-300">
            💰 Quer transformar sua comunicação em vendas reais? Vamos conversar!
          </p>
          <a
            href="https://wa.me/71987257532?text=Olá! Gostaria de saber mais sobre suas estratégias de vendas e copywriting."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-terra hover:bg-terra/90 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <MessageCircle className="w-5 h-5" />
            Entre em contato e venda mais! 🚀
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default SalesStrategies

