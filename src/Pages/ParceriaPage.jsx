// import PartnershipsHero from "../Components/Parcerias/HeroParceria";
// import ServicesOffered from "../Components/Parcerias/ServicesParceria";
// import PartnershipSection from "../Components/Parcerias/CTASectionParceria";
// import Footer from "../Components/Footer";
// import Header from "../Components/Header";
// function ParceriaPage(){
//     return(
//         <>
//         <Header/>
//         <PartnershipsHero/>
//         <ServicesOffered/>
//         <PartnershipSection/>
//         <Footer/>
//         </>
//     )
// }
// export default ParceriaPage;

"use client"

import { useState, useEffect } from "react"
import PartnershipsHero from "../Components/Parcerias/HeroParceria"
import ServicesOffered from "../Components/Parcerias/ServicesParceria"
import PartnershipSection from "../Components/Parcerias/CTASectionParceria"
import Footer from "../Components/Footer"
import Header from "../Components/Header"

function ParceriaPage() {
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
      <PartnershipsHero />
      <ServicesOffered />
      <PartnershipSection />
      <Footer />
    </>
  )
}

export default ParceriaPage
