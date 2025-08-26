import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Book, Code, Brain, TrendingUp, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const ContentCard = ({ icon: Icon, title, description, delay }) => (
  <motion.div
    className="bg-white dark:bg-jungle/20 backdrop-blur-sm p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center border border-transparent dark:border-sand/10"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
  >
    <Icon className="w-12 h-12 text-terra mb-4" />
    <h3 className="text-xl font-semibold text-jungle dark:text-sand mb-2 transition-colors duration-300">{title}</h3>
    <p className="text-gray-600 dark:text-sand/80 transition-colors duration-300">{description}</p>
  </motion.div>
)

const ContentHub = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  const contents = [
    {
      icon: Book,
      title: "Artigos e Guias",
      description: "Aprenda do zero ao avançado com conteúdo prático e acessível.",
    },
    {
      icon: Code,
      title: "Projetos Interativos",
      description: "Coloque a mão no código e evolua na prática com projetos reais.",
    },
    {
      icon: Brain,
      title: "Quizzes Desafiadores",
      description: "Teste seu conhecimento e reforce o aprendizado de forma divertida.",
    },
    {
      icon: TrendingUp,
      title: "Dicas do Mercado",
      description: "Destaque-se e conquiste oportunidades com insights valiosos.",
    },
  ]

  return (
    <section id="conteudos" className="bg-sand dark:bg-jungle py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center text-jungle dark:text-sand mb-8 transition-colors duration-300"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          💡 Explore, Aprenda e Pratique! 🚀
        </motion.h2>
        <motion.p
          className="text-xl text-center text-gray-700 dark:text-sand/90 mb-12 max-w-3xl mx-auto transition-colors duration-300"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Bem-vindo(a) ao meu hub de conteúdos! Aqui, você encontra tudo o que precisa para dominar programação, design e o mercado tech de forma dinâmica e envolvente.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contents.map((content, index) => (
            <ContentCard key={index} {...content} delay={0.3 + index * 0.1} />
          ))}
        </div>
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <Link
            to="/aula05"
            className="inline-flex items-center px-6 py-3 bg-terra hover:bg-terra/90 text-white font-semibold rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            onMouseEnter={() => setHoveredIndex(0)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            Aula 5 de HTML/CSS
            <motion.div
              animate={{ x: hoveredIndex === 0 ? 5 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronRight className="ml-2 w-6 h-6" />
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default ContentHub