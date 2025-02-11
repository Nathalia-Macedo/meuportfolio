"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Slider from "react-slick"
import { ChevronLeft, ChevronRight } from "lucide-react"
import nick from "../Assets/image.png"
import nickCard from "../Assets/nickCard.png"
// Importe os estilos do react-slick
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import nutriCard from "../Assets/nutriCard.png"
import nutri from "../Assets/nutri.png"

const projects = [
  {
    id: 1,
    title: "Publi X Agency",
    subtitle: "Landing Page de Agência de Marketing",
    description:
      "Resultado de uma parceria entre @nickpubli e @nath_dev_. Ela me ajudou com meu instagram, e em troca, criei o site da landing page dela!",
    cardImage: nickCard,
    backgroundImage: nick,
    backgroundColor: "#2D4C3B",
    textColor: "#E3DACD",
    roles: ["development"],
    link: "https://publixagency.vercel.app",
    stats: {
      year: "2025",
      duration: "2 meses",
      type: "Front End",
    },
  },
  {
    id: 2,
    title: "Clínica Nutricare",
    subtitle: "Landing page de clínica de nutrição",
    description:
      "Esse projeto veio através da indicação de um professor de Marketing da Infinity, e graças a ele, desenhei o meu primeiro layout e me arrisquei como web designer.",
    cardImage: nutriCard,
    backgroundImage: nutri,
    backgroundColor: "#16A34A",
    textColor: "#E3DACD",
    roles: ["development", "design", "copywriting"],
    link: "https://alaskadigital.com.br",
    stats: {
      year: "2024",
      duration: "3 meses",
      type: "Frontend",
    },
  },
  {
    id: 3,
    title: "Fórum Erion Sistemas",
    subtitle: "Fórum interno para Empresa",
    description:
      "Esse foi o primeiro projeto fechado no 99freelas, criei a landing page e o fórum interno da empresa!",
    cardImage: "/placeholder.svg?height=400&width=300",
    backgroundImage: "/placeholder.svg?height=1200&width=1920",
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
    id: 4,
    title: "E-commerce",
    subtitle: "Moda Sustentável",
    description:
      "E-commerce desenvolvido para cliente do setor de moda sustentável. Sistema completo de vendas online com integração a meios de pagamento e gestão de estoque.",
    cardImage: "/placeholder.svg?height=400&width=300",
    backgroundImage: "/placeholder.svg?height=1200&width=1920",
    backgroundColor: "#E3DACD",
    textColor: "#2D4C3B",
    roles: ["development", "design"],
    link: "#",
    stats: {
      year: "2024",
      duration: "4 meses",
      type: "Full Stack",
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

export default function Projects() {
  const [activeProject, setActiveProject] = useState(projects[0])
  const [isTransitioning, setIsTransitioning] = useState(false)
  const sliderRef = useRef(null)

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
    <section id="projetos" className="relative min-h-screen overflow-hidden">
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
              <h2 className="text-6xl font-bold mb-6 tracking-[0.15em]" style={{ color: activeProject.textColor }}>
                {activeProject.title}
              </h2>

              {/* Project Stats */}
              <div className="flex gap-6 mb-6">
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

              <p className="text-lg mb-8 break-words" style={{ color: activeProject.textColor }}>
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
                          <h3 className="text-white text-xl font-semibold mb-1">{project.title}</h3>
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
                className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-white/10 backdrop-blur-md p-2 rounded-full"
                onClick={() => sliderRef.current.slickPrev()}
              >
                <ChevronLeft size={24} color={activeProject.textColor} />
              </button>
              <button
                className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-white/10 backdrop-blur-md p-2 rounded-full"
                onClick={() => sliderRef.current.slickNext()}
              >
                <ChevronRight size={24} color={activeProject.textColor} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

