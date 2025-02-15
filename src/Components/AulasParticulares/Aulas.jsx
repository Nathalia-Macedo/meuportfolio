// import { useState, useEffect } from "react"
// import { motion, useAnimation } from "framer-motion"
// import {
//   MessageCircle,
//   Code,
//   Users,
//   Clock,
//   Star,
//   Sparkles,
//   Trophy,
//   Video,
//   FileText,
//   HandshakeIcon,
//   FolderGit2,
//   FileCode,
// } from "lucide-react"
// import TestimonialBubbles from "./Testemunhas"

// const stats = [
//   {
//     icon: Users,
//     count: "500+",
//     label: "Alunos Formados",
//   },
//   {
//     icon: Video,
//     count: "50+",
//     label: "Lives Realizadas",
//   },
//   {
//     icon: Sparkles,
//     count: "100+",
//     label: "Workshops",
//   },
//   {
//     icon: Trophy,
//     count: "97%",
//     label: "Satisfação",
//   },
//   {
//     icon: HandshakeIcon,
//     count: "100+",
//     label: "Consultorias Realizadas",
//   },
//   {
//     icon: FileText,
//     count: "500+",
//     label: "Conteúdos Disponíveis",
//   },
//   {
//     icon: FolderGit2,
//     count: "20+",
//     label: "Projetos Realizados",
//   },
//   {
//     icon: FileCode,
//     count: "20+",
//     label: "Contratos Fechados",
//   },
// ]

// const features = [
//   {
//     icon: Code,
//     text: "Projetos Práticos",
//   },
//   {
//     icon: Users,
//     text: "Aulas Personalizadas",
//   },
//   {
//     icon: Clock,
//     text: "Horários Flexíveis",
//   },
//   {
//     icon: Star,
//     text: "Suporte Contínuo",
//   },
// ]

// const TeachingHero = () => {
//   const controls = useAnimation()
//   const [isVisible, setIsVisible] = useState(false)
//   const [isMobile, setIsMobile] = useState(false)

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 768)
//     }

//     handleResize()
//     window.addEventListener("resize", handleResize)

//     // Start animations immediately
//     controls.start({
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.5 },
//     })
//     setIsVisible(true)

//     return () => window.removeEventListener("resize", handleResize)
//   }, [controls])

//   const DesktopVersion = () => (
//     <section className="relative min-h-screen bg-sand dark:bg-jungle overflow-hidden">
//       {/* Background code symbols */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute w-full h-full">
//           {[...Array(20)].map((_, i) => (
//             <motion.div
//               key={i}
//               className="absolute text-terra/5 dark:text-terra-dark/5"
//               initial={{ opacity: 0 }}
//               animate={{
//                 opacity: [0.3, 0.6, 0.3],
//                 y: [0, -20, 0],
//                 rotate: [0, i % 2 === 0 ? 360 : -360],
//               }}
//               transition={{
//                 duration: 8,
//                 delay: i * 0.5,
//                 repeat: Number.POSITIVE_INFINITY,
//                 repeatType: "reverse",
//               }}
//               style={{
//                 left: `${Math.random() * 100}%`,
//                 top: `${Math.random() * 100}%`,
//                 fontSize: `${Math.random() * 40 + 20}px`,
//               }}
//             >
//               {["function()", "const", "let", "=>", "</>", "{}", "[]"][i % 7]}
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-start">
//           {/* Left Column */}
//           <div className="space-y-12">
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.5 }}
//               className="space-y-8"
//             >
//               <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-jungle dark:text-sand leading-tight">
//                 Aprenda Programação de Forma Simples e Prática!
//               </h1>

//               <p className="text-base sm:text-lg md:text-xl text-jungle-dark dark:text-sand-light flex items-center gap-2">
//                 <span className="text-xl sm:text-2xl">🔥</span>
//                 Aula experimental gratuita de 2h + suporte completo para sua carreira!
//               </p>

