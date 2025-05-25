// import { useState, useEffect, useRef } from "react"
// import { motion, useAnimation } from "framer-motion"
// import { PenTool, Zap, Target, BarChart, ArrowRight } from "lucide-react"
// const words = ["Convença", "Converta", "Venda"]

// const CopywritingHero = () => {
//   const [currentWord, setCurrentWord] = useState(0)
//   const [currentCharacter, setCurrentCharacter] = useState(0)
//   const controls = useAnimation()
//   const containerRef = useRef(null)

//   useEffect(() => {
//     const animateText = async () => {
//       await controls.start({ opacity: 1, y: 0 })

//       for (let i = 0; i <= words[currentWord].length; i++) {
//         setCurrentCharacter(i)
//         await new Promise((resolve) => setTimeout(resolve, 100))
//       }

//       await new Promise((resolve) => setTimeout(resolve, 1000))

//       await controls.start({ opacity: 0, y: 20 })

//       setCurrentWord((prev) => (prev + 1) % words.length)
//     }

//     animateText()
//   }, [currentWord, controls])

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       const { clientX, clientY } = e
//       const { left, top, width, height } = containerRef.current.getBoundingClientRect()
//       const x = (clientX - left) / width
//       const y = (clientY - top) / height

//       containerRef.current.style.setProperty("--mouse-x", x)
//       containerRef.current.style.setProperty("--mouse-y", y)
//     }

//     containerRef.current.addEventListener("mousemove", handleMouseMove)

//     return () => {
//       containerRef.current?.removeEventListener("mousemove", handleMouseMove)
//     }
//   }, [])

//   return (
//     <section
//       ref={containerRef}
//       className="min-h-screen bg-sand dark:bg-jungle relative overflow-hidden flex items-center justify-center px-4 py-20"
//     >
//       <div className="absolute inset-0 overflow-hidden">
//         <div
//           className="absolute inset-0 bg-gradient-radial from-terra/20 to-transparent opacity-50"
//           style={{
//             background: `radial-gradient(circle at calc(var(--mouse-x, 0.5) * 100%) calc(var(--mouse-y, 0.5) * 100%), rgba(217, 108, 74, 0.2), transparent 50%)`,
//           }}
//         />
//       </div>

//       <div className="max-w-7xl mx-auto relative z-10">
//         <div className="text-center mb-16">
//           <motion.h1
//             className="text-5xl md:text-7xl font-bold text-jungle dark:text-sand mb-8"
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             Palavras que
//           </motion.h1>
//           <div className="h-20 flex items-center justify-center">
//             <motion.div
//               className="text-5xl md:text-7xl font-bold text-terra"
//               initial={{ opacity: 0, y: 20 }}
//               animate={controls}
//             >
//               {words[currentWord].slice(0, currentCharacter)}
//               <span className="animate-blink">|</span>
//             </motion.div>
//           </div>
//         </div>

//         <motion.div
//           className="grid md:grid-cols-3 gap-8 mb-16"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.4 }}
//         >
//           {[
//             { icon: PenTool, title: "Copywriting Persuasivo", description: "Textos que conectam e convertem" },
//             { icon: Target, title: "Estratégia Focada", description: "Conteúdo direcionado ao seu público" },
//             { icon: BarChart, title: "Resultados Mensuráveis", description: "Aumento real nas suas conversões" },
//           ].map((item, index) => (
//             <motion.div
//               key={index}
//               className="bg-white dark:bg-jungle-dark rounded-xl p-6 shadow-lg"
//               whileHover={{ scale: 1.05 }}
//               transition={{ type: "spring", stiffness: 300 }}
//             >
//               <item.icon className="w-12 h-12 text-terra mb-4" />
//               <h3 className="text-xl font-semibold text-jungle dark:text-sand mb-2">{item.title}</h3>
//               <p className="text-jungle-dark dark:text-sand-light">{item.description}</p>
//             </motion.div>
//           ))}
//         </motion.div>

