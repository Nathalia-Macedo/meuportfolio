"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useNavigate } from "react-router-dom"
import { Terminal, HelpCircle, Home, Search, ChevronRight } from "lucide-react"

const NotFound404Terminal = () => {
  const [input, setInput] = useState("")
  const [output, setOutput] = useState([
    {
      type: "system",
      content: "Erro 404: Byte Perdido - A página que você procura se perdeu no código...",
    },
    {
      type: "system",
      content: "Quer tentar um debug? Digite help() para ver os comandos disponíveis.",
    },
  ])
  const [isTyping, setIsTyping] = useState(false)
  const navigate = useNavigate()
  const terminalRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  const commands = {
    "home()": {
      action: () => {
        addOutput("system", "Redirecionando para a página inicial...")
        setTimeout(() => navigate("/"), 1000)
      },
      description: "Redireciona para a página inicial",
    },
    "help()": {
      action: () => {
        addOutput(
          "system",
          `Comandos disponíveis:
• home() - Redireciona para a página inicial
• help() - Exibe esta mensagem de ajuda
• hint() - Recebe uma sugestão de página
• clear() - Limpa o terminal
• about() - Descobre mais sobre mim

PS: Não se preocupe, eu também já me perdi no código algumas vezes! 😅`,
        )
      },
      description: "Exibe a lista de comandos disponíveis",
    },
    "hint()": {
      action: () => {
        const pages = [
          "Que tal dar uma olhada no meu portfólio? Digite: home() e clique em 'Projetos'",
          "Quer saber mais sobre mim? Digite: home() e vá para 'Sobre'",
          "Procurando serviços de desenvolvimento? Digite: home() e explore 'Serviços'",
          "Vamos trabalhar juntos? Digite: home() e clique em 'Contato'",
        ]
        addOutput("system", pages[Math.floor(Math.random() * pages.length)])
      },
      description: "Sugere uma página do portfólio",
    },
    "clear()": {
      action: () => {
        setOutput([])
      },
      description: "Limpa o terminal",
    },
    "about()": {
      action: () => {
        addOutput(
          "system",
          `De vendedora ambulante a desenvolvedora, minha jornada é uma prova de que com dedicação e persistência, podemos alcançar nossos objetivos! 

Quer saber mais? Digite home() e vamos conversar! 🚀`,
        )
      },
      description: "Informações sobre mim",
    },
  }

  const addOutput = (type, content) => {
    setOutput((prev) => [...prev, { type, content }])
  }

  const handleCommand = (e) => {
    e.preventDefault()
    const command = input.trim().toLowerCase()

    addOutput("user", command)

    if (commands[command]) {
      commands[command].action()
    } else if (command !== "") {
      addOutput("error", `Comando não reconhecido: ${command}. Digite help() para ver os comandos disponíveis.`)
    }

    setInput("")
  }

  return (
    <div className="min-h-screen bg-[#1E1E1E] text-green-400 p-4 font-mono flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-3xl bg-[#2D2D2D] rounded-lg shadow-xl overflow-hidden"
      >
        {/* Terminal Header */}
        <div className="bg-[#3C3C3C] p-2 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="flex items-center space-x-2">
            <Terminal size={16} />
            <span className="text-sm text-gray-400">debug-terminal</span>
          </div>
          <div className="w-20"></div>
        </div>

        {/* Terminal Body */}
        <div
          ref={terminalRef}
          className="p-4 h-[60vh] overflow-y-auto space-y-2 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent"
        >
          <AnimatePresence>
            {output.map((line, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="flex"
              >
                <span className="text-blue-400 mr-2">
                  <ChevronRight size={16} className="inline" />
                </span>
                <span
                  className={`${
                    line.type === "error" ? "text-red-400" : line.type === "user" ? "text-yellow-400" : "text-green-400"
                  }`}
                >
                  {line.content}
                </span>
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Input Line */}
          <form onSubmit={handleCommand} className="flex items-center mt-2">
            <span className="text-blue-400 mr-2">
              <ChevronRight size={16} className="inline" />
            </span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 bg-transparent outline-none text-yellow-400 focus:outline-none"
              spellCheck="false"
              autoFocus
            />
          </form>
        </div>

        {/* Terminal Footer */}
        <div className="bg-[#3C3C3C] p-2 flex justify-between items-center text-xs text-gray-400">
          <div className="flex items-center space-x-2">
            <Search size={12} />
            <span>404 Debug Mode</span>
          </div>
          <div className="flex items-center space-x-2">
            <HelpCircle size={12} />
            <span>help()</span>
          </div>
          <div className="flex items-center space-x-2">
            <Home size={12} />
            <span>home()</span>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default NotFound404Terminal

