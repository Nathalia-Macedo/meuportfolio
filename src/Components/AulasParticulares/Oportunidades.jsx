// "use client"

// import { useState } from "react"
// import { motion } from "framer-motion"
// import { Code, Target, Lightbulb } from "lucide-react"

// const opportunityData = [
//   {
//     icon: Code,
//     title: "Iniciantes na Programação",
//     description: "Quem quer entrar no mercado de programação, mas não sabe por onde começar",
//   },
//   {
//     icon: Target,
//     title: "Estudantes Buscando Prática",
//     description: "Quem já estuda, mas sente que falta prática e direcionamento",
//   },
//   {
//     icon: Lightbulb,
//     title: "Aspirantes a Emprego",
//     description: "Quem quer aumentar suas chances de conseguir um emprego na área",
//   },
// ]

// const OpportunityCard = ({ icon: Icon, title, description, isActive, onClick }) => (
//   <motion.div
//     className={`bg-white dark:bg-jungle-dark p-6 rounded-lg shadow-lg cursor-pointer transition-all duration-300 ${
//       isActive ? "border-2 border-terra" : ""
//     }`}
//     whileHover={{ scale: 1.05 }}
//     whileTap={{ scale: 0.95 }}
//     onClick={onClick}
//   >
//     <Icon className="w-12 h-12 text-terra mb-4" />
//     <h3 className="text-xl font-bold mb-2 text-jungle dark:text-sand">{title}</h3>
//     <p className="text-jungle-dark dark:text-sand-light">{description}</p>
//   </motion.div>
// )

// const OpportunitySection = () => {
//   const [activeCard, setActiveCard] = useState(null)

//   return (
//     <section className="py-20 bg-sand dark:bg-jungle">
//       <div className="max-w-6xl mx-auto px-4">
//         <motion.h2
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="text-4xl font-bold text-center mb-12 text-jungle dark:text-sand"
//         >
//           Para Quem é Essa Oportunidade?
//         </motion.h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {opportunityData.map((opportunity, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//             >
//               <OpportunityCard {...opportunity} isActive={activeCard === index} onClick={() => setActiveCard(index)} />
//             </motion.div>
//           ))}
//         </div>
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.5, delay: 0.5 }}
//           className="mt-12 text-center"
//         >
//           <p className="text-xl text-jungle dark:text-sand mb-6">
//             Não importa em qual grupo você se encaixa, temos a solução perfeita para você!
//           </p>
//           <motion.a
//             href="https://wa.me/71987257532?text=Olá! Gostaria de saber mais sobre as oportunidades de aprendizado."
//             target="_blank"
//             rel="noopener noreferrer"
//             className="inline-block bg-terra hover:bg-terra-dark text-white font-bold py-3 px-8 rounded-full transition-colors duration-300"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             Saiba Mais
//           </motion.a>
//         </motion.div>
//       </div>
//     </section>
//   )
// }

// export default OpportunitySection

"use client"
import { motion } from "framer-motion"
import { Code2, Target, Lightbulb } from "lucide-react"

const opportunityData = [
  {
    icon: Code2,
    title: "Iniciantes na Programação",
    description: "Quem quer entrar no mercado de programação, mas não sabe por onde começar",
  },
  {
    icon: Target,
    title: "Estudantes Buscando Prática",
    description: "Quem já estuda, mas sente que falta prática e direcionamento",
  },
  {
    icon: Lightbulb,
    title: "Aspirantes a Emprego",
    description: "Quem quer aumentar suas chances de conseguir um emprego na área",
  },
]

const OpportunityCard = ({ icon: Icon, title, description }) => (
  <motion.div
    className="bg-white p-8 rounded-lg shadow-lg h-full flex flex-col"
    whileHover={{ y: -5 }}
    transition={{ duration: 0.2 }}
  >
    <Icon className="w-12 h-12 text-terra mb-6" strokeWidth={1.5} />
    <h3 className="text-xl font-bold mb-4 text-jungle">{title}</h3>
    <p className="text-jungle/80 text-lg">{description}</p>
  </motion.div>
)

const OpportunitySection = () => {
  return (
    <section className="py-20 bg-sand">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-16 text-jungle"
        >
          Para Quem é Essa Oportunidade?
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {opportunityData.map((opportunity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <OpportunityCard {...opportunity} />
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 text-center text-xl text-jungle"
        >
          Não importa em qual grupo você se encaixa, temos a solução perfeita para você!
        </motion.p>
      </div>
    </section>
  )
}

export default OpportunitySection

