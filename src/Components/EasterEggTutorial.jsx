// "use client"

// import { useState, useEffect } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import { ChevronRight, X } from "lucide-react"

// const tutorialSteps = [
//   {
//     title: "Bem-vindo ao Tour dos Easter Eggs!",
//     description: "Existem vários easter eggs escondidos neste site. Vamos te dar algumas dicas para encontrá-los!",
//     location: "center",
//   },
//   {
//     title: "Hero Section",
//     description: "Há um easter egg escondido aqui. Tente clicar em algo que representa você.",
//     location: "top",
//   },
//   {
//     title: "Sobre Mim",
//     description:
//       "Esta seção tem dois easter eggs! Um deles é uma sequência de teclas famosa, e o outro está relacionado ao meu passado.",
//     location: "center",
//   },
//   {
//     title: "Projetos",
//     description: "Explore bem esta seção. Há uma surpresa escondida em um dos projetos!",
//     location: "bottom",
//   },
//   {
//     title: "Final do Tour",
//     description: "Isso é tudo! Mas fique atento, pode haver mais segredos por aí. Divirta-se explorando!",
//     location: "center",
//   },
// ]

// const EasterEggTutorial = () => {
//   const [showTutorial, setShowTutorial] = useState(true)
//   const [currentStep, setCurrentStep] = useState(0)

//   useEffect(() => {
//     const hasSeenTutorial = localStorage.getItem("hasSeenEasterEggTutorial")
//     if (hasSeenTutorial) {
//       setShowTutorial(false)
//     }
//   }, [])

//   const handleSkipTutorial = () => {
//     setShowTutorial(false)
//     localStorage.setItem("hasSeenEasterEggTutorial", "true")
//   }

//   const handleNextStep = () => {
//     if (currentStep < tutorialSteps.length - 1) {
//       setCurrentStep(currentStep + 1)
//     } else {
//       handleSkipTutorial()
//     }
//   }

//   if (!showTutorial) return null

//   return (
//     <AnimatePresence>
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         exit={{ opacity: 0 }}
//         className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
//       >
//         <motion.div
//           initial={{ y: 50, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           exit={{ y: 50, opacity: 0 }}
//           className={`bg-white dark:bg-jungle rounded-lg shadow-xl p-6 max-w-md mx-4 ${
//             tutorialSteps[currentStep].location === "top"
//               ? "mt-20"
//               : tutorialSteps[currentStep].location === "bottom"
//                 ? "mb-20"
//                 : ""
//           }`}
//         >
//           <div className="flex justify-between items-center mb-4">
//             <h2 className="text-2xl font-bold text-jungle dark:text-sand">{tutorialSteps[currentStep].title}</h2>
//             <button
//               onClick={handleSkipTutorial}
//               className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
//             >
//               <X size={24} />
//             </button>
//           </div>
//           <p className="text-jungle dark:text-sand mb-6">{tutorialSteps[currentStep].description}</p>
//           <div className="flex justify-between items-center">
//             <button
//               onClick={handleSkipTutorial}
//               className="text-terra hover:text-terra-dark dark:text-terra-light dark:hover:text-terra"
//             >
//               Pular tour
//             </button>
//             <button
//               onClick={handleNextStep}
//               className="bg-terra hover:bg-terra-dark text-white dark:bg-terra-dark dark:hover:bg-terra dark:text-sand px-4 py-2 rounded-full flex items-center"
//             >
//               {currentStep < tutorialSteps.length - 1 ? "Próximo" : "Finalizar"}
//               <ChevronRight size={20} className="ml-2" />
//             </button>
//           </div>
//         </motion.div>
//       </motion.div>
//     </AnimatePresence>
//   )
// }

// export default EasterEggTutorial

