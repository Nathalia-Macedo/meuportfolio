"use client"
import { ArrowLeft } from "lucide-react"

const Header = ({ toggleDarkMode, isDarkMode }) => {
  const handleGoHome = (e) => {
    e.preventDefault()
    // Usar window.history.back() ou window.location.href dependendo da necessidade
    if (window.history.length > 1) {
      window.history.back()
    } else {
      window.location.href = "/"
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 bg-sand/80 dark:bg-jungle/80 backdrop-blur-sm transition-colors duration-300 py-1 z-50">
      <nav className="max-w-7xl mx-auto px-2">
        <div className="flex justify-between items-center h-12">
          <button
            onClick={handleGoHome}
            className="flex items-center text-jungle dark:text-sand hover:text-terra dark:hover:text-terra transition-colors"
          >
            <ArrowLeft size={20} className="mr-2" />
            <span className="text-sm font-medium">Voltar</span>
          </button>
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