//               <motion.a
//                 href="https://wa.me/71987257532?text=Olá! Gostaria de agendar minha aula experimental gratuita!"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-flex items-center px-8 py-4 bg-terra hover:bg-terra-dark text-white rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 <MessageCircle className="mr-2 h-5 w-5" />
//                 Quero minha aula gratuita!
//               </motion.a>

//               {/* Features Grid */}
//               <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//                 {features.map((feature, index) => (
//                   <motion.div
//                     key={index}
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.5, delay: index * 0.1 }}
//                     className="flex flex-col items-center text-center space-y-2"
//                   >
//                     <feature.icon className="h-8 w-8 text-terra" />
//                     <span className="text-sm text-jungle dark:text-sand">{feature.text}</span>
//                   </motion.div>
//                 ))}
//               </div>
//             </motion.div>

//             {/* Stats Grid - Two rows of four cards */}
//             <div className="w-full space-y-2">
//               {/* First Row */}
//               <div className="flex gap-2">
//                 {stats.slice(0, 4).map((stat, index) => (
//                   <motion.div
//                     key={index}
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.5, delay: index * 0.1 }}
//                     className="flex-1 bg-white/80 dark:bg-jungle-dark/80 backdrop-blur-sm p-6 rounded-lg text-center min-w-[180px]"
//                   >
//                     <stat.icon className="h-8 w-8 text-terra mx-auto mb-2" />
//                     <div className="text-2xl font-bold text-jungle dark:text-sand">{stat.count}</div>
//                     <div className="text-sm text-jungle-dark dark:text-sand-light">{stat.label}</div>
//                   </motion.div>
//                 ))}
//               </div>

//               {/* Second Row */}
//               <div className="flex gap-2">
//                 {stats.slice(4).map((stat, index) => (
//                   <motion.div
//                     key={`additional-${index}`}
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.5, delay: (index + 4) * 0.1 }}
//                     className="flex-1 bg-white/80 dark:bg-jungle-dark/80 backdrop-blur-sm p-6 rounded-lg text-center min-w-[180px]"
//                   >
//                     <stat.icon className="h-8 w-8 text-terra mx-auto mb-2" />
//                     <div className="text-2xl font-bold text-jungle dark:text-sand">{stat.count}</div>
//                     <div className="text-sm text-jungle-dark dark:text-sand-light">{stat.label}</div>
//                   </motion.div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Right Column with Testimonials */}
//           <div className="relative flex items-start justify-center h-full w-full lg:ml-auto">
//             <motion.div
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.5, delay: 0.2 }}
//               className="relative z-10 w-full"
//             >
//               <TestimonialBubbles isMobile={isMobile} />
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )

//   const MobileVersion = () => (
//     <section className="bg-sand dark:bg-jungle min-h-screen px-4 py-6 overflow-hidden">
//       <div className="space-y-4">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="space-y-4"
//         >
//           <h1 className="text-2xl font-bold text-jungle dark:text-sand leading-tight">
//             Aprenda Programação de Forma Simples e Prática!
//           </h1>

//           <p className="text-base text-jungle-dark dark:text-sand-light flex items-center gap-2">
//             <span className="text-xl">🔥</span>
//             Aula experimental gratuita de 2h + suporte completo para sua carreira!
//           </p>

