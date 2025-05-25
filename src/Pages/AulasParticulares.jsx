// import TeachingHero from "../Components/AulasParticulares/Aulas"
// import WhatYouWillLearn from "../Components/AulasParticulares/OqVaiAprender"
// import OpportunitySection from "../Components/AulasParticulares/Oportunidades"
// import PrivateLessonsPricing from "../Components/AulasParticulares/SectioPricing"
// import Header from "../Components/Header"
// import Footer from "../Components/Footer"
// function TelaAulas() {
//   return (
//     <div className="overflow-x-hidden">
//       <Header/>
//       <TeachingHero />
//       <WhatYouWillLearn />
//       <OpportunitySection />
//       <PrivateLessonsPricing/>
//       <Footer/>
//     </div>
//   )
// }

// export default TelaAulas

"use client"

import { useState, useEffect } from "react"
import TeachingHero from "../Components/AulasParticulares/Aulas"
import WhatYouWillLearn from "../Components/AulasParticulares/OqVaiAprender"
import OpportunitySection from "../Components/AulasParticulares/Oportunidades"
import PrivateLessonsPricing from "../Components/AulasParticulares/SectioPricing"
import Header from "../Components/Header"
import Footer from "../Components/Footer"

function TelaAulas() {
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
    <div className="overflow-x-hidden">
      <Header toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      <TeachingHero />
      <WhatYouWillLearn />
      <OpportunitySection />
      <PrivateLessonsPricing />
      <Footer />
    </div>
  )
}

export default TelaAulas