//         <motion.div
//           className="text-center"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.6 }}
//         >
//           <p className="text-xl text-jungle-dark dark:text-sand-light mb-8">
//             Transforme suas ideias em resultados concretos com copywriting estratégico.
//           </p>
//           <motion.a
//             href="https://wa.me/71987257532?text=Olá! Gostaria de saber mais sobre seus serviços de copywriting."
//             target="_blank"
//             rel="noopener noreferrer"
//             className="inline-flex items-center gap-2 bg-terra hover:bg-terra-dark text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <Zap className="w-5 h-5" />
//             <span>Potencialize Suas Vendas</span>
//             <ArrowRight className="w-5 h-5" />
//           </motion.a>
//         </motion.div>
//       </div>
//     </section>
//   )
// }

// export default CopywritingHero

"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useAnimation } from "framer-motion"
import { PenTool, Zap, Target, BarChart, ArrowRight } from "lucide-react"

const words = ["Convença", "Converta", "Venda"]

const CopywritingHero = () => {
  const [currentWord, setCurrentWord] = useState(0)
  const [currentCharacter, setCurrentCharacter] = useState(0)
  const controls = useAnimation()
  const containerRef = useRef(null)
  const animationRef = useRef(null)

  useEffect(() => {
    const animateText = async () => {
      try {
        // Aguardar um frame para garantir que o componente está montado
        await new Promise((resolve) => requestAnimationFrame(resolve))

        await controls.start({ opacity: 1, y: 0 })

        for (let i = 0; i <= words[currentWord].length; i++) {
          setCurrentCharacter(i)
          await new Promise((resolve) => setTimeout(resolve, 100))
        }

        await new Promise((resolve) => setTimeout(resolve, 1000))

        await controls.start({ opacity: 0, y: 20 })

        setCurrentWord((prev) => (prev + 1) % words.length)
      } catch (error) {
        // Silenciar erros de animação quando o componente é desmontado
      }
    }

    animationRef.current = animateText()
  }, [currentWord, controls])

  useEffect(() => {
    if (!containerRef.current) return

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e
      const { left, top, width, height } = containerRef.current.getBoundingClientRect()
      const x = (clientX - left) / width
      const y = (clientY - top) / height

      containerRef.current.style.setProperty("--mouse-x", x)
      containerRef.current.style.setProperty("--mouse-y", y)
    }

    const container = containerRef.current
    container.addEventListener("mousemove", handleMouseMove)

    return () => {
      container?.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <section
      ref={containerRef}
      className="min-h-screen bg-sand dark:bg-jungle relative overflow-hidden flex items-center justify-center px-4 py-20 transition-colors duration-300"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-radial from-terra/20 to-transparent opacity-50"
          style={{
            background: `radial-gradient(circle at calc(var(--mouse-x, 0.5) * 100%) calc(var(--mouse-y, 0.5) * 100%), rgba(217, 108, 74, 0.2), transparent 50%)`,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-jungle dark:text-sand mb-8 transition-colors duration-300"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Palavras que
          </motion.h1>
          <div className="h-20 flex items-center justify-center">
            <motion.div
              className="text-5xl md:text-7xl font-bold text-terra"
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
            >
              {words[currentWord].slice(0, currentCharacter)}
              <span className="animate-pulse">|</span>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {[
            { icon: PenTool, title: "Copywriting Persuasivo", description: "Textos que conectam e convertem" },
            { icon: Target, title: "Estratégia Focada", description: "Conteúdo direcionado ao seu público" },
            { icon: BarChart, title: "Resultados Mensuráveis", description: "Aumento real nas suas conversões" },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-white/90 dark:bg-jungle/90 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-transparent dark:border-sand/10 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <item.icon className="w-12 h-12 text-terra mb-4" />
              <h3 className="text-xl font-semibold text-jungle dark:text-sand mb-2 transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-gray-700 dark:text-sand/80 transition-colors duration-300">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="text-xl text-gray-700 dark:text-sand/90 mb-8 transition-colors duration-300">
            Transforme suas ideias em resultados concretos com copywriting estratégico.
          </p>
          <motion.a
            href="https://wa.me/71987257532?text=Olá! Gostaria de saber mais sobre seus serviços de copywriting."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-terra hover:bg-terra/90 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Zap className="w-5 h-5" />
            <span>Potencialize Suas Vendas</span>
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default CopywritingHero
