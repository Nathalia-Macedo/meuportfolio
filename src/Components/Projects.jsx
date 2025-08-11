import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Slider from "react-slick"
import { ChevronLeft, ChevronRight, Candy } from 'lucide-react'
import nick from '../Assets/nick.png'
import nickCard from "../Assets/nickCard.png"
import vermaisBG from '../Assets/vermaisBG.png'
// Importe os estilos do react-slick
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import nutriCard from "../Assets/nutriCard.png"
import nutri from "../Assets/nutri.png"
import uni from "../Assets/unitech.png"
import uni1 from "../Assets/unitech1.png"
import erion from "../Assets/erion.png"
import erion1 from "../Assets/erion1.png"
import aguia from "../Assets/aguias.png"
import aguia1 from "../Assets/aguias1.png"
import integral from "../Assets/integral.png"
import integral1 from "../Assets/integral1.png"
import MSCard from '../Assets/MSCard.png'
import MSBG from '../Assets/MSBG.png'
import bizmodBG from '../Assets/bizmodBG.png'
import bizmodCard from '../Assets/bizmodCard.png'
import objetiva from '../Assets/objetiva.png'
import objcard from '../Assets/objetivaCard.png'
import vermaisMobile from '../Assets/vermaisMobile.png'
const projects = [
  {
    id: 1,
    title: "Landing Page Objetiva",
    subtitle: "Landing Page de Construtora",
    description:
      "Projeto onde atuei como desenvolvedora Full Stack, desde a criação do banco a desenvolvimento do Front. No Back End foi utilizado Flask, Supabase para hospedagem do banco e Cloudinary para armazenamento das imagens adicionadas!",
    cardImage: objcard,
    backgroundImage: objetiva,
    backgroundColor: "#E3DACD",
    textColor: "#2D4C3B",
    roles: ["development"],
    link: "https://www.objengenharia.com.br/",
    stats: {
      year: "2025",
      duration: "3 semanas",
      type: "Full Stack",
    },
  },
  {
    id: 2,
    title: "Ver Mais Brasil",
    subtitle: "Site institucional do projeto Ver Mais Brasil",
    description:
      "Esse projeto veio por meio da indicação de um aluno.",
    cardImage: vermaisMobile,
    backgroundImage: vermaisBG,
    backgroundColor: "#E3DACD",
    textColor: "#2D4C3B",
    roles: ["development","design","copywriting"],
    link: "https://vermaisbrasil.com.br",
    stats: {
      year: "2025",
      duration: "1 dia",
      type: "Front End",
    },
  },
  {
    id: 3,
    title: "Publi X Agency",
    subtitle: "Landing Page de Agência de Marketing",
    description:
      "Resultado de uma parceria entre @nickpubli e @nath_dev_. Ela me ajudou com meu instagram, e em troca, criei o site da landing page dela!",
    cardImage: nickCard,
    backgroundImage: nick,
    backgroundColor: "#E3DACD",
    textColor: "#2D4C3B",
    roles: ["development","design"],
    link: "https://publix.vercel.app",
    stats: {
      year: "2025",
      duration: "1 semana",
      type: "Front End",
    },
  },
  {
    id: 3,
    title: "Sistema de Gerenciamento de Talentos MegaStage",
    subtitle: "Gerenciamento do site e talentos da MegaStage",
    description:
      "Esse projeto veio através da indicação de um aluno que trabalha na MegaStage, o site e o sistema desenvolvidos por mim e pelo Renan, o Back end da minha equipe, Renan Teixeira!",
    cardImage: MSCard,
    backgroundImage: MSBG,
    backgroundColor: "#E3DACD",
    textColor: "#2D4C3B",
    roles: ["development", "design", "copywriting"],
    link: "https://mega-stage-real.vercel.app/",
    stats: {
      year: "2025",
      duration: "Em desenvolvimento",
      type: "Front End com integração a API",
    },
  },
  {
    id: 4,
    title: "Landing Page Biz One",
    subtitle: "Landing page integrada com o pixel da meta, e a API do Salesforce, e verificação de Automação do Google.",
    description:
      "Esse projeto foi indicação de uma aluna particular",
    cardImage: bizmodCard,
    backgroundImage:bizmodBG ,
    backgroundColor: "#E3DACD",
    textColor: "#2D4C3B",
    roles: ["development"],
    link: "https://www.bizmod.com.br/",
    stats: {
      year: "2025",
      duration: "Em desenvolvimento",
      type: "Front End com integração ao pixel da Meta e Salesforce",
    },
  },
  {
    id: 5,
    title: "Clínica Nutricare",
    subtitle: "Landing page de clínica de nutrição",
    description:
      "Esse projeto veio através da indicação de um professor de Marketing da Infinity, e graças a ele, desenhei o meu primeiro layout e me arrisquei como web designer.",
    cardImage: nutriCard,
    backgroundImage: nutri,
    backgroundColor: "#16A34A",
    textColor: "#E3DACD",
    roles: ["development", "design", "copywriting"],
    link: "https://www.clinicanutricare.com.br/",
    stats: {
      year: "2024",
      duration: "3 meses",
      type: "Frontend",
    },
  },
  {
    id: 6,
    title: "Fórum Erion Sistemas",
    subtitle: "Fórum interno para Empresa",
    description: "Esse foi o primeiro projeto fechado no 99freelas, criei a landing page e o fórum interno da empresa!",
    cardImage: erion1,
    backgroundImage: erion,
    backgroundColor: "#E3DACD",
    textColor: "#2D4C3B",
    roles: ["development", "design"],
    link: "https://www.erionsistemas.com.br/forum/",
    stats: {
      year: "2024",
      duration: "2 meses",
      type: "Front End",
    },
  },
  {
    id: 7,
    title: "Landing Page Unitec",
    subtitle: "Landing page para ERP",
    description:
      "Esse foi o primeiro projeto que consegui pela OLX, me pediram uma landing page para um ERP que estava em construção!",
    cardImage: uni1,
    backgroundImage: uni,
    backgroundColor: "#E3DACD",
    textColor: "#2D4C3B",
    roles: ["development", "design", "copywriting"],
    link: "https://unitecsistemas.com.br/",
    stats: {
      year: "2025",
      duration: "1 semana",
      type: "Front End Estático",
    },
  },
  {
    id: 8,
    title: "Landing Page Grupo Águias da Vida",
    subtitle: "Landing page para clínica de Reabilitação",
    description:
      "Esse foi o primeiro projeto que consegui pelo Linkedin, divulgaram como vaga, usei os filtros da plataforma e fui a primeira a me candidatar!",
    cardImage: aguia1,
    backgroundImage: aguia,
    backgroundColor: "#E3DACD",
    textColor: "#2D4C3B",
    roles: ["development", "design", "copywriting"],
    link: "https://aguias-da-vida.vercel.app/",
    stats: {
      year: "2025",
      duration: "2 semana",
      type: "Front End Estático",
    },
  },
  {
    id: 9,
    title: "Sistema de Automação Integral Energia",
    subtitle: "Automação de preenchimento de formulários",
    description:
      "Esse projeto consegui após usar uma estratégia muito boa que te ensino na consultoria. Esse sistema custou 10.200 reais!",
    cardImage: integral1,
    backgroundImage: integral,
    backgroundColor: "#E3DACD",
    textColor: "#2D4C3B",
    roles: ["development", "design", "copywriting"],
    link: "https://integral-energia.vercel.app/",
    stats: {
      year: "2025",
      duration: "Em desenvolvimento",
      type: "Front End com integração a API",
    },
  },
  
]

