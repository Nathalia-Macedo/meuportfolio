import React from "react"

import { useState, useEffect, useMemo } from "react"
import { motion } from "framer-motion"
import { Link, useNavigate } from "react-router-dom"
import {
  Moon,
  Sun,
  ArrowLeft,
  Users,
  Clock,
  Target,
  Lightbulb,
  Code,
  Palette,
  Zap,
  CheckCircle,
  Award,
} from "lucide-react"
import { Button } from "./ui/Button"
import { Card, CardContent } from "./ui/Card"

export default function SupermoduloCreativeCode() {
  const [darkMode, setDarkMode] = useState(false)
  const [activeTab, setActiveTab] = useState(0)
  const navigate = useNavigate()

  useEffect(() => {
    // keep preference in localStorage so toggle persists across reloads
    const stored = localStorage.getItem("sm:dark")
    if (stored) setDarkMode(stored === "1")
  }, [])

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("sm:dark", "1")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("sm:dark", "0")
    }
  }, [darkMode])

  const toggleDarkMode = () => setDarkMode((v) => !v)

  // --- Animation variants (centralized and reused) ---
  const container = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { staggerChildren: 0.06 } },
  }

  const card = {
    hidden: { opacity: 0, y: 24, scale: 0.98 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
    hover: { scale: 1.03, transition: { duration: 0.25 } },
  }

  const float = {
    animate: { y: [0, -8, 0], transition: { duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" } },
  }

  // subtle, very thin grid texture (inline style so tailwind not required)
  const gridStyle = useMemo(
    () => ({
      backgroundImage: `repeating-linear-gradient(0deg, rgba(${darkMode ? "255,255,255,0.03" : "0,0,0,0.03"}), rgba(${darkMode ? "255,255,255,0.03" : "0,0,0,0.03"}) 1px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, rgba(${darkMode ? "255,255,255,0.03" : "0,0,0,0.03"}), rgba(${darkMode ? "255,255,255,0.03" : "0,0,0,0.03"}) 1px, transparent 1px, transparent 40px)`,
    }),
    [darkMode],
  )

  const detailedLessons = [
    {
      title: "Aula 1 – Conceitos e Base de Design (3h)",
      topics: [
        "O que é uma landing page e por que funciona",
        "Estrutura comum (Hero, Benefícios, Depoimentos, Call-to-Action, Rodapé)",
        "Princípios de design aplicados ao digital: hierarquia visual, espaçamento, alinhamento, cores, tipografia",
        "Introdução ao Figma: frames, grids, formas, texto e alinhamento",
        "Prática: Criar um wireframe da landing page de um produto fictício",
      ],
      icon: Lightbulb,
      color: "from-yellow-400/20 to-orange-500/20",
    },
    {
      title: "Aula 2 – Layout no Figma (3h)",
      topics: [
        "Transformando o wireframe em layout final",
        "Escolha de cores e fontes (Google Fonts)",
        "Uso de imagens e ícones (Unsplash, Flaticon)",
        "Criando componentes e reutilizando elementos no Figma",
        "Prática: Finalizar o design da landing page",
        "Exportar assets e preparar para codificação",
      ],
      icon: Palette,
      color: "from-purple-400/20 to-pink-500/20",
    },
    {
      title: "Aula 3 – Do Figma ao Código (3h)",
      topics: [
        "Estrutura básica do HTML (html, head, body)",
        "Criando o esqueleto sem estilo (HTML sem CSS)",
        "Boas práticas: indentação, tags semânticas (header, main, footer)",
        "Prática: Criar toda a estrutura HTML da landing page",
        "Usando ChatGPT como apoio para gerar trechos e revisar código",
      ],
      icon: Code,
      color: "from-blue-400/20 to-cyan-500/20",
    },
    {
      title: "Aula 4 – Estilizando a Página (3h)",
      topics: [
        'Ligando CSS ao HTML (link rel="stylesheet")',
        "Conceitos básicos de CSS: cores, fontes, tamanhos, margens, paddings",
        "Layouts com Flexbox",
        "Prática: Aplicar estilos no site até chegar próximo do design no Figma",
        "Usando ChatGPT para ajustes de CSS e responsividade básica",
      ],
      icon: Zap,
      color: "from-green-400/20 to-emerald-500/20",
    },
    {
      title: "Aula 5 – Finalização e Publicação no Vercel (3h)",
      topics: [
        "Ajustes finais: espaçamentos, cores, imagens, botões com hover e transições",
        "Revisão de responsividade básica",
        "Criando repositório no GitHub (apenas para versionar)",
        "Publicando no Vercel passo a passo",
        "Apresentação dos projetos",
        "Como continuar evoluindo e usando ChatGPT como ferramenta de estudo e produtividade",
      ],
      icon: CheckCircle,
      color: "from-orange-400/20 to-red-500/20",
    },
  ]

  // Decorative floating icons positions (deterministic, responsive-safe)
  const floatingIcons = [
    { Icon: Lightbulb, size: 120, top: "6%", left: "6%", opacity: 0.08, dur: 12, rot: -8 },
    { Icon: Palette, size: 100, top: "22%", left: "78%", opacity: 0.07, dur: 14, rot: 6 },
    { Icon: Code, size: 140, top: "62%", left: "12%", opacity: 0.06, dur: 16, rot: 10 },
    { Icon: Zap, size: 110, top: "72%", left: "75%", opacity: 0.06, dur: 13, rot: -6 },
    { Icon: CheckCircle, size: 90, top: "40%", left: "50%", opacity: 0.05, dur: 18, rot: 4 },
    { Icon: Target, size: 80, top: "12%", left: "50%", opacity: 0.04, dur: 20, rot: 0 },
    { Icon: Award, size: 70, top: "86%", left: "28%", opacity: 0.04, dur: 22, rot: 12 },
  ]

  return (
    <div
      className={`min-h-screen transition-colors duration-600 relative overflow-hidden ${
        darkMode ? "bg-[#2D5A4A] text-[#F5F1EB]" : "bg-[#F5F1EB] text-[#13231c]"
      }`}
      style={gridStyle}
    >
      {/* subtle vignette + soft noise overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background: darkMode
            ? "radial-gradient(ellipse at center, rgba(255,255,255,0.01), transparent 40%), linear-gradient(180deg, rgba(0,0,0,0.06), transparent)"
            : "radial-gradient(ellipse at center, rgba(0,0,0,0.02), transparent 40%), linear-gradient(180deg, rgba(255,255,255,0.02), transparent)",
          mixBlendMode: darkMode ? "screen" : "multiply",
        }}
      />

      {/* Decorative floating icons */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {floatingIcons.map((f, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{ top: f.top, left: f.left, opacity: f.opacity }}
            animate={{ y: [0, -12, 0], rotate: [0, f.rot, -f.rot, 0], scale: [1, 1.03, 1] }}
            transition={{ duration: f.dur, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: i * 0.6 }}
          >
            <f.Icon size={f.size} />
          </motion.div>
        ))}
      </div>

      {/* Clean, minimal floating shapes (reduced complexity for performance) */}
      <motion.div className="absolute inset-0 pointer-events-none z-0" {...float} animate="animate">
        <svg className="absolute -right-16 -top-16 w-96 h-96 opacity-20" viewBox="0 0 200 200" fill="none">
          <defs>
            <linearGradient id="g1" x1="0" x2="1">
              <stop offset="0%" stopColor="#E07A5F" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#2D5A4A" stopOpacity="0.06" />
            </linearGradient>
          </defs>
          <circle cx="80" cy="80" r="80" fill="url(#g1)" />
        </svg>
        <svg className="absolute -left-28 bottom-8 w-72 h-72 opacity-14" viewBox="0 0 200 200" fill="none">
          <circle cx="100" cy="100" r="80" fill="#2D5A4A" opacity="0.08" />
        </svg>
      </motion.div>

      {/* Header */}
      <motion.header
        className="relative z-20 flex items-center justify-between p-4 sm:p-6 max-w-7xl mx-auto"
        initial="hidden"
        animate="show"
        variants={container}
      >
        <div className="flex items-center gap-3">
          <Button variant="ghost" onClick={() => navigate(-1)} className="flex items-center gap-2 text-sm">
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Voltar</span>
          </Button>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="ghost" onClick={toggleDarkMode} className="flex items-center gap-2 text-sm">
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            <span className="hidden sm:inline">{darkMode ? "Light" : "Dark"}</span>
          </Button>
        </div>
      </motion.header>

      {/* Hero */}
      <motion.section
        className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-24"
        initial="hidden"
        animate="show"
        variants={container}
      >
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">
          <motion.div variants={card} className="space-y-4 sm:space-y-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Supermódulo
              <br />
              <span className="text-[#E07A5F]">Creative Code</span>
              <br />
              UX/UI Design
            </h1>
            <p className="text-base sm:text-lg max-w-xl opacity-90">
              Domine os fundamentos visuais que transformam páginas comuns em experiências incríveis. Aula prática,
              objetiva e com resultado.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mt-4">
              <div className="flex items-center gap-2 bg-white/6 px-3 py-2 rounded-full backdrop-blur-sm">
                <Clock className="w-4 h-4 text-[#E07A5F]" />
                <span className="text-sm">5 aulas x 3h</span>
              </div>
              <div className="flex items-center gap-2 bg-white/6 px-3 py-2 rounded-full backdrop-blur-sm">
                <Users className="w-4 h-4 text-[#E07A5F]" />
                <span className="text-sm">Presencial em SP</span>
              </div>
            </div>
          </motion.div>

          {/* Hero Card */}
          <motion.div variants={card} className="relative mt-8 lg:mt-0">
            <div className="absolute -inset-3 rounded-3xl blur-3xl opacity-30 bg-gradient-to-r from-[#E07A5F]/10 to-[#2D5A4A]/6" />
            <Card
              className={`relative bg-white/90 dark:bg-[#F5F1EB]/10 border-2 border-white/20 shadow-xl min-h-[200px]`}
            >
              <CardContent className="p-6 sm:p-8 flex flex-col justify-between h-full">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#E07A5F] to-[#E07A5F]/80 rounded-full flex items-center justify-center shadow">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Objetivo do Curso</h3>
                    <p className="text-sm opacity-80">
                      Dominar design UX/UI e codificação prática para criar landing pages impactantes.
                    </p>
                  </div>
                </div>

                <div className="mt-4 sm:mt-6 space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#E07A5F] mt-0.5 flex-shrink-0" />
                    <p className="text-sm opacity-80">5 aulas práticas de 3h cada, segundas das 20h30 às 22h30</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#E07A5F] mt-0.5 flex-shrink-0" />
                    <p className="text-sm opacity-80">Presencial em São Paulo com suporte ao vivo</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.section>

      {/* Detailed Course Content */}
      <motion.section
        className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 py-12"
        initial="hidden"
        animate="show"
        variants={container}
      >
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#2D5A4A] dark:text-[#F5F1EB]">
            Conteúdo Detalhado das Aulas
          </h2>
          <p className="text-base sm:text-lg max-w-2xl mx-auto opacity-90 mt-3">
            Veja exatamente o que você vai aprender em cada uma das 5 aulas práticas.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {detailedLessons.map((lesson, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-3 py-2 text-xs sm:text-sm font-medium rounded-full transition-all duration-300 ${
                activeTab === index
                  ? "bg-[#E07A5F] text-white shadow-lg"
                  : "bg-white/20 dark:bg-[#F5F1EB]/10 hover:bg-white/30 dark:hover:bg-[#F5F1EB]/20"
              }`}
            >
              Aula {index + 1}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <Card className="bg-white/85 dark:bg-[#F5F1EB]/10 border-2 shadow-lg">
            <CardContent className="p-6 sm:p-8">
              <div className="flex items-center gap-4 mb-6">
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${detailedLessons[activeTab].color} rounded-2xl flex items-center justify-center`}
                >
                  {React.createElement(detailedLessons[activeTab].icon, { className: "w-8 h-8 text-[#2D5A4A]" })}
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#2D5A4A] dark:text-[#F5F1EB]">
                    {detailedLessons[activeTab].title}
                  </h3>
                  <div className="flex items-center gap-2 mt-2">
                    <Clock className="w-4 h-4 text-[#E07A5F]" />
                    <span className="text-sm opacity-80">3 horas de conteúdo prático</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-lg text-[#2D5A4A] dark:text-[#F5F1EB]">O que você vai aprender:</h4>
                <ul className="space-y-3">
                  {detailedLessons[activeTab].topics.map((topic, topicIndex) => (
                    <li key={topicIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#E07A5F] mt-2 flex-shrink-0" />
                      <span className="text-sm sm:text-base opacity-90">{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.section>

      {/* Benefits + Stats */}
      <motion.section
        className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 py-12"
        initial="hidden"
        animate="show"
        variants={container}
      >
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">
          <motion.div variants={card}>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#2D5A4A] dark:text-[#F5F1EB]">
              Por que escolher este Supermódulo?
            </h2>
            <p className="mt-4 text-base sm:text-lg max-w-xl opacity-90">
              Metodologia prática, exercícios hands-on e suporte completo — tudo pensado para você aplicar na prática.
            </p>

            <ul className="mt-6 space-y-3 text-sm">
              {[
                "Metodologia prática sem enrolação",
                "Exercícios hands-on durante a aula",
                "Suporte completo para dúvidas",
                "Material de apoio incluso",
                "Certificado de participação",
                "Do wireframe ao site publicado",
                "Uso de ferramentas modernas (Figma, ChatGPT, Vercel)",
              ].map((b, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-br from-[#E07A5F] to-[#E07A5F]/80 mt-1" />
                  <span className="opacity-90">{b}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={card} className="grid grid-cols-2 gap-4 sm:gap-6 mt-8 lg:mt-0">
            {[
              { number: "15h", label: "Duração Total", icon: Clock },
              { number: "100%", label: "Prático", icon: Target },
              { number: "5", label: "Aulas", icon: Code },
              { number: "∞", label: "Suporte", icon: Users },
            ].map((s, i) => (
              <Card
                key={i}
                className="p-3 sm:p-4 bg-white/85 dark:bg-[#F5F1EB]/10 border-2 min-h-[120px] sm:min-h-[150px]"
              >
                <CardContent className="text-center flex flex-col justify-between h-full">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#E07A5F] to-[#E07A5F]/80 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                    {React.createElement(s.icon, { className: "w-4 h-4 sm:w-5 sm:h-5 text-white" })}
                  </div>
                  <div className="text-xl sm:text-2xl font-bold text-[#2D5A4A] dark:text-[#F5F1EB]">{s.number}</div>
                  <div className="text-xs sm:text-sm opacity-80">{s.label}</div>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>
      </motion.section>
      <motion.div
        className="flex justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <Link
          to={"/aula01"}
          className="px-6 py-3 bg-gradient-to-r from-[#E07A5F] to-[#E07A5F]/80 text-white font-semibold rounded-full shadow-lg hover:from-[#E07A5F]/90 hover:to-[#E07A5F]/70 transition-all duration-300"
        >
          Começar a Aula 1
        </Link>
      </motion.div>
      {/* Footer */}
      <motion.footer
        className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 py-10 text-center"
        initial="hidden"
        animate="show"
        variants={container}
      >
        <div className="mx-auto max-w-xl p-4 sm:p-6 rounded-2xl bg-white/6 backdrop-blur-md">
          <p className="text-xs sm:text-sm opacity-70">
            © 2024 Nathalia Macedo - Supermódulo Creative Code UX/UI Design
          </p>
        </div>
      </motion.footer>
    </div>
  )
}
