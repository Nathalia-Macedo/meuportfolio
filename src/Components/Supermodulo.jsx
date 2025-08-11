"use client"

import React, { useState, useEffect, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Link } from "react-router-dom"
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
    animate: { y: [0, -8, 0], transition: { duration: 4, repeat: Infinity, ease: "easeInOut" } },
  }

  // subtle, very thin grid texture (inline style so tailwind not required)
  const gridStyle = useMemo(() => ({
    backgroundImage:
      `repeating-linear-gradient(0deg, rgba(${darkMode ? "255,255,255,0.03" : "0,0,0,0.03"}), rgba(${darkMode ? "255,255,255,0.03" : "0,0,0,0.03"}) 1px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, rgba(${darkMode ? "255,255,255,0.03" : "0,0,0,0.03"}), rgba(${darkMode ? "255,255,255,0.03" : "0,0,0,0.03"}) 1px, transparent 1px, transparent 40px)`,
  }), [darkMode])

  const lessons = [
    {
      icon: Lightbulb,
      title: "Aula 1 – Conceitos e Base de Design",
      description:
        "O que é landing page, estrutura comum, princípios de design e introdução ao Figma.",
      duration: "3h",
      gradient: "from-yellow-400/20 to-orange-500/20",
    },
    {
      icon: Palette,
      title: "Aula 2 – Layout no Figma",
      description:
        "Transforme wireframes em layouts, escolha cores e fontes, e exporte assets.",
      duration: "3h",
      gradient: "from-purple-400/20 to-pink-500/20",
    },
    {
      icon: Code,
      title: "Aula 3 – Do Figma ao Código",
      description: "Estrutura HTML básica, boas práticas e criação do esqueleto da landing page.",
      duration: "3h",
      gradient: "from-blue-400/20 to-cyan-500/20",
    },
    {
      icon: Zap,
      title: "Aula 4 – Estilizando a Página",
      description: "CSS básico, Flexbox, e estilização para aproximar do design Figma.",
      duration: "3h",
      gradient: "from-green-400/20 to-emerald-500/20",
    },
    {
      icon: CheckCircle,
      title: "Aula 5 – Finalização e Publicação",
      description:
        "Ajustes finais, responsividade, GitHub, publicação no Vercel e apresentação.",
      duration: "3h",
      gradient: "from-orange-400/20 to-red-500/20",
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
        darkMode ? "bg-[#0f1720] text-[#F5F1EB]" : "bg-[#F5F1EB] text-[#13231c]"
      }`}
      style={gridStyle}
    >
      {/* subtle vignette + soft noise overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            darkMode
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
            transition={{ duration: f.dur, repeat: Infinity, ease: "easeInOut", delay: i * 0.6 }}
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
        className="relative z-20 flex items-center justify-between p-6 max-w-7xl mx-auto"
        initial="hidden"
        animate="show"
        variants={container}
      >
        <div className="flex items-center gap-3">
          <Button variant="ghost" className="flex items-center gap-2 text-sm">
            <ArrowLeft className="w-4 h-4" />
            Voltar
          </Button>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="ghost" onClick={toggleDarkMode} className="flex items-center gap-2 text-sm">
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            {darkMode ? "Light" : "Dark"}
          </Button>
        </div>
      </motion.header>

      {/* Hero */}
      <motion.section
        className="relative z-20 max-w-7xl mx-auto px-6 py-16 lg:py-24"
        initial="hidden"
        animate="show"
        variants={container}
      >
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div variants={card} className="space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
              Supermódulo
              <br />
              <span className="text-[#E07A5F]">Creative Code</span>
              <br />
              UX/UI Design
            </h1>
            <p className="text-lg max-w-xl opacity-90">
              Domine os fundamentos visuais que transformam páginas comuns em experiências incríveis. Aula prática,
              objetiva e com resultado.
            </p>

            <div className="flex items-center gap-4 mt-4">
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
          <motion.div variants={card} className="relative">
            <div className="absolute -inset-3 rounded-3xl blur-3xl opacity-30 bg-gradient-to-r from-[#E07A5F]/10 to-[#2D5A4A]/6" />
            <Card className={`relative bg-white/90 dark:bg-[#0b1320]/60 border-2 border-white/20 shadow-xl min-h-[200px]`}>
              <CardContent className="p-8 flex flex-col justify-between h-full">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#E07A5F] to-[#E07A5F]/80 rounded-full flex items-center justify-center shadow">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Objetivo do Curso</h3>
                    <p className="text-sm opacity-80">Dominar design UX/UI e codificação prática para criar landing pages impactantes.</p>
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#E07A5F] mt-0.5" />
                    <p className="text-sm opacity-80">5 aulas práticas de 3h cada, segundas das 20h30 às 22h30</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#E07A5F] mt-0.5" />
                    <p className="text-sm opacity-80">Presencial em São Paulo com suporte ao vivo</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.section>

      {/* Course Content */}
      <motion.section className="relative z-20 max-w-7xl mx-auto px-6 py-12" initial="hidden" animate="show" variants={container}>
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold">Conteúdo do Supermódulo</h2>
          <p className="text-lg max-w-2xl mx-auto opacity-90 mt-3">Um curso completo com 5 aulas de 3h — prático e direto ao ponto.</p>
        </div>

        <motion.div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" variants={container}>
          {lessons.map((item, index) => {
            const Icon = item.icon
            const isLast = index === lessons.length - 1
            return (
              <motion.div
                key={index}
                variants={card}
                whileHover="hover"
                className={`relative h-full ${isLast ? "lg:col-span-2 lg:col-start-2" : ""}`}
              >
                <div className={`absolute -inset-2 rounded-2xl blur-lg opacity-0 hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r ${item.gradient}`} />

                <Card className="relative bg-white/85 dark:bg-[#081018]/50 border-2 border-white/10 shadow-md h-full">
                  <CardContent className="p-6 text-center flex flex-col justify-between h-full">
                    <motion.div className="w-16 h-16 bg-gradient-to-br from-[#E07A5F] to-[#E07A5F]/80 rounded-full flex items-center justify-center mx-auto mb-3" animate={{ y: [0, -6, 0], rotate: [0, 6, -6, 0] }} transition={{ duration: 6, repeat: Infinity }}>
                      <Icon className="w-8 h-8 text-white" />
                    </motion.div>

                    <div className="flex-1 flex flex-col justify-center">
                      <h3 className="font-semibold text-lg">{item.title}</h3>
                      <p className="text-sm opacity-80 mt-2">{item.description}</p>
                    </div>

                    <div className="flex items-center justify-center gap-2 pt-3">
                      <Clock className="w-4 h-4 text-[#E07A5F]" />
                      <span className="text-sm font-medium">{item.duration}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </motion.section>

      {/* Detalhamento da Aula 1 */}
      <motion.section className="relative z-20 max-w-7xl mx-auto px-6 py-12" initial="hidden" animate="show" variants={container}>
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold">Detalhamento da Aula 1</h2>
          <p className="text-lg max-w-2xl mx-auto opacity-90 mt-3">Fundamentos e Base de Design para Landing Pages (3h, com intervalo de 15 min)</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div variants={card} className="">
            <Card className="bg-white/85 dark:bg-[#081018]/50 border-2 shadow-md min-h-[220px]">
              <CardContent className="p-6 flex flex-col justify-between h-full">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#E07A5F] to-[#E07A5F]/80 rounded-full flex items-center justify-center">
                    <Lightbulb className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Parte 1 – Introdução (30 min)</h3>
                  </div>
                </div>

                <ul className="list-disc list-inside mt-4 space-y-2 text-sm opacity-85">
                  <li>O que é uma landing page: página para vender ou apresentar algo de forma simples e direta.</li>
                  <li>Elementos comuns: Hero, Benefícios, Prova social, Call to Action, Rodapé.</li>
                  <li>Explicação com exemplos reais no projetor.</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={card} className="">
            <Card className="bg-white/85 dark:bg-[#081018]/50 border-2 shadow-md min-h-[220px]">
              <CardContent className="p-6 flex flex-col justify-between h-full">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#E07A5F] to-[#E07A5F]/80 rounded-full flex items-center justify-center">
                    <Palette className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Parte 2 – Princípios de Design (45 min)</h3>
                  </div>
                </div>

                <ul className="list-disc list-inside mt-4 space-y-2 text-sm opacity-85">
                  <li>Hierarquia visual: o mais importante aparece maior ou mais chamativo.</li>
                  <li>Espaçamento: espaço que "respira" e organiza a página.</li>
                  <li>Cores, tipografia e contraste para leitura.</li>
                  <li>Exercício prático de comparação entre designs.</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.section>

      {/* Benefits + Stats */}
      <motion.section className="relative z-20 max-w-7xl mx-auto px-6 py-12" initial="hidden" animate="show" variants={container}>
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div variants={card}>
            <h2 className="text-3xl font-bold">Por que escolher este Supermódulo?</h2>
            <p className="mt-4 text-lg max-w-xl opacity-90">Metodologia prática, exercícios hands-on e suporte completo — tudo pensado para você aplicar na prática.</p>

            <ul className="mt-6 space-y-3 text-sm">
              {[
                "Metodologia prática sem enrolação",
                "Exercícios hands-on durante a aula",
                "Suporte completo para dúvidas",
                "Material de apoio incluso",
                "Certificado de participação",
              ].map((b, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-[#E07A5F] to-[#E07A5F]/80 mt-1" />
                  <span className="opacity-90">{b}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={card} className="grid grid-cols-2 gap-6">
            {[
              { number: "15h", label: "Duração Total", icon: Clock },
              { number: "100%", label: "Prático", icon: Target },
              { number: "5", label: "Aulas", icon: Code },
              { number: "∞", label: "Suporte", icon: Users },
            ].map((s, i) => (
              <Card key={i} className="p-4 bg-white/85 dark:bg-[#081018]/50 border-2 min-h-[150px]">
                <CardContent className="text-center flex flex-col justify-between h-full">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#E07A5F] to-[#E07A5F]/80 rounded-full flex items-center justify-center mx-auto mb-3">
                    <s.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-2xl font-bold">{s.number}</div>
                  <div className="text-sm opacity-80">{s.label}</div>
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
      to={'/aula01'}
        className="px-6 py-3 bg-gradient-to-r from-[#E07A5F] to-[#E07A5F]/80 text-white font-semibold rounded-full shadow-lg hover:from-[#E07A5F]/90 hover:to-[#E07A5F]/70 transition-all duration-300"
      >
        Começar a Aula 1
      </Link>
    </motion.div>
      {/* Footer */}
      <motion.footer className="relative z-20 max-w-7xl mx-auto px-6 py-10 text-center" initial="hidden" animate="show" variants={container}>
        <div className="mx-auto max-w-xl p-6 rounded-2xl bg-white/6 backdrop-blur-md">
          <p className="text-sm opacity-70">© 2024 Nathalia Macedo - Supermódulo Creative Code UX/UI Design</p>
        </div>
      </motion.footer>
    </div>

  )
}
