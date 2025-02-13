"use client"

import { useState, useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const [hoveredIcon, setHoveredIcon] = useState(null)
  const location = useLocation()
  const navigate = useNavigate()
  const isHomePage = location.pathname === "/"

  const links = [
    { name: "Sobre Mim", anchor: "#about" },
    { name: "Projetos", anchor: "#projetos" },
    { name: "Parcerias", anchor: "#parceria" },
    { name: "Serviços", anchor: "#serviços" },
    { name: "Conteúdos", anchor: "#conteudos" },
    { name: "Contato", anchor: "#contact" },
  ]

  const socialLinks = [
    { name: "Instagram", icon: "instagram", url: "https://www.instagram.com/nath_dev_" },
    { name: "LinkedIn", icon: "linkedin", url: "https://www.linkedin.com/in/nathaliamacedo" },
    { name: "GitHub", icon: "code", url: "https://github.com/nathaliamacedo" },
  ]

  const handleNavigation = (anchor) => {
    if (isHomePage) {
      // Se já estiver na página inicial, apenas role para a âncora
      const element = document.querySelector(anchor)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    } else {
      // Se estiver em outra página, navegue para a home e depois role para a âncora
      navigate("/", { state: { scrollTo: anchor } })
    }
  }

  useEffect(() => {
    if (location.state && location.state.scrollTo) {
      const element = document.querySelector(location.state.scrollTo)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
      // Limpe o state após a rolagem
      navigate(location.pathname, { replace: true, state: {} })
    }
  }, [location, navigate])

  return (
    <footer className="bg-jungle text-sand py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Logo and Description */}
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-2xl font-bold mb-4">Nathalia Macedo</h2>
            <p className="text-sm text-center md:text-left mb-4">
              Desenvolvedora Full Stack, SDR, Copywriter, e Professora apaixonada por tecnologia e educação.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-semibold mb-4">Links Rápidos</h3>
            <nav className="grid grid-cols-2 gap-2">
              {links.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavigation(link.anchor)}
                  className="text-left hover:text-terra transition-colors duration-300 transform hover:translate-x-1"
                >
                  {link.name}
                </button>
              ))}
            </nav>
          </div>

          {/* Column 3: Contact and Social */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-semibold mb-4">Contato</h3>
            <a
              href="mailto:Nathaliademacedomartins@gmail.com"
              className="flex items-center hover:text-terra transition-colors duration-300 mb-2"
            >
              <span className="material-icons mr-2">email</span>
              Nathaliademacedomartins@gmail.com
            </a>
            <a
              href="tel:+5571987257532"
              className="flex items-center hover:text-terra transition-colors duration-300 mb-4"
            >
              <span className="material-icons mr-2">phone</span>
              +55 (71) 98725-7532
            </a>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                  onMouseEnter={() => setHoveredIcon(social.name)}
                  onMouseLeave={() => setHoveredIcon(null)}
                >
                  <span className="material-icons text-2xl text-sand group-hover:text-terra transition-colors duration-300">
                    {social.icon}
                  </span>
                  {hoveredIcon === social.name && (
                    <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-terra text-sand text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {social.name}
                    </span>
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar with animated border */}
        <div className="mt-8 pt-8 text-center relative">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-jungle via-terra to-jungle animate-gradient"></div>
          <p className="text-sm">&copy; {currentYear} Nathalia Macedo. Todos os direitos reservados.</p>
        </div>
      </div>

      {/* Inline styles for Material Icons and gradient animation */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/icon?family=Material+Icons');

        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradientMove 3s ease infinite;
        }

        .material-icons {
          font-family: 'Material Icons';
          font-weight: normal;
          font-style: normal;
          font-size: 24px;
          line-height: 1;
          letter-spacing: normal;
          text-transform: none;
          display: inline-block;
          white-space: nowrap;
          word-wrap: normal;
          direction: ltr;
          -webkit-font-feature-settings: 'liga';
          -webkit-font-smoothing: antialiased;
        }
      `}</style>
    </footer>
  )
}

export default Footer

