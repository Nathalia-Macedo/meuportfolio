"use client"

import React from "react"
import Hero from "../Components/HeroSection"
import About from "../Components/AboutSection"
import Projects from "../Components/Projects"
import Partnerships from "../Components/ParceriaSection"
import Services from "../Components/Services"
import CTASection from "../Components/CTASession"
export default function Home() {
  const [isDarkMode, setIsDarkMode] = React.useState(false)

  React.useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDarkMode])

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <main>
      <Hero toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      <About />
      <Projects/>
      <Partnerships/>
      <Services/>
      <CTASection/>
    </main>
  )
}
