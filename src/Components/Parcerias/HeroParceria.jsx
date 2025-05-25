// "use client"
// import { motion } from "framer-motion"
// import { Code, Palette, PenTool, ArrowRight, MessageCircle, ArrowLeftRight } from "lucide-react"

// const services = [
//   {
//     icon: Code,
//     label: "Desenvolvimento",
//     description: "Sites, aplicativos e sistemas web",
//   },
//   {
//     icon: Palette,
//     label: "Design",
//     description: "Identidade visual e UI/UX",
//   },
//   {
//     icon: PenTool,
//     label: "Copywriting",
//     description: "Textos persuasivos e estratégicos",
//   },
// ]

// const PartnershipsHero = () => {
//   return (
//     <section className="min-h-screen bg-sand dark:bg-jungle relative overflow-hidden flex items-center justify-center px-4 py-20">
//       {/* Improved background with more details */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-br from-terra/10 to-jungle/10 dark:from-terra-dark/10 dark:to-jungle-dark/10" />
//         <motion.div
//           className="absolute inset-0"
//           animate={{
//             backgroundPosition: ["0% 0%", "100% 100%"],
//           }}
//           transition={{
//             duration: 20,
//             ease: "linear",
//             repeat: Number.POSITIVE_INFINITY,
//             repeatType: "reverse",
//           }}
//           style={{
//             backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
//           }}
//         />
//         {/* Additional decorative elements */}
//         <div className="absolute top-0 left-0 w-64 h-64 bg-terra opacity-10 rounded-full filter blur-3xl" />
//         <div className="absolute bottom-0 right-0 w-64 h-64 bg-jungle opacity-10 rounded-full filter blur-3xl" />
//       </div>

//       <div className="max-w-7xl mx-auto relative z-10">
//         <div className="text-center mb-16">
//           <motion.h1
//             className="text-4xl md:text-5xl lg:text-6xl font-bold text-jungle dark:text-sand mb-8 leading-tight"
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             Parcerias Inteligentes:
//             <br />
//             <span className="text-terra">Troca de Serviços por Projetos Inéditos</span>
//           </motion.h1>
//           <motion.p
//             className="text-xl text-jungle-dark dark:text-sand-light mb-12 max-w-3xl mx-auto"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//           >
//             Você precisa de um site profissional, identidade visual, copy persuasiva ou desenvolvimento completo, mas
//             não quer pagar em dinheiro? Eu aceito trocas de serviços para projetos que me ajudem a expandir meu
//             portfólio em nichos que ainda não trabalhei!
//           </motion.p>
//         </div>

//         {/* New visual representation of service exchange */}
//         <motion.div
//           className="flex justify-center items-center mb-16"
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8, delay: 0.4 }}
//         >
//           <div className="relative flex items-center justify-center bg-white dark:bg-jungle-dark rounded-full p-8 shadow-xl">
//             <motion.div
//               className="absolute inset-0 bg-terra opacity-10 rounded-full"
//               animate={{ scale: [1, 1.2, 1] }}
//               transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
//             />
//             <ArrowLeftRight className="w-24 h-24 text-terra" />
//           </div>
//         </motion.div>

//         {/* Improved services section with better card layout */}
//         <motion.div
//           className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.6 }}
//         >
//           {services.map((service, index) => (
//             <motion.div
//               key={index}
//               className="bg-white dark:bg-jungle-dark rounded-xl p-6 shadow-lg flex flex-col items-center text-center"
//               whileHover={{
//                 scale: 1.05,
//                 boxShadow: "0 10px 20px rgba(217, 108, 74, 0.2)",
//                 backgroundColor: "rgba(217, 108, 74, 0.05)",
//               }}
//               transition={{ type: "spring", stiffness: 300 }}
//             >
//               <div className="bg-terra/10 rounded-full p-4 mb-4">
//                 <service.icon className="w-12 h-12 text-terra" />
//               </div>
//               <h3 className="text-xl font-semibold text-jungle dark:text-sand mb-2">{service.label}</h3>
//               <p className="text-jungle-dark dark:text-sand-light">{service.description}</p>
//             </motion.div>
//           ))}
//         </motion.div>

