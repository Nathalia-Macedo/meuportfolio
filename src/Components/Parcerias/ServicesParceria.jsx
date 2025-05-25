// "use client"

// import { useState } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import { Palette, PenTool, Globe, Server, ArrowRight } from "lucide-react"

// const services = [
//   {
//     icon: Palette,
//     title: "Criação de Logos e Identidade Visual",
//     description: "Branding completo para destacar seu negócio",
//     details:
//       "Desenvolvo logotipos únicos, paletas de cores harmoniosas e guias de estilo abrangentes para criar uma identidade visual coesa e memorável para sua marca.",
//   },
//   {
//     icon: Globe,
//     title: "Web Design Profissional",
//     description: "Layouts modernos e responsivos",
//     details:
//       "Crio designs de websites elegantes e funcionais, otimizados para todos os dispositivos, garantindo uma experiência de usuário excepcional e alinhada com as últimas tendências de design.",
//   },
//   {
//     icon: PenTool,
//     title: "Copywriting Estratégico",
//     description: "Textos persuasivos para diversas plataformas",
//     details:
//       "Produzo conteúdo envolvente e persuasivo para sites, anúncios, landing pages e materiais de marketing, ajudando a converter visitantes em clientes.",
//   },
//   {
//     icon: Globe,
//     title: "Desenvolvimento de Sites",
//     description: "Sites institucionais, landing pages e sistemas",
//     details:
//       "Desenvolvo soluções web personalizadas, desde sites institucionais até sistemas complexos, utilizando as mais recentes tecnologias para garantir performance e escalabilidade.",
//   },
//   {
//     icon: Server,
//     title: "Hospedagem e Configuração",
//     description: "Deixe a parte técnica comigo!",
//     details:
//       "Cuido de toda a infraestrutura técnica, incluindo hospedagem, configuração de servidores, otimização de performance e segurança, para que você possa focar no seu negócio.",
//   },
// ]

// const ServicesOffered = () => {
//   const [selectedService, setSelectedService] = useState(null)

//   return (
//     <section className="py-20 bg-gradient-to-br from-[#E3DACD] to-white dark:from-[#2D4C3B] dark:to-[#1A2C23] overflow-hidden">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.h2
//           className="text-4xl md:text-5xl font-bold text-center text-[#2D4C3B] dark:text-[#E3DACD] mb-16"
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           O Que Posso Fazer Por Você?
//         </motion.h2>

//         <div className="relative">
//           <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-3/4 bg-[#D96C4A] rounded-full hidden md:block" />

//           <div className="space-y-8 relative">
//             {services.map((service, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, x: -50 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//               >
//                 <div
//                   className={`p-6 cursor-pointer transition-all duration-300 rounded-lg shadow-md ${
//                     selectedService === index
//                       ? "bg-[#D96C4A] text-white"
//                       : "bg-white dark:bg-[#1A2C23] hover:bg-[#D96C4A]/10 dark:hover:bg-[#D96C4A]/10"
//                   }`}
//                   onClick={() => setSelectedService(selectedService === index ? null : index)}
//                 >
//                   <div className="flex items-start">
//                     <div
//                       className={`p-3 rounded-full ${selectedService === index ? "bg-white" : "bg-[#D96C4A]/10"} mr-4`}
//                     >
//                       <service.icon
//                         className={`w-6 h-6 ${selectedService === index ? "text-[#D96C4A]" : "text-[#D96C4A]"}`}
//                       />
//                     </div>
//                     <div className="flex-grow">
//                       <h3
//                         className={`text-xl font-semibold mb-2 ${
//                           selectedService === index ? "text-white" : "text-[#2D4C3B] dark:text-[#E3DACD]"
//                         }`}
//                       >
//                         {service.title}
//                       </h3>
//                       <p
//                         className={`${
//                           selectedService === index ? "text-white/90" : "text-[#2D4C3B]/80 dark:text-[#E3DACD]/80"
//                         }`}
//                       >
//                         {service.description}
//                       </p>
//                       <AnimatePresence>
//                         {selectedService === index && (
//                           <motion.div
//                             initial={{ opacity: 0, height: 0 }}
//                             animate={{ opacity: 1, height: "auto" }}
//                             exit={{ opacity: 0, height: 0 }}
//                             transition={{ duration: 0.3 }}
//                             className="mt-4 text-white/80"
//                           >
//                             {service.details}
//                           </motion.div>
//                         )}
//                       </AnimatePresence>
//                     </div>
//                     <ArrowRight
//                       className={`w-6 h-6 transition-transform duration-300 ${
//                         selectedService === index ? "rotate-90 text-white" : "text-[#D96C4A]"
//                       }`}
//                     />
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default ServicesOffered

