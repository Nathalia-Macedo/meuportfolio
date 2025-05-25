import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect, useRef } from "react"

const testimonials = [
  {
    id: 1,
    name: "Clara",
    avatar: "C",
    text: "Nathália é uma professora maravilhosa!!! Tem uma ótimaa didática, explica tudo nos termos mais simples, fazendo você não só entender como ficar empolgado com o assunto!!!! Nath cria um plano de estudo com exercícios e slides personalizados, é prestativa, educada, gentil, competente, paciente e carismática!! Não poderia recomendar mais!!!!",
  },
  {
    id: 2,
    name: "Alice",
    avatar: "A",
    text: "Gostei bastante da didática abordada, muito pertinente e de fácil assimilação. Já me passou muita segurança e boas perspectivas para o decorrer do meu aprendizado. Sensacional!",
  },
  {
    id: 3,
    name: "Almir",
    avatar: "P",
    text: "Nathalia, a aula sobre Python, Rest foi incrível! Senti que aprendi muito sobre essa linguagem com simplicidade e uma dinâmica fora do padrão de forma clara e envolvente. Tua habilidade em ensinar, e a flexibilidade foi impressionante.",
  },
  {
    id: 4,
    name: "Hilderico",
    avatar: "H",
    text: "Excelente professora, sempre utiliza de uma ótima didática e possui muita habilidade para transmitir os conteúdos.",
  },
  {
    id: 5,
    name: "Mary",
    avatar: "M",
    text: "Conheci a Nathalia quando já pensava em desistir do curso. Ela tem uma otima didatica para ensinar. O material das aula bem estruturado com conteudo detalhando e exercicios para fixação. Me ensinou HTML, Css e JavaScript.",
  },
  {
    id: 6,
    name: "Gabriel",
    avatar: "G",
    text: "Uma ótima professora, tem uma metodologia de ensino fantástica!!! Recomendo bastante para você que está entrando nesse mundo maravilhoso da programação!!!",
  },
  {
    id: 7,
    name: "Moisés Solares",
    avatar: "M",
    text: "Super eficiente em explicações, ensina de uma forma dinâmica e bem completa, cada detalhe é abordado por ela de forma facilmente compreensível.",
  },
]

const TestimonialBubbles = ({ isMobile = false }) => {
  const [activeTestimonialIndex, setActiveTestimonialIndex] = useState(0)
  const scrollRef = useRef(null)

  useEffect(() => {
    if (!isMobile) {
      const timer = setInterval(() => {
        setActiveTestimonialIndex((prev) => (prev + 1) % testimonials.length)
      }, 5000)

      return () => clearInterval(timer)
    }
  }, [isMobile])

  // Mobile version
  if (isMobile) {
    return (
      <div className="w-full px-4">
        <div className="flex flex-col h-[400px]">
          <div
            ref={scrollRef}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide space-x-2"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.id} className="flex-shrink-0 w-[250px] snap-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white dark:bg-jungle-dark rounded-lg shadow-xl p-3 h-full flex flex-col"
                >
                  <div className="flex items-center mb-1">
                    <div className="w-6 h-6 rounded-full bg-terra text-white flex items-center justify-center mr-2">
                      {testimonial.avatar}
                    </div>
                    <span className="font-semibold text-sm text-jungle dark:text-sand">{testimonial.name}</span>
                  </div>
                  <p className="text-xs text-jungle-dark dark:text-sand-light mb-1 flex-grow break-words overflow-y-auto">
                    {testimonial.text}
                  </p>
                  <div className="flex mt-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-4 mb-2 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (scrollRef.current) {
                    scrollRef.current.scrollTo({
                      left: index * 250, // Updated scroll position
                      behavior: "smooth",
                    })
                  }
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  activeTestimonialIndex === index ? "bg-terra w-4" : "bg-terra/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    )
  }

  // Desktop version (circular layout)
  const radius = 220
  const centerX = 300
  const centerY = 200

  return (
    <div className="relative w-[600px] h-[500px]">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-terra/10"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 8,
              delay: i * 1.5,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 30 + 20}px`,
            }}
          >
            {["{}", "</>", "[]", "()", "//"][i]}
          </motion.div>
        ))}
      </div>

      {/* Fixed Central Testimonial Display */}
      <div
        className="absolute"
        style={{ left: `${centerX}px`, top: `${centerY}px`, transform: "translate(-50%, -50%)" }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTestimonialIndex}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
            className="w-72 bg-white dark:bg-jungle-dark rounded-lg shadow-xl p-4"
          >
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 rounded-full bg-terra text-white flex items-center justify-center mr-2">
                {testimonials[activeTestimonialIndex].avatar}
              </div>
              <span className="font-semibold text-jungle dark:text-sand">
                {testimonials[activeTestimonialIndex].name}
              </span>
            </div>
            <p className="text-sm text-jungle-dark dark:text-sand-light">{testimonials[activeTestimonialIndex].text}</p>
            <div className="flex mt-2">
              {[...Array(5)].map((_, i) => (
                <motion.svg
                  key={i}
                  className="w-4 h-4 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </motion.svg>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Testimonial Bubbles Circle */}
      {testimonials.map((testimonial, index) => {
        const angle = (index * 2 * Math.PI) / testimonials.length
        const x = centerX + radius * Math.cos(angle)
        const y = centerY + radius * Math.sin(angle)

        return (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: 1,
              scale: 1,
              x: x - 24,
              y: y - 24,
              transition: { delay: index * 0.1 },
            }}
            className="absolute z-[40]"
          >
            <motion.div
              animate={{
                scale: activeTestimonialIndex === index ? 1.1 : 1,
                transition: { duration: 0.3 },
              }}
              className={`w-12 h-12 rounded-full bg-terra text-white flex items-center justify-center cursor-pointer
                ${activeTestimonialIndex === index ? "ring-4 ring-terra-light" : ""}`}
              onClick={() => setActiveTestimonialIndex(index)}
            >
              {testimonial.avatar}
            </motion.div>
          </motion.div>
        )
      })}
    </div>
  )
}

export default TestimonialBubbles

