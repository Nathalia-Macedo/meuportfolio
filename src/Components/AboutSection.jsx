import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import eu from "../Assets/eu 2020.jpg"
import eu2 from '../Assets/eu 2021.jpg'
import eu3 from '../Assets/eu2022.jpg'
import eu4 from '../Assets/TOTVS.jpg'
import eu5 from '../Assets/hackaton.jpg'
import eu6 from '../Assets/eu linda.jpg'
import KonamiEasterEgg from "./KonamiEE"
import PeanutEasterEgg from "./PeanutEE"
const timelineEvents = [
  {
    year: "2020",
    title: "Início da Jornada",
    description:
      "Minha jornada profissional começou aos 18 anos, vendendo amendoim nos ônibus e praias de Salvador. Aquele começo foi bem inusitado, mas me ensinou muito sobre comunicação e empatia. Meu primeiro emprego formal foi como auxiliar administrativo numa revenda da Brasilgás. Eu sempre tive o sonho de ser a versão feminina do Tony Stark, e contava isso para todos, buscando mostrar que eu não queria que as pessoas tivessem pena de mim, mas sim entendessem minha determinação.",
    image: eu,
  },
  {
    year: "2021",
    title: "Explorando Novas Experiências",
    description:
      "Passei por diversas experiências profissionais, como atendente no Burger King e auxiliar de cabeleireiro. Continuei vendendo no ônibus, sempre buscando aprender mais sobre o mundo ao meu redor. Cada experiência me trouxe novos aprendizados e habilidades que seriam valiosos no futuro.",
    image: eu2,
  },
  {
    year: "2022",
    title: "Descobrindo a Programação",
    description:
      "Aos 19 anos, entrei na Infinity School como aluna. Comecei em junho, mas meu curso só começava em outubro. Como eu não tinha computador, estudava na Infinity todos os dias, da abertura ao fechamento, de segunda a domingo. Foi ali que meu amor pela programação se consolidou. E o esforço valeu a pena: no meu primeiro mês, conquistei o top 1 da turma! Três meses depois, me tornei monitora, um dos dias mais felizes da minha vida.",
    image: eu3,
  },
  {
    year: "2023",
    title: "Primeiros Passos na Carreira",
    description:
      "Depois de quatro meses na Infinity, comecei a dar aulas particulares no SuperProf e Profes. Em setembro, recebi a oportunidade de estagiar como desenvolvedora na TOTVS, meu primeiro trabalho 100% remoto. Estava com as aulas particulares e também na TOTVS quando a Infinity me chamou para ser professora. Em dezembro, comecei a ensinar front end na Infinity.",
    image: eu4,
  },
  {
    year: "2024",
    title: "Crescimento e Reconhecimento",
    description:
      "Participei do meu primeiro hackathon e fiquei em 3º lugar, uma experiência incrível que ampliou meus horizontes. Comecei a trabalhar remotamente na Alaska Digital, uma agência de landing pages, como SDR. Também me aventurei no 99freelas, montei minha própria empresa e fechei contratos que geraram 80 mil reais em dois meses. Dei mais de 100 workshops e mais de 50 lives! Em outubro, surgiu a chance de ser professora na sede de São Paulo da Infinity.",
    image: eu5,
  },
  {
    year: "2025",
    title: "Consolidação da Carreira",
    description:
      "Em janeiro, cheguei a São Paulo para assumir minha nova posição na Infinity. Fui promovida a copywriter na Alaska Digital, sem deixar de lado meu trabalho como SDR. Criei meu perfil profissional no Instagram (nath_dev_), fechei parcerias, comecei a mexer com web design e a desenvolver minha própria identidade profissional. Hoje, fecho vários projetos pelo 99freelas e tenho minha agenda lotada de alunos particulares.",
    image: eu6,
  },
]

const About = () => {
  const [activeEvent, setActiveEvent] = useState(0)

  return (
    <section
      id="about"
      className="bg-sand dark:bg-jungle text-jungle dark:text-sand py-12 transition-colors duration-300 relative"
    >
      <KonamiEasterEgg />
      <PeanutEasterEgg />
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center tracking-[0.15em]">Minha Jornada</h2>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Timeline Navigation */}
          <div className="w-full lg:w-1/4">
            <div className="sticky top-24 flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0">
              {timelineEvents.map((event, index) => (
                <motion.button
                  key={index}
                  className={`flex-shrink-0 w-auto lg:w-full text-left p-3 rounded-lg transition-colors duration-300 ${
                    index === activeEvent ? "bg-terra text-sand" : "bg-sand dark:bg-jungle hover:bg-terra/20"
                  }`}
                  onClick={() => setActiveEvent(index)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-bold">{event.year}</span>
                    <span className="text-sm font-medium hidden lg:inline">{event.title}</span>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Content Area */}
          <div className="w-full lg:w-3/4">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeEvent}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-sand dark:bg-jungle rounded-lg shadow-lg overflow-hidden"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Image */}
                  <div className="relative h-[300px] md:h-full">
                    <img
                      src={timelineEvents[activeEvent].image || "/placeholder.svg"}
                      alt={timelineEvents[activeEvent].title}
                      className="absolute inset-0 w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent">
                      <div className="absolute bottom-0 left-0 p-6">
                        <h3 className="text-2xl font-bold text-white mb-2">{timelineEvents[activeEvent].title}</h3>
                        <p className="text-white/80 text-sm">{timelineEvents[activeEvent].year}</p>
                      </div>
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="p-6">
                    <p className="text-lg leading-relaxed">{timelineEvents[activeEvent].description}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-8 text-center"
        >
          <p className="text-xl font-semibold text-terra">
            E essa sou eu, buscando sempre aprender, crescer e compartilhar tudo o que aprendo.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default About

