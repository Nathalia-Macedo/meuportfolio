import React from "react"
import { ArrowLeft } from 'lucide-react'

const Header = ({ toggleDarkMode, isDarkMode }) => {
  const handleGoHome = (e) => {
    e.preventDefault()
    window.location.href = '/'
  }

  return (
    <header className="fixed top-0 left-0 right-0 bg-sand/80 dark:bg-jungle/80 backdrop-blur-sm transition-colors duration-300 py-1 z-10">
      <nav className="max-w-7xl mx-auto px-2">
        <div className="flex justify-between items-center h-12">
          <a
            href="/"
            onClick={handleGoHome}
            className="flex items-center text-jungle dark:text-sand hover:text-terra dark:hover:text-terra transition-colors"
          >
            <ArrowLeft size={20} className="mr-2" />
            <span className="text-sm font-medium">Voltar</span>
          </a>
          <button
            onClick={toggleDarkMode}
            className="text-jungle dark:text-sand hover:text-terra dark:hover:text-terra transition-colors text-sm"
          >
            {isDarkMode ? "Light" : "Dark"}
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Header