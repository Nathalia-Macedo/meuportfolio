// import SDRHero from "../Components/SDRService/HeroSection";
// import SDRServices from "../Components/SDRService/SDRServices";
// import Footer from "../Components/Footer";
// import Header from "../Components/Header";
// function SDRPage(){
//     return(
//         <>
//         <Header/>
//         <SDRHero/>
//         <SDRServices/>
//         <Footer/>
//         </>
//     )
// }

// export default SDRPage


"use client"

import { useState, useEffect } from "react"
import SDRHero from "../Components/SDRService/HeroSection"
import SDRServices from "../Components/SDRService/SDRServices"
import Footer from "../Components/Footer"
import Header from "../Components/Header"

function SDRPage() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  // Verificar se há preferência salva no localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("darkMode")
    if (savedTheme) {
      setIsDarkMode(JSON.parse(savedTheme))
    }
  }, [])

  // Aplicar a classe dark no documento
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
    // Salvar preferência no localStorage
    localStorage.setItem("darkMode", JSON.stringify(isDarkMode))
  }, [isDarkMode])

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <>
      <Header toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      <SDRHero />
      <SDRServices />
      <Footer />
    </>
  )
}

export default SDRPage
