import { motion } from "framer-motion"
import { ArrowRight, Handshake } from "lucide-react"
import { Link } from "react-router-dom"
const Partnerships = () => {
  return (
    <section id="parceria" className="bg-sand dark:bg-jungle py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white dark:bg-jungle-dark rounded-3xl shadow-2xl overflow-hidden"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left side - Image and decorative elements */}
            <div className="relative h-64 md:h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-terra to-jungle dark:from-terra-dark dark:to-jungle-dark opacity-90"></div>
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="Partnerships"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <Handshake size={80} className="text-white dark:text-sand" />
              </div>
            </div>

            {/* Right side - Content */}
            <div className="p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-jungle dark:text-jungle mb-4">
                Vamos fazer uma troca?
              </h2>
              <p className="text-jungle-dark dark:text-sand mb-6">
                Conhecimento é a moeda mais valiosa. Através de parcerias, consegui minha identidade visual, criação e
                edição de reels, e muito mais! Você pode conseguir:
              </p>
              <ul className="space-y-3 mb-8">
                {["Web Design", "Aulas particulares", "Consultoria", "Desenvolvimento", "Copywriter", "SDR"].map(
                  (item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center text-jungle dark:text-jungle"
                    >
                      <ArrowRight size={20} className="mr-2 text-terra dark:text-terra" />
                      {item}
                    </motion.li>
                  ),
                )}
              </ul>
              <Link to="/parceria">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-terra hover:bg-terra-dark dark:bg-terra-dark dark:hover:bg-terra text-white dark:text-sand font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
              >
                Iniciar Parceria
              </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Partnerships

