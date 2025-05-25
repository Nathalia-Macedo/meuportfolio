import { motion } from "framer-motion"
import { Code2, Target, Lightbulb, Binary, Braces, Terminal } from "lucide-react"

const opportunityData = [
  {
    icon: Code2,
    title: "Iniciantes na Programação",
    description: "Quem quer entrar no mercado de programação, mas não sabe por onde começar",
    bgSymbols: ["</>", "{ }", "()"],
  },
  {
    icon: Target,
    title: "Estudantes Buscando Prática",
    description: "Quem já estuda, mas sente que falta prática e direcionamento",
    bgSymbols: ["for()", "if()", "=>"],
  },
  {
    icon: Lightbulb,
    title: "Aspirantes a Emprego",
    description: "Quem quer aumentar suas chances de conseguir um emprego na área",
    bgSymbols: ["[]", "++", "{}"],
  },
]

const OpportunityCard = ({ icon: Icon, title, description, bgSymbols }) => (
  <motion.div
    className="relative bg-white dark:bg-jungle/90 backdrop-blur-sm p-8 rounded-lg shadow-lg h-full flex flex-col overflow-hidden border border-transparent dark:border-sand/10 transition-all duration-300"
    whileHover={{ y: -5 }}
    transition={{ duration: 0.2 }}
  >
    {/* Background decorative elements */}
    <div className="absolute inset-0 overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-white/95 to-white/90 dark:from-jungle/95 dark:via-jungle/90 dark:to-jungle/85 transition-colors duration-300" />

      {/* Animated code symbols */}
      {bgSymbols.map((symbol, index) => (
        <motion.div
          key={index}
          className="absolute text-terra/5 dark:text-terra/10 transition-colors duration-300"
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0.1, 0.3, 0.1],
            x: [0, 10, 0],
            y: [0, -10, 0],
            rotate: [0, index % 2 === 0 ? 10 : -10, 0],
          }}
          transition={{
            duration: 5,
            delay: index * 0.5,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
          style={{
            left: `${(index + 1) * 25}%`,
            top: `${(index + 1) * 30}%`,
            fontSize: `${Math.random() * 20 + 30}px`,
          }}
        >
          {symbol}
        </motion.div>
      ))}

      {/* Decorative circles */}
      <motion.div
        className="absolute -right-8 -bottom-8 w-32 h-32 bg-terra/5 dark:bg-terra/10 rounded-full transition-colors duration-300"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="absolute -left-4 -top-4 w-24 h-24 bg-jungle/5 dark:bg-sand/5 rounded-full transition-colors duration-300"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />
    </div>

    {/* Content */}
    <div className="relative z-10">
      <Icon className="w-12 h-12 text-terra mb-6" strokeWidth={1.5} />
      <h3 className="text-xl font-bold mb-4 text-jungle dark:text-sand transition-colors duration-300">{title}</h3>
      <p className="text-jungle/80 dark:text-sand/80 text-lg transition-colors duration-300">{description}</p>
    </div>
  </motion.div>
)

const OpportunitySection = () => {
  return (
    <section className="py-20 bg-sand dark:bg-jungle relative overflow-hidden transition-colors duration-300">
      {/* Background patterns */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-sand via-terra/5 to-jungle/5 dark:from-jungle dark:via-terra/10 dark:to-sand/5 transition-colors duration-300" />
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-terra/20 dark:text-terra/30 transition-colors duration-300"
            animate={{
              x: [0, 50, 0],
              y: [0, -30, 0],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              delay: i * 0.5,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            {[<Binary key="1" />, <Braces key="2" />, <Terminal key="3" />][i % 3]}
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-16 text-jungle dark:text-sand transition-colors duration-300"
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
          className="mt-12 text-center text-xl text-jungle dark:text-sand transition-colors duration-300"
        >
          Não importa em qual grupo você se encaixa, temos a solução perfeita para você!
        </motion.p>
      </div>
    </section>
  )
}

export default OpportunitySection