"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Palette, PenTool, Globe, Server, ArrowRight } from "lucide-react"

const services = [
  {
    icon: Palette,
    title: "Criação de Logos e Identidade Visual",
    description: "Branding completo para destacar seu negócio",
    details:
      "Desenvolvo logotipos únicos, paletas de cores harmoniosas e guias de estilo abrangentes para criar uma identidade visual coesa e memorável para sua marca.",
  },
  {
    icon: Globe,
    title: "Web Design Profissional",
    description: "Layouts modernos e responsivos",
    details:
      "Crio designs de websites elegantes e funcionais, otimizados para todos os dispositivos, garantindo uma experiência de usuário excepcional e alinhada com as últimas tendências de design.",
  },
  {
    icon: PenTool,
    title: "Copywriting Estratégico",
    description: "Textos persuasivos para diversas plataformas",
    details:
      "Produzo conteúdo envolvente e persuasivo para sites, anúncios, landing pages e materiais de marketing, ajudando a converter visitantes em clientes.",
  },
  {
    icon: Globe,
    title: "Desenvolvimento de Sites",
    description: "Sites institucionais, landing pages e sistemas",
    details:
      "Desenvolvo soluções web personalizadas, desde sites institucionais até sistemas complexos, utilizando as mais recentes tecnologias para garantir performance e escalabilidade.",
  },
  {
    icon: Server,
    title: "Hospedagem e Configuração",
    description: "Deixe a parte técnica comigo!",
    details:
      "Cuido de toda a infraestrutura técnica, incluindo hospedagem, configuração de servidores, otimização de performance e segurança, para que você possa focar no seu negócio.",
  },
]

const ServicesOffered = () => {
  const [selectedService, setSelectedService] = useState(null)

  return (
    <section className="py-20 bg-gradient-to-br from-sand to-white dark:from-jungle dark:to-jungle/90 overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center text-jungle dark:text-sand mb-16 transition-colors duration-300"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          O Que Posso Fazer Por Você?
        </motion.h2>

        <div className="relative">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-3/4 bg-terra rounded-full hidden md:block" />

          <div className="space-y-8 relative">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div
                  className={`p-6 cursor-pointer transition-all duration-300 rounded-lg shadow-md border border-transparent dark:border-sand/10 ${
                    selectedService === index
                      ? "bg-terra text-white"
                      : "bg-white/90 dark:bg-jungle/90 hover:bg-terra/10 dark:hover:bg-terra/10 text-jungle dark:text-sand"
                  }`}
                  onClick={() => setSelectedService(selectedService === index ? null : index)}
                >
                  <div className="flex items-start">
                    <div
                      className={`p-3 rounded-full transition-colors duration-300 ${selectedService === index ? "bg-white" : "bg-terra/10 dark:bg-terra/20"} mr-4`}
                    >
                      <service.icon
                        className={`w-6 h-6 transition-colors duration-300 ${selectedService === index ? "text-terra" : "text-terra"}`}
                      />
                    </div>
                    <div className="flex-grow">
                      <h3
                        className={`text-xl font-semibold mb-2 transition-colors duration-300 ${
                          selectedService === index ? "text-white" : "text-jungle dark:text-sand"
                        }`}
                      >
                        {service.title}
                      </h3>
                      <p
                        className={`transition-colors duration-300 ${
                          selectedService === index ? "text-white/90" : "text-gray-700 dark:text-sand/80"
                        }`}
                      >
                        {service.description}
                      </p>
                      <AnimatePresence>
                        {selectedService === index && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="mt-4 text-white/80"
                          >
                            {service.details}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                    <ArrowRight
                      className={`w-6 h-6 transition-transform duration-300 ${
                        selectedService === index ? "rotate-90 text-white" : "text-terra"
                      }`}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesOffered
