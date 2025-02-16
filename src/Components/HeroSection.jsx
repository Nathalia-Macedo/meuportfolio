import React, { useCallback, useState } from "react"
import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"
import { motion, AnimatePresence } from "framer-motion"
import { DribbbleIcon as Behance, Github, Instagram, Linkedin, MessageCircle } from "lucide-react"
import VSCodeSimulation from "./VsCodeSimulator"

const Hero = ({ toggleDarkMode, isDarkMode }) => {
  const [phraseIndex, setPhraseIndex] = React.useState(0)
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const [showEasterEgg, setShowEasterEgg] = useState(false)
  const [clickCount, setClickCount] = useState(0)

  const phrases = [
    "De vendedora ambulante na suburbana a Programadora em São Paulo",
    "Dificuldades são oportunidades disfarçadas",
    "Quero ser a versão feminina do Tony Stark",
    "Se conhecimento é a única coisa que não tiram da gente, deveria ser a moeda mais cara!"
  ]

  React.useEffect(() => {
    const timer = setInterval(() => {
      setPhraseIndex((prev) => (prev + 1) % phrases.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine)
  }, [])

  const socialIcons = [
    { Icon: Behance, href: "https://www.behance.net/" },
    { Icon: Github, href: "https://github.com/Nathalia-Macedo" },
    { Icon: Instagram, href: "https://www.instagram.com/nath_dev_/" },
    { Icon: Linkedin, href: "https://www.linkedin.com/in/nathalia-de-macedo-martins-nathdev" },
    { Icon: MessageCircle, href: "https://wa.me/71987257532" },
  ]

  const handleSecretClick = () => {
    setClickCount((prevCount) => prevCount + 1)
    if (clickCount + 1 === 3) {
      setShowEasterEgg(true)
      setClickCount(0)
    }
  }

  return (
    <div id="hero" className="relative min-h-screen bg-sand dark:bg-jungle transition-colors duration-300">
      {/* Header */}
      <header className="fixed top-0 w-full z-30 bg-sand/80 dark:bg-jungle/80 backdrop-blur-sm transition-colors duration-300">
        <nav className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Social Icons */}
            <div className="flex space-x-4">
              {socialIcons.map(({ Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-jungle dark:text-sand hover:text-terra dark:hover:text-terra transition-colors"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>

            {/* Dark Mode Toggle and Mobile Menu Button */}
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleDarkMode}
                className="text-jungle dark:text-sand hover:text-terra dark:hover:text-terra transition-colors"
              >
                {isDarkMode ? "Light" : "Dark"}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-jungle dark:text-sand hover:text-terra dark:hover:text-terra transition-colors md:hidden"
              >
                Menu
              </button>
            </div>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex justify-center space-x-8 py-6">
            <li>
              <a
                href="#about"
                className="text-jungle dark:text-sand hover:text-terra dark:hover:text-terra transition-colors"
              >
                Sobre Mim
              </a>
            </li>
            <li>
              <a
                href="#projetos"
                className="text-jungle dark:text-sand hover:text-terra dark:hover:text-terra transition-colors"
              >
                Projetos
              </a>
            </li>
            <li>
              <a
                href="#parceria"
                className="text-jungle dark:text-sand hover:text-terra dark:hover:text-terra transition-colors"
              >
                Parcerias
              </a>
            </li>
            <li>
              <a
                href="#serviços"
                className="text-jungle dark:text-sand hover:text-terra dark:hover:text-terra transition-colors"
              >
                Serviços
              </a>
            </li>
            <li>
              <a
                href="#conteudos"
                className="text-jungle dark:text-sand hover:text-terra dark:hover:text-terra transition-colors"
              >
                Conteúdos
              </a>
            </li>
            <li>
              <a
                href="#contato"
                className="text-jungle dark:text-sand hover:text-terra dark:hover:text-terra transition-colors"
              >
                Contato
              </a>
            </li>
          </ul>

          {/* Mobile Menu */}
          <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
            <ul className="flex flex-col items-center space-y-4 py-4">
              <li>
                <a
                  href="#about"
                  className="text-jungle dark:text-sand hover:text-terra dark:hover:text-terra transition-colors"
                >
                  Sobre Mim
                </a>
              </li>
              <li>
                <a
                  href="#projetos"
                  className="text-jungle dark:text-sand hover:text-terra dark:hover:text-terra transition-colors"
                >
                  Projetos
                </a>
              </li>
              <li>
                <a
                  href="#parceria"
                  className="text-jungle dark:text-sand hover:text-terra dark:hover:text-terra transition-colors"
                >
                  Parcerias
                </a>
              </li>
              <li>
                <a
                  href="#serviços"
                  className="text-jungle dark:text-sand hover:text-terra dark:hover:text-terra transition-colors"
                >
                  Serviços
                </a>
              </li>
              <li>
                <a
                  href="#conteudos"
                  className="text-jungle dark:text-sand hover:text-terra dark:hover:text-terra transition-colors"
                >
                  Conteúdos
                </a>
              </li>
              <li>
                <a
                  href="#contato"
                  className="text-jungle dark:text-sand hover:text-terra dark:hover:text-terra transition-colors"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      {/* Particles Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: {
            enable: false,
            zIndex: 0,
          },
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
                parallax: {
                  enable: true,
                  force: 60,
                  smooth: 10,
                },
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: isDarkMode ? "#E3DACD" : "#2D4C3B",
            },
            links: {
              color: "#D96C4A",
              distance: 150,
              enable: true,
              opacity: 0.3,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 3 },
            },
          },
          detectRetina: true,
        }}
        className="absolute inset-0"
      />

      {/* Main Content */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        <h1
          className="text-jungle dark:text-sand text-4xl md:text-5xl lg:text-6xl font-bold tracking-[0.15em] mb-8 px-4 transition-colors duration-300"
          onClick={handleSecretClick}
        >
          NATHALIA MACEDO
        </h1>

        <div className="min-h-[80px] mb-8 w-full max-w-2xl px-4">
          <AnimatePresence mode="wait">
            <motion.p
              key={phraseIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-terra text-lg md:text-xl lg:text-2xl tracking-[0.15em]"
            >
              {phrases[phraseIndex]}
            </motion.p>
          </AnimatePresence>
        </div>

        <div className="text-jungle dark:text-sand text-sm md:text-base lg:text-lg tracking-[0.15em] space-y-2 px-4 max-w-full transition-colors duration-300">
          <p className="break-words">Dev Full Stack | SDR | Copywriter | Professora</p>
          <p className="break-words">Aspirante a Web Design | Estudante de Marketing</p>
        </div>
      </main>

      {/* Easter Egg */}
      {showEasterEgg && <VSCodeSimulation onClose={() => setShowEasterEgg(false)} />}
    </div>
  )
}

export default Hero