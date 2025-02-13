"use client"

import { useState, useEffect } from "react"
import { Code2, Terminal, Database, Globe } from "lucide-react"

const FullStackHero = () => {
  const [text, setText] = useState("")
  const [showContent, setShowContent] = useState(false)
  const [matrixChars, setMatrixChars] = useState([])
  const fullText = "Desenvolvimento Full Stack Nath Dev"

  // Typewriter effect
  useEffect(() => {
    if (text.length < fullText.length) {
      const timeout = setTimeout(() => {
        setText(fullText.slice(0, text.length + 1))
      }, 100)
      return () => clearTimeout(timeout)
    } else if (!showContent) {
      setTimeout(() => setShowContent(true), 500)
    }
  }, [text, showContent]) // Added showContent to dependencies

  // Matrix rain effect
  useEffect(() => {
    const chars =
      "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲンABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
    const columns = Math.floor(window.innerWidth / 10) // Update 1: Increased character density
    const initialChars = Array(columns)
      .fill()
      .map(() => ({
        chars: chars[Math.floor(Math.random() * chars.length)],
        x: Math.floor(Math.random() * window.innerWidth),
        y: Math.random() * -100,
        speed: Math.random() * 2 + 1,
      }))

    setMatrixChars(initialChars)

    const interval = setInterval(() => {
      setMatrixChars((prev) =>
        prev.map((char) => ({
          ...char,
          y: char.y > window.innerHeight ? Math.random() * -100 : char.y + char.speed,
          chars: Math.random() > 0.95 ? chars[Math.floor(Math.random() * chars.length)] : char.chars,
        })),
      )
    }, 50)

    const resizeHandler = () => {
      const newColumns = Math.floor(window.innerWidth / 10)
      setMatrixChars(
        Array(newColumns)
          .fill()
          .map(() => ({
            chars: chars[Math.floor(Math.random() * chars.length)],
            x: Math.floor(Math.random() * window.innerWidth),
            y: Math.random() * -100,
            speed: Math.random() * 2 + 1,
          })),
      )
    }

    window.addEventListener("resize", resizeHandler)

    return () => {
      clearInterval(interval)
      window.removeEventListener("resize", resizeHandler)
    }
  }, [])

  return (
    <div className="min-h-screen bg-jungle relative overflow-hidden">
      {/* Matrix Rain */}
      <div className="absolute inset-0 overflow-hidden">
        {matrixChars.map((char, i) => (
          <div
            key={i}
            className="absolute text-[#50C878] opacity-70 font-mono text-sm"
            style={{
              left: `${char.x}px`,
              top: `${char.y}px`,
              textShadow: "0 0 8px rgba(80, 200, 120, 0.8)",
            }}
          >
            {char.chars}
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          {/* Title with typewriter effect */}
          <div className="text-center mb-16">
            <div className="inline-block bg-jungle/80 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-[#50C878]/30 max-w-[90vw] sm:max-w-none">
              <h1 className="text-[#50C878] text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-mono tracking-wider break-words px-2">
                {text}
                <span className="animate-[blink_1s_step-end_infinite]">_</span>
              </h1>
            </div>
          </div>

          {/* Feature Cards */}
          {showContent && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 opacity-0 animate-[fadeIn_1s_forwards]">
              {[
                {
                  icon: Globe,
                  title: "Front-end",
                  desc: "Interfaces modernas e responsivas com React, Next.js e Tailwind CSS",
                },
                {
                  icon: Database,
                  title: "Back-end",
                  desc: "APIs robustas e escaláveis com Node.js, Python e bancos de dados SQL/NoSQL",
                },
                {
                  icon: Terminal,
                  title: "DevOps",
                  desc: "Deploy automatizado, CI/CD e monitoramento de aplicações",
                },
                {
                  icon: Code2,
                  title: "Arquitetura",
                  desc: "Soluções escaláveis seguindo as melhores práticas de desenvolvimento",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="group bg-jungle-dark/50 backdrop-blur-sm p-6 rounded-lg border border-[#50C878]/30 
                           hover:border-[#50C878] transition-all duration-300 transform hover:-translate-y-1
                           opacity-0 animate-[fadeIn_1s_forwards]"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <feature.icon className="w-8 h-8 sm:w-12 sm:h-12 text-[#50C878] mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-[#50C878] text-lg sm:text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-sand/80 group-hover:text-sand transition-colors duration-300 text-sm sm:text-base">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Custom animations */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes blink {
          from, to { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </div>
  )
}

export default FullStackHero