//           <motion.a
//             href="https://wa.me/71987257532?text=Olá! Gostaria de agendar minha aula experimental gratuita!"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="inline-flex items-center justify-center w-full px-4 py-2 bg-terra hover:bg-terra-dark text-white rounded-full text-sm font-semibold transition-all duration-300"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <MessageCircle className="mr-2 h-4 w-4" />
//             Quero minha aula gratuita!
//           </motion.a>
//         </motion.div>
//         {/* Features Grid */}
//         <div className="grid grid-cols-2 gap-2">
//           {features.map((feature, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               className="flex flex-col items-center text-center space-y-1 bg-white/80 dark:bg-jungle-dark/80 p-2 rounded-lg"
//             >
//               <feature.icon className="h-5 w-5 text-terra" />
//               <span className="text-xs text-jungle dark:text-sand">{feature.text}</span>
//             </motion.div>
//           ))}
//         </div>
//         {/* Stats Grid */}
//         <div className="grid grid-cols-2 gap-3">
//           {stats.slice(0, 4).map((stat, index) => (
//             <motion.div
//               key={index}
//               custom={index}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               className="bg-white/80 dark:bg-jungle-dark/80 backdrop-blur-sm p-2 rounded-lg text-center"
//             >
//               <stat.icon className="h-4 w-4 text-terra mx-auto mb-1" />
//               <div className="text-sm font-bold text-jungle dark:text-sand">{stat.count}</div>
//               <div className="text-xs text-jungle-dark dark:text-sand-light">{stat.label}</div>
//             </motion.div>
//           ))}
//         </div>
//         {/* Mobile Testimonials */}
//         <div className="mt-2">
//           <h2 className="text-xl font-bold text-jungle dark:text-sand mb-2">O que dizem nossos alunos</h2>
//           <div className="h-[500px]">
//             <TestimonialBubbles isMobile={true} />
//           </div>
//         </div>
//       </div>
//     </section>
//   )

//   return isMobile ? <MobileVersion /> : <DesktopVersion />
// }

// export default TeachingHero

"use client"

