"use client"

import { useState, useCallback, useEffect } from "react"
import { motion } from "framer-motion"
import { MapPin, Clock, Users, Target, ChevronRight, BookOpen, ArrowLeft } from "lucide-react"
import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"

const WorkshopsExplicacao = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDarkMode])

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine)
  }, [])

  const workshops = [
    {
      id: 1,
      title: "Gestão de Pessoas na Programação",
      subtitle: "Scrum sem complicação",
      description:
        "Organize times de desenvolvimento de forma clara e humana usando Scrum. Entenda papéis, artefatos e eventos na prática.",
      icon: <Users className="w-8 h-8" />,
      link: "/workshop-gestao-equipes",
      gradient: "from-terra to-orange-600",
    },
  ]

  const features = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Localização",
      description: "São Paulo ou Salvador",
      subtitle: "Sempre presencial",
      color: "terra",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Duração",
      description: "2 horas intensivas",
      subtitle: "Conteúdo focado",
      color: "jungle",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Público",
      description: "Aberto ao público",
      subtitle: "Todos os níveis",
      color: "terra",
    },
  ]

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <div className="min-h-screen bg-sand dark:bg-jungle transition-colors duration-300">
      {/* Particles Background */}
      <Particles
        id="tsparticles-workshops"
        init={particlesInit}
        options={{
          fullScreen: { enable: false, zIndex: 0 },
          background: { color: { value: "transparent" } },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: { enable: true, mode: "push" },
              onHover: { enable: true, mode: "repulse", parallax: { enable: true, force: 60, smooth: 10 } },
              resize: true,
            },
            modes: {
              push: { quantity: 4 },
              repulse: { distance: 200, duration: 0.4 },
            },
          },
          particles: {
            color: { value: isDarkMode ? "#E3DACD" : "#2D4C3B" },
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
              outModes: { default: "bounce" },
              random: false,
              speed: 1,
              straight: false,
            },
            number: { density: { enable: true, area: 800 }, value: 60 },
            opacity: { value: 0.5 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 3 } },
          },
          detectRetina: true,
        }}
        className="absolute inset-0"
      />

      {/* Header */}
      <header className="fixed top-0 w-full z-30 bg-sand/80 dark:bg-jungle/80 backdrop-blur-sm transition-colors duration-300">
        <nav className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <motion.button
              onClick={() => window.history.back()}
              className="flex items-center space-x-2 text-jungle dark:text-sand hover:text-terra dark:hover:text-terra transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Voltar</span>
            </motion.button>

            <div className="flex items-center space-x-3">
              <motion.div
                className="w-10 h-10 bg-gradient-to-r from-terra to-orange-600 rounded-lg flex items-center justify-center"
                whileHover={{ rotate: 12, scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <BookOpen className="w-6 h-6 text-sand" />
              </motion.div>
              <div>
                <h1 className="text-xl font-bold text-jungle dark:text-sand">Workshops</h1>
                <p className="text-sm text-jungle/70 dark:text-sand/70">Infinity School</p>
              </div>
            </div>

            <motion.button
              onClick={toggleDarkMode}
              className="text-jungle dark:text-sand hover:text-terra dark:hover:text-terra transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isDarkMode ? "Light" : "Dark"}
            </motion.button>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="relative z-10 pt-24">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6 bg-terra/10 text-terra border border-terra/20"
            >
              <Target className="w-4 h-4 mr-2" />
              Aprendizado Prático e Presencial
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold mb-6 text-jungle dark:text-sand"
            >
              Workshops
              <motion.span
                className="block text-terra"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                Infinity School
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl mb-12 max-w-3xl mx-auto leading-relaxed text-jungle/80 dark:text-sand/80"
            >
              Conteúdos práticos e focados para acelerar seu desenvolvimento profissional. Workshops presenciais de 2
              horas com metodologia hands-on.
            </motion.p>

            {/* Features Grid */}
            <div className="grid md:grid-cols-3 gap-6 mb-16">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="backdrop-blur-sm rounded-2xl p-6 border border-jungle/10 dark:border-sand/10 bg-sand/60 dark:bg-jungle/60 hover:border-terra/30 transition-all duration-300"
                >
                  <motion.div
                    className={`w-12 h-12 bg-gradient-to-r ${feature.color === "terra" ? "from-terra to-orange-600" : "from-jungle to-green-700"} rounded-xl flex items-center justify-center mb-4 mx-auto text-sand`}
                    whileHover={{ rotate: 12, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {feature.icon}
                  </motion.div>
                  <h3 className="text-lg font-semibold mb-2 text-jungle dark:text-sand">{feature.title}</h3>
                  <p className="text-jungle/80 dark:text-sand/80">{feature.description}</p>
                  <p className="text-sm mt-1 text-jungle/60 dark:text-sand/60">{feature.subtitle}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Workshop Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-jungle dark:text-sand">Nosso Workshop</h2>
              <p className="text-xl max-w-2xl mx-auto text-jungle/80 dark:text-sand/80">
                Conteúdo prático desenvolvido para acelerar seu crescimento profissional
              </p>
            </motion.div>

            <div className="flex justify-center">
              {workshops.map((workshop, index) => (
                <motion.div
                  key={workshop.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  whileHover={{ y: -12, scale: 1.03 }}
                  className="group relative rounded-3xl overflow-hidden border border-jungle/10 dark:border-sand/10 bg-sand/80 dark:bg-jungle/80 backdrop-blur-sm hover:border-terra/30 transition-all duration-500 cursor-pointer max-w-lg w-full"
                  onClick={() => (window.location.href = workshop.link)}
                >
                  <motion.div className="absolute inset-0 bg-gradient-to-br from-terra/5 via-transparent to-orange-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative p-6 pb-4">
                    <div className="flex items-start justify-between mb-4">
                      <motion.div
                        className={`w-14 h-14 bg-gradient-to-r ${workshop.gradient} rounded-2xl flex items-center justify-center text-sand shadow-lg`}
                        whileHover={{ scale: 1.1, rotate: 8 }}
                        transition={{ duration: 0.3 }}
                      >
                        {workshop.icon}
                      </motion.div>
                      <div className="bg-terra/10 text-terra px-3 py-1 rounded-full text-sm font-medium border border-terra/20">
                        2h presencial
                      </div>
                    </div>

                    <div className="text-left">
                      <h3 className="text-2xl font-bold mb-2 text-jungle dark:text-sand group-hover:text-terra transition-colors duration-300">
                        {workshop.title}
                      </h3>
                      <p className="text-terra font-semibold mb-3 text-lg">{workshop.subtitle}</p>
                      <p className="mb-6 leading-relaxed text-jungle/80 dark:text-sand/80 text-base">
                        {workshop.description}
                      </p>
                    </div>
                  </div>

                  <div className="relative px-6 pb-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-jungle/60 dark:text-sand/60">
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          SP/Salvador
                        </div>
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          Todos os níveis
                        </div>
                      </div>

                      <motion.div
                        className="flex items-center text-terra font-semibold group-hover:text-orange-600 transition-colors duration-300"
                        whileHover={{ x: 5 }}
                      >
                        <span className="mr-2">Acessar</span>
                        <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                      </motion.div>
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-terra to-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-jungle text-sand">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            className="flex items-center justify-center space-x-3 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="w-10 h-10 bg-gradient-to-r from-terra to-orange-600 rounded-lg flex items-center justify-center"
              whileHover={{ rotate: 12, scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <BookOpen className="w-6 h-6 text-sand" />
            </motion.div>
            <span className="text-xl font-bold">Infinity School</span>
          </motion.div>
          <p className="text-sand/80 mb-4">Transformando carreiras através da educação prática em tecnologia</p>
          <p className="text-terra font-medium">"Dificuldades são oportunidades disfarçadas"</p>
        </div>
      </footer>
    </div>
  )
}

export default WorkshopsExplicacao
