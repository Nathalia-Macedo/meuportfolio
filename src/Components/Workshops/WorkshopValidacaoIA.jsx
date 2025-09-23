"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Brain,
  Target,
  ArrowRight,
  ArrowLeft,
  Lightbulb,
  Search,
  User,
  Zap,
  MessageCircle,
  CheckCircle,
  Clock,
  Users,
  Rocket,
  Sun,
  Moon,
  Mail,
  Instagram,
  Twitter,
  Linkedin,
} from "lucide-react"

const WorkshopValidacaoIA = () => {
  const [activeSection, setActiveSection] = useState(0)
  const [quizAnswers, setQuizAnswers] = useState({})
  const [showFeedback, setShowFeedback] = useState({})
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [progress, setProgress] = useState(0)

  // Toggle dark mode and persist in localStorage
  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode
    setIsDarkMode(newDarkMode)
    document.documentElement.classList.toggle("dark", newDarkMode)
    localStorage.setItem("theme", newDarkMode ? "dark" : "light")
  }

  // Initialize theme based on system preference or saved preference
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    const initialDarkMode = savedTheme ? savedTheme === "dark" : prefersDark

    setIsDarkMode(initialDarkMode)
    document.documentElement.classList.toggle("dark", initialDarkMode)
  }, [])

  // Update progress when activeSection changes
  useEffect(() => {
    if (sections.length > 0) {
      setProgress(Math.round(((activeSection + 1) / sections.length) * 100))
    } else {
      setProgress(0)
    }
  }, [activeSection])

  // Sections array (restored from your original code)
  const sections = [
    {
      id: 0,
      title: "Introdução",
      subtitle: "Por que validar ideias com IA?",
      icon: <Target className="w-6 h-6" />,
      content: {
        main: "Validar ideias antes de investir tempo e dinheiro é essencial. 90% das startups falham por falta de validação: criam produtos que ninguém quer ou não resolvem problemas reais. A IA acelera esse processo, permitindo mapear dores, analisar mercados e testar aceitação em horas, não meses.",
        points: [
          "Descobrir problemas reais",
          "Analisar concorrência e mercado",
          "Criar personas detalhadas",
          "Testar aceitação com landing pages",
          "Prototipar rapidamente",
          "Simular feedback de clientes",
        ],
      },
    },
    {
      id: 1,
      title: "Módulo 1: Problemas Reais",
      subtitle: "Descobrindo dores com IA",
      icon: <Lightbulb className="w-6 h-6" />,
      content: {
        main: "Um produto sem problema real está destinado ao fracasso. A IA ajuda a identificar dores e necessidades rapidamente, mapeando o que realmente importa para o público-alvo.",
        detailed_explanation: {
          intro: "A chave é focar em problemas urgentes e frequentes. A IA analisa dados e gera insights em minutos.",
          prompt_example: {
            title: "Exemplo de Prompt",
            description: "“Liste os 10 maiores problemas enfrentados por designers freelancers no Brasil, e organize por urgência e frequência.”",
          },
          practice: {
            title: "Atividade Prática",
            steps: [
              "Escolha um nicho (ex.: mães solo, microempresários, gamers).",
              "Use IA para gerar uma lista de problemas.",
              "Identifique 1 problema que faria sentido resolver.",
            ],
          },
          common_mistake: "Escolher um problema que você acha importante, mas não é urgente para o público.",
        },
      },
    },
    {
      id: 2,
      title: "Módulo 2: Análise de Mercado",
      subtitle: "Concorrência e oportunidades",
      icon: <Search className="w-6 h-6" />,
      content: {
        main: "Antes de investir, é crucial entender quem já atua no mercado, como se posicionam e onde há brechas. A IA mapeia concorrentes e identifica oportunidades em minutos.",
        detailed_explanation: {
          intro: "Conhecer o mercado evita reinventar a roda e ajuda a encontrar espaços inexplorados.",
          prompt_example: {
            title: "Exemplo de Prompt",
            description: "“Liste os principais concorrentes que oferecem soluções para [problema escolhido]. Mostre forças, fraquezas e oportunidades para entrar nesse mercado.”",
          },
          practice: {
            title: "Atividade Prática",
            steps: [
              "Rode o prompt para sua ideia de produto.",
              "Monte um mini-mapa competitivo (quem já existe, qual espaço falta).",
            ],
          },
          common_mistake: "Ignorar concorrência achando que 'não existe ninguém fazendo isso' (quase sempre existe).",
        },
      },
    },
    {
      id: 3,
      title: "Módulo 3: Criação de Personas",
      subtitle: "Conhecendo o cliente ideal",
      icon: <User className="w-6 h-6" />,
      content: {
        main: "Personas são representações do seu cliente ideal. A IA cria personas ricas em detalhes, com objetivos, dores e linguagem específica.",
        detailed_explanation: {
          intro: "Uma boa persona guia decisões de produto e comunicação. A IA ajuda a construir perfis realistas rapidamente.",
          prompt_example: {
            title: "Exemplo de Prompt",
            description: "“Crie 3 personas diferentes que representem potenciais clientes para [ideia de produto], incluindo: nome fictício, idade, profissão, objetivos, dores, linguagem que usam e canais onde estão.”",
          },
          practice: {
            title: "Atividade Prática",
            steps: [
              "Crie 3 personas para sua ideia usando IA.",
              "Escolha a principal (cliente ideal).",
            ],
          },
          common_mistake: "Criar personas genéricas demais, que não representam ninguém específico.",
        },
      },
    },
    {
      id: 4,
      title: "Módulo 4: Teste de Aceitação",
      subtitle: "Validando a ideia rapidamente",
      icon: <Zap className="w-6 h-6" />,
      content: {
        main: "Testar a aceitação da ideia antes de construir o produto economiza tempo e dinheiro. A IA cria textos, imagens e páginas para simular a oferta.",
        detailed_explanation: {
          intro: "Uma landing page ou mockup pode mostrar se há interesse real no produto sem precisar desenvolvê-lo.",
          prompt_examples: [
            {
              title: "Prompt para Copy de Landing Page",
              description: "“Escreva um texto de landing page para [ideia de produto]. Estrutura: título forte, descrição curta, 3 benefícios claros, e um botão com call to action.”",
            },
            {
              title: "Prompt para Imagem",
              description: "“Crie uma imagem de mockup de aplicativo que ajuda [persona] a resolver [problema], estilo minimalista e moderno.”",
            },
          ],
          practice: {
            title: "Atividade Prática",
            steps: [
              "Crie uma headline e CTA para uma landing page simples.",
              "Teste com amigos ou redes sociais para medir interesse.",
            ],
          },
          common_mistake: "Confundir validação com vendas. Nesta etapa, você quer medir interesse, não lucro.",
        },
      },
    },
    {
      id: 5,
      title: "Módulo 5: Prototipagem",
      subtitle: "Criando rascunhos rápidos",
      icon: <Rocket className="w-6 h-6" />,
      content: {
        main: "Protótipos são versões iniciais ou 'fakes' do produto. A IA (ChatGPT, Figma AI, Midjourney) cria wireframes, imagens ou trechos de código em minutos.",
        detailed_explanation: {
          intro: "Prototipar rápido permite testar ideias sem investir muito tempo ou dinheiro.",
          prompt_example: {
            title: "Exemplo de Prompt",
            description: "“Gere um wireframe básico para um aplicativo que faz [função do produto]. Mostre telas principais: login, dashboard, tela de ação.”",
          },
          practice: {
            title: "Atividade Prática",
            steps: [
              "Crie um protótipo (wireframe, imagem ou trecho de código) usando IA.",
            ],
          },
          common_mistake: "Gastar semanas em design antes de validar interesse real.",
        },
      },
    },
    {
      id: 6,
      title: "Módulo 6: Feedback Simulado",
      subtitle: "Testando reações com IA",
      icon: <MessageCircle className="w-6 h-6" />,
      content: {
        main: "Simular feedback de clientes com IA ajuda a prever objeções e melhorar a ideia antes de testes reais.",
        detailed_explanation: {
          intro: "A IA responde como se fosse a persona, permitindo antecipar problemas e ajustar o produto.",
          prompt_example: {
            title: "Exemplo de Prompt",
            description: "“Você é [persona]. O produto é [descrição]. Responda: você compraria? O que te faria desistir? O que falta para ser irresistível?”",
          },
          practice: {
            title: "Atividade Prática",
            steps: [
              "Rode uma entrevista simulada com sua persona principal.",
              "Liste 3 objeções e 3 melhorias sugeridas.",
            ],
          },
          common_mistake: "Confiar 100% no feedback da IA. Use como simulação, depois teste com humanos reais.",
        },
      },
    },
    {
      id: 7,
      title: "Encerramento",
      subtitle: "Checklist de Validação",
      icon: <CheckCircle className="w-6 h-6" />,
      content: {
        main: "Concluímos o workshop com um checklist para garantir que sua ideia foi validada de forma eficiente.",
        detailed_explanation: {
          intro: "Este checklist é sua referência para validar ideias com IA antes de investir.",
          checklist: [
            "Descobri um problema real?",
            "Analisei concorrência?",
            "Criei personas ricas?",
            "Testei aceitação com landing page?",
            "Criei protótipo rápido?",
            "Coletei feedback (mesmo simulado)?",
          ],
          final_message: "A IA não substitui validação real, mas acelera os primeiros 70% do processo. Use-a para reduzir riscos e ganhar tempo!",
        },
      },
    },
    {
      id: 8,
      title: "Quiz Final",
      subtitle: "Teste seus conhecimentos!",
      icon: <Brain className="w-6 h-6" />,
      content: {
        main: "Hora de testar o que você aprendeu! Responda ao quiz final e veja como está sua compreensão sobre validação de ideias com IA.",
        quiz: [
          {
            question: "Por que validar ideias antes de investir?",
            options: [
              "Para gastar mais dinheiro",
              "Porque 90% das startups falham sem validação",
              "Para criar mais reuniões",
              "Porque é mais divertido",
            ],
            correct: 1,
            feedback: "90% das startups falham por falta de validação, criando produtos sem mercado real.",
          },
          {
            question: "O que a IA faz ao mapear problemas?",
            options: [
              "Cria problemas fictícios",
              "Analisa dados para identificar dores reais",
              "Substitui o mercado",
              "Ignora o público-alvo",
            ],
            correct: 1,
            feedback: "A IA analisa dados para encontrar dores urgentes e frequentes.",
          },
          {
            question: "Por que mapear concorrentes com IA?",
            options: [
              "Para copiar seus produtos",
              "Para identificar brechas no mercado",
              "Para evitar qualquer competição",
              "Para aumentar custos",
            ],
            correct: 1,
            feedback: "Mapear concorrentes ajuda a encontrar oportunidades e evitar redundâncias.",
          },
          {
            question: "O que uma boa persona deve incluir?",
            options: [
              "Apenas nome e idade",
              "Objetivos, dores, linguagem e canais",
              "Apenas profissão",
              "Nenhum detalhe específico",
            ],
            correct: 1,
            feedback: "Personas precisam de detalhes específicos para guiar decisões.",
          },
          {
            question: "Qual o objetivo de uma landing page na validação?",
            options: [
              "Gerar lucro imediato",
              "Medir interesse na ideia",
              "Vender o produto final",
              "Substituir o produto",
            ],
            correct: 1,
            feedback: "Landing pages testam interesse, não vendas iniciais.",
          },
          {
            question: "Por que prototipar com IA?",
            options: [
              "Para criar o produto final",
              "Para testar ideias rapidamente",
              "Para gastar mais tempo",
              "Para evitar validação",
            ],
            correct: 1,
            feedback: "Prototipagem rápida com IA testa ideias sem alto investimento.",
          },
          {
            question: "Qual o papel do feedback simulado com IA?",
            options: [
              "Substituir testes com humanos",
              "Prever objeções e ajustar ideias",
              "Criar o produto final",
              "Ignorar o mercado",
            ],
            correct: 1,
            feedback: "Feedback simulado antecipa problemas, mas deve ser validado com humanos.",
          },
          {
            question: "Qual o objetivo final do checklist de validação?",
            options: [
              "Substituir testes reais",
              "Reduzir riscos antes de investir",
              "Criar produtos sem validação",
              "Evitar o uso de IA",
            ],
            correct: 1,
            feedback: "O checklist ajuda a reduzir riscos antes de investir tempo e dinheiro.",
          },
        ],
      },
    },
  ]

  const handleQuizAnswer = (questionIndex, answerIndex) => {
    const key = `quiz-${questionIndex}`
    setQuizAnswers((prev) => ({
      ...prev,
      [key]: answerIndex,
    }))
    setShowFeedback((prev) => ({
      ...prev,
      [key]: true,
    }))
  }

  const nextSection = () => {
    if (activeSection < sections.length - 1) {
      setActiveSection(activeSection + 1)
    }
  }

  const prevSection = () => {
    if (activeSection > 0) {
      setActiveSection(activeSection - 1)
    }
  }

  const currentSection = sections[activeSection] || {
    title: "Carregando...",
    subtitle: "",
    icon: null,
    content: { main: "Carregando conteúdo..." },
  }

  const renderSectionContent = (section) => {
    if (!section) return <p className="text-jungle/80 dark:text-cream/90">Erro: Seção não encontrada.</p>

    return (
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
        <div className="bg-cream/90 dark:bg-jungle/80 rounded-2xl p-6 md:p-8 border border-jungle/10 dark:border-cream/20 shadow-lg">
          <p className="text-jungle/80 dark:text-cream/90 text-lg leading-relaxed mb-6 font-medium">{section.content.main}</p>

          {section.content.points && (
            <div className="grid gap-4 md:grid-cols-2">
              {section.content.points.map((point, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-3 bg-cream/50 dark:bg-jungle/50 p-4 rounded-lg transition-all duration-100 hover:shadow-xl hover:z-10"
                  whileHover={{ scale: 1.07, boxShadow: '0 8px 32px 0 rgba(0,0,0,0.18)' }}
                  transition={{ type: 'tween', duration: 0.18, ease: 'easeOut' }}
                >
                  <div className="w-8 h-8 bg-terra/20 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-terra" />
                  </div>
                  <span className="text-jungle/80 dark:text-cream/90">{point}</span>
                </motion.div>
              ))}
            </div>
          )}

          {section.content.detailed_explanation && (
            <div className="space-y-6 mt-6">
              <p className="text-jungle/80 dark:text-cream/90 leading-relaxed">{section.content.detailed_explanation.intro}</p>

              {section.content.detailed_explanation.prompt_example && (
                <motion.div
                  className="bg-cream/30 rounded-lg p-6 border border-terra/10 transition-all duration-100 hover:shadow-lg hover:bg-cream/50 dark:hover:bg-jungle/50 hover:z-10"
                  whileHover={{ scale: 1.04, boxShadow: '0 4px 24px 0 rgba(0,0,0,0.12)' }}
                  transition={{ type: 'tween', duration: 0.14, ease: 'easeOut' }}
                >
                  <h4 className="text-xl font-semibold text-terra mb-3">{section.content.detailed_explanation.prompt_example.title}</h4>
                  <p className="text-jungle/80 dark:text-cream/90 font-mono text-sm bg-cream/10 p-3 rounded">{section.content.detailed_explanation.prompt_example.description}</p>
                </motion.div>
              )}

              {section.content.detailed_explanation.prompt_examples && (
                <div className="space-y-4">
                  {section.content.detailed_explanation.prompt_examples.map((prompt, index) => (
                    <motion.div
                      key={index}
                      className="bg-cream/30 rounded-lg p-6 border border-terra/10 transition-all duration-100 hover:shadow-lg hover:bg-cream/50 dark:hover:bg-jungle/50 hover:z-10"
                      whileHover={{ scale: 1.04, boxShadow: '0 4px 24px 0 rgba(0,0,0,0.12)' }}
                      transition={{ type: 'tween', duration: 0.14, ease: 'easeOut' }}
                    >
                      <h4 className="text-xl font-semibold text-terra mb-3">{prompt.title}</h4>
                      <p className="text-jungle/80 dark:text-cream/90 font-mono text-sm bg-cream/10 p-3 rounded">{prompt.description}</p>
                    </motion.div>
                  ))}
                </div>
              )}

              {section.content.detailed_explanation.practice && (
                <motion.div
                  className="bg-cream/30 rounded-lg p-6 border border-terra/10 transition-all duration-100 hover:shadow-lg hover:bg-cream/50 dark:hover:bg-jungle/50 hover:z-10"
                  whileHover={{ scale: 1.04, boxShadow: '0 4px 24px 0 rgba(0,0,0,0.12)' }}
                  transition={{ type: 'tween', duration: 0.14, ease: 'easeOut' }}
                >
                  <h4 className="text-xl font-semibold text-terra mb-3">{section.content.detailed_explanation.practice.title}</h4>
                  <ul className="space-y-2">
                    {section.content.detailed_explanation.practice.steps.map((step, index) => (
                      <li key={index} className="flex items-start text-jungle/80 dark:text-cream/90">
                        <span className="text-terra mr-2">→</span>
                        {step}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}

              {section.content.detailed_explanation.common_mistake && (
                <motion.div
                  className="bg-terra/10 dark:bg-terra/20 rounded-lg p-4 border border-terra/20 transition-all duration-100 hover:shadow-lg hover:bg-terra/20 hover:z-10"
                  whileHover={{ scale: 1.04, boxShadow: '0 4px 24px 0 rgba(0,0,0,0.12)' }}
                  transition={{ type: 'tween', duration: 0.14, ease: 'easeOut' }}
                >
                  <h4 className="text-lg font-semibold text-terra mb-2">Cuidado!</h4>
                  <p className="text-jungle/80 dark:text-cream/90">{section.content.detailed_explanation.common_mistake}</p>
                </motion.div>
              )}

              {section.content.detailed_explanation.checklist && (
                <motion.div
                  className="bg-cream/30 dark:bg-jungle/30 rounded-lg p-6 border border-terra/10 transition-all duration-100 hover:shadow-lg hover:bg-cream/50 dark:hover:bg-jungle/50 hover:z-10"
                  whileHover={{ scale: 1.04, boxShadow: '0 4px 24px 0 rgba(0,0,0,0.12)' }}
                  transition={{ type: 'tween', duration: 0.14, ease: 'easeOut' }}
                >
                  <h4 className="text-xl font-semibold text-terra mb-3">Checklist de Validação</h4>
                  <ul className="space-y-2">
                    {section.content.detailed_explanation.checklist.map((item, index) => (
                      <li key={index} className="flex items-start text-jungle/80 dark:text-cream/90">
                        <CheckCircle className="w-5 h-5 text-terra mr-2 mt-1" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="text-jungle/80 dark:text-cream/90 font-medium mt-4">{section.content.detailed_explanation.final_message}</p>
                </motion.div>
              )}
            </div>
          )}
        </div>

        {section.id === 8 && (
          <div className="bg-cream/90 dark:bg-jungle/80 rounded-2xl p-6 md:p-8 border border-jungle/10 dark:border-cream/20 shadow-lg">
            <h3 className="text-2xl font-bold text-terra mb-6 flex items-center">
              <Brain className="w-6 h-6 mr-3" />
              Desafio Final: Quiz
            </h3>
            <p className="text-jungle/80 dark:text-cream/90 mb-6">Teste o que aprendeu com este quiz gamificado! Escolha a resposta correta e veja a explicação imediatamente.</p>
            {section.content.quiz.map((question, qIndex) => (
              <motion.div
                key={qIndex}
                className="mb-8 last:mb-0 bg-cream/50 dark:bg-jungle/50 rounded-lg p-6"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: qIndex * 0.1 }}
              >
                <h4 className="text-lg font-semibold text-terra mb-4">
                  {qIndex + 1}. {question.question}
                </h4>
                <div className="grid gap-3">
                  {question.options.map((option, oIndex) => {
                    const answerKey = `quiz-${qIndex}`
                    const userAnswer = quizAnswers[answerKey]
                    const isAnswered = userAnswer !== undefined
                    const isCorrect = oIndex === question.correct
                    const isUserChoice = userAnswer === oIndex

                    return (
                      <motion.button
                        key={oIndex}
                        onClick={() => handleQuizAnswer(qIndex, oIndex)}
                        className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ${
                          isAnswered
                            ? isUserChoice
                              ? isCorrect
                                ? "border-green-500 bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-300"
                                : "border-red-500 bg-red-100 dark:bg-red-900/50 text-red-800 dark:text-red-300"
                              : isCorrect
                                ? "border-green-500 bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-300"
                                : "border-cream/30 dark:border-jungle/30 text-jungle/80 dark:text-cream/90 opacity-60"
                            : "border-cream/30 dark:border-jungle/30 text-jungle/80 dark:text-cream/90 hover:border-terra/50 hover:bg-terra/10"
                        }`}
                        whileHover={{ scale: isAnswered ? 1 : 1.02 }}
                        whileTap={{ scale: isAnswered ? 1 : 0.98 }}
                      >
                        <div className="flex items-center space-x-3">
                          <div className={`w-6 h-6 rounded-full flex items-center justify-center ${isAnswered && isCorrect && isUserChoice ? "bg-green-500" : isAnswered && !isCorrect && isUserChoice ? "bg-red-500" : "bg-terra/20"}`}>
                            {isAnswered && isCorrect && isUserChoice && <CheckCircle className="w-4 h-4 text-cream dark:text-jungle" />}
                            {isAnswered && !isCorrect && isUserChoice && <span className="text-cream dark:text-jungle">✗</span>}
                          </div>
                          <span>{option}</span>
                        </div>
                      </motion.button>
                    )
                  })}
                </div>
                {showFeedback[`quiz-${qIndex}`] && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 p-4 bg-terra/10 dark:bg-terra/20 rounded-lg border border-terra/20"
                  >
                    <p className="text-jungle/80 dark:text-cream/90">
                      <strong>Explicação:</strong> {question.feedback}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>
    )
  }

  return (
    <div className="min-h-screen bg-cream dark:bg-jungle transition-colors duration-300 relative overflow-hidden font-sans">
      <style jsx global>{`
        :root {
          --jungle: #2d4c3b;
          --cream: #e3dacd;
          --terra: #e2725b;
          --bg-primary: #e3dacd;
          --text-primary: #2d4c3b;
          --accent: #e2725b;
        }
        .dark {
          --bg-primary: #2d4c3b;
          --text-primary: #e3dacd;
          --accent: #e2725b;
        }
        html {
          background-color: var(--bg-primary);
          color: var(--text-primary);
          transition: background-color 0.3s ease, color 0.3s ease;
        }
        body, h1, h2, h3, h4, p, span, button, input {
          color: var(--text-primary);
        }
        button:disabled, input:disabled {
          background-color: var(--bg-primary);
          opacity: 0.5;
        }
      `}</style>

      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute bottom-20 right-20 w-32 h-32 border-2 border-jungle/10 dark:border-cream/20 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
      </div>

      <header className="fixed top-0 w-full z-30 bg-cream/95 dark:bg-jungle/80 backdrop-blur-md border-b border-jungle/10 dark:border-cream/20 transition-colors duration-300">
        <nav className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
          <motion.button
            onClick={() => window.history.back()}
            className="flex items-center space-x-2 text-jungle dark:text-cream hover:text-terra transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm font-medium">Voltar</span>
          </motion.button>

          <div className="flex items-center space-x-4">
            <motion.div
              className="w-10 h-10 bg-terra rounded-full flex items-center justify-center"
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.4 }}
            >
              <Brain className="w-6 h-6 text-cream dark:text-jungle" />
            </motion.div>
            <div>
              <h1 className="text-lg font-bold text-terra">Validação com IA</h1>
              <p className="text-xs text-terra font-medium">Ideias testadas, riscos reduzidos</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="text-right">
              <span className="text-sm font-medium text-jungle dark:text-cream">{progress}%</span>
              <div className="w-24 h-2 bg-jungle/20 dark:bg-cream/20 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-terra"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                />
              </div>
            </div>
            <motion.button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-jungle/10 dark:bg-cream/10 text-jungle dark:text-cream hover:bg-terra/20"
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.9 }}
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </motion.button>
          </div>
        </nav>
      </header>

      <section className="pt-24 pb-16 px-4 md:px-8 relative">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6 bg-terra/10 text-terra border border-terra/20"
          >
            <Rocket className="w-4 h-4 mr-2" />
            Workshop Interativo
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold text-terra mb-4"
          >
            Valide Suas Ideias com
            <span className="block text-jungle dark:text-cream"> Inteligência Artificial</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-jungle/80 dark:text-cream/90 max-w-3xl mx-auto"
          >
            Aprenda a usar IA para mapear problemas, criar personas, testar aceitação e prototipar rapidamente. Transforme ideias em sucessos com menos riscos!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 flex justify-center gap-6 flex-wrap"
          >
            {["2 Horas", "Hands-on", "Validação Rápida"].map((item, index) => (
              <motion.div
                key={index}
                className="bg-cream/80 dark:bg-jungle/80 rounded-lg p-4 flex items-center space-x-3"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="w-8 h-8 bg-terra/20 rounded-full flex items-center justify-center">
                  {index === 0 && <Clock className="w-5 h-5 text-terra" />}
                  {index === 1 && <Users className="w-5 h-5 text-terra" />}
                  {index === 2 && <Target className="w-5 h-5 text-terra" />}
                </div>
                <span className="text-jungle/80 dark:text-cream/90 font-medium">{item}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <div className="sticky top-20 z-20 bg-cream/95 dark:bg-jungle/80 backdrop-blur-md py-4 px-4 md:px-8 border-b border-jungle/10 dark:border-cream/20">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-2">
          {sections.map((section, index) => (
            <motion.button
              key={section.id}
              onClick={() => setActiveSection(index)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeSection === index
                  ? "bg-terra text-cream dark:text-jungle"
                  : "bg-jungle/10 dark:bg-cream/10 text-jungle dark:text-cream hover:bg-terra/20"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {section.icon}
              <span>{section.title}</span>
            </motion.button>
          ))}
        </div>
      </div>

      <main className="py-12 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="bg-cream/90 dark:bg-jungle/80 rounded-2xl p-6 md:p-8 border border-jungle/10 dark:border-cream/20 shadow-lg"
            >
              <div className="flex items-center space-x-4 mb-6">
                <motion.div
                  className="w-12 h-12 bg-terra rounded-full flex items-center justify-center text-cream dark:text-jungle"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                >
                  {currentSection.icon || <Brain className="w-6 h-6" />}
                </motion.div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-terra">{currentSection.title}</h2>
                  <p className="text-terra font-medium">{currentSection.subtitle}</p>
                </div>
              </div>
              {renderSectionContent(currentSection)}
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-between items-center mt-8">
            <motion.button
              onClick={prevSection}
              disabled={activeSection === 0}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                activeSection === 0
                  ? "bg-jungle/10 dark:bg-cream/10 text-jungle/40 dark:text-cream/40 cursor-not-allowed"
                  : "bg-jungle/20 dark:bg-cream/20 text-jungle dark:text-cream hover:bg-terra/20"
              }`}
              whileHover={activeSection > 0 ? { scale: 1.05 } : {}}
              whileTap={activeSection > 0 ? { scale: 0.95 } : {}}
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Anterior</span>
            </motion.button>

            <motion.button
              onClick={nextSection}
              disabled={activeSection === sections.length - 1}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                activeSection === sections.length - 1
                  ? "bg-jungle/10 dark:bg-cream/10 text-jungle/40 dark:text-cream/40 cursor-not-allowed"
                  : "bg-terra text-cream dark:text-jungle hover:bg-orange-500"
              }`}
              whileHover={activeSection < sections.length - 1 ? { scale: 1.05 } : {}}
              whileTap={activeSection < sections.length - 1 ? { scale: 0.95 } : {}}
            >
              <span>{activeSection === sections.length - 2 ? "Ir para o Quiz" : "Próximo"}</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </main>

      <footer className="py-6 px-4 bg-jungle dark:bg-cream text-cream dark:text-jungle text-center">
        <span className="font-semibold">Nathalia Macedo &copy; 2025</span>
      </footer>
    </div>
  )
}

export default WorkshopValidacaoIA