import { useState, useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import {
  MessageCircle,
  Code,
  Users,
  Clock,
  Star,
  Sparkles,
  Trophy,
  Video,
  FileText,
  HandshakeIcon,
  FolderGit2,
  FileCode,
} from "lucide-react"
import TestimonialBubbles from "./Testemunhas"

const stats = [
  {
    icon: Users,
    count: "500+",
    label: "Alunos Formados",
  },
  {
    icon: Video,
    count: "50+",
    label: "Lives Realizadas",
  },
  {
    icon: Sparkles,
    count: "100+",
    label: "Workshops",
  },
  {
    icon: Trophy,
    count: "97%",
    label: "Satisfação",
  },
  {
    icon: HandshakeIcon,
    count: "100+",
    label: "Consultorias Realizadas",
  },
  {
    icon: FileText,
    count: "500+",
    label: "Conteúdos Disponíveis",
  },
  {
    icon: FolderGit2,
    count: "20+",
    label: "Projetos Realizados",
  },
  {
    icon: FileCode,
    count: "20+",
    label: "Contratos Fechados",
  },
]

const features = [
  {
    icon: Code,
    text: "Projetos Práticos",
  },
  {
    icon: Users,
    text: "Aulas Personalizadas",
  },
  {
    icon: Clock,
    text: "Horários Flexíveis",
  },
  {
    icon: Star,
    text: "Suporte Contínuo",
  },
]

const TeachingHero = () => {
  const controls = useAnimation()
  const [isVisible, setIsVisible] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    // Start animations immediately
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    })
    setIsVisible(true)

    return () => window.removeEventListener("resize", handleResize)
  }, [controls])

  const DesktopVersion = () => (
    <section className="relative min-h-screen bg-sand dark:bg-jungle overflow-hidden">
      {/* Background code symbols */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-terra/5 dark:text-terra-dark/5"
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0.3, 0.6, 0.3],
                y: [0, -20, 0],
                rotate: [0, i % 2 === 0 ? 360 : -360],
              }}
              transition={{
                duration: 8,
                delay: i * 0.5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                fontSize: `${Math.random() * 40 + 20}px`,
              }}
            >
              {["function()", "const", "let", "=>", "</>", "{}", "[]"][i % 7]}
            </motion.div>
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-start">
          {/* Left Column */}
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-jungle dark:text-sand leading-tight">
                Aprenda Programação de Forma Simples e Prática!
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-jungle-dark dark:text-sand-light flex items-center gap-2">
                <span className="text-xl sm:text-2xl">🔥</span>
                Aula experimental gratuita de 2h + suporte completo para sua carreira!
              </p>

              <motion.a
                href="https://wa.me/71987257532?text=Olá! Gostaria de agendar minha aula experimental gratuita!"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-terra hover:bg-terra-dark text-white rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Quero minha aula gratuita!
              </motion.a>

              {/* Features Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex flex-col items-center text-center space-y-2"
                  >
                    <feature.icon className="h-8 w-8 text-terra" />
                    <span className="text-sm text-jungle dark:text-sand">{feature.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Stats Grid - Two rows of four cards */}
            <div className="w-full space-y-2">
              {/* First Row */}
              <div className="flex gap-2">
                {stats.slice(0, 4).map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex-1 bg-white/80 dark:bg-jungle-dark/80 backdrop-blur-sm p-6 rounded-lg text-center min-w-[180px]"
                  >
                    <stat.icon className="h-8 w-8 text-terra mx-auto mb-2" />
                    <div className="text-2xl font-bold text-jungle dark:text-sand">{stat.count}</div>
                    <div className="text-sm text-jungle-dark dark:text-sand-light">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Second Row */}
              <div className="flex gap-2">
                {stats.slice(4).map((stat, index) => (
                  <motion.div
                    key={`additional-${index}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: (index + 4) * 0.1 }}
                    className="flex-1 bg-white/80 dark:bg-jungle-dark/80 backdrop-blur-sm p-6 rounded-lg text-center min-w-[180px]"
                  >
                    <stat.icon className="h-8 w-8 text-terra mx-auto mb-2" />
                    <div className="text-2xl font-bold text-jungle dark:text-sand">{stat.count}</div>
                    <div className="text-sm text-jungle-dark dark:text-sand-light">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column with Testimonials */}
          <div className="relative flex items-start justify-center h-full w-full lg:ml-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative z-10 w-full"
            >
              <TestimonialBubbles isMobile={isMobile} />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )

  const MobileVersion = () => (
    <section className="bg-sand dark:bg-jungle min-h-screen px-4 py-6 overflow-hidden">
      <div className="space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <h1 className="text-2xl font-bold text-jungle dark:text-sand leading-tight">
            Aprenda Programação de Forma Simples e Prática!
          </h1>

          <p className="text-base text-jungle-dark dark:text-sand-light flex items-center gap-2">
            <span className="text-xl">🔥</span>
            Aula experimental gratuita de 2h + suporte completo para sua carreira!
          </p>

          <motion.a
            href="https://wa.me/71987257532?text=Olá! Gostaria de agendar minha aula experimental gratuita!"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-full px-4 py-2 bg-terra hover:bg-terra-dark text-white rounded-full text-sm font-semibold transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <MessageCircle className="mr-2 h-4 w-4" />
            Quero minha aula gratuita!
          </motion.a>
        </motion.div>
        {/* Features Grid */}
        <div className="grid grid-cols-2 gap-2">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center space-y-1 bg-white/80 dark:bg-jungle-dark/80 p-2 rounded-lg"
            >
              <feature.icon className="h-5 w-5 text-terra" />
              <span className="text-xs text-jungle dark:text-sand">{feature.text}</span>
            </motion.div>
          ))}
        </div>
        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-3">
          {stats.slice(0, 4).map((stat, index) => (
            <motion.div
              key={index}
              custom={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/80 dark:bg-jungle-dark/80 backdrop-blur-sm p-2 rounded-lg text-center"
            >
              <stat.icon className="h-4 w-4 text-terra mx-auto mb-1" />
              <div className="text-sm font-bold text-jungle dark:text-sand">{stat.count}</div>
              <div className="text-xs text-jungle-dark dark:text-sand-light">{stat.label}</div>
            </motion.div>
          ))}
        </div>
        {/* Mobile Testimonials */}
        <div className="mt-2">
          <h2 className="text-xl font-bold text-jungle dark:text-sand mb-2">O que dizem nossos alunos</h2>
          <div className="h-[350px]">
            <TestimonialBubbles isMobile={true} />
          </div>
        </div>
      </div>
    </section>
  )

  return isMobile ? <MobileVersion /> : <DesktopVersion />
}

export default TeachingHero