const roleLabels = {
  development: "Desenvolvimento",
  design: "Web Design",
  copywriting: "Copywriting",
}

const roleColors = {
  development: "bg-blue-500",
  design: "bg-purple-500",
  copywriting: "bg-pink-500",
}

const chocoProjectNames = [
  "Landing Page ChocoBuild",
  "Ver Mais Chocolate",
  "Brownie.js Agency",
  "Sistema de Gerenciamento de chocolates",
  "Landing Page ChocoMod",
  "Clínica NutriChocolate",
  "Fórum Chocolate Amargo",
  "Landing Page TrufaTech",
  "Landing Page Grupo Bombons da Vida",
  "Sistema de Automação Chocolate Integral",

]

export default function Projects() {
  const [activeProject, setActiveProject] = useState(projects[0])
  const [isTransitioning, setIsTransitioning] = useState(false)
  const sliderRef = useRef(null)
  const [chocoMode, setChocoMode] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [showEasterEgg, setShowEasterEgg] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const easterEggRef = useRef(null)
  const chocoModeTimerRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (easterEggRef.current) {
        const rect = easterEggRef.current.getBoundingClientRect()
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          setShowEasterEgg(true)
        } else {
          setShowEasterEgg(false)
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleChocoMode = () => {
    setChocoMode(true)
    setShowModal(true)

    // Clear any existing timer
    if (chocoModeTimerRef.current) {
      clearTimeout(chocoModeTimerRef.current)
    }

    // Set a new timer to turn off chocoMode after 30 seconds
    chocoModeTimerRef.current = setTimeout(() => {
      setChocoMode(false)
    }, 30000)
  }

  const closeModal = () => {
    setShowModal(false)
  }

  const handleProjectClick = (project) => {
    if (project.id === activeProject.id || isTransitioning) return

    setIsTransitioning(true)
    setActiveProject(project)
    setTimeout(() => setIsTransitioning(false), 500)
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }

  return (
    <section id="projetos" className="relative min-h-screen overflow-hidden bg-sand dark:bg-jungle transition-colors duration-300">
      {/* Background Image with Gradient */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeProject.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 z-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center transition-all duration-700"
            style={{
              backgroundImage: `url(${activeProject.backgroundImage})`,
              backgroundColor: activeProject.backgroundColor,
            }}
          />
          <div
            className="absolute inset-0 transition-all duration-700"
            style={{
              background: `linear-gradient(to right, ${activeProject.backgroundColor} 0%, ${activeProject.backgroundColor}99 50%, transparent 100%)`,
            }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-24 min-h-screen">
        <div className="grid grid-cols-12 gap-8 h-full relative">
          {/* Left Content */}
          <div className="col-span-12 md:col-span-5 pt-24 flex flex-col justify-between relative z-20">
            <motion.div
              key={activeProject.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-md"
            >
              <h3 className="text-lg mb-2 tracking-wider" style={{ color: activeProject.textColor }}>
                {activeProject.subtitle}
              </h3>
              <h2
                className="text-4xl md:text-6xl font-bold mb-6 tracking-[0.15em]"
                style={{ color: activeProject.textColor }}
              >
                {chocoMode ? chocoProjectNames[activeProject.id - 1] : activeProject.title}
              </h2>

              {/* Project Stats */}
              <div className="flex flex-wrap gap-4 mb-6">
                {Object.entries(activeProject.stats).map(([key, value]) => (
                  <div
                    key={key}
                    className="backdrop-blur-sm bg-white/5 rounded-lg px-4 py-2"
                    style={{ color: activeProject.textColor }}
                  >
                    <div className="text-sm opacity-70 capitalize">{key}</div>
                    <div className="font-semibold">{value}</div>
                  </div>
                ))}
              </div>

              <p className="text-base md:text-lg mb-8 break-words" style={{ color: activeProject.textColor }}>
                {activeProject.description}
              </p>

              {/* Roles */}
              <div className="flex flex-wrap gap-3 mb-8">
                {activeProject.roles.map((role) => (
                  <span
                    key={role}
                    className="px-4 py-2 rounded-full text-sm font-medium bg-white/10 backdrop-blur-sm"
                    style={{ color: activeProject.textColor }}
                  >
                    {roleLabels[role]}
                  </span>
                ))}
              </div>

              <a
                href={activeProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
                style={{ color: activeProject.textColor }}
              >
                Ver Projeto
              </a>
            </motion.div>
          </div>

          {/* Right Content - Project Cards Carousel */}
          <div className="col-span-12 md:col-span-7 self-end pb-12 relative z-10">
            <div className="w-full relative">
              <Slider ref={sliderRef} {...settings}>
                {projects.map((project) => (
                  <div key={project.id} className="px-3">
                    <motion.div
                      onClick={() => handleProjectClick(project)}
                      className={`
                        w-full rounded-2xl overflow-hidden cursor-pointer
                        transition-all duration-300 hover:scale-105
                        ${project.id === activeProject.id ? "ring-2 ring-white scale-105" : "hover:rotate-2"}
                        backdrop-blur-md bg-white/10
                      `}
                      whileHover={{ y: -5 }}
                    >
                      <div className="relative">
                        {/* Card Image */}
                        <div className="h-72 overflow-hidden">
                          <img
                            src={project.cardImage || "/placeholder.svg"}
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                          />
                        </div>

                        {/* Card Content */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 via-black/60 to-transparent">
                          <h3 className="text-white text-xl font-semibold mb-1">
                            {chocoMode ? chocoProjectNames[project.id - 1] : project.title}
                          </h3>
                          <p className="text-white/80 text-sm">{project.subtitle}</p>

                          {/* Mini Role Indicators */}
                          <div className="flex gap-2 mt-3">
                            {project.roles.map((role) => (
                              <div
                                key={role}
                                className={`w-3 h-3 rounded-full ${roleColors[role]}`}
                                title={roleLabels[role]}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </Slider>
              {/* Navigation Buttons */}
              <button
                className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-white/10 dark:bg-sand/10 backdrop-blur-md p-2 rounded-full transition-colors duration-300"
                onClick={() => sliderRef.current.slickPrev()}
              >
                <ChevronLeft size={24} color={activeProject.textColor} />
              </button>
              <button
                className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-white/10 dark:bg-sand/10 backdrop-blur-md p-2 rounded-full transition-colors duration-300"
                onClick={() => sliderRef.current.slickNext()}
              >
                <ChevronRight size={24} color={activeProject.textColor} />
              </button>
            </div>
          </div>
        </div>
        {/* Easter Egg - Ícone de Bombom */}
        <motion.div
          className="absolute bottom-4 right-4 cursor-pointer bg-white dark:bg-jungle rounded-full p-3 shadow-lg transition-colors duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={toggleChocoMode}
        >
          <Candy size={32} className={`text-terra transition-colors ${isHovered ? "text-terra-dark" : ""}`} />
        </motion.div>
      </div>

      {/* Modal Informativo */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white dark:bg-jungle p-8 rounded-lg shadow-xl max-w-md text-center relative overflow-hidden m-4 transition-colors duration-300"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-2xl font-bold text-jungle dark:text-sand mb-4 transition-colors duration-300">Modo Chocólatra Ativado! 🍫</h3>
              <p className="mb-4 text-jungle dark:text-sand transition-colors duration-300">
                Parabéns! Você descobriu o easter egg do ChocoBytes, um projeto desenvolvido durante um de nossos
                workshops! Agora você pode ver os nomes dos projetos com um toque chocolatudo por 30 segundos. Clique
                fora deste modal para ver a mágica acontecer!
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}