//         <motion.div
//           className="text-center"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.8 }}
//         >
//           <p className="text-2xl font-bold text-jungle dark:text-sand mb-8">
//             Isso significa que você recebe um serviço de alto nível, e eu ganho experiência em novos mercados. Todo
//             mundo sai ganhando! 🚀
//           </p>
         
//         </motion.div>
//       </div>
//     </section>
//   )
// }

// export default PartnershipsHero

"use client"
import { motion } from "framer-motion"
import { Code, Palette, PenTool, ArrowLeftRight } from "lucide-react"

const services = [
  {
    icon: Code,
    label: "Desenvolvimento",
    description: "Sites, aplicativos e sistemas web",
  },
  {
    icon: Palette,
    label: "Design",
    description: "Identidade visual e UI/UX",
  },
  {
    icon: PenTool,
    label: "Copywriting",
    description: "Textos persuasivos e estratégicos",
  },
]

const PartnershipsHero = () => {
  return (
    <section className="min-h-screen bg-sand dark:bg-jungle relative overflow-hidden flex items-center justify-center px-4 py-20 transition-colors duration-300">
      {/* Improved background with more details */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-terra/10 to-jungle/10 dark:from-terra/20 dark:to-sand/10 transition-colors duration-300" />
        <motion.div
          className="absolute inset-0"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%239C92AC' fillOpacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        {/* Additional decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-terra opacity-10 dark:opacity-20 rounded-full filter blur-3xl transition-opacity duration-300" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-jungle dark:bg-sand opacity-10 dark:opacity-20 rounded-full filter blur-3xl transition-opacity duration-300" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-jungle dark:text-sand mb-8 leading-tight transition-colors duration-300"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Parcerias Inteligentes:
            <br />
            <span className="text-terra">Troca de Serviços por Projetos Inéditos</span>
          </motion.h1>
          <motion.p
            className="text-xl text-gray-700 dark:text-sand/90 mb-12 max-w-3xl mx-auto transition-colors duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Você precisa de um site profissional, identidade visual, copy persuasiva ou desenvolvimento completo, mas
            não quer pagar em dinheiro? Eu aceito trocas de serviços para projetos que me ajudem a expandir meu
            portfólio em nichos que ainda não trabalhei!
          </motion.p>
        </div>

        {/* New visual representation of service exchange */}
        <motion.div
          className="flex justify-center items-center mb-16"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="relative flex items-center justify-center bg-white/90 dark:bg-jungle/90 backdrop-blur-sm rounded-full p-8 shadow-xl border border-transparent dark:border-sand/10 transition-all duration-300">
            <motion.div
              className="absolute inset-0 bg-terra opacity-10 dark:opacity-20 rounded-full transition-opacity duration-300"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
            />
            <ArrowLeftRight className="w-24 h-24 text-terra" />
          </div>
        </motion.div>

        {/* Improved services section with better card layout */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white/90 dark:bg-jungle/90 backdrop-blur-sm rounded-xl p-6 shadow-lg flex flex-col items-center text-center border border-transparent dark:border-sand/10 transition-all duration-300"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 20px rgba(217, 108, 74, 0.2)",
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="bg-terra/10 dark:bg-terra/20 rounded-full p-4 mb-4 transition-colors duration-300">
                <service.icon className="w-12 h-12 text-terra" />
              </div>
              <h3 className="text-xl font-semibold text-jungle dark:text-sand mb-2 transition-colors duration-300">
                {service.label}
              </h3>
              <p className="text-gray-700 dark:text-sand/80 transition-colors duration-300">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p className="text-2xl font-bold text-jungle dark:text-sand mb-8 transition-colors duration-300">
            Isso significa que você recebe um serviço de alto nível, e eu ganho experiência em novos mercados. Todo
            mundo sai ganhando! 🚀
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default PartnershipsHero
