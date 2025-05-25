// import CopywritingHero from "../Components/Copywriter/HeroCopy";
// import WhatICreate from "../Components/Copywriter/OQueEuFaco";
// import SalesStrategies from "../Components/Copywriter/SalesStrategies";
// import Footer from "../Components/Footer";
// import Header from "../Components/Header";
// function CopywriterPage(){
//     return(
//         <>
//         <Header/>
//         <CopywritingHero/>
//         <WhatICreate/>
//         <SalesStrategies/>
//         <Footer/>
//         </>
//     )
// }

// export default CopywriterPage


"use client"

import { useState, useEffect } from "react"
import CopywritingHero from "../Components/Copywriter/HeroCopy"
import WhatICreate from "../Components/Copywriter/OQueEuFaco"
import SalesStrategies from "../Components/Copywriter/SalesStrategies"
import Footer from "../Components/Footer"
import Header from "../Components/Header"

function CopywriterPage() {
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
      <CopywritingHero />
      <WhatICreate />
      <SalesStrategies />
      <Footer />
    </>
  )
}

export default CopywriterPage
